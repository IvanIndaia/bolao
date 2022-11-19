
function acionarModal() {

  let fla1 = document.querySelector("#FLA-C")
  let fla = parseInt(fla1.value)

  let cap1 = document.querySelector("#CAP-F")
  let cap = parseInt(cap1.value)



  if (isNaN(fla) || isNaN(cap)) {
    alert("Favor Inserir um placar válido!")
  } else if (fla == cap) {
    empateLiberta()
    // apostarLibertadores()

  } else {
    apostarLibertadores()
  }
}

  // ================= FIM =================

  alert("NÃO SE ESQUECA DE FAZER O PIX: (19)992481225 \n Valor: R$ 5,00")
  let s = `APOSTA *FUTBR* - COPA DO BRASIL 2022%0A%0AACG 2 X 0 COR%0ACOR ${corc} X ${acgf} ACG%0AFOR ${forc} X ${fluf} FLU%0AFLU ${fluc} X ${forf} FOR%0ASAO ${saoc} X ${amgf} AMG%0AAMG ${amgc} X ${saof} SAO%0AFLA 0 X 0 CAP%0ACAP ${capc} X ${flaf} FLA`
  // window.open(`https://api.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  // window.open(`https://web.whatsapp.com/send?phone=5519992481225&text=${s}`, "blank");
  window.open(`https://wa.me/send?phone=55019992481225&text=${s}`)
}

function paginaBrasil() {
  $(location).attr('href', '../html/copaBrasil.html')
}

function popUP() {
  alert("Em construção...")
}