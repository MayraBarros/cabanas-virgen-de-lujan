var containerTarjeta = document.getElementById('containerSanJuan');
var tarjetaFront = document.getElementById('sj-front');
var tarjetaBack = document.getElementById('sj-back');

tarjetaBack.addEventListener('click', vueltaUno);
tarjetaFront.addEventListener('click', vueltaDos);

function vueltaDos() {
    containerSanJuan.onclick = () => {
        tarjetaFront.style.transform = 'rotateX(180deg)';
        tarjetaBack.style.transform = 'rotateX(0deg)';
        tarjetaFront.style.backfaceVisibility = 'hidden';
    }
}
function vueltaUno() {
    containerSanJuan.onclick = () => {
        tarjetaBack.style.transform = 'rotateX(180deg';
        tarjetaFront.style.transform = 'rotateX(0deg)';
       
    }
}



