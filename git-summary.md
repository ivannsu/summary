# Cheatsheet Penggunaan GIT & GITHUB

## Daftar Syntax
- `git clone [link]`
- `git add [nama_file / nama_folder]`
- `git status`
- `git commit -m "[judul commit]"`
- `git push origin [nama_branch]`
- `git pull origin [nama_branch]`
- `git log`
- `git checkout [[HEAD] / id commit]`
- `git diff [nama_file]`

### `git clone [link]`
Example: `git clone https://github.com/ivannsu/summary/new/master`

Maka repository tersebut akan otomatis terdownload di directory kita saat ini, misalnya kita di dalam directory Documents, maka
akan muncul sebuah directory baru dengan nama sesuai repository kita saat ini.

Kelebihan penggunaan clone adalah saat menggunakan perintah git push dan git pull

### `add [nama_file / nama_folder]`
Apabila folder tidak memiliki isi, maka git akan mengabaikannya. Sebaliknya jika folder memiliki isi maka seluruh isi didalam
folder akan ditambahkan.

Parameter tidak hanya `nama_file` dan `nama_folder` tetapi juga dapat dengan tanda `.`(dot).
fungsi `.`(dot) yaitu menambahkan seluruh file atau directory

### `git status`
menampilkan perubahan yang belum di `add` dan `commit` atau yang sudah `dimodifikasi` isi nya tetapi belum di `add` 
atau `commit`

### `git push origin [branch]`
Setelah kita menggunakan `git clone`, maka git menyimpan link repository kita sehingga kita dapat mengupload file
yang sudah di commit ke dalam link sesuai yang kita pergunakan saat `git clone`.

Contoh nya jika kita sebelumnya mengklonning dari GITHUB, maka saat kita push hasil commitan kita, perubahan tersebut
akan masuk ke repository kita yang berada di GITHUB.

Branch yang biasanya dipakai yaitu `master`, tetapi jika dalam fase development biasanya branch yang kita pakai yaitu
branch `development`

### `git pull origin`
Hampir sama dengan git clone tetapi bedanya kita seperti melakukan klonning lagi, tetapi untuk mengupdate isi repository kita
supaya tetap up-to-date dengan repository di GITHUB kita.

### `git log`
Untuk menampilan `commit` apa saja yang sudah kita lakukan, sehingga kita dapat menggunakan fitur `time machine`. Jadi
jika ada kesalahan atau ingin kembali ke perubahan sebelumnya kita dapat menggunakan perintah `git checkout [id]`.

```
commit e5b1e809c69b80aa5da4eade0dd37f1be596f7b3 (HEAD -> master)
Author: ivan <ivansu.webmail@gmail.com>
Date:   2018

    Rename file

commit eb672902b455aa77da44cd87f05b70b570eee23e (origin/master, origin/HEAD)
Author: ivan <ivansu.webmail@gmail.com>
Date:   2018

    Update Materi
```

Nah `id` didapatkan dari `git log`.

`id` tersebut misalnya adalah `eb672902b455aa77da44cd87f05b70b570eee23e`

### git checkout [id]
`id` yang dimasuk kan tidak perlu semua `id` tetapi hanya 6 awalan nya saja maka git akan otomatis mereferensi ke `id` yang
sama.

Tetapi untuk beberapa kasus, 6 `id` awalannya sama maka kita perlu menambahkan 1 karakter `id` berikut nya sampai git
mereferensi ke `id` yang sama

### `git diff [namafile]`
Biasanya kita lupa file apa saja yang belum di add atau commit, dan menggunakan perintah `git status`, untuk melihat perubahan
tersebut. Nah misalkan kita sudah tau file apa yang belum di commit tetapi file tersebut sudah dimodifikasi isinya. 

Untuk mengetahui bagian mana yang dimodifikasi maka kita bisa menggunakan perintah `git diff [namafile]`
- tanda `+` berarti penambahan
- tanda `-` berarti penghapusan













