# Deploy Website

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
