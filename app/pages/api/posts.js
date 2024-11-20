import prisma from "../../../lib/prisma";
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const posts = await prisma.post.findMany();
            res.status(200).json(posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            res.status(500).json({ error: "Failed to fetch posts" });
        }
    } else if (req.method === "POST") {
        const { title, content } = req.body;

        try {
            if (!title || !content) {
                return res.status(400).json({ error: "Title and content are required" });
            }

            const slug = title.toLowerCase().replace(/ /g, "-");
            const newPost = await prisma.post.create({
                data: { title, content, slug },
            });

            // Simulate sending a webhook (optional)
            try {
                await axios.post("https://example.com/webhook", {
                    event: "new_post",
                    data: newPost,
                });
            } catch (webhookError) {
                console.error("Failed to send webhook:", webhookError);
            }

            res.status(201).json(newPost);
        } catch (error) {
            console.error("Failed to create post:", error);
            res.status(500).json({ error: "Failed to create post" });
        }
    } else if (req.method === "DELETE") {
        const { id } = req.query;

        try {
            await prisma.post.delete({
                where: { id: parseInt(id) },
            });
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            console.error("Failed to delete post:", error);
            res.status(500).json({ error: "Failed to delete post" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
