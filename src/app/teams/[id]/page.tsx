'use client';

import FooterSection from "@/app/component/FooterSection";
import SecondNavBar from "@/app/component/SecondNavBar";
import { teams, TeamPerson } from "@/app/data/teaminfo";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaCheckCircle, FaClipboardList, FaUsers, FaUserTie } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/careers" },
  { name: "About Us", link: "/about" },
];

// Explicitly typed variants for framer-motion
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageZoom: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier as an array of numbers
    },
  },
};

// One person row in the Leadership / Team Members blocks: photo above the text on mobile, beside it from md up.
const PersonRow = ({ person, fallbackImage, heading }: { person: TeamPerson; fallbackImage?: string; heading?: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg border-2 border-white"
    >
      <Image
        src={person.image || fallbackImage || "/default-image.jpg"}
        alt={person.designation ? `${person.leaderName}, ${person.designation}` : person.leaderName}
        fill
        className="object-cover object-top"
        quality={85}
        sizes="(max-width: 768px) 160px, 200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </motion.div>
    <div className="flex-1 w-full">
      {heading}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-orange-600">{person.leaderName}</h3>
          {person.designation && (
            <p className="text-gray-500 font-medium">{person.designation}</p>
          )}
        </div>
        <p className="text-gray-700 leading-relaxed">{person.experience}</p>
      </div>
    </div>
  </div>
);

const SectionHeading = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center mb-4">
    <div className="bg-orange-100 p-3 rounded-lg mr-4 shadow-sm">{icon}</div>
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  </div>
);

const Page = () => {
  const params = useParams();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const team = teams.find((t) => t.id === params.id);

  if (!team) {
    return (
      <div className="text-center text-2xl font-bold mt-10 text-red-600">
        Team Not Found
      </div>
    );
  }

  const leaders = team.leadership ? [team.leadership, ...(team.coLeaders ?? [])] : [];
  const members = team.members ?? [];
  // Long intros (e.g. Actuarial Sciences) would sit unreadably over the photo, so they go in a text block under the hero.
  const longIntro = team.description.length > 220;

  return (
    <>
      <SecondNavBar navItems={navItems} />
      {/* top padding clears the fixed header */}
      <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Hero: the text layer sets the height (same minimum as before), so long intros never get cut off */}
          <motion.div
            variants={imageZoom}
            className="relative rounded-t-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src={`/sbplteam/${team.groupphoto}`}
                alt={`${team.name} group photo`}
                fill
                className="object-scale-down object-center"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                placeholder="blur"
                blurDataURL={`/sbplteam/${team.groupphoto}`}
              />
            </div>
            <div className="relative min-h-80 md:min-h-[28rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <motion.h1
                variants={fadeIn}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
              >
                {team.name}
              </motion.h1>
              {!longIntro && (
                <motion.p
                  variants={fadeIn}
                  className="text-lg md:text-xl text-orange-300 font-medium max-w-2xl"
                >
                  {team.description}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="bg-white rounded-b-2xl shadow-lg divide-y divide-gray-200/70">
            {longIntro && (
              <motion.div variants={fadeIn} className="p-6 md:p-8">
                <p className="text-lg text-gray-700 leading-relaxed">{team.description}</p>
              </motion.div>
            )}
            {/* Core Services */}
            <motion.div
              variants={fadeIn}
              className={`p-6 md:p-8 hover:bg-gray-50/50 transition-colors duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shadow-sm">
                  <FaClipboardList className="text-orange-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Core Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-4 md:pl-12">
                {team.coreServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                    className="flex items-start border-l-4 border-orange-500 pl-4 py-2 group"
                  >
                    <div className="absolute -left-2 w-3 h-3 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-gray-700 transition-colors group-hover:text-gray-900">{service}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Strengths */}
            <motion.div
              variants={fadeIn}
              className={`p-6 md:p-8 hover:bg-gray-50/50 transition-colors duration-300 ${leaders.length === 0 ? "rounded-b-2xl" : ""}`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shadow-sm">
                  <FaCheckCircle className="text-orange-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Key Strengths</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-4 md:pl-12">
                {team.keyStrengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                    className="flex items-start border-l-4 border-orange-500 pl-4 py-2 group"
                  >
                    <div className="absolute -left-2 w-3 h-3 bg-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-gray-700 transition-colors group-hover:text-gray-900">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Leadership */}
            {leaders.length > 0 && (
              <motion.div
                variants={fadeIn}
                className={`p-6 md:p-8 bg-gray-50/30 hover:bg-gray-50/70 transition-colors duration-300 space-y-10 ${members.length === 0 ? "rounded-b-2xl" : ""}`}
              >
                {leaders.map((leader, index) => (
                  <PersonRow
                    key={leader.leaderName}
                    person={leader}
                    fallbackImage={team.image}
                    heading={index === 0 ? <SectionHeading icon={<FaUserTie className="text-orange-600 text-2xl" />} title="Leadership" /> : undefined}
                  />
                ))}
                {team.functionLeads && (
                  <div className="md:pl-48 space-y-2">
                    {team.functionLeads.map((lead) => (
                      <p key={lead.function} className="text-gray-700">
                        <span className="font-semibold text-gray-800">{lead.function}:</span> {lead.name}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Team Members */}
            {members.length > 0 && (
              <motion.div
                variants={fadeIn}
                className="p-6 md:p-8 bg-gray-50/30 rounded-b-2xl hover:bg-gray-50/70 transition-colors duration-300 space-y-10"
              >
                {members.map((member, index) => (
                  <PersonRow
                    key={member.leaderName}
                    person={member}
                    heading={index === 0 ? <SectionHeading icon={<FaUsers className="text-orange-600 text-2xl" />} title="Team Members" /> : undefined}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
};

export default Page;
