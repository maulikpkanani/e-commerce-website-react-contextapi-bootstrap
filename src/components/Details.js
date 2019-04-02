import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {
						company,
						id,
						img,
						info,
						price,
						title,
						inCart
					} = value.detailProduct;
					return (
						<div className="container my-5">
							{/*title */}
							<div className="row">
								<div className="col-10 mx-auto text-slanted text-blue my-5 text-center">
									<h1>{title}</h1>
								</div>
							</div>
							{/*end-title */}
							{/*product-img */}
							<div className="row">
								<div className="col-10 col-md-6 mx-auto my-3">
									<img src={img} className="img-fluid" alt="product" />
								</div>
								{/*product text */}
								<div className="col-10 col-md-6 mx-auto my-3 text-capitalize ">
									<h2>model: {title}</h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										made by: <span>{company}</span>{' '}
									</h4>

									<h4 className="text-blue">
										<strong>price :</strong> <span>$</span>
										{price}
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										some info about product:
									</p>
									<p className="text-muted lead">{info}</p>
									{/*buttons */}
									<div>
										<Link to="/">
											<ButtonContainer>back to products</ButtonContainer>
											<ButtonContainer
												onClick={() => value.addToCart(id)}
												cart
												disabled={inCart ? true : false}
											>
												{inCart ? 'inCart' : 'Add to Cart'}
											</ButtonContainer>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
