let main = document.getElementById('main');
let text = document.getElementById('text');
let button = document.getElementById('button');
let grid=document.querySelector('#grid');
let forimage=document.querySelector('#container');
let naame=document.querySelector(".name");
let naam=document.querySelector(".naam");
let image=document.querySelector(".image");
let display=document.querySelector("#results")

var search='';

button.addEventListener('click', () => {
  if((text.value)!=""){
  search=text.value;
  text.value="";
  forimage.innerHTML="";
  display.innerHTML="Results for your search: ";
  allfood(search);
  }


  async function allfood(alt) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${alt}`)
     .then((data) => data.json())
     .then((res) => {
       let use = res.meals;
       console.log(res)
       use.forEach((elt) => {
         forimage.innerHTML+=`
         <div class='toset'>
         <img src='${elt.strMealThumb}' class='random' >
         <h4 class='centre'>${elt.strMeal}<h4>
         </div>
         `
 
       });
     }).catch(()=>{
       display.innerHTML=`Results for your search: <br> Sorry, we cannot find any item`
     })
 }
 

 



});




async function makerandom() {
 await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((reso) => reso.json())
    .then((res) => {

      image.setAttribute('src', `${res.meals[0].strMealThumb}`);
      image.setAttribute('class', 'ott');

      naame.innerHTML=`${res.meals[0].strArea}`

      naam.innerHTML=`${res.meals[0].strMeal}`
      
    })
    .catch(() => {
      console.log('Invalid API');
    });
}

makerandom();

