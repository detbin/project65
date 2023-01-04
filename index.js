
function initMap() {
    const posicion = {
      center: { lat: -33.860664, lng: 151.208138 },
      zoom: 4
    }
    const mapDiv = document.getElementById('map')
    const map = new google.maps.Map(mapDiv, posicion)

    const markerOptions = {
      map: map,
      position: posicion.center,
    }
    const marker = new google.maps.Marker(markerOptions);
    geoposiciona()
  
}
function geoposiciona(){
 if (navigator.geolocation){
    const geopos=navigator.geolocation
    const option={timeout:1000000}
    const watchpos=geopos.watchPosition(centramapa,onerror,option)
  }else{
    console.log("este navegador no esta actualizado")
  }
}
function centramapa(posicion){
  const newposition={
    lat: posicion.coords.latitude,
    long: posicion.coords.longitude,
    }
  console.log(newposition.lat)
  console.log(newposition.long)
  reubica(newposition)
}
function onerror(error){
  console.log("se esta gestionando el error")
  console.error(error)
}
function reubica(lugar){
  var ubicacion=lugar
  const markerOptions = {
    map: map,
    position: ubicacion.center,
  }
  const marker = new google.maps.Marker(markerOptions);
}

