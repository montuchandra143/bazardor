import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";
import Navbar from './Navbar';
import TitleMarquee from './TitleMarquee';
const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: "full"
});

const Header = () => {
      return (
  
        <div>
        <div className="bg-white border-b border-gray-100 py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
   
                <div className="flex items-center gap-4">
                    <div className="bg-[#00875A] rounded-2xl p-4 w-16 h-16 flex items-center justify-center shadow-sm shrink-0">
                        <Image
                            height={36}
                            width={36}
                            src="/logo-icon.png"
                            alt="logo"
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-2xl text-gray-900">
                            বাজার দর
                        </h2>
                        <p className="text-base font-normal text-gray-600">
                            {date}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 py-2 px-4 rounded-full border border-gray-100 shadow-inner">
                    <Image
                        height={40}
                        width={40}
                        src="/prathona.png" 
                        alt="prathona"
                        className="object-cover rounded-full ring-2 ring-white"
                    />
                    <h2 className="font-semibold text-gray-800 text-lg">
                        Prathona Rani Roy
                    </h2>
                    <span className="text-gray-400">{<IoMdArrowDropdown />}</span>
                </div>
            </div>

            <Navbar/>
        </div> 
        <TitleMarquee/>
       </div>
    );
};

export default Header;

