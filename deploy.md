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
