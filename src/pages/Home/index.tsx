import React, { useState } from "react";
import Cart from "../Cart";

import NavBar from "../../components/NavBar";

const Home: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [acima, setAcima] = useState(false);

	return (
		<div>
			<NavBar isOpen={isOpen} setIsOpen={setIsOpen} acima={acima} setAcima={setAcima} />
			<Cart isOpen={isOpen} acima={acima} />
		</div>
	);
};

export default Home;
