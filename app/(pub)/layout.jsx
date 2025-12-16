import Navbar from "@/components/home/Navbar";
import "../../css/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ['latin'] });
;

export const metadata = {
  title: "GlimmerID",
  description: "Transform Your Profile",
};


export default async function RootLayout({ children }) {

  return (
   
        <html lang="en">
          <body
            className={inter.className}
          >
            
              <Navbar />
              <main className="">
              {children}
              </main>
              <Footer />
              {/* <ToastContainer/>  */}
          </body>
        </html>
     
  );
}
