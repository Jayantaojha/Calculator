const body = document.querySelector('body');
const setting = document.getElementById('setting');
const history = document.getElementById('history');
const answer = document.getElementById('answer');
const lastAnswer = document.getElementById('last-answer');

answer.innerText = "";

const buttons = document.querySelectorAll('button');
const buttonsArr = Array.from(buttons);

buttonsArr.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText !== "" && button.innerText !== "C") {
            answer.innerText += button.innerText
        }
        else if (button.innerText == "" || button.innerText == "C") {
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


// div for dark mode
const div = document.createElement('div');
div.style.height = "5vh";
div.style.width = "28vw";
div.style.backgroundColor = "#f8f8f8";
div.style.position = "absolute";
div.style.top = "9vh";
div.style.left = "5vw";
div.style.borderRadius = "6px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.boxShadow = "1px 2px 10px grey";
div.style.cursor = "pointer";
div.innerHTML = `<p style="text-align: center; font-size: 12px; color: #525252;">Dark Mode</p>`;



let clickTime = 0;

setting.addEventListener('click', () => {
    if (clickTime === 0) {
        setting.firstChild.classList.remove("fa-gear");
        setting.firstChild.classList.add("fa-xmark");
        clickTime = 1;

        body.appendChild(div);

        // for switching color mode
        let modeCounter = true;

        div.addEventListener('click', () => {
            // for dark mode
            if (modeCounter) {
                div.innerHTML = `<p style="text-align: center; font-size: 12px; color: #525252;">Light Mode</p>`;
                // body.style.backgroundColor = "#0a2538";
                body.classList.add('dark');
                body.classList.add('bg-black');
                body.classList.remove('bg-white');
                
                modeCounter = false;
            }
            // for light mode
            else{
                div.innerHTML = `<p style="text-align: center; font-size: 12px; color: #525252;">Dark Mode</p>`;
                // body.style.backgroundColor = "white";
                body.classList.remove('dark');
                body.classList.remove('bg-dark');
                body.classList.add('bg-white');

                modeCounter = true;
            }

        })
    }

    else if (clickTime === 1) {
        console.log("Second time click");
        body.removeChild(div);

        setting.firstChild.classList.remove("fa-xmark");
        setting.firstChild.classList.add("fa-gear");
        clickTime = 0;
    }
})