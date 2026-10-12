export interface Leader {
    name: string;
    // "Designation\nEntity": the second line is shown as the orange entity title
    role: string;
    imageUrl: string;
    description: string;
}

// TODO: Arun Sir photo/bio. The PDF asks for his picture and a short detail section but gives neither.
// Replace imageUrl (placeholder avatar) and role, add a description (the bio panel is hidden while it is empty),
// and confirm the display name, once supplied.
export const arunSir: Leader = {
    name: 'Arun Sir',
    role: 'Sudhanand Business Solutions',
    imageUrl: '/default-image.jpg',
    description: '',
};

export const leadershipTeam: Leader[] = [
    {
        name: 'Dr. Arjun Sachidanand',
        role: 'Chairman & Founder\nSudhanand Business Solutions',
        imageUrl: '/ArjunSachidanand.jpeg',
        description: 'Dr. Arjun Sachidanand is a visionary leader and the driving force behind Sudhanand Business Solutions. With a wealth of experience in healthcare and business, he has successfully transformed the organization into a leading player in the industry.',
    },
    {
        name: 'Dr. Sini Arjun',
        role: 'Managing Director\nSudhanand Business Solutions',
        imageUrl: '/SBS/sinimam.jpg',
        description: 'Dr. Sini Arjun is a dynamic leader with a passion for innovation and excellence. As the Managing Director of Sudhanand Business Solutions, she is committed to driving growth and delivering exceptional value to clients.',
    },
    {
        name: 'Abhinandan S. Rao',
        role: 'VP – New Initiatives & Investments\nSudhanand Business Solutions',
        imageUrl: '/SBS/Abhinandan S-Photoroom.png',
        description: 'Abhinandan S. Rao is a strategic thinker and a key player in the growth of Sudhanand Business Solutions. With a focus on new initiatives and investments, he is dedicated to exploring new opportunities and driving innovation.',
    },
    {
        name: 'Keshav Murthy',
        role: 'VP - Internal Audit & Finance\nSudhanand Business Solutions',
        imageUrl: '/SBS/Keshav murthy.png',
        description: 'Keshav Murthy is a finance expert with a strong background in internal audit and compliance. As the VP of Internal Audit & Finance at Sudhanand Business Solutions, he plays a crucial role in ensuring financial integrity and transparency.',
    },
    {
        name: 'Vijay Asrani',
        role: 'CAO\nSudhanand Business Solutions',
        imageUrl: '/SBS/vijay.png',
        description: 'Vijay Asrani is a finance professional with a deep understanding of financial management and strategy. As the CAO at Sudhanand Business Solutions, he is responsible for overseeing financial operations and driving financial performance.',
    },
    {
        name: 'Syed Abdul Wahab ',
        role: 'Facility & Project Manager\nSBPL',
        imageUrl: '/SBS/abdul.jpeg',
        description: 'Syed Abdul Wahab is a skilled facility and project manager with a focus on delivering high-quality projects on time and within budget. He is dedicated to ensuring the success of Sudhanand Business Solutions\' projects and operations.',
    },
    arunSir,
];
