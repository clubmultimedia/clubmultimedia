import React from "react";
import event1 from '../assets/Event1.jpeg'
import game from '../assets/game.jpg'
import ar from '../assets/Ar.jpg'
import found from '../assets/Events/FoundationDay.jpeg'

const Event = () => {
  const events = [
    {
      title: "Foundation Day",
      date: "1st September 2025",
      description: "Celebrating the foundation of our Multimedia Club.",
      img: found,
    },
    {
      title: "Tech Innovation Expo",
      date: "15th August 2025",
      description: "A showcase of cutting-edge AR/VR technologies and immersive experiences.",
      img: event1,
    },
    
    {
      title: "Game Dev Hackathon",
      date: "22nd September 2025",
      description: "Developed thrilling 2D and VR games in a 24-hour challenge with top creators.",
      img: game,
    },
    {
      title: "AR Reality Summit",
      date: "12th October 2025",
      description: "Exploring real-world AR applications in education and real estate.",
      img: ar,
    },
  ];

  return (
    <>
      {/* === Background Glows === */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* === MAIN SECTION === */}
      <div className="relative min-h-screen bg-black text-white px-8 py-24 overflow-hidden">
        {/* Background Text */}
        <h1
          className="absolute top-10 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-transparent select-none tracking-widest"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.27)" }}
        >
          EVENTS
        </h1>

        {/* Section Title */}
        <div className="text-center mb-16 mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Latest Highlights ✨
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* === Event Cards === */}
        <div className="container mx-auto flex flex-col space-y-24">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/70 to-black/90 shadow-2xl backdrop-blur-md p-6 transition-transform duration-500 hover:scale-[1.02] hover:shadow-blue-500/20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* === IMAGE === */}
              <div className="w-full md:w-3/5 flex justify-center">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full md:w-[90%] h-[24rem] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.04] hover:brightness-110"
                />
              </div>

              {/* === TEXT === */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <h2 className="text-2xl font-semibold">{event.title}</h2>
                <p className="text-blue-400 text-sm">{event.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* === Decorative Glow === */}
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
