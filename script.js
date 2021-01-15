const dino = document.querySelector('.dino');
console.log(dino);
function handleKeyUp(event) {
  if (event.keyCode === 32) {
        pula();
    }
}
function pula() {
    let position = 0;
    let upInterval = setInterval(()=> {
        if(position>=150){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                }
                position -= 20;
                dino.style.bottom = position + 'px';
            },20 );
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    } ,20);
}
document.addEventListener('keyup', handleKeyUp);