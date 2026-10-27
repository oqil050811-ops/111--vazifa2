function Sidebar() {
  return (
    <div className="w-[210px] min-h-screen bg-white border-r border-gray-200 p-4 shrink-0">
      <div className="flex items-center gap-2 mb-10 px-1">
        <div className="text-3xl text-black">⬡</div>

        <div>
          <h1 className="text-xl font-bold text-black">Dashboard</h1>
          <p className="text-[8px] text-gray-400">v.01</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 px-2 py-3 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
          <span>⌕</span>
          <p className="text-xs">Dashboard</p>
        </div>

        <div className="flex items-center justify-between px-2 py-3 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>⬡</span>
            <p className="text-xs">Product</p>
          </div>
          <span>›</span>
        </div>

        <div className="flex items-center justify-between px-2 py-3 bg-violet-600 text-white rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>▣</span>
            <p className="text-xs">Customers</p>
          </div>
          <span>›</span>
        </div>

        <div className="flex items-center justify-between px-2 py-3 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>♧</span>
            <p className="text-xs">Income</p>
          </div>
          <span>›</span>
        </div>

        <div className="flex items-center justify-between px-2 py-3 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>⚙</span>
            <p className="text-xs">Promote</p>
          </div>
          <span>›</span>
        </div>

        <div className="flex items-center justify-between px-2 py-3 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>ⓘ</span>
            <p className="text-xs">Help</p>
          </div>
          <span>›</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;