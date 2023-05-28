import React, { useState } from 'react';
import './SectionButton.css'
import { Template } from '../../models/menu';


type customProps = {
  categoryItem: (Template)[]
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'
  }

  return (
    <>
      {categoryItem.length ? <button style={{ width: "100%" }} className='section-button col-12' onClick={handleButtonClick}>
        <hr />
        <h1> {name}</h1>
      </button> : ''}
      <div style={background}>
        <div style={{ padding: 12 }} className={`collapse ${isCollapsed ? '' : 'show'}`}>
          {categoryItem.map((iesim) =>
            <>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>{iesim.name}</h4>
                {iesim.price && <h4>€{iesim?.price?.toFixed(2)}</h4>}
              </div>
              {iesim.ingredients ? <p style={{ marginLeft: 20 }} className='text-start fst-italic'>-{iesim.ingredients} </p> : ''}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SectionButton
