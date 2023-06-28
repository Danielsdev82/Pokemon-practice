    var botonfuego
    var botonhielo 
    var botontierra
    var botones

    var ataquesrestantesenemigo = []
    var boton_seleccion = document.getElementById("Seleccion")
    var botonreset= document.getElementById("Reiniciar")
    var seccionataque = document.getElementById("ataque")
    var seccionmascota = document.getElementById("Mascota")
    var mascotajugador  = document.getElementById("Mascota_jugador")
    var mascotaenemigo = document.getElementById("Mascota_enemigo")
    var vidajugador = document.getElementById("vida-jugador")
    var vidaenemigo = document.getElementById("vida-enemigo")
    var section = document.getElementById('resultado')
    var attackplayer = document.getElementById('attackplayer')
    var attackenemy = document.getElementById('attackenemy')
    var contenedorTarjetas = document.getElementById("contenedorTarjetas")
    var contenedorAtaques = document.getElementById("contenedorAtaques")
    var ataquesjugador = []
    var ataquesdelenemigo = []
    var rondas = 0
    var jugadormascota
    var inputhipodoge
    var inputcapepipo
    var inputhiratigueya
    var inputlangostelvis
    var inputtucapalma
    var inputpydos
    seccionataque.style.display ="none"
    var ataquejugador
    var ataquesenemigo
    var ganador
    var contadorE   = 3
    var contadorJ   = 3
    var jugar = 0
    var mokepones = []
    var opcionesdemokepones
    class Mokepon{
        constructor(nombre, foto, vida, fortaleza){
        this.nombre    = nombre
        this.foto      = foto
        this.vida      = vida
        this.fortaleza = fortaleza
        this.ataques   = []
    }
}
var hipodoge = new Mokepon ("Hipodoge" , "https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png","5" , "1", "Fuego")

var capipepo = new Mokepon ("Capipepo" , "https://www.pngmart.com/files/5/Anime-Pokemon-PNG-Picture.png","5" , "1", "Hielo")

var ratigueya = new Mokepon ("Ratigueya" , "https://assets.stickpng.com/images/580b57fcd9996e24bc43c31a.png","5" , "1", "Fuego")

var tucapalma = new Mokepon ("Tucapalma" , "https://www.pngmart.com/files/2/Pokemon-PNG-HD.png","5" , "1", "Fuego")

var langostelvis = new Mokepon ("Langostelvis" , "https://pngimg.com/uploads/pokemon/pokemon_PNG51.png","5" , "1", "Fuego")

var pydos = new Mokepon ("Pydos" , "https://static.wikia.nocookie.net/espokemon/images/4/4e/Chikorita.png/revision/latest?cb=20140206203521","5" , "1", "Fuego")

hipodoge.ataques.push(
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🌱" , id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🌱" , id: "boton-tierra"},
)
ratigueya.ataques.push(
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🧊" , id: "boton-hielo"},
)
tucapalma.ataques.push(
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🌱" , id: "boton-tierra"},
)
langostelvis.ataques.push(
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🧊" , id: "boton-hielo"},
    {nombre:"🧊" , id: "boton-hielo"},
)
pydos.ataques.push(
    {nombre:"🔥" , id: "boton-fuego"},
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🌱" , id: "boton-tierra"},
    {nombre:"🌱", id: "boton-tierra"},
    {nombre:"🧊" , id: "boton-hielo"},
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function Iniciarjuego(){

    // document.querySelectorAll('[id^="mokepon-"]').forEach(mokepon => {
    //     mokepons.push({
    //         name: mokepon.id.split('-')[1],
    //         checkButton: mokepon
    //     })
    // })
   
        mokepones.forEach((mokepon) => {
            opcionesdemokepones=`
            <input type="radio" name="Mascota" id=${mokepon.nombre}>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}><p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre}">
            </label>
            `
            contenedorTarjetas.innerHTML += opcionesdemokepones

             inputhipodoge = document.getElementById("Hipodoge")
             inputcapepipo= document.getElementById("Capipepo")
             inputratigueya= document.getElementById("Ratigueya")
             inputlangostelvis= document.getElementById("Langostelvis")
             inputtucapalma= document.getElementById("Tucapalma")
             inputpydos= document.getElementById("Pydos")
        })

        boton_seleccion.addEventListener("click" , SeleccionarMascotaJugador)
       
        botonreset.style.display = "none"
        botonreset.addEventListener("click", restartgame)

        unirseAljuego()
       }
       function unirseAljuego(){
        fetch("http://localhost:8080/unirse")
        .then(function(res) {
            console.log(res)
            if (res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                    })
            }
        })
       }
function SeleccionarMascotaJugador(){

    
    var selectedMokepon = mokepones.find((mokepon) => document.getElementById(mokepon.nombre).checked)
    if (selectedMokepon) {
        mascotajugador.innerHTML = selectedMokepon.nombre
        jugadormascota = selectedMokepon.nombre
        jugar = 1
    // }  else if(inputcapepipo.checked) {
    //     mascotajugador.innerHTML = inputcapepipo.id
    //     jugadormascota = inputcapepipo.id
    //     jugar = 1
    // } else if(inputratigueya.checked) {
    //     mascotajugador.innerHTML = inputratigueya.id
    //     jugadormascota = inputratigueya.id
    //     jugar = 1
    // } 
    //   else if(inputlangostelvis.checked) {
    //     mascotajugador.innerHTML = inputlangostelvis.id
    //     jugadormascota = inputlangostelvis.id
    //     jugar = 1
    // }   else if(inputtucapalma.checked) {
    //     mascotajugador.innerHTML = inputtucapalma.id
    //     jugadormascota = inputtucapalma.id
    //     jugar = 1
    // }   else if(inputpydos.checked) {
    //     mascotajugador.innerHTML = inputpydos.id
    //     jugadormascota = inputpydos.id
    //     jugar = 1
    } else {
        alert("Escoge una mascota")
        return
    }
         seccionataque.style.display ="flex"
        seccionmascota.style.display ="none"
        SeleccionarMascotaEnemigo();
        extraerataques(jugadormascota);
}
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1 )+ min)
}
function SeleccionarMascotaEnemigo(){
    var enemigo = aleatorio (0, mokepones.length - 1)   
    mascotaenemigo.innerHTML = mokepones[enemigo].nombre
    mokepones[enemigo].ataques.forEach((ataque) => {
        ataquesrestantesenemigo.push(ataque)
    })
}
function ataqueJugador(tipo){
    if( jugar == 0){
        return
    } else {
    ataquejugador = tipo
    ataqueenemigo()
    }
}
function extraerataques(jugadormascota){
    var atacar
    for (let i = 0; i < mokepones.length; i++) {
      if(jugadormascota === mokepones[i].nombre)
      atacar = mokepones[i].ataques
    }
mostrarataques(atacar)
}
function mostrarataques(ataques) {
    contenedorAtaques.innerHTML = ""
    ataques.forEach((ataque) =>{
        var botonataque = document.createElement("button")
        botonataque.classList = "attackbutton BAtaque"
        botonataque.innerHTML = ataque.nombre
        botonataque.id = ataque.id
        contenedorAtaques.appendChild(botonataque)  
        botonataque.addEventListener("click", ()=>{
            
            botonataque.disabled = true
          if(ataque.nombre === "🔥"){
            ataquesjugador.push("🔥")
            botonataque.style.background="#112f58"
            } else if (ataque.nombre === "🧊"){
                ataquesjugador.push("🧊")
                botonataque.style.background="#112f58"
            } else  {ataquesjugador.push("🌱")
            botonataque.style.background="#112f58" 
        } ataqueJugador(ataque.nombre)
    })
        }
        )

        // ataquejugador = `<button id=${ataque.id} class="attackbutton">${ataque.nombre} </button>`
        // botonfuego.addEventListener("click", ()=>{ataque("FUEGO")})
        // botonhielo.addEventListener("click", ()=>{ataque("HIELO")})
        // botontierra.addEventListener("click", ()=>{ataque("TIERRA")})
        
        botonfuego = document.getElementById("boton-fuego")
        botonhielo = document.getElementById("boton-hielo")
        botontierra = document.getElementById("boton-tierra")
        botones = document.querySelectorAll(".BAtaque")
        
        
    } 
// function secuenciaAtaque(){
//     botones.forEach((boton) => {
//         boton.addEventListener("click" , (e) =>{
          
// }
function ataqueenemigo(){
    var ataque = aleatorio (0, ataquesrestantesenemigo.length -1)
   ataquesenemigo = ataquesrestantesenemigo[ataque].nombre
   ataquesrestantesenemigo.splice(ataque,1)
   ataquesdelenemigo.push(ataquesenemigo)


    if (contadorE == 0){
        return
    } else if(contadorJ == 0) {
        return
    }
    winner()
    createElement()
}
function createElement(){
    var newattackplayer = document.createElement("p")
    var newattackenemy = document.createElement("p")
    section.innerHTML = ganador
    newattackplayer.innerHTML = ataquejugador
    newattackenemy.innerHTML  = ataquesenemigo
    //var parrafo = document.createElement("p")
    //parrafo.innerHTML = 'Tu mascota ataco con ' + ataquejugador + " La mascota del enemigo ataco con " + ataquesenemigo + " " + ganador
    attackplayer.appendChild(newattackplayer)
    attackenemy.appendChild(newattackenemy)
}
function winner(){
    
    if(ataquesjugador[ataquesjugador.length-1] === ataquesdelenemigo[ataquesdelenemigo.length-1]) {
        ganador = "EMPATE PUTAS"
        rondas++
    } else if (ataquesjugador[ataquesjugador.length-1] ==="🔥" && ataquesdelenemigo[ataquesdelenemigo.length-1] ==="🧊"){
        ganador = "GANASTE"
        contadorE = contadorE -1
        vidaenemigo.innerHTML = contadorE
        rondas++
    } else if (ataquesjugador[ataquesjugador.length-1] ==="🌱" && ataquesdelenemigo[ataquesdelenemigo.length-1] ==="🔥"){
        ganador = "GANASTE"
        contadorE = contadorE -1
        vidaenemigo.innerHTML = contadorE
        rondas++
    } else if (ataquesjugador[ataquesjugador.length-1] ==="🧊" && ataquesdelenemigo[ataquesdelenemigo.length-1] ==="🌱"){
        ganador = "GANASTE"
        contadorE = contadorE -1
        vidaenemigo.innerHTML = contadorE
        rondas++
    } else {
        ganador = "PERDISTE"
        contadorJ = contadorJ - 1
        vidajugador.innerHTML = contadorJ
        rondas++
        
    }
    console.log(ataquesjugador)
    console.log(ataquesdelenemigo)
   
   
    // if(ataquejugador == ataquesenemigo){
    //     ganador = "EMPATE PUTAS"
    //     rondas++
    // }
    // else if (ataquejugador == "🔥" && ataquesenemigo == "🧊"){ 
    //     ganador = "GANASTE"
    //     contadorE = contadorE -1
    //     vidaenemigo.innerHTML = contadorE
    //     rondas++
    // } else if ( ataquejugador == "🌱" && ataquesenemigo == "🔥"){
    //     ganador = "GANASTE"
    //     contadorE = contadorE -1
    //     vidaenemigo.innerHTML = contadorE
    //     rondas++
    // } else if(ataquejugador == "🧊" && ataquesenemigo == "🌱"){
    //     ganador = "GANASTE"
    //     contadorE = contadorE -1
    //     vidaenemigo.innerHTML = contadorE
    //     rondas++
    // } else {
    //     ganador = "PERDISTE"
    //     contadorJ = contadorJ - 1
    //     vidajugador.innerHTML = contadorJ
    //     rondas++
        
    // } 10 + 7 * 10 / 70 

    
    if (contadorE ==0){
        alert("la mascota del enemigo ha muerto")
        // botondisable(true)
        botonreset.style.display = "block"
        
    } else if (contadorJ == 0) {
        alert("Tu mascota ha muerto")
        // botondisable(true)
        botonreset.style.display = "block"
    }
    if (rondas === 5 && contadorE > 0 && contadorJ > 0){
        ganadordefinitivo()
    } else {
        return
    }
}
function ganadordefinitivo(){
    if(contadorE === contadorJ){
        
    }
     else if(contadorE > contadorJ){
        alert("Se acabaron las rondas, haz perdido")
        ganador = "PERDISTE POR DECISION!!!"
        botonreset.style.display = "block"
    } else {
        alert("Se acabaron las rondas, haz ganado!!")
        ganador = "GANASTE POR DECISION!!!"
        botonreset.style.display = "block"
    }




}
function restartgame(){
    ataquesjugador = []
    ataquesdelenemigo = []
    contadorE = 3
    contadorJ = 3
    rondas    = 0
    vidajugador.innerHTML = 3
    vidaenemigo.innerHTML = 3
    section.innerHTML = "Estan listo chicos"
    attackplayer.innerHTML = ""
    attackenemy.innerHTML = ""
    seccionmascota.style.display = "block"
    // botondisable(false)
    seccionataque.style.display ="none"
    botonreset.addEventListener("click" , disablereset)  
}
function disablereset(){
botonreset.style.display = "block"

}
// // function botondisable(estado){
// //     if(botonfuego.){

// //     }

//     if (botonfuego)
// }
    window.addEventListener("load" , Iniciarjuego)




