import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";





export default function Faq() {

    const [expandedIndex, setExpandedIndex] = useState(null);
    
    const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


  return (
    <section className=" w-full px-3 flex items-center justify-center pb-25 sm:px-25 md:px-30 lg:px-75">
        <div>
            <div className="space-y-5"> 
                <div className="flex items-center justify-center">
                    <h5 className="font-bold border-b-4  border-[#270A63E5]">Frequently asked Questions</h5>
                </div>
                <p className="text-center mb-15">
                    Have questions? We've got answers
                </p>
                  
               <div className="space-y-5 w-full">
                    {FAQS.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="border-4 rounded-xl p-5 border-[#270A63E5] w-full"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between gap-15 sm:gap-30 md:gap-70">
                                <h4 className="text-md font-semibold text-white">{faq.question}</h4>
                                <p>
                                    {expandedIndex === index ? <FaMinus className='w-5 text-yellow-600'/> : <FaPlus className='w-5 text-yellow-600'/>}
                                </p>
                            </div>
                            {expandedIndex === index && (
                             <div>
                                <hr className="text-gray-400 mt-2 mb-5"/>
                                <p className="">{faq.answer}</p>
                             </div>
                            )}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

const FAQS = [
    {
        id: 1,
        question: "What platforms does GlimmerID support?",
        answer: "GlimmerID primarily supports visual and written branding for LinkedIn and Twitter. Our tools are specifically designed to help you create impactful profile banners and generate personalized bios/about sections for these professional and creator-focused platforms."
    },
    {
        id: 2,
        question: "Is there a free trial available?",
        answer: "Yes, we offer a free trial! This trial allows you to explore our core design tools and test our AI bio generation feature. You can create and download a limited number of standard-resolution banners and preview the personalized copy before committing to a paid plan."
    },
    {
        id: 3,
        question: "Can I upload my own images and logos?",
        answer: "Yes, absolutely. You can upload your own images, logos, and brand assets to incorporate them directly into your banner designs. This ensures your final profile visual perfectly aligns with your existing personal or business branding."
    },
    {
        id: 4,
        question: "How does the AI bio generation work?",
        answer: "The AI bio generation feature works by taking a few key inputs from you (like your current job title, industry, and core career goals). The AI then analyzes this information and generates a personalized, high-impact 'About' section or bio. It crafts concise copy that highlights your unique value proposition, ensuring your profile speaks directly to recruiters, clients, or potential employers."
    }
]

 
