import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const DeletePostModal = ({ open, onClose, onConfirm }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent>Are you sure you want to delete this post? This action cannot be undone.</DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onConfirm} color="error">
                Delete
            </Button>
        </DialogActions>
    </Dialog>
);

export default DeletePostModal;
