document.addEventListener("DOMContentLoaded", () => {
  // Elementos principais
  const btnNovaTarefa = document.getElementById("nova-tarefa");
  const drawer = document.getElementById("drawer");
  const FecharDrawer = document.getElementById("FecharDrawer");
  const Overlay = document.getElementById("Overlay");
  const brilhoIcon = document.getElementById("brilho");
  const brilhoIconDesktop = document.getElementById("brilho-desktop");
  const body = document.getElementById("body");
  const header = document.getElementById("header");
  const plusIcon = document.getElementById("plus-icon");
  const inputPesquisa = document.getElementById("input-pesquisa");
  const inputPesquisaMobile = document.getElementById("input-pesquisa-mobile");
  const btnSearch = document.getElementById("btn-toggle-search");
  const searchIcon = btnSearch ? btnSearch.querySelector("box-icon") : null;
  const tituloPrincipal = document.getElementById("titulo-principal");
  const tituloTarefas = document.getElementById("titulo-tarefas");
  const drawerTitulo = document.getElementById("drawer-titulo");
  const labelTitulo = document.getElementById("label-titulo");
  const labelDescricao = document.getElementById("label-descricao");
  const inputTitulo = document.getElementById("input-titulo");
  const textareaDescricao = document.getElementById("textarea-descricao");
  const btnCriar = document.getElementById("btn-criar");
  const fecharIcon = document.getElementById("fechar-icon");
  const listaDeTarefas = document.querySelector("#lista-de-tarefas");



  // Estado do tema (false = claro, true = escuro)
  let temaEscuro = false;

  // Recupera tema do localStorage se existir
  if(localStorage.getItem("temaEscuro") === "true") {
    temaEscuro = true;
    aplicarTema(true);
  } else {
    aplicarTema(false);
  }

  // Função para aplicar o tema
  function aplicarTema(isDark) {
    temaEscuro = isDark;
    if (isDark) {
      body.classList.replace("light", "dark");
      body.classList.replace("bg-black/5", "bg-[#1A1A1A]");
      header.classList.replace("bg-white", "bg-[#111111]");

      brilhoIcon.setAttribute("name", "sun");
      brilhoIcon.setAttribute("color", "#7CFFB0");
      if (brilhoIconDesktop) {
        brilhoIconDesktop.setAttribute("name", "sun");
        brilhoIconDesktop.setAttribute("color", "#7CFFB0");
      }

      btnNovaTarefa.classList.replace("bg-black", "bg-[#7CFFB0]");
      btnNovaTarefa.classList.replace("text-white", "text-black");
      plusIcon.setAttribute("color", "#2D2D2D");

      inputPesquisa.classList.replace("bg-black/5", "bg-[#FFFFFF1A]");
      inputPesquisa.classList.replace("placeholder-black/50", "placeholder-white/50");
      inputPesquisa.classList.replace("text-black", "text-white");

      tituloPrincipal.classList.replace("text-black", "text-[#FDFDFD]");
      tituloTarefas.classList.replace("text-black/50", "text-[#B0B0B0]");

      const cards = document.querySelectorAll(".card");
      const cardTitulos = document.querySelectorAll(".card-titulo");
      const cardDatas = document.querySelectorAll(".card-data");

      cards.forEach(card => card.classList.replace("bg-white", "bg-[#2D2D2D]"));
      cardTitulos.forEach(t => t.classList.replace("text-black", "text-[#C3C3C3]"));
      cardDatas.forEach(d => d.classList.replace("text-black/50", "text-[#C3C3C3]"));

      setCardIconHover(true);

      drawer.classList.replace("bg-white", "bg-[#1A1A1A]");
      drawerTitulo.classList.replace("text-black", "text-[#B0B0B0]");
      labelTitulo.classList.replace("text-black/70", "text-white");
      labelDescricao.classList.replace("text-black/70", "text-white");
      inputTitulo.classList.replace("bg-black/5", "bg-[#2D2D2D]");
      inputTitulo.classList.replace("text-black", "text-white");
      textareaDescricao.classList.replace("bg-black/5", "bg-[#2D2D2D]");
      textareaDescricao.classList.replace("text-black", "text-white");
      btnCriar.classList.replace("bg-[#2D2D2D]", "bg-[#7CFFB0]");
      btnCriar.classList.replace("text-white", "text-black");

      fecharIcon.setAttribute("color", "#666");

      if (searchIcon) searchIcon.setAttribute("color", "#FFFFFF");
      if (inputPesquisaMobile) {
        inputPesquisaMobile.classList.replace("bg-black/5", "bg-[#FFFFFF1A]");
        inputPesquisaMobile.classList.replace("placeholder-black/50", "placeholder-white/50");
        inputPesquisaMobile.classList.replace("text-black", "text-white");
      }
    } else {
      body.classList.replace("dark", "light");
      body.classList.replace("bg-[#1A1A1A]", "bg-black/5");
      header.classList.replace("bg-[#111111]", "bg-white");

      brilhoIcon.setAttribute("name", "moon");
      brilhoIcon.setAttribute("color", "#2D2D2D");
      if (brilhoIconDesktop) {
        brilhoIconDesktop.setAttribute("name", "moon");
        brilhoIconDesktop.setAttribute("color", "#2D2D2D");
      }

      btnNovaTarefa.classList.replace("bg-[#7CFFB0]", "bg-black");
      btnNovaTarefa.classList.replace("text-black", "text-white");
      plusIcon.setAttribute("color", "#FFFFFF");

      inputPesquisa.classList.replace("bg-[#FFFFFF1A]", "bg-black/5");
      inputPesquisa.classList.replace("placeholder-white/50", "placeholder-black/50");
      inputPesquisa.classList.replace("text-white", "text-black");

      tituloPrincipal.classList.replace("text-[#FDFDFD]", "text-black");
      tituloTarefas.classList.replace("text-[#B0B0B0]", "text-black/50");

      const cards = document.querySelectorAll(".card");
      const cardTitulos = document.querySelectorAll(".card-titulo");
      const cardDatas = document.querySelectorAll(".card-data");

      cards.forEach(card => card.classList.replace("bg-[#2D2D2D]", "bg-white"));
      cardTitulos.forEach(t => t.classList.replace("text-[#C3C3C3]", "text-black"));
      cardDatas.forEach(d => d.classList.replace("text-[#C3C3C3]", "text-black/50"));

      setCardIconHover(false);

      drawer.classList.replace("bg-[#1A1A1A]", "bg-white");
      drawerTitulo.classList.replace("text-[#B0B0B0]", "text-black");
      labelTitulo.classList.replace("text-white", "text-black/70");
      labelDescricao.classList.replace("text-white", "text-black/70");
      inputTitulo.classList.replace("bg-[#2D2D2D]", "bg-black/5");
      inputTitulo.classList.replace("text-white", "text-black");
      textareaDescricao.classList.replace("bg-[#2D2D2D]", "bg-black/5");
      textareaDescricao.classList.replace("text-white", "text-black");
      btnCriar.classList.replace("bg-[#7CFFB0]", "bg-[#2D2D2D]");
      btnCriar.classList.replace("text-black", "text-white");

      fecharIcon.setAttribute("color", "#666");

      if (searchIcon) searchIcon.setAttribute("color", "#000000");
      if (inputPesquisaMobile) {
        inputPesquisaMobile.classList.replace("bg-[#FFFFFF1A]", "bg-black/5");
        inputPesquisaMobile.classList.replace("placeholder-white/50", "placeholder-black/50");
        inputPesquisaMobile.classList.replace("text-white", "text-black");
      }
    }

    brilhoIcon.style.transform = "rotate(0deg)";
    if (brilhoIconDesktop) brilhoIconDesktop.style.transform = "rotate(0deg)";

    // Salva o tema no localStorage para persistir
    localStorage.setItem("temaEscuro", temaEscuro);
  }

  // Função toggleTema que usa aplicarTema
  function toggleTema() {
    brilhoIcon.style.transform = "rotate(360deg)";
    if (brilhoIconDesktop) brilhoIconDesktop.style.transform = "rotate(360deg)";

    setTimeout(() => {
      aplicarTema(!temaEscuro);
    }, 400);
  }

  brilhoIcon.addEventListener("click", toggleTema);
  if (brilhoIconDesktop) brilhoIconDesktop.addEventListener("click", toggleTema);

  // Função para atualizar os ícones dos cards (hover) e deletar tarefa
  function setCardIconHover(isDark) {
    const cardIcons = document.querySelectorAll(".card-icon");
    cardIcons.forEach(icon => {
      icon.replaceWith(icon.cloneNode(true)); // limpa event listeners anteriores
    });

    const updatedIcons = document.querySelectorAll(".card-icon");

    updatedIcons.forEach(icon => {
      if (isDark) {
        icon.setAttribute("color", "#C3C3C3");
        icon.addEventListener("mouseenter", () => icon.setAttribute("color", "#7CFFB0"));
        icon.addEventListener("mouseleave", () => icon.setAttribute("color", "#C3C3C3"));
      } else {
        icon.setAttribute("color", "#666");
        icon.addEventListener("mouseenter", () => icon.setAttribute("color", "#2D2D2D"));
        icon.addEventListener("mouseleave", () => icon.setAttribute("color", "#666"));
      }
    });

    // para deletar tarefa
    updatedIcons.forEach(icon => {
      if (icon.getAttribute("name") === "trash-alt") {
        icon.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          const card = icon.closest(".card");
          if (!card) return;
          const titulo = card.querySelector(".card-titulo").textContent;
          if (!confirm(`Deseja deletar a tarefa: "${titulo}"?`)) return;

          const idDaTarefa = card.getAttribute("data-id");
          if (idDaTarefa) {
            deletarTarefa(idDaTarefa)
              .then(() => buscarTarefas())
              .catch(erro => alert("Erro ao deletar tarefa: " + erro.message));
          } else {
            card.remove();
          }
        });
      }

    });
  }

  // Abrir Drawer (Nova tarefa)
  btnNovaTarefa.addEventListener("click", () => {
    abrirDrawer();
  });

  // Abrir drawer criação
  function abrirDrawer() {
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");
    Overlay.classList.remove("opacity-0", "pointer-events-none");
    Overlay.classList.add("opacity-100");
  }

  // Fechar Drawer criação
  function fecharDrawer() {
    drawer.classList.add("translate-x-full");
    drawer.classList.remove("translate-x-0");
    Overlay.classList.remove("opacity-100");
    Overlay.classList.add("opacity-0", "pointer-events-none");
  }
  FecharDrawer.addEventListener("click", fecharDrawer);
  Overlay.addEventListener("click", () => {
  fecharDrawer();
});

  // Pesquisa (mobile)
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      if (inputPesquisaMobile.classList.contains("hidden")) {
        inputPesquisaMobile.classList.remove("hidden");
        requestAnimationFrame(() => {
          inputPesquisaMobile.classList.remove("scale-y-0");
          inputPesquisaMobile.classList.add("scale-y-100");
        });
      } else {
        inputPesquisaMobile.classList.remove("scale-y-100");
        inputPesquisaMobile.classList.add("scale-y-0");
        setTimeout(() => {
          inputPesquisaMobile.classList.add("hidden");
        }, 300);
      }
    });
  }

  // FILTRO DE PESQUISA (Desktop e Mobile)
function aplicarFiltroDeBusca(input) {
  const termo = input.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const titulo = card.querySelector('.card-titulo')?.textContent.toLowerCase() || '';
    const descricao = card.querySelector(".card-descricao").textContent;
    
    
    const corresponde = titulo.includes(termo) || descricao.includes(termo);
    card.style.display = corresponde ? 'block' : 'none';
  });
}

const inputDesktop = document.getElementById('input-pesquisa');
const inputMobile = document.getElementById('input-pesquisa-mobile');

inputDesktop.addEventListener('input', () => aplicarFiltroDeBusca(inputDesktop));
inputMobile.addEventListener('input', () => aplicarFiltroDeBusca(inputMobile));


  // Função para carregar tarefas na tela
function carregarTarefas(tarefas) {
  listaDeTarefas.innerHTML = "";

  tarefas.forEach(tarefa => {
    const cardBgClass = temaEscuro ? "bg-[#2D2D2D]" : "bg-white";
    const tituloClass = temaEscuro ? "text-[#C3C3C3]" : "text-black";
    const dataClass = temaEscuro ? "text-[#C3C3C3]" : "text-black/50";
    const iconColor = temaEscuro ? "#C3C3C3" : "#666";

    function escapeHtml(text) {
      if (!text) return "";
      return text.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
    }

    const descricaoCompleta = tarefa.descricao || "";

    listaDeTarefas.innerHTML += `
      <div class="card w-full sm:w-[300px] lg:w-[318px] lg:h-[163px] ${cardBgClass} rounded-[5px] shadow hover:shadow-lg hover:scale-105 transition-transform duration-200 p-4 flex flex-col justify-between" data-id="${tarefa.id || ""}">
        <p class="card-titulo font-bold text-[16px] ${tituloClass}">${escapeHtml(tarefa.titulo)}</p>
        <p class="card-descricao overflow-hidden line-clamp-3 text-[14.5px] text-[#808080] leading-tight">${escapeHtml(descricaoCompleta)}</p>
        <div class="flex justify-between items-center pt-2">
          <span class="card-data text-[13px] font-bold ${dataClass}">${tarefa.data}</span>
          <div class="flex gap-2 items-center">
            <box-icon class="card-icon cursor-pointer" name="pencil" onclick="abrirGaveta(true), preencherFormulario(${tarefa.id})" type="solid" size="20px" color="${iconColor}"></box-icon>
            <box-icon class="card-icon cursor-pointer" name="trash-alt" type="solid" size="20px" color="${iconColor}"></box-icon>
          </div>
        </div>
      </div>
    `;
  });

  setCardIconHover(temaEscuro);
}

let lista = []

  // Função para buscar tarefas 
  function buscarTarefas() {
    fetch("http://localhost:3000/tarefas")
      .then(resposta => resposta.json())
      .then(json => {
        lista = json;
        carregarTarefas(json);
      })
      .catch(erro => alert("Erro ao buscar tarefas: " + erro.message));
  }

  buscarTarefas();

  // Função para capturar dados do formulário
  function capturarDados(idDeUmFormulario) {
    let form = document.querySelector(idDeUmFormulario);
    let formData = new FormData(form);
    let dados = Object.fromEntries(formData.entries());
        data: new Date().toLocaleDateString().split('/').reverse().join('-');
    return dados;
  }

  // Função para criar tarefa
  function criarTarefa(event) {
    event.preventDefault();

    const dados = capturarDados("#formCriar");

    // Validação 
    if (!dados["input-titulo"] || dados["input-titulo"].trim() === "") {
      alert("O título é obrigatório!");
      return;
    }

    const payload = {
      titulo: dados["input-titulo"].trim(),
      descricao: dados["textarea-descricao"] ? dados["textarea-descricao"].trim() : "",
      data: new Date().toLocaleDateString()
    };

    fetch("http://localhost:3000/tarefas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(resposta => {
        if (!resposta.ok) throw new Error("Erro ao criar tarefa");
        return resposta.json();
      })
      .then(() => {
        buscarTarefas(); 
        fecharDrawer();
        
        inputTitulo.value = "";
        textareaDescricao.value = "";
      })
      .catch(erro => {
        alert("Erro ao criar tarefa: " + erro.message);
      });
  }

  
  const formCriar = document.querySelector("#formCriar");
  formCriar.addEventListener("submit", criarTarefa);

  
  function deletarTarefa(idDaTarefa) {
    return fetch(`http://localhost:3000/tarefas/${idDaTarefa}`, {
      method: "DELETE",
    });
  }
});

function editarTarefa(){
  event.preventDefault();
  const id = document.querySelector ("formEditar input[name='tarefa_id']").value;
  fetch(`http://localhost:3000/tarefas/${id})`,{
    method: "put",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(capturarDados("#formEditar"))
})
}

function preencherFormulario(idDaTarefa){
  let idValue = document.querySelector ("#formEditar input[name='tarefa_id']");
  let tituloValue = document.querySelector ("formEditar input[name='titulo]");
  let descricaoValue = document.querySelector ("#formEditar textarea[name='descricao']");
  let tarefa = lista.find(item => item.id == idDaTarefa);

  idValue.value = tarefa.id;
  tituloValue.value = tarefa.titulo;
  descricaoValue.value = tarefa.descricao;
}

