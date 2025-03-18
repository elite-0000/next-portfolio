import React, { useState } from "react";

import TechStyles from "../styles/techns.module.css";

import Technologie from "./technologie";

const Technologies = () => {
  const [tech, setTech] = useState([
    {
      id: "1",
      tech: "fas fa-video",
      title: "Streaming Solutions",
      para: "Expert in Audio/Video streaming, WebRTC, Asterisk, VoIP, and Telephony integration",
    },
    {
      id: "2",
      tech: "fas fa-code",
      title: "Full Stack Development",
      para: "Proficient in MERN stack, Python/Django, Flask, and API integration with Twilio & Plivo",
    },
    {
      id: "3",
      tech: "fas fa-mobile-alt",
      title: "Mobile & IoT",
      para: "Experience in BLE/Pedometer Sensors, iOS/Android platforms, and cross-platform solutions",
    },
    {
      id: "4",
      tech: "fas fa-video",
      title: "Video Streaming",
      para: "Specialized in live streaming, video conferencing, RTMP/HLS protocols, and media server implementation",
    }
  ]);

  return (
    <div className={TechStyles.technologies} id="technologies">
      <h1>Technologies</h1>
      <p>
        I specialize in a wide range of technologies, from real-time communication systems to blockchain solutions,
        with a focus on delivering scalable and robust applications.
      </p>

      <div className={TechStyles.techgroup}>
        {tech.map((t) => {
          return (
            <Technologie
              title={t.title}
              para={t.para}
              tech={t.tech}
              key={t.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
