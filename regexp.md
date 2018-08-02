# Regular Expressions (Regex / RegExp)

## .match([regex])

Example:
```
let text = 'far way and got so far from now';
console.log(text.match(/far/g));
```

Output:
```
['far', 'far', 'far']
```

Regex / RegExp diawali dengan tanda `/` dan ditutup dengan tanda `/`

`g` pada `/far/g` artinya adalah kita ingin menggunakan Regex secara global, global disini maksudnya bukan secara scope tetapi semua pada string,variable, atau array yang kita gunakan Regex

Pada kasus ini kita ingin menggunakan Regex secara global pada variable `text`

Jika kita menghilangkan tanda `g` maka output yang dihasilkan akan berbeda,
ini output nya:

```
[ 'far', index: 0, input: 'far away, got so far' ]
```

*Perlu diingat* jika regex tidak ditemukan maka output yang akan dihasilkan
yaitu `null` bukan array kosong.

## Regex object

Selain menulis regex diapit oleh 2 slash `/regex/`, kita juga dapat membuat
regex dengan membuat Regex object

Example:
```
let pattern = new RegExp('[a-z]gi');
```
