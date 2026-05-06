import { memo } from 'react'
import {
    Box,
    Card,
    CardContent,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'

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
                    <Tooltip title={isLiked ? "Unlike" : "Like"}>
                        <IconButton
                            size="small"
                            className={`action-btn ${isLiked ? 'liked' : ''}`}
                            onClick={handleLike}
                        >
                            {isLiked ? (
                                <FavoriteIcon fontSize="small" sx={{ color: '#ef4444' }} />
                            ) : (
                                <FavoriteBorderIcon fontSize="small" />
                            )}
                            <Typography variant="caption" sx={{ ml: 0.5 }}>
                                {isLiked ? '25' : '24'}
                            </Typography>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Comment">
                        <IconButton size="small" className="action-btn">
                            <CommentIcon fontSize="small" />
                            <Typography variant="caption" sx={{ ml: 0.5 }}>12</Typography>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Share">
                        <IconButton
                            size="small"
                            className="action-btn"
                            onClick={handleShare}
                        >
                            <ShareIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Delete post">
                        <IconButton
                            size="small"
                            className="action-btn delete-btn"
                            onClick={handleDelete}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </CardContent>
        </Card>
    )
})

PostCard.displayName = 'PostCard'

export default PostCard
