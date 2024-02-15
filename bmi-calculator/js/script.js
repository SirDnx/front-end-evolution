const calculate = document.getElementById('calculate');


function bmi(){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !== '' && height !== '' && weight !== ''){
        const bmiValue = (weight / (height * height)).toFixed(2);

        let classification = '';

        if(bmiValue < 18.5){
            classification = 'under weight'
        }else if (bmiValue < 25){
            classification = 'with ideal weight. Congrats!!!'
        }else if (bmiValue < 30){
            classification = 'slightly overweight'
        }else if (bmiValue < 35){
            classification = 'grade I obesity'
        }else if (bmiValue < 40){
            classification = 'grade II obesity'
        }else{
            classification = 'grade III obesity. Be careful!!!'
        }

        result.textContent = `${name} your BMI is ${bmiValue} and you are ${classification}.` ;

    }else{
        result.textContent = 'Preencha todos os campos';
    }
}


calculate.addEventListener('click', bmi);

