import fetch from "node-fetch";

// const getData = async()=>{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();     
// }

// getData();

let data = [];
const f1_data = await fetch("https://jsonplaceholder.typicode.com/users");
const f1_data_json = await f1_data.json();
data = f1_data_json;
data.forEach((name) => {console.log(name.name)})
