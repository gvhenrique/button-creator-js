const controles = document.querySelector("#controles");
const botao = document.querySelector(".btn");
const escritaCss = document.querySelector(".css");

const handleStyle = {
  element: botao,
  texto(valor) {
    this.element.innerText = valor;
  },
  color(valor) {
    this.element.style.color = valor;
  },
  backgroundColor(valor) {
    this.element.style.backgroundColor = valor;
  },
  height(valor) {
    this.element.style.height = valor + "px";
  },
  width(valor) {
    this.element.style.width = valor + "px";
  },
  border(valor) {
    this.element.style.border = valor;
  },
  borderRadius(valor) {
    this.element.style.borderRadius = valor + "px";
  },
  fontFamily(valor) {
    this.element.style.fontFamily = valor;
  },
  fontSize(valor) {
    this.element.style.fontSize = valor + "rem";
  },
};

function handleChanges(event) {
  const tipoFormElemento = event.target.name;
  const valorFormElemento = event.target.value;
  handleStyle[tipoFormElemento](valorFormElemento);
  saveValues(tipoFormElemento, valorFormElemento);
  showCss();
}

controles.addEventListener("change", handleChanges);

function saveValues(tipo, valor) {
  localStorage[tipo] = valor;
}

function setValues() {
  const propriedades = Object.keys(localStorage);
  propriedades.forEach((propriedade) => {
    handleStyle[propriedade](localStorage[propriedade]);

    controles.elements[propriedade].value = localStorage[propriedade];
  });
}
setValues();
showCss();

function showCss() {
  escritaCss.innerHTML = "<span>" + botao.style.cssText.split("; ").join(";</span><span>");
} 