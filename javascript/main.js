document.querySelector('.resultBtn').addEventListener('click', function(){
    let a = document.querySelector('#valueA').value;
    let b = document.querySelector('#valueB').value;
    let c = document.querySelector('#valueC').value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    calculate(a, b, c);
    if(a === 0){
        const para = document.createElement('p');
        para.innerHTML = "value of a not equal to 0";
        document.querySelector('body').appendChild(para);
    }
})

function calculate(a, b, c) {
    // const bsquare = Math.pow(b, 2);
    // const fourAC = 4*a*c;
    // const nischayok = bsquare - fourAC;
    // const rootNischayok = Math.sqrt(nischayok);
    const result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    const result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    showUI(result1, result2);
}

function showUI(result1, result2) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${result1} , ${result2}</p>`;
    document.querySelector('body').appendChild(div);
}