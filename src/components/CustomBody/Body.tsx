import React from 'react'
import './Body.css'
import SectionButton from '../CategoryButton/SectionButton'
import { menu } from '../../Data/DataMenu'
/*import cocktails from '../../images/cocktail.jpg'
import breakfasts from '../../images/breakfast.png'
import coffee from '../../images/coffee.png'*/

const CustomBody = () => {

  const compareProducts = (a:any, b:any) => {
    if (a.price < b.price) {
      return -1; // a viene prima di b
    } else if (a.price > b.price) {
      return 1; // a viene dopo b
    } else {
      // Se i prezzi sono uguali, ordina in base al nome
      return a.name.localeCompare(b.name);
    }
  };

  return (
    <div id='myBody' className='justify-content-center align-items-center'>
      <h1 id='main-title' className='text-center'>Menù</h1>
      <hr />
      <SectionButton
      categoryItem={menu.Coffee.sort(compareProducts)}
      name='Caffetteria'
      //backgroundImg={coffee}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Breakfast}
      name='Colazione'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Drinks}
      name='Aperitivi'
      //backgroundImg={cocktails}
      />
      <hr />
      
      
    </div>
  )
}

export default CustomBody