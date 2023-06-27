"use client"
import React from 'react'
import { Restaurant } from './page';
import { baseUrl } from './api/restaurant';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  restaurants : Restaurant[]
}

const RestaurantList = (props: Props) => {

  const router = useRouter();

  const handleDeleteRequest = async (event: Event, id : number) => {
    event.stopPropagation();
    const resp = await fetch(baseUrl + "/" + id, {
      method:"DELETE",
      cache: "no-cache"
    })
    router.refresh();
  }

  console.log(props.restaurants);
  return (
    <div className='w-full'>
      <table className="table-auto text-center text-white w-full">
        <thead className='bg-blue-600'>
          <tr>
            <th className='py-3' scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className='bg-gray-700 relative'>
          {
            props.restaurants && props.restaurants.map(item => (
                <tr onClick={(e) => {router.push("restaurants/" + item.id.toString())}} className='relative border-gray-600 border-b hover:bg-gray-600 cursor-pointer'>
                  
                  
                  <td className='py-4'>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{"$".repeat(item.price_range)}</td>
                  <td>Reviews</td>
                  <td><button id="update" onClick={e => {e.stopPropagation(); router.push("/restaurants/"+ item.id + "/update")}}className='relative bg-orange-600 px-2 py-1 rounded-sm'>Update</button></td>
                  <td><button id="delete" onClick={(e) => handleDeleteRequest(e, item.id)} className='bg-red-600 px-2 py-1 rounded-sm'>Delete</button></td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}



export default RestaurantList