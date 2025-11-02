import React from "react";
import "./global.css";
import vmp from "../assets/vmp.mp4";
import cm from "../assets/CM.png";
import vr from '../assets/vr.jpg';
import vide1 from '../assets/vide1.mp4';
import vrgif from '../assets/vr.gif';
import blend from '../assets/Blend.jpg';
import amin from '../assets/Anim.jpg';
import ar from '../assets/Ar.jpg';
import game from '../assets/game.jpg'; 
import vfg from '../assets/Vfx.jpg';
import ps from '../assets/Ps.jpg';
import ai from '../assets/Ai.jpg';
import ieessh from '../assets/IEESSH.JPG';
import aihack from '../assets/AiHack.jpg';
import ieep from '../assets/IEEP.jpg';
import gni from '../assets/Gni.jpg';
import dayzero from '../assets/DayZero.jpg';
import vision from '../assets/Vision.jpg';
import infosye from '../assets/infosys.jpg';
import santosh from '../assets/santoshsir.jpg';
import ujlesh from '../assets/ujleshsir.jpg';

const Home = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <div className="relative min-h-screen text-white overflow-hidden bg-black">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={vmp}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          {/* Club Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={cm}
              alt="Club Logo"
              className="w-64 md:w-80 drop-shadow-xl"
            />
          </div>

          <p className="text-2xl md:text-3xl text-blue-200/90 font-light tracking-wide">
            Your community, your events, your team
          </p>

          {/* Club VR GIF */}
          <div className="mt-10 flex justify-center">
            <img
              src={vrgif}
              alt="VR Animation"
              className="rounded-2xl w-80 md:w-[32rem] lg:w-[40rem] object-cover"
            />
          </div>

          {/* Decorative line */}
          <div className="mt-16 flex justify-center gap-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Decorative Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* === MULTIMEDIA SECTION === */}
      <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-8 py-24">
        {/* Background Text */}
        <h1
          className="absolute top-28 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-transparent select-none tracking-widest"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.27)" }}
        >
          MULTIMEDIA
        </h1>

        {/* Main Content */}
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-between mt-48 gap-10 z-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
              We Paint Your Thoughts
            </h2>

            <div className="mt-10 flex justify-center">
              <video
                src={vide1}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-70 md:w-[32rem] lg:w-[40rem]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg space-y-6">
            <p>
              Entitled as{" "}
              <span className="text-white font-semibold">'Multimedia'</span>, our
              club is a creative hub that bridges the gap between technology and
              imagination. We specialize in{" "}
              <span className="text-white font-semibold">
                Augmented Reality (AR), Virtual Reality (VR), Game Development,
                3D Modelling, Animation, and Visual Effects
              </span>
              , nurturing innovation through real-world applications of immersive
              and interactive technologies.
            </p>

            <p>
              Our members have shown{" "}
              <span className="text-white font-semibold">
                exceptional talent and technical excellence
              </span>
              , earning accolades across hackathons, national events, and
              inter-college competitions. We build{" "}
              <span className="text-white font-semibold">
                cutting-edge AR/VR projects, realistic 3D environments, and
                AI-powered virtual experiences
              </span>{" "}
              that merge creativity and engineering precision.
            </p>

            <p>
              We believe every idea can create impact — through teamwork,
              mentorship, and tools, we transform ideas into visual realities.
              The{" "}
              <span className="text-white font-semibold">Multimedia Club</span>{" "}
              inspires students to explore beyond boundaries, combining art,
              design, and technology to shape the future of immersive experiences.
            </p>

            {/* Leadership */}
            <div className="pt-6 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Club Leadership
              </h3>
              <div className="mt-3 space-y-1 text-gray-300">
                <p>
                  <span className="font-medium text-white">Club Advisor:</span>{" "}
                  Dr. Santosh Kumar Kar
                </p>
                <p>
                  <span className="font-medium text-white">President:</span>{" "}
                  Arvind Kumar Sahu
                </p>
                <p>
                  <span className="font-medium text-white">Vice President:</span>{" "}
                  Nilakanth Sahoo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === DOMAINS SECTION === */}
        <div className="mt-40 text-center relative">
          <h1 className="text-[10vw] font-black text-gray-400/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
            DOMAINS
          </h1>
          <p className="relative text-2xl md:text-3xl font-semibold text-white">
            An Insight of Our Versatile <br /> Domains
          </p>
        </div>

        {/* Domains Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
          {[
            { title: "3-D Modelling", img: blend },
            { title: "Animation", img: amin },
            { title: "Game Development", img: game },
            { title: "Augmented Reality", img: ar },
            { title: "Virtual Reality", img: vr },
            { title: "VFX", img: vfg },
            { title: "Video Editing", img: ps },
            { title: "Artificial Intelligence", img: ai },
          ].map((domain, index) => (
            <div
              key={index}
              className="bg-black/90 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center p-6">
                <img
                  src={domain.img}
                  alt={domain.title}
                  className="w-40 h-40 object-contain mb-6"
                />
                <h2 className="text-lg font-semibold text-white">
                  {domain.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* === ACHIEVEMENTS SECTION === */}
        <div className="mt-40 text-center relative">
          <h1 className="text-[10vw] font-black text-gray-400/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
            Achievements
          </h1>
          <p className="relative text-2xl md:text-3xl font-semibold text-white">
            <br /> We Don't Plan, We Achieve
          </p>
        </div>

        {/* Auto Scrolling Achievements */}
        <div className="overflow-hidden w-full mt-24 relative">
          <div className="flex gap-8 animate-scroll-right whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {[
                  { title: "IEE-SSH 2024", img: ieessh },
                  { title: "GEN-AI Hackathon", img: aihack },
                  { title: "Infosys Global Hackthon", img: infosye },
                  { title: "IEEE PROTOTYPE SHOWCASE 2024", img: ieep },
                  { title: "PROTOTYPE INNOVATION", img: ieep },
                  { title: "GNIEEE HACKATHON 2024", img: gni },
                  { title: "DAY ZERO HACKATHON 2025", img: dayzero },
                  { title: "VISIONARY HACKATHON 2024", img: vision },
                ].map((item, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="bg-black/90 min-w-[400px] rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 hover:-translate-y-2 flex-shrink-0 inline-block"
                  >
                    <div className="flex flex-col items-center p-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-80 h-80 object-contain mb-6"
                        loading="eager"
                      />
                      <h2 className="text-lg font-semibold text-white">
                        {item.title}
                      </h2>

                      
                    </div>
                  </div>
                  
                  
                ))}
              </React.Fragment>
            ))}
            <h4>Mentors </h4>
            
          </div>
<div className="min-h-screen bg-[#05051a] text-white flex flex-col items-center py-16">
  {/* === HEADING === */}
  <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r bg-white">
    Mentor
  </h1>

  {/* === CARDS ROW === */}
  <div className="flex flex-wrap justify-center items-start gap-45 w-full max-w-6xl px-6">

    {/* === Mentor 1 === */}
    <div className="flex flex-col items-center bg-[#0b0b2a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-[90%] md:w-[40%]">
      <img
        src={santosh}
        alt="Dr. Santosh Kumar Kar"
        className="w-100 h-100 object-cover rounded-full border-2 border-blue-500 shadow-md mb-4"
      />
      <h2 className="text-2xl font-semibold">Santosh Kumar Kar</h2>
      <p className="text-gray-400">Club Multimedia Mentor</p>
      <p className="text-gray-400 mt-2">Computer Science & Engineering Professor</p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/arvind-kumar-sahu-380498257/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </div>

    {/* === Mentor 2 === */}
    <div className="flex flex-col items-center bg-[#0b0b2a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-[90%] md:w-[40%]">
      <img
        src={ujlesh}
        alt="Ujlesh sir"
        className="w-100 h-100 object-cover rounded-full border-2 border-purple-500 shadow-md mb-4"
      />
      <h2 className="text-2xl font-semibold">Ujlesh Kumar</h2>
      <p className="text-gray-400">Batch: 2023 - 2027</p>
      <p className="text-gray-400 mt-2">Specialization: AR/VR Development</p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </>
  );
};

export default Home;
