var mokepons = []
function Iniciarjuego(){
    var boton_seleccion = document.getElementById("Seleccion")
    boton_seleccion.addEventListener("click" , SeleccionarMascotaJugador)
    var names = ["Hipodoge", "Capipepo", "Ratigueya", "Langostelvis", "Tucapalma", "Pydos"]
    mokepons = names.map(name => {
        return {
            name: name,
            checkbox: document.getElementById(name)
        }
    })
}

function SeleccionarMascotaJugador(){
        var mascotajugador = document.getElementById("mascota_jugador")
        var jugar = 1
    mokepons.forEach(mokepon => {
        if (mokepon.checkbox.checked) {
            mascotajugador.innerHTML = mokepon.name
        }
    })
    if(mascotajugador.innerHTML === '') {
        alert("Escoge una mascota")
        jugar = 0
    }
if (jugar == 1){
    SeleccionarMascotaEnemigo();
}
}
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1 )+ min)
}
function SeleccionarMascotaEnemigo(){
    var enemigo = aleatorio (1,6)
    var mascotaenemigo = document.getElementById("Mascota_enemigo")
    mascotaenemigo.innerHTML = mokepons[enemigo - 1].name
    }






    

    window.addEventListener("load" , Iniciarjuego)




