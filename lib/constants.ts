import {
  Truck,
  Radio,
  Database,
  Box,
  Brain,
  AppWindow,
  type LucideIcon,
} from 'lucide-react'

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
    role: 'Co-founder & CEO',
    image: '/images/co-founders/pedro-bacelar.jpg',
    bio: 'Engenheiro mecatronico pela Poli-USP. Pesquisador no laboratorio de Industria 4.0 da Fabrica do Futuro.',
    linkedin: 'https://www.linkedin.com/in/pedro-bacelar/',
  },
  {
    name: 'Gabriel Gelli',
    role: 'Co-founder & CTO',
    image: '/images/co-founders/gabriel-gelli.jpg',
    bio: 'Engenheiro pela Poli-USP. Lidera a arquitetura tecnologica e as solucoes de otimizacao da Laplace.',
    linkedin: 'https://www.linkedin.com/in/gabriel-gelli/',
  },
]

/* ───────────────────────────────────────
   Partners
   ─────────────────────────────────────── */

export interface Partner {
  name: string
  logo?: string
}

export const PARTNERS: Partner[] = [
  { name: 'Fabrica do Futuro' },
  { name: 'NVIDIA Inception' },
]

/* ───────────────────────────────────────
   Navigation
   ─────────────────────────────────────── */

export const NAV_LINKS = [
  { label: 'Framework', href: '#framework' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Parceiros', href: '#parceiros' },
]
