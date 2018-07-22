<template>
  <div id="app">
    <div class="cameraWindow" id="camera-window"></div>
    
    <div style="margin-top: 30px">
		  <input type=button value="Take Snapshot" @click="take_snapshot()">
	  </div>
		
    <div id="results"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.initWebcam()
    },
    initWebcam () {
      console.log(this);
      this.$Webcam.set({
        width: 300,
        height: 300,
        image_format: 'jpeg',
        jpeg_quality: 90
      });
      this.$Webcam.attach( '#camera-window' );
    },
    take_snapshot () {
      
			this.$Webcam.snap( function(data_uri) {
				document.getElementById('results').innerHTML = 
					'<h2>Here is your image:</h2>' + 
					'<img src="'+data_uri+'"/>';
			} );
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

.cameraWindow,
#results {
  margin: auto;
}
</style>
