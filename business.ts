export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  whatsappTopic: string;
}

export interface WorkCase {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  spanClass: string;
  aspectClass: string;
}

export interface PillarItem {
  index: string;
  title: string;
  detail: string;
}

export const BUSINESS_INFO = {
  headerBrandFirst: 'Carlos',
  headerBrandSecond: 'Serralheiro',
  brandName: 'Carlos Serralheria e Manutenção',
  legalName: 'Carlos Roberto Cardoso Junior',
  cnpj: '69.752.105/0001-01',
  address: 'Rua Aracaju, 150',
  cityState: 'Uberaba - MG',
  phoneDisplay: '34 99794-8468',
  whatsappDigits: '5534997948468',
  heroSlogan: 'Transformando ideias em realidade!',
  tagline: 'Qualidade, Compromisso e Resultados!',
  servicesFooterLine: 'Seu projeto em boas mãos!',
  weldHeading: 'Solda com Qualidade',
  weldSubheading: 'Força, durabilidade e acabamento impecável.',
  weldClosing: 'Do pequeno ao grande projeto, conte com a nossa expertise!',
  mission:
    'Entregar serviços de serralheria e manutenção com qualidade, segurança e pontualidade, superando as expectativas dos nossos clientes.',
  vision:
    'Ser referência em soluções metálicas em Uberaba e região, reconhecida pela excelência, inovação e confiança.',
  missionClosing: 'Construindo juntos um futuro mais sólido!',
};

export function buildWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Olá, Carlos! Vi o site da Carlos Serralheria e Manutenção e gostaria de solicitar um orçamento em Uberaba - MG.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${text}`;
}

export const PILLARS: PillarItem[] = [
  {
    index: '01',
    title: 'Qualidade Garantida',
    detail: 'Soldagem firme, materiais selecionados e acabamento alinhado ao projeto.',
  },
  {
    index: '02',
    title: 'Compromisso com o Cliente',
    detail: 'Atendimento direto com quem executa, do orçamento à entrega final.',
  },
  {
    index: '03',
    title: 'Pontualidade',
    detail: 'Prazos claros e execução organizada para não atrasar sua obra.',
  },
  {
    index: '04',
    title: 'Segurança em Primeiro Lugar',
    detail: 'Estruturas dimensionadas com rigor para uso residencial, comercial e industrial.',
  },
];

export const WELD_DIFFERENTIALS: string[] = [
  'Equipamentos modernos',
  'Profissionais qualificados',
  'Serviço sob medida',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'soldas',
    index: '01',
    title: 'Soldas em Geral',
    tagline: 'Precisão e resistência em cada detalhe.',
    summary:
      'Soldagem estrutural e reparos técnicos em aço carbono e inox com força, durabilidade e acabamento impecável.',
    highlights: [
      'Equipamentos modernos para soldagem limpa e resistente',
      'Recuperação de peças, dutos, curvas e conexões metálicas',
      'Atendimento sob medida na oficina ou no local da obra',
    ],
    whatsappTopic: 'Soldas em Geral',
  },
  {
    id: 'estruturas',
    index: '02',
    title: 'Estruturas Metálicas',
    tagline: 'Projetos robustos para sua obra.',
    summary:
      'Fabricação e montagem de estruturas para galpões, coberturas, mezaninos e ampliações com alto padrão de segurança.',
    highlights: [
      'Dimensionamento estrutural para vãos residenciais e comerciais',
      'Fabricação de treliças, pilares, vigas e suportes sob medida',
      'Montagem firme com alinhamento e prumo rigorosos',
    ],
    whatsappTopic: 'Estruturas Metálicas',
  },
  {
    id: 'depositos-tanques',
    index: '03',
    title: 'Depósitos e Tanques',
    tagline: 'Soluções seguras para seu negócio.',
    summary:
      'Fabricação, reforço e manutenção de reservatórios, depósitos, roscas transportadoras e caldeiraria leve.',
    highlights: [
      'Tanques metálicos, conexões flangeadas e bocais sob especificação',
      'Roscas helicoidais, moegas e dutos industriais',
      'Vedação e reforços estruturais para operação contínua',
    ],
    whatsappTopic: 'Depósitos e Tanques',
  },
  {
    id: 'garagens',
    index: '04',
    title: 'Garagens e Puxadinhos',
    tagline: 'Coberturas e estruturas personalizadas.',
    summary:
      'Coberturas metálicas sob medida para garagens, varandas e áreas externas com aproveitamento inteligente do espaço.',
    highlights: [
      'Estruturas leves para garagens, varandas e áreas gourmet',
      'Preparação para telhas termoacústicas, zinco ou policarbonato',
      'Projeto personalizado para a fachada do seu imóvel',
    ],
    whatsappTopic: 'Garagens e Puxadinhos',
  },
  {
    id: 'pintura',
    index: '05',
    title: 'Pintura e Acabamento',
    tagline: 'Beleza e proteção para o seu projeto.',
    summary:
      'Preparação de superfície, fundo anticorrosivo e pintura técnica para máxima durabilidade contra sol e chuva.',
    highlights: [
      'Lixamento, limpeza e aplicação de primer anticorrosivo',
      'Acabamento uniforme em esmalte sintético ou pintura industrial',
      'Proteção prolongada para portões, grades e estruturas expostas',
    ],
    whatsappTopic: 'Pintura e Acabamento',
  },
  {
    id: 'manutencao',
    index: '06',
    title: 'Pequenos Serviços e Manutenção',
    tagline: 'Atendimento ágil e soluções sob medida.',
    summary:
      'Reparos rápidos, reforços e ajustes em portões, grades, fechaduras, suportes e estruturas em toda Uberaba.',
    highlights: [
      'Ajuste e reforço de portões, dobradiças, fechaduras e grades',
      'Corrimãos, suportes, escadas metálicas e proteções',
      'Agilidade no atendimento residencial e comercial',
    ],
    whatsappTopic: 'Pequenos Serviços e Manutenção',
  },
];

export const WORK_CASES: WorkCase[] = [
  {
    id: 'tanque-prj603',
    title: 'Conjunto Metálico e Tanque Industrial',
    category: 'Depósitos & Tanques',
    description:
      'Montagem completa com múltiplos bocais flangeados, anéis estruturais e soldagem de alta vedação.',
    image: '/assets/aistudio/IMG_20181001_120707174_90476eb2_90476eb2.jpg',
    imageAlt: 'Tanque metálico industrial montado sobre berços na oficina',
    spanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'curvas-segmentadas',
    title: 'Curvas Segmentadas em Aço',
    category: 'Solda de Precisão',
    description:
      'Traçagem exata em gomos e cordões de solda contínuos para tubulações e dutos sob medida.',
    image: '/assets/aistudio/bcfdf519bd709d512b3ed301ba5fe43f_0_10a54f10_10a54f10.jpeg',
    imageAlt: 'Duas curvas metálicas segmentadas soldadas sobre mesa de aço',
    spanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
  },
  {
    id: 'roscas-helicoidais',
    title: 'Roscas Transportadoras Helicoidais',
    category: 'Fabricação sob Medida',
    description:
      'Eixos tubulares com helicoides conformados e soldados passo a passo para transporte pesado.',
    image: '/assets/aistudio/IMG_20180925_171154259_c7be0fdc_c7be0fdc.jpg',
    imageAlt: 'Duas roscas helicoidais metálicas alinhadas no piso da oficina',
    spanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
  },
  {
    id: 'grade-conica',
    title: 'Estrutura Cônica e Gradeamento',
    category: 'Estruturas Metálicas',
    description:
      'Conjunto estrutural com travamentos radiais, anéis de reforço e esquadro controlado.',
    image: '/assets/aistudio/IMG_20180621_191133486_81b3499c_81b3499c.jpg',
    imageAlt: 'Estrutura cônica metálica gradeada fabricada na serralheria',
    spanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[16/10]',
  },
];
