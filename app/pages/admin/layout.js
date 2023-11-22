import SideNav from '@/components/ui/sidenav';
 
export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto m-2">{children}</div>
    </div>
  );
}