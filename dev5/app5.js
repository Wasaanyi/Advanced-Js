const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');

elementH1.addEventListener('click', fun2);
const url = 'my5.json';

function fun1(){
    fetch(url)
    .then(response => response.text())
    .then(data => {
        //console.log(data);
        outputter1(data)
    })
}

function fun2(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        outputter2(data)
    })
}

function outputter2(val){
    const obj1 = JSON.stringify(val);
    output.textContent = `${val.first} ${val.last} ${obj1}`;
}

function outputter1(val){
    const obj1 = JSON.parse(val);
    output.textContent = `${obj1.first} ${obj1.last}`;
}

