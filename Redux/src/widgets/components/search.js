import React from 'react'
import './search.css'

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      type="text"
      className="Search-input"
      name="search"
      // defaultValue="Luis Fonsi"
      defaultValue={props.value}
      onChange={props.handleChange}
    />
  </form>
)

export default Search
