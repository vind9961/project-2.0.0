import React from 'react';
import {Card, CardImg, CardTitle} from 'reactstrap';

const RenderItem = (props) =>{

  const itm = props.item.map((item) => {
    return (
      <div className="col-12 col-sm-4" key={item.id}>
      <Card>
        <CardImg src={item.img} />
        <div className='container p-4'>
        <CardTitle>{item.name}</CardTitle>
        <div className='text-right'>
         {item.detail}<br />
         {item.price} <br />
         <strong className="text-danger">{item.off}</strong>
         </div>
         </div>
      </Card>
      </div>
    );
  });
  return(

        <>
        {itm}
        </>

  );
}

export default RenderItem;
