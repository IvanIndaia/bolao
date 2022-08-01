function apostarLibertadores() {
  // ============= EST x CAP =============
  let est1 = document.querySelector("#EST-F")
  let estf = parseInt(est1.value)
  let cap1 = document.querySelector("#CAP-C")
  let capc = parseInt(cap1.value)

  let est2 = document.querySelector("#EST-C")
  let estc = parseInt(est2.value)
  let cap2 = document.querySelector("#CAP-F")
  let capf = parseInt(cap2.value)

  // ============= PAL x CAM =============

  let cam1 = document.querySelector("#CAM-C")
  let camc = parseInt(cam1.value)
  let pal1 = document.querySelector("#PAL-F")
  let palf = parseInt(pal1.value)

  let cam2 = document.querySelector("#CAM-F")
  let camf = parseInt(cam2.value)
  let pal2 = document.querySelector("#PAL-C")
  let palc = parseInt(pal2.value)

  // ============= FLA x COR =============

  let fla1 = document.querySelector("#FLA-F")
  let flaf = parseInt(fla1.value)
  let cor1 = document.querySelector("#COR-C")
  let corc = parseInt(cor1.value)

  let fla2 = document.querySelector("#FLA-C")
  let flac = parseInt(fla2.value)
  let cor2 = document.querySelector("#COR-F")
  let corf = parseInt(cor2.value)

  // ============= TAL x VEL =============

  let vel2 = document.querySelector("#VEL-C")
  let velc = parseInt(vel2.value)
  let tal2 = document.querySelector("#TAL-F")
  let talf = parseInt(tal2.value)

  let vel1 = document.querySelector("#VEL-F")
  let velf = parseInt(vel1.value)
  let tal1 = document.querySelector("#TAL-C")
  let talc = parseInt(tal1.value)

  // ============= FIM =============

  let sou = document.querySelector("button")
  sou.setAttribute("data-target", "#meuModal")

  // let nome = prompt("Informe seu nome: ")

  $(document).ready(function () {
    $('#helloa').append(`<p style="text-align: center;"> CAP ${capc} X ${estf} EST <br> EST ${estc} X ${capf} CAP <br> CAM ${camc} X ${palf} PAL <br> PAL ${palc} X ${camf} CAM <br> COR ${corc} X ${flaf} FLA <br> FLA ${flac} X ${corf} COR <br> VEL ${velc} X ${talf} TAL <br> TAL ${talc} X ${velf} VEL <br> </p>`);

  });

  let stg = $('.modal')
  stg.css({
    "visibility": "visible"
  })
}

function acionarModal() {
 // ============= EST x CAP =============
 let est1 = document.querySelector("#EST-F")
 let estf = parseInt(est1.value)
 let cap1 = document.querySelector("#CAP-C")
 let capc = parseInt(cap1.value)

 let est2 = document.querySelector("#EST-C")
 let estc = parseInt(est2.value)
 let cap2 = document.querySelector("#CAP-F")
 let capf = parseInt(cap2.value)

 // ============= PAL x CAM =============

 let cam1 = document.querySelector("#CAM-C")
 let camc = parseInt(cam1.value)
 let pal1 = document.querySelector("#PAL-F")
 let palf = parseInt(pal1.value)

 let cam2 = document.querySelector("#CAM-F")
 let camf = parseInt(cam2.value)
 let pal2 = document.querySelector("#PAL-C")
 let palc = parseInt(pal2.value)

 // ============= FLA x COR =============

 let fla1 = document.querySelector("#FLA-F")
 let flaf = parseInt(fla1.value)
 let cor1 = document.querySelector("#COR-C")
 let corc = parseInt(cor1.value)

 let fla2 = document.querySelector("#FLA-C")
 let flac = parseInt(fla2.value)
 let cor2 = document.querySelector("#COR-F")
 let corf = parseInt(cor2.value)

 // ============= TAL x VEL =============

 let vel2 = document.querySelector("#VEL-C")
 let velc = parseInt(vel2.value)
 let tal2 = document.querySelector("#TAL-F")
 let talf = parseInt(tal2.value)

 let vel1 = document.querySelector("#VEL-F")
 let velf = parseInt(vel1.value)
 let tal1 = document.querySelector("#TAL-C")
 let talc = parseInt(tal1.value)

 // ============= FIM =============

  // ============= FIM =============

  if (isNaN(capc) || isNaN(estf) || isNaN(estc) || isNaN(capf) ||
    isNaN(camc) || isNaN(palf) || isNaN(palc) || isNaN(camf) ||
    isNaN(corc) || isNaN(flaf) || isNaN(flac) || isNaN(corf) ||
    isNaN(velc) || isNaN(talf) || isNaN(talc) || isNaN(velf)) {
    alert("Favor preencher todos os resultados!")
  } else {
    apostarLibertadores()
  }
}


function whatsapp() {
  // $(location).attr('href', "https://wa.me/55019992481225")
  // ============= EST x CAP =============
  let est1 = document.querySelector("#EST-F")
  let estf = parseInt(est1.value)
  let cap1 = document.querySelector("#CAP-C")
  let capc = parseInt(cap1.value)

  let est2 = document.querySelector("#EST-C")
  let estc = parseInt(est2.value)
  let cap2 = document.querySelector("#CAP-F")
  let capf = parseInt(cap2.value)

  // ============= PAL x CAM =============

  let cam1 = document.querySelector("#CAM-C")
  let camc = parseInt(cam1.value)
  let pal1 = document.querySelector("#PAL-F")
  let palf = parseInt(pal1.value)

  let cam2 = document.querySelector("#CAM-F")
  let camf = parseInt(cam2.value)
  let pal2 = document.querySelector("#PAL-C")
  let palc = parseInt(pal2.value)

  // ============= FLA x COR =============

  let fla1 = document.querySelector("#FLA-F")
  let flaf = parseInt(fla1.value)
  let cor1 = document.querySelector("#COR-C")
  let corc = parseInt(cor1.value)

  let fla2 = document.querySelector("#FLA-C")
  let flac = parseInt(fla2.value)
  let cor2 = document.querySelector("#COR-F")
  let corf = parseInt(cor2.value)

  // ============= TAL x VEL =============

  let vel2 = document.querySelector("#VEL-C")
  let velc = parseInt(vel2.value)
  let tal2 = document.querySelector("#TAL-F")
  let talf = parseInt(tal2.value)

  let vel1 = document.querySelector("#VEL-F")
  let velf = parseInt(vel1.value)
  let tal1 = document.querySelector("#TAL-C")
  let talc = parseInt(tal1.value)

  // ============= FIM =============
  
  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \nValor: R$ 5,00")
  let s = `APOSTA *FUTBR* - COPA LIBERTADORES 2022%0A%0ACAP ${capc} X ${estf} EST%0AEST ${estc} X ${capf} CAP%0ACAM ${camc} X ${palf} PAL%0APAL ${palc} X ${camf} CAM%0ACOR ${corc} X ${flaf} FLA%0AFLA ${flac} X ${corf} COR%0AVEL ${velc} X ${talf} TAL%0ATAL ${talc} X ${velf} VEL`
  // window.open(`https://api.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  window.open(`https://wa.me/55019992481225&text=${s}`)
}

function paginaLiberta() {
  $(location).attr('href', '../html/libertadores.html')
}

function popUP() {
  alert("Em Breve...")
}

function popUP2() {
  alert("Encerrado!")
}