import { MainNav } from "@/_components/main-nav";
import { MobileNav } from "@/_components/mobile-nav";

export function Header() {
    return (
        <header className="sticky top-0 w-full h-10 p-1 border-b bg-white z-50">
            <div className="container flex items-center text-2xl">
                {/* {Desktop nav} */}
                <MainNav />

                {/* {Mobile Nav} */}
                <MobileNav />
            </div>
        </header>
    );
}
