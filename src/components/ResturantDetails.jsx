import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dynamicResDetailsUrl } from '../utils/resturantDetails';
const ResturantDetails = () => {
    const { id } = useParams();
    return (
        <div>
            Resturant Id: {id}
        </div>
    )
}

export default ResturantDetails