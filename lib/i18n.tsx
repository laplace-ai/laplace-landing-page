'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'pt' | 'en'

interface I18nContextType {
  locale: Locale
  toggleLocale: () => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.product': 'Produto',
    'nav.founders': 'Fundadores',
    'nav.cta': 'Fale Conosco',

    // Hero
    'hero.tagline': 'Digital Twin para Redes Logísticas',

    // Value
    'value.heading': 'Imagine uma réplica virtual de toda sua rede logística.',

    // Framework
    'framework.label': 'Arquitetura',
    'framework.heading': 'O Digital Twin',
    'framework.description': 'Seis camadas que transformam dados brutos em decisões inteligentes.',
    'framework.layer.physical': 'Camada Física',
    'framework.layer.physical.sub': 'Physical Layer',
    'framework.layer.physical.desc': 'A base de tudo: sua frota, filiais, motoristas, cargas e rotas. Cada ativo físico da operação logística é o ponto de partida do gêmeo digital.',
    'framework.layer.systems': 'Sistemas Logísticos',
    'framework.layer.systems.sub': 'Logistics Systems',
    'framework.layer.systems.desc': 'Os sistemas que capturam dados da operação em tempo real — TMS, rastreadores GPS, sensores IoT e telemetria veicular. A ponte entre o mundo físico e o digital.',
    'framework.layer.data': 'Camada de Dados',
    'framework.layer.data.sub': 'Data Layer',
    'framework.layer.data.desc': 'Ingestão contínua, limpeza e validação de dados operacionais. Milhões de registros sincronizados diariamente com rastreabilidade e qualidade garantidas.',
    'framework.layer.model': 'Modelo Digital',
    'framework.layer.model.sub': 'Digital Model',
    'framework.layer.model.desc': 'Uma réplica digital fiel da sua rede logística. Cada veículo, filial, carga e rota tem seu gêmeo digital, atualizado continuamente com dados reais.',
    'framework.layer.intelligence': 'Inteligência',
    'framework.layer.intelligence.sub': 'Intelligence Layer',
    'framework.layer.intelligence.desc': 'Modelos de machine learning que analisam padrões históricos, preveem riscos como perda de carga e otimizam decisões de consolidação e roteirização.',
    'framework.layer.application': 'Aplicações',
    'framework.layer.application.sub': 'Application Layer',
    'framework.layer.application.desc': 'Onde as decisões acontecem: dashboards de visibilidade operacional, alertas preditivos de perda, simulador de cenários e torre de controle em tempo real.',

    // Layer examples
    'framework.ex.fleet': 'Frota',
    'framework.ex.branches': 'Filiais',
    'framework.ex.cargo': 'Cargas',
    'framework.ex.routes': 'Rotas',
    'framework.ex.sync': 'Sincronização',
    'framework.ex.validation': 'Validação',
    'framework.ex.quality': 'Qualidade',
    'framework.ex.vehicles': 'Veículos',
    'framework.ex.prediction': 'Predição',
    'framework.ex.simulator': 'Simulador',

    // Platform
    'platform.label': 'Plataforma',
    'platform.heading': 'Veja em Ação',
    'platform.description': 'Simule cenários, consolide cargas de forma inteligente, otimize rotas e antecipe riscos — tudo em uma única plataforma construída sobre o gêmeo digital da sua operação.',

    // Team
    'team.label': 'Fundadores',
    'team.heading': 'Quem está construindo',
    'team.pedro.tagline': '0 → 1 · Builder · Growth',
    'team.pedro.education': 'Engenheiro Mecatrônico, Poli-USP',
    'team.pedro.bio': 'Construiu um Digital Twin para sistemas de máquinas durante seu mestrado no Politecnico di Milano, vencendo a competição Siemens MindSphere. Aos 18 anos, fundou sua primeira startup e desenvolveu um dispositivo IoT capaz de prever falhas em tanques de fermentação da Ambev.',
    'team.gabriel.tagline': '1 → 100 · Inventor · Maker',
    'team.gabriel.education': 'Engenheiro Mecatrônico, Poli-USP',
    'team.gabriel.bio': 'Aos 17 anos, construiu e patenteou um dispenser autônomo de água, vencendo a feira nacional de ciências FEBRACE e sendo selecionado para a ISEF. Também foi vencedor do reality show Batalha Makers Brasil.',

    // Partners
    'partners.label': 'Parceiros',
    'partners.heading': 'Quem apoia',

    // Footer
    'footer.heading': 'Vamos Conversar',
    'footer.description': 'Quer entender como o Digital Twin pode transformar sua operação?',
    'footer.copyright': 'Laplace Log. Todos os direitos reservados.',
    'footer.location': 'São Paulo, Brasil',
  },
  en: {
    // Navbar
    'nav.product': 'Product',
    'nav.founders': 'Founders',
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.tagline': 'Digital Twin for Logistics Networks',

    // Value
    'value.heading': 'Imagine a virtual replica of your entire logistics network.',

    // Framework
    'framework.label': 'Architecture',
    'framework.heading': 'The Digital Twin',
    'framework.description': 'Six layers that transform raw data into intelligent decisions.',
    'framework.layer.physical': 'Physical Layer',
    'framework.layer.physical.sub': 'Physical Layer',
    'framework.layer.physical.desc': 'The foundation: your fleet, branches, drivers, cargo and routes. Every physical asset in the logistics operation is the starting point for building the digital twin.',
    'framework.layer.systems': 'Logistics Systems',
    'framework.layer.systems.sub': 'Data Acquisition',
    'framework.layer.systems.desc': 'The systems that capture operational data in real-time — TMS, GPS trackers, IoT sensors and vehicle telematics. The bridge between the physical and digital worlds.',
    'framework.layer.data': 'Data Layer',
    'framework.layer.data.sub': 'Data Layer',
    'framework.layer.data.desc': 'Continuous ingestion, cleaning and validation of operational data. Millions of records synced daily with full traceability and guaranteed quality.',
    'framework.layer.model': 'Digital Model',
    'framework.layer.model.sub': 'Digital Model',
    'framework.layer.model.desc': 'A faithful digital replica of your logistics network. Every vehicle, branch, cargo and route has its digital twin, continuously updated with real data.',
    'framework.layer.intelligence': 'Intelligence',
    'framework.layer.intelligence.sub': 'Intelligence Layer',
    'framework.layer.intelligence.desc': 'Machine learning models that analyze historical patterns, predict risks like cargo loss, and optimize consolidation and routing decisions.',
    'framework.layer.application': 'Applications',
    'framework.layer.application.sub': 'Application Layer',
    'framework.layer.application.desc': 'Where decisions happen: operational visibility dashboards, predictive loss alerts, scenario simulator and real-time control tower.',

    // Layer examples
    'framework.ex.fleet': 'Fleet',
    'framework.ex.branches': 'Branches',
    'framework.ex.cargo': 'Cargo',
    'framework.ex.routes': 'Routes',
    'framework.ex.sync': 'Sync',
    'framework.ex.validation': 'Validation',
    'framework.ex.quality': 'Quality',
    'framework.ex.vehicles': 'Vehicles',
    'framework.ex.prediction': 'Prediction',
    'framework.ex.simulator': 'Simulator',

    // Platform
    'platform.label': 'Platform',
    'platform.heading': 'See it in Action',
    'platform.description': 'Simulate scenarios, consolidate cargo intelligently, optimize routes and anticipate risks — all in one platform built on the digital twin of your operation.',

    // Team
    'team.label': 'Founders',
    'team.heading': 'Who is building',
    'team.pedro.tagline': '0 → 1 · Builder · Growth',
    'team.pedro.education': 'Mechatronics Engineer, Poli-USP',
    'team.pedro.bio': 'Built a Digital Twin for machine systems during his masters at Politecnico di Milano, winning the Siemens MindSphere competition. At 18, founded his first startup and developed an IoT device capable of predicting failures in Ambev fermentation tanks.',
    'team.gabriel.tagline': '1 → 100 · Inventor · Maker',
    'team.gabriel.education': 'Mechatronics Engineer, Poli-USP',
    'team.gabriel.bio': 'At 17, built and patented an autonomous water dispenser, winning the national science fair FEBRACE and being selected for ISEF. Also won the reality show Batalha Makers Brasil.',

    // Partners
    'partners.label': 'Partners',
    'partners.heading': 'Who supports us',

    // Footer
    'footer.heading': "Let's Talk",
    'footer.description': 'Want to understand how a Digital Twin can transform your operation?',
    'footer.copyright': 'Laplace Log. All rights reserved.',
    'footer.location': 'São Paulo, Brazil',
  },
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[locale][key] ?? key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
