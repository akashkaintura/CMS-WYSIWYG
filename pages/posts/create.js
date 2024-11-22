import React, { useState } from 'react';
import WYSIWYGEditor from '../../components/WYSIWYGEditor';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/posts', {
                title,
                content: JSON.stringify(content),
            });
            alert('Post created successfully!');
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h1" gutterBottom>
                Create New Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    margin="normal"
                />
                <WYSIWYGEditor value={content} onChange={setContent} />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save Post
                </Button>
            </form>
        </Container>
    );
};

export default CreatePost;
