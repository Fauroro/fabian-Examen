import '../app/components/nivelCalidad.js'
import '../app/components/tipoApp.js'
import '../app/components/disenoApp.js'

const empezar = document.getElementById('empezar')

const container = document.getElementById('container')

empezar.addEventListener('click',() =>{
    container.innerHTML = `<nivel-calidad></nivel-calidad>`
    const selectCalidad = document.getElementsByName('Calidad');
    const calidad = selectCalidad.forEach(button => {button.addEventListener('click',evento)});
    function evento(e) {
        debugger
        container.innerHTML = `<tipo-app></tipo-app>`
        const clickedCalidad = e.target;
        console.log(clickedCalidad);
        console.log(clickedCalidad.name);
        console.log(clickedCalidad.id);
        console.log(clickedCalidad.title);
        const tipoApp = document.querySelectorAll('.tipo');
        const calidad = tipoApp.forEach(button => {button.addEventListener('click',evento)});
        function evento(e) {
        debugger
            container.innerHTML = `<diseno-app></diseno-app>`
            const clickedTipo = e.target;
            console.log(clickedTipo);
            console.log(clickedTipo);
        }
    }

})