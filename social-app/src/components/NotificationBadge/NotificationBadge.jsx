import { memo } from 'react'
import { IconButton, Badge, Tooltip } from '@mui/material'

const NotificationBadge = memo(({
    icon: Icon,
    count = 0,
    onClick,
    tooltip = '',
    color = 'error',
    max = 99
}) => {
    return (
        <Tooltip title={tooltip}>
            <IconButton onClick={onClick}>
                <Badge badgeContent={count} color={color} max={max}>
                    <Icon />
                </Badge>
            </IconButton>
        </Tooltip>
    )
})

NotificationBadge.displayName = 'NotificationBadge'

export default NotificationBadge
