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