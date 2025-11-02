import React,{useState} from 'react'

const Contact = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
 
   const projects = [
     {
       title: "AR College Guide",
       builtBy: "Arvind Kumar Sahu & Team",
       domain: "Augmented Reality, Education",
       stack: "Unity, AR Foundation, C#, Firebase",
       uniqueness:
         "Provides real-time AR navigation and 3D college view with interactive info points.",
       description:
         "The AR College Guide is an interactive campus navigation system that helps students explore college buildings, labs, and facilities through AR. It integrates real-time navigation, 3D model visualization, and information pop-ups. This enhances onboarding experiences and helps new students get familiar with the campus easily.",
       img: "src/assets/Event1.jpeg",
     },
     {
       title: "VR Herbal Garden",
       builtBy: "Arvind Kumar Sahu & Team",
       domain: "Virtual Reality, Healthcare",
       stack: "Unity, Oculus SDK, Blender, C#",
       uniqueness:
         "Immersive VR experience with AI herbal guide explaining medicinal plant uses.",
       description:
         "The VR Herbal Garden lets users virtually explore various medicinal plants, with 3D visuals and AI narration. It combines educational immersion and healthcare awareness by simulating real-world botanical environments using VR interaction systems.",
       img: "src/assets/Vr.jpg",
     },
     {
       title: "AI Driving Companion",
       builtBy: "Arvind Kumar Sahu & Team",
       domain: "AI, AR in Automotive",
       stack: "Unity, OpenAI API, ARCore, Python",
       uniqueness:
         "AR-driven real-time driving assistant with voice-enabled AI companion.",
       description:
         "This AI-powered AR driving assistant offers real-time road guidance, obstacle alerts, and smart interaction via an AI voice companion. It’s designed to enhance driver awareness and reduce cognitive load while providing immersive road overlays in AR.",
       img: "src/assets/Ar.jpg",
     },
   ];
 
   return (
     <>
       {/* === Background Effects === */}
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
           PROJECTS
         </h1>
 
         {/* Section Title */}
         <div className="text-center mb-16 mt-12">
           <h2 className="text-3xl md:text-4xl font-semibold text-white">
             Innovative Projects 🚀
           </h2>
           <div className="mt-6 flex justify-center">
             <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
           </div>
         </div>
 
         {/* === Project Cards === */}
         <div className="container mx-auto flex flex-col space-y-24">
           {projects.map((project, index) => (
             <div
               key={index}
               onClick={() =>
                 setFlippedIndex(flippedIndex === index ? null : index)
               }
               className={`relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/70 to-black/90 shadow-2xl backdrop-blur-md p-6 transition-transform duration-500 hover:scale-[1.02] hover:shadow-blue-500/20 cursor-pointer ${
                 index % 2 === 1 ? "md:flex-row-reverse" : ""
               }`}
             >
               {/* === FLIP CONTAINER === */}
               <div className="relative w-full md:w-full h-[26rem] perspective">
                 <div
                   className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${
                     flippedIndex === index ? "rotate-y-180" : ""
                   }`}
                 >
                   {/* === FRONT SIDE === */}
                   <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between backface-hidden">
                     {/* Image */}
                     <div className="w-full md:w-3/5 flex justify-center">
                       <img
                         src={project.img}
                         alt={project.title}
                         className="w-full md:w-[90%] h-[24rem] object-cover rounded-2xl"
                       />
                     </div>
 
                     {/* Text Info */}
                     <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-3 p-4">
                       <h2 className="text-2xl font-semibold">
                         {project.title}
                       </h2>
                       <p className="text-blue-400 text-sm">
                         Built By: {project.builtBy}
                       </p>
                       <p className="text-gray-300 text-sm">
                         Domain: {project.domain}
                       </p>
                       <p className="text-gray-300 text-sm">
                         Stack: {project.stack}
                       </p>
                       <p className="text-gray-400 text-sm">
                         {project.uniqueness}
                       </p>
                       <p className="text-gray-500 text-xs mt-2 italic">
                         (Click to see more)
                       </p>
                     </div>
                   </div>
 
                   {/* === BACK SIDE === */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-950/60 to-black/90 rounded-2xl rotate-y-180 backface-hidden border border-gray-700">
                     <h3 className="text-xl font-semibold mb-3">
                       {project.title}
                     </h3>
                     <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                       {project.description}
                     </p>
                     <p className="text-gray-500 text-xs mt-4 italic">
                       (Click again to go back)
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
 
       {/* === Extra CSS for Flip Animation === */}
       <style>{`
         .perspective {
           perspective: 1200px;
         }
         .transform-style-preserve-3d {
           transform-style: preserve-3d;
         }
         .backface-hidden {
           backface-visibility: hidden;
         }
         .rotate-y-180 {
           transform: rotateY(180deg);
         }
       `}</style>
     </>
   );
 };
export default Contact;