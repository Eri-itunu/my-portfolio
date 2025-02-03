import type { ContentfulBlogPost } from '@/types';
import Link from 'next/link';

type BlogCardProps = {
  post: ContentfulBlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {

    const {title, slug, readingTime} = post.fields
    
  return (
    <Link href={'/blog/' + slug} className='w-full ' >
      <div className=" w-full flex flex-col md:flex-row text-center justify-between">
        <div>
          <p className='text-xl font-semibold' >{title}</p>
          <p >{readingTime} minute(s) </p>
        </div>
{/* 
        <span className='flex gap-2' >
            {tags.map((tag,index) => (
                <p className='border px-2 flex items-center rounded-lg '  key ={index} >{tag}</p>
            ))}
        </span> */}

        {/* <Link href={'/blog/' + slug} >Read more</Link> */}
      </div>
    </Link>
  );
}
