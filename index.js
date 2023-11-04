const itemMenu = document.querySelectorAll(".item-menu");

itemMenu.forEach((item) => {
  item.addEventListener("click", () => {
    const itemSelecionado = document.querySelector(".item-menu.selecionado");

    if (itemSelecionado) {
      itemSelecionado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
  });
});

// expandir menu lateral

const btnExpandir = document.getElementById("btn-expansao");
const menu = document.querySelector(".menu-lateral");

btnExpandir.addEventListener("click", () => {
  menu.classList.toggle("expandir");
});
