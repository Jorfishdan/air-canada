import "./Homepage.scss";
import Hero from "../../components/Hero/Hero";
import ExclusiveOffersBar from "../../components/ExclusiveOffersBar/ExclusiveOffersBar";
import CardFavorite from "../../components/CardFavorite/CardFavorite";
import CurrentDealsCard from "../../components/CurrentDealsCard/CurrentDealsCard";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export default function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<main className="main">
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
			<Hero />
			<ExclusiveOffersBar setIsModalOpen={setIsModalOpen} />
			<CardFavorite />
			<CurrentDealsCard />
		</main>
	);
}
