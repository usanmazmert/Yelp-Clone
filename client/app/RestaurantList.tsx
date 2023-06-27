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

  const handleDeleteRequest = async (id : number) => {
    const resp = await fetch(baseUrl + "/" + id, {
      method:"DELETE"
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
        <tbody className='bg-gray-700'>
          {
            props.restaurants && props.restaurants.map(item => (
              <tr className='border-gray-600 border-b'>
                <td className='py-4'>{item.name}</td>
                <td>{item.location}</td>
                <td>{"$".repeat(item.price_range)}</td>
                <td>Reviews</td>
                <td><Link href={"/restaurants/"+ item.id + "/update"} className='bg-orange-600 px-2 py-1 rounded-sm'>Update</Link></td>
                <td><button onClick={(e) => handleDeleteRequest(item.id)} className='bg-red-600 px-2 py-1 rounded-sm'>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}



export default RestaurantList