import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0D1117] text-white">

      <Sidebar />

      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}