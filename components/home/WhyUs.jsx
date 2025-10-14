import { FaPlus, FaWandMagicSparkles } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa6";
import { RiCustomSize } from "react-icons/ri";




export default function WhyUs() {
  return (
    <section className="px-5 w-full flex items-center justify-center pb-25">
        <div>
            <div className="space-y-5"> 
                <div className="flex items-center justify-center">
                    <h5 className="font-bold border-b-4  border-[#270A63E5]">Why GlimmerID</h5>
                </div>
                <p className="text-center mb-15">
                    In today's digital age, your online profile is your first impression. Standout with a unique and compelling digital Identity
                </p>
                  
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-10 md:px-20">
                    {whyUs.map((why) => (
                        <div key={why.id} className="bg-black/50 border-4 border-[#270A63E5] p-5 shadow-2xl relative">
                                    <FaPlus className="absolute h-6 w-6 -top-3.5 -left-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -bottom-3.5 -left-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -top-3.5 -right-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -bottom-3.5 -right-3.5 text-yellow-600" />
                            <p className="">{why.icon}</p>
                            <p className="font-bold py-5 text-lg">{why.title}</p>
                            <p>{why.why}</p>
                        </div> 
                    ))}
               </div>
            </div>
        </div>
    </section>
  )
}

const whyUs = [
    {
        id: 1,
        icon: <FaWandMagicSparkles size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "AI-Powered Banner Generation",
        why: "Create virtually striking banners for Linkedln and Twitter using our AI-driven design tools"
    },
    {
        id: 2,
        icon: <FaHeadSideVirus size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Personalised Bio Generation",
        why: "Craft compelling Bios and About Me sections that highlight your skills experience and personality"
    },
    {
        id: 3,
        icon: <RiCustomSize size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Customizable Templates",
        why: "Choose from a vriety of templates and customize them to match your brand and style"
    }
]
