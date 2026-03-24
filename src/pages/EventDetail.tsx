import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Download,
  Globe,
  Info,
  MapPin,
  PlayCircle,
  User,
} from "lucide-react";
import { EVENTS, EventData } from "@/data/eventsCatalog";

const MEGA_EVENT_SLUG = "mega-cultural-event";

const LotusSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 40 30 30 45C20 60 10 70 10 80C10 90 20 95 35 95C50 95 50 85 50 85C50 85 50 95 65 95C80 95 90 90 90 80C90 70 80 60 70 45C60 30 50 10 50 10Z" opacity="0.3" />
    <path d="M50 20C50 20 42 35 35 48C28 61 22 70 22 78C22 85 28 90 40 90C50 90 50 82 50 82C50 82 50 90 60 90C72 90 78 85 78 78C78 70 72 61 65 48C58 35 50 20 50 20Z" opacity="0.5" />
    <circle cx="50" cy="75" r="4" fill="currentColor" />
  </svg>
);

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const resolveEvent = (routeKey?: string): EventData | undefined => {
  if (!routeKey) {
    return undefined;
  }

  const numericId = Number(routeKey);
  if (!Number.isNaN(numericId)) {
    return EVENTS.find((item) => item.id === numericId);
  }

  if (routeKey === MEGA_EVENT_SLUG) {
    return EVENTS.find((item) => item.id === 19) || EVENTS.find((item) => toSlug(item.title) === routeKey);
  }

  return EVENTS.find((item) => toSlug(item.title) === routeKey);
};

type ActionType = "register" | "brochure" | "youtube";

const renderActionButton = (event: EventData, actionType: ActionType) => {
  if (actionType === "register" && !event.registrationLink) {
    return (
      <button
        type="button"
        className="w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] bg-[#0A1F44]/70 text-gold/70 cursor-not-allowed"
      >
        REGISTER FOR THIS EVENT
      </button>
    );
  }

  if (actionType === "brochure" && !event.brochureLink) {
    return (
      <button
        type="button"
        className="w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] border-2 border-gold/50 text-gold/50 cursor-not-allowed"
      >
        DOWNLOAD BROCHURE
      </button>
    );
  }

  if (actionType === "youtube" && !event.youtubeLiveLink) {
    return (
      <button
        type="button"
        className="w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] border-2 border-gold/50 text-gold/50 cursor-not-allowed"
      >
        WATCH LIVE (SOON)
      </button>
    );
  }

  if (actionType === "register" && event.registrationLink) {
    const className =
      "flex items-center justify-center gap-3 w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] bg-[#0A1F44] text-gold hover:bg-[#102c5f] transition-colors";
    return event.registrationLink.startsWith("http") ? (
      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className={className}>
        <Globe size={18} /> REGISTER FOR THIS EVENT
      </a>
    ) : (
      <Link to={event.registrationLink} className={className}>
        <Globe size={18} /> REGISTER FOR THIS EVENT
      </Link>
    );
  }

  if (actionType === "brochure" && event.brochureLink) {
    return (
      <a
        href={event.brochureLink}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] border-2 border-gold text-gold hover:bg-gold hover:text-[#0A1F44] transition-colors"
      >
        <Download size={18} /> DOWNLOAD BROCHURE
      </a>
    );
  }

  if (actionType === "youtube" && event.youtubeLiveLink) {
    return (
      <a
        href={event.youtubeLiveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-[0.14em] bg-gold text-[#0A1F44] hover:bg-gold-light transition-colors"
      >
        <PlayCircle size={18} /> WATCH LIVE
      </a>
    );
  }

  return null;
};

const MegaEventDetail = ({ event }: { event: EventData }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen bg-[#f8f5ee] font-body text-navy selection:bg-gold/30 relative overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-10 text-[#9BAF9A]/20"
        >
          <LotusSVG className="w-44 h-44" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-0 text-[#E3B39A]/20"
        >
          <LotusSVG className="w-36 h-36" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-12 text-gold/15"
        >
          <LotusSVG className="w-28 h-28" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <button
          onClick={() => navigate("/events")}
          className="inline-flex items-center gap-2 text-[#7a5f2f] hover:text-[#8b2c2c] transition-colors mb-8 font-semibold text-sm md:text-base"
        >
          <ArrowLeft size={18} /> Back to All Events
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-[2rem] border border-gold/40 bg-white/50 px-6 py-8 md:px-10 md:py-12 shadow-[0_12px_35px_rgba(128,42,42,0.08)]"
        >
          <div className="relative rounded-[1.5rem] border border-gold/50 p-6 md:p-8 bg-[#f8f5ee]/95">
            <LotusSVG className="absolute -top-3 -left-3 w-7 h-7 text-gold/65" />
            <LotusSVG className="absolute -top-3 -right-3 w-7 h-7 text-gold/65" />
            <LotusSVG className="absolute -bottom-3 -left-3 w-7 h-7 text-gold/65" />
            <LotusSVG className="absolute -bottom-3 -right-3 w-7 h-7 text-gold/65" />

            <span className="font-display text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#a07d31] block mb-4">
              Shatabdi Mahotsav 2026
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-tight font-bold text-[#7A1E1E] mb-5">
              Mega Cultural Event
            </h1>
            <p className="font-body text-base md:text-xl italic text-[#6d5d49] border-l-4 border-gold/40 pl-4 md:pl-6 max-w-4xl">
              "A graceful celebration of music, movement, and community spirit during Andhra University's centenary year."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-10 mt-10 items-start">
          <div className="xl:col-span-8 space-y-8 order-2 xl:order-1">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-[2rem] border border-gold/25 bg-white/60 p-6 md:p-10 shadow-sm"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#7A1E1E] mb-5 flex items-center gap-3">
                <Info size={22} className="text-gold" /> About This Event
              </h2>
              <div className="space-y-4 text-[15px] md:text-base text-[#5f5347] leading-relaxed">
                <p>
                  As Andhra University celebrates its historic <strong>Centenary Milestone</strong>, we are proud to present Mega Cultural Event.
                  This event is part of the Centenary Celebrations, bringing together students, faculty, and alumni to exchange ideas, showcase talent,
                  and celebrate the vibrant academic and cultural spirit of our university.
                </p>
                <p>
                  Spectacular multi-day cultural celebration featuring renowned artists and AU talent.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-[2rem] border border-gold/25 bg-white/70 p-6 md:p-10 shadow-sm"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#7A1E1E] mb-6">Detailed 3-Day Schedule</h2>

              <div className="rounded-2xl border border-gold/30 bg-[#fffaf1] p-5 md:p-6">
                <p className="font-body text-[#5d534b] mb-5">
                  Browse day-wise activities with tabs, timings, and quick action buttons on the dedicated schedule page.
                </p>
                <Link
                  to="/events/mega-cultural-event/schedule"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0A1F44] px-6 py-3 text-sm md:text-base font-bold uppercase tracking-[0.08em] text-gold hover:bg-[#102c5f] transition-colors"
                >
                  View the Three Day Schedule
                </Link>
              </div>
            </motion.section>
          </div>

          <div className="xl:col-span-4 order-1 xl:order-2">
            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="xl:sticky xl:top-32"
            >
              <div className="rounded-[2rem] bg-[#0A1F44] text-white p-6 md:p-8 border border-gold/15 shadow-2xl overflow-hidden relative">
                <LotusSVG className="absolute -top-5 -right-5 w-24 h-24 text-gold/15" />

                <h3 className="font-display text-2xl font-bold mb-7">Event Particulars</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Calendar size={21} className="text-gold" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Date</p>
                      <p className="font-display text-lg text-gold-light font-bold">6-8 Apr 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={21} className="text-gold" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Venue</p>
                      <p className="font-display text-lg font-bold">Engineering College Grounds</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <User size={21} className="text-gold" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Convenor</p>
                      <p className="font-display text-lg font-bold">Prof. Asha Emmanuel Raju</p>
                    </div>
                  </div>
                </div>

                <div className="pt-7 mt-7 border-t border-white/15 space-y-4">
                  {renderActionButton(event, "register")}
                  {renderActionButton(event, "brochure")}
                  {renderActionButton(event, "youtube")}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = resolveEvent(id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5ee] p-6 text-center">
        <LotusSVG className="w-24 h-24 text-gold/20 mb-8" />
        <h2 className="font-display text-4xl text-navy font-bold mb-4">Event Not Found</h2>
        <button
          onClick={() => navigate("/events")}
          className="px-10 py-4 bg-navy text-gold rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to All Events
        </button>
      </div>
    );
  }

  const isMegaRoute = id === MEGA_EVENT_SLUG || event.id === 19;
  if (isMegaRoute) {
    return <MegaEventDetail event={event} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="min-h-screen bg-[#f8f5ee] font-body text-navy selection:bg-gold/30 relative overflow-hidden pt-36 md:pt-40 pb-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <button
          onClick={() => navigate("/events")}
          className="inline-flex items-center gap-2 text-gold hover:text-navy transition-all mb-10 font-bold text-sm uppercase tracking-widest group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Events
        </button>

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          <section className="xl:col-span-8 rounded-[2rem] border border-gold/15 bg-white/50 p-8 md:p-10 relative overflow-hidden">
            <LotusSVG className="absolute -right-14 -bottom-14 w-56 h-56 text-gold/8" />
            <span className="text-gold font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Celebration Details</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#800000] leading-tight mb-6">{event.title}</h1>
            <p className="font-body text-gray-600 text-lg leading-relaxed italic border-l-4 border-gold/20 pl-5 mb-8">"{event.description}"</p>

            <h2 className="font-display text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
              <Info size={20} className="text-gold" /> About This Event
            </h2>
            <p className="text-gray-600 leading-relaxed">{event.about || event.description}</p>
          </section>

          <aside className="xl:col-span-4 xl:sticky xl:top-32 rounded-[2rem] bg-[#0A1F44] text-white p-7 border border-gold/15 shadow-2xl">
            <h3 className="font-display text-2xl font-bold mb-7">Event Particulars</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar size={21} className="text-gold" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">Date</p>
                  <p className="font-display text-lg font-bold text-gold-light">{event.date}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={21} className="text-gold" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">Venue</p>
                  <p className="font-display text-lg font-bold">{event.venue}</p>
                </div>
              </div>

              {event.convenor && (
                <div className="flex gap-4">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <User size={21} className="text-gold" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">Convenor</p>
                    <p className="font-display text-lg font-bold">{event.convenor}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-7 mt-7 border-t border-white/15 space-y-4">
              {renderActionButton(event, "register")}
              {renderActionButton(event, "brochure")}
              {renderActionButton(event, "youtube")}
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetail;
