import { motion } from "framer-motion";
import { FaTelegram, FaGithub  } from "react-icons/fa";

const socialMediaLinks = [
 
  {
    name: "GitHub",
    icon: FaGithub ,
    url: "https://github.com/RosarioDiBartolo",
  },
  
  {
    name: "Telegram",
    icon:  FaTelegram  ,
    url: "https://t.me/camelCaseTillEnd",
  },
];

const variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.1, rotate: 10 },
};

const SocialsLinks = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, staggerChildren: 0.2 },
        },
      }}
      className="flex space-x-6 justify-center mt-8"
    >
      {socialMediaLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
          variants={variants}
          className="text-4xl text-stone-600 hover:text-white transition-colors duration-300"
        >
          <social.icon size={30} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialsLinks;