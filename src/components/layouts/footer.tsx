import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-[#15151A] md:flex hidden flex-col gap-10 py-10 px-40'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-4 flex-1'>
                    <Image
                        src='/images/logo.svg'
                        alt='logo CSTAM'
                        width={200}
                        height={40}
                    />
                    <p className='text-white w-1/3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim Lorem ipsum dolor sit amet,{' '}
                    </p>
                </div>
                <div className='flex flex-col gap-4 self-end  w-fit'>
                    <h4 className='text-white font-bold text-2xl uppercase'>
                        Quick Links
                    </h4>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-white'>Home</li>
                        <li className='text-white'>About Us</li>
                        <li className='text-white'>Agenda</li>
                        <li className='text-white'>Sponsors</li>
                        <li className='text-white'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-white'>© 2024, All Rights Reserved</p>
                    <div className='bg-white h-2 w-2 rounded-full' />
                    <p className='text-white'>Powered By IEEE CS ESPRIT SBC</p>
                    <div className='bg-white h-2 w-2 rounded-full' />
                    <p className='text-white'>
                        COMPUTER SOCIETY TUNISIAN ANNUAL CONGRESS
                    </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='25'
                        height='25'
                        fill='white'
                        viewBox='0 0 30 30'>
                        <path d='M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                    <InstagramLogoIcon width={25} height={25} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
