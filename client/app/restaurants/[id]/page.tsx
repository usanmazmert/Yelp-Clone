"use client"
import { baseUrl } from '@/app/api/restaurant'
import React, {useState} from 'react'
import {useParams} from "next/navigation"
import {useRouter} from "next/navigation"
import StarRating from './StarComponent'
import Reviews from './Reviews'
import AddReview from './AddReview'

export type Review = {
  restaurant_id : number,
  name: string,
  review: string,
  rating: number
}


const Page = async () => {
  const params = useParams()
  const res = await fetch(baseUrl + "/" + params.id + "/reviews", {cache: "no-cache"});
  const data = await res.json();
  console.log(data.data.reviews);
  return (
    <div className='mb-4 w-full flex flex-col h-full'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-7xl text-center w-full'>CheeseCake Factory</h1>
        <StarRating rating={3.5} />
        <Reviews reviews={data.data.reviews}/>
      </div>
      <AddReview/>
    </div>
  )
  }
    

export default Page;