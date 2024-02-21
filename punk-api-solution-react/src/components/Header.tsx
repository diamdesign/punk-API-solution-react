import { IRoute } from "./interfaces";

interface IHeaderProps {
	links: IRoute[];
}

export function Header(props: IHeaderProps): JSX.Element {
	return (
		<header>
			<h1>Welcome to Punk API</h1>
			<nav>
				{props.links.map((link) => (
					<a key={link.id} href={link.path}>
						{link.name}
					</a>
				))}
			</nav>
		</header>
	);
}
