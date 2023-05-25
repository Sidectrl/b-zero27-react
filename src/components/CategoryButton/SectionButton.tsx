import React, { useState } from 'react';
import './SectionButton.css'
import { Breakfast, Cocktail, Coffee } from '../../models/menu';

type customProps = {
  categoryItem: (Cocktail | Breakfast | Coffee)[]
  name: string
  backgroundImg?: string
}

const SectionButton = ({ categoryItem, name }: customProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  const background = {
    //backgroundImage: `url(${backgroundImg})`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'
  }

  return (
    <>
      <button style={{width:"100%"}} className='section-button col-12' onClick={handleButtonClick}>
        <h1>{name}</h1>
      </button>
      <div style={background}>
        {}
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
    </>
  )
}

export default SectionButton
