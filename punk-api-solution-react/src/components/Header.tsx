import { IRoute } from "./interfaces";
import { Link } from "react-router-dom";

interface IHeaderProps {
	links: IRoute[];
}

export function Header(props: IHeaderProps): JSX.Element {
	return (
		<header>
			<h1>Welcome to Punk API</h1>
			<nav>
				{props.links.map((link) => (
					<Link to={link.path} key={link.id}>
						{link.name}
					</Link>
				))}
			</nav>
		</header>
	);
}
