'use client'

import { motion, useScroll } from "motion/react";
import {projects} from "@/app/data/projects";
import { experience } from "../data/experience";
import StickyCard from "@/components/StickyCard";
import { useRef } from "react";
import { useEffect, useState } from "react";
import type { ContentfulBlogPost } from "@/types";
import BlogCard from "@/components/BlogCard";
import { Twitter,Linkedin, Instagram } from 'lucide-react';

export default function Home() {

  const [posts, setPosts] = useState<ContentfulBlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch("/api/blog"); // Fetch from an API route
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);
  
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <div className="">

      {/* Navbar */}
      <div className="flex w-full px-2 items-center md:px-10 mt-8 justify-between" >
        <h1 className="text-xl font-bold" >
          E.A.
        </h1>

        <div>
          <ul className=" hidden md:flex gap-4">
            <li>About</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>

      {/* Animate name */}
      <div className="flex flex-col justify-center md:items-center items-start h-[50vh] md:h-[80vh]  ">
        

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
             className="text-white flex flex-col gap-2 w-full items-end justify-start md:justify-end "
          > 
            <div className="flex items-end">
              <p className="hidden text-[20px] md:block" >A software engineer with 3 years of experience</p>
              <h1 className="font-extrabold leading-none text-[8vh] md:text-[25vh]  text-right w-full pr-2 md:pr-12">
                Eriitunu
              </h1>
            </div>
            {/* <h1 className="font-normal leading-none text-[25vh]  text-right w-full pr-4">
              Eriitunu
            </h1> */}
          </motion.div>

          {/* Doe */}
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white font-extrabold leading-none text-[8vh] md:text-[25vh] text-left w-full pl-2 md:pl-12"
          >
            Adesioye
          </motion.h1>
          <p className="block text-sm w-full px-2 md:hidden" >A software engineer with 3 years of experience</p>

      </div>

      {/* Projects Cards */}
      <div ref={container} className="mt-0  md:mt-210  mb-[50px] md:mb-[300px] w-full flex flex-col justify-center  items-center min-h-screen">
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            <StickyCard
              key={index}
              index={index}
              data={project}
              progress={scrollYProgress}
              range={[index * 0.2, 1]} // Adjusted range for smoother scroll
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Tech stack */}
      <div className="w-full  flex items-center flex-col gap-5  " >
        <div className=" w-[80%] mb-8 text-center md:text-left flex justify-center md:justify-start" >
          <h1 className="text-center md:text-left text-4xl">Experience</h1>
        </div>
       
        {experience.map( (exp, index) =>{
          return(
            <div key={index} className="w-[80%]  border-b flex py-6 flex-col text-center md:flex-row justify-center md:justify-between" >
              <h1 className="font-semibold text-xl md:text-3xl">
                {exp.title}
              </h1>

              <span className="text-center md:text-right flex flex-col gap-2" >
                <h1 className="text-2xl" >{exp.company}</h1>
                <h2 className="opacity-30" > {exp.start} - {exp.end} </h2>
              </span>
            </div>
          )
        })}
      </div>

      {/* Blog posts */}
      <div className="w-full mt-[150px] flex items-center flex-col gap-5  text-left" >
      <div className=" w-[80%] mb-8 text-left flex justify-start" >
          <h1 className="text-left text-4xl">Blog</h1>
        </div>

        <div className="flex justify-center w-full  p-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="border-b w-[80%] ">
                        {posts.map((post) => (
                            <BlogCard key={post.sys.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
      </div>

      {/* footer */}

      <div className="w-full flex items-center justify-center mt-[100px] mb-[100px] " >
        <div className="w-[80%] " >
            <div className="flex justify-between border-b py-2" > 
              <h3 className="font-bold text-2xl" >E.A.</h3>
              <div className="flex gap-2 items-center ">
                <Twitter />
                <Linkedin/>
                <Instagram/>
              </div>
            </div>

           
        </div>

      </div>
      
    </div>
  );
}
