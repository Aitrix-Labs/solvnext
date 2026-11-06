import fs from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Connect, type Plugin } from 'vite'

const enquiriesFile = path.resolve('enquiries.json')

type Enquiry = {
  id: string
  receivedAt: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  message: string
}

function readBody(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk)
      if (Buffer.concat(chunks).length > 20_000) {
        reject(new Error('too-large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function send(res: ServerResponse, status: number, body: { success: boolean; message: string }) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function text(value: unknown, max: number) {
  return String(value ?? '').trim().slice(0, max)
}

function contactApi(): Plugin {
  const handle: Connect.NextHandleFunction = async (req, res, next) => {
    const url = req.url?.split('?')[0]
    if (url !== '/api/contact') {
      next()
      return
    }
    if (req.method !== 'POST') {
      send(res, 405, { success: false, message: 'Use POST to send a message.' })
      return
    }

    let payload: Record<string, unknown>
    try {
      payload = JSON.parse(await readBody(req)) as Record<string, unknown>
    } catch {
      send(res, 400, { success: false, message: 'That message could not be read. Please try again.' })
      return
    }

    if (text(payload.honeypot, 200)) {
      send(res, 200, { success: true, message: 'Thanks. A Solvnext producer will reply within two hours.' })
      return
    }

    const enquiry: Enquiry = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      receivedAt: new Date().toISOString(),
      firstName: text(payload.firstName, 50),
      lastName: text(payload.lastName, 50),
      email: text(payload.email, 100),
      phone: text(payload.phone, 20),
      company: text(payload.company, 100),
      projectType: text(payload.projectType, 80),
      budget: text(payload.budget, 40),
      message: text(payload.message, 2000),
    }

    if (!enquiry.firstName || !enquiry.lastName || !enquiry.projectType || !enquiry.message) {
      send(res, 400, { success: false, message: 'Please fill in every required field.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
      send(res, 400, { success: false, message: 'Please enter a valid email address.' })
      return
    }

    const existing: Enquiry[] = fs.existsSync(enquiriesFile)
      ? (JSON.parse(fs.readFileSync(enquiriesFile, 'utf8')) as Enquiry[])
      : []
    existing.push(enquiry)
    fs.writeFileSync(enquiriesFile, JSON.stringify(existing, null, 2))

    send(res, 200, {
      success: true,
      message: 'Thanks. A Solvnext producer will reply within two hours.',
    })
  }

  return {
    name: 'solvnext-contact-api',
    configureServer(server) {
      server.middlewares.use(handle)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle)
    },
  }
}

export default defineConfig({
  plugins: [react(), contactApi()],
  server: {
    port: 5180,
    strictPort: true,
  },
})
