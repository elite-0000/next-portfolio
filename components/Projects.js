import ProjectStyles from "../styles/projects.module.css";
import Link from 'next/link';

import Image from "next/image";
import BackgroundAnimation from "./Background";
import BackgroundAnimation2 from "./Background2";

const Projects = () => {

  const handleDemo = (projectId) => {
    const demoUrls = {
      'video-streaming': 'https://github.com/yourusername/video-streaming-platform',
      'voip': 'https://github.com/yourusername/voip-solution',
      'health': 'https://github.com/yourusername/health-monitoring',
      'video-analytics': 'https://github.com/yourusername/video-analytics-platform'
    };
    window.open(demoUrls[projectId], '_blank');
  };

  const handleDetails = (projectId) => {
    // You can either navigate to a details page
    window.location.href = `/projects/${projectId}`;
    // Or implement a modal solution
  };

  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>

      <div className={ProjectStyles.cardgroup}>
        <div className="card card1">
          <Image
            src="/1.png"
            alt="Video Streaming Platform"
            width={500}
            height={300}
          />
          <h1>Video Streaming Platform</h1>
          <hr />
          <p>
            A robust video streaming platform built with WebRTC and Node.js, featuring
            real-time communication, low-latency streaming, and adaptive bitrate
            technology. Supports thousands of concurrent users with high-quality
            video delivery.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button onClick={() => handleDemo('video-streaming')}>Demo</button>
            <Link href={`/projects/video-streaming`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/2.png"
            alt="VoIP Solution"
            width={500}
            height={300}
          />
          <h1>Enterprise VoIP Solution</h1>
          <hr />
          <p>
            Complete VoIP solution using Asterisk and Twilio integration. Features
            include call routing, IVR system, call recording, and analytics dashboard.
            Handles over 10,000 daily calls with 99.9% uptime.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button onClick={() => handleDemo('voip')}>Demo</button>
            <Link href={`/projects/voip`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/3.jpg"
            alt="Health Monitoring App"
            width={500}
            height={300}
          />
          <h1>Health Monitoring System</h1>
          <hr />
          <p>
            IoT-based health monitoring system using BLE sensors and mobile integration.
            Built with React Native and Django, featuring real-time health metrics,
            data visualization, and emergency alert system.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button onClick={() => handleDemo('health')}>Demo</button>
            <Link href={`/projects/health`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/4.jpg"
            alt="Video Analytics Platform"
            width={500}
            height={300}
          />
          <h1>Video Analytics Platform</h1>
          <hr />
          <p>
            Advanced video analytics platform using AI/ML for content analysis,
            featuring automated content moderation, object detection, and sentiment
            analysis. Processes over 1000 hours of video content daily.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button onClick={() => handleDemo('video-analytics')}>Demo</button>
            <Link href="/projects/video-analytics">
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
      <BackgroundAnimation2 />
    </div>
  );
};

export default Projects;
