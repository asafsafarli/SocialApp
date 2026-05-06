import { memo } from 'react'
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'
import MessageBubble from '../MessageBubble/MessageBubble'

const ChatBox = memo(({
    open,
    onClose,
    messages,
    message,
    onMessageChange,
    onSendMessage
}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSendMessage()
        }
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            className="chat-drawer"
            classes={{ paper: 'chat-drawer-paper' }}
        >
            <Box className="chat-container">
                <Box className="chat-header">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src="https://i.pravatar.cc/150?img=47" sx={{ width: 40, height: 40 }} />
                        <Box>
                            <Typography variant="subtitle1" fontWeight={600}>Sarah Johnson</Typography>
                            <Typography variant="caption" className="chat-status">Active now</Typography>
                        </Box>
                    </Stack>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider />

                <Box className="chat-messages">
                    {messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} isMe={msg.isMe} />
                    ))}
                </Box>

                <Divider />

                <Box className="chat-input">
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => onMessageChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="chat-textfield"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={onSendMessage}
                                        disabled={!message.trim()}
                                        className="send-btn"
                                    >
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Drawer>
    )
})

ChatBox.displayName = 'ChatBox'

export default ChatBox
