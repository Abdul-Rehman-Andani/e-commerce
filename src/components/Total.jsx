import React from 'react'

const Total = ({total}) => {
  return (
    <>
        <h4>Net price : Rs {total}</h4>
            <h4>GST rate: 15%</h4>
            <h4>Total price : Rs {(total * 15 / 100) + total}</h4> 
    </>
  )
}

export default Total;
