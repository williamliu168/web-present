export const GradientBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-20 -left-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" 
      style={{ animationDuration: '20s' }} />
    <div className="absolute -top-20 -right-20 h-[35rem] w-[35rem] rounded-full bg-gradient-to-bl from-cyan-400/20 to-green-500/20 blur-3xl animate-pulse"
      style={{ animationDuration: '25s' }} />
    <div className="absolute -bottom-20 -left-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-blue-400/20 to-emerald-500/20 blur-3xl animate-pulse"
      style={{ animationDuration: '30s' }} />
    <div className="absolute -bottom-20 -right-20 h-[45rem] w-[45rem] rounded-full bg-gradient-to-tl from-indigo-500/20 to-teal-500/20 blur-3xl animate-pulse"
      style={{ animationDuration: '35s' }} />
  </div>
);