export default function ChatPage() {
  return (
    <main className="flex flex-col h-screen bg-gray-950 text-white">
      <header className="p-4 border-b border-gray-800 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <h1 className="text-lg font-semibold">Chat</h1>
        <span className="text-xs text-gray-400">Real-time messaging</span>
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold shrink-0">A</div>
          <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 max-w-md">
            <p className="text-sm">Hey! Welcome to the chat app.</p>
            <span className="text-xs text-gray-500 mt-1 block">12:00 PM</span>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-md">
            <p className="text-sm">Thanks! Looks great.</p>
            <span className="text-xs text-blue-200 mt-1 block">12:01 PM</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold shrink-0">B</div>
        </div>
      </div>
      <form className="p-4 border-t border-gray-800 flex gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
        >
          Send
        </button>
      </form>
    </main>
  );
}
