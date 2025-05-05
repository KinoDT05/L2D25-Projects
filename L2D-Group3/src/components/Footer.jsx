export default function Footer() {
  return (
    <footer className="h-full flex flex-col items-center justify-center bg-[#a8d6bb] p-2">
      <div className="flex flex-col gap-x-6 gap-y-4 py-2 items-center mb-6">
        <ul className="flex gap-x-9 *:text-sm mb-4 text-gray-500 font-medium">
          <li><a href="" className="hover:text-blue-500">Home</a></li>
          <li><a href="" className="hover:text-blue-500">Gacha</a></li>
          <li><a href="" className="hover:text-blue-500">Gallery</a></li>
        </ul>
      </div>
      <div className="mb-3">
        <span className=""></span>
        <p className="text-[10px] text-gray-500 font-light">
          Made with <span className="text-red-700">♡</span> by Cha Hua, Erin, Raizon, and Princess
        </p>
      </div>
    </footer>
  );
}
