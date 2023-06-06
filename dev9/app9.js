const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');
elementH1.textContent = 'Click Me';
elementH1.addEventListener('click', gData);

const url1 = 'my91.json';
const url2 = 'my92.json';

const urls = [url1, url2, 'my93.json']

function gData(){
    console.log('ready');
    const requests = urls.map(url => fetch(url).then(rep => rep.json())) 
    Promise.all(requests).then((arr)=>{
        myArray(arr);
    })

}

function myArray(arr){
    arr.forEach(element => {
        console.log(element);
        output.innerHTML += `<div> ${element.greet} ${element.first} ${element.last} </div>`;
    });
}

const pro1 = new Promise ((resolve)=>{
    setTimeout(resolve, 5000, 'Hello');
})

const pro2 = new Promise ((resolve)=>{
    setTimeout(resolve, 1000, 'world');
})

const pro3 = 'Wasaanyi James';

const pro4 = Promise.resolve('Javascript');

function gData1(){
    console.log('ready');
    Promise.all([pro1,pro2,pro3, pro4]).then((val)=>{
        outputValues(val);
    })
}

function outputValues(arr){
    arr.forEach(element => {
        output.innerHTML += `<div>${element}</div>`
    });
}