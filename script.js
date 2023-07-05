

async function getApiData(){
    try{
    let response=await fetch(`https://anapioficeandfire.com/api/characters/583`);
  let result= await response.json();
 console.log(result);
  let createCard=document.getElementById('card_1');
 
 
  createCard.innerHTML=`<div class="card text-center" style="width: 100%;">
  <div class="card-header">  ${result.titles[0]} </div>
<ul class="list-group list-group-flush">
   
    <li class="list-group-item">Name : ${result.name}</li>
    <li class="list-group-item">Gender : ${result.gender}</li>
    <li class="list-group-item">Born : ${result.born}</li>
    <li class="list-group-item">Culture : ${result.culture}</li>
    <li class="list-group-item">played by : ${result.playedBy[0]}</li>
    <li class="list-group-item">${result.books[0]}</li>
  </ul>
</div>`
 }

 catch{(err)=>console.log(err)}

 }
 
 getApiData();