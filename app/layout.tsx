/*
 * @Author: sutengfei
 * @Date: 2024-11-19 18:50:25
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-24 19:01:56
 */
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
