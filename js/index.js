<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Elementos
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
    const cards = document.querySelectorAll(".card");
    const cardTitulos = document.querySelectorAll(".card-titulo");
    const cardDatas = document.querySelectorAll(".card-data");
    const cardIcons = document.querySelectorAll(".card-icon");
    const drawerTitulo = document.getElementById("drawer-titulo");
    const labelTitulo = document.getElementById("label-titulo");
    const labelDescricao = document.getElementById("label-descricao");
    const inputTitulo = document.getElementById("input-titulo");
    const textareaDescricao = document.getElementById("textarea-descricao");
    const btnCriar = document.getElementById("btn-criar");
    const fecharIcon = document.getElementById("fechar-icon");

    // Estado do tema (false = claro, true = escuro)
    let temaEscuro = false;

    // Abrir Drawer ( Nova tarefa )
    btnNovaTarefa.addEventListener("click", () => {
      drawer.classList.remove("translate-x-full");
      drawer.classList.add("translate-x-0");
      Overlay.classList.remove("opacity-0", "pointer-events-none");
      Overlay.classList.add("opacity-100");
    });

    function fecharDrawer() {
      drawer.classList.add("translate-x-full");
      drawer.classList.remove("translate-x-0");
      Overlay.classList.remove("opacity-100");
      Overlay.classList.add("opacity-0", "pointer-events-none");
    }

    FecharDrawer.addEventListener("click", fecharDrawer);
    Overlay.addEventListener("click", fecharDrawer);

    // Função para hover dos ícones dos cards
    function setCardIconHover(isDark) {
      cardIcons.forEach(icon => {
        icon.replaceWith(icon.cloneNode(true)); // limpa event listeners anteriores
      });

      const updatedIcons = document.querySelectorAll(".card-icon");

      updatedIcons.forEach(icon => {
        if (isDark) {
          icon.setAttribute("color", "#C3C3C3");

          icon.addEventListener("mouseenter", () => {
            icon.setAttribute("color", "#7CFFB0");
          });

          icon.addEventListener("mouseleave", () => {
            icon.setAttribute("color", "#C3C3C3");
          });
        } else {
          icon.setAttribute("color", "#666");

          icon.addEventListener("mouseenter", () => {
            icon.setAttribute("color", "#2D2D2D");
          });

          icon.addEventListener("mouseleave", () => {
            icon.setAttribute("color", "#666");
          });
        }
      });
    }

    // Claro inicial
    setCardIconHover(false);

    // Trocar tema
    function toggleTema() {
      brilhoIcon.style.transform = "rotate(360deg)";
      if (brilhoIconDesktop) brilhoIconDesktop.style.transform = "rotate(360deg)";

      setTimeout(() => {
        if (!temaEscuro) {
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

          temaEscuro = true;
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

          temaEscuro = false;
        }

        brilhoIcon.style.transform = "rotate(0deg)";
        if (brilhoIconDesktop) brilhoIconDesktop.style.transform = "rotate(0deg)";
      }, 400);
    }

    brilhoIcon.addEventListener("click", toggleTema);
    if (brilhoIconDesktop) brilhoIconDesktop.addEventListener("click", toggleTema);

    // Pesquisa mobile
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
  });
</script>