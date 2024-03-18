

export class MonetizarApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML =/* html*/`
    <div class="text">
      <h1>¿Como Monetizar con tu App?</h1>
    </div>
    <div class="opciones">
      <a href="#" id="600000" name="monetizar" title="Aplicación gratuita con publicidad">
        <div>
          <img class="" src="./images/answer-4-1.png" alt="" title="Aplicación gratuita con publicidad" id="600000" name="monetizar">
          <p title="Aplicación gratuita con publicidad" id="600000" name="monetizar">Aplicación gratuita con publicidad </p>
        </div>
      </a>
      <a href="#" id="1000000 "title="Aplicación de pago" name="monetizar">
        <img class="" src="./images/answer-4-2.png" alt="" id="1000000" title="Aplicación de pago" name="monetizar">
        <p id=1000000 class="Aplicación de pago">Aplicación de pago</p>
      </a>
      <a href="#" id="2000000" title="Compras dentro de la app" name="monetizar">
        <img class="" src="./images/answer-4-3.png" alt="" id="2000000" title="Compras dentro de la app" name="monetizar">
        <p id="2000000" title="Compras dentro de la app" name="monetizar">Compras dentro de la app</p>
      </a>
      <a href="#" id="3500000" title="Otros / No lo sé todavía" name="monetizar">
        <img class="" src="./images/answer-4-4.png" alt="" id="3500000" title="Otros / No lo sé todavía" name="monetizar">
        <p id="3500000" title="Otros / No lo sé todavía" name="monetizar">Otros / No lo sé todavía</p>
      </a>
    </div>
    `
  }

}
customElements.define('monetizar-app', MonetizarApp)