import { Header } from "./components/Header";
import { LandingPage } from "./pages/LadingPage";
import { IRoute } from "./components/interfaces";
import { Routes, Route } from "react-router-dom";

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
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/search" element={<div>Hello create</div>}></Route>
			</Routes>
		</>
	);
}
