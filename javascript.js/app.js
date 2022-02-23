const user = { id: 11, name: ' Gorib amir', job: ' actor'};

const stringified =JSON.stringify(user);
// console.log(user);
// console.log(stringified);


const shop = {
name: 'Alia stor',
Addrs : 'commila',
products: ['leptop', 'Mobail' , 'gori','cuop'],
isESpesive: 'false',
Objectall:{
    student : 'shariful',
    rol: 69,
    class: 8,
},
};
const stringifyMakeing = JSON.stringify(shop);
// console.log(stringifyMakeing);
const parse = JSON.parse(stringifyMakeing);
// console.log(parse);
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));