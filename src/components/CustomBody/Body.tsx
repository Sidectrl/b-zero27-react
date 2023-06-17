import React, { useState } from 'react'
import './Body.css'
import SectionButton from '../SectionButton/SectionButton'
import { menu } from '../../Data/DataMenu'

const CustomBody = () => {
  const [filterText, setFilterText] = useState('');

  const compareProducts = (a: any, b: any) => {
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
      <div className='d-flex justify-content-center align-items-center'>
        <input className='filterInput' type="text" placeholder='Cerca' value={filterText} onChange={(event) => setFilterText(event.target.value)} />
      </div>
      <div>
        <SectionButton
          categoryItem={menu.Coffee.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Caffetteria'
        //backgroundImg={coffee}
        />

        <SectionButton
          categoryItem={menu.Breakfast.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Colazione'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Slushes.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Granite'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.HotTables.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Tavola calda'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.LunchBreak.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Pausa pranzo'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Appetizers.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Aperitivi'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Syrups.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Sciroppi'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.MilkShakes.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Frappè'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Sweets.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Dolci'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Fruits.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Frutta'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Drinks.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Bevande'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Beers.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Birre'
        //backgroundImg={breakfasts}
        />

        <SectionButton
          categoryItem={menu.Bitters.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())).sort(compareProducts)}
          name='Amari'
        //backgroundImg={breakfasts}
        />
        <hr />
      </div>
    </div>
  )
}

export default CustomBody