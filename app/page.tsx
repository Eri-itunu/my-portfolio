import styles from './styles.module.css';

export default function Home() {
  return (
    <div className="text-white w-full container mx-auto">
      <div className="text-left pb-12 pt-12 md:pb-20 md:pt-36 flex items-center flex-col justify-center">
        <div className="text-body px-12 flex flex-col items-center justify-center gap-6">
          {/* Typewriter Effect for Name */}
          <h1 className={`text-5xl font-semibold ${styles.typewriter}`}>
            Adesioye Eriitunu
          </h1>
        </div>
         {/* Fade-in Text */}
         <div className={`${styles["fade-in-up"]} mt-6 text-xl text-center px-4`}>
            I am a software engineer passionate about creating impactful products.
            
          </div>
      </div>
    </div>
  );
}
