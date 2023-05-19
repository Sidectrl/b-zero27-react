import React from 'react'
import './CustomBody.css'
import CategoryButton from '../CategoryButton/CategoryButton'
import { menu } from '../../Data/DataMenu'

const CustomBody = () => {
  return (
    <div className='container justify-content-center align-items-center'>
      <h1 id='main-title' className='text-center'>Menù</h1>
      <CategoryButton
      categoryItem={menu.Cocktails}
      name='Cocktails'
      />
      <hr />
      <CategoryButton
      categoryItem={menu.Breakfast}
      name='Breakfast'
      />
      <hr />
      <CategoryButton
      categoryItem={menu.Coffee}
      name='Coffee'
      />
      <hr />
    </div>
  )
}

export default CustomBody