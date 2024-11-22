import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import DeletePostModal from '../../components/DeletePostModal';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
                setErrorMessage("");
            } catch (error) {
                console.error('Failed to fetch posts:', error);
                setErrorMessage("Failed to fetch posts. Please try again.");
            }
        }
        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
            setErrorMessage("");
        } catch (error) {
            console.error('Failed to delete post:', error);
            setErrorMessage("Failed to delete the post. Please try again.");
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h1" gutterBottom>
                Posts
            </Typography>
            {errorMessage && (
                <Typography variant="body2" color="error" gutterBottom>
                    {errorMessage}
                </Typography>
            )}
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id} secondaryAction={
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                setPostToDelete(post.id);
                                setModalOpen(true);
                            }}
                        >
                            Delete
                        </Button>
                    }>
                        <ListItemText primary={post.title} />
                    </ListItem>
                ))}
            </List>
            <DeletePostModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={() => {
                    handleDelete(postToDelete);
                    setModalOpen(false);
                }}
            />
        </Container>
    );
};

export default Posts;
