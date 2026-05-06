import { memo } from 'react'
import { Box, Typography } from '@mui/material'

const StatCard = memo(({ label, value, icon: Icon, color = '#6366f1' }) => {
    return (
        <Box className="stat-card">
            {Icon && (
                <Box className="stat-icon" sx={{ backgroundColor: `${color}15` }}>
                    <Icon sx={{ color, fontSize: 24 }} />
                </Box>
            )}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h5" className="stat-value">
                    {value}
                </Typography>
                <Typography variant="body2" className="stat-label">
                    {label}
                </Typography>
            </Box>
        </Box>
    )
})

StatCard.displayName = 'StatCard'

export default StatCard
