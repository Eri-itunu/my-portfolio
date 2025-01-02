import type { ContentfulBlogPost } from '@/types';
import Link from 'next/link';

type BlogCardProps = {
  post: ContentfulBlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {

    const {title, slug, tags, readingTime} = post.fields
    
  return (
    <Link href={'/blog/' + slug} className='border border-dashed border-white  rounded-lg' >
      <div className=" hover:rotate-2 focus:rotate-2 border border-white flex flex-col gap-2 rounded-lg p-3">
        <p className='text-xl font-semibold' >{title}</p>
        <p >{readingTime} minute</p>

        <span className='flex gap-2' >
            {tags.map((tag,index) => (
                <p className='border px-2 rounded-lg '  key ={index} >{tag}</p>
            ))}
        </span>

        {/* <Link href={'/blog/' + slug} >Read more</Link> */}
      </div>
    </Link>
  );
}
