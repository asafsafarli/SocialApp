import { memo } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const StatsPanel = memo(({ totalPosts, filteredPosts, totalCharacters }) => {
    return (
        <Card className="side-panel" elevation={0}>
            <CardContent>
                <Typography variant="h6">Stats</Typography>
                <Typography variant="body2">Total posts: {totalPosts}</Typography>
                <Typography variant="body2">
                    Filtered posts: {filteredPosts}
                </Typography>
                <Typography variant="body2">
                    Total characters: {totalCharacters}
                </Typography>
            </CardContent>
        </Card>
    )
})

StatsPanel.displayName = 'StatsPanel'

export default StatsPanel
