const pro1 = Promise.resolve('hello');
pro1.then((value=>{
    console.log(value);
}))

const pro2 = new Promise((resolve, reject)=>{
    resolve('Hello World')
})

pro2.then((value)=>{
    console.log(value);
})

const pro3 = new Promise((resolve, reject)=>{
    const val = 20;
    if (val > 50){
        resolve(val)   
    }else{
        reject('Low Value')
    }
})

pro3.then(output=>{
    console.log(output);
}, (error)=>{
    console.log(error);
})


//chaining multiple promises together
let counter = 0
const pro4 = new Promise((resolve, reject)=>{
    // resolve('ready');
    reject('error!!')
}).then(value => {
    counter++;
    console.log(value);
    return `next step ${counter}`;
}).then(value => {
    counter++;
    console.log(value);
    return  `next step ${counter}`;
}).then(value => {
    counter++;
    console.log(value);
    return  `next step ${counter}`;
}).then(value => {
    counter++;
    console.log(value);
    return  `next step ${counter}`;
}).then(value => {
    counter++;
    console.log(value);
    return  `next step ${counter}`;
}).then(value => {
    counter++;
    console.log(value);
    return  `next step ${counter}`;
}).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})









/* 
console.log('test');

function greeting(){
    console.log('Hello World');
}

function test1(callback){
    callback();
}

test1(greeting)

setInterval(greeting,500);
console.log('test2');
*/