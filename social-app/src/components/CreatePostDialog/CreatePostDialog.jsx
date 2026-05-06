import { memo } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material'

const CreatePostDialog = memo(({
    open,
    onClose,
    title,
    body,
    onTitleChange,
    onBodyChange,
    onSubmit,
    creating
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>Create Post</DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(event) => onTitleChange(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Body"
                        value={body}
                        onChange={(event) => onBodyChange(event.target.value)}
                        multiline
                        minRows={5}
                        fullWidth
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={onSubmit}
                    disabled={creating}
                >
                    {creating ? 'Creating...' : 'Create Post'}
                </Button>
            </DialogActions>
        </Dialog>
    )
})

CreatePostDialog.displayName = 'CreatePostDialog'

export default CreatePostDialog
