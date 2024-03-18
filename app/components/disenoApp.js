

export class DisenoApp extends HTMLElement {
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
      <a href="#" id="500000" name="diseno" title="Interfaz sencilla">
        <div>
          <img class="" src="./images/answer-3-1.png" alt="" title="Interfaz sencilla" id="500000" name="diseno">
          <p title="Interfaz sencilla" id="500000" name="diseno">Interfaz sencilla </p>
        </div>
      </a>
      <a href="#" id="1000000 "title="Interfaz personalizada " name="diseno">
        <img class="" src="./images/answer-3-2.png" alt="" id="1000000" title="Interfaz personalizada " name="diseno">
        <p id=1000000 class="Interfaz personalizada ">Interfaz personalizada</p>
      </a>
      <a href="#" id="800000" title="Interfaz replicada de la web" name="diseno">
        <img class="" src="./images/answer-3-3.png" alt="" id="800000" title="Interfaz replicada de la web" name="diseno">
        <p id="800000" title="Interfaz replicada de la web" name="diseno">Interfaz replicada de la web</p>
      </a>
      <a href="#" id="300000" title="No necesito diseño " name="diseno">
        <img class="" src="./images/answer-3-4.png" alt="" id="300000" title="No necesito diseño " name="diseno">
        <p id="300000" title="No necesito diseño " name="diseno">No necesito diseño </p>
      </a>
    </div>
        `
  }

}
customElements.define('diseno-app', DisenoApp)