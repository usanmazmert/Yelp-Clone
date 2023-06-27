import React from 'react'
import { Review } from './page'
import StarRating from './StarComponent'

type Props = {
    reviews : Review[]
}



const Reviews = (props: Props) => {
  return (
    <div className='relative flex flex-wrap w-full justify-center gap-20 rounded-lg text-white'>
        {props.reviews && props.reviews.map(item => (
            <div className='flex flex-col p-3 bg-blue-500 w-80 h-32 justify-between'>
                <div className='flex justify-between items-center gap-10'>
                    <h1>{item.name}</h1>
                    <StarRating rating={item.rating} />
                </div>
                <p>
                    {item.review}
                </p> 
            </div>
        ))}
    </div>
  )
}

export default Reviews