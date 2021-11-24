<script>

  import { io } from 'socket.io-client';
	const socket = io("http://localhost:3000")

  socket.on("connect", () => {
    console.log('ESP module connection successful!')
  })

  let flip = false

  socket.on('switch_bulb', (arg) => {
    console.log(arg)
    flip = arg
  })

</script>

<main>

    <div class="wrapper">
        
		  <img id="bulb-on" class={ flip ? 'turn-on' : 'turn-off' } src="images/bulb-on.png" alt="Lights On">

    </div>

</main>

<style>

  .turn-on {
    visibility: visible;
  }

  .turn-off {
    visibility: hidden;
  }

</style>