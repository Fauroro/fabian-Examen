

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
      <a href="#" id=300000 name="Calidad" title="Calidad óptima">
        <div>
          <img class="" src="./images/answer-1-1.png" alt="" title="Calidad óptima" id="300000" name="Calidad">
          <p title="Calidad óptima" id="300000" name="Calidad">Calidad óptima</p>
        </div>
      </a>
      <a href="#" id=380000 title="Buena relación calidad/precio" name="Calidad">
        <img class="" src="./images/answer-1-2.png" alt="" id="380000" title="Buena relación calidad/precio" name="Calidad">
        <p id=380000 class="Buena relación calidad/precio">Buena relación calidad/precio</p>
      </a>
      <a href="#" id="200000" title="No me importa tanto la calidad" name="Calidad">
        <img class="" src="./images/answer-1-3.png" alt="" id="200000" title="No me importa tanto la calidad" name="Calidad">
        <p id="200000" title="No me importa tanto la calidad" name="Calidad">No me importa tanto la calidad</p>
      </a>
    </div>
        `
  }

}
customElements.define('nivel-calidad', NivelCalidad)