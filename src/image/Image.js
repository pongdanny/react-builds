import React from "react";
import "./image.css";
import cat from "./react-builds-cat.png";

console.log(cat);

function Image() {
	return (
		<div>
			<img src={cat} alt="Cat" />
			<div className="cat"></div>
		</div>
	);
}

export default Image;
