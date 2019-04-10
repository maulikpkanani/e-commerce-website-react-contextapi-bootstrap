import React, { Component } from 'react';
import Title from '../Title'
import Columns from './Columns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'
import {ProductConsumer} from '../../context.js'

export default class Cart extends Component {
	render() {
		return (
		<section>
		<ProductConsumer>
			{value=>{
				const{cart} = value;
				console.log(cart);
			
				if(cart.length > 0){
				return(
					<React.Fragment>
						<Title name='your' title='cart'/>
						<Columns/>
						<CartList value={value}/>
						<CartTotal value={value} history={this.props.history} />
					</React.Fragment>
						)
				}else{
			return <EmptyCart/>
				}
			}}
			</ProductConsumer>
		</section>
		);
	}
}
