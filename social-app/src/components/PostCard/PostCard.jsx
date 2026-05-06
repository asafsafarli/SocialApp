import { memo } from 'react'
import {
    Box,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import ActionButton from '../ActionButton/ActionButton'

const PostCard = memo(({ post, isLiked, onLike, onShare, onDelete }) => {
    const handleLike = () => {
        onLike?.(post.id)
    }

    const handleShare = () => {
        onShare?.(post)
    }

    const handleDelete = () => {
        onDelete?.(post.id)
    }

    return (
        <Card className="post-card">
            <CardContent>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 1 }}
                >
                    <Typography variant="h6" className="post-title">
                        {post.title}
                    </Typography>
                    <Chip size="small" label={`#${post.id ?? 'new'}`} />
                </Stack>
                <Typography variant="body1" className="post-body">
                    {post.body}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }} className="post-actions">
                    <ActionButton
                        icon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
                        label={isLiked ? "Unlike" : "Like"}
                        count={isLiked ? 25 : 24}
                        onClick={handleLike}
                        active={isLiked}
                        activeColor="#ef4444"
                        className={isLiked ? 'liked' : ''}
                    />
                    <ActionButton
                        icon={CommentIcon}
                        label="Comment"
                        count={12}
                    />
                    <ActionButton
                        icon={ShareIcon}
                        label="Share"
                        onClick={handleShare}
                    />
                    <Box sx={{ flexGrow: 1 }} />
                    <ActionButton
                        icon={DeleteIcon}
                        label="Delete post"
                        onClick={handleDelete}
                        className="delete-btn"
                    />
                </Stack>
            </CardContent>
        </Card>
    )
})

PostCard.displayName = 'PostCard'

export default PostCard
