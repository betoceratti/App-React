import React from 'react';
import Item from './Item';



function List(props){
    return(
        <div className='list'>
        {
            props.items.map(item =>
                <Item 
                title = {item.title}
                key= {item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}



                />
            )

        }
      
        </div>
      


    );


};

export default List;