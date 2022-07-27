function apostarLiberta() {

    let cor1 = document.querySelector("#COR-F")
    let corf = parseInt(cor1.value)
    let acg1 = document.querySelector("#ACG-C")
    let acgc = parseInt(acg1.value)

    // alert(`ACG = ${acgc} x ${corf} COR`)
    $(document).ready(function() {
      $('#helloa').append(`<p style="text-align: center;"> ACG ${acgc} X ${corf} COR <br> EST X CAP <br> CAM X PAL <br> PAL X CAM <br> COR X FLA <br> FLA X COR <br> VEL X TAL <br> TAL X VEL <br> </p>`);
  });
    // let est2 = document.querySelector("#EST-C")
    // let est_c = parseInt(est2.value)
    // let cap2 = document.querySelector("#CAP-F")
    // let cap_f = parseInt(cap2.value)

    // let est2 = document.querySelector("#EST-C")
    // let est_c = parseInt(est2.value)
    // let cap2 = document.querySelector("#CAP-F")
    // let cap_f = parseInt(cap2.value)

    // let est2 = document.querySelector("#EST-C")
    // let est_c = parseInt(est2.value)
    // let cap2 = document.querySelector("#CAP-F")
    // let cap_f = parseInt(cap2.value)

    // alert (`CAP ${cap_c} X ${est_f} EST \n EST ${est_c} X ${cap_f} CAP \n
            
    //         `)
}


  function acionarModal() {
    // alert("Oi")
    apostarLiberta()
    let stg  = $('.modal')
    stg.css({
        "visibility": "visible"
    })
  }
// function apostarLiberta() {

//     let cap_c = document.getElementById("#CAP-C").value
//     let est_f = document.getElementById("#EST-F").value
//     let est_c = document.getElementById("#EST-C").value
//     let cap_f = document.getElementById("#CAP-F").value

//     alert (`CAP ${cap_c} X ${est_f} EST \n 
//             EST ${est_c} X ${cap_f} CAP \n
            
//             `)
// }