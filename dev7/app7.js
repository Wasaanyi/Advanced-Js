const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');

outputData();

async function outputData(val){
    const myOutput = new Promise((resolve)=>{
         setTimeout(()=>{resolve('James Wasaanyi')}, 3000);
    })

    output.innerHTML += 'Await Pause <br>';
    const val1 = await myOutput;
    output.innerHTML += val1 + '<br>';
}

function greeting(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve('James Wasaanyi '+ delay)}, delay);
   });
}

async function welcome(delay){
    const val = await greeting(delay);
    output.innerHTML += val + '<br>';
    console.log(val);
}

welcome(14000);
welcome(4000);
welcome(8000);
welcome(7000);
welcome(1000);