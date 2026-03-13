export interface EventData {
  id: number;
  date: string;
  month: "March 2026" | "April 2026" | "Planned Events";
  title: string;
  convenor?: string;
  venue: string;
  description: string;
  time?: string;
  about?: string;
  registrationLink?: string; // Added registration link
  brochureLink?: string; // Added brochure link
}

export const EVENTS: EventData[] = [
  // MARCH 2026
  {
    id: 12,
    date: "14 Mar 2026 (Sat)",
    month: "March 2026",
    title: "Pharma Anveshan 2026",
    venue: "A.U. Convention Centre",
    convenor: "Principal, AU College of Pharmaceutical Sciences",
    description: "Future Pharma Ecosystem: Fostering Synergy Among Academia, Industry, Research, Regulatory and Practice.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScibMLGQM753Sb84_Uy-G_edZMidjtYsBoFlWVtMmUrwnnzFg/closedform",
    brochureLink: "/downloads/Pharma anveshan brochure au.pdf"
  },
  {
    id: 13,
    date: "17 Mar 2026 (Tue)",
    month: "March 2026",
    title: "Classical Music Concert",
    convenor: "Prof. K. Saraswathi Vidyardhi, HoD Music",
    venue: "Y.V.S. Murthy Auditorium",
    description: "An evening of serene classical melodies celebrating our cultural heritage and musical legacy.",
    brochureLink: "/downloads/Classical Musical Concert.pdf"
  },
  {
    id: 14,
    date: "18 Mar (Wed)",
    month: "March 2026",
    title: "IIC Cluster Meet",
    convenor: "Prof. G.M.J. Raju",
    venue: "Convention Centre",
    description: "Focusing on innovation and start-up culture across local university clusters."
  },
  {
    id: 15,
    date: "22-23 Mar",
    month: "March 2026",
    title: "Geotechnical Solutions Workshop",
    convenor: "HoD Civil Engineering",
    venue: "YVS Murthy Auditorium",
    description: "Advancing geotechnical engineering practices for modern infrastructure challenges."
  },
  {
    id: 16,
    date: "22 Mar (Sun)",
    month: "March 2026",
    title: "International Food Festival",
    convenor: "Prof. S. Paul Douglas",
    venue: "Convention Centre",
    description: "A culinary journey with dishes from 40+ countries prepared by international students."
  },
  {
    id: 17,
    date: "25 Mar (Wed)",
    month: "March 2026",
    title: "Combined Convocation",
    convenor: "To be announced",
    venue: "Convention Centre",
    description: "Celebrating the achievements of graduates in a combined 91st & 92nd convocation."
  },
  {
    id: 18,
    date: "26 Mar (Thu)",
    month: "March 2026",
    title: "International Cultural Festival",
    convenor: `Prof. S. Paul Douglas
Dean, International Affairs`,
    venue: "Convention Centre",
    description: "A showcase of worldwide cultural diversity through performance and art."
  },

  // APRIL 2026
  {
    id: 19,
    date: "6-8 Apr 2026",
    month: "April 2026",
    title: "Mega Cultural Event",
    convenor: "Prof. Asha Emmanuel Raju",
    venue: "Engineering College Grounds",
    description: "Spectacular multi-day cultural celebration featuring renowned artists and AU talent.",
    registrationLink: "/registration"
  },
  {
    id: 28,
    date: "6-10 Apr 2026",
    month: "April 2026",
    title: "Five-Day Intensive Workshop on KOHA",
    convenor: "Dr. Dhana Raju Veeramallu (Associate Professor & HoD)",
    venue: "Browsing Centre, Dr. V.S. Krishna Library, Andhra University",
    description: "Part of Andhra University Centenary Celebrations, organized by the Department of Library and Information Science in collaboration with Dr. V.S. Krishna Library for faculty, professionals, research scholars, and students.",
    time: "Daily sessions during Apr 6-10, 2026",
    registrationLink: "https://forms.gle/GzJMBErd4dT2L6WCA",
    brochureLink: "/downloads/Koha brochure Latest.pdf",
    about: "Chief Patron: Prof. G.P. Raja Sekhar (Honorable Vice-Chancellor). Workshop Director: Prof. C. Sasikala. Registration Fee: Rs. 200. Payment: Dept. of Library & Information Science, A/C 10428605474, IFSC SBIN0000772 (SBI South Campus). Contact: dhanuvr@gmail.com | +91 9182827373, 9440316454. Resource Persons: Dr. Shankar Reddy Kolle, Dr. C. Mallikarjuna, Dr. Vinod Kumar Mishra, Dr. S. Padma Shree, Dr. O. Seshaiah, and Prasad Vangapandu. Note: Preference will be given to candidates carrying their own laptops."
  },
  {
    id: 20,
    date: "9-10 Apr",
    month: "April 2026",
    title: "Technology & Innovation Conclave",
    convenor: "Principal, AU College of Engg.",
    venue: "Convention Centre",
    description: "Exploring the frontier of technology and industry 5.0 with academic experts."
  },
  {
    id: 21,
    date: "18 Apr (Sat)",
    month: "April 2026",
    title: "Affiliated Colleges Centenary Day Celebrations",
    convenor: "Dean, CDC",
    venue: "TBA",
    description: "A special day to honor the contribution of our affiliated college network."
  },
  {
    id: 22,
    date: "19 Apr (Sun)",
    month: "April 2026",
    title: "Arts & Commerce Centenary",
    convenor: "Principal, AU College of A & C",
    venue: "Engg. College Grounds",
    description: "Celebrating the legacy of the College of Arts & Commerce in our 100th year."
  },
  {
    id: 23,
    date: "21 Apr (Tue)",
    month: "April 2026",
    title: "Science & Pharmacy Day",
    convenor: "Principal, AU College of S & T",
    venue: "Engg. College Grounds",
    description: "Honoring the scientific and pharmacological breakthroughs nurtured at AU."
  },
  {
    id: 24,
    date: "22 Apr (Wed)",
    month: "April 2026",
    title: "Engineering Centenary Day",
    convenor: "Principals, AUCE & AUCEW",
    venue: "Engg. College Grounds",
    description: "Focusing on the engineering excellence that has defined AU for a century."
  },
  {
    id: 25,
    date: "23 Apr (Thu)",
    month: "April 2026",
    title: "Law & IASE Celebration",
    convenor: "Rector & Registrar",
    venue: "Engg. College Grounds",
    description: "Marking 100 years of the College of Law and educational advancements at IASE."
  },
  {
    id: 26,
    date: "24-25 Apr",
    month: "April 2026",
    title: "Foundation Rehearsals",
    convenor: "Organizing Committee",
    venue: "Engg. College Grounds",
    description: "Grand rehearsals for the historic Centenary Foundation Day ceremony."
  },
  {
    id: 27,
    date: "26 Apr 2026 (Sun)",
    month: "April 2026",
    title: "Centenary Foundation Day Celebrations",
    convenor: "TBA",
    venue: "Engg. College Grounds",
    description: "The main historic celebration marking 100 years since the inception of AU."
  },

  // PLANNED EVENTS & OTHERS
  // { id: 28, date: "Planned", month: "2nd/4th week of March", title: "Faculty and Staff Sports & Cultural Meet", venue: "TBA", description: "TBA" },
  // { id: 29, date: "Planned", month: "March", title: "Panel Discussion with VCs", venue: "TBA", description: "Theme : Higher education challenges and pathways" },
  // { id: 30, date: "Planned", month: "March", title: "Panel Discussion with Affiliated Colleges", venue: "TBA", description: "Theme: Upskilling affiliated colleges - creating opportunities for students" },
  // { id: 31, date: "Planned", month: "March", title: "Panel discussion on CDOE", venue: "TBA", description: "Theme: Improving quality at distance and online education" },
  // { id: 32, date: "Planned", month: "March", title: "Kavi Sammelanam & Avadhanam by the Dept. of Telugu", venue: "TBA", description: "" },
  // { id: 33, date: "Planned", month: "March", title: "Centenary Podcast and Video Bytes", venue: "TBA", description: "" },
  // { id: 34, date: "Planned", month: "March", title: "Summer Internships for affiliated colleges", venue: "TBA", description: "" },
];
