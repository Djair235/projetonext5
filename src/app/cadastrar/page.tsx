"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Cadastrar() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="w-full max-w-xs p-4 mb-30">
        <CardHeader className="mt-2">
          <CardTitle>Crie um usuário</CardTitle>
          <CardDescription>
            Cadastre um nome e uma idade para o seu usuário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action="https://server-less-gules.vercel.app/api/createUser"
            method="POST"
            className="flex flex-col gap-6"
          >
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Nome de usuário"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="idade">Idade</Label>
              <Input
                id="idade"
                name="idade"
                type="number"
                placeholder="Idade"
                required
              />
            </div>
            <CardFooter className="flex-col gap-2 px-0">
              <Button type="submit" className="w-full cursor-pointer">
                Cadastrar
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
