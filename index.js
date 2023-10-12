// Map requirements:
// When opening the page, the browser must pull the user's location data.
// When viewing the page, a map must be rendered using the Leaflet API.
// When viewing the map, the user's coordinates must be rendered with a marker titled "You Are Here".
// When viewing the page, a dropdown must be present above the map that lists the business types retrieved from the Foursquare API.
// When a business type is selected, 5 businesses of that type that are closest to the user must be rendered with markers on the map.

import "./styles.css";
import * as L from "Leaflet";
let map = L.map("map").setView([33.119205,-117.086418], 13);
