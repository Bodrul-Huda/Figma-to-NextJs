import AppNavBar from "@/components/AppNavbar";
import "./globals.css";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Design Agency",
  description: "Next generation Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#269669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <div className="absolute z-50 top-0 left-0 right-0">
          <AppNavBar />
        </div>

        <div className="w-full min-h-screen ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
