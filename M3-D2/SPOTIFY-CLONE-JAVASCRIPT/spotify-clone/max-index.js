let albums = []
let error = false;


function searchDeezer(query){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem") + query, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7e92d7c00bmsh1ca718b071bcb07p1ae45cjsna1afbc4d108d",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    }
.then ((response) => response.json)
.then(data => {
    console.log("resolved")
if (data.data){
    const obj = {title:query, albums:data.data}
    albums.push(obj); 
}
    else{
        error = true
    }

})
.catch(err => {
    console.log("rejected")
	console.error(err);
    error= true;
}); 
}

function singleAlbum(album){
    return `<div class="card p-2 bg-customdark">
    <img src="${album.cover}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Artist Name</h5>
      <a href= "${album.title}"
    </div>
  </div>`
}

function albumsRow(albums){
    
}


window.onLoad = function(){
   // searchDeezer("Pink Floyd")
   // searchDeezer("Eric Clapton")
   // searchDeezer("Rage against the machine")
    const renderLink = documet.querySelector("#renderList")
    renderLink.addEventListener ('click', function(){
    alert("render is clicked");
});
};