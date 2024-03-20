import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header.tsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Andrew Cho",
  description: "If you want to get stuff done, hire Andrew Cho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        {/* <div className="bg-[#fbe2e3] relative top-[-6rem] -z-10 right-[11rem] h-[31.23rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <div className="bg-[#fbe2e3] relative top-[-6rem] -z-10 left-0 h-[31.23rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem]"></div>

        {/* <div className="bg-[#dcd9d9] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.23rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <div className="bg-[#dcd9d9] absolute top-[-6rem] -z-10 right-0px h-[31.23rem] w-[31.25rem] sm:right-0 lg:w-[60rem] rounded-full blur-[10rem]"></div>
        {children}
        <Header />
      </body>
    </html>
  );
}
