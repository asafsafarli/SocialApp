import { memo } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@mui/material'

const ConfirmDialog = memo(({
    open,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'error'
}) => {
    return (
        <Dialog
            open={open}
            onClose={onCancel}
            PaperProps={{
                elevation: 0,
                className: 'confirm-dialog'
            }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onCancel} color="inherit">
                    {cancelText}
                </Button>
                <Button onClick={onConfirm} color={confirmColor} variant="contained">
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    )
})

ConfirmDialog.displayName = 'ConfirmDialog'

export default ConfirmDialog
