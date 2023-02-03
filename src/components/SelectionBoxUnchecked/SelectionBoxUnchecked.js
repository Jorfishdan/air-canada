import "./SelectionBoxUnchecked.scss";
import CheckedOff from "../../assets/images/checked-black.svg";
import CheckedEmpty from "../../assets/images/checked-empty.svg";
import { useState } from "react";

export default function SelectionBoxUnchecked({ text }) {
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div onClick={() => setIsChecked(!isChecked)} className="selection">
			{isChecked ? (
				<img
					className="selection__image"
					src={CheckedEmpty}
					alt="Checkbox empty"
				></img>
			) : (
				<img
					className="selection__image"
					src={CheckedOff}
					alt="Checkbox checked"
				></img>
			)}
			<span className="selection__text">{text}</span>
		</div>
	);
}
