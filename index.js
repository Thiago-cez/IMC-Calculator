//the way to get each screen: 
const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

//Function to switch navigation forms:
function go(currentStep, nextStep) {
    let dNone, dBlock;
    if(currentStep == 1) {
        dNone = firstDiv;
    }

    else if(currentStep == 2) {
        dNone = secondDiv;
    }

    else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    // ----------------------------

    if(nextStep == 1) {
        dBlock= firstDiv;
    }

    else if(nextStep == 2) {
        dBlock = secondDiv;
    }

    else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

function back(currentStep, backStep) {
    let dNone, dBlock;
    if(currentStep == 1) {
        dNone = firstDiv;
    }

    else if(currentStep == 2) {
        dNone = secondDiv;
    }

    else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';
    
    // ----------------------------

    if(backStep == 1) {
        dBlock= firstDiv;
    }

    else if(backStep == 2) {
        dBlock = secondDiv;
    }

    else {
        //dBlock = finalDiv;
    }
    dBlock.style.display = 'block'

}

// function to validate the fields "inputs" apply borders and calculate in the end.

function validate() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    
    peso.style.border = "none";
    altura.style.border = "none";

    if(!peso.value || !altura.value) {
        if(!peso.value && !altura.value) {

            peso.style.border = "2px solid red";
            altura.style.border ="2px solid red";
        }
        else if(!peso.value) {
            peso.style.border = "2px solid red";
        }
        else {
            altura.style.border ="2px solid red";
        }
    }
    else {
        
        // -----  IMC Calculation Form ---------------------
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById("resultado")
        
        // -- IF/ELSE -- to know the person's status IMC -----
        if(imc < 18.5) {
            result.style.color = "yellow";
            result.innerHTML = "Magreza | Obesidade: 0";
        }
        else if(imc >=18.5 && imc < 25) {
            result.style.color = "green";
            result.innerHTML = "Normal | Obesidade: 0";
        }
        else if(imc >=25 && imc < 30) {
            result.style.color = "yellow";
            result.innerHTML = "Sobrepeso | Obesidade: I";
        }
        else if(imc >= 30 && imc < 40) {
            result.style.color = "red";
            result.innerHTML = "Obesidade | Obesidade: II";
        }
        else {
            result.style.color = "black";
            result.innerHTML = "Obesidaed grave | Obesidade: III";
            result.innerHTML = "Procure Recomendações Médica.";
        }
        go(2,3);
    }
}