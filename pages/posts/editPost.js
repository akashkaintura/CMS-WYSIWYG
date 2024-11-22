import React, { useState, useEffect } from 'react';
import WYSIWYGEditor from '../../components/WYSIWYGEditor';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const EditPost = ({ postId }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState();

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`/api/posts/${postId}`);
                setTitle(response.data.title);
                setContent(JSON.parse(response.data.content));
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        }
        fetchPost();
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/posts/${postId}`, {
                title,
                content: JSON.stringify(content),
            });
            alert('Post updated successfully!');
        } catch (error) {
            console.error('Failed to update post:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h1" gutterBottom>
                Edit Post
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
                <WYSIWYGEditor
                    value={
                        content || [
                            { type: 'paragraph', children: [{ text: 'Loading content...' }] },
                        ]
                    }
                    onChange={setContent}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Update Post
                </Button>
            </form>
        </Container>
    );
};

export default EditPost;
