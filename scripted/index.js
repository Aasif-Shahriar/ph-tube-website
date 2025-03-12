function loadCategories(){
    //fetching data from the api
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))//Sending data to this function
}


// {
//     "category_id": "1001",
//     "category": "Music"
// }

//Receiving data to this function
function displayCategory(categories){
    // getting the category container
    const categoryContainer = document.getElementById("category-container");

    //looping through the categories
    for(let cat of categories){
        //creating a div
       const div = document.createElement("div");
       //dynamically adding the category to the div content
       div.innerHTML = `
         <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
       `;
       //appending the div to the category container
       categoryContainer.appendChild(div);
    };

    
}


loadCategories()