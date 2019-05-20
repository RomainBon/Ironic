import React, { Component } from 'react';


import './index.css';

class App extends Component {
		constructor(){
	    super();
	    this.state = {
		
		}

	}
		


	

    render() {
        return (

            <div className="App">
            <h1> Tp : task : afficher une liste des tâches depuis un composant Task </h1>
			
			   <Task />
			
			</div>
        );

    }
}
class Task extends Component {
	
	render(){
		
		return(
		        <div>
				    
				</div>
		
		
		   )
	}
}


export default App;