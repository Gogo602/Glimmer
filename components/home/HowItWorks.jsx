import { FaUserEdit } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { FaCircleArrowDown, FaPlus } from "react-icons/fa6";
import  Link  from 'next/link'


export default function HowItWorks() {
  return (
    <section className="px-5 w-full flex items-center justify-center pb-20">
        <div className="space-y-10">
            <div className="space-y-5"> 
                <div className="flex items-center justify-center">
                    <h5 className="text-2xl font-bold border-b-4  border-[#270A63E5]">How It Works</h5>
                </div>
                <p className="text-center mb-15">
                    Three simple steps to a powerful professional brand
                </p>
                  
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-5 md:px-10">
                    {howItWorks.map((how) => (
                        <div key={how.id} className=" p-5 shadow-2xl border-t-4 border-[#270A63E5] relative">
                            <FaPlus className="absolute h-6 w-6 -top-3.5 -left-3.5 text-yellow-600 md:hidden" />
                            <p className="flex items-center justify-center text-yellow-600">{how.icon}</p>
                            <p className="font-bold py-5 text-lg text-center">{how.title}</p>
                            <p className="text-center">{how.how}</p>
                        </div> 
                    ))}
               </div>
            </div>
            <div className='flex items-center justify-center py-5 gap-6'>
                <Link href="/login"
                    className='py-2 px-5  bg-gradient-to-r from-[#270A63E5]/50 to-[#050505]/20 border border-white rounded-full md:px-10'>
                    Try It Now – Free
                </Link>
                   
            </div>
        </div>
    </section>
  )
}

const howItWorks = [
    {
        id: 1,
        icon: <FaUserEdit size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Step 1: Fill in your details",
        how: "Provide your professional information, career goals and style preferences"
    },
    {
        id: 2,
        icon: <IoSparklesSharp size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Step 2: Let AI design your banner & bio",
        how: "Our AI generates a uniques banner and a compeling bio taloired to you"
    },
    {
        id: 3,
        icon: <FaCircleArrowDown size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Step 3: Preview, download, and publish",
        how: "Review your new assets, download them and ipdate your profiles instantly"
    }
]
