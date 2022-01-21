var containerTarjeta = document.getElementById('containerTarjetaSj');
var tarjetaFront = document.getElementById('tarjeta-frontSj');
var tarjetaBack = document.getElementById('tarjeta-backSj');

tarjetaBack.addEventListener('click', vueltaUno);
tarjetaFront.addEventListener('click', vueltaDos);
// containerTarjeta.addEventListener('click', ocultar);
// containerTarjeta.addEventListener('click', vueltaDos);

function vueltaDos() {
    containerTarjeta.onclick = () => {
        tarjetaFront.style.transform = 'rotateX(180deg)';
        tarjetaBack.style.transform = 'rotateX(0deg)';
        tarjetaFront.style.backfaceVisibility = 'hidden';
    }
}
function vueltaUno() {
    containerTarjeta.onclick = () => {
        tarjetaBack.style.transform = 'rotateX(180deg';
        tarjetaFront.style.transform = 'rotateX(0deg)';
        // containerTarjeta.style.transform = 'rotateX(180deg)'
    }
}

// Funcion para Mendoza

var containerTarjetaMendoza = document.getElementById('containerTarjetaMz');
var tarjetaFrontMendoza = document.getElementById('tarjeta-frontMz');
var tarjetaBackMendoza = document.getElementById('tarjeta-backMz');

tarjetaBackMendoza.addEventListener('click', vueltaUnoMendoza);
tarjetaFrontMendoza.addEventListener('click', vueltaDosMendoza);
// containerTarjeta.addEventListener('click', ocultar);
// containerTarjeta.addEventListener('click', vueltaDos);

function vueltaDosMendoza() {
    containerTarjetaMendoza.onclick = () => {
        tarjetaFrontMendoza.style.transform = 'rotateX(180deg)';
        tarjetaBackMendoza.style.transform = 'rotateX(0deg)';
        tarjetaFrontMendoza.style.backfaceVisibility = 'hidden';
    }
}
function vueltaUnoMendoza() {
    containerTarjetaMendoza.onclick = () => {
        tarjetaBackMendoza.style.transform = 'rotateX(180deg';
        tarjetaFrontMendoza.style.transform = 'rotateX(0deg)';
        // containerTarjeta.style.transform = 'rotateX(180deg)'
    }
}


// Funcion para resto del pais


var containerTarjetaRp = document.getElementById('containerTarjetaRp');
var tarjetaFrontRp = document.getElementById('tarjeta-frontRp');
var tarjetaBackRp = document.getElementById('tarjeta-backRp');

tarjetaBackRp.addEventListener('click', vueltaUnoRp);
tarjetaFrontRp.addEventListener('click', vueltaDosRp);
// containerTarjeta.addEventListener('click', ocultar);
// containerTarjeta.addEventListener('click', vueltaDos);

function vueltaDosRp() {
    containerTarjetaRp.onclick = () => {
        tarjetaFrontRp.style.transform = 'rotateX(180deg)';
        tarjetaBackRp.style.transform = 'rotateX(0deg)';
        tarjetaFrontRp.style.backfaceVisibility = 'hidden';
    }
}
function vueltaUnoRp() {
    containerTarjetaRp.onclick = () => {
        tarjetaBackRp.style.transform = 'rotateX(180deg';
        tarjetaFrontRp.style.transform = 'rotateX(0deg)';
        // containerTarjeta.style.transform = 'rotateX(180deg)'
    }
}




