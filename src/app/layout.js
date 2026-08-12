import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tolani Adepitan",
  description:
    "Frontend Developer | Technical Writer | AI Solutions Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  );
}