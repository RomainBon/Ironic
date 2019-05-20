import React, { Component } from 'react';
import './index.css';

class App extends Component {
		constructor(){
	    super();
	    this.state = {
      texte:'',
      tasks:[]
		   
		}
          
	}

  onChange = (event) => {
    this.setState({ texte: event.target.value });
  }
  
    addTask = (event) => {   
    event.preventDefault();
    let item = this.state.texte;
    let myArray = this.state.tasks.slice();
    
		myArray.push(item);
    this.setState({
      texte:'',
      //tasks:[...this.state.tasks, this.state.texte]
      tasks:myArray
    });
  }
	

    render() {
        return (

            <div className="App">
            <h1> Tp : task : afficher une liste des tâches depuis un composant Task </h1>
			         <form onSubmit={this.addTask} >
               <input type="text" value={this.state.texte} onChange={this.onChange} />
               <button> Ajouter</button>
           </form>
			       { this.state.tasks.map( (t,index) => <Task  key={index} taskProp={t}  /> )}
			
			</div>
        );

    }
}
class Task extends Component {
	
	render(){
		
		return(
		        <div>
                <ul>
                     <li> {this.props.taskProp} </li>
                </ul>
				    
				</div>
		
		
		   )
	}
}


export default App;