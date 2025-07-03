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
  /*
  console.log(`Quantidade de Placar: ${inpsA.length}`)
  console.log(`Quantidade de Inputs: ${inps.length}`)
  */
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
  // sou.forEach(e => {
  //   console.log(e)
  // });

  // console.log(sou)

  $(document).ready(function () {

    let inpsB = document.getElementsByClassName('placar')
    // let inps1 = document.querySelectorAll('input')
    const plac = []

    for (let i = 0; i < inpsB.length; i++) {
      plac[i] = parseInt(inpsB[i].value)
    }



    $('#helloa').append(`<p style="text-align: center;"> 
    --------------------------- <br>
    Quartas de Final <br>
    --------------------------- <br>
    Palmeiras ${plac[0]} X ${plac[1]} Chelsea <br> 
    Fluminense ${plac[2]} X ${plac[3]} Al-Hilal <br>

    PSG ${plac[4]} X ${plac[5]} Bayern de Munique <br>
    Real Madrid ${plac[6]} X ${plac[7]} Borussia Dortmund <br>

    <br>

    </p>`);
  });


  let stg = $('#meuModal')
  stg.css({
    "visibility": "visible"
  })

}

function vaiDarCerto() {
  // let paragrafos = document.querySelectorAll('p')

  // paragrafos.forEach(e => {
  //   console.log(e)

  // });

  // let campeao1 = document.getElementById('inputGroupSelect01')
  // let campeao2 = document.getElementById('inputGroupSelect02')


  // console.log(campeao1.value)
  // console.log(campeao2.value)

  // let artilheiro = document.getElementsByClassName('form-control')

  // for (i = 0; i < artilheiro.length; i++) {
  //   console.log(artilheiro[i].value)
  // }

  // jogadorArt1 = artilheiro[0].value
  // jogadorArt2 = artilheiro[1].value
  // console.log(artilheiro2.value)

}

function whatsapp() {

  let inpsC = document.getElementsByClassName('placar')
  // let inps2 = document.querySelectorAll('input')

  const plac = []

  for (let i = 0; i < inpsC.length; i++) {
    plac[i] = parseInt(inpsC[i].value)
  }

  userName = prompt("Seu Nome + Sobrenome: ");
  // let cellPhone = prompt("Digite o número do seu Celular com DDD: ");

  alert("AINDA NÃO FINALIZOU.. \nA aposta só será validada quando a mensagem chegar no Whatsapp!!!")


  text = `NOME: ${userName} %0A%0AAPOSTA *FUTBR* %0AMUNDIAL DE CLUBES FIFA-2025%0A%0A--------------------------- %0AQuartas de Final%0A--------------------------- %0APalmeiras ${plac[0]} X ${plac[1]} Chelsea %0AFluminense ${plac[2]} X ${plac[3]} Al-Hilal %0APSG ${plac[4]} X ${plac[5]} Bayern de Munique %0AReal Madrid ${plac[6]} X ${plac[7]} Borussia Dortmund %0A`


  // salvarEmArquivo(text, userName)
  // abrirPopUp()

  function abrirPopUp() {
    // Define as opções do pop-up (tamanho, etc.)
    const opcoes = "width=500,height=400,left=100,top=100";
    // Abre o pop-up com o URL desejado e as opções
    const popup = window.open("http://127.0.0.1:5500/html/mundial-de-clubes-2025.html", "popUp", opcoes);
  
    // Verifica se o pop-up foi bloqueado
    if (!popup) {
      alert("O pop-up foi bloqueado. Por favor, desbloqueie para continuar.");
    } else {
      // Opcional: Adicionar código para manipular o pop-up
      // Exemplo: popup.document.write("<p>Conteúdo do pop-up</p>");
    }
  }

  window.open(`https://wa.me/5519992481225?text=${text}`)
  // console.log('Whatsapp finalizado')
  paginaCopaDoMundo()
}


function paginaCopaDoMundo() {
  $(location).attr('href', '../html/mundial-de-clubes-2025.html')
}


// function salvarEmArquivo(n, m){

//   const texto = n;
//   const titulo = m;

//   var blob = new Blob([texto],
//     {type: 'text/plain: charset-utf-8' });

//     saveAs(blob, titulo + '.txt');

  
//   }
