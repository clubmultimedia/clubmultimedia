import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Target,
  Star,
  Rocket,
  Gem,
  Award,
  GraduationCap,
  Lightbulb,
  Users,
  Sparkles,
} from 'lucide-react';
import infosysImage from '../assets/infosys.jpg';
import aiHackImage from '../assets/AiHack.jpg';
import ficciImage from '../assets/Ficci.jpg';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Target, number: 127, label: 'Goals Completed', color: 'text-purple-400' },
    { icon: Star, number: 45, label: 'Awards Earned', color: 'text-yellow-400' },
    { icon: Rocket, number: 89, label: 'Projects Launched', color: 'text-blue-400' },
    { icon: Gem, number: 15, label: 'Major Milestones', color: 'text-pink-400' },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Infosys Global Hackathon',
      date: 'August 2025',
      domain: 'Performance Excellence',
      contributors: ['Arvind Kumar Sahu', 'Team METAACHIEVERS'],
      image: infosysImage,
      description:
        'Recognized as the top performer for exceptional dedication and outstanding results achieved throughout the quarter.',
      color: 'from-yellow-400 to-orange-500',
    },
     {
      icon: Lightbulb,
      title: 'GEN-AI Hackathon (IIT BHUBANESHWAR',
      date: '03 July 2025',
      domain: 'AI/Ar/Vr',
      contributors: ['Bikash Bisoyi', 'Suryakanta Mahanti','Shreya Kumari'],
      image: aiHackImage,
      description:'Best Idea Pitching Award\n Best Recognition for Outstanding Impact and Creativity',
    },
    {
      icon: GraduationCap,
      title: 'FICCI BAF AWARD 2025',
      date: 'September 2025',
      domain: 'XR DEVELOPER',
      contributors: ['Arvind Kumar Sahu', 'Bikash Bisoyi', 'Suryakanta Mahanti', 'Sneha Jha', 'The Whole Multimedia Club'],
      image: ficciImage,
      description:
        'Successfully completed advanced certification program with distinction, demonstrating expertise in the field.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Lightbulb,
      title: 'Best Idea Pitching Award\n Best Recognition for Outstanding Impact and Creativity',
      date: '03 July 2025',
      domain: 'AI/Ar/Vr',
      contributors: ['Bikash Bisoyi', 'Suryakanta Mahanti','Shreya Kumari'],
      image: aiHackImage,
      description:
        'Received recognition for developing innovative solutions that improved efficiency by 40% and saved valuable resources.',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: Award,
      title: 'Unity Developer Internship ',
      date: '15th November 2025',
      domain: 'Unity Game development, Ar , Vr',
      contributors: ['Arvind Kumar Sahu'],
      image: infosysImage,
      description:
        'Recognized as the top performer for exceptional dedication and outstanding results achieved throughout the quarter.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Best Idea Pitching Award\n Best Recognition for Outstanding Impact and Creativity',
      date: '03 July 2025',
      domain: 'AI/Ar/Vr',
      contributors: ['Bikash Bisoyi', 'Suryakanta Mahanti','Shreya Kumari'],
      image: aiHackImage,
      description:
        'Received recognition for developing innovative solutions that improved efficiency by 40% and saved valuable resources.',
      color: 'from-green-400 to-teal-500',
    },
  ];

  const skills = [
    { name: 'Leadership & Management', progress: 92 },
    { name: 'Technical Expertise', progress: 88 },
    { name: 'Communication Skills', progress: 95 },
    { name: 'Problem Solving', progress: 90 },
    { name: 'Innovation & Creativity', progress: 85 },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header
          className={`text-center mt-20 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mr-3" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Achievements & Milestones
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300">
            Celebrating success and continuous growth
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900 rounded-2xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-blue-900/40 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <Icon className={`w-16 h-16 ${stat.color} mb-4 animate-bounce`} />
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 uppercase tracking-wider text-sm font-semibold text-center">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-900 rounded-3xl p-8 shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-blue-900/40 group relative overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
                  ></div>

                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-100 h-78 object-cover rounded-2xl mb-6 shadow-md mx-auto block"
                  />

                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-2 text-center">
                    📅 {achievement.date}
                  </p>
                  <p className="text-sm text-blue-400 font-semibold mb-3 text-center">
                    🌐 Domain: {achievement.domain}
                  </p>

                  <p className="text-gray-300 leading-relaxed text-center mb-4">
                    {achievement.description}
                  </p>

                  <p className="text-gray-400 text-sm text-center">
                    👥 Contributors:{' '}
                    <span className="font-semibold text-blue-400">
                      {achievement.contributors.join(', ')}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Progress Section */}
        <div
          className={`bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
            Skills Progress
          </h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-200">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-blue-400">
                    {skill.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1500 ease-out ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      width: isVisible ? `${skill.progress}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
