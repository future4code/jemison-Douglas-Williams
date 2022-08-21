import React from 'react'
import { IconContainer, IconImage, IconButton } from './styled'


export function EyeIcon(props) {
    return (
        <IconContainer>
            <IconButton onClick={props.onClick}>
            <IconImage alt={'Icone'} src={props.icon} onClick={props.onClickIcon} onChange={props.onChange} />
            </IconButton>
        </IconContainer>
    )
}