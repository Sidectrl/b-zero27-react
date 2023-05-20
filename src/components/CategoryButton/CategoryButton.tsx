import React, { useState } from 'react';
import './CategoryButton.css'
import { Breakfast, Cocktail, Coffee } from '../../models/menu';
import coffee from '../../images/coffee.png'

type customProps = {
  categoryItem: (Cocktail | Breakfast | Coffee)[]
  name: string
}

const CategoryButton = ({ categoryItem, name }: customProps) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const buttonStyle = {
    backgroundImage: coffee,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }


  return (
    <button className='category-button col-12' onClick={handleButtonClick}>
      <div style={buttonStyle}>
        <h1>{name}</h1>
        <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
          {categoryItem.map((iesim) =>
            <>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>{iesim.name}</h4>
                <h4>{iesim.price}</h4>
              </div>
              <p className='text-start fst-italic'>{(iesim as Cocktail)?.ingredients} </p>
            </>
          )}
        </div>
      </div>
    </button>
  )
}


export default CategoryButton
