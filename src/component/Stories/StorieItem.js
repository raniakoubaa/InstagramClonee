import React from 'react'
import './stories.css'

const StorieItem = ({story}) => {
    return (
        <div className='storieItem'>
             <img
                    src={story.src}
                    className="rounded-circle Item"
                    style={{ width: "66px", height: "66px"}}
                    alt="Avatar"
                />       
            <p>{story.UserName}</p>
        </div>
    )
}

export default StorieItem
