import React from 'react'
import logo from '../../../images/logo.png'
import RelatedItem from './related-item.js'

function Related(props){

  return(
    <div className="Related">
      <img src={logo} width={250} />
      {
        // console.log(props.categories[0].playlist[2].title)
        /* {
        props.categories.playlist.map((item) => {
          return(
        <RelatedItem
        key={item.id}
        {...item}
        />
          )
        })
      } */}
    </div>
  )
}

export default Related
