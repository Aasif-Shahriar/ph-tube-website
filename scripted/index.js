function loadCategories(){
    //fetching data from the api
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))//Sending data to this function
}

function loadVideos(){
    //fetching data from the api
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res)=> res.json())
        .then((data) => displayVideo(data.videos))//Sending data to this function
}


// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideo = (videos) => {
   const videoContainer = document.getElementById('video-container');
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
                <p class="text-sm text-gray-500 flex gap-1">${video.authors[0].profile_name} <img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>

                <p class="text-sm text-gray-500">${video.others.views} Views</p>
            </div>
        </div>
    </div>
    `;
    videoContainer.appendChild(videoCard)
   });
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

loadCategories();
loadVideos(); 