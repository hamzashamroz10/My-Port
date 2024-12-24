import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Stairtransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500","600", "700", "800",],
  variable: '--font-jetBrainsMono',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <Stairtransition />
         <PageTransition >
           { children}
         </PageTransition>
        </body>
    </html>
  );
}
