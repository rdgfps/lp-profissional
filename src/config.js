// ─────────────────────────────────────────────────────────────
//  config.js — Personalize tudo aqui sem tocar nos componentes
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  // ── Profissional ───────────────────────────────────────────
  name: 'Dra. Ana Oliveira',
  title: 'Nutricionista',
  crn: 'CRN-3 | 00000',
  tagline: 'Especialista em emagrecimento saudável e saúde hormonal',
  shortBio:
    'Com mais de 8 anos de experiência clínica, ajudo mulheres a reconquistarem a saúde através de uma alimentação inteligente, personalizada e sustentável — sem dietas restritivas ou sofrimento.',
  longBio:
    'Formada em Nutrição pela USP e com pós-graduação em Nutrição Clínica Funcional, desenvolvo protocolos alimentares baseados em evidências científicas, respeitando a individualidade bioquímica de cada paciente. Acredito que comer bem é um ato de amor-próprio.',

  // ── Especialidades (chips exibidos no About) ───────────────
  specialties: [
    'Emagrecimento Saudável',
    'Saúde Hormonal',
    'Síndrome do Intestino Irritável',
    'Nutrição Esportiva',
    'Reeducação Alimentar',
  ],

  // ── WhatsApp ───────────────────────────────────────────────
  whatsappNumber: '5511999999999', // DDI + DDD + número
  whatsappMessage:
    'Olá, Dra. Ana! Vim pelo site e gostaria de agendar minha consulta. 🌿',

  // ── Localização / Atendimento ──────────────────────────────
  location: 'São Paulo – SP',
  attendanceMode: 'Presencial e Online',

  // ── Redes sociais ──────────────────────────────────────────
  instagram: 'https://instagram.com/dra.anaoliveira.nutri',
  instagram_handle: '@dra.anaoliveira.nutri',

  // ── Imagens (substitua pelas URLs reais) ───────────────────
  heroImage:
    'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80',
  aboutImage:
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
}

// ─────────────────────────────────────────────────────────────
//  Paleta de cores — altere conforme a identidade visual
// ─────────────────────────────────────────────────────────────
export const BRAND = {
  primary:    '#3f6e3f',   // Verde escuro
  primaryMid: '#558c55',   // Verde médio
  primaryLight:'#a8c9a8',  // Verde claro
  accent:     '#d4b87e',   // Dourado suave
  bg:         '#fdfcf8',   // Off-white
  bgAlt:      '#f4f8f4',   // Verde muito claro
  bgCream:    '#faf7ef',   // Creme
  text:       '#2a3a2a',   // Verde-escuro quase preto
  textMuted:  '#6b7c6b',   // Cinza-verde
}

// ─────────────────────────────────────────────────────────────
//  Conteúdo das seções
// ─────────────────────────────────────────────────────────────

export const FOR_WHO_ITEMS = [
  {
    icon: '🌸',
    title: 'Mulheres com desequilíbrio hormonal',
    desc: 'TPM intensa, SOP, menopausa, tireoide — a alimentação pode mudar tudo.',
  },
  {
    icon: '⚖️',
    title: 'Quem quer emagrecer de verdade',
    desc: 'Sem efeito sanfona, sem dietas extremas. Resultado duradouro e saudável.',
  },
  {
    icon: '💪',
    title: 'Praticantes de atividade física',
    desc: 'Otimize seu desempenho, recuperação e composição corporal.',
  },
  {
    icon: '🫁',
    title: 'Pacientes com queixas digestivas',
    desc: 'Inchaço, intestino preso ou irritado, refluxo — resolva pela raiz.',
  },
  {
    icon: '🧬',
    title: 'Quem busca longevidade e energia',
    desc: 'Protocolo anti-inflamatório para ter mais disposição no dia a dia.',
  },
  {
    icon: '👩‍👧',
    title: 'Mães que querem melhorar a família',
    desc: 'Aprenda a montar refeições nutritivas e gostosas para toda a família.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Avaliação completa',
    desc:
      'Na primeira consulta, faço uma anamnese detalhada: histórico de saúde, exames, rotina, hábitos alimentares e seus objetivos reais.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Plano alimentar personalizado',
    desc:
      'Elaboro um protocolo 100% individualizado, gostoso e viável para a sua rotina. Sem fórmulas genéricas.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Acompanhamento contínuo',
    desc:
      'Consultas de retorno periódicas para ajuste do plano, análise de exames e suporte via WhatsApp entre as sessões.',
    icon: '🤝',
  },
]

export const BENEFITS = [
  'Plano alimentar feito sob medida para você — não para uma média',
  'Sem proibições radicais: você aprende a se alimentar com equilíbrio',
  'Suporte entre as consultas via WhatsApp',
  'Orientação baseada em exames laboratoriais e sintomas',
  'Estratégias práticas para dia a dia, viagens e eventos sociais',
  'Melhora real da energia, sono, humor e saúde intestinal',
  'Resultados visíveis em 30 dias com acompanhamento adequado',
  'Atendimento presencial em São Paulo ou online para todo o Brasil',
]

export const TESTIMONIALS = [
  {
    name: 'Mariana Costa',
    role: 'Paciente — Emagrecimento',
    stars: 5,
    text:
      'Perdi 11 kg em 4 meses sem passar fome. A Dra. Ana muda sua relação com a comida de forma tão natural que você não sente que está fazendo dieta. Recomendo de olhos fechados!',
    initial: 'M',
    color: 'bg-sage-200',
  },
  {
    name: 'Fernanda Lima',
    role: 'Paciente — SOP e hormônios',
    stars: 5,
    text:
      'Tinha SOP há anos e ninguém nunca tinha me explicado como a alimentação afeta os hormônios. Em 3 meses minhas dores de TPM diminuíram muito e meu ciclo regularizou. Incrível!',
    initial: 'F',
    color: 'bg-cream-200',
  },
  {
    name: 'Juliana Moraes',
    role: 'Paciente — Nutrição esportiva',
    stars: 5,
    text:
      'Sou personal trainer e busquei a Dra. Ana para otimizar minha performance. O resultado foi além do esperado: mais disposição, menos inflamação e ganho de massa muscular visível.',
    initial: 'J',
    color: 'bg-sage-100',
  },
]

export const FOOTER = {
  ownerName: 'Dra. Ana Oliveira',
  developerName: 'Henrique Rodeghiero',
  developerInstagram: 'https://www.instagram.com/henriquerodeghiero/',
  year: new Date().getFullYear(),
}
