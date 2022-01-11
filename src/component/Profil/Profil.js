import React from 'react'
import CardProfil from '../CardProfil/CardProfil'



const Profil = ({profil}) => {
    
    return (
        <div>
            {profil.map(elt => <CardProfil item={elt} key={elt.id}/>)}
            
        </div>
    )
}

export default Profil
