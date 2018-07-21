<template>
  <div id="app">
    <div id="num-roll" class="myroll"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      numOne: 455,
      numTwo: 400
    }
  },
  mounted () {
    this.doRoll()
  },
  methods: {
    doRoll () {
      const roll = this.$Digitalroll({
        container: '#num-roll',
        number: this.numOne
      })

      setInterval(() => {
        this.numOne += parseInt(Math.random()*100)
        roll.roll(this.numOne)
      },3000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
