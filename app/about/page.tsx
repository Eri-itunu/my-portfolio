import Image from 'next/image';
import profilePic from '../../public/profile.jpg'

export default function Page() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">About Me</h1>

            <div className="flex flex-col md:flex-row items-start justify-center w-full mt-20 border-t border-white p-4">
                <div className="container px-4 md:px-20 mx-auto pt-12 flex flex-col md:flex-row items-start gap-8">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <Image
                            className="h-60 w-60 rounded-full"
                            src={profilePic}
                            alt="Eriitunu Adesioye"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-3/4 flex flex-col gap-8 text-lg">
                        <p>
                            Hi, I'm Eriitunu Adesioye, a passionate full-stack software engineer with a strong focus on the frontend. I thrive on building intuitive, user-centric products that make a real impact. My goal is to create tools and experiences that people genuinely love to use.
                        </p>

                        <p>
                            Currently, I'm diving deeper into React Native to enhance my skills in mobile development and expanding my expertise in SEO and DevOps. With a knack for combining technical depth and leadership, I aim to bridge gaps between development and user needs seamlessly.
                        </p>

                        <h3 className="text-xl font-semibold">My Tech Stack</h3>
                        <ul>
                            <li>
                                <span className="text-xl font-semibold">Frontend:</span> HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Next.js, Nuxt.js
                            </li>
                            <li>
                                <span className="text-xl font-semibold">Backend:</span> Node.js
                            </li>
                            <li>
                                <span className="text-xl font-semibold">Other skills:</span> SEO, DevOps, and team leadership
                            </li>
                        </ul>

                        <p>
                            Outside of coding, I'm a huge fan of the NFL and enjoy playing pool. Like many techies, I’m also an anime enthusiast who loves diving into compelling stories and epic battles.
                        </p>

                        <p>
                            Currently, I work as a frontend developer, and I'm continuously evolving my craft to stay ahead in this dynamic industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
