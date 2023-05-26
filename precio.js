const btnChoise1= document.getElementById("btn1")
const btnChoise2= document.getElementById("btn2")
const btnChoise3= document.getElementById("btn3")
const body = document.querySelector(".body")
const btnRemove = document.getElementById("botonRemove")
const titulo = document.getElementById("cuadro")
const btnIngresar=document.getElementById("btnIngresar")

const opcionBasica =()=>{
    btnChoise1.addEventListener("click",e=>{
        const pagarB= document.createElement("div")
        pagarB.id = "pagarB";
        body.append(pagarB);
        pagarB.innerHTML="<p class='tituloPrecio'>USTED HA SELECCIONADO EL PLAN BASIC POR 10$ AL MES</p>"
        pagarB.append(titulo)
        titulo.classList="tituloPago"
        borrarVentanaPagos()
      
    })
    
}
const borrarVentanaPagos=()=>{
    btnRemove.addEventListener("click",e=>{
       pagarB.remove()
    })
}
opcionBasica()

const opcionPremium=()=>{
    btnChoise2.addEventListener("click",e=>{
        const pagarP= document.createElement("div")
        pagarP.id = "pagarP";
        body.append(pagarP);
        pagarP.innerHTML="<p class='tituloPrecio'>USTED HA SELECCIONADO EL PLAN PREMIUM POR 25$ AL MES</p>"
        pagarP.append(titulo)
        titulo.classList="tituloPago"
        borrarVentanaPremiun()
    })
}
const borrarVentanaPremiun=()=>{
    btnRemove.addEventListener("click",e=>{
        pagarP.remove()
    })
}
opcionPremium()
const opcionGoat=()=>{
    btnChoise3.addEventListener("click",e=>{
        const pagar= document.createElement("div")
        pagar.id = "pagar";
        body.append(pagar);
        pagar.innerHTML="<p class='tituloPrecio'>USTED HA SELECCIONADO EL PLAN GOAT POR 40$ AL MES</p>"
        pagar.append(titulo)
        titulo.classList="tituloPago"
        borrarVentanaGoat()
    })
}
const borrarVentanaGoat=()=>{
    btnRemove.addEventListener("click",e=>{
        pagar.remove()
    })
}
opcionGoat()

const IngresarCuenta=()=>{
    btnIngresar.addEventListener("click",evt=>{
        const ingreso = document.getElementById("div")
        ingreso.classList = "ingresarCuenta";
        const dom = document.getElementById("pagarB")
        dom.append(ingreso)
        
        // ingreso.classList = "ingresarCuenta";
    })
}
