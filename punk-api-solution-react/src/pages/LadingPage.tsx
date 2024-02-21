import { MouseEventHandler } from "react";
import { useState } from "react";

export function LandingPage(): JSX.Element {
	const [beers, setBeer] = useState<null | string>(null);

	const handleOnButtonClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
		const response = fetch("https://api.punkapi.com/v2/beers/random");
		const beer = await (await response).json();
		console.log(beer);
		console.log(event);
		setBeer(beer[0].name);
	};

	return (
		<>
			<section>
				<h2>Your random beer of the day!</h2>
				<article className="random-beer">
					<div className="loader"></div>
					<h1>{beers}</h1>
				</article>
			</section>
			<footer>
				<button onClick={handleOnButtonClick}>Generate new random beer</button>
			</footer>
		</>
	);
}
