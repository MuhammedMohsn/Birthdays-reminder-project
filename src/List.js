import React, { Fragment } from 'react'
function List({ people }) {
  return (
    <Fragment>
      {people.map(person => {
        let { name, age, img } = person
        return (
          <div className="person" key={Math.random()}>
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        )
      })}
    </Fragment>
  )
}

export default List