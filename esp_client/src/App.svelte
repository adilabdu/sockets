<script>

  let flip = false

  function switchFlip() {
    flip = !flip
    console.log(flip)
  }

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