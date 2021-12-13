<template>
	<div class="homepage">
		<the-header
			@changeCurrency="changeCurrencyHandler"
			:isUSD="isUSD"
			:isBDT="isBDT"
		></the-header>
		<search-box></search-box>
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import SearchBox from '../components/SearchBox.vue';
import headerMixins from '../mixins/headerMixins.js';

export default {
	name: 'Homepage',
	components: {
		TheHeader,
		SearchBox,
	},
	mixins: [headerMixins],
};
</script>

<style>
.homepage {
	background-image: url(https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1600/v1584631386/hw/homepage/hero_images/beach_yoga_desktop.jpg);
	background-position: bottom;
	background-repeat: no-repeat;
	width: 100vw;
	min-height: 100vh;
	background-size: cover;
	filter: grayscale(10%);
	box-shadow: inset 0 0 150px 2px #282a2d;
}
</style>
