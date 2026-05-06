import { memo } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const QuickTipsPanel = memo(() => {
    return (
        <Card className="side-panel" elevation={0}>
            <CardContent>
                <Typography variant="h6">Quick Tips</Typography>
                <Typography variant="body2">Use search to filter instantly.</Typography>
                <Typography variant="body2">Tap + Create to publish a post.</Typography>
                <Typography variant="body2">Refresh button reloads from API.</Typography>
            </CardContent>
        </Card>
    )
})

QuickTipsPanel.displayName = 'QuickTipsPanel'

export default QuickTipsPanel
