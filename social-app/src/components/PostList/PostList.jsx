import { memo } from 'react'
import {
    Alert,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Stack,
    Typography,
} from '@mui/material'
import PostCard from '../PostCard/PostCard'

const PostList = memo(({ posts, loading, error, likedPosts, onLike, onShare, onDelete }) => {
    if (error) {
        return (
            <Alert severity="error" sx={{ mb: 2 }}>
                {error}
            </Alert>
        )
    }

    if (loading) {
        return (
            <Box className="loading-wrap">
                <CircularProgress />
            </Box>
        )
    }

    if (!posts.length) {
        return (
            <Card className="post-card empty-card">
                <CardContent>
                    <Typography variant="body1">
                        No posts found. Create one with the + Create button.
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    return (
        <Stack spacing={2}>
            {posts.map((post) => (
                <PostCard
                    key={post.id ?? `${post.title}-${post.body}`}
                    post={post}
                    isLiked={likedPosts?.has(post.id)}
                    onLike={onLike}
                    onShare={onShare}
                    onDelete={onDelete}
                />
            ))}
        </Stack>
    )
})

PostList.displayName = 'PostList'

export default PostList
