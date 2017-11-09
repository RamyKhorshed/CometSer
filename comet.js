const store = {comets:[], maxSize:"", minSize:"",maxDate:"",minDate:""}

class Comet {
  constructor(json) {
    this.long = json.reclong;
    this.lat = json.reclat;
    json.year ? this.year = parseInt(json.year.slice(0,4)) : this.year = 1950;
    this.name = json.name;
    this.mass = parseInt(json.mass);

    this.mass<1500000 ? store.comets.push(this) : null ;

  }
}

function sortBySize() {
  const sortedBySize = store.comets.sort(function (a,b){
      return a.mass - b.mass
    }
  )
  store.maxSize = `${sortedBySize[sortedBySize.length-1].mass}`;
  store.minSize = `${sortedBySize[0].mass}`

  sizeSlider.setAttribute("min",`${store.minSize}`)
  sizeSlider.setAttribute("max",`${store.maxSize}`)
}

function sortByDate() {
  const sortedByDate = store.comets.sort(function (a,b){
      return a.year - b.year
    }
  )
  store.maxDate = `${sortedByDate[sortedByDate.length-1].year}`;
  store.minDate = `${sortedByDate[0].year}`

  dateSlider.setAttribute("min",`${store.minDate}`)
  dateSlider.setAttribute("max",`${store.maxDate}`)
}


function filterComets() {
  return store.comets.filter(comet => (comet.mass/1000 > sizeValue) && (comet.year > dateValue))
}
