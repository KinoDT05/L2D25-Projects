import { Link } from "react-router";

export default function Header() {
    return (
        <header className="p-4 bg-[#b5d7ff]">
            <nav className="flex justify-center items-center">
                <ul className="flex gap-x-16 font-medium">
                    <li className="text-slate-700 hover:text-blue-500 active:text-lime-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-slate-700 hover:text-blue-500 active:text-lime-400">
                        <Link to="/gacha">Gacha</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
