import React from "react"
import * as S from './Image.styled'

interface Props {
    imageUrl: string;
}

const Image: React.FC<Props> = ({imageUrl}) => {
    return (
        <div>
            <S.Image src={imageUrl}/>
           
        </div>
    )
}

export default Image;