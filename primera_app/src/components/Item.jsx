import React from "react";
import './../Item.css'


class Item extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            stars:[]
        }
    }

    componentDidMount(){
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        })

    }



    render(){

        return(

            <div className="item">
            <div className="image"><img src={'images/' + this.props.image} alt="Imgaes"></img> </div>
            <div className="title">{this.props.title}</div>
            <div className="rating">
            <p>
                { this.state.stars.map((x,index) =>
                 
                        <img src="images/star.png" width="32" alt="ATTI"></img>
                   
                  
                )


                }


            </p>
            Calificacion:
            <select value={this.props.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

            </select>

            </div>

            <div className="actions"><button>Eliminar</button></div>


            </div>

            )



    }     

     


     


};

export default Item;