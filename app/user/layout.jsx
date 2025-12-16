import "../../css/globals.css";
import Sidebar from '@/components/user/Sidebar'


export default async function RootLayout({ children }) {

  return (
        <html lang="en">
          <body className='flex'>
              <Sidebar />
              <main className='flex-1 px-4'>
                  {children}
              </main>
          </body>
        </html>
  );
}
