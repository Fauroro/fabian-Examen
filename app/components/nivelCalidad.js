

export class NivelCalidad extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML =/* html*/`
    <div class="text">
      <h1>¿Que nivel de calidad estás buscando?</h1>
    </div>
    <div class="opciones">
      <a href="#" id=300000 name="calidad" title="Calidad óptima">
        <div>
          <img class="" src="./images/answer-1-1.png" alt="" title="Calidad óptima" id="300000" name="calidad">
          <p title="Calidad óptima" id="300000" name="calidad">Calidad óptima</p>
        </div>
      </a>
      <a href="#" id=380000 title="Buena relación calidad/precio" name="calidad">
        <img class="" src="./images/answer-1-2.png" alt="" id="380000" title="Buena relación calidad/precio" name="calidad">
        <p id="380000" title="Buena relación calidad/precio" name="calidad">Buena relación calidad/precio</p>
      </a>
      <a href="#" id="200000" title="No me importa tanto la calidad" name="calidad">
        <img class="" src="./images/answer-1-3.png" alt="" id="200000" title="No me importa tanto la calidad" name="calidad">
        <p id="200000" title="No me importa tanto la calidad" name="calidad">No me importa tanto la calidad</p>
      </a>
    </div>
        `
  }

}
customElements.define('nivel-calidad', NivelCalidad)