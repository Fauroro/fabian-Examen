

export class TipoApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML =/* html*/`
    <div class="text">
      <h1>¿Que Tipo de App necesitas?</h1>
    </div>
    <div class="opciones">
      <a href="#" id="2000000" name="tipo" title="Aplicación Android">
        <div>
          <img class="" src="./images/answer-2-1.png" alt="" title="Aplicación Android" id="2000000" name="tipo">
          <p title="Aplicación Android" id="2000000" name="tipo">Aplicación Android </p>
        </div>
      </a>
      <a href="#" id="3000000 "title="Aplicación iOS " name="tipo">
        <img class="" src="./images/answer-2-2.png" alt="" id="3000000" title="Aplicación iOS " name="tipo">
        <p id=3000000 class="Aplicación iOS ">Aplicación iOS</p>
      </a>
      <a href="#" id="800000" title="Aplicación Windows Phone" name="tipo">
        <img class="" src="./images/answer-2-3.png" alt="" id="800000" title="Aplicación Windows Phone" name="tipo">
        <p id="800000" title="Aplicación Windows Phone" name="tipo">Aplicación Windows Phone</p>
      </a>
      <a href="#" id="3500000" title="Aplicación Android + iOS" name="tipo">
        <img class="" src="./images/answer-2-4.png" alt="" id="3500000" title="Aplicación Android + iOS" name="tipo">
        <p id="3500000" title="Aplicación Android + iOS" name="tipo">Aplicación Android + iOS</p>
      </a>
    </div>
        
        `
  }

}
customElements.define('tipo-app', TipoApp)