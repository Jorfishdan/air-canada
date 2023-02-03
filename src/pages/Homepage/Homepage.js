import "./Homepage.scss";
import Hero from "../../components/Hero/Hero";
import ExclusiveOffersBar from "../../components/ExclusiveOffersBar/ExclusiveOffersBar";
import Modal from "../../components/Modal/Modal";
import DoMore from "../../components/DoMore/DoMore";
import EveryDay from "../../components/EveryDay/EveryDay";
import { useState } from "react";

export default function Homepage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isRowShowing, setIsRowShowing] = useState(false);

	return (
		<main className="main">
			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					setIsRowShowing={setIsRowShowing}
				/>
			)}
			<Hero />
			<ExclusiveOffersBar setIsModalOpen={setIsModalOpen} />
			<EveryDay isRowShowing={isRowShowing} />
			<DoMore />
		</main>
	);
}
