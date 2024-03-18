

export class LoginApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML =/* html*/`
    <div class="text">
      <h1>¿Tu App necesita sistema de autenticación?</h1>
    </div>
    <div class="opciones">
      <a href="#" id="2000000" name="login" title="Sí, con redes sociales y email">
        <div>
          <img class="" src="./images/answer-4-1.png" alt="" title="Sí, con redes sociales y email" id="2000000" name="login">
          <p title="Sí, con redes sociales y email" id="2000000" name="login">Sí, con redes sociales y email </p>
        </div>
      </a>
      <a href="#" id="1500000 "title="Sí, con email" name="login">
        <img class="" src="./images/answer-4-2.png" alt="" id="1500000" title="Sí, con email" name="login">
        <p id=1500000 class="Sí, con email">Sí, con email</p>
      </a>
      <a href="#" id="0" title="No" name="login">
        <img class="" src="./images/answer-4-3.png" alt="" id="0" title="No" name="login">
        <p id="0" title="No" name="login">No</p>
      </a>
      <a href="#" id="3500000" title="No lo sé todavía" name="login">
        <img class="" src="./images/answer-4-4.png" alt="" id="3500000" title="No lo sé todavía" name="login">
        <p id="3500000" title="No lo sé todavía" name="login">No lo sé todavía</p>
      </a>
    </div>
    `
  }

}
customElements.define('login-app', LoginApp)