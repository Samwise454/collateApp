import React from 'react'

const Prediction = () => {
  return (
    <div>
      <h2 className='my-10 bg-gray-800 text-white w-fit p-2'>OpenAI Predictions</h2>

      <p className='w-100 text-justify mb-5'>
        These predictions are gotten from OpenAI and is not a true 
        reflection of what's on ground. To get proper data, check the 
        Poll, Ward, LGA and Party Parameters.
      </p>

      <div id='predictionArea' className='h-110 bg-gray-100 shadow-sm rounded-md'>

      </div>
    </div>
  )
}

export default Prediction
