import React from 'react'

const Data = () => {
  return (
    <>
      <article className="person">
        <img
          src="https://www.geo.tv/assets/uploads/updates/2023-06-02/490818_6706974_updates.jpg"
          alt="Salman Khan"
        />
        <div>
          <h4>Salman Khan</h4>
          <p>56 years</p>
        </div>
      </article>
      <article className="person">
        <img
          src="https://cdn.siasat.com/wp-content/uploads/2021/07/AkshayKumar.jpg"
          alt="Akshay Kumar"
        />
        <div>
          <h4>Akshay Kumar</h4>
          <p>50 years</p>
        </div>
      </article>
      <article className="person">
        <img
          src="data:image/jpeg;base64,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"
          alt="Allu Arjun"
        />
        <div>
          <h4>Allu Arjun</h4>
          <p>36 years</p>
        </div>
      </article>
      <article className="person">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLrg6y_8vJDjagFnnnwYWXPmo270wmGMfPw&usqp=CAU"
          alt="rocking Star Yash"
        />
        <div>
          <h4>rocking Star Yash</h4>
          <p>34 years</p>
        </div>
      </article><article className="person">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZtebUsNqiWkQlC6bn2_x5FOjgwU0Wg5ZZ143Qu65Ts2e2ClpeneJUhPGp7-VT0hfSUc&usqp=CAU"
          alt="Virat Kohli"
        />
        <div>
          <h4>Virat Kohli</h4>
          <p>32 years</p>
        </div>
      </article>
      <article className="person">
        <img
          src="data:image/jpeg;base64,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"
          alt="M S Dhoni"
        />
        <div>
          <h4>M S Dhoni</h4>
          <p>40 years</p>
        </div>
      </article>{' '}
      <br />
    </>
  )
}

export default Data
