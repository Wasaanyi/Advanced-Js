const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output');

elementH1.addEventListener('click', ()=>{
    fetch('my4.json').then(res=>res.json()).then(data=>{
        console.log(data.name);
        console.log(data['name']);
        output.textContent = data.name;
    })
})

// demonstration purposes only
// be consistent with either using single quotes or double quotes
const myObj1 = {
    first: 'James',
    "last": "Wasaanyi",
    id: 10
};

console.log(myObj1);
// dot notation
console.log(myObj1.first);
// bracket notation
console.log(myObj1['first']);


const myArr1 = ['James', 'Wasaanyi', 10, myObj1];

const mystr = 'last';
console.log(myArr1);
console.log(myArr1[0]);
console.log(myArr1[3].id);
console.log(myArr1[3][mystr]);



