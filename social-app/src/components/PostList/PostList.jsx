import { memo } from 'react'
import { Alert, Stack } from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd'
import PostCard from '../PostCard/PostCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import EmptyState from '../EmptyState/EmptyState'

const PostList = memo(({ posts, loading, error, likedPosts, onLike, onShare, onDelete }) => {
    if (error) {
        return (
            <Alert severity="error" sx={{ mb: 2 }}>
                {error}
            </Alert>
        )
    }

    if (loading) {
        return <LoadingSpinner message="Loading posts..." />
    }

    if (!posts.length) {
        return (
            <EmptyState
                icon={PostAddIcon}
                title="No posts found"
                description="Create your first post with the + Create button in the sidebar."
            />
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
