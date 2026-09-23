import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          IN2901 • Team DoD
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
          DevCraft
        </h1>

        <p className="text-slate-400 text-base sm:text-lg">
          A Guided MERN Stack Learning Platform &amp; Developer Community
        </p>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left space-y-4 backdrop-blur-sm">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
            Repository Scaffolding Status
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <span className="text-emerald-400 font-bold block mb-1">✓ Frontend (Client)</span>
              <span className="text-slate-400">React + Vite + Tailwind CSS + Monaco Editor ready</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <span className="text-emerald-400 font-bold block mb-1">✓ Backend (Server)</span>
              <span className="text-slate-400">Node.js + Express.js API boilerplate ready</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Faculty of Information Technology • University of Moratuwa
        </p>
      </div>
    </div>
  )
}
