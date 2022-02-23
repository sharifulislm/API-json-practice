// function gatingValue(){
//     fetch('https://api.kanye.rest/')
//     .then(sen => sen.json())
//     .then(data => showIng(data))

// }

// get advance value forme da random link 
/*
const loadBuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(data => showApi(data));

}

loadBuddies()

const showApi=(data) => {
const buddis= data.results;
console.log(buddis);
const buddiesdiv = document.getElementById('show-div');
for (const body of buddis){
    console.log(body.name.first)
    const p = document.createElement('p');

    p.innerText = ` ${body.name.first} , ${body.name.last} ${body.picture.large} ` ;

    buddiesdiv.appendChild(p);
    
}
    
}
*/
const loadcontries = () => {
  fetch('https://restcountries.com/v3.1/all')
      .then(Response => Response.json())
      .then(data => showConrries(data));
}
loadcontries()

const showConrries = counties => {

  const countesDiv = document.getElementById('country');

  counties.forEach(counry => {
      console.log(counry);
      const div = document.createElement('div')
      div.classList.add('country')
      div.innerHTML = `
      <h3>${counry.name.common}</h3>
      <p>${counry.capital}</p>
      <button onclick="loadButton('${counry.name.common}')"> detalis </button> 
      `;


          countesDiv.appendChild(div);
    })

  }
  const loadButton = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
     fetch(url)
     .then(pen => pen.json())
     .then(data => displayvalue(data));
  }

  const displayvalue = (data) => {
    console.log(data);
    const allCountry = document.getElementById('all-country');
    const box = document.createElement('div');
    box.innerHTML = `
     <h1>${data[0].name.common}</h1>
     <img src="${data[0].flags}"> 
    `;
    allCountry.appendChild(box);
  }