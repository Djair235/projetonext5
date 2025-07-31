import Link from "next/link"
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center h-[75vh] px-4">
      <h1 className="text-3xl font-bold mb-3">Seja Bem Vindo!</h1>
      <p className="text-center mt-2 max-w-sm">
        Este é o meu terceiro projeto de um CRUD, feito com Next.js.
      </p>
      <p className="text-center mt-2 max-w-sm">
        Caso queira saber um pouco mais de como ele foi feito, clique no botão abaixo!
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full max-w-md items-center">
        <Button
          variant="outline"
          asChild
          className="w-[80%] sm:flex-1 flex items-center justify-center gap-2 p-2"
        >
          <Link href="/users">
            <ArrowRight className="w-6 h-6" />
            Ver Mais do projeto
          </Link>
        </Button>

        <Button
          asChild
          className="w-[80%] sm:flex-1 flex items-center justify-center gap-2 p-2"
        >
          <a
            href="https://www.github.com/Djair235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
            Ver Repositório
          </a>
        </Button>
      </div>
    </div>
  );
}
