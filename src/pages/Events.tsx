import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, User, Calendar, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import { EVENTS, EventData } from "@/data/eventsCatalog";

// --- Sub-components ---

const FloatingDots = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gold/30 rounded-full"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: Math.random() * 0.5 + 0.2 }}
        animate={{ y: [null, Math.random() * 100 + "%"], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
      />
    ))}
  </div>
);

const EventCard = ({ event }: { event: EventData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, boxShadow: "0 20px 50px rgba(201, 163, 71, 0.25)" }}
      className="group bg-white border border-gold/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 shadow-sm relative overflow-hidden"
    >
      <div className="flex-grow z-10">
        <div className="mb-4">
          <h4 className="font-display text-2xl font-bold text-gold uppercase tracking-tight">
            {event.date.split(" (")[0]}
          </h4>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 ml-1" />
        </div>

        <h3 className="font-display text-2xl leading-tight font-bold text-[#800000] mb-6 group-hover:text-gold transition-colors">
          {event.title}
        </h3>

        <div className="space-y-3 mb-6 text-[15px] font-body text-gray-500">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-gold shrink-0 opacity-80" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>
          {event.convenor && (
            <div className="flex items-center gap-3">
              <User size={18} className="text-gold shrink-0 opacity-80" />
              <span className="line-clamp-1 font-medium">{event.convenor}</span>
            </div>
          )}
        </div>

        <p className="font-body text-[15px] text-gray-400 leading-relaxed mb-8 line-clamp-3 italic">
          "{event.description}"
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gold/5 z-10">
        <Link
          to={`/events/${event.id}`}
          className="text-gold hover:text-navy font-body font-bold text-base transition-all duration-300 flex items-center gap-2 group/btn"
        >
          Learn More
          <motion.div whileHover={{ x: 4 }} className="transition-transform">
            <ExternalLink size={16} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const TABS = ["All", "March 2026", "April 2026", "Planned Events"];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesTab = activeTab === "All" || event.month === activeTab;
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.convenor?.toLowerCase() || "").includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-body text-navy overflow-x-hidden selection:bg-gold/30">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <FloatingDots />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mb-6">
            <span className="inline-block px-4 py-1 rounded-full border border-gold/40 text-gold text-[13px] font-bold tracking-[0.4em] uppercase mb-6 font-body">
              1926 – 2026
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-4 tracking-tight relative inline-block"
            >
              Events – Shatabdi Mahotsav 2026
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent rounded-full shadow-[0_0_15px_rgba(201,163,71,0.5)]"
              />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display text-xl md:text-2xl text-gold-light italic tracking-wide max-w-2xl mx-auto opacity-80 mt-8"
            >
              Celebrating 100 Years of Excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Sticky Filters Bar */}
      <div className="sticky top-20 z-40 bg-[#f8f5ee]/95 backdrop-blur-md border-b border-gold/10 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-1 bg-navy/5 p-1 rounded-full overflow-x-auto max-w-full">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${
                    activeTab === tab ? "bg-navy text-gold shadow-lg" : "text-navy/40 hover:text-navy hover:bg-gold/10"
                  }`}
                >
                  {tab === "All" ? "All Events" : tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                <input 
                  type="text"
                  placeholder="Search events, venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-2.5 bg-white border border-gold/20 rounded-full text-sm focus:outline-none"
                />
              </div>
              <Link to="/registration" className="px-10 py-2.5 bg-navy text-gold hover:bg-navy-light font-bold rounded-full transition-all shadow-md flex items-center gap-2 text-sm border border-gold/20">
                Register Now
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Event Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <SectionTitle 
            title="Calendar of Celebrations"
            subtitle="Explore our centenary events across campuses, featuring global conclaves, cultural festivals, and departmental celebrations."
          />

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div 
                  key={event.id} 
                  layout 
                  initial={{ opacity: 0, x: -30, y: 20 }} 
                  animate={{ opacity: 1, x: 0, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.05 
                  }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <div className="h-40 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default Events;
