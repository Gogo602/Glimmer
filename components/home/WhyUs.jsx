import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa6";
import { RiCustomSize } from "react-icons/ri";




export default function WhyUs() {
  return (
    <section className="px-5 w-full flex items-center justify-center">
        <div>
            <div className=""> 
                <div className="flex items-center justify-center py-5">
                    <h5 className="font-bold border-b-4  border-[#270A63E5]">Why GlimmerID</h5>
                </div>
                <p className="text-center">
                    In today's digital age, your online profile is your first impression. Standout with a unique and compelling digital Identity
                </p>
                  
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-5 md:px-20">
                    {whyUs.map((why) => (
                        <div key={why.id} className="bg-[#270A63E5]/10 border border-[#270A63E5] rounded-md p-5">
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
