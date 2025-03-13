function removeClass () {
    const activeBtns = document.getElementsByClassName("active")
    for(let btn of activeBtns){
        btn.classList.remove("active");
    }
}

function loadCategories(){
    //fetching data from the api
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))//Sending data to this function
}

function loadVideos(searchInput = ""){
    //fetching data from the api
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchInput}`)
        .then((res)=> res.json())
        .then((data) => {
            document.getElementById("btn-all").classList.add("active")
            displayVideo(data.videos)
        })//Sending data to this function
}

const loadCategoryVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeClass();
        const clickedBtn = document.getElementById(`btn-${id}`);
        clickedBtn.classList.add("active");
        displayVideo(data.category);
    })
}

const loadVideoDetails = (videoID) => {
    console.log(videoID)
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.video))
}

const displayDetails = (video) => {
    console.log(video)
    document.getElementById('video-details').showModal();
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
       <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  </div>
</div>
    `;
}

const displayVideo = (videos) => {
   const videoContainer = document.getElementById('video-container');

   videoContainer.innerHTML = "";

   if(videos.length == 0){
    videoContainer.innerHTML = ` <div class="col-span-full text-center py-20">
        <img class="w-28 mx-auto" src="assets/Icon.png" alt="">
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
    </div>`;
    return;
   }

   videos.forEach(video => {
    const videoCard = document.createElement('div')
    videoCard.innerHTML = `
      <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[200px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 text-white bg-black px-2 rounded text-sm">3hrs 56 min ago</span>
        </figure>
        <div class="flex gap-3 py-5 px-2">
            <!-- profile -->
            <div>
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
            </div>
            <!-- intro -->
            <div>
                <h2 class="text-lg font-bold">${video.title}</h2>
                <p class="text-sm text-gray-500 flex gap-1">${video.authors[0].profile_name}
                    ${video.authors[0].verified == true ? `<img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``} 
                </p>

                <p class="text-sm text-gray-500">${video.others.views} Views</p>
            </div>
        </div>
        <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>
    </div>
    `;
    videoContainer.appendChild(videoCard)
   });
}

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
         <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
       `;
       //appending the div to the category container
       categoryContainer.appendChild(div);
    };

    
}

document.getElementById('search-input').addEventListener("keyup", (e) => {
   const input = e.target.value;
   loadVideos(input)
})
loadCategories();
