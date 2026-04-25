/**
 * DESAFIO AFIRMAÇÕES PODEROSAS — Configuração do Funil
 * ====================================================
 * Este arquivo contém toda a copy, estrutura e configuração
 * da página de vendas. Edite aqui para personalizar textos,
 * preços, bônus e urgência sem mexer no código.
 */

const FLOW = {

  // ─── INFORMAÇÕES GERAIS ──────────────────────────────────
  brand: {
    name: 'Andressa Guimarães',
    instagram: 'https://www.instagram.com/andressaguimaaraes/',
    instagramHandle: '@andressaguimaaraes',
    checkoutUrl: 'https://pay.kiwify.com.br/fReX41V',
    year: 2026,
  },

  // ─── HERO ────────────────────────────────────────────────
  hero: {
    eyebrow: 'Desafio de 7 dias',
    headline: 'Pare de repetir afirmações que você não sente.',
    subheadline: 'Em 7 dias, aprenda a reprogramar sua mente com um método simples baseado em neurociência e princípios milenares — e comece a ver resultados reais na sua vida.',
    cta: 'Quero começar minha transformação',
    // Foto da Andressa — substitua pelo path/URL final
    heroImage: 'images/andressa-hero.jpg',
  },

  // ─── MARQUEE (faixa animada) ─────────────────────────────
  marquee: {
    text: 'AFIRMAÇÕES PODEROSAS',
    repeat: 8,
  },

  // ─── BLOCO DE DOR ────────────────────────────────────────
  painPoints: {
    title: 'Você se reconhece em alguma dessas frases?',
    items: [
      {
        quote: '"Eu sei que sou capaz, mas não consigo sair do lugar."',
        detail: 'Você tem sonhos grandes, mas sente que algo invisível te trava toda vez que tenta avançar.',
      },
      {
        quote: '"Todo mês é a mesma coisa com dinheiro."',
        detail: 'A escassez parece um ciclo que se repete, não importa o quanto você trabalhe.',
      },
      {
        quote: '"Eu começo, mas não termino."',
        detail: 'Projetos, cursos, dietas, rotinas — você já perdeu a conta de quantas vezes começou de novo.',
      },
      {
        quote: '"Eu repito afirmação e não sinto nada."',
        detail: 'Já tentou visualizar, repetir mantras, pensar positivo — e continuou no mesmo lugar.',
      },
      {
        quote: '"Parece que tem algo invisível me segurando."',
        detail: 'Uma força que você não sabe explicar, mas sente todos os dias quando tenta dar o próximo passo.',
      },
    ],
    closing: 'Se você se identificou com pelo menos uma dessas frases, saiba: o problema não é falta de vontade. É falta de método.',
  },

  // ─── MECANISMO ÚNICO ─────────────────────────────────────
  mechanism: {
    eyebrow: 'Por que este desafio é diferente',
    title: 'Afirmações que você sente — não apenas repete.',
    intro: 'A maioria dos métodos pede pra você "pensar positivo" ou repetir frases no espelho. Mas seu cérebro não muda por repetição vazia. Ele muda por emoção + ação + constância.',
    points: [
      {
        icon: '🧠',
        title: 'Base em neurociência',
        text: 'Cada passo do desafio usa princípios reais de reprogramação mental — não misticismo sem fundamento.',
      },
      {
        icon: '📖',
        title: 'Princípios milenares',
        text: 'Sabedoria bíblica e ensinamentos que atravessaram séculos, aplicados de forma prática no seu dia a dia.',
      },
      {
        icon: '📅',
        title: 'Estrutura de 7 dias',
        text: 'Nada de "pacotão" de conteúdo que você nunca assiste. São passos diários, leves e aplicáveis.',
      },
      {
        icon: '🤝',
        title: 'Acompanhamento real',
        text: 'Você não está sozinha. A Andressa te guia pessoalmente, passo a passo, como se estivesse ao seu lado.',
      },
    ],
    closing: 'Não é mais informação. É estrutura, presença e um método que funciona com você — não apesar de você.',
  },

  // ─── COMO FUNCIONA ───────────────────────────────────────
  howItWorks: {
    title: 'Como funciona o Desafio de 7 dias',
    subtitle: 'Simples, prático e transformador.',
    steps: [
      {
        day: 'Dia 1',
        title: 'Clareza e intenção',
        desc: 'Você recebe as 3 primeiras aulas e aplica o primeiro passo do desafio. Sem pressa, no seu ritmo.',
      },
      {
        day: 'Dia 2 ao 6',
        title: 'Aprofundamento diário',
        desc: 'A cada dia, 3 novos passos são liberados + um bônus exclusivo. Você avança sem acumular conteúdo.',
      },
      {
        day: 'Dia 7',
        title: 'Integração e nova identidade',
        desc: 'Você fecha o ciclo com clareza sobre quem está se tornando. E os resultados já começaram.',
      },
    ],
    detail: 'Tudo chega no seu e-mail. Você acessa do celular, do tablet ou do computador. Sem app, sem complicação.',
  },

  // ─── STACK DE BÔNUS ──────────────────────────────────────
  bonuses: {
    title: 'Tudo que você recebe ao entrar no desafio',
    subtitle: 'Além das aulas diárias, cada passo desbloqueia um material exclusivo:',
    items: [
      {
        name: 'Planner de Desejos e Metas',
        desc: 'Organize seus sonhos com clareza. Planeje cada passo da sua transformação de forma visual e prática.',
        value: 'R$ 67',
        icon: '📋',
      },
      {
        name: 'Manual da Manifestação em 10 Passos',
        desc: 'Um guia direto ao ponto para aplicar os princípios de cocriação com base em neurociência e fé.',
        value: 'R$ 47',
        icon: '📘',
      },
      {
        name: 'Plano de Ação para Cocriar com Clareza',
        desc: 'Saia do "eu quero" para o "eu estou fazendo". Estrutura prática para transformar intenção em resultado.',
        value: 'R$ 37',
        icon: '🎯',
      },
      {
        name: 'Desafio de 7 Dias da Manifestação',
        desc: 'O coração do programa. Sete dias de exercícios guiados que reprogramam sua mente e suas ações.',
        value: 'R$ 97',
        icon: '🔥',
      },
      {
        name: 'Mural de Cocriação de Sonhos + Templates',
        desc: 'Visualize sua nova realidade. Templates prontos para criar seu mural com intenção e foco.',
        value: 'R$ 47',
        icon: '✨',
      },
      {
        name: 'Checklists e Guias Rápidos de Manifestação',
        desc: 'Para os dias em que você precisa de um empurrão rápido. Consulte, aplique e siga em frente.',
        value: 'R$ 27',
        icon: '✅',
      },
    ],
    totalValue: 'R$ 322',
  },

  // ─── PROVA SOCIAL ────────────────────────────────────────
  testimonials: {
    title: 'Elas já começaram a transformação',
    items: [
      {
        name: 'Karina S.',
        text: '"Que planner completo, além de lindo, feminino, intencional. Estou aos poucos incluindo minha rotina nele, me inspirando muito nas coisas que você deixou como exemplo, amei."',
      },
      {
        name: 'Juliana G.',
        text: '"Estou precisando me organizar melhor, porque quero mudar de carreira e o planner é perfeito, muito melhor do que imaginava!"',
      },
      {
        name: 'Gabi H.',
        text: '"Ficava namorando ele nos seus stories. Fiquei bem feliz quando você abriu o acesso! Estou adorando."',
      },
      {
        name: 'Kellen F.',
        text: '"Apaixonada com cada detalhe. Que bom que você deixou suas anotações, ajuda na hora de escrever as minhas. Adorei os insights."',
      },
      {
        name: 'Daniele D.',
        text: '"Já utilizava o Notion antes mas nem se compara com a mansidão de detalhes. Criou pensando em todas as áreas da nossa vida e partindo dos nossos princípios."',
      },
      {
        name: 'Lohany D.',
        text: '"Quando mostrava no seu story ficava tão curiosa pra ver e agora que liberou acesso estou in love."',
      },
      {
        name: 'Marina',
        text: '"Amei! Com certeza vou usar. Sabia que ia dar certo!"',
      },
    ],
  },

  // ─── OFERTA E PREÇO ──────────────────────────────────────
  offer: {
    eyebrow: 'Oferta especial',
    title: 'Comece sua transformação agora',
    originalPrice: 'R$ 322,00',
    price: 'R$ 100',
    priceNote: 'ou 12x de R$ 9,70',
    guarantee: {
      days: 7,
      title: 'Garantia incondicional de 7 dias',
      text: 'Se em 7 dias você sentir que o desafio não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.',
    },
    cta: 'Quero entrar no desafio agora',
  },

  // ─── URGÊNCIA (ligável/desligável) ───────────────────────
  urgency: {
    enabled: true,
    type: 'countdown', // 'countdown' | 'spots' | 'bonus'
    // Contador regressivo de 48h a partir do primeiro acesso
    countdownHours: 48,
    message: 'Bônus exclusivos disponíveis por tempo limitado',
    expiredMessage: 'Os bônus exclusivos expiraram, mas você ainda pode entrar no desafio.',
    // Se type === 'bonus', mostrar bônus extra por tempo limitado
    bonusName: 'Acesso ao grupo VIP de acompanhamento',
    bonusValue: 'R$ 97',
  },

  // ─── SOBRE A ANDRESSA ────────────────────────────────────
  about: {
    title: 'Quem é a Andressa?',
    image: 'images/andressa-about.jpg',
    bio: [
      'Eu sou a Andressa Guimarães. E antes de te ensinar qualquer coisa, preciso te dizer: eu já estive exatamente onde você está.',
      'Já repeti afirmações sem sentir nada. Já comecei projetos que nunca terminei. Já olhei pro meu mês e pensei "de novo a mesma coisa?".',
      'Até que descobri que o problema nunca foi falta de vontade — era falta de um método que conectasse minha mente, minha fé e minhas ações de forma prática.',
      'Hoje, ajudo mulheres como você a sair do ciclo da procrastinação e do bloqueio usando neurociência, princípios milenares e uma estrutura simples que funciona no dia a dia real — não no mundo perfeito do Instagram.',
    ],
    instagram: '@andressaguimaaraes',
  },

  // ─── FAQ ─────────────────────────────────────────────────
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Preciso de conhecimento prévio sobre neurociência ou manifestação?',
        a: 'Não. O desafio foi criado para iniciantes. Cada passo é explicado de forma simples e prática, como se a Andressa estivesse conversando com você.',
      },
      {
        q: 'Como eu acesso o conteúdo?',
        a: 'Após a compra, você recebe um e-mail com o acesso. No primeiro dia são liberadas 3 aulas. A cada dia, novos passos e bônus são desbloqueados automaticamente.',
      },
      {
        q: 'E se eu não tiver tempo?',
        a: 'As aulas são curtas e práticas. Você precisa de 15 a 20 minutos por dia. E o conteúdo fica disponível para sempre — se precisar pausar, pode retomar quando quiser.',
      },
      {
        q: 'Funciona para quem já tentou outros métodos e não deu certo?',
        a: 'Principalmente para você. A maioria dos métodos pede repetição sem emoção. Aqui, cada passo conecta sua mente, sua fé e sua ação de forma integrada. É diferente de tudo que você já tentou.',
      },
      {
        q: 'E se eu não gostar?',
        a: 'Você tem 7 dias de garantia incondicional. Se sentir que não é para você, devolvemos 100% do valor. Sem perguntas.',
      },
      {
        q: 'O desafio é religioso?',
        a: 'O desafio usa princípios milenares e versículos bíblicos como base, combinados com neurociência. Não é vinculado a nenhuma denominação religiosa. É para qualquer mulher que tem fé e quer crescer.',
      },
      {
        q: 'Posso acessar pelo celular?',
        a: 'Sim. O conteúdo funciona em qualquer dispositivo — celular, tablet ou computador. Sem app, sem complicação.',
      },
    ],
  },

  // ─── CTA FINAL ───────────────────────────────────────────
  finalCta: {
    title: 'Você já sabe o que precisa fazer.',
    subtitle: 'A única diferença entre quem transforma a vida e quem continua no mesmo lugar é uma decisão. Esta é a sua.',
    cta: 'Quero começar meu desafio de 7 dias',
    verse: '"Tudo é possível ao que crê." — Marcos 9:23',
  },

  // ─── FOOTER ──────────────────────────────────────────────
  footer: {
    disclaimer: 'Este produto não garante resultados específicos. Os resultados variam de pessoa para pessoa e dependem da aplicação individual do método apresentado.',
    links: {
      terms: '#',
      privacy: '#',
    },
  },
};
