import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, CircleDot, Clock3, Download, Globe } from "lucide-react";

const LotusSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 40 30 30 45C20 60 10 70 10 80C10 90 20 95 35 95C50 95 50 85 50 85C50 85 50 95 65 95C80 95 90 90 90 80C90 70 80 60 70 45C60 30 50 10 50 10Z" opacity="0.3" />
    <path d="M50 20C50 20 42 35 35 48C28 61 22 70 22 78C22 85 28 90 40 90C50 90 50 82 50 82C50 82 50 90 60 90C72 90 78 85 78 78C78 70 72 61 65 48C58 35 50 20 50 20Z" opacity="0.5" />
    <circle cx="50" cy="75" r="4" fill="currentColor" />
  </svg>
);

const megaSchedule = [
  {
    day: "Day 1",
    dateLabel: "6th April 2026",
    entries: [
      {
        time: "06:00 am",
        event: "Cycling Rally",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf6gccxITSfirm1OaSdyfuYqJXtLdqavir1C3cbrN_ZPTBPUA/viewform",
        brochureLink: "/downloads/Cycling_event.jpeg",
      },
      {
        time: "09:00 am",
        event: "Inauguration of Stalls",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScXztmPLzuXqWDksn2oPJ2NTKvW3mJi8txqttCRGB1f7wjrbg/viewform?usp=publish-editor",
        brochureLink: "/downloads/Stalls.jpeg",
      },
      {
        time: "10:00 am",
        event: "Tree Plantation",
        openToAll: true,
        brochureLink: "/downloads/Tree_Plantation.jpeg",
      },
      { time: "04:00 pm", event: "Music by Live Bands" },

      { time: "06:00 pm", 
        event: "Cultural Performances",
        brochureLink: "/downloads/Cultural_audition.jpeg",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUJtQXDADy7_g0G1TtsVr9YQF8p-BT3bY4Xsi8vVEZlm8Suw/viewform" },

      { time: "09:00 pm", event: "Live Concert" },
    ],
  },
  {
    day: "Day 2",
    dateLabel: "7th April 2026",
    entries: [
      {
        time: "07:00 am",
        event: "Rangoli Competition",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe7oKqjZ5LPL6qqxsrg6k0N52RDSML7YmF7X4wX1jall1FZcA/viewform?usp=publish-editor",
        brochureLink: "/downloads/Rangoli_Competition.jpeg",
      },
      { time: "04:00 pm", event: "Music by Live Bands" },
      { time: "08:30 pm", event: "Dhimsa Dance" },
      { time: "09:30 pm", 
        event: "Classical Cultural Performances",
         brochureLink: "/downloads/Cultural_audition.jpeg",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUJtQXDADy7_g0G1TtsVr9YQF8p-BT3bY4Xsi8vVEZlm8Suw/viewform" },
    ],
  },
  {
    day: "Day 3",
    dateLabel: "8th April 2026",
    entries: [
      {
        time: "06:00 am",
        event: "Walkathon",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdPLxqHMeyvM1q2_j18U1OYUHpQKXq8RQQYNcag8grsUrerGQ/viewform?usp=publish-editor",
        brochureLink: "/downloads/Walkathon.jpeg",
      },
      { time: "06:00 pm", 
        event: "Cultural Performances",
        brochureLink: "/downloads/Cultural_audition.jpeg",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUJtQXDADy7_g0G1TtsVr9YQF8p-BT3bY4Xsi8vVEZlm8Suw/viewform" },

      { time: "08:15 pm", 
        event: "Magic Show",
        brochureLink: "/downloads/Magic_Show.jpeg" },
      { time: "08:46 pm", event: "Laser Show" },
      { time: "10:30 pm", event: "DJ Night" },
    ],
  },
];

const MegaCulturalSchedule = () => {
  const navigate = useNavigate();
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = megaSchedule[activeDayIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8f5ee] font-body text-navy relative overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-10 text-[#9BAF9A]/20"
        >
          <LotusSVG className="w-44 h-44" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-36 right-0 text-[#E3B39A]/20"
        >
          <LotusSVG className="w-36 h-36" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <button
            onClick={() => navigate("/events/mega-cultural-event")}
            className="inline-flex items-center gap-2 text-[#7a5f2f] hover:text-[#8b2c2c] transition-colors font-semibold text-sm md:text-base"
          >
            <ArrowLeft size={18} /> Back to Mega Cultural Event
          </button>
          <Link
            to="/events"
            className="text-[#7a5f2f] hover:text-[#8b2c2c] text-sm font-semibold underline underline-offset-4"
          >
            Back to All Events
          </Link>
        </div>

        <section className="rounded-[2rem] border border-gold/25 bg-white/70 p-6 md:p-10 shadow-sm">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-[#7A1E1E] mb-3">View the Three Day Schedule</h1>
          <p className="text-[#6d5d49] mb-6">Mega Cultural Event | Engineering College Grounds</p>

          <div className="mb-6 border-b border-gold/30">
            <nav className="flex flex-wrap gap-2 md:gap-6" aria-label="Day switcher">
              {megaSchedule.map((day, idx) => {
                const isActive = idx === activeDayIndex;
                return (
                  <button
                    key={day.day}
                    type="button"
                    onClick={() => setActiveDayIndex(idx)}
                    className={`relative pb-3 px-1 text-sm md:text-base transition-colors ${
                      isActive ? "text-[#7A1E1E] font-semibold" : "text-[#8f7a55] hover:text-[#7A1E1E]"
                    }`}
                  >
                    <span className="font-display">{day.day}</span>
                    <span className="ml-2 font-serif text-xs md:text-sm">{day.dateLabel}</span>
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-gold transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          <motion.section
            key={activeDay.day}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-2xl border border-gold/30 bg-[#fffaf1] p-5 md:p-6 overflow-hidden"
          >
            <LotusSVG className="absolute -right-6 -top-6 w-16 h-16 text-gold/10" />
            <div className="pb-4 mb-4 border-b border-gold/25">
              <p className="font-display text-xl font-bold text-[#7A1E1E]">{activeDay.day}</p>
              <p className="font-serif text-[#896f3f] text-sm md:text-base tracking-wide">{activeDay.dateLabel}</p>
            </div>

            <ul className="space-y-4">
              {activeDay.entries.map((entry) => (
                <li key={`${activeDay.day}-${entry.time}-${entry.event}`} className="rounded-xl border border-gold/25 bg-white/80 p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] shrink-0 w-8 h-8 rounded-full border border-gold/45 bg-white flex items-center justify-center">
                      <CircleDot size={14} className="text-[#a8842d]" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a7f4b] font-semibold">Activity Name</p>
                      <p className="font-body text-[14px] md:text-[15px] text-[#5d534b] leading-snug font-semibold">{entry.event}</p>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a7f4b] font-semibold">Date</p>
                          <p className="font-serif text-sm md:text-[15px] font-semibold text-[#7a5f2f]">{activeDay.dateLabel}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a7f4b] font-semibold">Time</p>
                          <p className="font-serif text-sm md:text-[15px] font-semibold text-[#7a5f2f] flex items-center gap-2">
                            <Clock3 size={14} className="text-gold" /> {entry.time}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {"openToAll" in entry && entry.openToAll ? (
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1F44] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold/85 cursor-not-allowed"
                            disabled
                          >
                            <Globe size={14} /> Open To All
                          </button>
                        ) : entry.registrationLink ? (
                          entry.registrationLink.startsWith("http") ? (
                            <a
                              href={entry.registrationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1F44] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold hover:bg-[#102c5f] transition-colors"
                            >
                              <Globe size={14} /> Register
                            </a>
                          ) : (
                            <Link
                              to={entry.registrationLink}
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1F44] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold hover:bg-[#102c5f] transition-colors"
                            >
                              <Globe size={14} /> Register
                            </Link>
                          )
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1F44] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold/85 cursor-not-allowed"
                            disabled
                          >
                            <Globe size={14} /> Register
                          </button>
                        )}

                        {entry.brochureLink ? (
                          <a
                            href={entry.brochureLink}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#7a5f2f] hover:bg-gold hover:text-[#0A1F44] transition-colors"
                          >
                            <Download size={14} /> Download
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold/50 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#7a5f2f]/60 cursor-not-allowed"
                          >
                            <Download size={14} /> Download
                          </button>
                        )}

                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        </section>
      </div>
    </motion.div>
  );
};

export default MegaCulturalSchedule;
