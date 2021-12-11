<template>
	<div class="header-container">
		<b-container>
			<b-nav
				small
				class="d-flex flex-row align-items-center justify-content-between"
			>
				<div class="logo" @click="goHome">
					<i class="fa fa-hotel"></i>
				</div>
				<b-nav-item>
					<span
						class="currency"
						:class="{ 'selected-currency': isBDT }"
						@click="changeCur('BDT')"
						>BDT</span
					>
					<span
						class="currency"
						:class="{ 'selected-currency': isUSD }"
						@click="changeCur('USD')"
						>USD</span
					>
				</b-nav-item>
			</b-nav>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
	props: {
		isBDT: Boolean,
		isUSD: Boolean,
	},
	methods: {
		goHome() {
			this.$router.push({
				name: 'home',
			});
		},
		changeCur(cur) {
			this.$emit('changeCurrency', cur);
		},
	},
};
</script>

<style>
.nav {
	margin: 0;
	padding: 0;
}

.logo {
	letter-spacing: 1px;
	color: #f25621;
	font-size: 2rem;
	font-weight: 900;
	text-align: left;
	cursor: pointer;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.currency {
	background-color: #000000b3;
	font-size: 1rem;
	font-weight: 600;
	color: #777;
	margin: 5px;
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
}

.selected-currency {
	color: #f25621;
}

.header-container {
	border-bottom: 1px solid #000;
	background-color: transparent;
}
</style>
