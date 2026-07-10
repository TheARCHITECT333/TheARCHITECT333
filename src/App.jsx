import { useEffect, useState } from 'react'
import { ThemeProvider } from './theme.jsx'
import config from './config.js'
import useScrollReveal from './hooks/useScrollReveal.js'
import useScrambleText from './hooks/useScrambleText.js'
import Nav from './components/Nav.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import ParticlesBackground from './components/ParticlesBackground.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  // Apply config-driven document metadata and accent color.
  useEffect(() => {
    if (config.meta?.title) document.title = config.meta.title
    if (config.meta?.accentColor) {
      document.documentElement.style.setProperty('--accent', config.meta.accentColor)
    }
  }, [])

  // Content is bundled, so it's available on first render — set up the
  // scroll-reveal and hover-scramble effects immediately.
  useScrollReveal(true)
  useScrambleText(true)

  return (
    <ThemeProvider>
      <ParticlesBackground />
      <ScrollProgress />
      <Nav hero={config.hero} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero data={config.hero} />
        {config.about && <About data={config.about} />}
        {config.skills?.length > 0 && <Skills data={config.skills} />}
        {config.experience?.length > 0 && <Experience data={config.experience} />}
        {config.projects?.length > 0 && <Projects data={config.projects} />}
        {config.contact && <Contact data={config.contact} socials={config.socials} />}
      </main>
      <Footer data={config.footer} socials={config.socials} />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} config={config} />
    </ThemeProvider>
  )
}
