import { motion } from 'framer-motion';
import { styles } from '../styles';
import memojiImage from '../assets/memoji.png';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm-h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Eva</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>tech enthusiast <br className='sm:block hidden'/> </p>
        </div>
      </div>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img
          src={memojiImage}
          alt='Memoji'
          className='w-96 h-96 md:w-80 md:h-80' 
          style={{
            width: '80vw', 
            height: '80vw', 
            maxWidth: '400px', 
            maxHeight: '400px', 
          }}
        />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
