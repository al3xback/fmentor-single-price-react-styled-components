import styled from 'styled-components';

import Card from '../Card/Card';

const MainShell = styled.main`
	&,
	& > .container {
		display: flex;
		flex: auto;
	}

	@media (min-width: 48em) {
		& > .container {
			justify-content: center;
			align-items: center;
		}
	}
`;

const Main = () => {
	return (
		<MainShell>
			<div className="container">
				<Card />
			</div>
		</MainShell>
	);
};

export default Main;
