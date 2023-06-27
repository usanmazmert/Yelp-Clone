"use client"
import React, {useState} from 'react'
import { baseUrl } from './api/restaurant';
import { useRouter } from 'next/navigation';

type Props = {}

const AddRestaurant = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    try{
     await fetch(baseUrl, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        location,
        price_range: priceRange
      })
     })
     router.refresh();
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='mb-4 w-full'>
      <form action={""} className='relative flex w-full gap-2 items-center justify-between h-full'>
        <div className='relative flex items-center gap-4 mx-auto w-full'>
          <div className='w-full'>
            <input value={name} onChange={(e) => {
              setName(e.target.value);
            }} placeholder='Name' className='add-restaurant-input py-1'/>
          </div>
          <div className='w-full'>
            <input placeholder='Location' value={location} onChange={(e) => {
              setLocation(e.target.value);
            }} className='add-restaurant-input py-1'/>
          </div>
          <div className='w-full'>
            <select value={priceRange} onChange={(e) => {
              setPriceRange(e.target.value);
            }} className='add-restaurant-input py-[0.27rem]'>
              <option disabled>Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
        </div>
        <button onClick={handleSubmit} className='px-2 py-1.5 bg-blue-600 text-white rounded-sm'>Add</button>
      </form>
    </div>
  )
}

export default AddRestaurant