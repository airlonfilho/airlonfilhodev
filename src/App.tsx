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
