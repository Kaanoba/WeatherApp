

// Fetch API ile başka yerlerden veri çekme işlemi..

/*
const jsonPlaceHolderApi = 'https://jsonplaceholder.typicode.com/todos/';
const app = document.querySelector('#app');
const createUlElement = document.createElement('ul');
app.append(createUlElement);


fetch(jsonPlaceHolderApi).then(response => response.json())
.then(json => {
    json.forEach((value, index) => {
        const createLiElement = document.createElement('li');
        createLiElement.innerHTML = value.title;
        createUlElement.append(createLiElement);
    })
})*/



const value = document.querySelector('input');
const bring = document.querySelector('button');
const ul = document.querySelector('#cityTemp');
bring.addEventListener('click', (event) => {
    const weatherAppApi = 'https://api.openweathermap.org/data/2.5/weather?q='+value.value+'&appid=' +
        '286e28ae266c3b6753ba398776901139';
    fetch(weatherAppApi).then(response => response.json())
        .then(json => {
            const convertToCelc = (json.main.temp - 273.15);
            console.log(value.value+' = '+ (convertToCelc)+ ' C')
            const createLiElement = document.createElement('li');
            createLiElement.innerHTML = `${value.value}: ${Math.floor(convertToCelc)} derece`;
            ul.append(createLiElement);
        })
})


