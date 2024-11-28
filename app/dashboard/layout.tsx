/*
 * @Author: sutengfei
 * @Date: 2024-11-24 19:44:02
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-28 17:31:02
 */
import SideNav from "../ui/dashboard/sidenav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
