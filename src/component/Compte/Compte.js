import React from 'react'
import { Card } from 'react-bootstrap'
import { BiSmile } from 'react-icons/bi'
import { BsCursor } from 'react-icons/bs'
import { FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Compte = () => {
    const {id} = useParams()
    // console.log(id)
    const list = useSelector(state => state.InstagramReduce.Profils)
    // console.log(list,"list")
    // const user= list.filter(elt => elt.id == id) 
    // console.log(user,"user")
    // console.log(user.Bio,"username")
    return (
        <div>
        {
            list
            .filter(elt => elt.id == id) 
            .map(elt =>
                <div>
                    <h1>{elt.Bio}</h1>
                </div>)
        }
        </div>
    )
}

export default Compte
