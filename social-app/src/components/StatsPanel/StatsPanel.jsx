import { memo } from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd'
import FilterListIcon from '@mui/icons-material/FilterList'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import StatCard from '../StatCard/StatCard'

const StatsPanel = memo(({ totalPosts, filteredPosts, totalCharacters }) => {
    return (
        <Card className="side-panel" elevation={0}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Stats</Typography>
                <Stack spacing={2}>
                    <StatCard
                        label="Total Posts"
                        value={totalPosts}
                        icon={PostAddIcon}
                        color="#6366f1"
                    />
                    <StatCard
                        label="Filtered Posts"
                        value={filteredPosts}
                        icon={FilterListIcon}
                        color="#8b5cf6"
                    />
                    <StatCard
                        label="Total Characters"
                        value={totalCharacters.toLocaleString()}
                        icon={TextFieldsIcon}
                        color="#ec4899"
                    />
                </Stack>
            </CardContent>
        </Card>
    )
})

StatsPanel.displayName = 'StatsPanel'

export default StatsPanel
