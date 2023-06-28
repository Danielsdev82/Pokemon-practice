function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1 )+ min)
}
var win     = 0
var lost    = 0
function jugar(){
var jugador = 0
var pc      = aleatorio (1,3)

jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera")
//  alert("elegiste " + jugador)
var opciones = ["🚀🚀🚀", "📰📰📰", "✂️✂️✂️"]
if(jugador >= 1 && jugador <= 3){
    alert(`elegiste ${opciones[jugador - 1]} y PC elige ${opciones[pc - 1]}`)

    if(pc == jugador){
        alert("EMPATEEEE PUTAS")
    } else if (
            jugador == 1 && pc == 3 ||
            jugador == 2 && pc == 1 ||
            jugador == 3 && pc == 2
            ){
            alert("Jugador ha ganado esta monda")
            win++
            document.getElementById("jugador").innerHTML = `jugador ha ganado: ${win}`
        } else {
            alert("Que mierda eres, perdiste")
            lost++
            document.getElementById("computador").innerHTML = `computador ha ganado: ${lost}`
    }
}else{
    alert("Elegiste perder💀💀")

}
}