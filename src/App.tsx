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
    text: 'Landing pages e sites institucionais rápidos e responsivos, criados para transformar visitantes em clientes.',
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
          <div className="eyebrow"><span /> +5 anos criando sites & sistemas sob medida</div>
          <h1>
            Sites e sistemas que<br />
            <em>vendem por você.</em>
          </h1>
          <p>
            Projeto e desenvolvo experiências digitais sob medida para pequenos negócios e empresas que querem vender mais, organizar processos e crescer com tecnologia confiável.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero meu site ou sistema <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href="#projetos">
              Ver projetos <ArrowDown size={17} />
            </a>
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

      </section>

      <section className="proof-strip" aria-label="Diferenciais">
        <div><strong>+5 anos</strong><span>de experiência</span></div>
        <div><strong>1:1</strong><span>contato direto comigo</span></div>
        <div><strong>Full stack</strong><span>do design ao deploy</span></div>
        <div><strong>Bancos & consultorias</strong><span>padrão de mercado</span></div>
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
            <span><Check size={16} /> Mais vendas e oportunidades</span>
            <span><Check size={16} /> Uma presença digital que gera confiança</span>
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
          <p>Você fala direto com quem pensa, desenha e desenvolve — sem agência, sem intermediários. São mais de 5 anos de experiência em consultorias e bancos, aplicados ao seu projeto com o mesmo padrão de qualidade.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Vamos conversar <ArrowRight size={17} /></a>
        </motion.div>
        <div className="why-grid">
          {[
            [Sparkles, 'Visão de produto', 'Cada escolha parte do resultado que você quer alcançar.'],
            [Code2, 'Qualidade técnica', 'Código no padrão que aprendi em bancos e consultorias, pronto para crescer sem virar dor de cabeça.'],
            [MessageCircle, 'Comunicação direta', 'Conversa clara, acompanhamento próximo e nenhuma enrolação.'],
            [ShieldCheck, 'Entrega confiável', 'Segurança e testes no nível que o mercado financeiro exige, antes de qualquer publicação.'],
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
