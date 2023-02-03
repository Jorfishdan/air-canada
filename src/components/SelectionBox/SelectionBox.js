import "./SelectionBox.scss";
import CheckedOff from "../../assets/images/checked-black.svg";

export default function SelectionBox({ text }) {
	return (
		<div className="selection">
			<img
				className="selection__image"
				src={CheckedOff}
				alt="Checkbox checked"
			></img>
			<span className="selection__text">{text}</span>
		</div>
	);
}
