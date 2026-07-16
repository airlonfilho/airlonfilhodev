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

const whatsappUrl =
  'https://wa.me/5588996644768?text=Olá%2C%20Airlon!%20Quero%20conversar%20sobre%20um%20projeto.'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

const services = [
  {
    number: '01',
    icon: MousePointer2,
    title: 'Sites que vendem',
    text: 'Landing pages e sites institucionais rápidos, responsivos e pensados para transformar visitas em conversas.',
    items: ['Copy estratégica', 'Design responsivo', 'SEO e performance'],
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Sistemas sob medida',
    text: 'Soluções web desenhadas em torno do seu processo, para reduzir retrabalho e dar escala à operação.',
    items: ['Painéis administrativos', 'Automação de processos', 'Integrações e APIs'],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Evolução de produtos',
    text: 'Melhorias técnicas e visuais para produtos digitais que precisam crescer com segurança e velocidade.',
    items: ['Novas funcionalidades', 'Modernização de interface', 'Otimização técnica'],
  },
]

const projects = [
  {
    category: 'SaaS • Inteligência artificial',
    title: 'Concurseia',
    description: 'Uma plataforma inteligente para transformar a preparação para concursos em um processo mais claro e eficiente.',
    accent: 'project-orange',
    tag: 'Produto digital',
  },
  {
    category: 'Sistema • Gestão',
    title: 'Psicoagenda',
    description: 'Agenda e gestão de atendimentos para profissionais de psicologia, com uma experiência simples do início ao fim.',
    accent: 'project-light',
    tag: 'Sistema web',
  },
]

const faqs = [
  {
    question: 'Quanto custa desenvolver um projeto?',
    answer: 'O investimento depende do escopo, das integrações e do prazo. Depois de uma conversa breve, você recebe uma proposta clara com etapas, entregáveis e valores — sem surpresas.',
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Uma landing page costuma levar de 2 a 4 semanas. Sistemas e projetos maiores têm cronograma definido após o levantamento do escopo.',
  },
  {
    question: 'Você também cuida do design?',
    answer: 'Sim. O projeto inclui a experiência, a interface e o desenvolvimento. Você não precisa coordenar profissionais diferentes para tirar a ideia do papel.',
  },
  {
    question: 'Vou conseguir atualizar o site depois?',
    answer: 'Sim. Quando o projeto pede autonomia de conteúdo, entrego uma área de gestão simples e também explico como usar tudo.',
  },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <a className="brand" href="#inicio" aria-label="Airlon Filho — início">
        AF<span>.</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
        <a href="#processo" onClick={() => setOpen(false)}>Processo</a>
        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
      </nav>
      <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Falar sobre um projeto <ArrowRight size={16} />
      </a>
      <button
        className="menu-button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <Nav />

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow"><span /> Sites & sistemas sob medida</div>
          <h1>
            Ideias digitais que<br />
            <em>movem negócios.</em>
          </h1>
          <p>
            Eu projeto e desenvolvo experiências digitais que ajudam sua empresa a vender mais, organizar processos e crescer com tecnologia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero tirar minha ideia do papel <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href="#projetos">
              Ver projetos <ArrowDown size={17} />
            </a>
          </div>
          <div className="availability">
            <span className="status-dot" /> Agenda aberta para novos projetos
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="window-bar">
            <div><i /><i /><i /></div>
            <span>airlonfilho.dev</span>
          </div>
          <div className="mock-ui">
            <div className="mock-sidebar">
              <div className="mock-logo">A</div>
              <div className="mock-line small" />
              <div className="mock-line" />
              <div className="mock-line" />
            </div>
            <div className="mock-main">
              <span className="mock-label">VISÃO GERAL</span>
              <div className="mock-heading" />
              <div className="metrics">
                <div><b>+42%</b><span>conversões</span></div>
                <div><b>2.4x</b><span>mais rápido</span></div>
              </div>
              <div className="chart">
                {[30, 42, 38, 58, 52, 74, 88].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="floating-chip chip-one"><Code2 size={15} /> Código limpo</div>
          <div className="floating-chip chip-two"><Gauge size={15} /> Alta performance</div>
        </motion.div>

        <div className="hero-index" aria-hidden="true">01 / 06</div>
      </section>

      <section className="proof-strip" aria-label="Diferenciais">
        <div><strong>100%</strong><span>sob medida</span></div>
        <div><strong>1:1</strong><span>contato direto</span></div>
        <div><strong>Full stack</strong><span>do design ao deploy</span></div>
        <div><strong>Responsivo</strong><span>em qualquer tela</span></div>
      </section>

      <section className="intro section-shell">
        <motion.div className="section-kicker" {...fadeUp}>O que eu resolvo</motion.div>
        <motion.div className="intro-copy" {...fadeUp}>
          <h2>Seu negócio não precisa de <span>mais um site.</span></h2>
          <p>Precisa de uma ferramenta que trabalhe por ele.</p>
        </motion.div>
        <motion.div className="intro-detail" {...fadeUp}>
          <p>
            Tecnologia só faz sentido quando resolve um problema real. Por isso, cada projeto começa entendendo o seu negócio — e termina com uma solução bonita, rápida e pronta para gerar resultado.
          </p>
          <div className="benefit-list">
            <span><Check size={16} /> Menos tarefas manuais</span>
            <span><Check size={16} /> Mais oportunidades de venda</span>
            <span><Check size={16} /> Uma presença digital profissional</span>
          </div>
        </motion.div>
      </section>

      <section className="services section-shell" id="servicos">
        <motion.div className="section-heading" {...fadeUp}>
          <div>
            <div className="section-kicker">Serviços</div>
            <h2>Da primeira tela<br />à última linha de código.</h2>
          </div>
          <p>Estratégia, design e desenvolvimento reunidos em uma entrega completa.</p>
        </motion.div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                className={`service-card ${index === 0 ? 'featured' : ''}`}
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              >
                <div className="card-top">
                  <div className="service-icon"><Icon size={22} /></div>
                  <span>{service.number}</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}><Check size={14} /> {item}</li>)}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <motion.div className="process-title" {...fadeUp}>
          <div className="section-kicker light">Processo</div>
          <h2>Sem complicação.<br /><em>Sem caixa-preta.</em></h2>
          <p>Você acompanha as decisões e sabe exatamente em qual etapa o projeto está.</p>
        </motion.div>
        <div className="process-list">
          {[
            ['01', 'Imersão', 'Entendo o cenário, os objetivos e o que a solução precisa entregar.'],
            ['02', 'Estratégia & design', 'Organizo a experiência e transformo as ideias em uma interface clara.'],
            ['03', 'Desenvolvimento', 'Construo a solução com tecnologia moderna, segura e escalável.'],
            ['04', 'Lançamento', 'Testamos, publicamos e deixo tudo pronto para você usar e crescer.'],
          ].map(([number, title, text], index) => (
            <motion.div className="process-item" key={number} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight size={20} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <motion.div className="section-heading" {...fadeUp}>
          <div>
            <div className="section-kicker">Projetos selecionados</div>
            <h2>Soluções reais.<br /><em>Problemas reais.</em></h2>
          </div>
          <p>Produtos digitais pensados para tornar experiências e rotinas mais inteligentes.</p>
        </motion.div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className={`project-card ${project.accent}`} key={project.title} {...fadeUp}>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tag">{project.tag}</div>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-window">
                  <div className="visual-bar"><i /><i /><i /></div>
                  <div className="visual-body">
                    <div className="visual-nav" />
                    <div className="visual-content">
                      <div className="visual-title" />
                      <div className="visual-row">
                        <div /><div /><div />
                      </div>
                      <div className="visual-panel" />
                    </div>
                  </div>
                </div>
                <span className="project-number">0{index + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="why section-shell">
        <motion.div className="why-copy" {...fadeUp}>
          <div className="section-kicker">Por que trabalhar comigo</div>
          <h2>Seu projeto tratado como <em>negócio</em>, não como tarefa.</h2>
          <p>Você fala direto com quem pensa, desenha e desenvolve. Isso deixa as decisões mais rápidas e o resultado mais consistente.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Vamos conversar <ArrowRight size={17} /></a>
        </motion.div>
        <div className="why-grid">
          {[
            [Sparkles, 'Visão de produto', 'Cada escolha parte do resultado que você quer alcançar.'],
            [Code2, 'Qualidade técnica', 'Código organizado para evoluir sem virar um problema amanhã.'],
            [MessageCircle, 'Comunicação direta', 'Conversa clara, acompanhamento próximo e nenhuma enrolação.'],
            [ShieldCheck, 'Entrega confiável', 'Testes, segurança e atenção aos detalhes antes de publicar.'],
          ].map(([Icon, title, text], index) => {
            const WhyIcon = Icon as typeof Sparkles
            return (
              <motion.div className="why-card" key={title as string} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }}>
                <WhyIcon size={22} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <motion.div {...fadeUp}>
          <div className="section-kicker">Perguntas frequentes</div>
          <h2>Antes de começar,<br /><em>vale saber.</em></h2>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={faq.question} {...fadeUp}>
              <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}>
                <span>{faq.question}</span>
                <ChevronDown size={20} />
              </button>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell" id="contato">
        <div className="cta-orb" aria-hidden="true" />
        <motion.div {...fadeUp}>
          <span className="cta-label">Tem uma ideia em mente?</span>
          <h2>Vamos construir algo<br /><em>que faça diferença.</em></h2>
          <p>Me conte o que você precisa. Eu respondo com os próximos passos para transformar sua ideia em uma solução real.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Conversar no WhatsApp <MessageCircle size={18} />
          </a>
        </motion.div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <a className="brand footer-brand" href="#inicio">AF<span>.</span></a>
            <p>Sites e sistemas que movem negócios.</p>
          </div>
          <div className="footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="https://github.com/airlonfilho" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/airlonfilho" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Airlon Filho</span>
          <span>Desenvolvido com propósito no Ceará, Brasil.</span>
        </div>
        <div className="footer-word" aria-hidden="true">AIRLON</div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp">
        <MessageCircle size={22} />
      </a>
    </main>
  )
}

export default App
