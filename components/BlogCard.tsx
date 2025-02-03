import type { ContentfulBlogPost } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  post: ContentfulBlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {

    const {title, slug, thumbnail} = post.fields
    console.log(thumbnail)
    
  return (
    <Link href={'/blog/' + slug} className='w-full ' >
      <div className=" w-full flex flex-col md:flex-row text-center grayscale hover:grayscale-0 text-gray-400 hover:text-white gap-5 pb-4 items-center">
        <div>
          <Image src={'https:' + thumbnail.fields.file.url  } 
          alt="" 
          width={200}
          height={200}
          className='rounded '
          />
        </div>
        <p className='text-xl  font-semibold' >{title}</p>
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
