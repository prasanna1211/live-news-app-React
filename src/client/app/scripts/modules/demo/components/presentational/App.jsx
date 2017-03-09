import React from 'react';


const BaseComp = () => {
  return (
    <div>
      base BaseComp
    </div>
  );
}

const newComp = (BaseComp instanceof Function) ?
    {render: BaseComp} :
    BaseComp

console.log(' new comp ', newComp);


export default BaseComp;
