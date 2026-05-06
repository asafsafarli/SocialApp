import { memo } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

const UserAvatar = memo(({
    src,
    alt = 'User',
    size = 40,
    showName = false,
    name = '',
    status = null // 'online' | 'offline' | 'away'
}) => {
    const getStatusColor = () => {
        switch (status) {
            case 'online': return '#10b981'
            case 'away': return '#f59e0b'
            case 'offline': return '#94a3b8'
            default: return null
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ position: 'relative' }}>
                <Avatar
                    src={src}
                    alt={alt}
                    sx={{ width: size, height: size }}
                />
                {status && (
                    <Box
                        className={`status-indicator ${status}`}
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: size > 40 ? 14 : 12,
                            height: size > 40 ? 14 : 12,
                            borderRadius: '50%',
                            border: '2px solid white',
                            backgroundColor: getStatusColor()
                        }}
                    />
                )}
            </Box>
            {showName && name && (
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {name}
                </Typography>
            )}
        </Box>
    )
})

UserAvatar.displayName = 'UserAvatar'

export default UserAvatar
