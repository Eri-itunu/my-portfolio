import { createClient } from 'contentful';
import type { ContentfulBlogPost } from '@/types';
import BlogCard from '@/components/BlogCard';


  
export default async function Blog() {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY || '', // Server-side environment variable
        space: process.env.CONTENTFUL_SPACE_ID || '', // Server-side environment variable
    });

    // Defining posts type explicitly
    let posts: ContentfulBlogPost[] = [];

    try {
        // Fetch data from Contentful
        const response = await client.getEntries<ContentfulBlogPost>({ content_type: "blogPost" });
        //@ts-expect-errorts-ignore
        posts = response.items;
    
    } catch (error) {
        console.error("Error fetching data from Contentful:", error);
    }

    return (
        <div className='w-full flex flex-col justify-center items-center' >
            
            <div className='flex justify-center w-full mt-20 border-t border-white p-4' >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {posts.map((post) => (
                        <BlogCard  key ={post.sys.id} post = {post} />
                    ))}
                   
                </div>
            </div>
            <ul>
                
            </ul>
        </div>
    );
}
