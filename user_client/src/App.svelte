<script>

	import { io } from 'socket.io-client';
	const socket = io("http://localhost:3000")

	let flip = false

	function switchFlip() {
		flip = !flip
		console.log(flip)
	}

</script>

<main>

	<p class="flex flex-row items-center justify-center mt-32 text-4xl pt-4 uppercase bold-font">
		User Remote
		<span class="capitalize"> &nbsp;Application</span>
	</p>
	<p class="flex flex-row items-center justify-center text-2xl pt-2 pb-4 light-font">
		Mock Client-side Interface to Control
		<span class="font"> &nbsp;ESP-8266 </span>
	</p>

	<div class="my-8 flex flex-row items-center justify-center w-full">
		<button on:click={ switchFlip } class="w-40 flex flex-row items-center justify-between text-2xl p-4 rounded-lg { flip ? 'glow dark-mode bg-white text-black' : 'light-mode bg-black text-white' }">
			<box-icon class={ flip ? 'bulb-white' : 'bulb-black' } name='bulb' type='solid' color={ flip ? '#000' : '#fff' } ></box-icon>
			Switch
		</button>
	</div>

</main>

<style lang="postcss">

	/*:global {*/
	/*	body {*/
	/*		background-color: pink;*/
	/*	}*/
	/*}*/

	.bulb-black {
		background-color: black;
	}

	.bulb-white {
		background-color: white;
	}

</style>