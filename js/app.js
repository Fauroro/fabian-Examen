import '../app/components/nivelCalidad.js'
import '../app/components/tipoApp.js'
import '../app/components/disenoApp.js'
import '../app/components/monetizarApp.js'
import '../app/components/loginApp.js'
import { getTasks, postTasks, putTasks, delTasks } from '../api/apiRest.js'

const empezar = document.getElementById('empezar')

const container = document.getElementById('container')

let precio = 0;

empezar.addEventListener('click', () => {
  container.innerHTML = `<nivel-calidad></nivel-calidad>`
  const selectCalidad = document.getElementsByName('calidad');
  const calidad = selectCalidad.forEach(button => { button.addEventListener('click', evento) });
  function evento(e) {
    container.innerHTML = `<tipo-app></tipo-app>`;
    const clickedCalidad = e.target;
    let datos = {};
    datos[clickedCalidad.name] = `${clickedCalidad.title}`;
    datos["precioCalidad"] = `${clickedCalidad.id}`;
    const tipoApp = document.getElementsByName('tipo');
    const tipo = tipoApp.forEach(button => { button.addEventListener('click', evento1) });
    function evento1(e) {
      container.innerHTML = `<diseno-app></diseno-app>`
      const clickedTipo = e.target;
      datos[clickedTipo.name] = `${clickedTipo.title}`
      datos["precioTipo"] = `${clickedTipo.id}`
      const disenoApp = document.getElementsByName('diseno');
      const diseno = disenoApp.forEach(button => { button.addEventListener('click', evento2) });
      function evento2(e) {
        const clickedDiseno = e.target;
        datos[clickedDiseno.name] = `${clickedDiseno.title}`
        datos["precioDiseno"] = `${clickedDiseno.id}`
        container.innerHTML = `<monetizar-app></monetizar-app>`
        const monetizarApp = document.getElementsByName('monetizar');
        const monetizar = monetizarApp.forEach(button => { button.addEventListener('click', evento3) });
        function evento3(e) {
          const clickedMonetizar = e.target;
          datos[clickedMonetizar.name] = `${clickedMonetizar.title}`
          datos["precioMonetizar"] = `${clickedMonetizar.id}`
          container.innerHTML = `<login-app></login-app>`
          const loginApp = document.getElementsByName('login');
          const login = loginApp.forEach(button => { button.addEventListener('click', evento4) });
          function evento4(e) {
            const clickedLogin = e.target;
            datos[clickedLogin.name] = `${clickedLogin.title}`
            datos["precioLogin"] = `${clickedLogin.id}`
            container.innerHTML = `<login-app></login-app>`
            precio += parseFloat(clickedCalidad.id)
            precio += parseFloat(clickedTipo.id)
            precio += parseFloat(clickedDiseno.id)
            precio += parseFloat(clickedMonetizar.id)
            precio += parseFloat(clickedLogin.id)
            console.log(precio);
            postTasks(datos)
          }
        }
      }
    }
  }
})