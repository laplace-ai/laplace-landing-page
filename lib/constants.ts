import {
  Truck,
  Radio,
  Database,
  Box,
  Brain,
  AppWindow,
  type LucideIcon,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'

/* ───────────────────────────────────────
   Digital Twin Framework Layers
   ─────────────────────────────────────── */

export interface FrameworkLayer {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  examples?: string[]
}

export function useFrameworkLayers(): FrameworkLayer[] {
  const { t } = useI18n()

  return [
    {
      id: 'physical',
      title: t('framework.layer.physical'),
      subtitle: t('framework.layer.physical.sub'),
      description: t('framework.layer.physical.desc'),
      icon: Truck,
      examples: [t('framework.ex.fleet'), t('framework.ex.branches'), t('framework.ex.cargo'), t('framework.ex.routes')],
    },
    {
      id: 'systems',
      title: t('framework.layer.systems'),
      subtitle: t('framework.layer.systems.sub'),
      description: t('framework.layer.systems.desc'),
      icon: Radio,
      examples: ['TMS', 'GPS', 'IoT', 'ELD'],
    },
    {
      id: 'data',
      title: t('framework.layer.data'),
      subtitle: t('framework.layer.data.sub'),
      description: t('framework.layer.data.desc'),
      icon: Database,
      examples: [t('framework.ex.sync'), t('framework.ex.validation'), t('framework.ex.quality')],
    },
    {
      id: 'model',
      title: t('framework.layer.model'),
      subtitle: t('framework.layer.model.sub'),
      description: t('framework.layer.model.desc'),
      icon: Box,
      examples: [t('framework.ex.vehicles'), t('framework.ex.branches'), t('framework.ex.cargo'), t('framework.ex.routes')],
    },
    {
      id: 'intelligence',
      title: t('framework.layer.intelligence'),
      subtitle: t('framework.layer.intelligence.sub'),
      description: t('framework.layer.intelligence.desc'),
      icon: Brain,
      examples: ['AI', 'ML', t('framework.ex.simulator')],
    },
    {
      id: 'application',
      title: t('framework.layer.application'),
      subtitle: t('framework.layer.application.sub'),
      description: t('framework.layer.application.desc'),
      icon: AppWindow,
      examples: ['Dashboard', t('framework.ex.prediction'), t('framework.ex.simulator')],
    },
  ]
}

// Keep static export for backward compat (won't be translated)
export const FRAMEWORK_LAYERS: FrameworkLayer[] = [
  {
    id: 'physical',
    title: 'Camada Fisica',
    subtitle: 'Physical Layer',
    description: 'A operacao real: caminhoes, cargas, filiais, motoristas e rotas.',
    icon: Truck,
    examples: ['Frota', 'Filiais', 'Cargas', 'Rotas'],
  },
  {
    id: 'systems',
    title: 'Sistemas Logisticos',
    subtitle: 'Logistics Systems',
    description: 'TMS, telemetria, rastreamento GPS, sensores IoT e coletores de dados.',
    icon: Radio,
    examples: ['TMS', 'GPS', 'IoT', 'ELD'],
  },
  {
    id: 'data',
    title: 'Camada de Dados',
    subtitle: 'Data Layer',
    description: 'Banco de dados, sincronizacao em tempo real, validacao e qualidade dos dados.',
    icon: Database,
    examples: ['Sincronizacao', 'Validacao', 'Qualidade'],
  },
  {
    id: 'model',
    title: 'Modelo Digital',
    subtitle: 'Digital Model',
    description: 'Replica digital de cada veiculo, filial, carga e rota da sua operacao.',
    icon: Box,
    examples: ['Veiculos', 'Filiais', 'Cargas', 'Rotas'],
  },
  {
    id: 'intelligence',
    title: 'Inteligencia',
    subtitle: 'Intelligence Layer',
    description: 'Inteligencia artificial, machine learning, otimizacao e simulacao de cenarios.',
    icon: Brain,
    examples: ['IA', 'ML', 'Otimizacao', 'Simulacao'],
  },
  {
    id: 'application',
    title: 'Aplicacoes',
    subtitle: 'Application Layer',
    description: 'Dashboards, predicao de perda, simulador de cenarios e torre de controle.',
    icon: AppWindow,
    examples: ['Dashboard', 'Predicao', 'Simulador'],
  },
]

/* ───────────────────────────────────────
   Team
   ─────────────────────────────────────── */

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Pedro Bacelar',
    role: 'CEO & Co-founder',
    image: '/images/co-founders/pedro-bacelar.png',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/p-bacelar/',
  },
  {
    name: 'Gabriel Gelli',
    role: 'CTO & Co-founder',
    image: '/images/co-founders/gabriel-gelli.png',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/gabrielgelli/',
  },
]

/* ───────────────────────────────────────
   Partners
   ─────────────────────────────────────── */

export interface Partner {
  name: string
  logo?: string
  logoDark?: string
  logoLight?: string
}

export const PARTNERS: Partner[] = [
  {
    name: 'Fábrica do Futuro',
    logoDark: '/images/partners/dark_fabrica do futuro white.png',
    logoLight: '/images/partners/light_fabrica_futuro.png',
  },
  {
    name: 'NVIDIA Inception',
    logo: '/images/partners/nvidia-inception-program-badge-rgb-for-screen.jpg',
  },
]
