const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');
const btn = document.querySelector('button');
const myInput = document.querySelector('input');
btn.addEventListener('click', gData)


const url = 'https://randomuser.me/api/?results='

function gData(){
    console.log(myInput.value);
    const urlNew = `${url}${myInput.value}`;
    console.log(urlNew);
    fetch(urlNew)
    .then(rep => rep.json())
    .then(data => {
        outputData(data.results);
    })
}

function outputData(arr){
    arr.forEach(element => {
        createRecord(element);        
    });
}

function createRecord(person){
    console.log(person.name.title);
    console.log(person.name.first);
    console.log(person.email);
    console.log(person.dob.age);

    const record = maker ('', 'div', output)
    record.style.border = '1px solid #ddd';

    const html1= `${person.name.title} ${person.name.first} 
    ${person.name.last}`;
    maker(html1, 'div', record);

    const html2= `Age: ${person.dob.age} <small>${person.dob.date}</small>`;
    maker(html2, 'div', record);

    const html3 = `Email: ${person.email}`
    maker(html3, 'div', record);
}


function maker(elementHtml, elementType, elementParent){
    const ele = document.createElement(elementType);
    elementParent.append(ele);
    ele.innerHTML = elementHtml;
    
    return ele;
}

const url2 = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
});


// function getPromise(num){
//     return new Promise((resolve, reject)=>{  
//         if (num>5){
//             resolve('Greater than five');
//         }else{
//             reject('less than five');
//         }
//     });
// }

// getPromise(3).then(res => console.log(res)).catch(error => console.log(error));




 