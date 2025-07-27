import "./globals.css";
import { Inter } from "next/font/google";

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
              {/* <Header /> */}
              <main className="">
              {children}
              </main>
              {/* <Footer />
              <ToastContainer/> */}
          </body>
        </html>
     
  );
}
