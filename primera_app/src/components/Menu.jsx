import React from 'react';
import  Search  from "./Search";
import  Paneladd from './Paneladd';
import './../Menu.css'


class Menu extends React.Component{

constructor(props){
    super(props);

    this.state =({newItemPnael :false});
    this.onCancel = this.onCancel.bind(this);
}

add = ()=> {


    this.setState({newItemPnael:true});
    console.log("Funciona")

}

onCancel(){
    this.setState({newItemPnael: false})
}


render(){

      return(
        <div className='container'>
        <div className='subcontainer'>

        <div className="logo">
       <h3>{this.props.titulo}</h3> 
       
        </div>

        <div className='search'>
            <Search onsearch={this.props.onsearch}/>
        </div>


        <div className='actions'>
            <button className='button btn-blue' onClick={this.add}>+ Añadir nuevo libro</button>
        </div>




        </div>

        { (this.state.newItemPnael)?
            <Paneladd onhide={this.onCancel} onadd={this.props.onadd} />
        :

            ""
        }
         
    
        </div>
      


    );

}
   
  


}

export default Menu;