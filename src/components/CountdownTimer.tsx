import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COUNTDOWN_EVENTS = [
  {
    title: "Mega Cultural Event",
    targetDate: new Date("2026-04-06T00:00:00+05:30").getTime(),
  },
  {
    title: "Affiliated Colleges Day",
    targetDate: new Date("2026-04-18T00:00:00+05:30").getTime(),
  },
  {
    title: "Centenary Foundation Day",
    targetDate: new Date("2026-04-26T00:00:00+05:30").getTime(),
  },
];

const getTimeLeft = (targetDate: number, now: number) => {
  const diff = Math.max(0, targetDate - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownTimer = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
      {COUNTDOWN_EVENTS.map((event, eventIndex) => {
        const timeLeft = getTimeLeft(event.targetDate, now);
        const units = [
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ];

        return (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: eventIndex * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="font-display text-4xl md:text-5xl text-navy font-bold mb-8 md:mb-10">
              {event.title}
            </h3>

            <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
              {units.map((unit, i) => (
                <motion.div
                  key={`${event.title}-${unit.label}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    key={unit.value}
                    initial={{ rotateX: -90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-navy flex items-center justify-center border border-gold/30 shadow-gold"
                  >
                    <span className="text-2xl md:text-4xl font-display text-gold font-bold">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </motion.div>
                  <span className="text-xs md:text-sm font-body text-navy mt-2 font-medium">{unit.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;
