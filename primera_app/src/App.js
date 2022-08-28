
import React from 'react';
import './App.css';
//import { PrimerComponente } from './componentes/primerComponente';
//import { SegundoComponente } from './componentes/segundoComponente';
import Menu from './components/Menu';
import List from './components/List';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0,rating:4, title:"Harry Poter ", image:'Libro01.jpg'},
        {id:1,rating:3, title:"The Shining ", image:'Libro02.jpg'},
        {id:2,rating:2, title:"Codigo da Vinci ", image:'Libro03.jpg'},
        {id:3,rating:1, title:"The Little Prince ", image:'Libro04.jpg'},
        {id:4,rating:3, title:"Overnatural ", image:'Libro05.jpg'}
      ],

      copyBooks : []
    };

  }


  componentDidMount(){
    this.initBooks();
  }


  initBooks = () =>{
   this.setState((state,props) =>
({
  copyBooks : [...state.books]
  } ));

  }

  onadd =(item)=>{

    let temp = [...this.state.books]
    const id = temp[temp.length-1].is ++;
    item['id']= id;
    temp.push(item)

    this.setState({books: [...temp]})
    this.initBooks();


  }

  onsearch = (query) =>{
    if(query === ""){
     // this.setState({copyBooks: [...this.setState.books]});
      this.initBooks();
    }else{
      const temp = [...this.state.books]
      var res = [];

      temp.forEach(item => {

        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item)
        }
        
      });

      this.setState({copyBooks: [...res]} );
    }

  }

  render(){
  return ( 
    <div className='App'>  
   
    <Menu titulo="A T T I "  onadd={this.onadd} onsearch={this.onsearch}/>
     
  
    <List items={this.state.copyBooks}/>

 
   

    
    </div>
  
  );
  }
}

export default App;
