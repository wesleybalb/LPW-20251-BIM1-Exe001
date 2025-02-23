class Circulo{
    raio

    constructor(raio){
        raio = raio
    }

    circuferencia(){
        return Math.round(2*Math.PI*this.raio)
    }
    area(){
        return Math.round( Math.PI*this.raio**2)
    }


}

const ERRO1 = "<p>O valor do raio precisa ser maior que zero para que o círculo possa existir</p>"

function calcular(){
    
    
    const PegaRaio = parseFloat(document.getElementById("raio").value)
    
    const MSG = document.getElementById("forma")

    if(PegaRaio === "" || isNaN(PegaRaio) || PegaRaio < 1){
        MSG.innerHTML = ERRO1
    }else{
        
        const circ1 = new Circulo()
        
        circ1.raio = PegaRaio
        
        
        MSG.innerHTML = `<div> O raio do cículo é de ${circ1.raio}. Ele tem a Circuferência igual a ${circ1.circuferencia()} e área igual a ${circ1.area()}.</div> <br> <div class="circle" style="height: ${circ1.raio}0px; width:${circ1.raio}0px ;"></div>`
    }

}