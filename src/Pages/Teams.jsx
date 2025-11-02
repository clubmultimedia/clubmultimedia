import React from "react";
import all from "../assets/All.jpg";
import arvind from "../assets/Arvind.jpg";
import anim from "../assets/Anim.jpg";
import game from "../assets/game.jpg";
import ar from "../assets/Ar.jpg";
import ps from "../assets/Ps.jpg";
import vr from "../assets/vr.jpg";
import vfx from "../assets/Vfx.jpg";
import ai from "../assets/Ai.jpg";

const Teams = () => {
  return (
    <>
      {/* === Decorative Glows === */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* === MULTIMEDIA SECTION === */}
      <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-8 py-24">
        {/* Background Text */}
        <h1
          className="absolute top-28 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-transparent select-none tracking-widest"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.27)" }}
        >
          MULTIMEDIAN
        </h1>
        {/* Centered Section */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-6 mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
            Forever Wala Family ❤️‍🔥
          </h2>

          <div className="mt-8 flex justify-center">
            <img
              src={all}
              alt="We Paint Your Thoughts"
              className="rounded-2xl shadow-2xl w-[90%] md:w-[45rem] lg:w-[50rem] object-cover"
            />
          </div>

          {/* Decorative line */}
          <div className="mt-16 flex justify-center gap-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>

          {/* === Team Members Grid === */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-12">
            {[
              {
                title: "Arvind Kumar Sahu",
                batch: "2022-2026",
                img: arvind,
                linkedin:
                  "https://www.linkedin.com/in/arvind-kumar-sahu-380498257/",
              },
              {
                title: "Animation",
                batch: "2022-2026",
                img: anim,
                linkedin: "https://www.linkedin.com/in/animationteam",
              },
              {
                title: "Game Development",
                batch: "2022-2026",
                img: game,
                linkedin: "https://www.linkedin.com/in/gamedevteam",
              },
              {
                title: "Augmented Reality",
                batch: "2022-2026",
                img: ar,
                linkedin: "https://www.linkedin.com/in/arteam",
              },
              {
                title: "Virtual Reality",
                batch: "2022-2026",
                img: vr,
                linkedin: "https://www.linkedin.com/in/vrteam",
              },
              {
                title: "VFX",
                batch: "2022-2026",
                img: vfx,
                linkedin: "https://www.linkedin.com/in/vfxteam",
              },
              {
                title: "Video Editing",
                batch: "2022-2026",
                img: ps,
                linkedin: "https://www.linkedin.com/in/videoeditteam",
              },
              {
                title: "Artificial Intelligence",
                batch: "2022-2026",
                img: ai,
                linkedin: "https://www.linkedin.com/in/aiteam",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-black/90 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center p-6">
                  {/* Clickable LinkedIn Image */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <img
                      src={member.img}
                      alt={member.title}
                      className="w-40 h-40 object-contain mb-4 rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>

                  {/* Name */}
                  <h2 className="text-lg font-semibold text-white text-center">
                    {member.title}
                  </h2>

                  {/* Batch */}
                  {member.batch && (
                    <p className="text-sm text-gray-400 mt-1">
                      Batch: {member.batch}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
