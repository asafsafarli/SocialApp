import { memo } from 'react'
import { Box, Avatar, Typography } from '@mui/material'

const MessageBubble = memo(({ message, isMe }) => {
    return (
        <Box className={`message-item ${isMe ? 'my-message' : ''}`}>
            {!isMe && (
                <Avatar src={message.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
            )}
            <Box className="message-content">
                {!isMe && (
                    <Typography variant="caption" className="message-user">
                        {message.user}
                    </Typography>
                )}
                <Typography variant="body2" className="message-text">
                    {message.message}
                </Typography>
                <Typography variant="caption" className="message-time">
                    {message.time}
                </Typography>
            </Box>
            {isMe && (
                <Avatar src={message.avatar} sx={{ width: 32, height: 32, ml: 1 }} />
            )}
        </Box>
    )
})

MessageBubble.displayName = 'MessageBubble'

export default MessageBubble
