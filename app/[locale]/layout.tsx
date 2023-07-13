import Navbar from "@/components/ui/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REALTOR GLOBAL",
  description: "",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
