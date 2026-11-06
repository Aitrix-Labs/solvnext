import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CosmicBackground } from './CosmicBackground'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <CosmicBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
