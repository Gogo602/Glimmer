import Image from 'next/image';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section
            className='px-10 bg-black/70'
        >
            <div className=" inset-0 bg-white opacity-90"></div>

            <div className=" text-gray-500 py-15">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                    
                    <div className='-mt-3'>
                        <Image src='/glimmer.png' alt="glimmer_logo" width={160} height={70}/>
                        <p className='pl-4 text-white'>Design Impactfull profile banners and bios with power of AI</p>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-white">PRODUCT</li>
                            <li className="cursor-pointer hover:text-white">Generate Banner</li>
                            <li className="cursor-pointer hover:text-white">Generate Text</li>
                            <li className="cursor-pointer hover:text-white">Save Designs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-white">COMPANY</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-white">SUPPORT</li>
                            <li>Faq</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                    
                </div>
                <hr className="my-5 w-full text-yellow-600" />
                <div className='md:flex items-center justify-between space-y-5'>
                    <div className='text-white'>&copy; {currentYear} GlimmerID. All rights reserved.</div>
                    <ul className='md:flex items-center justify-between gap-3 space-y-5 md:space-y-0'>
                        <li><a href="#" className="cursor-pointer hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="cursor-pointer hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="cursor-pointer hover:text-white">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
