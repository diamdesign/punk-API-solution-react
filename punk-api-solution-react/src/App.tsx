import { Header } from "./components/Header";
import { LandingPage } from "./pages/LadingPage";
import { IRoute } from "./components/interfaces";

export function App() {
	const links: IRoute[] = [
		{
			id: 1,
			name: "Random Beer",
			path: "/",
		},
		{
			id: 2,
			name: "Search",
			path: "/search",
		},
	];

	return (
		<>
			<Header links={links} />
			<LandingPage />
		</>
	);
}
