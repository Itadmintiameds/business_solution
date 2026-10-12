import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerNavigation = {
  company: [
    // { name: 'About Us', href: '#' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  contact: [
    { name: 'info@sudhanandgroup.com', href: 'mailto:info@sudhanandgroup.com' },
    // TODO: phone number. The previous entry was a blank-label placeholder (tel:+1234567890), so it is hidden until a real number is added.
    { name: '', href: 'tel:+1234567890' },
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-orange-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sbslogo.png" alt="Sudhanand Business Solutions logo" width={1734} height={1914} loading="lazy" className="h-24 w-auto mx-auto md:mx-0 " />
          <p className="mt-4 text-white text-base md:text-sm">
            Empowering your business with cutting-edge solutions.
          </p>
        </div>

        {/* Company Links */}
        <nav aria-label="Footer" className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-0 xl:space-y-2 text-gray-400">
            {footerNavigation.company.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 xl:py-0 hover:text-gray-200 text-white transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Section */}

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-white ">
            {footerNavigation.contact.filter((item) => item.name).map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 xl:py-0 text-white transition duration-300 break-all">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://www.facebook.com/profile.php?id=61567362776649" aria-label="Facebook" className="bg-blue-600 p-3 xl:p-2 rounded-full hover:bg-blue-800 transition duration-300">
          <FaFacebookF size={20} className="text-white" />
        </Link>
        {/* <Link href="#" className="bg-sky-500 p-2 rounded-full hover:bg-sky-700 transition duration-300">
          <FaTwitter size={20} className="text-white" />
        </Link> */}
        <Link href="https://www.instagram.com/sudhanand_business_solutions/?next=%2F" aria-label="Instagram" className="bg-pink-500 p-3 xl:p-2 rounded-full hover:bg-pink-700 transition duration-300">
          <FaInstagram size={20} className="text-white" />
        </Link>
        <Link href="https://www.linkedin.com/company/sudhanand-business-solutions-pvt-ltd/" aria-label="LinkedIn" className="bg-blue-700 p-3 xl:p-2 rounded-full hover:bg-blue-900 transition duration-300">
          <FaLinkedin size={20} className="text-white" />
        </Link>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 px-4 text-center text-sm text-white ">
        &copy; {new Date().getFullYear()} Sudhanand Business Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
