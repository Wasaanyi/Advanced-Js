// const url = 'test3.txt';
const url = 'html3.html'
const elementH1 = document.querySelector('h1');
const output = document.querySelector('.output')
elementH1.addEventListener('click', fileData);



function fileData(){
    fetch(url)
    .then(response=>{
        console.log(response);
        if(response.status == 200){
            return response.text()
        }
    })
    .then(data=>{
        console.log(data)
        elementH1.innerHTML += data;
        output.textContent = data;
    })
}
