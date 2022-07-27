function apostarCopaBrasil() {
  let cor1 = document.querySelector("#COR-F")
  let corf = parseInt(cor1.value)
  let acg1 = document.querySelector("#ACG-C")
  let acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)

  let sou = document.querySelector("button")
  sou.setAttribute("data-target", "#meuModal")


  let nome = prompt("Informe seu nome? ")
  let email = prompt("Informe seu e-mail? ")


  $(document).ready(function () {
    $('#helloa').append(`<p style="text-align: center;"> ACG ${acgc} X ${corf} COR <br> COR ${corc} X ${acgf} ACG <br> CAM X PAL <br> PAL X CAM <br> COR X FLA <br> FLA X COR <br> VEL X TAL <br> TAL X VEL <br> </p>`);

  });

  let stg = $('.modal')
  stg.css({
    "visibility": "visible"
  })
}



function acionarModal() {
  var cor1 = document.querySelector("#COR-F")
  var corf = parseInt(cor1.value)
  var acg1 = document.querySelector("#ACG-C")
  var acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)


  if (isNaN(acgc) || isNaN(corf) || isNaN(corc) || isNaN(acgf)) {
    alert("Favor Preencher todos os resultados!")
  } else {
    apostarCopaBrasil()
  }
}


function whatsapp() {
  // $(location).attr('href', "https://wa.me/55019992481225")
  var cor1 = document.querySelector("#COR-F")
  var corf = parseInt(cor1.value)
  var acg1 = document.querySelector("#ACG-C")
  var acgc = parseInt(acg1.value)

  let cor2 = document.querySelector("#COR-C")
  let corc = parseInt(cor2.value)
  let acg2 = document.querySelector("#ACG-F")
  let acgf = parseInt(acg2.value)

  // let cf = toString(corf)
  // let ac = toString(acgc)

  let s = `ACG ${acgc} X ${corf} COR /n  COR ${corc} X ${acgf} ACG`
  // let s = toString(st)

  // let s = 
  // let st = toString(s)
  // alert(st)
  // let s = "Ol%C3%A1%20me%20Amico%2C%20em%20que%20puesso%20ajduar%3F"
  window.open(`https://api.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");

}

function paginaBrasil() {
  $(location).attr('href', '../html/copaBrasil.html')
}