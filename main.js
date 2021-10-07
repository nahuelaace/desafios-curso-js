var numeroUsuario = prompt("Juguemos a las adivinanzas!! \nAdivina un numero del 1 al 4",0);

var numeroPc = parseInt(Math.floor (Math.random() * 4) + 1);


if ((numeroUsuario == "") || (numeroUsuario < 1) || (numeroUsuario > 4)) {
    alert("No has ingresado un numero valido!");
}else {
    parseInt(numeroUsuario)

    if (numeroUsuario == numeroPc) {    
        alert("Adivinaste! el numero era " + numeroPc);
        
    }else {
        alert("Que pena! el numero era " + numeroPc);
    }
}

