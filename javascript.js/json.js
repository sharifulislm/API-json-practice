
function getingJson (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(resn => resn.json())
      .then (data => console.log(data));
}



function clickme(){
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(tarnsfroming => tarnsfroming.json())
       .then(dataValue => console.log(dataValue));

}
function getingJson() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (cach => cach.json())
    .then (data => getingValue(data));

}


 function getingValue(data){
     const listItemId = document.getElementById('users');
     for (let usar of data){
        const usarObjec = document.createElement('li');
        usarObjec.innerText = `name:${usar.name}  email; ${usar.email}`;
        listItemId.appendChild(usarObjec);

     }

 }

// function displyFuncton(data) {
//     const usersId = document.getElementById('users');

//       for(const usar of data) {
//           console.log(usar);
        
//           const listItem = document.createElement('li');
//           listItem.innerText = usar.email;
//           usersId.appendChild(listItem);
//                }

// }


//   .then(response => response.json())
                                                   
//   .then(json => console.log(json))