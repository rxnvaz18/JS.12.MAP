// Map requirements:
// When opening the page, the browser must pull the user's location data.
// When viewing the page, a map must be rendered using the Leaflet API.
// When viewing the map, the user's coordinates must be rendered with a marker titled "You Are Here".
// When viewing the page, a dropdown must be present above the map that lists the business types retrieved from the Foursquare API.
// When a business type is selected, 5 businesses of that type that are closest to the user must be rendered with markers on the map.


// creating the map object
const RVmap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},

// STARTING LEAFLET MAP

buildMap() {
    this.map = L.map('map', {
        center: this.coordinates,
        zoom: 15,
    })
    // add openstreetmap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 13,
    
}).addTo(this.map);

// GEOLOCATION MARKER

    const marker = L.marker(this.coordinates)
    marker
        .addTo(this.map)
        .bindPopup('<p1><b>You Are Here</b><br></p1>')
        .openPopup()
    },

    // Adding business markers
    addMarkers() {
        for(let i = 0; i < this.businesses.length; i++) {
            this.markers = L.marker([
                this.businesses[i].lat,
                this.businesses[i].long,
            ])
                .bindPopup('<p1>${this.businesses[i].name}</p1>')
                .addTo(this.map)
        }
    },
}

// Getting coordinates via geolocation api
async function getCoords() {
    const pos = await new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

// function to run right as the window loads to actually see the map on the page
window.onload = async () => {
    const coords = await getCoords()
    RVmap.coordinates = coords
    RVmap.buildMap(coords)
}
// Brandon's API Key fsq3osyCKeDlYRC80IDUvUy2FD4u81xCteLuvnmOeYuI9/c=