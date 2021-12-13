<template>
	<div class="search-box">
		<h1>Meet the world</h1>
		<p class="search-description">
			36,000 properties, 178 countries • Over 13 million verified guest reviews
			• 24/7 customer service
		</p>

		<b-container>
			<b-form>
				<div class="search-form">
					<b-row>
						<b-col xl="12">
							<div class="input-container">
								<b-form-input
									placeholder="Where do you want to go?"
									class="search-input city-input"
								></b-form-input>
								<i class="fas fa-search" style="color: #f25621"></i>
								<div class="search-error">
									You need to type at least 3 characters
								</div>
							</div>
						</b-col>
					</b-row>
					<b-row class="mt-3">
						<b-col md="4" sm="6" xs="6">
							<b-form-group>
								<label for="search-label" class="search-label">Check IN</label>
								<b-form-input type="date" class="search-input" />
							</b-form-group>
						</b-col>
						<b-col md="4" sm="6" xs="6">
							<b-form-group>
								<label for="search-label" class="search-label">Check OUT</label>
								<b-form-input type="date" class="search-input" />
							</b-form-group>
						</b-col>
						<b-col md="4" sm="12" xs="12">
							<b-form-group>
								<label for="search-label" class="search-label">Guests</label>
								<div class="input-container">
									<b-form-select class="search-input search-select">
									</b-form-select>
									<i class="fas fa-user-friends" style="color: #2f5621"></i>
								</div>
							</b-form-group>
						</b-col>
					</b-row>
				</div>
			</b-form>
			<b-button class="search-btn" @click="searchHotels">Let's go!</b-button>
		</b-container>
	</div>
</template>

<script>
const currentDate = new Date().getTime();
console.log(currentDate);
export default {
	name: 'SearchBox',
};
</script>

<style scoped>
h1 {
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-size: 72px;
	color: #fff;
}
.search-box {
	margin: 50px auto 0;
}
.search-description {
	color: #fff;
}
.search-form {
	padding: 8px;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.7);
	text-align: left;
}
.search-input {
	line-height: 40px;
	border-radius: 5px;
}
.city-input {
	padding-left: 50px;
}
.search-select {
	width: 100%;
	height: 55px;
	padding: 8px;
	padding-left: 50px;
}
.search-label {
	color: #fff;
	text-align: left;
	font-size: 12px;
	font-weight: 600;
}
.input-container {
	position: relative;
}
.search-btn {
	background-color: #f25621;
	border: none;
	padding: 15px 25px;
	margin-top: 30px;
	font-weight: 700;
}
.search-btn:hover {
	background-color: #ca3b0d;
	border: none;
}
.search-btn:focus {
	background-color: #ca3b0d;
	border: none;
	outline: none;
}
.fa-search {
	position: absolute;
	top: 20px;
	left: 20px;
}
.fa-user-friends {
	position: absolute;
	top: 20px;
	left: 20px;
}
.search-error {
	position: absolute;
	background-color: #fff;
	border-radius: 5px;
	bottom: -35px;
	padding: 5px;
	color: red;
	font-size: 12px;
	font-weight: 400;
}
</style>
