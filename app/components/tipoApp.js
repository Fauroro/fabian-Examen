

export class TipoApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML =/* html*/`
    <div class="text">
      <h1>¿Que ntipo de App necesitas?</h1>
    </div>
    <div class="opciones2">
      <a href="#" id="2000.000" class="tipo">
        <img class="imgMain" src="./images/answer-2-1.png" alt="">
        <p>Aplicación Android</p>
      </a>
      <a href="#" id="3000.000" class="tipo">
        <img class="imgMain" src="./images/answer-2-2.png" alt="">
        <p>Aplicación iOS</p>
      </a>
      <a href="#" id="800.000" class="tipo">
        <img class="imgMain" src="./images/answer-2-3.png" alt="">
        <p>Aplicación Windows Phone</p>
      </a>
      <a href="#" id="3500.000" class="tipo">
        <img class="imgMain" src="./images/answer-2-4.png" alt="">
        <p>Aplicación Android + iOS</p>
      </a>
    </div>
        `
  }

}
customElements.define('tipo-app', TipoApp)