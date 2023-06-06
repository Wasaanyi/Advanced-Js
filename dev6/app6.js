const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');
const url = 'my6.json';

elementH1.addEventListener('click', data1);

function data1 (){
    fetch(url)
    .then(res=>res.json())
    .then(data => {
        out1(data);
    })
}

function out1(arr){
    const rand = Math.floor(Math.random()*arr.length);
    const val = arr[rand];
    console.log(val);
    arr.push(val);


    arr.forEach(element => {
       output.innerHTML += `<div>
        ${element.first} - ${element.last}: ${element.id}
       </di>` 
    });
}