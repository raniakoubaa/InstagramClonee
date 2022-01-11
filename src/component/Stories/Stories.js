import React from 'react'
import StorieItem from './StorieItem'
import './stories.css'

const Stories = ({profil}) => {
    return (
        <div className='Storie'>
            { profil.map((elt) => <StorieItem story={elt} key={elt.id} />)}
            
        </div>
    )
}

export default Stories
