

export class DisenoApp extends HTMLElement {
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
      <a href="#" data-precio1="500.000">
        <img class="imgMain" src="./images/answer-3-1.png" alt="">
        <p>Interfaz Sencilla</p>
      </a>
      <a href="#" data-precio1="1000.000">
        <img class="imgMain" src="./images/answer-3-2.png" alt="">
        <p>Interfaz personalizada</p>
      </a>
      <a href="#" data-precio1="800.000">
        <img class="imgMain" src="./images/answer-3-3.png" alt="">
        <p>Interfaz replicada de la web</p>
      </a>
      <a href="#" data-precio1="3500.000">
        <img class="imgMain" src="./images/answer-3-4.png" alt="">
        <p>No necesito diseño</p>
      </a>
    </div>
        `
  }

}
customElements.define('diseno-app', DisenoApp)