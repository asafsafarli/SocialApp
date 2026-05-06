import { memo } from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingSpinner = memo(({ message = 'Loading...', size = 40 }) => {
    return (
        <Box className="loading-wrap">
            <CircularProgress size={size} />
            {message && (
                <Typography variant="body2" sx={{ mt: 2, color: '#64748b' }}>
                    {message}
                </Typography>
            )}
        </Box>
    )
})

LoadingSpinner.displayName = 'LoadingSpinner'

export default LoadingSpinner
