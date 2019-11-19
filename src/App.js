import React,{Component} from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';












class App extends Component{
 render(){
    return(
<Router>
<div >
    
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
   
   
    
</div>

</Router>

)


    }

}



export default App;