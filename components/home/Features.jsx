import Image from "next/image";


function Features() {
    
    const featureData = [
        {
            id: 1,
            title: "AI-Powered Smart Design",
            Icon: '/aipowered.png',
            Description: "Say goodbye to design struggles! Our intelligent AI suggests stunning layouts, perfect color palettes, and ideal fonts, helping you create professional banners in seconds. Just input your ideas, and let our AI do the heavy lifting."
        },
        {
            id: 2,
            title: "Vast Template Library",
            Icon: '/aipowered.png',
            Description: "Dive into a constantly updated collection of professionally designed templates for every industry, style, and occasion. Start with a perfect foundation and personalize every element to truly make it yours."
        },
        {
            id: 3,
            title:"Seamless Platform Optimization",
            Icon: '/aipowered.png',
            Description: "Forget awkward cropping! Your banners are automatically optimized for both LinkedIn and Twitter's precise dimensions, ensuring they look flawless and impactful on any device."
        },
        {
            id: 4,
            title: "High-Resolution Downloads",
            Icon: '/aipowered.png',
            Description: "Download your masterpiece in high-resolution JPG or PNG formats, ready to upload directly to your profiles. Your unique banner will look sharp and professional, leaving a lasting impression."
        }
    ]

    return (
        <section className="flex items-center justify-center px-5 py-20">
            <div className="space-y-8">
                <div className="text-center space-y-5">
                    <div className="flex items-center justify-center">
                        <h5 className="font-bold border-b-4 w-18 border-green-500">Features</h5>
                    </div>
                    <h2 className="text-2xl font-bold">Unlock Your Profile's Potential with Powerful Features</h2>
                </div>
                <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featureData.map((features) => (
                        <div 
                            key={features.id}
                            className="bg-transparent border border-green-500 px-5 pb-5 rounded-md"
                        >
                            <Image
                                src={features.Icon}
                                width={200}
                                height={100}
                                alt={features.title}
                                className="w-full object-cover rounded-lg"
                            />
                            <h2>{features.title}</h2>
                            <p className="text-sm">{features.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;