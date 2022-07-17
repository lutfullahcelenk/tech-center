import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { itemId } = useParams();
  console.log('itemId', itemId)

  return (
    <div>
      {itemId}
    </div>
  )
}

export default Detail