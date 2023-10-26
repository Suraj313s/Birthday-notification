import './Main.css'
import React, { useState } from 'react'
import Component from './Data'

const Main = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(true)
  const [value, setValue] = useState('6 Birthday Today')
  const a = () => {
    setIsSectionVisible(false)
    setValue('0 Birthday Today')
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{value}</h3>
          {isSectionVisible && <Component />}
          <div className="wrapper">
            <button onClick={a}>Clear All</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
