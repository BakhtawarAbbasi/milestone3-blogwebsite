import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar(){
    return(
        <nav className="w-full relative flex items-center justify-between mx-auto px-12 py-5">
            <Link href="/" className="font-bold text-3xl">My<span className="text-primary">Blog</span></Link>
            <ModeToggle/>
        </nav>

    );
}