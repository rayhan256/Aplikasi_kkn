let bodyMapMahasiswa = document.getElementById('map_mahasiswa')

function initMapMahasiswa() {
    const map = L.map('mapMahasiswa').setView([51.505, -0.09], 13);


    // var alamat = cariMhs.value;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

}

// function initialize() {
//     var alamat = "PGC 1, Cililitan, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, Indonesia";
//     var geocoder = new google.maps.Geocoder;
//     geocoder.geocode({
//         'address': alamat
//     }, function (results, status) {
//         if (status === 'OK') {
//             if (results[0]) {
//                 geo = results[0].geometry.location;
//                 rs = geo.lat() + ", " + geo.lng();
//             } else {
//                 rs = 'No results found';
//             }
//         } else {
//             rs = 'Geocoder failed due to: ' + status;
//         }
//         alert(rs);
//     });
// }

bodyMapMahasiswa.onload = initMapMahasiswa()