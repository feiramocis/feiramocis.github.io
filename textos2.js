const TEXTOS = {
  global: {
    sigla: "MOCIS",
    nome: "Mostra Científica de Inovação e Ciência",
    mobileFooter: "MOCIS • Mostra Científica de Inovação e Ciência",
    footer: "© 2027 MOCIS — Mostra Científica de Inovação e Ciência. Todos os direitos reservados."
  },
  nav: {
    inicio: "Início",
    inscricoes: "Inscrições",
    regulamento: "Regulamento",
    programacao: "Programação",
    projetos: "Projetos",
    avaliacao: "Avaliação",
    premiacao: "Premiação",
    sobre: "Sobre",
    contato: "Contato"
  },
  home: {
    title: "MOCIS - Mostra Científica de Inovação e Ciência",
    heroTitle: "MOCIS",
    heroSubtitle: "Mostra Científica de Inovação e Ciência",
    cardDataLabel: "Data do Evento",
    cardDataValue: "10 a 12 de Setembro de 2027",
    cardLocalLabel: "Local do Evento",
    cardLocalValue: "Centro de Eventos - Cidade/CE",
    btnInscreva: "Inscreva seu projeto",
    btnRegulamento: "Veja o regulamento",
    card1Titulo: "Quem pode participar?",
    card1Descricao: "Estudantes do Ensino Fundamental, Médio, Técnico e Superior de escolas públicas e privadas.",
    card1Link: "Saber mais",
    card2Titulo: "Áreas do conhecimento",
    card2Descricao: "Exatas, Biológicas, Engenharias, Humanas, Saúde, Agrárias e Sociais Aplicadas.",
    card2Link: "Ver categorias",
    card3Titulo: "Principais datas",
    card3Descricao: "Acompanhe o cronograma de submissões, homologação dos trabalhos e os dias de feira.",
    card3Link: "Ver cronograma",
    card4Titulo: "Premiação",
    card4Descricao: "Medalhas, troféus, bolsas de pesquisa e credenciamentos para eventos nacionais e internacionais.",
    card4Link: "Ver prêmios"
  },
  inscricoes: {
    pageTitle: "Inscrições - MOCIS | Mostra Científica de Inovação e Ciência",
    titulo: "Inscrições",
    subtitulo: "Preencha o formulário abaixo para submeter o seu trabalho para a Mostra Científica.",
    iframeUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXEMPLO/viewform?embedded=true",
    linkDireto: "Problemas a visualizar o formulário? <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_EXEMPLO/viewform' target='_blank' class='text-brand-blue font-semibold underline hover:text-brand-navy transition-colors'>Clique aqui para abrir num novo separador</a>."
  },
  regulamento: {},
  programacao: {
    pageTitle: "Programação - MOCIS | Mostra Científica de Inovação e Ciência",
    titulo: "Programação",
    subtitulo: "Acompanhe os prazos de submissão e a agenda das atividades presenciais do evento.",
    
    // Etapas da Timeline (1: Aguardando | 2: Acontecendo | 3: Finalizado)
    etapa1Nome: "Período de Inscrições e Submissão de Projetos",
    etapa1Data: "01 de Maio a 31 de Julho de 2027",
    etapa1Status: 2, // Acontecendo
    
    etapa2Nome: "Avaliação dos Trabalhos Submetidos",
    etapa2Data: "01 de Agosto a 15 de Agosto de 2027",
    etapa2Status: 1, // Aguardando
    
    etapa3Nome: "Divulgação dos Projetos Aprovados",
    etapa3Data: "20 de Agosto de 2027",
    etapa3Status: 1, // Aguardando
    
    etapa4Nome: "Confirmação de Presença dos Finalistas",
    etapa4Data: "21 a 30 de Agosto de 2027",
    etapa4Status: 1, // Aguardando
    
    etapa5Nome: "Realização da MOCIS 2027",
    etapa5Data: "10 a 12 de Setembro de 2027",
    etapa5Status: 1  // Aguardando
  },
  projetos: {},
  avaliacao: {
    pageTitle: "Avaliação",
    titulo: "Processo de Avaliação",
    subtitulo: "Conheça as etapas, a composição das bancas examinadoras e os critérios utilizados na pontuação dos projetos da MOCIS.",
    etapa1Titulo: "Avaliação Virtual (Submissão)",
    etapa1Descricao: "Análise prévia do resumo expandido e plano de pesquisa realizada por pareceristas ad hoc para selecionar os trabalhos aprovados.",
    etapa2Titulo: "Avaliação Presencial (Estande)",
    etapa2Descricao: "Arguição direta dos avaliadores nos estandes durante os dias de feira, analisando postura, protótipos e apresentação oral.",
    criteriosTitulo: "Critérios e Pontuação",
    criteriosSubtitulo: "A nota final (máximo de 100 pontos) será calculada pela média das avaliações individuais dos avaliadores:",
    criterio1Titulo: "Metodologia Científica e Rigor",
    criterio1Pontos: "30 pts",
    criterio1Descricao: "Definição do problema, Clareza dos objetivos, Coleta de dados e Análise dos resultados.",
    criterio2Titulo: "Inovação, Criatividade e Impacto",
    criterio2Pontos: "25 pts",
    criterio2Descricao: "Originalidade da proposta, Potencial de aplicação e Solução para problemas reais.",
    criterio3Titulo: "Apresentação Oral e Domínio",
    criterio3Pontos: "20 pts",
    criterio3Descricao: "Fluência, Envolvimento de toda a equipe, Clareza e Resposta às dúvidas da banca.",
    criterio4Titulo: "Diário de Bordo e Relatório",
    criterio4Pontos: "15 pts",
    criterio4Descricao: "Detalhamento das etapas de desenvolvimento, Registros cronológicos e Coerência documental.",
    criterio5Titulo: "Estande e Recursos Visuais",
    criterio5Pontos: "10 pts",
    criterio5Descricao: "Organização do espaço, Qualidade visual do banner, Protótipos e Demonstrações práticas."
  },
  premiacao: {},
  sobre: {},
  contato: {
    pageTitle: "Contato",
    titulo: "Fale Conosco",
    subtitulo: "Tem dúvidas sobre as inscrições, regulamento ou precisa de suporte? Entre em contato com a equipe de organização da MOCIS.",
    formTitulo: "Envie uma Mensagem",
    labelNome: "Seu Nome",
    labelEmail: "E-mail",
    labelAssunto: "Assunto",
    labelMensagem: "Mensagem",
    btnEnviar: "Enviar Mensagem",
    emailTitulo: "E-mail Oficial",
    emailSub: "Resposta em até 24h úteis",
    emailVal: "contato@mocis.com.br",
    localTitulo: "Local do Evento",
    localDesc: "Pavilhão de Eventos Científicos<br>Campus Universitário MOCIS",
    redesTitulo: "Redes Sociais",
    redesSub: "Acompanhe as novidades do evento em tempo real:"
  },
};