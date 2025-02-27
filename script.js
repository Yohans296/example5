// Fungsi untuk mendapatkan lokasi pengguna
function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            document.getElementById("info").innerHTML += `<br><b>Lokasi:</b> ${lat}, ${lon}`;
        }, error => {
            document.getElementById("info").innerHTML += `<br><b>Lokasi:</b> Gagal mendapatkan lokasi (${error.message})`;
        });
    } else {
        document.getElementById("info").innerHTML += "<br><b>Lokasi:</b> Tidak didukung di perangkat ini.";
    }
}

// Panggil fungsi saat halaman dimuat
window.onload = function () {
    getDeviceInfo();
    getLocation();
};
