//*YALLASCRIPTING*//

var mymap = L.map('map').setView([-75.137, 39.971], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/ranaransom/cjhgetl7n4dy82smjwjbdhhiq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFuYXJhbnNvbSIsImEiOiJjamduejhiZGQwa2lrMzNyMXNsbmdrM3B1In0.3YYL35-tBzpDjgxiG76-LQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

