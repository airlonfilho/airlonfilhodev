import { motion } from 'framer-motion'
import { useEffect } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

const links = [
  {
    title: 'WhatsApp',
    label: 'Vamos conversar sobre seu projeto',
    href: 'https://wa.me/5588996644768?text=Olá%2C%20Airlon!%20Quero%20conversar%20sobre%20um%20projeto.',
    icon: MessageCircle,
    featured: true,
  },
  {
    title: 'Meu site',
    label: 'Conheça meus serviços',
    href: 'https://airlonfilho.dev',
    icon: Globe2,
  },
  {
    title: 'LinkedIn',
    label: 'Experiência e conexões',
    href: 'https://linkedin.com/in/airlonfilho',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    label: 'Código e projetos abertos',
    href: 'https://github.com/airlonfilho',
    icon: Github,
  },
  {
    title: 'Instagram',
    label: 'Bastidores e rotina',
    href: 'https://instagram.com/airlonfilhodev',
    icon: Instagram,
  },
]

const projects = [
  {
    number: '01',
    title: 'Hitlab',
    description: 'Campanhas musicais que conectam artistas, bandas e creators.',
    tech: 'Plataforma • Music Tech',
    href: 'https://hitlab.app.br/',
  },
  {
    number: '02',
    title: 'Tera Gestão',
    description: 'Plataforma de gestão criada para organizar processos e resultados.',
    tech: 'Sistema • Gestão',
    href: 'https://gestao.teramarketingeconteudo.com.br/landing',
  },
]

const reveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

function BioPage() {
  useEffect(() => {
    document.title = 'Airlon Filho — Bio & Links'
  }, [])

  return (
    <main className="bio-page">
      <div className="noise" aria-hidden="true" />
      <div className="bio-grid" aria-hidden="true" />
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

      <motion.header className="bio-header" {...reveal}>
        <a className="brand" href="#top" aria-label="Airlon Filho — início">
          AF<span>.</span>
        </a>
        <span className="header-label"></span>
        <a className="header-cta" href="/">
          Ver site completo <ArrowRight size={15} />
        </a>
      </motion.header>

      <div className="bio-shell" id="top">
        <section className="content-column">
          <motion.div className="intro-block" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <div className="section-label">Links principais</div>
            <h2>Escolha por onde<br /><em>quer começar.</em></h2>
            <p>Todos os meus links importantes, em um só lugar.</p>
          </motion.div>

          <div className="link-list">
            {links.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  className={`link-card ${link.featured ? 'featured' : ''}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6 }}
                >
                  <div className="link-icon"><Icon size={20} /></div>
                  <div className="link-copy">
                    <strong>{link.title}</strong>
                    <span>{link.label}</span>
                  </div>
                  <ArrowDownRight className="link-arrow" size={20} />
                </motion.a>
              )
            })}
          </div>

          <motion.div className="projects-block" {...reveal} transition={{ ...reveal.transition, delay: 0.48 }}>
            <div className="projects-heading">
              <div>
                <div className="section-label">Projetos selecionados</div>
                <h3>Produtos em destaque.</h3>
              </div>
              <Sparkles size={19} />
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                  <div className="project-top">
                    <span>{project.number}</span>
                    <ArrowDownRight size={18} />
                  </div>
                  <div>
                    <small>{project.tech}</small>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="profile-column">
          <motion.div className="profile-card" {...reveal} transition={{ ...reveal.transition, delay: 0.58 }}>
            <div className="profile-topline">
              <span className="available"><i /> Disponível para projetos</span>
              <span className="profile-index"></span>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-ring">
                <img src="https://avatars.githubusercontent.com/u/32520985?v=4" alt="Airlon Filho" />
              </div>
              <div className="portrait-badge"><Code2 size={16} /></div>
            </div>

            <div className="profile-copy">
              <div className="eyebrow"><span /> Por trás dos projetos</div>
              <h1>Airlon <em>Filho.</em></h1>
              <p>
                Desenvolvedor full stack que transforma ideias em sites e sistemas claros, rápidos e feitos para gerar resultado.
              </p>
              <div className="location"><MapPin size={14} /> Ceará, Brasil</div>
            </div>

            <div className="profile-skills">
              <span>Angular</span>
              <span>React</span>
              <span>Spring Boot</span>
              <span>TypeScript</span>
            </div>
          </motion.div>
        </section>
      </div>

      <motion.footer {...reveal} transition={{ ...reveal.transition, delay: 0.65 }}>
        <span>© {new Date().getFullYear()} Airlon Filho</span>
        <span>Sites e sistemas sob medida.</span>
      </motion.footer>
    </main>
  )
}

function LandingPage() {
  useEffect(() => {
    document.title = 'Airlon Filho — Desenvolvedor Full Stack'
  }, [])

  return (
    <main className="landing-page">
      <div className="noise" aria-hidden="true" />
      <div className="bio-grid" aria-hidden="true" />
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

      <motion.header className="bio-header landing-header" {...reveal}>
        <a className="brand" href="/" aria-label="Airlon Filho — início">
          AF<span>.</span>
        </a>
        <a className="header-cta" href="/bio">
          Link na bio <ArrowRight size={15} />
        </a>
      </motion.header>

      <motion.section className="landing-hero" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
        <div className="section-label">Desenvolvimento full stack</div>
        <h1>
          Sites e sistemas que transformam ideias em <em>resultado.</em>
        </h1>
        <p>
          Soluções digitais claras, rápidas e feitas sob medida para o seu negócio.
        </p>
        <div className="landing-actions">
          <a
            className="landing-primary"
            href="https://wa.me/5588996644768?text=Olá%2C%20Airlon!%20Quero%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            Vamos conversar <ArrowDownRight size={18} />
          </a>
          <a className="landing-secondary" href="/bio">
            Ver todos os links <ArrowRight size={17} />
          </a>
        </div>
      </motion.section>
    </main>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return path === '/bio' ? <BioPage /> : <LandingPage />
}
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  Layers3,
  Menu,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { lazy, Suspense, useEffect } from 'react'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const BioPage = lazy(() => import('./pages/BioPage'))

const routes = {
  '/': {
    component: LandingPage,
    title: 'Airlon Filho — Sites e Sistemas sob medida',
    description:
      'Sites e sistemas sob medida para negócios que querem vender mais, automatizar processos e crescer com tecnologia.',
  },
  '/bio': {
    component: BioPage,
    title: 'Airlon Filho — Bio & Links',
    description: 'Links, projetos e contato de Airlon Filho.',
  },
} as const

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const route = routes[pathname as keyof typeof routes] ?? routes['/']
  const Page = route.component

  useEffect(() => {
    document.title = route.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', route.description)
  }, [route])

  return (
    <Suspense fallback={<div className="page-loading" aria-label="Carregando página" />}>
      <Page />
    </Suspense>
  )
}
