# JavaScript Tips

## Array in Conditional
```
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

if(arr1 === arr2) { return true; } else {return false; }
```

Hasil yang diharapkan yaitu `true` karena array yang dibandingkan itu sama. Tetapi output yang didapatkan mala `false`.

Kesimpulan :

`array` tidak bisa seluruhnya dibandingkan dengan `array` lain. Tetapi jika dibandingkan isi `array` secara satu-persatu, maka
bisa. 

Contoh:

```
for(let i = 0; i < arr1.length; i++) {
  if(arr1[i] !== arr2[i]) {
    return false;
   }
   
   return true;
}
```

## Array hack
`new Array(param)` Apabila param diisi dengan nilai 3, maka akan dihasilkan output sebagai berikut
`[undefined, undefined, undefined]`.

Apabila kita menggunakan fitur `array.join(param)`, dan param diisi dengan nilai 'a' maka output yang dihasilkan adalah
`aa`.

kode keseluruhan
```
console.log(new Array(3).join('a'))
```

itu karena nilai undefined adalah kosong('') dan jika menggunakan fitur join maka yang terjadi adalah sebagai berikut

`undefined + 'a' + undefined + 'a' + undefined`, karena undefined adalah '' maka output yang dihasilkan adalah 'aa'

jika kita mengganti nilai undefined menjadi '' maka sebagai berikut
```
'' + 'a' + '' + 'a' + ''
```
