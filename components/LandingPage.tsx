import React from 'react';
import { Gamepad2, ArrowRight, Github, ExternalLink, Mail } from 'lucide-react';

const LandingPage: React.FC = () => {
  const doomLink = "https://audiard-jerome.github.io/doom/";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Animation Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main Card Content */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-indigo-200 mb-4">
                Jérôme Audiard
              </h1>
              <p className="text-slate-400 text-lg font-light max-w-md mx-auto md:mx-0">
                Bienvenue sur mon espace personnel.
              </p>
            </div>
            
            {/* Decorative Avatar/Icon Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 shadow-xl">
                <span className="text-3xl font-bold text-white">JA</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

          {/* Main Feature: DOOM Link */}
          <div className="flex flex-col items-center justify-center">
            <a 
              href={doomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-8 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-700 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] w-full md:w-auto min-w-[300px] justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              
              <div className="p-3 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                <Gamepad2 className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300" />
              </div>
              
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Projet en vedette</span>
                <span className="text-xl font-semibold text-white flex items-center gap-2">
                  Doom Web Port 
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              
              <ArrowRight className="w-5 h-5 ml-auto text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            
            <p className="mt-4 text-sm text-slate-500 text-center">
              Une expérience rétro classique, portée sur le web moderne.
            </p>
          </div>

          {/* Footer Links (Optional but good for a landing page) */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-slate-600 text-sm animate-fade-in">
          &copy; {new Date().getFullYear()} Jérôme Audiard. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;