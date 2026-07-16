
// const display:HTMLInputElement= document.getElementById("display") as HTMLInputElement;




type Operator = "+" | "-" | "*" | "/" | "%";


interface HistoryItem {
    expression: string;
    result: string;
}
let history: HistoryItem[] = [];


function add(val: string): void {
const display1  = document.getElementById("display") as HTMLInputElement;
     display1.value += val;

};
function addOperator(opt : string):void{
  const display1  = document.getElementById("display") as HTMLInputElement;
   display1.value += opt;
}




function showHistory() {
let histList  = document.getElementById("hist_list") as HTMLUListElement;
    histList.innerHTML = "";

    for (let i = history.length - 1; i >= 0; i--) {

        let li = document.createElement("li") as HTMLLIElement;
        li.innerText = `${history[i]?.expression} = ${history[i]?.result}`

        histList.appendChild(li);
    }
}



function clearHistory() {
let histList  = document.getElementById("hist_list") as HTMLInputElement;

    history = [];
    histList.innerHTML = "";
   
}









const cle = (): void => {
 let display  = document.getElementById("display") as HTMLInputElement;
    display.value = " ";
};


function del(): void {
    let display  = document.getElementById("display") as HTMLInputElement;
    display.value = display.value.slice(0, -1);
}

function convertToString<T>(value: T): string {

    return String(value);
}


function calculate(): void {
 let display  = document.getElementById("display") as HTMLInputElement;
    try {
        const expression: string =display.value;

        const answer: number = eval(expression);

        history.push({
            expression,
            result: convertToString(answer)
        });
        
    showHistory();
        display.value = convertToString(answer);

    } catch {

        display.value = "Error";

    }

}


function sin(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        Math.sin(Number(eval(display.value)) * Math.PI / 180)
    );
}

function cos(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        Math.cos(Number(eval(display.value)) * Math.PI / 180)
    );
}

function tan(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        Math.tan(Number(eval(display.value)) * Math.PI / 180)
    );
}




function sec(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        1 / Math.cos(Number(eval(display.value)) * Math.PI / 180)
    );
}

function cosec(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        1 / Math.sin(Number(eval(display.value)) * Math.PI / 180)
    );
}

function cot(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        1 / Math.tan(Number(eval(display.value)) * Math.PI / 180)
    );
}

function log(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        Math.log10(Number(eval(display.value)))
    );
}

function ln(): void {
   let display  = document.getElementById("display") as HTMLInputElement;
    display.value = convertToString(
        Math.log(Number(eval(display.value)))
    );
}



(window as any).add = add;
(window as any).ln = ln;
(window as any).cot = cot;
(window as any).log = log;
(window as any).cosec = cosec;
(window as any).sec = sec;
(window as any).sin = sin;
(window as any).cos = cos;
(window as any).tan = tan;
(window as any).calculate = calculate;
(window as any).del = del;
(window as any).cle = cle;








export {}