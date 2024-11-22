import prisma from "../../lib/prisma";

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: {
                ...post,
                content: JSON.parse(post.content),
            },
        },
    };
}

const PostPreview = ({ post }) => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>{post.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: post.content,
                }}


            />
        </div>
    );
};



export default PostPreview;
