import { memo } from 'react'
import { IconButton, Tooltip, Typography } from '@mui/material'

const ActionButton = memo(({
    icon: Icon,
    label,
    count,
    onClick,
    active = false,
    activeColor = '#ef4444',
    className = ''
}) => {
    return (
        <Tooltip title={label}>
            <IconButton
                size="small"
                onClick={onClick}
                className={`action-btn ${active ? 'active' : ''} ${className}`}
            >
                <Icon
                    fontSize="small"
                    sx={{ color: active ? activeColor : 'inherit' }}
                />
                {count !== undefined && (
                    <Typography variant="caption" sx={{ ml: 0.5 }}>
                        {count}
                    </Typography>
                )}
            </IconButton>
        </Tooltip>
    )
})

ActionButton.displayName = 'ActionButton'

export default ActionButton
