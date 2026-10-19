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
  avatar: string;
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
  highlights?: string[];
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
    title: 'PowerRH — Consultoria Estratégica em Pessoas | Graciete Corrêa',
    description: 'Estratégia, liderança e cultura para transformar o potencial humano em resultados reais e sustentáveis. Consultoria com mais de 15 anos de atuação.',
  },
  
  navigation: {
    brandName: 'PowerRH',
    brandTagline: 'Pessoas que transformam negócios',
    links: [
      { label: 'Home', href: '#inicio', active: true },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Contato', href: '#formulario-diagnostico' },
    ],
    cta: {
      text: 'ENTRAR EM CONTATO',
      href: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+PowerRH',
    },
  },

  hero: {
    eyebrow: 'CONSULTORIA ESTRATÉGICA EM PESSOAS',
    headlinePrefix: 'Empresas crescem',
    headlineHighlight: 'pessoas',
    headlineSuffix: 'evoluem.',
    subtitle: 'Estratégia, liderança e cultura para transformar o potencial humano em resultados reais e sustentáveis.',
    ctaText: 'ENTRAR EM CONTATO',
    ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+PowerRH',
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
      number: '30+',
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
    description: 'A PowerRH atua ao lado de empresários e famílias empresárias na profissionalização da gestão, no desenvolvimento de lideranças e na sucessão, unindo visão estratégica, experiência de mercado e um olhar profundamente humano.',
    form: {
      title: 'Fale com a nossa especialista',
      desc: 'Receba um diagnóstico inicial para a sua empresa.',
      buttonText: 'SOLICITAR DIAGNÓSTICO →',
      securityText: 'Seus dados estão seguros conosco.',
    },
  },

  quandoHora: {
    eyebrow: 'QUANDO É HORA',
    title: 'Quando é hora de contar com apoio estratégico?',
    items: [
      {
        id: 1,
        text: 'Sua empresa está crescendo e precisa estruturar a área de pessoas.',
        iconType: 'structure',
      },
      {
        id: 2,
        text: 'Há desafios de liderança ou de cultura que impactam os resultados.',
        iconType: 'leadership',
      },
      {
        id: 3,
        text: 'É momento de preparar a sucessão e garantir a continuidade do negócio.',
        iconType: 'succession',
      },
      {
        id: 4,
        text: 'Você quer levar sua empresa a um novo patamar com um time mais forte e engajado.',
        iconType: 'growth',
      },
    ] as PainPointItem[],
  },

  solucoes: {
    eyebrow: 'NOSSAS SOLUÇÕES',
    title: 'Soluções estratégicas para fortalecer cultura, liderança e legado.',
    items: [
      {
        id: 'cultura',
        title: 'Cultura Organizacional',
        desc: 'Conectamos pessoas, processos e cultura para sustentar o crescimento de forma humana e consistente.',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/12_reuniao_pequena_tres_pessoas.webp',
        alt: 'Cultura Organizacional - Conectando pessoas e processos',
        iconType: 'culture',
      },
      {
        id: 'lideranca',
        title: 'Líderes de Líderes',
        desc: 'Desenvolvemos líderes e times para elevar a performance e multiplicar resultados.',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/08_lideranca_people_culture.webp',
        alt: 'Líderes de Líderes - Capacitação executiva',
        iconType: 'leadership',
      },
      {
        id: 'governanca',
        title: 'Governança & Sucessão',
        desc: 'Preparamos pessoas e estruturas para um futuro sustentável.',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/10_conversa_executiva_terraco.webp',
        alt: 'Governança e Sucessão Familiar',
        iconType: 'governance',
      },
    ] as SolutionItem[],
  },

  processo: {
    eyebrow: 'COMO TRABALHAMOS',
    title: 'Um processo claro, próximo e eficaz.',
    steps: [
      {
        step: '01',
        title: 'Diagnóstico',
        desc: 'Entendemos sua realidade e desafios.',
      },
      {
        step: '02',
        title: 'Planejamento',
        desc: 'Desenhamos soluções personalizadas.',
      },
      {
        step: '03',
        title: 'Implementação',
        desc: 'Colocamos o plano em prática, lado a lado.',
      },
      {
        step: '04',
        title: 'Evolução',
        desc: 'Acompanhamos resultados e ajustes contínuos.',
      },
    ] as ProcessStepItem[],
  },

  sobre: {
    eyebrow: 'SOBRE A FUNDADORA',
    name: 'Graciete Corrêa',
    title: 'ESPECIALISTA EM ESTRATÉGIA DE PESSOAS',
    bio: 'Executiva e consultora com mais de 15 anos de experiência em desenvolvimento organizacional, liderança e cultura. Apaixonada por pessoas, acredita no poder de uma gestão mais humana e estratégica para conexões mais fortes e um futuro melhor.',
    ctaText: 'CONHEÇA MINHA HISTÓRIA →',
    ctaHref: '#formulario-diagnostico',
    floatingPill: 'Mais de 15 anos transformando pessoas e negócios.',
    image: 'assets/imagens-diversas/fotos_graci_ia/02_SOBRE_GRACIETE/Imagem do ChatGPT 7 de out. de 2026, 19_18_59-1.webp',
    credentials: [
      { text: 'Especialista em Desenvolvimento Organizacional e Liderança', iconType: 'cert' },
      { text: 'Consultora e Mentora de Executivos e Times', iconType: 'mentor' },
      { text: 'Atuação em diversos setores e portes de empresas', iconType: 'industry' },
      { text: 'Compromisso com resultados e impacto real', iconType: 'star' },
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
        desc: 'Mais de 25 anos transformando organizações.',
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
    eyebrow: 'DEPOIMENTOS',
    title: 'O que nossos clientes dizem',
    items: [
      {
        quote: 'A PowerRH nos ajudou a estruturar nossa liderança e a fortalecer nossa cultura. O impacto nos resultados foi evidente.',
        author: 'Mariana Lopes',
        role: 'CEO, Grupo Vértice',
        avatar: 'assets/imagens-diversas/avatar-mariana.png',
      },
      {
        quote: 'Profissionalismo, sensibilidade e visão estratégica. Uma parceria que realmente faz a diferença para o nosso negócio.',
        author: 'Roberto Almeida',
        role: 'Diretor, TechBrasil',
        avatar: 'assets/imagens-diversas/avatar-roberto.png',
      },
      {
        quote: 'A Graciete tem uma capacidade única de conectar pessoas, estratégia e resultados. Recomendo de olhos fechados.',
        author: 'Carla Mendes',
        role: 'Sócia, Mendes & Associados',
        avatar: 'assets/imagens-diversas/avatar-carla.png',
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
        answer: 'Atendemos empresas em fase de expansão, organizações familiares em processo de profissionalização e governança, e empresas de médio e grande porte que buscam desenvolver líderes e alinhar cultura com resultados.',
        isOpenDefault: true,
      },
      {
        question: 'Como funciona o diagnóstico inicial?',
        answer: 'O diagnóstico é uma sessão estratégica sem compromisso com a fundadora para mapear a situação atual de gestão de pessoas, identificar gargalos imediatos e estruturar os passos necessários para a evolução.',
      },
      {
        question: 'Os projetos são personalizados?',
        answer: 'Sim, 100% personalizados. Entendemos a realidade, maturidade e cultura de cada cliente para desenhar intervenções sob medida que gerem adesão real do time.',
      },
    ] as FaqItem[],
  },

  ctaBanner: {
    heading: 'Vamos conversar sobre<br />o <span class="highlight-gold">futuro da sua empresa?</span>',
    desc: 'Descubra como a PowerRH ajuda a sua empresa a crescer com líderes preparados e resultados sustentáveis.',
    image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/59_reuniao_fechamento.webp',
    checklist: [
      'Diagnóstico inicial sem compromisso',
      'Conversa direta com a especialista',
      'Soluções sob medida para a sua realidade',
    ],
    ctaText: 'ENTRAR EM CONTATO',
    ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+Graciete+da+PowerRH',
  },

  footer: {
    brandTitle: 'PowerRH',
    brandDesc: 'Consultoria estratégica em pessoas, liderança, cultura e governança para organizações que buscam crescimento sustentável e perene.',
    socialLinks: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
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
      { label: 'Cultura Organizacional', href: '#solucoes' },
      { label: 'Líderes de Líderes', href: '#solucoes' },
      { label: 'Governança & Sucessão', href: '#solucoes' },
      { label: 'Diagnóstico Gratuito', href: '#formulario-diagnostico' },
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
    meta: {
      title: 'Sobre Nós — PowerRH | Consultoria Estratégica em Pessoas & Governança',
      description: 'Conheça a PowerRH e a fundadora Graciete Corrêa: mais de 30 anos de liderança executiva unindo estratégia, cultura, governança e desenvolvimento humano para empresas perenes.',
    },
    hero: {
      eyebrow: 'QUEM SOMOS • CONSULTORIA ESTRATÉGICA EM PESSOAS',
      titlePrefix: 'Construindo legados humanos',
      titleHighlight: 'empresas',
      titleSuffix: 'perenes.',
      lead: 'A PowerRH nasceu para conectar a estratégia do negócio à potência das pessoas. Unimos mais de 30 anos de vivência corporativa executiva a um olhar sensível, prático e sob medida para cada cultura empresarial.',
      rootsBadge: 'Propósito & Futuro',
      rootsTitle: 'Pessoas no centro, resultados no horizonte.',
      rootsCopy: 'Fundada por Graciete Corrêa, a PowerRH atua ao lado de fundadores, executivos e famílias empresárias para profissionalizar a gestão sem perder a alma do negócio.',
    },
    historia: {
      eyebrow: 'TRAJETÓRIA & AUTORIDADE',
      title: 'Mais de três décadas transformando organizações de dentro para fora.',
      lead: 'Nossa fundadora Graciete Corrêa construiu sua história onde a liderança é testada de verdade: na indústria, no varejo, na gestão de crises e em complexas operações societárias.',
      paragraphs: [
        'Ao longo de mais de 30 anos de atuação executiva, Graciete liderou áreas de Recursos Humanos e Desenvolvimento Organizacional em grandes companhias, gerindo diretamente mais de 2.000 profissionais e conduzindo projetos de alta complexidade estrutural.',
        'Sua trajetória inclui a condução de 2 operações de Fusões e Aquisições (M&A), integrando culturas e processos de forma harmoniosa, e a conquista de 2 certificações GPTW (Great Place to Work) em operações sob sua liderança direta.',
        'A PowerRH é a consolidação de todo esse aprendizado corporativo colocado a serviço de empresários que buscam estruturar suas empresas para o próximo ciclo de crescimento, sucessão familiar sólida e perenidade.',
      ],
      founderName: 'Graciete Corrêa',
      founderRole: 'Fundadora & Consultora Estratégica Principal',
      floatingBadge: '30+ anos de liderança executiva em gestão de pessoas',
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
        number: '30+',
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
      title: 'Fundamentos que constroem nossa atuação.',
      subtitle: 'Princípios inegociáveis que norteiam cada diagnóstico, mentoria e projeto desenvolvido pela PowerRH.',
      items: [
        {
          id: 'proposito',
          badge: 'PROPÓSITO & MISSÃO',
          title: 'Missão',
          desc: 'Despertar e estruturar o potencial humano nas empresas, alinhando cultura, liderança e processos para que os negócios prosperem com solidez, lucratividade e significado duradouro.',
          iconType: 'purpose',
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
          highlights: [
            'Humanidade no centro de cada decisão',
            'Ética e confidencialidade inegociáveis',
            'Excelência prática e foco em resultados reais',
            'Parceria próxima e construção de legado',
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
      eyebrow: 'ÁREAS DE ATUAÇÃO',
      title: 'Onde atuamos com máxima precisão.',
      subtitle: 'Soluções desenhadas para os desafios reais da maturidade corporativa e da liderança executiva.',
      items: [
        {
          number: '01',
          title: 'Cultura & Clima Organizacional',
          desc: 'Diagnóstico de clima, alinhamento de valores corporativos e rituais que fortalecem o pertencimento e reduzem o turnover.',
          detail: 'Estruturação de áreas de RH e conexão de times aos objetivos da empresa.',
          iconType: 'culture',
        },
        {
          number: '02',
          title: 'Líderes de Líderes',
          desc: 'Formação e mentoria de executivos e liderança média para desenvolver visão sistêmica, comunicação assertiva e feedback produtivo.',
          detail: 'Transição de gestores operacionais para verdadeiros líderes estratégicos.',
          iconType: 'leadership',
        },
        {
          number: '03',
          title: 'Governança & Sucessão Familiar',
          desc: 'Apoio a fundadores e herdeiros na profissionalização da gestão, definição de papéis, acordos societários e conselhos.',
          detail: 'Continuidade saudável dos negócios sem rupturas nos laços familiares.',
          iconType: 'governance',
        },
        {
          number: '04',
          title: 'Advisory Estratégico & Mentoria',
          desc: 'Aconselhamento executivo direto para CEOs, sócios e diretores em momentos cruciais de tomada de decisão e expansão.',
          detail: 'Uma visão externa e experiente para clarear caminhos e mitigar riscos.',
          iconType: 'advisory',
        },
      ] as PilarAtuacaoItem[],
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
  servicosHub: {
    meta: {
      title: 'Soluções Estratégicas & Advisory Executivo | PowerRH Graciete Corrêa',
      description: 'Conheça as soluções da PowerRH: Cultura & Design Organizacional, Liderança de Líderes, Governança & Sucessão e Advisory Empresarial. Mais de 30 anos de prática corporativa real.',
    },
    hero: {
      eyebrow: 'PORTFÓLIO DE SOLUÇÕES & ADVISORY',
      titlePrefix: 'Soluções estratégicas para empresas que crescem com',
      titleHighlight: 'gestão madura',
      titleSuffix: 'e líderes preparados.',
      lead: 'A PowerRH combina mais de três décadas de vivência executiva em Gente e Gestão a uma atuação próxima ao empresário e à família empresária. Desenhamos arquiteturas organizacionais vivas, formamos sucessores e preparamos negócios para a perenidade.',
      floatingBadge: '4 frentes de atuação de alta senioridade executiva',
      pills: ['Cultura Organizacional', 'Liderança Estratégica', 'Governança Familiar', 'Advisory ao Fundador'],
      ctaText: 'CONVERSAR COM A ESPECIALISTA',
      ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conhecer+as+solu%C3%A7%C3%B5es+da+PowerRH',
    },
    intro: {
      eyebrow: 'NOSSO CAMPO DE ATUAÇÃO',
      title: 'Quatro frentes integradas para transformar pessoas em valor sustentável.',
      subtitle: 'Não observamos a empresa apenas pelos processos nem apenas pelas pessoas. Entendemos negócio, cultura, relações e liderança como partes do mesmo sistema vivo.',
      description: 'Cada solução foi estruturada para responder a momentos específicos da jornada de crescimento corporativo, eliminando gargalos estruturais e capacitando quem toma decisão.',
    },
    cards: [
      {
        slug: 'cultura-organizacional',
        number: '01',
        title: 'Cultura & Design Organizacional',
        category: 'ARQUITETURA & GENTE',
        desc: 'Conectamos pessoas, processos e cultura corporativa para sustentar o crescimento sem perder a essência do negócio.',
        image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/21_diagnostico_de_cultura.webp',
        highlights: [
          'Diagnóstico aprofundado de clima e valores vividos',
          'Design organizacional e arquitetura de papéis claros',
          'Engenharia de cargos, carreiras e salários (PCCS)',
          'Rituais de gestão, alinhamento e comunicação interna',
          'Integração cultural em processos de Fusões e Aquisições (M&A)',
        ],
        ctaLabel: 'CONHECER SOLUÇÃO',
      },
      {
        slug: 'lideranca-executiva',
        number: '02',
        title: 'Líderes de Líderes',
        category: 'PERFORMANCE & DESENVOLVIMENTO',
        desc: 'Desenvolvemos gestores operacionais em líderes estratégicos de alta maturidade capazes de multiplicar times e sustentar resultados.',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/08_lideranca_people_culture.webp',
        highlights: [
          'Assessment executivo e mapeamento de competências críticas',
          'Programa imersivo de formação ‘Líderes de Líderes’',
          'Planos de Desenvolvimento Individual (PDI) sob medida',
          'Mentoria executiva direta com Graciete Corrêa',
          'Capacitação em feedback produtivo e conversas difíceis',
        ],
        ctaLabel: 'CONHECER SOLUÇÃO',
      },
      {
        slug: 'governanca-e-sucessao',
        number: '03',
        title: 'Governança & Sucessão Familiar',
        category: 'CONTINUIDADE & LEGADO',
        desc: 'Conduzimos conversas complexas entre família, patrimônio e gestão com discrição, empatia e rigor metodológico.',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/41_fundador_e_sucessor.webp',
        highlights: [
          'Diagnóstico dos Três Círculos (Família, Propriedade e Empresa)',
          'Construção de Protocolo Familiar e regras societárias',
          'Preparação e mentoria de sucessores e do fundador',
          'Implantação de Conselhos Consultivos e de Administração',
          'Mediação neutra de divergências geracionais e entre sócios',
        ],
        ctaLabel: 'CONHECER SOLUÇÃO',
      },
      {
        slug: 'advisory-empresarial',
        number: '04',
        title: 'Advisory Empresarial & Apoio ao Decisor',
        category: 'ACONSELHAMENTO ESTRATÉGICO',
        desc: 'Aconselhamento executivo sênior, confidencial e neutro para empresários e CEOs em momentos de inflexão e decisões críticas.',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/19_advisory_empresaria.webp',
        highlights: [
          'Sounding board executivo e reuniões confidenciais com o fundador',
          'Aconselhamento estratégico em transições societárias e M&A',
          'Participação em comitês estratégicos e conselhos consultivos',
          'Segunda opinião neutra em momentos de crise ou expansão',
          'Diagnóstico de prontidão estratégica da alta liderança',
        ],
        ctaLabel: 'CONHECER SOLUÇÃO',
      },
    ] as ServicosHubCard[],
    metodoUnificado: {
      eyebrow: 'NOSSA METODOLOGIA',
      title: 'Um método estruturado em quatro etapas práticas.',
      subtitle: 'Sem modelos de gaveta ou teorias engessadas: presença executiva próxima e intervenções sob medida para o estágio de maturidade da sua empresa.',
      steps: [
        {
          step: '01',
          title: 'Diagnóstico & Escuta',
          desc: 'Imersão no contexto real do negócio, ouvindo fundadores, líderes e colaboradores para mapear gargalos e potenciais ocultos.',
          tag: 'Sem suposições prévias',
        },
        {
          step: '02',
          title: 'Desenho Sob Medida',
          desc: 'Estruturação do plano de intervenção personalizado, com entregáveis claros, cronograma pragmático e indicadores de sucesso.',
          tag: 'Respeito à essência',
        },
        {
          step: '03',
          title: 'Implantação Lado a Lado',
          desc: 'Condução ativa das transformações com facilitação de reuniões, mentorias, ajustes de processos e mediações decisórias.',
          tag: 'Presença no campo',
        },
        {
          step: '04',
          title: 'Sustentação & Evolução',
          desc: 'Instituição de rituais de governança e indicadores perenes para garantir que as melhorias permaneçam após o término do ciclo.',
          tag: 'Legado perene',
        },
      ] as ServiceMethodStep[],
    },
    cta: {
      heading: 'Descubra a solução ideal para<br />o <span class="highlight-gold">momento atual da sua empresa</span>',
      desc: 'Agende uma conversa estratégica inicial sem compromisso com Graciete Corrêa e receba um direcionamento claro para seus desafios corporativos.',
      checklist: [
        'Diagnóstico inicial executivo sem custo',
        'Conversa confidencial direta com a fundadora',
        'Abordagem pragmática e sob medida para sua realidade',
      ],
      image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/59_reuniao_fechamento.webp',
      ctaText: 'SOLICITAR DIAGNÓSTICO',
      ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+um+diagn%C3%B3stico+estrat%C3%A9gico+com+a+PowerRH',
    },
  } as ServicosHubData,

  /**
   * ============================================================================
   * PÁGINAS INDIVIDUAIS DE CADA SERVIÇO (DETALHAMENTO PROFUNDO)
   * ============================================================================
   */
  servicos: {
    'cultura-organizacional': {
      slug: 'cultura-organizacional',
      shortTitle: 'Cultura & Design Organizacional',
      category: 'ARQUITETURA & CULTURA',
      eyebrow: 'SOLUÇÃO 01 • CULTURA & DESIGN ORGANIZACIONAL',
      meta: {
        title: 'Cultura Organizacional, PCCS & Design | PowerRH Graciete Corrêa',
        description: 'Estruture sua empresa para crescer com solidez. Diagnóstico de cultura e clima, design organizacional, PCCS e rituais com mais de 30 anos de prática executiva.',
      },
      hero: {
        titlePrefix: 'Empresas crescem quando sua',
        titleHighlight: 'estrutura e cultura',
        titleSuffix: 'acompanham a ambição do negócio.',
        lead: 'Conectamos pessoas, processos e cultura corporativa para transformar o modelo de gestão. Sem manuais teóricos ou diagnósticos engavetados: desenhamos a organização real para sustentar o próximo ciclo de expansão com clareza e pertencimento.',
        badge: 'Cultura & Arquitetura Organizacional',
        image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/21_diagnostico_de_cultura.webp',
        floatingBadge: 'Estruturas vivas que sustentam resultados perenes',
        pills: ['Design Organizacional', 'PCCS & Meritocracia', 'Diagnóstico de Clima', 'Rituais de Gestão', 'M&A Cultural'],
        ctaText: 'SOLICITAR DIAGNÓSTICO DE CULTURA',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+Cultura+e+Design+Organizacional',
      },
      scenarios: {
        eyebrow: 'SINTOMAS & MOMENTOS CRÍTICOS',
        title: 'Quando sua empresa precisa reorganizar cultura e estrutura?',
        subtitle: 'Sinais claros de que o modelo informal de gestão atingiu o limite e está desacelerando o crescimento do negócio.',
        items: [
          {
            id: 1,
            title: 'A empresa cresceu e virou um "telefone sem fio"',
            desc: 'Áreas operando em silos isolados, ruídos constantes de comunicação e perda da velocidade que a empresa tinha quando era menor.',
            iconType: 'chaos',
          },
          {
            id: 2,
            title: 'Falta de clareza em papéis e responsabilidades',
            desc: 'Colaboradores sobrepostos fazendo o mesmo trabalho ou tarefas críticas esquecidas porque "ninguém sabia quem era o dono".',
            iconType: 'bottleneck',
          },
          {
            id: 3,
            title: 'Injustiças na remuneração e perda de talentos-chave',
            desc: 'Sem um Plano de Cargos e Salários estruturado, promoções acontecem por insistência e os melhores profissionais migram para a concorrência.',
            iconType: 'turnover',
          },
          {
            id: 4,
            title: 'Fusão, aquisição ou expansão rápida',
            desc: 'Duas ou mais culturas corporativas em choque, desconfiança mútua e risco iminente de perda de valor do investimento pós-M&A.',
            iconType: 'growth',
          },
        ],
      },
      modules: {
        eyebrow: 'ESCOPO & ENTREGÁVEIS',
        title: 'O que entregamos na prática, etapa por etapa.',
        subtitle: 'Projetos desenhados para gerar adesão voluntária da equipe e sustentação operacional no longo prazo.',
        items: [
          {
            number: '01',
            title: 'Diagnóstico de Cultura & Clima Organizacional',
            subtitle: 'Mapeamento profundo do DNA corporativo real',
            desc: 'Identificação cirúrgica dos valores praticados no dia a dia versus os declarados, medindo índice de pertencimento, focos de atrito e gargalos emocionais.',
            deliverables: [
              'Entrevistas individuais e em profundidade com lideranças',
              'Pesquisa quantitativa e qualitativa de clima',
              'Relatório executivo com plano de ação priorizado',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/22_valores_e_comportamentos.webp',
          },
          {
            number: '02',
            title: 'Design Organizacional & Arquitetura de Papéis',
            subtitle: 'Organograma vivo alinhado à estratégia',
            desc: 'Redesenho da estrutura corporativa para eliminar gargalos de decisão, delimitando com precisão alçadas, responsabilidades e fluxos de reporte.',
            deliverables: [
              'Novo organograma funcional e matricial',
              'Matriz RACI de responsabilidades executivas',
              'Mapeamento de competências essenciais por cadeira',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/24_design_organizacional.webp',
          },
          {
            number: '03',
            title: 'Engenharia de Cargos, Carreiras e Salários (PCCS)',
            subtitle: 'Meritocracia com critérios transparentes',
            desc: 'Estruturação de faixas salariais competitivas frente ao mercado, critérios objetivos de promoção e trilhas de carreira em Y ou W que retêm os melhores.',
            deliverables: [
              'Descrição e avaliação padronizada de todos os cargos',
              'Tabelas salariais calibradas com benchmarks de mercado',
              'Política formal de remuneração e critérios de mérito',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/29_estrutura_de_carreira_pccs.webp',
          },
          {
            number: '04',
            title: 'Rituais de Gestão & Alinhamento Cultural',
            subtitle: 'A prática diária que sustenta a disciplina',
            desc: 'Implementação de rituais consistentes de alinhamento estratégico, reuniões de resultados produtivas e ritos de celebração que fortalecem a identidade coletiva.',
            deliverables: [
              'Calendário de rituais de governança operacional',
              'Roteiros práticos para reuniões de alinhamento ágil',
              'Cartilha de valores e conduta desmistificada',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/27_rituais_de_gestao.webp',
          },
        ],
      },
      method: {
        eyebrow: 'METODOLOGIA DE IMPLEMENTAÇÃO',
        title: 'Como conduzimos o projeto junto à sua equipe.',
        subtitle: 'Processo participativo que envolve os líderes desde o primeiro dia para garantir apropriação e zero rejeição interna.',
        steps: [
          {
            step: '01',
            title: 'Imersão & Escuta Ativa',
            desc: 'Mapeamos o cenário atual ouvindo o topo e a base para entender a realidade sem filtros ou filtros corporativos maquiados.',
            tag: 'Semanas 1 a 3',
          },
          {
            step: '02',
            title: 'Co-Criação da Arquitetura',
            desc: 'Desenhamos a nova estrutura e as regras de cargos junto com a diretoria para garantir aderência ao plano financeiro.',
            tag: 'Semanas 4 a 8',
          },
          {
            step: '03',
            title: 'Implantação Assistida & Comunicação',
            desc: 'Apoio direto na comunicação das mudanças para a empresa inteira, alinhando expectativas e mitigando resistências.',
            tag: 'Semanas 9 a 14',
          },
          {
            step: '04',
            title: 'Ancoragem & Calibração Contínua',
            desc: 'Acompanhamento dos primeiros ciclos de avaliação de desempenho e comitês de calibração salarial.',
            tag: 'Semanas 15+',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'PARA QUEM É',
        title: 'Quem mais se beneficia desta solução?',
        subtitle: 'Projetos sob medida para diferentes níveis de maturidade empresarial.',
        profiles: [
          {
            role: 'O Fundador / Empresário',
            challenge: 'Sente que tudo depende dele e que a empresa não consegue andar com as próprias pernas.',
            transformation: 'Ganha uma organização estruturada, com papéis definidos e governança que liberta seu tempo para o crescimento.',
          },
          {
            role: 'CEOs & Diretores Executivos',
            challenge: 'Precisam profissionalizar a operação para suportar novas rodadas de crescimento, auditorias ou captação.',
            transformation: 'Estrutura organizacional limpa, indicadores de headcount transparentes e PCCS atrativo para novos talentos.',
          },
          {
            role: 'Heads de Gente & RH',
            challenge: 'Carecem de braço técnico sênior e legitimidade política para aprovar um PCCS moderno com a diretoria.',
            transformation: 'Parceria com uma consultora que já viveu mais de 30 anos como executiva de RH em grandes corporações.',
          },
        ],
      },
      differential: {
        eyebrow: 'O DIFERENCIAL GRACIETE CORRÊA',
        title: 'Três décadas vivendo a realidade de quem lidera transformações.',
        lead: 'Graciete Corrêa não é uma acadêmica que ensina teoria de livros. Ela gerenciou mais de 2.000 profissionais em indústrias, redes de varejo e hospitais de grande porte, liderando pessoalmente 2 grandes processos de M&A (incluindo a integração Extrafarma / Grupo Ultra) e conquistando 2 selos GPTW.',
        quote: 'Cultura corporativa não se constrói colando frases de efeito na parede. Constrói-se na consistência das decisões, no respeito à dignidade das pessoas e na clareza dos papéis.',
        founderName: 'Graciete Corrêa',
        founderRole: 'Fundadora da PowerRH & Conselheira Empresarial',
        image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/30_diagnostico_em_campo_empresa.webp',
        pillars: [
          {
            title: 'Experiência em M&A e Integração',
            desc: 'Conhecimento comprovado em fundir culturas corporativas complexas sem paralisar a receita nem perder talentos vitais.',
          },
          {
            title: 'Conquista de Certificações GPTW',
            desc: 'Metodologia que transforma ambientes tóxicos em empresas reconhecidas pela excelência do clima organizacional.',
          },
          {
            title: 'Pragmatismo sem Burocracia',
            desc: 'Entregáveis diretos, ferramentas fáceis de operar pelo time e alinhamento rígido com a saúde financeira do negócio.',
          },
        ],
      },
      faq: {
        eyebrow: 'DÚVIDAS FREQUENTES',
        title: 'Perguntas comuns sobre Cultura & Design Organizacional',
        items: [
          {
            question: 'Nossa empresa tem menos de 50 colaboradores. Já vale a pena fazer um PCCS?',
            answer: 'Com certeza. Empresas a partir de 30 a 40 colaboradores já sofrem com comparações internas de salários e falta de critérios para promoção. Estruturar o PCCS cedo evita vícios estruturais que custam muito caro para corrigir quando a organização atingir 100 ou 200 pessoas.',
            isOpenDefault: true,
          },
          {
            question: 'Quanto tempo dura um projeto completo de Cultura e Design Organizacional?',
            answer: 'Normalmente de 3 a 5 meses, dependendo do porte e da complexidade da empresa. A metodologia é modular, gerando ganhos rápidos logo nas primeiras semanas de diagnóstico e alinhamento.',
          },
          {
            question: 'A consultoria apenas desenha os documentos ou participa da implantação?',
            answer: 'A PowerRH não entrega "manuais de gaveta". Nós acompanhamos a diretoria em cada reunião de comunicação, calibramos as tabelas com o financeiro e capacitamos as lideranças para conduzir os rituais com autonomia.',
          },
        ],
      },
      cta: {
        heading: 'Vamos desenhar uma cultura forte e<br />uma <span class="highlight-gold">estrutura preparada para crescer?</span>',
        desc: 'Agende uma conversa executiva com Graciete Corrêa e mapeie o diagnóstico inicial da sua estrutura.',
        checklist: [
          'Diagnóstico preliminar de alinhamento cultural',
          'Análise de riscos estruturais e de cargos',
          'Conversa direta e confidencial com Graciete Corrêa',
        ],
        image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/24_design_organizacional.webp',
        ctaText: 'SOLICITAR DIAGNÓSTICO',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+um+diagn%C3%B3stico+de+Cultura+e+Design+Organizacional',
      },
    } as ServiceDetail,

    'lideranca-executiva': {
      slug: 'lideranca-executiva',
      shortTitle: 'Líderes de Líderes',
      category: 'PERFORMANCE & DESENVOLVIMENTO',
      eyebrow: 'SOLUÇÃO 02 • LÍDERES DE LÍDERES & DESENVOLVIMENTO',
      meta: {
        title: 'Líderes de Líderes & Desenvolvimento Executivo | PowerRH Graciete Corrêa',
        description: 'Desenvolvimento e mentoria de executivos para liderar ambientes complexos, engajar equipes e multiplicar resultados com maturidade executiva.',
      },
      hero: {
        titlePrefix: 'Líderes preparados não apenas executam tarefas:',
        titleHighlight: 'desenvolvem pessoas',
        titleSuffix: 'e sustentam a estratégia.',
        lead: 'Transformamos gestores operacionais em líderes estratégicos. Uma metodologia prática que desenvolve maturidade executiva, comunicação assertiva, escuta qualificada e a coragem necessária para tomar decisões difíceis no dia a dia da empresa.',
        badge: 'Liderança Estratégica & Executiva',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/08_lideranca_people_culture.webp',
        floatingBadge: 'Formando líderes que multiplicam a visão do negócio',
        pills: ['Assessment Executivo', 'Mentoria Individual', 'PDI Personalizado', 'Feedback & Diálogo', 'Gestão de Conflitos'],
        ctaText: 'CONHECER O PROGRAMA DE LIDERANÇA',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+o+programa+L%C3%ADderes+de+L%C3%ADderes',
      },
      scenarios: {
        eyebrow: 'SINTOMAS & MOMENTOS CRÍTICOS',
        title: 'Quando sua empresa precisa fortalecer a liderança?',
        subtitle: 'Desafios clássicos que indicam a necessidade de elevar a maturidade do corpo diretivo e gerencial.',
        items: [
          {
            id: 1,
            title: 'Líderes sufocados apagando incêndios operacionais',
            desc: 'Gestores que passam o dia resolvendo urgências de rotina e não conseguem sentar para planejar, delegar ou orientar suas equipes.',
            iconType: 'bottleneck',
          },
          {
            id: 2,
            title: 'Centralização e dependência absoluta do fundador',
            desc: 'Qualquer decisão acima de mil reais ou divergência entre colaboradores tem que ser resolvida pessoalmente pelo dono da empresa.',
            iconType: 'loneliness',
          },
          {
            id: 3,
            title: 'Medo de dar feedbacks difíceis e cobrar metas',
            desc: 'Líderes que evitam conversas francas por receio de atrito, permitindo que a mediocridade se instale e contaminando os mais engajados.',
            iconType: 'clash',
          },
          {
            id: 4,
            title: 'Especialistas técnicos promovidos sem preparo de gestão',
            desc: 'O melhor vendedor ou o melhor engenheiro promovido a gerente que perde a excelência técnica e desmotiva o time por falta de habilidade humana.',
            iconType: 'chaos',
          },
        ],
      },
      modules: {
        eyebrow: 'ESCOPO & ENTREGÁVEIS',
        title: 'Módulos do programa Líderes de Líderes.',
        subtitle: 'Combinação refinada de mapeamento individual de perfil, dinâmicas imersivas e sessões de mentoria executiva prática.',
        items: [
          {
            number: '01',
            title: 'Assessment Executivo & Mapeamento de Potencial',
            subtitle: 'Autoconhecimento profundo e mapeamento de gaps',
            desc: 'Análise aprofundada de perfil comportamental, inteligência emocional e maturidade executiva de cada gestor, identificando forças e pontos cegos.',
            deliverables: [
              'Relatório individual de assessment com devolutiva de 1h30',
              'Mapeamento cruzado da equipe de liderança',
              'Identificação de sucessores potenciais para cadeiras-chave',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/13_escuta_lideranca.webp',
          },
          {
            number: '02',
            title: 'Workshops Imersivos: Da Operação à Estratégia',
            subtitle: 'Mudança de mentalidade e visão sistêmica',
            desc: 'Encontros temáticos de alto impacto sobre delegação assertiva, visão financeira do negócio, gestão de conflitos e criação de times autônomos.',
            deliverables: [
              'Trilha de 4 a 6 encontros práticos com estudos de caso reais',
              'Caderno de ferramentas gerenciais aplicadas',
              'Simulações de conversas difíceis e negociação interna',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/12_reuniao_pequena_tres_pessoas.webp',
          },
          {
            number: '03',
            title: 'Planos de Desenvolvimento Individual (PDI)',
            subtitle: 'Metas comportamentais claras e mensuráveis',
            desc: 'Estruturação de um plano sob medida para cada executivo focar em seus gaps críticos, com marcos de checagem e apoio contínuo.',
            deliverables: [
              'PDI individual formalizado com metas SMART de comportamento',
              'Reuniões mensais de alinhamento com a diretoria',
              'Indicadores de evolução e aplicação prática no time',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/14_discussao_estrategica_janela_ampla.webp',
          },
          {
            number: '04',
            title: 'Mentoria Executiva Individual com Graciete Corrêa',
            subtitle: 'Aconselhamento sênior, sigiloso e direto ao ponto',
            desc: 'Sessões quinzenais reservadas para diretores e gerentes estratégicos debaterem dilemas de gestão, postura corporativa e mediação de crises.',
            deliverables: [
              'Sessões de 1 hora com atendimento confidencial',
              'Orientação prática para decisões de pessoas complexas',
              'Evolução acelerada da postura e oratória executiva',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/10_conversa_executiva_terraco.webp',
          },
        ],
      },
      method: {
        eyebrow: 'METODOLOGIA DE DESENVOLVIMENTO',
        title: 'Como formamos líderes que sustentam o crescimento.',
        subtitle: 'Metodologia que une escuta qualificada, provocação construtiva e aplicação imediata na rotina da empresa.',
        steps: [
          {
            step: '01',
            title: 'Diagnóstico & Assessment',
            desc: 'Aplicação de ferramentas de diagnóstico individual para entender o nível de prontidão e o estilo de liderança atual.',
            tag: 'Etapa 1',
          },
          {
            step: '02',
            title: 'Alinhamento com a Estratégia do Negócio',
            desc: 'Conexão dos gaps identificados aos desafios estratégicos da empresa para os próximos 12 a 24 meses.',
            tag: 'Etapa 2',
          },
          {
            step: '03',
            title: 'Workshops & Mentorias Aplicadas',
            desc: 'Ciclos de capacitação intercalados com sessões de mentoria individual para destravar desafios de campo.',
            tag: 'Etapa 3',
          },
          {
            step: '04',
            title: 'Mensuração de Resultados & Sustentação',
            desc: 'Avaliação de impacto 360°, medindo engajamento dos liderados, redução de turnover e produtividade.',
            tag: 'Etapa 4',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'PÚBLICO-ALVO',
        title: 'Para quais perfis o programa foi desenhado?',
        subtitle: 'Focado em quem tem a responsabilidade de gerar resultados através de outras pessoas.',
        profiles: [
          {
            role: 'Diretores e Gerentes Gerais',
            challenge: 'Precisam alinhar suas áreas, reduzir atritos entre departamentos e sustentar metas ambiciosas.',
            transformation: 'Desenvolvem postura estratégica de alta maturidade, visão sistêmica do negócio e capacidade de arbitrar conflitos.',
          },
          {
            role: 'Novos Líderes e Coordenadores',
            challenge: 'Fizeram a transição recente de especialistas técnicos para gestores de equipe e sentem insegurança.',
            transformation: 'Adquirem método prático de feedback, delegação estruturada e inteligência emocional para conduzir o time.',
          },
          {
            role: 'Herdeiros e Sucessores em Formação',
            challenge: 'Precisam construir legitimidade perante os colaboradores antigos da empresa sem impor autoridade pela força.',
            transformation: 'Ganham repertório executivo, escuta ativa e postura de respeito que conquista a lealdade dos times.',
          },
        ],
      },
      differential: {
        eyebrow: 'EXPERIÊNCIA REAL DE LIDERANÇA',
        title: 'Formação conduzida por quem já esteve na trincheira executiva.',
        lead: 'Graciete Corrêa atuou por mais de 30 anos como executiva de primeira linha, liderando diretamente equipes de milhares de pessoas em cenários de alta pressão, crises setoriais e integrações corporativas. Atualmente, preside o Conselho Deliberativo da ABRH-PA e apoia conselhos de administração em todo o Brasil.',
        quote: 'A melhor liderança não é a que fala mais alto ou a que sabe todas as respostas. É a que sabe fazer as perguntas certas e criar um ambiente seguro onde cada um entrega o seu melhor.',
        founderName: 'Graciete Corrêa',
        founderRole: 'Fundadora da PowerRH & Mentora Executiva',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/18_observacao_reuniao_gestores.webp',
        pillars: [
          {
            title: 'Escuta Ativa & Sensibilidade',
            desc: 'Capacidade comprovada de destravar bloqueios emocionais e relacionais que treinamentos corporativos tradicionais não alcançam.',
          },
          {
            title: 'Foco em Autonomia e Delegação',
            desc: 'Projetado especificamente para que o empresário deixe de ser o bombeiro da empresa e possa confiar no seu segundo escalão.',
          },
          {
            title: 'Mentoria Baseada na Prática',
            desc: 'Discussão de casos reais do cotidiano do cliente, sem exercícios fictícios desconectados da pressão do mercado.',
          },
        ],
      },
      faq: {
        eyebrow: 'DÚVIDAS FREQUENTES',
        title: 'Perguntas comuns sobre o programa Líderes de Líderes',
        items: [
          {
            question: 'O programa é realizado de forma individual ou em grupo?',
            answer: 'O programa combina os dois formatos com máxima eficácia: workshops em grupo com a equipe de líderes para criar alinhamento e linguagem comum, intercalados com sessões individuais e confidenciais de mentoria com Graciete Corrêa.',
            isOpenDefault: true,
          },
          {
            question: 'Como mensurar se os líderes realmente evoluíram?',
            answer: 'Avaliamos a evolução por meio de indicadores práticos: redução de chamados e dependência do fundador, pesquisas periódicas de clima e liderança aplicadas às equipes, cumprimento de metas do PDI e índices de retenção de talentos.',
          },
          {
            question: 'Pode ser adaptado para líderes mais jovens ou recém-promovidos?',
            answer: 'Sim. Antes de iniciar qualquer turma ou ciclo, realizamos o assessment inicial para calibrar os conteúdos e desafios ao nível de senioridade de cada participante.',
          },
        ],
      },
      cta: {
        heading: 'Sua empresa merece uma equipe de<br />líderes <span class="highlight-gold">maduros e estratégicos.</span>',
        desc: 'Converse com Graciete Corrêa e descubra como estruturar o programa ideal para a sua diretoria e gerência.',
        checklist: [
          'Diagnóstico preliminar de competências de liderança',
          'Proposta sob medida para o tamanho da sua equipe',
          'Conversa reservada e sem compromisso',
        ],
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/09_conversa_inspiradora.webp',
        ctaText: 'FALAR COM A ESPECIALISTA',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+programa+L%C3%ADderes+de+L%C3%ADderes',
      },
    } as ServiceDetail,

    'governanca-e-sucessao': {
      slug: 'governanca-e-sucessao',
      shortTitle: 'Governança & Sucessão Familiar',
      category: 'CONTINUIDADE & LEGADO',
      eyebrow: 'SOLUÇÃO 03 • GOVERNANÇA & SUCESSÃO FAMILIAR',
      meta: {
        title: 'Governança Corporativa & Sucessão Familiar | PowerRH Graciete Corrêa',
        description: 'Apoio especializado a famílias empresárias para profissionalização da gestão, preparação da próxima geração e estruturação de conselhos perenes.',
      },
      hero: {
        titlePrefix: 'Sua empresa cresceu. Agora ela precisa',
        titleHighlight: 'atravessar gerações',
        titleSuffix: 'com harmonia e solidez.',
        lead: 'Conduzimos conversas complexas entre família, patrimônio e gestão com discrição, empatia e rigor metodológico. Profissionalizamos o negócio preservando os vínculos humanos e o afeto que construíram a história da sua família.',
        badge: 'Governança Corporativa & Sucessão',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/41_fundador_e_sucessor.webp',
        floatingBadge: 'Preservando o legado e a união familiar',
        pills: ['Protocolo Familiar', 'Preparação de Sucessores', 'Conselho Consultivo', 'Separação dos 3 Círculos', 'Mediação Societária'],
        ctaText: 'CONVERSAR SOBRE SUCESSÃO FAMILIAR',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+Governan%C3%A7a+e+Sucess%C3%A3o+Familiar',
      },
      scenarios: {
        eyebrow: 'SINTOMAS & MOMENTOS CRÍTICOS',
        title: 'Quando iniciar a estruturação da governança familiar?',
        subtitle: 'O melhor momento para estruturar a sucessão é antes que uma crise de saúde ou societária torne a conversa urgente e dolorosa.',
        items: [
          {
            id: 1,
            title: 'Dificuldade do fundador em "passar o bastão"',
            desc: 'O patriarca ou matriarca deseja desacelerar, mas sente que ninguém cuidará da empresa com o mesmo zelo e dedicação.',
            iconType: 'bottleneck',
          },
          {
            id: 2,
            title: 'Mistura entre caixa da empresa e gastos da família',
            desc: 'Falta de fronteiras nítidas entre pró-labore, distribuição de lucros e despesas pessoais, gerando atritos constantes entre os ramos familiares.',
            iconType: 'chaos',
          },
          {
            id: 3,
            title: 'Divergência entre gerações sobre o futuro do negócio',
            desc: 'A nova geração quer inovar, digitalizar e profissionalizar; os fundadores temem perder o controle ou colocar em risco o patrimônio conquistado.',
            iconType: 'clash',
          },
          {
            id: 4,
            title: 'Irmãos ou primos sócios com ambições diferentes',
            desc: 'Alguns trabalham no dia a dia da operação e acham que deveriam ganhar mais; outros são apenas acionistas e cobram dividendos imediatos.',
            iconType: 'turnover',
          },
        ],
      },
      modules: {
        eyebrow: 'ESCOPO & ENTREGÁVEIS',
        title: 'Pilares práticos de governança para empresas familiares.',
        subtitle: 'Estruturas leves e funcionais, sem burocracias de multinacionais desnecessárias para a realidade de empresas de médio porte.',
        items: [
          {
            number: '01',
            title: 'Diagnóstico dos Três Círculos (Família, Empresa e Patrimônio)',
            subtitle: 'Mapeamento confidencial de expectativas e riscos',
            desc: 'Entrevistas individuais e sigilosas com cada membro da família para compreender desejos profissionais, ressentimentos passados e visões de futuro.',
            deliverables: [
              'Mapa de maturidade da governança familiar',
              'Identificação de conflitos velados e riscos societários',
              'Matriz de alinhamento entre as gerações',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/48_familia_x_empresa_papeis.webp',
          },
          {
            number: '02',
            title: 'Construção do Protocolo Familiar & Regras Claras',
            subtitle: 'O acordo moral e societário da família',
            desc: 'Facilitação de encontros estruturados para redigir o documento que define regras de entrada e saída de familiares, remuneração, formação e divórcio.',
            deliverables: [
              'Protocolo de Família aprovado por unanimidade',
              'Regras formais de contratação e avaliação de parentes',
              'Política transparente de distribuição de resultados',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/44_regras_participacao_familiar.webp',
          },
          {
            number: '03',
            title: 'Formação & Mentoria do Sucessor (e do Sucedido)',
            subtitle: 'Transição geracional segura e legitimada',
            desc: 'Preparação executiva do sucessor para conquistar a confiança dos colaboradores e apoio emocional ao fundador para encontrar seu novo papel no conselho.',
            deliverables: [
              'Plano de transição geracional em etapas progressivas',
              'Mentoria quinzenal para o sucessor escolhido',
              'Plano de vida e novo papel para o fundador',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/47_mentoria_sucessor.webp',
          },
          {
            number: '04',
            title: 'Estruturação do Conselho Consultivo Familiar',
            subtitle: 'O fórum legítimo de deliberação estratégica',
            desc: 'Criação e facilitação das reuniões do conselho, garantindo pautas estratégicas, presença de conselheiros independentes e ata formal das decisões.',
            deliverables: [
              'Regimento interno do Conselho Consultivo',
              'Calendário e pautas pré-definidas para o ano',
              'Facilitação externa neutra nos primeiros ciclos',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/45_conselho_familiar.webp',
          },
        ],
      },
      method: {
        eyebrow: 'METODOLOGIA DA TRANSIÇÃO',
        title: 'Como conduzimos o processo com cuidado e método.',
        subtitle: 'Processo pautado no sigilo absoluto, no respeito à história dos fundadores e na clareza das fronteiras.',
        steps: [
          {
            step: '01',
            title: 'Escuta Individual e Confidencial',
            desc: 'Conversas separadas com cada familiar para acolher dores, sonhos e expectativas sem julgamentos ou exposição prévia.',
            tag: 'Mês 1',
          },
          {
            step: '02',
            title: 'Mesas Redondas de Alinhamento',
            desc: 'Encontros facilitados com metodologia neutra para transformar conversas difíceis em consensos construtivos.',
            tag: 'Mês 2 e 3',
          },
          {
            step: '03',
            title: 'Redação & Assinatura dos Acordos',
            desc: 'Formalização do Protocolo Familiar e das regras de governança com validação de advogados da família.',
            tag: 'Mês 4',
          },
          {
            step: '04',
            title: 'Implantação e Acompanhamento da Transição',
            desc: 'Acompanhamento lado a lado dos primeiros 6 a 12 meses do novo conselho e da rotina dos novos gestores.',
            tag: 'Meses 5 a 12',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'A QUEM SE DESTINA',
        title: 'Para famílias empresárias que pensam nas próximas décadas.',
        subtitle: 'Estruturado para proteger tanto a perenidade do negócio quanto a paz das reuniões de domingo da família.',
        profiles: [
          {
            role: 'O Fundador / A Matriarca',
            challenge: 'Dedicou a vida inteira para erguer a empresa e teme que a falta de união dos herdeiros destrua seu patrimônio.',
            transformation: 'Ganha a tranquilidade de ver a sucessão pactuada em vida, com respeito absoluto à sua autoridade e legado.',
          },
          {
            role: 'A Segunda Geração (Herdeiros e Irmãos)',
            challenge: 'Sofrem com a cobrança de provar competência própria e convivem com disputas veladas de espaço com os irmãos.',
            transformation: 'Encontram regras justas, alinhamento de papéis e fóruns adequados para debater a empresa sem magoar os laços fraternos.',
          },
          {
            role: 'Executivos Não-Familiares',
            challenge: 'Sentem insegurança profissional por ficarem no meio do fogo cruzado de divergências familiares dos donos.',
            transformation: 'Passam a responder a uma governança profissionalizada, com metas claras e estabilidade institucional.',
          },
        ],
      },
      differential: {
        eyebrow: 'DISCRIÇÃO E SENSIBILIDADE HUMANA',
        title: 'Sensibilidade para as relações. Estratégia para o negócio.',
        lead: 'Poucas consultorias entendem que sucessão familiar não é um problema jurídico ou contábil: é, antes de tudo, um desafio de relações humanas, sentimentos de validação, ciúmes e amor. Graciete Corrêa traz a bagagem de quem já mediou dezenas de transições complexas, unindo rigor técnico e um respeito profundo pela intimidade familiar.',
        quote: 'Governança familiar de sucesso não é aquela que copia manuais de Wall Street. É aquela que consegue profissionalizar a gestão sem arrancar a alma e o calor humano que fundaram a empresa.',
        founderName: 'Graciete Corrêa',
        founderRole: 'Fundadora da PowerRH & Mediadora de Governança Familiar',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/20_fundador_diretor_governanca.webp',
        pillars: [
          {
            title: 'Sigilo Absoluto e Confidencialidade',
            desc: 'Compromisso ético inegociável de sigilo sobre todas as informações patrimoniais, societárias e pessoais da família.',
          },
          {
            title: 'Mediação Neutra e Pacificadora',
            desc: 'Postura equilibrada que não toma partido de nenhuma facção familiar, buscando o bem comum da continuidade.',
          },
          {
            title: 'Olhar Abrangente dos 3 Círculos',
            desc: 'Clareza cristalina para separar os direitos do herdeiro (família), do acionista (propriedade) e do executivo (empresa).',
          },
        ],
      },
      faq: {
        eyebrow: 'DÚVIDAS FREQUENTES',
        title: 'Perguntas comuns sobre Governança e Sucessão Familiar',
        items: [
          {
            question: 'Quando é a hora certa de começar a falar de sucessão na família?',
            answer: 'O momento ideal é quando a empresa está saudável e o fundador está com plena lucidez e energia. Fazer a transição sob a pressão de uma doença, briga societária ou emergência financeira reduz as chances de sucesso e amplia conflitos emocionais.',
            isOpenDefault: true,
          },
          {
            question: 'O Protocolo Familiar tem validade jurídica?',
            answer: 'O Protocolo Familiar é primeiramente um pacto moral e ético entre os membros da família. No entanto, suas diretrizes societárias (como regras de compra de quotas e preferência) são transpostas para o Acordo de Sócios e registradas na Junta Comercial com plena validade legal.',
          },
          {
            question: 'E se um dos filhos não quiser trabalhar na empresa?',
            answer: 'Essa é uma das grandes vantagens da governança profissional: separar quem quer ser executivo de quem é apenas sócio/herdeiro. O filho pode seguir sua vocação profissional fora da empresa e continuar sendo um acionista consciente e bem remunerado através de dividendos.',
          },
        ],
      },
      cta: {
        heading: 'Garanta a perpetuidade da sua empresa e<br />a <span class="highlight-gold">harmonia da sua família.</span>',
        desc: 'Agende uma conversa confidencial com Graciete Corrêa para discutir os caminhos da sua sucessão.',
        checklist: [
          'Conversa 100% sigilosa e sem compromisso',
          'Diagnóstico preliminar da maturidade dos 3 círculos',
          'Atendimento direto e pessoal com Graciete Corrêa',
        ],
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/45_conselho_familiar.webp',
        ctaText: 'CONVERSAR COM CONFIDENCIALIDADE',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+uma+conversa+confidencial+sobre+Sucess%C3%A3o+Familiar',
      },
    } as ServiceDetail,

    'advisory-empresarial': {
      slug: 'advisory-empresarial',
      shortTitle: 'Advisory Empresarial & Apoio ao Decisor',
      category: 'ACONSELHAMENTO ESTRATÉGICO',
      eyebrow: 'SOLUÇÃO 04 • ADVISORY EMPRESARIAL & APOIO AO DECISOR',
      meta: {
        title: 'Advisory Empresarial & Apoio ao Decisor | PowerRH Graciete Corrêa',
        description: 'Aconselhamento executivo sênior, confidencial e neutro para empresários e CEOs em momentos de inflexão, expansão e decisões de alta complexidade.',
      },
      hero: {
        titlePrefix: 'Decisões no topo são solitárias.',
        titleHighlight: 'Tenha à sua mesa',
        titleSuffix: 'quem já viveu o que você está enfrentando.',
        lead: 'Mais de 30 anos de vivência no centro das decisões corporativas colocados à disposição da sua liderança. Um olhar independente, confidencial e experiente para clarear caminhos, testar hipóteses e mitigar riscos estratégicos.',
        badge: 'Advisory Executivo & Estratégico',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/19_advisory_empresaria.webp',
        floatingBadge: 'Aconselhamento sênior e confidencial ao empresário',
        pills: ['Aconselhamento ao Fundador', 'Decisões Estratégicas', 'Integração em M&A', 'Conselho Consultivo', 'Segunda Opinião Neutra'],
        ctaText: 'SOLICITAR CONVERSA DE ADVISORY',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+Advisory+Empresarial',
      },
      scenarios: {
        eyebrow: 'SINTOMAS & MOMENTOS CRÍTICOS',
        title: 'Quando o empresário precisa de um advisor sênior?',
        subtitle: 'Cenários de alta complexidade em que o líder não pode expor dúvidas internamente nem improvisar na decisão.',
        items: [
          {
            id: 1,
            title: 'A solidão do líder no topo da organização',
            desc: 'Dilemas e incertezas que o empresário não pode abrir com a equipe para não gerar pânico, nem tem pares dentro do negócio com quem debater.',
            iconType: 'loneliness',
          },
          {
            id: 2,
            title: 'Decisões cruciais de reestruturação ou M&A',
            desc: 'Fusão, compra de concorrente, abertura de novos mercados ou corte estrutural de custos exigindo precisão cirúrgica no impacto de pessoas.',
            iconType: 'bottleneck',
          },
          {
            id: 3,
            title: 'Impasses graves entre sócios fundadores',
            desc: 'Divergências de visão de negócio e ritmo de trabalho que travam investimentos e geram desgaste relacional entre os controladores.',
            iconType: 'clash',
          },
          {
            id: 4,
            title: 'Necessidade de um conselho consultivo independente',
            desc: 'A empresa sente falta de uma voz experiente externa que questione premissas, aponte pontos cegos e cobre disciplina estratégica.',
            iconType: 'growth',
          },
        ],
      },
      modules: {
        eyebrow: 'FORMATO & ENTREGÁVEIS',
        title: 'Como funciona o trabalho de Advisory Empresarial.',
        subtitle: 'Atuação flexível e customizada, com encontros periódicos e disponibilidade direta nos momentos de crise.',
        items: [
          {
            number: '01',
            title: 'Sounding Board & Sessões Estratégicas Mensais',
            subtitle: 'Espaço confidencial para debater dilemas reais',
            desc: 'Encontros mensais estruturados com o empresário para debater cenários, testar novas ideias de expansão e revisar decisões críticas.',
            deliverables: [
              'Reuniões mensais ou quinzenais de 2 horas',
              'Canal direto aberto para consultas em emergências',
              'Ata executiva confidencial com pontos de atenção',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/06_METODO_E_DIAGNOSTICO/06_conversa_elegante_escritorio.webp',
          },
          {
            number: '02',
            title: 'Participação em Conselhos Consultivos e de Administração',
            subtitle: 'A voz externa especializada em Gente e Governança',
            desc: 'Atuação como conselheira independente em reuniões formais de conselho, trazendo rigor na cobrança de metas e foco no capital humano.',
            deliverables: [
              'Participação ativa nas reuniões ordinárias de conselho',
              'Análise crítica das métricas de turnover e engajamento',
              'Provocação e alinhamento do plano de sucessão executiva',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/20_fundador_diretor_governanca.webp',
          },
          {
            number: '03',
            title: 'Advisory em Fusões, Aquisições e Transições (M&A)',
            subtitle: 'Protegendo o valor humano da transação',
            desc: 'Acompanhamento sênior desde a due diligence humana até a liderança da integração cultural pós-aquisição, evitando debandada de talentos.',
            deliverables: [
              'Due diligence cultural e mapeamento de talentos críticos',
              'Plano de retenção de executivos-chave pós-deal',
              'Comitê de integração cultural pós-fusão',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/05_sala_com_vista_porto.webp',
          },
          {
            number: '04',
            title: 'Mediação Societária & Alinhamento de Sócios',
            subtitle: 'Destravando impasses societários com neutralidade',
            desc: 'Facilitação de conversas decisivas entre sócios com visões desalinhadas, buscando consensos pragmáticos ou termos de saída pacificados.',
            deliverables: [
              'Reuniões de mediação com metodologia neutra',
              'Termo de alinhamento estratégico de sócios',
              'Preservação da operação e blindagem do clima interno',
            ],
            image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/59_reuniao_fechamento.webp',
          },
        ],
      },
      method: {
        eyebrow: 'RITMO DO ACOMPANHAMENTO',
        title: 'Uma relação contínua de confiança e confidencialidade.',
        subtitle: 'Sem intermediários: você lida diretamente com uma consultora sênior de mais de 30 anos de bagagem executiva.',
        steps: [
          {
            step: '01',
            title: 'Acordo de Confidencialidade (NDA) & Diagnóstico',
            desc: 'Assinatura mútua de compromisso de sigilo absoluto e imersão nos principais desafios estratégicos do negócio.',
            tag: 'Início',
          },
          {
            step: '02',
            title: 'Definição da Agenda Estratégica do Decisor',
            desc: 'Mapeamento dos 3 ou 4 grandes temas prioritários para o ciclo (expansão, liderança, reestruturação ou M&A).',
            tag: 'Semana 2',
          },
          {
            step: '03',
            title: 'Rituais de Aconselhamento & Sounding Board',
            desc: 'Sessões periódicas para analisar dados, desafiar premissas e desenhar planos de ação práticos.',
            tag: 'Mensal',
          },
          {
            step: '04',
            title: 'Presença nos Momentos Críticos',
            desc: 'Apoio em decisões difíceis, anúncios corporativos ou reuniões societárias delicadas.',
            tag: 'Sob demanda',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'PERFIL DE CLIENTES',
        title: 'Para quem o Advisory Empresarial foi pensado?',
        subtitle: 'Desenvolvido para tomadores de decisão que valorizam discrição e experiência real.',
        profiles: [
          {
            role: 'Fundadores & Controladores de Empresas',
            challenge: 'Carregam a responsabilidade final nos ombros e precisam de uma parceira experiente para clarear suas decisões.',
            transformation: 'Segurança psicológica, redução drástica de erros estratégicos e foco nas prioridades de alto valor.',
          },
          {
            role: 'CEOs & Presidentes Contratados',
            challenge: 'Precisam gerenciar as expectativas do conselho e acionistas ao mesmo tempo em que lideram o time de diretores.',
            transformation: 'Um espaço neutro e confidencial para calibrar postura executiva e antecipar movimentos societários.',
          },
          {
            role: 'Sócios em Processo de Disputa ou Saída',
            challenge: 'Divergências societárias ameaçam a saúde financeira da empresa e a amizade construída ao longo dos anos.',
            transformation: 'Mediação sênior que encontra saídas inteligentes, preservando o valor patrimonial de todas as partes.',
          },
        ],
      },
      differential: {
        eyebrow: 'BAGAGEM EXECUTIVA DE MAIS DE 30 ANOS',
        title: 'Uma conselheira que já esteve do seu lado da mesa.',
        lead: 'Graciete Corrêa viveu décadas no olho do furacão corporativo: liderou grandes transformações, participou de processos de M&A bilionários no setor farmacêutico e de combustíveis (Grupo Ultra / Extrafarma), gerenciou crises sindicais e institucionais e preside o Conselho Deliberativo da ABRH-PA. Ela conhece as pressões que um empresário enfrenta como poucas pessoas no mercado.',
        quote: 'O papel do verdadeiro advisor não é concordar com o cliente para agradá-lo. É ter a coragem e a senioridade para apontar o que ninguém mais na empresa tem coragem de dizer, sempre com profundo respeito.',
        founderName: 'Graciete Corrêa',
        founderRole: 'Fundadora da PowerRH & Conselheira de Empresas',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/11_diagnostico_individual_fundador.webp',
        pillars: [
          {
            title: 'Independência e Neutralidade Total',
            desc: 'Sem vínculos políticos internos na empresa, com foco exclusivo no sucesso e na sustentabilidade do negócio.',
          },
          {
            title: 'Visão Holística: Negócio & Pessoas',
            desc: 'Entende os impactos financeiros das decisões e o reflexo comportamental de cada anúncio na moral da tropa.',
          },
          {
            title: 'Disponibilidade e Parceria Próxima',
            desc: 'Relação próxima e intimista: você tem o WhatsApp direto da sua conselheira para quando o imprevisto acontecer.',
          },
        ],
      },
      faq: {
        eyebrow: 'DÚVIDAS FREQUENTES',
        title: 'Perguntas comuns sobre Advisory Empresarial',
        items: [
          {
            question: 'Qual é a diferença entre Advisory Empresarial e Consultoria Tradicional?',
            answer: 'A consultoria tradicional foca em projetos com entregáveis técnicos definidos (como um PCCS ou organograma). O Advisory é uma relação contínua de aconselhamento estratégico com o líder principal, funcionando como um conselheiro sênior pessoal para decisões de alto impacto, governança e mediação.',
            isOpenDefault: true,
          },
          {
            question: 'Como é garantida a confidencialidade das conversas?',
            answer: 'A confidencialidade é a pedra fundamental do nosso trabalho. Todos os contratos incluem cláusulas rígidas de Non-Disclosure Agreement (NDA), e todas as informações societárias e financeiras compartilhadas permanecem sob sigilo ético absoluto.',
          },
          {
            question: 'O Advisory pode ser contratado para um momento específico de M&A ou transição?',
            answer: 'Sim. Podemos atuar tanto em modelo de retenção mensal contínua quanto em projetos especiais de transição societária, integração cultural pós-aquisição ou mediação de impasses societários pontuais.',
          },
        ],
      },
      cta: {
        heading: 'Tenha à sua mesa uma conselheira sênior<br />para <span class="highlight-gold">suas decisões mais difíceis.</span>',
        desc: 'Agende uma conversa confidencial com Graciete Corrêa e descubra como o Advisory Estratégico pode fortalecer a sua liderança.',
        checklist: [
          'Conversa 100% sigilosa e reservada',
          'Alinhamento direto com a fundadora Graciete Corrêa',
          'Diagnóstico preliminar dos desafios da sua gestão',
        ],
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/19_advisory_empresaria.webp',
        ctaText: 'AGENDAR CONVERSA CONFIDENCIAL',
        ctaHref: 'https://wa.me/5591992992091?text=Ol%C3%A1%2C+gostaria+de+uma+conversa+confidencial+de+Advisory+Empresarial',
      },
    } as ServiceDetail,
  },
};

