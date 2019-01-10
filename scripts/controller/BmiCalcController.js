class BmiCalcController {

    constructor() {
        this._weight = document.querySelector('#peso');
        this._height = document.querySelector('#altura');
        this._result = document.querySelector('#resultado');
        this._message = document.querySelector('#mensagem');
        this.addEventButton();
        this.recalc();
    }

    verifyValue(value) {
        let cont = 0;

        if(value < 0)
            return 0;

        for(let i = 0; i < value.length; i++) {
            
            if(value[i] == '.') {
                cont++;
            }
            else if(value[i] == ',') {
                return -1;
            }
        } 

        if(cont > 1)
            return 0;
        else {
            return 1;
        }
    }

    recalc() {
        let recalc = document.querySelector('#again');

        recalc.addEventListener('click', e => {

            this._height.value = '';
            this._weight.value = '';
            this._result.value = '';
            this._message.innerHTML = '';
        });
    }

    addEventButton() {
        let submit = document.querySelector('#submit');

        submit.addEventListener('click', e => {

            if(this.verifyValue(this._height.value) == 1 && this.verifyValue(this._weight.value) == 1) {

                this._result.value = (this._weight.value/(this._height.value * this._height.value)).toFixed(2);

                if(isNaN(this._result.value) || this._result.value == 'Infinity' || this._result.value == '0.00') {

                    this._result.value = '';

                }

                this.classifyBMI(this._result.value);

            } else if (this.verifyValue(this._height.value) == -1 || this.verifyValue(this._weight.value) == -1) {
                this._message.innerHTML = 'Use dot (.) instead of comma (,). Thanks!';
            }
            else {
                this._message.innerHTML = 'Something got wrong, try again please!';
            }
        });
    }

    classifyBMI(bmi) {
        bmi = parseFloat(bmi);

        if (bmi < 15) {

            this._message.innerHTML = 'Result: Very severely underweight';

        } else if (bmi >= 15 && bmi < 16) {

            this._message.innerHTML = 'Result: Severely underweight';

        } else if (bmi >= 16 && bmi < 18.5) {

            this._message.innerHTML = 'Result: Underweight';

        } else if (bmi >= 18.5 && bmi < 25) {

            this._message.innerHTML = 'Result: Normal (healthy weight)';

        } else if (bmi >= 25 && bmi < 30) {

            this._message.innerHTML = 'Result: Overweight';

        } else if (bmi >= 30 && bmi < 35) {

            this._message.innerHTML = 'Result: Moderately obese';

        } else if (bmi >= 35 && bmi < 40) {

            this._message.innerHTML = 'Result: Severely obese';

        } else if (bmi  >= 40) {

            this._message.innerHTML = 'Result: Very severely obese';

        }

    }

}

