document.addEventListener("DOMContentLoaded", () => {
  function obterValorPorCaminho(obj, caminho) {
    return caminho.split('.').reduce((acc, chave) => (acc && acc[chave] !== undefined) ? acc[chave] : undefined, obj);
  }

  // Mapeamento dos 3 estados solicitados
  const statusConfig = {
    1: { texto: "Aguardando", classe: "bg-slate-100 text-slate-600 border border-slate-200" },
    2: { texto: "Acontecendo", classe: "bg-amber-100 text-amber-800 border border-amber-300 font-bold animate-pulse" },
    3: { texto: "Finalizado", classe: "bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold" }
  };

  if (typeof textos !== "undefined") {
    // Processa Textos e HTML
    document.querySelectorAll("[data-texto]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-texto");
      const valor = obterValorPorCaminho(textos, chave);
      if (valor !== undefined) {
        elemento.innerHTML = valor;
      }
    });

    // Processa URLs Dinâmicas (ex: iframe src)
    document.querySelectorAll("[data-src]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-src");
      const valor = obterValorPorCaminho(textos, chave);
      if (valor !== undefined) {
        elemento.src = valor;
      }
    });

    // Processa Badges de Status (1, 2 ou 3)
    document.querySelectorAll("[data-status]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-status");
      const valor = obterValorPorCaminho(textos, chave);
      const config = statusConfig[valor] || statusConfig[1];
      
      elemento.textContent = config.texto;
      elemento.className = `px-3 py-1 text-xs rounded-full inline-flex items-center gap-1.5 ${config.classe}`;
    });
  }
});