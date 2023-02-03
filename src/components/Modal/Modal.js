import "./Modal.scss";
import CloseIcon from "../../assets/images/close-icon.png";
import SelectionBox from "../SelectionBox/SelectionBox";
import { useState } from "react";
import SelectionBoxUnchecked from "../SelectionBoxUnchecked/SelectionBoxUnchecked";

export default function Modal({ setIsModalOpen }) {
	return (
		<>
			<div className="modal-overlay"></div>
			<section className="modal">
				<div className="modal__title-container">
					<img
						className="modal__close"
						src={CloseIcon}
						alt="Close window icon"
						onClick={() => setIsModalOpen(false)}
					></img>
					<h2 className="modal__title">
						Personalize your Dashboard to see your top interests.
					</h2>
				</div>
				<nav className="modal__links-container">
					<span className="modal__link modal__link--active">
						Everyday Essentials
					</span>
					<span className="modal__link">Travel</span>
					<span className="modal__link">eStore</span>
					<span className="modal__link">Manage Your Page</span>
				</nav>
				<section className="modal__select-container">
					<div className="modal__current-select">
						<span className="modal__select-title">
							Current Selection
						</span>
						<SelectionBox text={"Current Deals"} />
						<SelectionBoxUnchecked
							text={"eStore Popular Retailers"}
						/>
						<SelectionBox text={"Favorites"} />
						<SelectionBox text={"Unlock Offers"} />
					</div>
					<div className="modal__other-select">
						<span className="modal__select-title">
							Other Options
						</span>
						<SelectionBoxUnchecked
							text={"Link to unlock Starbucks offers"}
						/>
						<SelectionBoxUnchecked
							text={"Link to unlock Uber offers"}
						/>
						<SelectionBoxUnchecked
							text={"Link to unlock UberEats offers"}
						/>
						<SelectionBoxUnchecked text={"LCBO offers"} />
					</div>
				</section>
				<div className="modal__button-container">
					<button
						className="modal__button"
						onClick={() => setIsModalOpen(false)}
					>
						Confirm
					</button>
				</div>
			</section>
		</>
	);
}
