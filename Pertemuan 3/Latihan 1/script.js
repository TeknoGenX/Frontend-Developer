// 1. Pilih elemen-elemen yang kita butuhkan dari HTML
const inputNamaDepan = document.getElementById('nama-depan');
const inputNamaBelakang = document.getElementById('nama-belakang');
const tombolGabung = document.getElementById('tombol-gabung');

// 2. Tambahkan 'event listener' (pendengar aksi) pada tombol
//    Aksi yang kita dengar adalah 'click'
tombolGabung.addEventListener('click', function() {
    
    // 3. Saat tombol di-klik, ambil nilai (value) dari dalam kotak input
    const namaDepan = inputNamaDepan.value;
    const namaBelakang = inputNamaBelakang.value;
    
    // 4. Gabungkan kedua nilai tersebut
    const namaLengkap = `${namaDepan} ${namaBelakang}`;
    
    // 5. Tampilkan hasilnya di console
    //    Ini adalah log yang Anda minta
    console.log(`Nama Lengkap : ${namaLengkap}`);
    
});