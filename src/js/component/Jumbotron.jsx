import React from "react"

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron row m-3 bg-secondary-subtle justify-content-center">
      <div className="container m-4 p-3">
        <h1 className="display-4">A warming welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit orci purus,
          vel cubilia senectus augue convallis nunc eros euismod et egestas,
          platea facilisi commodo etiam eget vitae blandit sollicitudin. </p>
        <button type="button" class="btn btn-primary m-2">Call to action!</button>
      </div>
    </div>
  )
}

export default Jumbotron;