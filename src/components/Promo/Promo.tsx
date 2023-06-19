import React from 'react'
import './Promo.css'
import { promos } from '../../Data/PromoData'
const Promo = () => {
  return (
    <div className='col-12 text-center'>
        <h1>Promo</h1>
        <div>
            {promos.map(promo =>
            <h4>{promo.name} {promo.price ? "€"+promo.price?.toFixed(2): ''}</h4> 
                )}
        </div>
    </div>
  )
}

export default Promo