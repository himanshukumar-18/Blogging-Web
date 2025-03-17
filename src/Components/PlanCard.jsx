import React from 'react'
import { Link } from 'react-router'

const PlanCard = ({ price, date, about, ser1, ser2, ser3, ser4, ser5, btn, link }) => {
    return (
        <>
            <div className="month bg-[#11131d] w-[49%] rounded-3xl p-10">
                <h1 className="text-[#fafafa] text-[5rem] font-bold">
                    {price}
                    <span className="text-[1.5rem]">
                        {date}
                    </span>
                </h1>

                <p className="text-[#fafafa] text-[1.7rem] leading-8">
                    {about}
                </p>

                <div className="services mt-5">
                    <ul className='text-[#fafafa] text-[1.2rem]'>
                        <li>- {ser1}</li>
                        <li>- {ser2}</li>
                        <li>- {ser3}</li>
                        <li>- {ser4}</li>
                        <li>{ser5}</li>
                    </ul>
                </div>

                <div className="plan-btn mt-5">
                    <button className='bg-[#7D29ff] text-[1.5rem] text-[#fafafa] px-10 py-2 rounded-4xl' 
                    onClick={() => {
                        alert("Enjoy Your Membership")
                    }}>
                            {btn}
                    </button>
                </div>
            </div>
        </>
    )
}

export default PlanCard