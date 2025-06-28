// const fetch = require('node-fetch');

// async function fetchPost() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error.message);
//   }
// }

// fetchPost();
const url="https://catfact.ninja/facts";
const getfact=async ()=>{
  console.log("get data");
  let response =await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data[0].text);
  
  
}
