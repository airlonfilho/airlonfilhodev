import { motion } from 'framer-motion'
import '../styles/bio.css'
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
    href: '/',
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
    description: 'Sistema de gestão operacional para agências e equipes de marketing.',
    tech: 'Sistema • Gestão',
    href: 'https://gestao.teramarketingeconteudo.com.br/landing',
  },
]

const reveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

export default function BioPage() {
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
        <span className="header-label">Designer & Developer</span>
        <a className="header-cta" href="/">
          Ver site completo <ArrowRight size={15} />
        </a>
      </motion.header>

      <div className="bio-shell" id="top">
        <section className="profile-column">
          <motion.div className="profile-card" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <div className="profile-topline">
              <span className="available"><i /> Disponível para projetos</span>
              <span className="profile-index">01 / BIO</span>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-ring">
                <img src="https://avatars.githubusercontent.com/u/32520985?v=4" alt="Airlon Filho" />
              </div>
              <div className="portrait-badge"><Code2 size={16} /></div>
            </div>

            <div className="profile-copy">
              <div className="eyebrow"><span /> Olá, eu sou</div>
              <h1>Airlon<br /><em>Filho.</em></h1>
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

        <section className="content-column">
          <motion.div className="intro-block" {...reveal} transition={{ ...reveal.transition, delay: 0.15 }}>
            <div className="section-label">Links principais</div>
            <h2>Ideias digitais que<br /><em>movem negócios.</em></h2>
            <p>Escolha por onde quer começar.</p>
          </motion.div>

          <div className="link-list">
            {links.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  className={`link-card ${link.featured ? 'featured' : ''}`}
                  href={link.href}
                  target={link.href.startsWith('/') ? undefined : '_blank'}
                  rel={link.href.startsWith('/') ? undefined : 'noreferrer'}
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
      </div>

      <motion.footer {...reveal} transition={{ ...reveal.transition, delay: 0.65 }}>
        <span>© {new Date().getFullYear()} Airlon Filho</span>
        <span>Sites e sistemas sob medida.</span>
      </motion.footer>
    </main>
  )
}
