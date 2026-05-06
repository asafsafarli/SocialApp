import { memo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

const EmptyState = memo(({
    icon: Icon = InboxIcon,
    title = 'No items found',
    description,
    actionLabel,
    onAction
}) => {
    return (
        <Box className="empty-state">
            <Icon sx={{ fontSize: 64, color: '#cbd5e1', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1, color: '#475569' }}>
                {title}
            </Typography>
            {description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
            )}
            {actionLabel && onAction && (
                <Button variant="contained" onClick={onAction} sx={{ mt: 1 }}>
                    {actionLabel}
                </Button>
            )}
        </Box>
    )
})

EmptyState.displayName = 'EmptyState'

export default EmptyState
