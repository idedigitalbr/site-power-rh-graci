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
  iconType: 'network' | 'people' | 'star' | 'chart';
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
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Contato', href: '#formulario-diagnostico' },
    ],
    cta: {
      text: 'Falar com a especialista →',
      href: '#formulario-diagnostico',
    },
  },

  hero: {
    eyebrow: 'CONSULTORIA ESTRATÉGICA EM PESSOAS',
    headlinePrefix: 'Empresas crescem',
    headlineHighlight: 'pessoas',
    headlineSuffix: 'evoluem.',
    subtitle: 'Estratégia, liderança e cultura para transformar o potencial humano em resultados reais e sustentáveis.',
    ctaText: 'QUERO UM DIAGNÓSTICO →',
    ctaHref: '#formulario-diagnostico',
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
      number: '+120',
      label: 'empresas atendidas',
      iconType: 'network',
    },
    {
      number: '+9.000',
      label: 'pessoas desenvolvidas',
      iconType: 'people',
    },
    {
      number: '+95%',
      label: 'de satisfação dos clientes',
      iconType: 'star',
    },
    {
      number: '+15 anos',
      label: 'de experiência em estratégia de pessoas',
      iconType: 'chart',
    },
  ] as MetricItem[],

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
    title: 'Estratégia em pessoas para cada etapa do seu crescimento.',
    items: [
      {
        id: 'cultura',
        title: 'Cultura & Estrutura',
        desc: 'Conectamos pessoas, processos e cultura para sustentar o crescimento.',
        image: 'assets/imagens-diversas/fotos_graci_ia/03_SOLUCAO_CULTURA_E_ESTRUTURA/21_diagnostico_de_cultura.webp',
        alt: 'Cultura e Estrutura Organizacional',
        iconType: 'culture',
      },
      {
        id: 'lideranca',
        title: 'Liderança & Desenvolvimento',
        desc: 'Desenvolvemos líderes e times para elevar a performance.',
        image: 'assets/imagens-diversas/fotos_graci_ia/04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/08_lideranca_people_culture.webp',
        alt: 'Liderança e Desenvolvimento de Gestores',
        iconType: 'leadership',
      },
      {
        id: 'governanca',
        title: 'Governança & Sucessão',
        desc: 'Preparamos pessoas e estruturas para um futuro sustentável.',
        image: 'assets/imagens-diversas/fotos_graci_ia/05_SOLUCAO_GOVERNANCA_E_SUCESSAO/41_fundador_e_sucessor.webp',
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
    bio: 'Executiva e consultora com mais de 15 anos de experiência em desenvolvimento organizacional, liderança e cultura. Apaixonada por pessoas, acredita no poder de uma gestão mais humana e estratégica para construir mais pontes e um futuro melhor.',
    ctaText: 'Conheça minha história →',
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
    eyebrow: 'POR QUE POWER RH ——',
    title: 'Diferenciais que fazem a diferença.',
    items: [
      {
        name: 'Visão Estratégica',
        desc: 'Conectamos pessoas aos objetivos do negócio.',
        iconType: 'star',
      },
      {
        name: 'Abordagem Personalizada',
        desc: 'Soluções sob medida para a sua realidade.',
        iconType: 'puzzle',
      },
      {
        name: 'Foco em Resultados',
        desc: 'Projetos práticos e mensuráveis.',
        iconType: 'chart',
      },
      {
        name: 'Experiência Comprovada',
        desc: 'Mais de 15 anos transformando organizações.',
        iconType: 'award',
      },
    ] as DifferentialItem[],
    destaque: {
      title: 'Pessoas no centro. Resultados no futuro.',
      desc: 'Estratégia e humanidade caminhando juntas para negócios mais fortes.',
      image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/59_reuniao_fechamento.webp',
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
    ctaText: 'Quero tirar outra dúvida →',
    ctaHref: '#formulario-diagnostico',
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
      {
        question: 'Qual o formato de trabalho?',
        answer: 'Trabalhamos em formato híbrido (presencial e online), com visitas técnicas em campo, oficinas práticas de facilitação, mentorias executivas e acompanhamento periódico dos rituais de liderança.',
      },
      {
        question: 'Em quanto tempo posso ver resultados?',
        answer: 'Os alinhamentos iniciais e a clareza de papéis geram impactos perceptíveis nas primeiras semanas. Resultados estruturais consolidados ocorrem normalmente entre o 3º e o 6º mês de implementação.',
      },
    ] as FaqItem[],
  },

  ctaBanner: {
    heading: 'Vamos conversar sobre o futuro da sua empresa?',
    desc: 'Descubra como a PowerRH pode ajudar o seu negócio a crescer com pessoas mais engajadas, líderes mais preparados e resultados sustentáveis.',
    image: 'assets/imagens-diversas/fotos_graci_ia/07_CTA_FINAL_E_CONTATO/05_sala_com_vista_porto.webp',
    checklist: [
      'Diagnóstico inicial sem compromisso',
      'Conversa direta com a especialista',
      'Soluções sob medida para a sua realidade',
    ],
    ctaText: 'QUERO FALAR COM A GRACIETE →',
    ctaHref: '#formulario-diagnostico',
  },

  footer: {
    brandTitle: 'PowerRH',
    brandDesc: 'Consultoria estratégica em pessoas, liderança, cultura e governança para organizações que buscam crescimento sustentável e perene.',
    socialLinks: [
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Instagram', href: 'https://instagram.com' },
    ],
    navLinks: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre a Fundadora', href: '#sobre' },
      { label: 'Nossas Soluções', href: '#solucoes' },
      { label: 'Diferenciais', href: '#diferenciais' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Dúvidas Frequentes', href: '#faq' },
    ],
    solutionLinks: [
      { label: 'Cultura & Estrutura', href: '#solucoes' },
      { label: 'Liderança & Desenvolvimento', href: '#solucoes' },
      { label: 'Governança & Sucessão', href: '#solucoes' },
      { label: 'Diagnóstico Gratuito', href: '#formulario-diagnostico' },
    ],
    contact: {
      address: 'Travessa Mauriti, 1822 • Belém — PA',
      phone: '(91) 99299-2091',
      email: 'contato@powerrh.com.br',
    },
    copyright: '© 2024 PowerRH. Todos os direitos reservados.',
    tagline: 'Pessoas que transformam negócios.',
  },
};
