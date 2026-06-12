export default function SidebarLayout({ children }) {
  return (
    <div className="flex">

      <div className="w-64">
      </div>

      <div className="flex-1">
        {children}
      </div>

    </div>
  );
}