import React from 'react'
import './Body.css'
import SectionButton from '../CategoryButton/SectionButton'
import { menu } from '../../Data/DataMenu'
/*import cocktails from '../../images/cocktail.jpg'
import breakfasts from '../../images/breakfast.png'
import coffee from '../../images/coffee.png'*/

const CustomBody = () => {
  return (
    <div id='myBody' className='justify-content-center align-items-center'>
      <h1 id='main-title' className='text-center'>Menù</h1>
      <hr />
      <SectionButton
      categoryItem={menu.Cocktails}
      name='Cocktails'
      //backgroundImg={cocktails}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Breakfast}
      name='Breakfast'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Coffee}
      name='Coffee'
      //backgroundImg={coffee}
      />
      <hr />
    </div>
  )
}

export default CustomBody