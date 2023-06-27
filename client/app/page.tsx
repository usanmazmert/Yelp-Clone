import Image from 'next/image'
import Header from './Header'
import RestaurantList from './RestaurantList'
import AddRestaurant from './AddRestaurant'

import { baseUrl } from './api/restaurant'


export type Restaurant = {
  name: string,
  location: string,
  price_range: number,
  id : number
}

export default async function Home() {
  const data = await fetch(baseUrl, {cache: "no-cache"});
  const response = await data.json();
  return (
    <main className='flex flex-col gap-10 w-screen p-10'>
        <Header/>
        <AddRestaurant />
        <RestaurantList restaurants={response.data.restaurants} />
    </main>
  )
}
