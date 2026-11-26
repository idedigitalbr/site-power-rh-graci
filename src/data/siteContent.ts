import { solucoesOficiais, servicosHubOficial, servicosDetalhadosOficiais, sobrePropostaOficial } from './servicosOficiais';

/**
 * ==============================================================================
 * POWERRH — SITE DATA & CONTENT (SINGLE SOURCE OF TRUTH)
 * ==============================================================================
 * Centraliza todo o conteúdo textual, dados numéricos, depoimentos, FAQs
 * e informações de contato em um objeto TypeScript fortemente tipado.
 * ==============================================================================
 */

export interface MetricItem {
  number: string;
  label: string;
  iconType: 'network' | 'people' | 'star' | 'chart' | 'handshake';
}

export interface PainPointItem {
  id: number;
  text: string;
  iconType: 'structure' | 'leadership' | 'succession' | 'growth';
}

export interface SolutionItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  iconType: 'culture' | 'leadership' | 'governance';
  slug: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  desc: string;
}

export interface CredentialItem {
  text: string;
  iconType: 'cert' | 'mentor' | 'industry' | 'star';
}

export interface DifferentialItem {
  name: string;
  title?: string;
  desc: string;
  iconType: 'star' | 'puzzle' | 'chart' | 'award';
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  serviceSlug?: string;
  serviceTag?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export interface FundamentoItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  iconType: 'purpose' | 'vision' | 'values';
  highlights: string[];
  accordionLabel?: string;
  accordionLabelOpen?: string;
}

export interface PilarAtuacaoItem {
  number: string;
  title: string;
  desc: string;
  detail: string;
  iconType: 'culture' | 'leadership' | 'governance' | 'advisory';
}

export interface ServiceScenarioItem {
  id: number;
  title: string;
  desc: string;
  iconType: 'bottleneck' | 'clash' | 'chaos' | 'turnover' | 'growth' | 'loneliness';
}

export interface ServiceModuleItem {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverables: string[];
  image?: string;
}

export interface ServiceMethodStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
}

export interface ServiceProfileItem {
  role: string;
  challenge: string;
  transformation: string;
}

export interface ServiceDifferentialItem {
  title: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  shortTitle: string;
  category: string;
  eyebrow: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    lead: string;
    badge: string;
    image: string;
    floatingBadge: string;
    pills: string[];
    ctaText: string;
    ctaHref: string;
  };
  scenarios: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceScenarioItem[];
  };
  modules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceModuleItem[];
  };
  method: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ServiceMethodStep[];
  };
  targetAudience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    profiles: ServiceProfileItem[];
  };
  differential: {
    eyebrow: string;
    title: string;
    lead: string;
    quote: string;
    founderName: string;
    founderRole: string;
    image: string;
    pillars: ServiceDifferentialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    desc: string;
    checklist: string[];
    image: string;
    ctaText: string;
    ctaHref: string;
  };
}

export interface ServicosHubCard {
  slug: string;
  number: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  highlights: string[];
  ctaLabel: string;
}

export interface ServicosHubData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    lead: string;
    floatingBadge: string;
    pills: string[];
    ctaText: string;
    ctaHref: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  cards: ServicosHubCard[];
  metodoUnificado: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ServiceMethodStep[];
  };
  cta: {
    heading: string;
    desc: string;
    checklist: string[];
    image: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const siteContent = {
  meta: {
    title: 'PowerRH — Advisory de Negócios e DHO | Graciete Corrêa',
    description: 'Advisory de Negócios e Consultoria em Desenvolvimento Humano e Organizacional (DHO), conectando estratégia, cultura, pessoas, processos e estrutura aos resultados.',
  },
  
  navigation: {
    brandName: 'PowerRH',
    brandTagline: 'Pessoas que transformam negócios',
    links: [
      { label: 'Home', href: '#inicio', active: true },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Contato', href: '/contato' },
    ],
    cta: {
      text: 'ENTRAR EM CONTATO',
      href: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+PowerRH',
    },
  },

  hero: {
    eyebrow: 'ADVISORY DE NEGÓCIOS E DESENVOLVIMENTO HUMANO',
    headlinePrefix: 'Empresas evoluem',
    headlineHighlight: 'pessoas e estratégia',
    headlineSuffix: 'caminham juntas.',
    subtitle: 'Conectamos decisões sobre pessoas, cultura, processos e estrutura aos resultados do negócio, a partir do pensamento sistêmico.',
    ctaText: 'ADVISORY ESTRATÉGICO',
    ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+Advisory+Estrat%C3%A9gico+com+a+PowerRH',
    miniBadges: [
      { line1: 'VISÃO', line2: 'ESTRATÉGICA' },
      { line1: 'FOCO EM', line2: 'RESULTADOS' },
      { line1: 'SOLUÇÕES', line2: 'SOB MEDIDA' },
      { line1: 'PARCERIA', line2: 'DE LONGO PRAZO' },
    ],
    form: {
      title: 'Fale com a nossa especialista',
      desc: 'Receba um diagnóstico inicial para a sua empresa.',
      buttonText: 'SOLICITAR DIAGNÓSTICO →',
      securityText: 'Seus dados estão seguros conosco.',
    },
  },

  metrics: [
    {
      number: '+30',
      label: 'anos de experiência executiva',
      iconType: 'chart',
    },
    {
      number: '2.000+',
      label: 'colaboradores sob gestão',
      iconType: 'people',
    },
    {
      number: '2',
      label: 'operações de M&A na trajetória',
      iconType: 'handshake',
    },
    {
      number: '2',
      label: 'certificações GPTW em operações lideradas',
      iconType: 'star',
    },
  ] as MetricItem[],

  s2Consultoria: {
    eyebrow: 'CONSULTORIA ESTRATÉGICA EM PESSOAS',
    headlinePrefix: 'Resultados que',
    headlineMiddle: 'constroem',
    headlineHighlight: 'legados.',
    description: 'A PowerRH atua com Advisory de Negócios e Consultoria em DHO. Apoiamos empresários, sócios e executivos a definir prioridades, desenvolver lideranças e estruturar a gestão com uma visão sistêmica do negócio.',
    form: {
      title: 'Fale com a nossa especialista',
      desc: 'Receba um diagnóstico inicial para a sua empresa.',
      buttonText: 'SOLICITAR DIAGNÓSTICO →',
      securityText: 'Seus dados estão seguros conosco.',
    },
  },

  quandoHora: {
    eyebrow: 'QUANDO É HORA',
    title: 'Quando é a hora certa de contar com um apoio estratégico de advisory?',
    items: [
      {
        id: 1,
        text: 'A empresa cresce, mas papéis, processos e responsabilidades ainda não estão claros.',
        iconType: 'structure',
      },
      {
        id: 2,
        text: 'A liderança precisa definir prioridades e desenvolver autonomia para tomar decisões.',
        iconType: 'leadership',
      },
      {
        id: 3,
        text: 'A família empresária deseja preparar sucessores e organizar a transição de responsabilidades.',
        iconType: 'succession',
      },
      {
        id: 4,
        text: 'Avaliações, feedbacks e indicadores precisam gerar desenvolvimento e acompanhamento.',
        iconType: 'growth',
      },
    ] as PainPointItem[],
  },

  solucoes: {
    eyebrow: 'NOSSAS SOLUÇÕES',
    title: 'Três pilares integrados para fortalecer a gestão e os resultados.',
    items: solucoesOficiais.map((s, i) => ({
      id: (['cultura','lideranca','governanca'] as const)[i],
      slug: s.slug,
      title: s.title,
      desc: s.desc,
      image: s.image,
      alt: s.title + ' — PowerRH',
      iconType: (['culture','leadership','governance'] as const)[i],
    })) as SolutionItem[],
  },

  processo: {
    eyebrow: 'COMO TRABALHAMOS',
    title: 'Um processo claro, próximo e eficaz.',
    steps: [
      {
        step: '01',
        title: 'Diagnóstico',
        desc: 'Escuta confidencial e leitura sistêmica da realidade, cultura e desafios do negócio.',
      },
      {
        step: '02',
        title: 'Planejamento',
        desc: 'Desenho sob medida de prioridades, metas e soluções alinhadas ao momento da empresa.',
      },
      {
        step: '03',
        title: 'Implementação',
        desc: 'Atuação sênior, próxima e discreta lado a lado com o empresário e a liderança.',
      },
      {
        step: '04',
        title: 'Evolução',
        desc: 'Acompanhamento contínuo dos resultados, feedbacks e ajustes para sustentar o legado.',
      },
    ] as ProcessStepItem[],
  },

  sobre: {
    eyebrow: 'SOBRE A FUNDADORA',
    name: 'Graciete Corrêa',
    title: 'ADVISOR ESPECIALISTA EM ESTRATÉGIA DE NEGÓCIOS E PESSOAS',
    bio: 'Executiva de Gente e Gestão, Advisor Comportamental e de Negócios e fundadora da PowerRH, com +30 anos de experiência executiva. Apoia empresários, sócios e executivos a conectar a estratégia às decisões sobre cultura, pessoas, processos e estrutura.',
    ctaText: 'CONHEÇA SUA TRAJETÓRIA →',
    ctaHref: '/sobre',
    floatingPill: '+30 anos de experiência executiva.',
    image: 'assets/imagens-diversas/fotos_graci_ia/02_SOBRE_GRACIETE/Imagem do ChatGPT 7 de out. de 2026, 19_18_59-1.webp',
    credentials: [
      { text: 'Advisory de Negócios e Consultoria em DHO', iconType: 'cert' },
      { text: 'Planejamento estratégico, cultura e sucessão familiar', iconType: 'mentor' },
      { text: 'Desenvolvimento de lideranças e performance', iconType: 'industry' },
      { text: 'Processos, estrutura organizacional e RH estratégico', iconType: 'star' },
    ] as CredentialItem[],
  },

  diferenciais: {
    eyebrow: 'POR QUE POWER RH —',
    title: 'Diferenciais que fazem a diferença.',
    items: [
      {
        name: 'Visão Estratégica',
        title: 'Visão Estratégica',
        desc: 'Conectamos pessoas aos objetivos do negócio.',
        iconType: 'star',
      },
      {
        name: 'Abordagem Personalizada',
        title: 'Abordagem Personalizada',
        desc: 'Soluções sob medida para a sua realidade.',
        iconType: 'puzzle',
      },
      {
        name: 'Foco em Resultados',
        title: 'Foco em Resultados',
        desc: 'Projetos práticos e mensuráveis.',
        iconType: 'chart',
      },
      {
        name: 'Experiência Comprovada',
        title: 'Experiência Comprovada',
        desc: '+30 anos de experiência transformando organizações.',
        iconType: 'award',
      },
    ] as DifferentialItem[],
    destaque: {
      title: 'Pessoas no centro. Resultados no futuro.',
      desc: 'Estratégia e humanidade caminhando juntas para negócios mais fortes.',
      image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/10_conversa_executiva_terraco.webp',
    },
  },

  depoimentos: {
    eyebrow: 'RECOMENDAÇÕES PROFISSIONAIS',
    title: 'O que profissionais que trabalharam com Graciete dizem',
    items: [
      {
        quote: 'Especialista em implantação de governança corporativa e em processos de sucessão',
        author: 'Walter Garcia',
        role: 'CFO · Recomendação profissional no LinkedIn',
        serviceSlug: 'advisory-negocios-cultura',
        serviceTag: 'Advisory de Negócios e Cultura',
      },
      {
        quote: 'Voltaria a tê-la em meu time sem qualquer tipo de hesitação.',
        author: 'Robson Lodi',
        role: 'Gestor de Remuneração e Benefícios · Recomendação no LinkedIn',
        serviceSlug: 'processos-estrutura-organizacional',
        serviceTag: 'Processos e Estrutura Organizacional',
      },
      {
        quote: 'Sempre se destacou pela sua visão estratégica transformada em execução com excelência.',
        author: 'Gilbert Asdrúbal Hernández Lourenço',
        role: 'Executivo comercial · Recomendação no LinkedIn',
        serviceSlug: 'pessoas-lideranca-performance',
        serviceTag: 'Pessoas, Liderança e Performance',
      },
    ] as TestimonialItem[],
  },

  faq: {
    eyebrow: 'DÚVIDAS FREQUENTES',
    title: 'Perguntas frequentes',
    desc: 'Confira as respostas para as dúvidas mais comuns sobre o formato de trabalho da PowerRH.',
    ctaText: 'ENTRAR EM CONTATO',
    ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+a+PowerRH',
    items: [
      {
        question: 'Quais tipos de empresas a PowerRH atende?',
        answer: 'Apoiamos empresários, sócios e executivos, especialmente de empresas familiares ou empresas de dono que desejam profissionalizar a gestão, desenvolver lideranças, organizar processos e preparar sucessores.',
        isOpenDefault: true,
      },
      {
        question: 'Como começa um projeto com a PowerRH?',
        answer: 'Começamos compreendendo os desafios do negócio, o que favorece ou limita as entregas e quais prioridades precisam ser estabelecidas, definindo o escopo conforme o momento da empresa.',
      },
      {
        question: 'Os três pilares podem ser trabalhados em conjunto?',
        answer: 'Sim. Estratégia e cultura, pessoas e performance, processos e estrutura são frentes conectadas pelo pensamento sistêmico e podem ser combinadas conforme as necessidades da organização.',
      },
    ] as FaqItem[],
  },

  ctaBanner: {
    heading: 'Vamos conversar sobre<br />o <span class="highlight-gold">futuro da sua empresa?</span>',
    desc: 'A PowerRH conecta estratégia, pessoas e processos para desenvolver a gestão e fortalecer a continuidade do negócio.',
    image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/59_reuniao_fechamento.webp',
    checklist: [
      'Diagnóstico inicial sem compromisso',
      'Conversa direta com a especialista',
      'Soluções sob medida para a sua realidade',
    ],
    ctaText: 'ADVISORY ESTRATÉGICO →',
    ctaHref: '/contato',
  },

  footer: {
    brandTitle: 'PowerRH',
    brandDesc: 'Advisory de Negócios e Consultoria em Desenvolvimento Humano e Organizacional (DHO), integrando estratégia, pessoas e processos.',
    socialLinks: [
      { name: 'Instagram', href: 'https://www.instagram.com/gracietecoach/' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gracietecorreacoach/' },
      { name: 'WhatsApp', href: 'https://wa.me/5591992992091' },
    ],
    navLinks: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre a Fundadora', href: '#sobre' },
      { label: 'Nossas Soluções', href: '#solucoes' },
      { label: 'Diferenciais', href: '#diferenciais' },
      { label: 'Dúvidas Frequentes', href: '#faq' },
    ],
    solutionLinks: [
      { label: 'Advisory de Negócios e Cultura', href: '/servicos/advisory-negocios-cultura' },
      { label: 'Pessoas, Liderança e Performance', href: '/servicos/pessoas-lideranca-performance' },
      { label: 'Processos e Estrutura Organizacional', href: '/servicos/processos-estrutura-organizacional' },
    ],
    contact: {
      address: 'Travessa Mauriti, 1822 • Belém — PA',
      phone: '(91) 99299-2091',
      email: 'contato@powerrh.com.br',
    },
    copyright: '© 2026 PowerRH. Todos os direitos reservados.',
    tagline: 'Pessoas que transformam negócios.',
  },

  sobrePage: {
    proposta: sobrePropostaOficial,
    meta: {
      title: 'Sobre a PowerRH — Advisory de Negócios e DHO',
      description: 'Conheça a PowerRH, que atua com Advisory de Negócios e DHO, apoiando empresários e executivos com pensamento sistêmico, liderança e processos.',
    },
    hero: {
      eyebrow: 'QUEM SOMOS · ADVISORY DE NEGÓCIOS E DHO',
      titlePrefix: 'Advisory de Negócios',
      titleHighlight: 'gestão estratégica',
      titleSuffix: 'e desenvolvimento humano.',
      lead: 'A PowerRH atua com Advisory de Negócios e Consultoria em DHO para desenvolver a visão estratégica das lideranças e conectar as decisões sobre pessoas, cultura, processos e estrutura aos resultados.',
      rootsBadge: 'Propósito & Futuro',
      rootsTitle: 'Pessoas no centro, resultados no horizonte.',
      rootsCopy: 'Atuamos especialmente com empresas familiares e empresas de dono que buscam profissionalizar a gestão, preparar sucessores e preservar seu legado.',
    },
    historia: {
      eyebrow: 'TRAJETÓRIA & AUTORIDADE',
      title: 'Mais de três décadas transformando organizações de dentro para fora.',
      lead: 'Nossa fundadora Graciete Corrêa construiu sua história onde a liderança é testada de verdade: na indústria, no varejo, na gestão de crises e em complexas operações societárias.',
      paragraphs: [
        'Ao longo de +30 anos de experiência executiva, Graciete liderou áreas de Recursos Humanos e Desenvolvimento Organizacional em grandes companhias, gerindo diretamente mais de 2.000 profissionais e conduzindo projetos de alta complexidade estrutural.',
        'Sua trajetória inclui a condução de 2 operações de Fusões e Aquisições (M&A), integrando culturas e processos de forma harmoniosa, e a conquista de 2 certificações GPTW (Great Place to Work) em operações sob sua liderança direta.',
        'A PowerRH é a consolidação de todo esse aprendizado corporativo colocado a serviço de empresários que buscam estruturar suas empresas para o próximo ciclo de crescimento, sucessão familiar sólida e perenidade.',
      ],
      founderName: 'Graciete Corrêa',
      founderRole: 'Fundadora & Consultora Estratégica Principal',
      floatingBadge: '+30 anos de experiência executiva em gestão de pessoas',
      quote: 'Empresas não são feitas apenas de processos e números. São feitas de gente com sonhos, dores e potenciais. Quando você cuida com estratégia de quem faz acontecer, o resultado é uma consequência inevitável.',
      image: 'assets/imagens-diversas/fotos_graci_ia/02_SOBRE_GRACIETE/55_retrato_autoridade.webp',
      credentials: [
        { text: 'Especialista em Desenvolvimento Organizacional, Liderança e Cultura', iconType: 'cert' },
        { text: 'Condução de 2 operações complexas de Fusões e Aquisições (M&A)', iconType: 'industry' },
        { text: 'Mentoria executiva para fundadores, herdeiros e conselhos familiares', iconType: 'mentor' },
        { text: '2 certificações GPTW (Great Place to Work) em operações lideradas', iconType: 'star' },
      ] as CredentialItem[],
    },
    indicadores: [
      {
        number: '+30',
        label: 'Anos de experiência executiva no mercado corporativo',
        iconType: 'chart',
      },
      {
        number: '2.000+',
        label: 'Colaboradores geridos e desenvolvidos diretamente',
        iconType: 'people',
      },
      {
        number: '2',
        label: 'Grandes operações de M&A estruturadas e integradas',
        iconType: 'handshake',
      },
      {
        number: '2',
        label: 'Certificações GPTW em operações sob sua liderança',
        iconType: 'star',
      },
      {
        number: '100%',
        label: 'Metodologia sob medida para a maturidade da sua empresa',
        iconType: 'network',
      },
    ] as MetricItem[],
    fundamentos: {
      eyebrow: 'O QUE NOS GUIA',
      title: 'Fundamentos que constroem<br />nossa atuação.',
      subtitle: 'Princípios inegociáveis que norteiam cada diagnóstico, mentoria e projeto desenvolvido pela PowerRH.',
      items: [
        {
          id: 'proposito',
          badge: 'PROPÓSITO & MISSÃO',
          title: 'Missão',
          desc: 'Despertar e estruturar o potencial humano nas empresas, alinhando cultura, liderança e processos para que os negócios prosperem com solidez, lucratividade e significado duradouro.',
          iconType: 'purpose',
          accordionLabel: 'Ver compromissos práticos',
          accordionLabelOpen: 'Ocultar compromissos',
          highlights: [
            'Conexão entre estratégia e comportamento humano',
            'Desenvolvimento de ambientes seguros e produtivos',
            'Crescimento com respeito à essência da empresa',
          ],
        },
        {
          id: 'visao',
          badge: 'ONDE QUEREMOS CHEGAR',
          title: 'Visão',
          desc: 'Ser a consultoria estratégica de referência na profissionalização da gestão, governança e desenvolvimento de lideranças para empresas em expansão e grupos familiares no Brasil.',
          iconType: 'vision',
          accordionLabel: 'Ver metas e diferenciais',
          accordionLabelOpen: 'Ocultar diferenciais',
          highlights: [
            'Impacto comprovado na retenção e no engajamento',
            'Referência em transições de sucessão geracional',
            'Reconhecimento pela entrega executiva de alto nível',
          ],
        },
        {
          id: 'valores',
          badge: 'NOSSOS PILARES ÉTICOS',
          title: 'Valores',
          desc: 'Princípios que definem como nos relacionamos com cada cliente, líder e colaborador:',
          iconType: 'values',
          accordionLabel: 'Ver pilares de conduta',
          accordionLabelOpen: 'Ocultar pilares',
          highlights: [
            'Pragmatismo — decisões objetivas e soluções aplicáveis à realidade do negócio',
            'Resultados — foco em entregas mensuráveis e evolução sustentável',
            'Senioridade — +30 anos de vivência executiva à mesa das decisões',
            'Confidencialidade — ética, discrição e sigilo absoluto em cada projeto',
            'Humanismo — pessoas no centro de cada transformação organizacional',
            'Perenidade — preparação de lideranças e sucessores para preservar o legado',
          ],
        },
      ] as FundamentoItem[],
    },
    triade: {
      eyebrow: 'COMO CONECTAMOS',
      title: 'A Tríade Estratégica PowerRH.',
      desc: 'Não atuamos com soluções genéricas ou modelos engessados. O verdadeiro salto corporativo acontece exatamente na intersecção equilibrada entre três forças vitais:',
      coreBadge: 'PowerRH',
      coreTagline: 'Pessoas que transformam negócios',
      pilares: [
        {
          name: 'Pessoas',
          desc: 'Cultura viva, escuta qualificada, clima de confiança e desenvolvimento de lideranças conscientes.',
        },
        {
          name: 'Estratégia',
          desc: 'Alinhamento claro aos objetivos do negócio, indicadores de desempenho, processos e governança.',
        },
        {
          name: 'Resultados',
          desc: 'Retorno financeiro sustentável, produtividade com saúde emocional e perpetuidade do legado.',
        },
      ],
    },
    pilares: {
      eyebrow: 'TRÊS PILARES DE ATUAÇÃO',
      title: 'Nossa atuação integrada.',
      subtitle: 'Advisory de Negócios, desenvolvimento humano e estrutura organizacional conectados à estratégia do negócio.',
      items: solucoesOficiais.map((s, i) => ({
        number: String(i + 1).padStart(2, '0'),
        title: s.title,
        desc: s.desc,
        detail: s.modules.map((m) => m[0]).join(' · '),
        iconType: (['advisory','leadership','culture'] as const)[i],
      })) as PilarAtuacaoItem[],
    },
    cta: {
      eyebrow: 'VAMOS CONVERSAR',
      title: 'Construa o futuro da sua empresa com apoio especializado.',
      desc: 'Agende uma conversa estratégica com Graciete Corrêa e descubra como transformar seus desafios de pessoas em vantagens competitivas sustentáveis.',
      image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/05_sala_com_vista_porto.webp',
      buttonText: 'SOLICITAR DIAGNÓSTICO →',
      whatsappText: 'FALAR NO WHATSAPP',
      whatsappHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20consultoria%20com%20a%20PowerRH',
    },
  },

  /**
   * ============================================================================
   * PÁGINA HUB GERAL DE SOLUÇÕES & SERVIÇOS (/servicos)
   * ============================================================================
   */
  servicosHub: servicosHubOficial as ServicosHubData,
  servicos: servicosDetalhadosOficiais as unknown as Record<string, ServiceDetail>,
};
