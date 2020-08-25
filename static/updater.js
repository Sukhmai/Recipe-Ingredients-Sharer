fetch(`http://localhost:3000/loadRecipes`)
  .then(async res => document.getElementById("ingredients").innerHTML = await res.text());

function updateList() {
  let url = document.getElementsByTagName("input")[0].value

  fetch(`/api/handleUrl?text=${url}`)
    .then(async res => {
      let ingredients = await res.text();
      document.getElementById("ingredients").innerHTML += ingredients;
      fetch(`http://localhost:3000/addRecipe?ingredients=${ingredients}`);
    } );
  
}