import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'; // ES6

export default class Product extends Component {
	render() {
		const { id, title, img, price, company, inCart } = this.props.product;
		return (
			<ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
				<div className="card">
					<ProductConsumer>
						{value => (
							<div
								className="img-container p-5"
								onClick={() => value.handleDetail(id)}
							>
								<Link to="/details">
									<img src={img} className="card-img-top" alt="product image" />
								</Link>

								<button
									className="cart-btn"
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}
									disabled={inCart ? true : false}
								>
									{inCart ? (
										<p className="text-capitalize mb-0">in cart</p>
									) : (
										<i className="fas fa-cart-plus" />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between mb-0">
						<p className="self-align-center ">{title}</p>
						<h5 className="font-italic text-blue">
							<span className="mr-1">$</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};
const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}

	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
			.card-footer {
				background: rgba(247, 247, 247);
			}
		}
	}

	.img-container {
		position: relative;
		overflow: hidden;
		transition: all 1s linear;
	}
	.card-img-top {
		transition: all 1s linear;
	}

	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}

	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		border: none;
		border-radius: 0.5rem 0 0 0;
		color: var(--mainBlue);
		transform: translate(100%, 100%);
		transition: all 1s linear;
		outline: none;
	}

	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}

	.cart-btn:hover {
		color: var(--lightBlue);
		background: var(--mainBlue);
		cursor: pointer;
	}
`;
