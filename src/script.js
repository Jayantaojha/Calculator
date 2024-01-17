const setting = document.getElementById('setting');
const history = document.getElementById('history');
const answer = document.getElementById('answer');
const lastAnswer = document.getElementById('last-answer');

answer.innerText = "";

setting.addEventListener('click', () => {
    console.log('Setting is clicked');
})

history.addEventListener('click', () => {
    console.log('History is clicked');
})

const buttons = document.querySelectorAll('button');
const buttonsArr = Array.from(buttons);

buttonsArr.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.innerText !== "" && button.innerText !== "C"){
            answer.innerText += button.innerText
        }
        else if(button.innerText == "" || button.innerText == "C"){
            switch (button.id) {
                case 'clear-all':
                    console.log("Clear all is clicked");
                    answer.innerText = "";
                    lastAnswer.innerText = "";
                    break;
                
                case 'delete':
                    console.log("Delete is clicked");
                    answer.innerText = answer.innerText.slice(0, -1);
                    break;

                case 'percent':
                    console.log("Percent is clicked");
                    answer.innerText += '%';
                    break;

                case 'divide':
                    console.log("Divide is clicked");
                    answer.innerText += '/';
                    break;

                case 'multiply':
                    console.log("Multiply is clicked");
                    answer.innerText += '*';
                    break;

                case 'minus':
                    console.log("Minus is clicked");
                    answer.innerText += '-';
                    break;

                case 'plus':
                    console.log("Plus is clicked");
                    answer.innerText += '+';
                    break;

                case 'equal':
                    console.log("Equal is clicked");
                    let quary = answer.innerText.split('+');

                    let quaryIntFirst = parseInt(quary[0]);
                    let quaryIntSecond = parseInt(quary[1]);

                    console.log(quaryIntFirst, quaryIntSecond);

                    // let finalAnswer = eval(quaryIntFirst * quaryIntSecond);
                    let finalAnswer = eval(answer.innerText);

                    lastAnswer.innerText += answer.innerText;
                    answer.innerText = finalAnswer;
                    break;

                default:
                    console.log("No button is clicked");
                    break;
            }
        }
    })
})
