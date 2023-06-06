const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');
elementH1.textContent = 'Click Me'
const url = 'my8.json';

elementH1.addEventListener('click', getFileValue);

async function getFileValue(){
    const responseValue = await fetch(url);
    const myValue = await responseValue.json();
    console.log(myValue.first);
    output.innerHTML = `<div> ${myValue.first} ${myValue.last} </div>`;
    outputTest();
}

async function outputTest(){
    try{
        let rep = await Promise.resolve('Hello');
        if (!rep.ok){
            throw new Error('Error oh no');
        }
    }catch(error){
        console.log(error);
    }
}


fun1()
fun2()
fun3()

async function fun1() {
    console.log('one');
    let rep = new Promise((resolve)=>{
        setTimeout(()=>{resolve('five')}, 5000);
    })
    const val = await rep;
    console.log(val);
}

function fun2() {
    console.log('two');
    fetch(url)
    .then(rep=>rep.json())
    .then(data=>{
        console.log('four');
        return data;
    })
}


async function fun3 (){
    let rep = await Promise.resolve('three')
    console.log(rep);
}