import React from 'react'

import { motion, useTransform, MotionValue } from 'motion/react';
type projectData = {
    title: string;
    link: string;
    description: string;
    technologies: string[];
    features: string[];
    role: string;
    year: number;


}
type projectsProps = {
    data: projectData;
    index: number;
    range: number[];
    targetScale: number;
    progress: MotionValue<number>;
}
export default function StickyCard({ data, index, range, targetScale, progress }: projectsProps) {


  const scale = useTransform(progress, range, [1,targetScale])
  return (
    <div className='w-full   sticky justify-center pt-[10px] md:pt-[100px] h-screen top-0 flex gap-11 flex-col items-center' >
     <div className='w-[80%]  px-4' >
      <h1 className='mb-12 text-3xl text-left ' > {index === 0 ? 'Projects' : ''}</h1>
     </div>
        <motion.div
          style={{
            scale,
            top: `calc(-10% + ${index * 25}px)`,
          }}
          className="rounded-[25px] bg-white p-4 border relative top-[-1%] shadow-lg 
                    w-[90%] sm:w-[80%] md:w-[700px] lg:w-[900px] 
                    h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
        >
          <p className="text-black text-lg sm:text-xl md:text-2xl">{data.title}</p>
        </motion.div>

    </div>
  )
}
