import '../app/components/nivelCalidad.js'
import '../app/components/tipoApp.js'
import '../app/components/disenoApp.js'
import { getTasks, postTasks, putTasks, delTasks } from '../api/apiRest.js'

const empezar = document.getElementById('empezar')

const container = document.getElementById('container')

empezar.addEventListener('click', () => {
  container.innerHTML = `<nivel-calidad></nivel-calidad>`
  const selectCalidad = document.getElementsByName('calidad');
  const calidad = selectCalidad.forEach(button => { button.addEventListener('click', evento) });
  function evento(e) {
    container.innerHTML = `<tipo-app></tipo-app>`
    const clickedCalidad = e.target;
    let datos = {};
    datos[clickedCalidad.name] = `${clickedCalidad.title}`;
    datos["precioCalidad"] = `${clickedCalidad.id}`
    const tipoApp = document.querySelectorAll('.tipo');
    postTasks(datos)
    const calidad = tipoApp.forEach(button => { button.addEventListener('click', evento1) });
    function evento1(e) {
      container.innerHTML = `<diseno-app></diseno-app>`
      const clickedTipo = e.target;
      datos[clickedTipo.name] = `${clickedTipo.title}`
      datos["precioTipo"] = `${clickedTipo.id}`
      const disenoApp = document.querySelectorAll('.diseno');
      postTasks(datos)
      const diseno = disenoApp.forEach(button => { button.addEventListener('click', evento2) });
      function evento2(e) {
        const clickedDiseno = e.target;
        datos[clickedDiseno.name] = `${clickedDiseno.title}`
        datos["precioDiseno"] = `${clickedDiseno.id}`
        postTasks(datos)
        container.innerHTML = `<monetizar-app></monetizar-app>`
      }
    }
  }

})