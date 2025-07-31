import Link from "next/link"

export function MainNav() {
    return (
        <div className="hidden md:flex">
            <Link href="https://www.github.com/Djair235" target="_blank" className="underline ml-7">
                Projeto Crud V3
            </Link>

            <nav className="flex items-center gap-4 ml-7 text-xl">
                <Link href="/">Home</Link>
                <Link href="/users">Usuarios</Link>
                <Link href="/cadastrar">Cadastrar</Link>
                <Link href="/">Atualizar</Link>
                <Link href="/">Remover</Link>
            </nav>
        </div>
    );
}