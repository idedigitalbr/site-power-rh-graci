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
};
