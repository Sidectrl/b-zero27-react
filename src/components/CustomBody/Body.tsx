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
      categoryItem={menu.Breakfast.sort(compareProducts)}
      name='Colazione'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Slushes.sort(compareProducts)}
      name='Granite'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.HotTables.sort(compareProducts)}
      name='Tavola calda'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.LunchBreak.sort(compareProducts)}
      name='Pausa pranzo'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Appetizers.sort(compareProducts)}
      name='Aperitivi'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Syrups.sort(compareProducts)}
      name='Sciroppi'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.MilkShakes.sort(compareProducts)}
      name='Frappè'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Sweets.sort(compareProducts)}
      name='Dolci'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Fruits.sort(compareProducts)}
      name='Frutta'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Drinks.sort(compareProducts)}
      name='Bevande'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Beers.sort(compareProducts)}
      name='Birre'
      //backgroundImg={breakfasts}
      />
      <hr />
      <SectionButton
      categoryItem={menu.Bitters.sort(compareProducts)}
      name='Amari'
      //backgroundImg={breakfasts}
      />
      <hr />      
    </div>
  )
}

export default CustomBody