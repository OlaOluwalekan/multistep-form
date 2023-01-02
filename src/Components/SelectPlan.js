import React from "react"
import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"

const planInfo = [
  {
    image: arcade,
    name: "arcade",
    monthlyBill: "9/mo",
    yearlyBill: "",
  },
  {
    image: advanced,
    name: "advanced",
    monthlyBill: "12/mo",
    yearlyBill: "",
  },
  {
    image: pro,
    name: "pro",
    monthlyBill: "15/mo",
    yearlyBill: "",
  },
]

const SelectPlan = () => {
  return (
    <div className='select-plan-container'>
      <h2 className='plan-head'>Select your plan</h2>
      <p className='info'>You have the option of monthly or yearly billing</p>
      {planInfo.map((plan, i) => {
        const { image, name, monthlyBill, yearlyBill } = plan
        return (
          <article className='arcade plan' key={i}>
            <img src={image} alt={name} />
            <section className='name-and-price'>
              <p className='plan-name'>{name}</p>
              <p className='plan-bill'>${monthlyBill}</p>
            </section>
          </article>
        )
      })}
      <article className='bill-options'>
        <p className='monthly bill'>Monthly</p>
        <span className='check'>
          <span className='chosen'></span>
        </span>
        <p className='yearly bill'>Yearly</p>
      </article>
    </div>
  )
}

export default SelectPlan
