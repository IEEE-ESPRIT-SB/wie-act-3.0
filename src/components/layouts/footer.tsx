import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='md:flex hidden flex-col gap-10 py-10 px-40 z-[999]'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-4 flex-1'>
                    <Image
                        src='/images/logo.webp'
                        alt='logo CSTAM'
                        width={80}
                        height={40}
                    />
                    <p className='w-1/3'>
                        The Women in Engineering Annual Congress of Tunisia (WIE
                        ACT) is an inspiring event that brings together creative
                        minds from engineering, technology, and development. Our
                        objective is to support women in engineering through
                        providing an environment for information sharing,
                        networking, and professional development.
                    </p>
                </div>
                <div className='flex flex-col gap-4 self-end  w-fit'>
                    <h4 className='font-bold text-2xl uppercase'>
                        Quick Links
                    </h4>
                    <ul className='flex flex-col gap-2'>
                        <Link href=''>Home</Link>
                        <Link href='/about-us'>About Us</Link>
                        <Link href='/#news-section'>Latest News</Link>
                        <Link href='/#speakers-section'>Speakers</Link>
                        <Link href='/#teams-section'>Team</Link>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2 text-[#C2794F]'>
                    <p>© 2024, All Rights Reserved</p>
                    <div className='bg-[#C2794F] h-2 w-2 rounded-full' />
                    <p>Powered By IEEE WIE ESPRIT SBAG</p>
                    <div className='bg-[#C2794F] h-2 w-2 rounded-full' />
                    <p className='uppercase font-bold'>
                        women in engineering annual congress of tunisia
                    </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <Link
                        target='_blank'
                        href='https://www.facebook.com/profile.php?id=100084776743566/'>
                        <FaFacebook size={25} />
                    </Link>
                    <Link
                        target='_blank'
                        href='https://www.instagram.com/wie.act/'>
                        <InstagramLogoIcon width={25} height={25} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
