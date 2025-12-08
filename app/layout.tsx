import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fahri Can Genç — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-zinc-100">
        <header className="border-b border-zinc-900/80">
          <div className="max-w-6xl mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>

        <footer className="border-t border-zinc-900/80 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
