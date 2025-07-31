import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { User } from "lucide-react";

export default async function page() {
  const API_URL = "https://server-less-gules.vercel.app/api/users";
  const response = await fetch(API_URL, { cache: "no-store" });
  const data = await response.json();

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="flex text-3xl mt-10 mb-5 font-bold">Resposta da Api</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {data.map((item: any) => {
            return (
              <Card className="w-full max-w-xs mb-5 p-4 sm:mr-6" key={item.id}>
                <CardHeader>
                  <CardTitle className="text-[20px]">
                    Olá, {item.nome}
                  </CardTitle>
                  <CardDescription className="mt-[-5px]">
                    Informações do usuário
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-[-20px]">
                  <p>ID: {item.id}</p>
                  <p>Nome: {item.nome}</p>
                  <p>Idade: {item.idade}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
