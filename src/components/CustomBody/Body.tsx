import React from 'react'
import './Body.css'
import CategoryButton from '../CategoryButton/SectionButton'
import { menu } from '../../Data/DataMenu'
import cocktails from '../../images/cocktail.jpg'
import breakfasts from '../../images/breakfast.png'
import coffee from '../../images/coffee.png'

const CustomBody = () => {
  return (
    <div className='justify-content-center align-items-center'>
      <h1 id='main-title' className='text-center'>Menù</h1>
      <CategoryButton
      categoryItem={menu.Cocktails}
      name='Cocktails'
      backgroundImg={cocktails}
      />
      <hr />
      <CategoryButton
      categoryItem={menu.Breakfast}
      name='Breakfast'
      backgroundImg={breakfasts}
      />
      <hr />
      <CategoryButton
      categoryItem={menu.Coffee}
      name='Coffee'
      backgroundImg={coffee}
      />
      <hr />
    </div>
  )
}

export default CustomBody