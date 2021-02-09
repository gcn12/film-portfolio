import React, { useState } from 'react'
import { 
    Image,
} from './Work.styles'

const WorkImagesSmall = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    return(
        <Image onLoad={()=>setIsLoaded(true)} opacity={isLoaded ? 1 : 0} src={props.image} alt='' />
    )
}

export default WorkImagesSmall