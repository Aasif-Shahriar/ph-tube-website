function loadCategories(){
    //Data fetch korlam
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))//ei function e data gulo ke pathiye dilam
}

//and ei function e data receive korlam and baki kaj ekhanei korbo
function displayCategory(categories){
    //get the container jekhane data gulo ke rakhbo

    //loop chalabo array of object er upor[categories]

    //new ekta element create korbo

    //new element ke tar parent er moddhe append korbo
}


loadCategories()