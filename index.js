document.addEventListener("DOMContentLoaded", function(){
    fetch('https://data.nasa.gov/resource/y77d-th95.json').then(res=>res.json()).then(json => createComet(json)).then(comets => sortAll())
  }
)

function createComet(json) {
  json.forEach(function(comet){
    let newComet = new Comet(comet)
    console.log(newComet)
  }
  )
}

function sortAll() {
  sortBySize();
  sortByDate();
}
