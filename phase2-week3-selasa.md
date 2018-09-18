# Vue Component & CLI

webpack - bisa dikonfigurasi sesuai keinginan
babel - kode ES 2015 otomatis dikonversi ke ES 2016
babel - bisa membaca node_modules
es lint - validasi kode javascript

vue create [directory]
vue create .

select manually select feature
* Linter / Formatter
* Router
* Babel

centang dengan spasi

* History mode for router ? YES
* Formatter config ? Standart Code
* Additional lint features ? Lint on save
* placing config for Babel. EsLint ? In dedicated config files
* Save to feature Project ? No

Taruh file atau script diatas <!-- built files will be auto injected -->

START FLOW : App.vue -> 

npm run serve (development)
npm run build (production)

router.js -> define route dan component apa yang ditampilkan
router view untuk menampilkan hasil component nya

/src/components - module kecil
/src/views - menampung komponen kecil hingga utuh , dipakai di Router.js

scafold
```
<template>
  h1: Ini halaman
</template>

export default {
  name: 'heroes'
}
```

```
//router.js
Import Heros from './vue/blablab'

component: () => import './asdasdasdasd'
async component

/components/listHeroes

export default {
  name: 'list-heroes
}
```

didalam ini haama heroes
```
import listHeroes form '@/components/listher'

@ -> folder src

(hero, index) in heroes

// components/ListHeroes.vue
import axios from 'axios'
export default {
  data: function() {
    return {

    }
  },
  created() {

  }
}
// ------------------------------------------
```

```
// views/Heroes.vue
<template>
  <ListHeroes></ListHeroes>
  <router-view></router-view> <!-- children view -->
</template>
import ListHeroes from '@/components/Listheroes.vue
export default {
  name: 'heroes',
  components: {
    ListHeroes
  }
}
```
<style scoped> style khusus component ini

</style>
// -------------------------------------

.eslinetrc.js --------------> Ganti konfigurasi

rm -rf .git
```
{
  path: '/heroes',
  name: 'heroes',
  component: Heroes,
  children: [
    { path: 'profile',
      component: () => import('./views/profile.vue) ,
      children: [
        {
          path: ':id',
          name: 'detail',
          props: true,
          component: () => import('./views/Detail.vue)
        }
      ]
    }
  ]
}
```
<router-link :to="{ name: 'detail', params: { userid: `${hero.id}` } }"> <!-- dynamic route -->

export default {
  name: 'detail',
  props: ['userid']
}

component didalam path route akan menreferensi ke <router-view>

// cara ngirim lebih dari 1 props

