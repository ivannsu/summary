# JavaScript DOM (Hacktiv8 Curriculum Reference)
Dengan DOM kita dapat mengakses elemen-elemen HTML dan juga BOM (Browser Object Model)
menggunakan JavaScript.

**Gambar Hirarki DOM**

![Gambar Hirarki DOM](https://github.com/ivannsu/summary/blob/master/assets/images/html-dom.png)

## Cara Mengakses elemen HTML dengan DOM

Contoh: 

**js-simple-dom.html**
```
<!DOCTYPE html>
<html>
<head>
  <title>Contoh Halaman</title>
</head>
<body>

  <div id="page-title">Sample Page Title</div>
  <h1>Test Sample Heading</h1>
  <div class="page-box">Page Box 1</div>
  <div class="page-box">Page Box 2</div>
  <div class="page-box">Page Box 3</div>
  <script src="js-simple-dom-script.js"></script>

</body>
</html>
```

**js-simple-dom-script.js**
```
let pageTitleElement = document.getElementById("page-title");
// Output: <div id="page-title">...</div>

let pageBoxElements = document.getElementsByClassName("page-box");
// Output: [<div class="page-box">Page Box 1</div> ...]

let pageHeadings = document.getElementsByTagName("h1");
// Output: [<h1></h1> ...]
```

`document.getElementById()` 
kita dapat mengakses elemen HTML dengan attribute id

`document.getElementsByClassName()` 
kita dapat mengakses elemen HTML
dengan attribute class, hasil pengakses dalam bentuk array

`document.getElementsByTagName()`
kita dapat mengakses elemen HTML dengan tag HTML, hasil pengaksesan dalam
bentuk array

**Catatan**

Meskipun elemen yang diakses hanya satu tetapi tetap dalam output array

## Mengakses isi elemen HTML
```
console.log(pageTitleElement.innerHTML);
// Output: Sample Page Title

console.log(pageBoxElements.innerHTML);
// Output: undefined
// Karena dalam bentuk array

console.log(pageBoxElements[0].innerHTML);
// Output: Page Box 1
```

**Supaya mudah kita juga bisa mendapatkan isi dan elemen `pageBoxElements` dengan cara looping**

```
for(let i = 0; i < pageBoxElements.length; i++) {
  console.log(pageBoxElements[i]);
}

/* 
Output:

Page Box 1
Page Box 2
Page Box 3
*/
```

## Memanipulasi isi elemen HTML
Cara manipulasi hampir sama dengan mengakses, tetapi menambahkan operator assignment `=`

**Manipulasi isi `<div id="page-title">`**
```
pageTitleElement.innerHTML = 'Judul baru nih!';

console.log(pageTitleElement); // <div id="page-title">Judul baru nih!</div>
console.log(pageTitleElement.innerHTML); // Judul baru nih!
```

Kita juga dapat mengisi nya dengan elemen HTML.
```
pageTitleElement.innerHTML = '<h2>Ubah lagi judul nya!</h2>';

console.log(pageTitleElement); // <div id="page-title"><h2>Ubah lagi judul nya!</h2></div>
console.log(pageTitleElement.innerHTML); // <h2>Ubah lagi judul nya!</h2>
```