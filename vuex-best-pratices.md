Kalau misal ada process async yang mengembalikan data kemudian ingin dimasukan ke dalam STORE VUEX
lebih baik **process request http nya** didalam `actions` 

Kalau misal cuma mau ngerubah data STORE VUEX, langsung aja di dalam mutations (tanpa melalui actions)
cara langsung menggunakan mutations nya menggunakan `mapState` bawaan si VUE
