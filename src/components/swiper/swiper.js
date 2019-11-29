import React from "react"
import Swiper from "react-id-swiper"
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm"
import "react-id-swiper/lib/styles/css/swiper.css"
import "./swiper.css"

class SwiperSample extends React.Component {
	render() {
		const params = {
			modules: [Pagination, Navigation],
			slidesPerView: slidesperview,
			spaceBetween: 0,
			containerClass: "swiper-container pb-5",
			nested: true,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// breakpoints: {
			//   768: {
			//     slidesPerView: 3,
			//     spaceBetween: 30
			//   },
			//   640: {
			//     slidesPerView: 2,
			//     spaceBetween: 20
			//   },
			//   320: {
			//     slidesPerView: 1,
			//     spaceBetween: 10
			//   }
			// }
		}
		return (
			<div id="homeswiper">
				<Swiper {...params} className="text-center" slidesperview={1}>
					<div
						style={{
							background: "url(https://source.unsplash.com/1366x480/?dark)",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "480px",
							width: "100%",
						}}
					/>
					<div
						style={{
							background:
								"url(https://source.unsplash.com/1366x480/?darkshadow)",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "480px",
							width: "100%",
						}}
					/>
					<div
						style={{
							background: "url(https://source.unsplash.com/1366x480/?darkroom)",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "480px",
							width: "100%",
						}}
					/>
					<div
						style={{
							background:
								"url(https://source.unsplash.com/1366x480/?darknight)",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "480px",
							width: "100%",
						}}
					/>
				</Swiper>
			</div>
		)
	}
}

export default SwiperSample
