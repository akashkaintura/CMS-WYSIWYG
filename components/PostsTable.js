import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const PostsTable = ({ posts, onDelete }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Slug</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.slug}</TableCell>
                        <TableCell>
                            <Button color="primary">Edit</Button>
                            <Button color="error" onClick={() => onDelete(post.id)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default PostsTable;
