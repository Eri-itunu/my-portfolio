import Image from "next/image";
import styles from './styles/Home.module.css'
export default function Home() {
  return (
    <div className=" text-white  w-full border border-blue-600" >
      
      <div className="text-left  pb-12 pt-12  md:pb-20 md:pt-36 flex flex-col md:flex-row justify-center" >
        
        <div className="w-1/2 px-12 flex flex-col gap-6">
          <h1 className="text-5xl font-semibold flex gap-2 items-center" >
            <div className={styles.pulser}></div>
            Hi, I'm Eriitunu Adesioye
          </h1>
          <h2 className="text-xl w-3/4 text-gray-400" >I am a software engineer mostly building products on the frontend with a love for beautiful     desings, animations and randomly SEO
          </h2>
        </div>

        <div className="w-1/2 ">
            A picture or a rotating image
            {/* <svg width="75" height="62" viewBox="0 0 75 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-9 hidden sm:block"><path d="M1 1C6.24431 1.21626 11.5365 2.05428 16.6516 3.13955C28.7596 5.70848 41.2898 9.45859 51.3287 17.0631C61.1747 24.5214 66.3737 34.4703 69.1034 46.2597C70.3557 51.6681 70.3959 56.1136 70.6176 61.434" stroke="#D4D4D4" stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></path><path d="M63 57.185C65.135 58.2982 67.2076 59.4555 69.2541 60.7235C70.1813 61.2979 70.997 62.1916 71.624 60.9045C72.5057 59.0948 73.0026 57.3294 74.5536 56" stroke="#D4D4D4" stroke-width="0.5" stroke-linecap="round"></path></svg> */}


        </div>
      </div>

    </div>
  );
}
