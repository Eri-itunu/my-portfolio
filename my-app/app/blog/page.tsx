import { createClient } from 'contentful';
import type { ContentfulBlogPost } from '@/types';

export default async function Blog() {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY, // Server-side environment variable
        space: process.env.CONTENTFUL_SPACE_ID, // Server-side environment variable
    });

    // Defining posts type explicitly
    let posts: ContentfulBlogPost[] = [];

    try {
        // Fetch data from Contentful
        const response = await client.getEntries<ContentfulBlogPost>({ content_type: "blogPost" });
        // @ts-ignore
        posts = response.items;
        console.dir(posts);
    } catch (error) {
        console.error("Error fetching data from Contentful:", error);
    }

    return (
        <div className='w-full flex flex-col justify-center items-center' >
            <h1 className='text-2xl font-semibold'>My Blog </h1>
            <p>A collection of my thoughts</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.sys.id}>{post.fields.title}</li>
                ))}
            </ul>
        </div>
    );
}
