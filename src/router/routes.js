import Homepage from '../pages/Homepage.vue';
import HotelDetails from '../pages/HotelDetails.vue';
import CityHotels from '../pages/CityHotel.vue';
import ReservationDetail from '../pages/ReservationDetail.vue';

export default [
	{
		path: '/',
		name: 'home',
		component: Homepage,
	},
	{
		path: '/:city',
		name: 'city-hotels',
		component: CityHotels,
		props: true,
	},
	{
		path: '/:city/hotel/:hotelId',
		name: 'hotel-details',
		component: HotelDetails,
		props: true,
	},
	{
		path: '/:city/hotel/:hotelId/reservation/',
		name: 'reservation-detail',
		component: ReservationDetail,
	},
];
