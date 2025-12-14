import { FaPlus } from "react-icons/fa6";
import { FaMobile, FaUserCheck } from "react-icons/fa";
import { IoEyeOutline, IoNewspaperOutline, IoSparklesSharp } from "react-icons/io5";
import { FaCircleArrowDown } from "react-icons/fa6";




export default function Feature() {
  return (
    <section className="px-5 w-full flex items-center justify-center pb-25">
        <div>
            <div className="space-y-5"> 
                <div className="flex items-center justify-center">
                    <h5 className="font-bold border-b-4 text-2xl border-[#270A63E5]">Features</h5>
                </div>
                <p className="text-center mb-15">
                    In today's digital age, your online profile is your first impression. Standout with a unique and compelling digital Identity
                </p>
                  
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-10 md:px-20">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-black/50 border-4 border-[#270A63E5] p-5 shadow-2xl relative">
                                    <FaPlus className="absolute h-6 w-6 -top-3.5 -left-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -bottom-3.5 -left-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -top-3.5 -right-3.5 text-yellow-600" />
                                    <FaPlus className="absolute h-6 w-6 -bottom-3.5 -right-3.5 text-yellow-600" />
                            <p className="text-yellow-600">{feature.icon}</p>
                            <p className="font-bold py-5 text-lg">{feature.title}</p>
                            <p>{feature.description}</p>
                        </div> 
                    ))}
               </div>
            </div>
        </div>
    </section>
  )
}

const features = [
    {
        id: 1,
        icon: <IoSparklesSharp size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "AI-Powered Banner Generation",
        description: "Create stunning, professional banners for your Linkedin and Twitter profiles in seconds. our AI analyzes your profile and suggest designs that match your personal brand."
    },
    {
        id: 2,
        icon: <IoNewspaperOutline size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "AI-Powered Bio/About Generation",
        description: "Generate a compelling and personalised bio that highlights your skills and experience. our AI helps you craft the perfect message to attract recruiters and connections"
    },
    {
        id: 3,
        icon: <IoEyeOutline size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Live Mockup Preview",
        description: "See how your new banner and bio will look on your Linkedin and Twitter profiles before you even hit save. our live mockup preview ensures everything is perfect"
    },
    {
        id: 4,
        icon: <FaCircleArrowDown size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Export & Save Functionality",
        description: "Download your high resolution-banner and save your projects to make future edit a breeze. your professional brand is always just a few clicks away"
    },
    {
        id: 5,
        icon: <FaMobile size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Responsive UI",
        description: "Enjoy a seamless experience across all your devices. GimmerID is fully responsive, so you can design on the go from your desktop, tablet or smartphone"
    },
    {
        id: 6,
        icon: <FaUserCheck size={45} className="border border-[#270A63E5] bg-[#270A63E5]/20 rounded-full p-2"/>,
        title: "Personalized for You",
        description: "Our AI algorithms are designed to understand your unique professional identity, ensuring that every design and a piece of text is tailored to you"
    }
]
