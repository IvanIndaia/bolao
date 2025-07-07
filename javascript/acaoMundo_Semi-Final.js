let A1 = 'Fluminense'
let B1 = 'Chelsea'

let A2 = 'PSG'
let B2 = 'Real Madrid'

function acionarModal() {

  let inpsA = document.getElementsByClassName('placar')
  let inps = document.querySelectorAll('input')
  let text
  let userName

  let notAnumber = 0

  for (i = 0; i < inpsA.length; i++) {
    console.log('Placar ' + i + ' = ' + inpsA[i].id + ' -> ' + inpsA[i].value)
    if (i === 16) {
      console.log(`Jogo Inválido ${i} - ${inpsA[i]}`)
    } else {
      if (isNaN(parseInt(inpsA[i].value))) {
        notAnumber++
      }
    }
  }


  if (notAnumber === 0) {
    apostarCopaDoMundo()
  } else {
    alert("Preencher todos os jogos com placares VÁLIDOS!")
    console.log(notAnumber)
  }

}

function apostarCopaDoMundo() {

  const elmnto = document.getElementById('helloa');
  elmnto.innerHTML = ''

  let inpsB = document.getElementsByClassName('placar')

  let sou = document.querySelectorAll('button')[1]
  sou.setAttribute("data-target", "#meuModal")


  $(document).ready(function () {

    let inpsB = document.getElementsByClassName('placar')
    // let inps1 = document.querySelectorAll('input')
    const plac = []

    for (let i = 0; i < inpsB.length; i++) {
      plac[i] = parseInt(inpsB[i].value)
    }



    $('#helloa').append(`<p style="text-align: center;"> 
    --------------------------- <br>
    Semi Final <br>
    --------------------------- <br>
    ${A1} ${plac[0]} X ${plac[1]} ${B1} <br> 
    ${A2} ${plac[2]} X ${plac[3]} ${B2} <br>

    <br>

    </p>`);
  });


  let stg = $('#meuModal')
  stg.css({
    "visibility": "visible"
  })

}

function whatsapp() {

  let inpsC = document.getElementsByClassName('placar')

  const plac = []

  for (let i = 0; i < inpsC.length; i++) {
    plac[i] = parseInt(inpsC[i].value)
  }

  userName = prompt("Seu Nome + Sobrenome: ");


  text = `NOME: ${userName} %0A%0AAPOSTA *FUTBR* %0AMUNDIAL DE CLUBES FIFA-2025%0A%0A--------------------------- %0ASemi Final%0A--------------------------- %0AFluminense ${plac[0]} X ${plac[1]} Chelsea %0APSG ${plac[2]} X ${plac[3]} Real Madrid %0A`
 

  window.open(`https://wa.me/5519992481225?text=${text}`)
  console.log('Whatsapp finalizado')
  paginaCopaDoMundo()
}

function paginaCopaDoMundo() {
  $(location).attr('href', '../html/mundial-de-clubes-2025.html')
}

