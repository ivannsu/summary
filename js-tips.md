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
