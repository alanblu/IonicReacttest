const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const resultArea = document.getElementById('result');

const resetInputs = () => {
    heightInput.value = '';
    weightInput.value = '';
    resultArea.innerHTML='';
};

const calculatBmi = () => {
    const enterHeight = +heightInput.value;
    const enterWeight = +weightInput.value;

    const bmi = enterWeight / (enterHeight * enterHeight);

    if(isNaN(bmi))
    {
        alert('Not a Number, please check input');
        return;
    }
    
    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;

    resultArea.innerHTML='';
    resultArea.appendChild(resultElement);
};

calculateBtn.addEventListener('click', calculatBmi);
resetBtn.addEventListener('click', resetInputs);