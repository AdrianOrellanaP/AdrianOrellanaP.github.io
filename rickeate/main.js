const url = 'https://rickandmortyapi.com/api/character/1'
const url2 = 'https://rickandmortyapi.com/api/character/2'
const url3 = 'https://rickandmortyapi.com/api/character/3'
const url4 = 'https://rickandmortyapi.com/api/character/4'

fetch(url)
.then(response => response.json())
.then(data => {
    let element=document.getElementById('elemen')
    element.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.id}</p>
    <img src='${data.image}'/>
    <p>${data.species}</p>
    <p>${data.location.name}</p>
    `;
    console.log( data)
})

fetch(url2)
.then(response => response.json())
.then(data1=> {
    let element=document.getElementById('elemen2')
    element.innerHTML = `
    <p>${data1.name}</p>
    <p>${data1.id}</p>
    <img src='${data1.image}'/>
    <p>${data1.species}</p>
    <p>${data1.location.name}</p>
    `;
    console.log( data1)
})


.catch(err=>console.log(err))