import React from "react";

import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="row row-cols-1 row-cols-md-4 g-4 m-2">
				<Card imageUrl="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" ></Card>
				<Card imageUrl="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8" ></Card>
				<Card imageUrl="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4" ></Card>
				<Card imageUrl="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA" ></Card>
			</div>
			<Footer></Footer>
		</div>
	);
};

// Usé 'props' para cada imagen de cada card y mi lógica me llevó a hacerlo así.
// Luego vi la clase grabada y como Erwin creaba un CardGallery para las imágenes entonces no sé si lo que he hecho es válido.


export default Home;
