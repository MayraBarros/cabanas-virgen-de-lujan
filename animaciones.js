const containerBoxSj = document.getElementById('boxSanJuan');
const boxFrenteSj = document.getElementById('boxFrenteSanJuan');
const boxBackSj = document.getElementById('boxBackSanJuan');

boxBackSj.addEventListener('click',vueltaUnoSj);
boxFrenteSj.addEventListener('click', vueltaDosSj);

function vueltaDosSj() {
    containerBoxSj.onclick =()=>{
        // boxFrenteSj.style.transform = 'rotateX(180deg)';
        boxBackSj.style.transform = 'rotateX(0deg)';
        containerBoxSj.style.backfaceVisibility = 'hidden';
    }
}

function vueltaUnoSj(){
    containerBoxSj.onclick = () => {
        boxBackSj.style.transform = 'rotateX(180deg)';
        boxFrenteSj.style.transform = 'rotateX(0deg)';

    }
}


// animaciones tarjeta Mdza

const containerBoxMza = document.getElementById('boxMendoza');
const boxFrenteMza = document.getElementById('boxFrenteMdz');
const boxBackMza = document.getElementById('boxBackMdz');

boxBackMza.addEventListener('click',vueltaUnoMza);
boxFrenteMza.addEventListener('click', vueltaDosMza);

function vueltaDosMza() {
    containerBoxMza.onclick =()=>{
        // boxFrenteSj.style.transform = 'rotateX(180deg)';
        boxBackMza.style.transform = 'rotateX(0deg)';
        containerBoxMza.style.backfaceVisibility = 'hidden';
    }
}

function vueltaUnoMza(){
    containerBoxMza.onclick = () => {
        boxBackMza.style.transform = 'rotateX(180deg)';
        boxFrenteMza.style.transform = 'rotateX(0deg)';

    }
}

// animaciones tarjeta Resto del pais

const containerBoxRp = document.getElementById('boxRp');
const boxFrenteRp = document.getElementById('boxFrenteRp');
const boxBackRp = document.getElementById('boxBackRp');

boxBackRp.addEventListener('click',vueltaUnoRp);
boxFrenteRp.addEventListener('click', vueltaDosRp);

function vueltaDosRp() {
    containerBoxRp.onclick =()=>{
        // boxFrenteSj.style.transform = 'rotateX(180deg)';
        boxBackRp.style.transform = 'rotateX(0deg)';
        containerBoxRp.style.backfaceVisibility = 'hidden';
    }
}

function vueltaUnoRp(){
    containerBoxRp.onclick = () => {
        boxBackRp.style.transform = 'rotateX(180deg)';
        boxFrenteRp.style.transform = 'rotateX(0deg)';

    }
}