

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
      <a href="#" id="500.000" name="diseno" title="Interfaz sencilla">
        <div>
          <img class="" src="./images/answer-3-1.png" alt="" title="Interfaz sencilla" id="500.000" name="diseno">
          <p title="Interfaz sencilla" id="500.000" name="diseno">Interfaz sencilla </p>
        </div>
      </a>
      <a href="#" id="1000.000 "title="nterfaz personalizada " name="diseno">
        <img class="" src="./images/answer-3-2.png" alt="" id="1000.000" title="nterfaz personalizada " name="diseno">
        <p id=1000.000 class="nterfaz personalizada ">nterfaz personalizada</p>
      </a>
      <a href="#" id="800.000" title="Interfaz replicada de la web" name="diseno">
        <img class="" src="./images/answer-3-3.png" alt="" id="800.000" title="Interfaz replicada de la web" name="diseno">
        <p id="800.000" title="Interfaz replicada de la web" name="diseno">Interfaz replicada de la web</p>
      </a>
      <a href="#" id="300.000" title="ANo necesito diseño " name="diseno">
        <img class="" src="./images/answer-3-3.png" alt="" id="300.000" title="ANo necesito diseño " name="diseno">
        <p id="300.000" title="ANo necesito diseño " name="diseno">ANo necesito diseño </p>
      </a>
    </div>
        `
  }

}
customElements.define('diseno-app', DisenoApp)