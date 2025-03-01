import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Latest News',
        link: '/#news-section'
    },
    {
        name: 'Speakers',
        link: '/#speakers-section'
    },
    {
        name: 'Teams',
        link: '/#teams-section'
    }
];

const Navbar = () => {
    return (
        <div className='absolute inline-flex items-center justify-between w-full md:px-20 px-10 py-4 z-[99]'>
            <div className='inline-flex w-full justify-between items-center gap-20'>
                <Image
                    src='/images/logo.webp'
                    width={40}
                    height={40}
                    alt='Logo of WIE ACT'
                />
                <div className='items-center gap-10 md:flex hidden'>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className='text-foreground hover:text-white duration-200 font-medium text-lg'>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='md:hidden block'>
                <Drawer direction='right'>
                    <DrawerTrigger>
                        <MenuIcon size={35} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className='flex flex-col p-10 gap-20 '>
                            <Image
                                src='/images/logo.webp'
                                className='self-center'
                                width={50}
                                height={40}
                                alt='Logo of WIE ACT'
                            />
                            <div className='flex flex-col gap-10 '>
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className='text-foreground hover:text-white duration-200 font-medium'>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
};
export default Navbar;
