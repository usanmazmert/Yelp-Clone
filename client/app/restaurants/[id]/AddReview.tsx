"use client"
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { baseUrl } from '@/app/api/restaurant'

type Props = {}

const AddReview = (props: Props) => {
    const params = useParams();
    const router = useRouter();
    const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    try{
     await fetch(baseUrl + "/" + params.id + "/reviews", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        review,
        rating 
      })
     })
     router.refresh();
    }catch(err){
      console.log(err);
    }
  }
  return (
    <form action={""} className='relative flex flex-col w-full gap-2 items-center mt-20'>
        <div className='relative flex flex-col items-center gap-4 mx-auto w-full p-10'>
          <div className='w-full'>
            <input value={name} onChange={(e) => {
              setName(e.target.value);
            }} placeholder='Name' className='add-restaurant-input py-1'/>
          </div>
          
          <div className='w-full'>
            <select value={rating} onChange={(e) => {
              setRating(e.target.value);
            }} className='add-restaurant-input py-[0.27rem]'>
              <option disabled>Rating</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
          <div className='w-full'>
            <textarea placeholder='Review' value={review} onChange={(e) => {
              setReview(e.target.value);
            }} className='add-restaurant-input py-1'/>
          </div>
        </div>
        <button onClick={handleSubmit} className='px-2 py-1.5 bg-blue-600 text-white rounded-sm'>Add</button>
      </form>
  )
}

export default AddReview