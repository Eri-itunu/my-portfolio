import { createClient } from 'contentful';
import type { ContentfulBlogPost } from '@/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
type BlogPageProps = {
  params: {
    slug: string;
  };
};

const client = createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!, // Ensure non-null with '!'
  space: process.env.CONTENTFUL_SPACE_ID!,
});

// Generate static paths
export async function generateStaticParams() {
  const response = await client.getEntries<ContentfulBlogPost>({ content_type: 'blogPost' });

  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export default async function Page({ params }: BlogPageProps) {
  const { items } = await client.getEntries<ContentfulBlogPost>({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  const blogPost = items[0];
  const {title, blogContent } = blogPost.fields

  if (!blogPost) {
    return <h1>Blog Post Not Found</h1>;
  }

  return (
    <div className='w-full flex flex-col justify-center items-center' >
        <h1 className='text-2xl font-semibold'>{title} </h1>
    
        <div className='border-t border-white container mx-auto flex justify-center items-center'>
            <div className='px-12 flex mt-10 flex-col '>
              {documentToReactComponents(blogContent)}
            </div>
        </div>
        <ul>
            
        </ul>
    </div>
    
  );
}
