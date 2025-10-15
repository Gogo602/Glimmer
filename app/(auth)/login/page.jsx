

export default function LoginPage() {
  return (
    <section className="min-h-screen w-full bg-black relative flex items-center justify-center px-3">
        {/* Dark Noise Colored Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
        background: "#000000",
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
        `,
        backgroundSize: "20px 20px, 30px 30px, 25px 25px",
        backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />
        <div className="relative text-white border-4 border-[#270A63E5] p-5 w-full -mt-10 md:w-1/2">
            <div className="space-y-5">
                  <h2 className="text-center text-2xl font-bold">Login</h2>
                  <p>GliimerId is built for you</p>
                <form action="" className="flex flex-col w-full space-y-5">
                    <div>
                        <label htmlFor="email" className="pb-2">Email</label>
                        <input type="email" className="border border-white hover:border-[#270A63E5] px-4 py-1 rounded-md block outline-none w-full"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="pb-2">Password</label>
                        <input type="password" className="border border-white hover:border-[#270A63E5] px-4 py-1 rounded-md block outline-none w-full"/>
                    </div>
                </form>
                <p>Dont have an account? signup</p>
            </div>
        </div>
    </section>
  )
}
