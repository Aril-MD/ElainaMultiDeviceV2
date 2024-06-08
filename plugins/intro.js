import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `MEMBER BARU WAJIB INTRO

Nama lengkap: 
Nama panggilan:
Hobi: 
Umur: 
Gender:
Kelas: 
Tinggi badan: 
Berat badan : 
Agama:  
Golongan darah: 
Status: 
Nama pacar: 
Jumlah mantan: 
Nama mantan: 
Nama bapak :
Nama ibu : 
Nama kakak
Kakak online:
Kakak kandung/tiri:
Jumlah kakak:
Nama adek
Adek online:
Adek kandung/tiri:
Jumlah adek:
Nama kakek
Kakek dari ayah :
Kakek dari ibu :
Nama nenek
Nenek dari ayah :
Nenek dari ibu :
Nama bibi
Bibi dari ayah :
Bibi dari ibu :
Nama paman
Paman dari ayah :
Paman dari ibu :
KTP: 
SIM: 
STNK: 
BPKB:
KK: 
Alamat rumah:
RT: 
RW:
KELURAHAN: 
KECAMATAN: 
KABUPATEN: 
KOTA: 
PROVINSI:
PLANET:
GALAXY:
UNIVERSE:
LANGIT:
DARATAN: 
LAUTAN: 
KEPULAUAN:
SAMUDRA: 
UKURAN SEPATU:
UKURAN BAJU: 
UKURAN CELANA: 
LEBAR PINGGANG: 
PANJANG TANGAN:
PANJANG KAKI:
MAKANAN FAVORIT:
MINUMAN FAVORIT:
FILM FAVORIT:
SINETRON FAVORIT:
GAME FAVORIT:
ANIME FAVORIT:
MANGA FAVORIT:
MANHUA FAVORIT:
MANHWA FAVORIT:
CHANNEL YOUTUBE:
INSTAGRAM:
TWITTER: 
FACEBOOK:
MUSIC FAVORIT:
SIFAT:
SIKAP: 
ZODIAK:
TANGGAL LAHIR:
MERK HP:
MERK MOTOR:
MERK MOBIL:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
Ukuran daleman:
Ukuran atasan : 
Diameter kepala :

Statistik tubuh 
Tinggi badan
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :


Besar celana dalam:
Gambar celana dalam:
Warna sempak:
nama samaran:
Rt:
Rw:
Gang:
Jalan:
Dusun:
Kampung:
Desa:
Kecamatan:
Kode pos:
Kabupatèn:
Kota:
Provinsi:
Pulau:
Daratan:
Negara:
Benua:
Lapisan atmosfer:
Titik koordinat rumah:
Planet:
Sistem bintang:
Galaksi:
Gugus galaksi:
Universe:
Dunia:
Dimensi:
Motto hidup:
Landasan hidup:
Kata kata:
Hobi:
Kelas:
Nomor absen:
Jurusan:
Nama sekolah:
PAUD:
TK:
SD:
SMP:
SMA/SMK:
UNIVERSITAS _(opsional)_:
Alamat sekolah:
Jumlah kelas:
Jumlah ruang:
Pelajaran favorit:
Ekstrakulikuler yang diikuti:
Ekstrakulikuler favorit:
Organisasi sekolah yang diikuti:
Nama guru:
Nama kepsek:
Nama wali kelas:
Nama satpam sekolah:
Npsn:
Saldo rekening:
Cita cita:
Tipe idaman:
Sifat:
Sikap:
Zodiak:
Tipe diri:
Tinggi badan:
Berat badan:
Ukuran sepatu:
Ukuran baju:
Ukuran celana:
Lebar pinggang:
Panjang tangan:
Panjang kaki:
Lingkar kepala:
Golongan darah:
Status:
Status ayah:
Status ibu:
Status adik:
Status kakak:
Status sepupu:
Status saudara:
Status kakek:
Status nenek:
Status pacar:
Status mantan:
Status teman:
Tanggal lahir:
Tanggal lahir ayah:
Tanggal lahir ibu:
Tanggal lahir adik:
Tanggal lahir kakak:
Tanggal lahir sepupu:
Tanggal lahir saudara:
Tanggal lahir kakek:
Tanggal lahir nenek:
Tanggal lahir pacar:
Tanggal lahir mantan:
Tanggal lahir teman:
Kewarganegaraan:
Kewarganegaraan ayah:
Kewarganegaraan ibu:
Kewarganegaraan adik:
Kewarganegaraan kakak:
Kewarganegaraan sepupu:
Kewarganegaraan saudara:
Kewarganegaraan kakek:
Kewarganegaraan nenek:
Kewarganegaraan pacar:
Kewarganegaraan mantan:
Kewarganegaraan teman:
Profesi:
Profesi ayah:
Profesi ibu:
Profesi kakek:
Profesi nenek:
Profesi paman
Profesi bibi:
Jumlah anggota keluarga:
Nama kepala keluarga:
Nama ayah _(opsional)_:
Nama ibu _(opsional)_:
Nama kakak:
Nama adik:
Nama tetangga:
Nama teman:
Jumlah teman:
Jumlah mantan:
Jumlah pacar:
Nama mantan:
Nama pacar:
Jumlah saudara:
Nama sepupu:
Nama paman:
Nama bibi:
Nama kakek:
Nama nenek:
Jumlah hewan peliharaan:
Nama hewan peliharaan:
Jumlah hewan ternak:
Nama hewan ternak:
Makanan favorit:
Minuman favorit:
Warna favorit:
Buah favorit:
Tumbuhan favorit:
Game favorit:
Musik favorit:
Hewan favorit:
Orang terfavorit:
Film favorit:
Chanel YouTube favorit:
Akun TikTok favorit:
Akun TikTok:
Chanel YouTube:
Instagram:
Twitter:
Facebook:
MiChat:
Tinder:
Mobile Legends:
FreeFire:
PUBG:
Minecraft:
Merk HP:
Merk motor:
Jumlah hp:
Jumlah motor/kendaraan:
Jumlah perabotan rumah:
Jumlah barang elektronik rumah:
Jumlah tingkat rumah:
Tinggi rumah:
Panjang x lebar rumah:
Jumlah rumah:
Tanggal peresmian rumah:
Tanggal pembuatan rumah:
Total biaya yang dikeluarkan untuk membangun rumah:
Jumlah aset/bangunan yang dimilik:
Jumlah aset/bangunan yang dimiki oleh ayah/ibu/saudara:
Organisasi ranah kampung/lingkungan setempat yang diikuti:
Tanggal masuk grup:
Jam masuk grup:
Pendapat tentang grup ini:
Alasan masuk ke grup ini:
`
m.reply(krtu)
}
  handler.help = ['intro']
  handler.tags = ['main']
  handler.command = /^(intro)$/i
  
  export default handler
 