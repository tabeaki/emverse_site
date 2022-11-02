/* eslint-disable @next/next/no-html-link-for-pages */
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link';
import Image from 'next/image'

 function Header() {
     return <header>
            <nav className="max-w-full lg:pt-1 bg-black">
                <div className="grid grid-rows-12 grid-flow-col">
                    <div className='justify-front flex'>
                        <div className="bg-[url('/opensea_icon.png')] invisible md:visible px-2 pt-8 mx-1 bg-center bg-cover"><a className="px-2 py-4" href=""></a></div>
                        <div className="bg-[url('/twitter_icon.png')] invisible md:visible px-2 pt-8 mx-1 bg-center bg-cover"><a className="px-2 py-4" href=""></a></div>                    
                    </div>
                    <div className="lg:justify-center flex">
                        <Image className="" src="/headerLogo.png" alt="chara1" width={160} height={20} objectFit="contain"/>
                    </div>
                    <div className="justify-end px-2 flex">
                        <Image className="" src="/hamburger.png" alt="chara1" width={30} height={12} objectFit="contain"/>
                    </div>
                </div>
            </nav>
        </header>
   }

   export default Header;