import BackgroundAnimation from "../components/Background";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

import React, { useEffect } from "react";

import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: { ease: "easeInOut" },
          },
        }}
      >
        <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{ scale: 1, opacity: 1, y: "0" }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{ scale: 0, opacity: 0, y: "-100vh" }}
          >
            Audio/Video Streaming Expert
          </motion.h1>
          <motion.p
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            I am an Video/Audio Streaming Expert with 9 years of experience in IT industries. I specialize in developing applications using Asterisk, VoIP, Telephony, Twilio, Plivo, Python/Django, Flask, MERN stack, WebRTC, and Blockchain technologies. My portfolio includes successful projects in Audio/Video streaming, Live Chat, BLE/Pedometer Sensors, Hotel Booking, Navigation/Map, Health & Fitness, Contact Management, and Social and E-Commerce domains. I have delivered numerous applications that are currently running flawlessly on devices worldwide.
          </motion.p>
        </div>

        <BackgroundAnimation />
      </motion.div>

      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
