import React from 'react'
import { IconContainer, IconImage } from './styled'


export function EyeIcon(props) {
    return (
        <IconContainer>
            <IconImage alt={'Icone'} src={props.icon} onClick={props.onClickIcon} onChange={props.onChange} />
        </IconContainer>
    )
}