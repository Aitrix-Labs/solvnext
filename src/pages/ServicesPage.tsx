import { ContactSection } from '../components/ContactSection'
import { ServicesSection } from '../components/ServicesSection'

export function ServicesPage() {
  return (
    <>
      <ServicesSection ctaTo="/contact" ctaLabel="Start Your Project" />
      <ContactSection />
    </>
  )
}
