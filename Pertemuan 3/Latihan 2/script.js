// --- Fungsi untuk Konversi Nilai ---
// Fungsi ini mengambil angka dan mengembalikan huruf
function konversiNilaiKeHuruf(nilai) {
    // Cek jika input tidak valid (bukan angka, atau di luar rentang 0-100)
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        return "Tidak Valid";
    }

    // Logika grading
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}


// --- Event Listener untuk Tombol ---

// 1. Pilih elemen-elemen yang kita butuhkan
const inputNamaDepan = document.getElementById('nama-depan');
const inputNamaBelakang = document.getElementById('nama-belakang');
const inputNilaiAngka = document.getElementById('nilai-angka');
const tombolProses = document.getElementById('tombol-proses');

// 2. Tambahkan 'event listener' (pendengar aksi) pada tombol
tombolProses.addEventListener('click', function() {
    
    // 3. Ambil nilai (value) dari semua input
    const namaDepan = inputNamaDepan.value;
    const namaBelakang = inputNamaBelakang.value;
    
    // Gunakan parseFloat() untuk mengubah teks "100" menjadi angka 100
    const nilaiAngka = parseFloat(inputNilaiAngka.value); 
    
    // 4. Proses data
    const namaLengkap = `${namaDepan} ${namaBelakang}`;
    const nilaiHuruf = konversiNilaiKeHuruf(nilaiAngka);
    
    // 5. Tampilkan hasilnya di console
    //    Kita tambahkan garis pemisah untuk log yang lebih rapi
    console.log("--- Hasil Proses Data ---");
    console.log(`Nama Lengkap : ${namaLengkap}`);
    
    // Menampilkan nilai angka asli, atau "Kosong" jika tidak diisi
    console.log(`Nilai Angka : ${isNaN(nilaiAngka) ? "Kosong" : nilaiAngka}`);
    console.log(`Nilai Huruf : ${nilaiHuruf}`);
    console.log("---------------------------");
});