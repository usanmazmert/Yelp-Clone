"use client"
import { baseUrl } from '@/app/api/restaurant';
import { useRouter, useParams } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {
    const params = useParams();
    const router = useRouter();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        try{
        await fetch(baseUrl + "/" + params.id, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            location,
            price_range: priceRange
        })
        })
        router.replace("/");
        }catch(err){
        console.log(err);
        }
    }

  return (
    <div className='mb-4 w-[70%] h-screen flex items-center justify-center mx-auto'>
      <form action={""} className='relative flex flex-col w-full gap-2 items-center h-full'>
        <div className='relative flex flex-col items-center justify-evenly w-full h-[70%] '>
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
        <button onClick={handleSubmit} className='px-2 py-1.5 bg-blue-600 text-white rounded-sm w-full'>Add</button>
      </form>
    </div>
  )
}

export default Page