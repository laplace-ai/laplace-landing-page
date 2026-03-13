import { Navbar } from '@/components/nav/navbar'
import { HeroSection } from '@/components/hero/hero-section'
import { ValueSection } from '@/components/value/value-section'
import { FrameworkSection } from '@/components/framework/framework-section'
import { TeamSection } from '@/components/team/team-section'
import { PartnersSection } from '@/components/partners/partners-section'
import { FooterSection } from '@/components/footer/footer-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <FrameworkSection />
        <TeamSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  )
}
