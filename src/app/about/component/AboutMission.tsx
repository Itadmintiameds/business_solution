import React from 'react'
import CountUp from '../../component/CountUp'
import Reveal from '../../component/Reveal'

// Figures as of 2026: founded in 2010 (16+ years), team of 150+.
const stats = [
    { label: 'Years of Excellence', value: 16, suffix: '+' },
    // { label: 'Members Served', value: '600,000+' },
    // { label: 'Industries Covered', value: '10+' },
    { label: 'Team Strength', value: 150, suffix: '+' },
];

const AboutMission = () => {
    return (
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <Reveal className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-fluid-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600">Mission</span></h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-12 sm:gap-y-20 lg:flex-row">
                    <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                        <p className="text-lg/8 sm:text-xl/8 text-gray-600">
                        At SBPL, our mission is to drive innovation across multiple industries-from healthcare and IT to finance and hospitality. We also aspire to become leaders in the IT/ITES sector globally by 2030, with operations spanning across international markets.
                            We are committed to delivering cutting-edge solutions that improve lives, foster sustainable growth, and create lasting impact.
                        </p>
                        <p className="mt-10 max-w-xl text-base/7 text-gray-600">
                            Our journey began in 2010 with a vision to provide affordable healthcare. Over the years, we expanded into IT & ITES,
                            insurance, and various other sectors, continuously evolving to meet the changing needs of our clients. Today, with a
                            dedicated team operating from Mysore, we strive to push boundaries and set new industry standards.
                        </p>
                    </div>
                    <div className="lg:flex lg:flex-auto lg:justify-center">
                        <dl className="grid grid-cols-2 gap-6 sm:block sm:w-64 sm:space-y-8 xl:w-80">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse gap-y-2 sm:gap-y-4">
                                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                                    <dd className="text-5xl sm:text-7xl font-semibold tracking-tight text-gray-900">
                                        <CountUp value={stat.value} />{stat.suffix}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default AboutMission
