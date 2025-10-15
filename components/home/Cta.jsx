import  Link  from 'next/link'


export default function Cta() {
  return (
    <section className="px-5 w-full flex items-center justify-center py-15 bg-[#270A63E5]/30">
        <div className="space-y-10">
            <div className="space-y-8"> 
                <div className="flex items-center justify-center">
                    <h5 className="font-bold border-b-4  border-[#270A63E5]">Ready to Shine?</h5>
                </div>
                <p className="text-center mb-5 ">
                    Join GlimmerID and transform your online presence. Create a profile that <br className='hidden md:inline'/> truely represents you and attracts the right opportunities
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Link href="/login"
                    className='py-2 px-5  bg-gradient-to-r from-[#270A63E5]/50 to-[#050505]/20 border border-white rounded-full md:px-10'>
                    Get Started
                </Link>
                   
            </div>
        </div>
    </section>
  )
}


