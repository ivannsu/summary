React JS adalah sebuah library javascript yang konsep nya menggunakan one way data binding 
tidak seperti Vue.js (Due Data Binding)

### `this.setState()` 
method ini adalah async

### `this.setState()` 
method ini akan mengeset state secara keseluruhan untuk itu maka kita perlu menggunakan spread operator untuk mengoverwrite
property

contohnya:
```
this.state = {
  data: [1, 2, 3, 4, 5],
  message: 'hello'
}

this.setState({
  ...this.state,
  message: 'overwriting data'
})
```

### componentWillMount () && componentDidMount ()
tidak seperti Vue.js created() && mounted(), dimana kita menfetch data dari API di dalam method created () dalam hal ini
method componentWillMount(), jika didalam method ini adalah .setState() yang dijalankan maka proses nya akan menjadi
synchronus

### untuk melakukan emit di react yaitu misal
```
// Parent
greetings = () => {
  alert('Good Morning')
}

<Child greet={this.greetings} />

// Child
<button onClick={this.props.greet}></button>
```
