import { memo } from 'react'
import { Box, Typography } from '@mui/material'
import PostList from '../PostList/PostList'

const FeedSection = memo(({
    posts,
    loading,
    error,
    likedPosts,
    onLike,
    onShare,
    onDelete,
    title = 'Latest Posts'
}) => {
    return (
        <Box className="feed-center">
            <Typography variant="h4" className="feed-title">
                {title}
            </Typography>
            <PostList
                posts={posts}
                loading={loading}
                error={error}
                likedPosts={likedPosts}
                onLike={onLike}
                onShare={onShare}
                onDelete={onDelete}
            />
        </Box>
    )
})

FeedSection.displayName = 'FeedSection'

export default FeedSection
