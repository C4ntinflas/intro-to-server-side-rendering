const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            required
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            required
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
        <div className='backButton'>
            <a href='/breads'><button>Go back to the Index</button></a>
        </div>
      </Default>
    )
}

module.exports = New
