'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { leadershipTeam } from '../../data/leadership'

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const AboutTeam = () => {
    // card whose bio is open via tap or keyboard focus (mouse users still get it on hover)
    const [active, setActive] = useState<number | null>(null)

    return (
        <section aria-labelledby="leadership-heading" className="mx-auto mt-24 max-w-7xl px-6 sm:mt-48 lg:px-8 my-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-2xl lg:mx-0 "
            >
                <h2 id="leadership-heading" className="text-fluid-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Our <span className="text-orange-600">Leadership</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our team is a diverse group of professionals with expertise in various fields, including healthcare, IT, finance, and hospitality.
                    We are united by a common goal: to drive innovation and deliver exceptional solutions that make a positive impact on society.
                </p>
            </motion.div>

            <div className="mx-auto mt-12 sm:mt-20 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {leadershipTeam.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={fadeIn}
                            transition={{ delay: (index % 4) * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            tabIndex={0}
                            onTap={() => setActive((current) => (current === index ? null : index))}
                            onFocus={() => setActive(index)}
                            onBlur={() => setActive(null)}
                            className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl sm:h-[300px]"
                        >
                            {/* Default View */}
                            <motion.div
                                initial={{ opacity: 1 }}
                                whileHover={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="sm:absolute sm:inset-0 flex flex-col items-center justify-center p-6 z-10 text-center"
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    className="mb-4 flex-shrink-0"
                                >
                                    <div className="relative h-32 w-32 mx-auto">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            sizes="128px"
                                            className="rounded-full border-4 border-white shadow-md object-cover object-top"
                                        />
                                    </div>
                                </motion.div>
                                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                <div className="text-sm text-gray-600 mt-2">
                                    {member.role.includes('\n') ? (
                                        <>
                                            <p className="whitespace-pre-line">
                                                {member.role.split('\n')[0]}
                                                <br />
                                                <span className="text-orange-600 font-medium">
                                                    {member.role.split('\n')[1]}
                                                </span>
                                            </p>
                                        </>
                                    ) : (
                                        <p>{member.role}</p>
                                    )}
                                </div>
                                {/* Phones: no hover, so the bio is shown under the role */}
                                {member.description && <p className="sm:hidden mt-4 text-base text-gray-700 leading-relaxed">{member.description}</p>}
                            </motion.div>

                            {/* Hover / tap / focus view - Slide Up Bio (tablet and desktop) */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={active === index ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className={`${member.description ? "hidden sm:flex" : "hidden"} absolute inset-0 flex-col items-center justify-center bg-white px-6 text-center z-20`}
                            >
                                <div className="relative h-16 w-16 mb-4 mx-auto flex-shrink-0">
                                    <Image
                                        src={member.imageUrl}
                                        alt=""
                                        fill
                                        sizes="64px"
                                        className="rounded-full border-4 border-white shadow-md object-cover object-top"
                                    />
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutTeam
