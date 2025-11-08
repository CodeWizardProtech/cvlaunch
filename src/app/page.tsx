<<<<<<< HEAD
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Crie currículos de forma rápida e fácil com nossos modelos gratuitos.",
}
=======
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";

export const metadata: Metadata = {
  title: "cvlaunch: Criador de Currículos Gratuito e Fácil de Usar",
  description:
    "Com o cvlaunch, você cria currículos profissionais em minutos. Escolha um de nossos modelos gratuitos e comece a construir seu futuro profissional agora mesmo.",
};
>>>>>>> 72f1b14 (atualizado)

export default function Home() {
  return (
    <main className="w-full h-screen bg-gradient-to-tl from-muted flex flex-col md:justify-center p-6 overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <div>
<<<<<<< HEAD
          <Logo className="w-full max-w-[370px] mb-8" />

          <h1 className="font-title font-bold text-5xl max-w-[500px]">
            Um criador de currículos gratuito e fácil de usar
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Comece a criar seus currículos de forma rápida e fácil com nossos
=======
          <Logo className="w-full max-w-[190px] mb-8" />

          <h1 className="font-title font-bold text-5xl max-w-[550px]">
            Crie seu currículo profissional com o cvlaunch
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Comece a criar seu currículo de forma rápida e fácil com nossos
>>>>>>> 72f1b14 (atualizado)
            modelos.
          </p>

          <Link href="/dashboard/resumes" passHref>
            <Button className="mt-4">Começar agora</Button>
          </Link>
        </div>

        <div className="flex-1 relative h-full">
          <Image
            src="/images/dashboard.webp"
<<<<<<< HEAD
            alt="Imagem do painel do ResumeCraft"
=======
            alt="Painel de controle do cvlaunch mostrando a edição de um currículo."
>>>>>>> 72f1b14 (atualizado)
            width={1200}
            height={800}
            className={cn(
              "md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:min-w-[80vw]",
              "rounded-lg overflow-hidden border-2 border-muted"
            )}
          />
        </div>
      </div>
    </main>
  );
}
