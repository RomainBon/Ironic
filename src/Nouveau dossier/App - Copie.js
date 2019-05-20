import React, { Component } from 'react';
import Nav from './Nav';
import {items} from './static-data';
import ItemPage  from './ItemPage';
import CartPage  from './CartPage';
import './index.css';

class App extends Component {
constructor(){
	super();
this.state ={
	
	activeTab :0,
	panier:[]
};
}
changeTab = (index)=>{
	
	this.setState({
		
		activeTab: index
	})
}

addToCart=(item) =>{
	
	this.setState(
	     {panier:[...this.state.panier, item.id] }
	)
	
}
// ajouter quantité
onAddItemEvent = (item) =>  {
	
	this.setState(
	     {panier:[...this.state.panier, item.id] }
	)
}
// suprimer les items 
onRemoveItemEvent = (item) =>  {
	let index = this.state.panier.indexOf(item.id);
	this.setState({
		panier:[
		...this.state.panier.slice(0,index),
		
		...this.state.panier.slice(index +1 )
		
		]
		
	}
	
	)
	
}

/*
Rapppel Array ES6 

      var a = [1,2,3]; // 
      var b = [a,4]; // [ [[1,2,3],4 ]
	  var c = [...a,4]; // [1,2,3,4]
*/

   renderContent(){
	   
	   switch(this.state.activeTab){
		   default:
		   case 0: return <ItemPage items={items} onAddToCart={this.addToCart}  />
		   case 1: return this.renderCart();
		  
	   }
	   
	  // return (
	   
	   // <span> Vide </span>
	 
	   // )
   }
    renderCart(){
		
		// 1. Je dois compter le nombre d'elements dans le panier
		 let itemsCounts = this.state.panier.reduce( (itemsCounts,itemId)=>{
			 itemsCounts[itemId] = itemsCounts[itemId] || 0;
			 itemsCounts[itemId]++;
			 return itemsCounts; 
			 
			 
		 }, {});
		 
		 
		 /* 
		 Rappel  ES6 fonction reduce du Array dans le prototype 
		 
		    let a = [1,2,3,4];
			let total = a.reduce( (somme,valeur)=> {
				
				return somme + valeur;
			},0 ); 
			
			
			// la fonction ()=> fléché est appelé 4 fois
			  (0,1)  retourne  1 
			  (1,2)  retourne 3
			  (3,3)  retourne 6
			  (6,4)  retourne 10
			  
			  le reduce retourne le dernier  qui est 10
		 
		 */ 
		 /* la fonction reduce remplace celle ci : 

            let a = [1,2,3,4];
			let total = 0;
			
			for( let i=0; i < a.length; i++){
				total += a[i];
			}
		 */
		 
		//2. je dois creer un tableau d'elements( produits)
		
	
		
		
		//3. Je dois créer un nouveau item  et ajouter un compteur ( propriétés)
	
	let cartItems = Object.keys(itemsCounts).map(itemId =>{
	
				var item = items.find(item => item.id === parseInt(itemId,10))

				   return { ...item, count:itemsCounts[itemId]}
		  
				
				
			}  )
			
	
		
		

		return (
		
	<CartPage items={cartItems}   onAddItem={this.onAddItemEvent}  onRemoveItem={this.onRemoveItemEvent} />
		)
	
		
		
	}
   
   
   
   
  render() {
	  let{activeTab} = this.state; 
	  
    return (
	
			 <div className="App">
			 <h1> Bienvenue à notre e-shop  avec ReactJS</h1>
			 {this.state.panier.length} produit(s)
			        <Nav  activeTab={activeTab} onTabChange={this.changeTab}  />
					
					<main className="App-content">
					{this.renderContent()}
					
					</main>
				
				</div>
		
					
			
				
				
			     
						  
	
    );
  }
}



export default App;