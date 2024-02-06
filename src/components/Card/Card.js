import styled from 'styled-components';

const CardShell = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 2.14285em 0 4.2857142857em;
	background-color: hsl(0, 0%, 100%);
	border-radius: 8px;
	box-shadow: 0 16px 30px rgba(0, 0, 0, 0.04);
	overflow: hidden;

	& .card__group,
	& .card__block,
	& .card__list {
		display: flex;
		flex-direction: column;
	}

	& .card__block {
		padding: 1.8571428571em 1.7142857143em;
	}

	& h2.card__title {
		margin-bottom: 1em;
	}

	& .card__subtitle {
		background-color: transparent;
		margin-bottom: 1.0666666667em;
		font-size: 1.0714285714em;
		font-weight: 700;
		color: hsl(71, 73%, 54%);
		line-height: 1.3;
	}

	& .card__block--monthly-subsription,
	& .card__block--why-us {
		color: hsl(204, 43%, 93%);
	}

	& .card__block--monthly-subsription {
		background-color: hsl(179, 62%, 43%);
	}

	& .card__block--why-us {
		background-color: hsl(179, 47%, 52%);
	}

	& h3.card__title {
		margin-bottom: 1em;
		color: inherit;
	}

	& .card__price {
		display: flex;
		align-items: center;
		margin-top: -0.4285714286em;
		font-size: 1.1428571429em;
	}

	& .card__price .num {
		margin-right: 0.3870967742em;
		font-size: 1.9375em;
		font-weight: 700;
	}

	& .card__price .label {
		color: hsla(204, 43%, 93%, 0.75);
	}

	& .card__block--monthly-subsription .card__desc {
		margin-bottom: 1.8666666667em;
		font-size: 1.0714285714em;
	}

	& .card__block .btn {
		font-size: 1.1428571429em;
	}

	& .card__list {
		gap: 0.2142857143em;
		line-height: 1.4;
	}

	@media (min-width: 48em) {
		& {
			max-width: 45.7142857143em;
		}

		& .card__block {
			padding: 2.7142857143em 2.8571428571em;
		}

		& h2.card__title {
			font-size: 1.7142857143em;
		}

		& .card__subtitle {
			font-size: 1.2857142857em;
		}

		& .card__group {
			flex-direction: row;
		}

		& .card__group .card__block {
			width: 50%;
		}
	}
`;

const Card = () => {
	return (
		<CardShell>
			<section className="card__block card__block--join-community">
				<h2 className="card__title">Join our community</h2>
				<p className="card__subtitle">
					30-day, hassle-free money back guarantee
				</p>
				<p className="card__desc">
					Gain access to our full library of tutorials along with
					expert code reviews. Perfect for any developers who are
					serious about honing their skills.
				</p>
			</section>
			<div className="card__group">
				<section className="card__block card__block--monthly-subsription">
					<h3 className="card__title">Monthly Subscription</h3>
					<p className="card__price">
						<span className="num">$29</span>
						<span className="label">per month</span>
					</p>
					<p className="card__desc">
						Full access for less than $1 a day
					</p>
					<a href="#/" className="btn btn--primary btn--full">
						Sign Up
					</a>
				</section>
				<section className="card__block card__block--why-us">
					<h3 className="card__title">Why Us</h3>
					<ul className="card__list">
						<li>Tutorials by industry experts</li>
						<li>Peer &amp; expert code review</li>
						<li>Coding exercises</li>
						<li>Access to our GitHub repos</li>
						<li>Community forum</li>
						<li>Flashcard decks</li>
						<li>New videos every week</li>
					</ul>
				</section>
			</div>
		</CardShell>
	);
};

export default Card;
