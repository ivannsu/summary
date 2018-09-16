# Deploy Website

Hal-hal yang perlu diperhatikan saat kita mendeploy website

**SERVER**:

* Set PORT untuk PRODUCTION (best pratice menggunakan .ENV)
* Set connection mongoose ke mLAB
* file .env
* package.json diisi dengan script start
  ```
  scripts: {
    start: "node app.js"
  }
  ```
  
**CLIENT**

* Membuat variable `baseurl` untuk menampung link koneksi ke API kita
* Menggunakan assets yang sebisa mungkin sudah berbasis CDN, untuk gambar sekalipun

## Deploy Server ke Heroku
Heroku tidak dapat digunakan untuk mendeploy web static (html, css)

* Buat account heroku
* Masuk ke bagian Documentation https://devcenter.heroku.com/
* Pilih Node.JS
* Pilih tombol Get Started https://devcenter.heroku.com/articles/getting-started-with-nodejs
* Ikuti langkah-langkah nya sampai bagian Deploy to the app
* Menjalankan node js, kita diharuskan untuk menggunakan NPM
* buka package.json, dibagian script, tambah key start, contoh:
```
scripts: {
  start: "node app.js"
}
```
* heroku otomatis akan menjalan perintah `npm start` saat kita mendeploy
* Yang perlu diperhatikan adalah PORT yang digunakan node js, heroku otomatis mempunya .env file dengan nama PORT jadi
kita dapat menggunakan nya langsung seperti ini
```
// Jika ada .env dengan name PORT gunakan jika tidak set default: 3000
app.listen(process.env.PORT || '3000');
```

* Untuk menambahkan env kita sendiri, masuk ke dashboard heroku pilih name nya 
(didapat saat kita menggunakan perintah `heroku create`)
* pilih `settings` kemudian tekan tombol `reveal configs` masukan sesuai dengan key dan value env local kita

## Deploy Client menggunakan Firebase
* Buka website firebase https://firebase.google.com/ login dengan akun google, kemudian piih tombol get started
* Buat project baru
* install firebase command line tool
  ```
  npm install -g firebase-tools
  ```
* login ke firebase dengan akun gmail
  ```
  firebase login
  ```
* deploy dengan command line berikut
  ```
  firebase init
  // Pilih option dengan cara select mengguakana arrow down atau arrow up, kemudian tekan space untuk menyelect opsi hosting
  // kemudian baru enter
  
  firebase deploy
  . untuk non allow
  kemudian no sampai web tidak ada options yang ditawarkan
  ```

## Menggunakan mLab untuk database online mongoDB
* Masuk ke website nya mLab 
* Buat account mLab
* dibagian MongoDB Deployments buat project baru dengan type sandBox (free)
* kemudian dibagian users buat user baru, nanti nya user dan password nya akan dipakai untuk dikoneksikan ke mongoose
  dengan format sebagai berikut 
  `mongodb://<dbuser>:<dbpassword>@ds153552.mlab.com:53552/[isi nama database yang ingin kamu buat disini]`
* link mongodb nya dapat dilihat dibagian atas

## Deploy server dan client menggunakan fasilitas Google Cloud Platform
* masuk ke website nya cloud.google.com
* login dengan akun gmail
* kemudian pilih try for free, masa trial nya adalah 12 bulan dan langsung mendapat biling senilai $300, nantinya
billing ini akan kita gunakan untuk menyewa server dll
* untuk try for free kita diharuskan untuk memiliki kartu kredit atau visa
* kemudian setela teregister, masuk ke bagian console

* buat project baru
* di menu sidebar pilih `Compute Engine`/`VM Instance`
* creat instance
* berikan nama instance biasanya sesuai dengan nama project saat ini, contoh: e-commerce-server
* region singapore (terdekat dengan negara kita)
* machine type : micro (paling murah)
* Boot disk pilih os nya dan storage nya contoh : ubuntu 16.04 10 GB Storage
* Dibagian advanced setting, pilih menu network, isi network tags sesuai nama project kita saat ini, ini akan digunakan untuk
  mengganti port default node js (3000) ke port 80, sehingga kita tidak perlu menambahkan port saat kita mengakses URL
* firewall, allow https dan http
* kemudian create 
* setelah tercreate tekan tombol SSH untuk masuk ke terminal virtual server kita
* install node js berserta npm sesuai os virtual host kita (dalam kasus ini ubuntu 16)
* clone repo kita yang ingin di deploy, install package nya dengan perintah npm install
* install pm2 secara global untuk menjalankan node js meskipun server di close
* kita dapat langsung mensetting port yang akan digunakan ke port 80 atau membuat port baru (misal mendaftarkan port 3000)
  - **PORT: 80** (deprecated)
  dengan menambakan file .env kemudian tambahkan key PORT
* gunakan sudo su untuk masuk ke mode admin, kemudian 
  - export PORT=80 (set default port ke 80)
  - echo $PORT (jika hasil nya adalah 80 berarti ok)
* kemudian buat domain baru
* dibagian DNS Management, input format biasanya adalah <name> <type> <target>
  <name> biasanya adalah sub domain dari main domain kita
  <type> kareana target kita adalah IP dari VM Instance kita maka pilihan nya adalah A (untuk HOST)
  <target> masukan IP VM instance
  contoh server A 192.168.0.1 maka jika diakses menjadi server.domainkita.com
* CNAME akan kita gunnakan untuk menghubunkan nya ke Cloud Storage nya Google
* ada dua CNAME yang akan kita pakai, satu untuk menghubunkan ke CLIENT (deploy client) satu untuk verifikasi domain kita
    
* Untuk deploy client, silakan ke menu sidebar - Storage
* Buat bucket baru dengan menekan tombol create bucket
* dibagian name isi dengan link client yang mau kita akses, contoh jika saya mau client saya nanti diisi
  dengan client.domainkita.com maka isi dengan value tersebut,
  **Note:** subdomain ini di tambahkan dengan CNAME
* isi CNAME dengan format berikut <host> <point to>
  <host> dalam kasus ini adalah `client` (diambil dari client.domainkita.com) kemudian <point to> diisi dengan    
  `c.storage.googleapis.com` <-- ini adalah bawaan dari google
                                                                                                                             * kembali ke menu bucket tadi, kita diharuskan untuk memverifikasi domain kita dengan cara 
                                                                                                                             * Jika kita menekan tombol create sekarang, maka akan muncul link berwarna merah disekitar tombol create, ini dikarenakan 
                                 kita belum memverifikasi domain kita, klik link tersebut, kemudian akan diarahkan ke 
                                 form untuk add property digunakan untuk mengisi nama main domain kita, dalam kasus ini yaitu domainkita.com
                                 pilih pilihan alternate-methods -> verifikasi dengan pilihan by Hosting Provider -> select other, kemudian dibagian bawah, pilih CNAME Record , kemudian cari pilihan verifikasi dengan CNAME, nah copy host dan point to nya , kemudian masukan ke dalam DNS management kita lagi dibagian CNAME

* sekarang setelah requeirement verifikasi sudah dilakukan, kembali lagi ke bucket, dan create, kemudian continue
* upload file website static kita
* setelah terupload silahkan mengubah permisiion file public dengan menekan options, kemudian pilih edit permissions, kemudian add item, dibagian entitiy isi dengan `user`, name isi dengan `allUsers` , access pilih `READER`
                                                                                                                             
