function mudar() {
    document.getElementById("result").innerHTML = "mudou";

    for(var i = 0; i < 9; i++) {
        document.getElementById("result").innerHTML += " mudou";
    }
}

function ligar() {
    document.getElementById("luz1").src="Lon.png";
    document.getElementById("luz2").src="Lon.png";
    document.getElementById("luz3").src="Lon.png";
    document.getElementById("luz4").src="Lon.png";
    document.getElementById("luz5").src="Lon.png";
    document.getElementById("luz6").src="Lon.png";
}

function desligar() {
    document.getElementById("luz1").src="Loff.png";
    document.getElementById("luz2").src="Loff.png";
    document.getElementById("luz3").src="Loff.png";
    document.getElementById("luz4").src="Loff.png";
    document.getElementById("luz5").src="Loff.png";
    document.getElementById("luz6").src="Loff.png";
}