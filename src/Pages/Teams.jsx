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
import nilkanth from "../assets/Nilkanth.jpeg";
import Barvind from "../assets/2022/Barvind.jpeg";
import Faizan from "../assets/2022/Faizan.jpeg";
import Kunaal from "../assets/2022/kunaal.jpeg";
import Neekitha from "../assets/2022/Neekitha.jpeg";
import Priyanka from "../assets/2022/Priyanka.png";
import Sahil from "../assets/2022/sahil.jpeg";
import Sanjana from "../assets/2022/Sanjana.jpeg";
import Smritika from "../assets/2022/Smritika.jpeg";
import Soumitra from "../assets/2022/soumitra.jpeg";
import Soumyashree from "../assets/2022/Soumyashree.jpeg";
import Sushree from "../assets/2022/Sushre.jpeg";
import nagarjun from "../assets/2022/nagarjun.jpeg";
import sradha from "../assets/2022/sradha.jpeg";
import subhendu from "../assets/2022/subendu.jpeg";

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
                title: "Nilakath Sahu",
                batch: "2022-2026",
                img: nilkanth,
                linkedin: "https://www.linkedin.com/in/nilakantha-sahu-a676a9296/",
              },
              {
                title: "B Arvind",
                batch: "2022-2026",
                img: Barvind,
                linkedin: "https://www.linkedin.com/in/b-arvind/",
              },
              {
                title: "M Kunaal",
                batch: "2022-2026",
                img: Kunaal,
                linkedin: "https://www.linkedin.com/in/kunaal-manda-06276b292/",
              },
              {
                title: "B Nagarjun",
                batch: "2022-2026",
                img: nagarjun,
                linkedin: "https://www.linkedin.com/in/bnagarjun22/",
              },
              {
                title: "Anit Kumar Rout",
                batch: "2022-2026",
                img: anim,
                linkedin: "https://www.linkedin.com/in/anit-rout-a4b92433b/",
              },
              {
                title: "Shahil Khan",
                batch: "2022-2026",
                img: Sahil,
                linkedin: "https://www.linkedin.com/in/shahil-parwez-791204282/",
              },
              {
                title: "Sanjana Sahu",
                batch: "2022-2026",
                img: Sanjana,
                linkedin: "https://www.linkedin.com/in/sanjana-sahu/",
              },
              {
                title: "CH Neekitha",
                batch: "2022-2026",
                img: Neekitha,
                linkedin: "https://www.linkedin.com/in/chandra-mohanty-neekitha-komali-1314b0348/",
              },
              {
                title: "Faizan Khan",
                batch: "2022-2026",
                img: Faizan,
                linkedin: "https://www.linkedin.com/in/md-faizan-shariff-384024259/",
              },
              {
                title: "Sradha Maharana ",
                batch: "2022-2026",
                img: sradha,
                linkedin: "https://www.linkedin.com/in/sradha-maharana/",
              },
              {
                title: "Subendu",
                batch: "2022-2026",
                img: subhendu,
                linkedin: "https://www.linkedin.com/in/aiteam",
              },
              {
                title: "Soumyashree Rath",
                batch: "2022-2026",
                img: Soumyashree,
                linkedin: "https://www.linkedin.com/in/soumyashree-rath/",
              },
              {
                title: "Susree Dash",
                batch: "2022-2026",
                img: Sushree,
                linkedin: "https://www.linkedin.com/in/sushree-dash-ab34752b9/",
              },
              {
                title: "Priyanka Das",
                batch: "2022-2026",
                img: Priyanka,
                linkedin: "https://www.linkedin.com/in/priyanka-das-217353330/",
              },
              {
                title: "Soumitra Ghosh",
                batch: "2022-2026",
                img: Soumitra,
                linkedin: "https://www.linkedin.com/in/soumitra-ghosh-61878928b/",
              },
              {
                title: "Smritika Sahu",
                batch: "2022-2026",
                img: Smritika,
                linkedin: "https://www.linkedin.com/in/smritika-sahu/",
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
