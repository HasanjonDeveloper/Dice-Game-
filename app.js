const winnerDisplay = document.getElementById('shower')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const button = document.querySelector('button')

button.addEventListener('click', ()=> {

    let random1 = Math.floor(Math.random()*6) + 1
    let random2 = Math.floor(Math.random()*6) + 1

    img1.setAttribute('src', `images/dice${random1}.png`) 
    
    img2.setAttribute('src', `images/dice${random2}.png`)   

    if (random1 < random2){
        winnerDisplay.innerText = 'Payer2 Won'
    }else if (random1 > random2) {
        winnerDisplay.innerText = 'Payer1 Won'
    }else if (random1 = random2) {
        winnerDisplay.innerText = 'Draw'
    }

})