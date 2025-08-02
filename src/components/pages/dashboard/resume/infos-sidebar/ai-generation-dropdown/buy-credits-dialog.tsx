import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

type BuyCreditsDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const BuyCreditsDialog = ({ open, setOpen }: BuyCreditsDialogProps) => {
  const pathname = usePathname();

  // Dados estáticos simulando as opções de créditos
  const packages = [
    { id: "price_10", credits: 10, price: 5 },
    { id: "price_25", credits: 25, price: 10 },
    { id: "price_100", credits: 100, price: 20 },
  ];

  const { mutate: handleBuyCredits, isPending } = useMutation({
    mutationFn: (priceId: string) => {
      // Simula navegação para página de pagamento
      // Substitua pela chamada real da API se necessário
      window.location.href = `/payment?priceId=${priceId}&redirect=${encodeURIComponent(pathname)}`;
      return Promise.resolve();
    },
  });

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title="Comprar créditos"
      description="Escolha um dos pacotes abaixo para comprar créditos e começar a gerar!"
      content={
        <div className="flex flex-col gap-3 mt-2">
          {packages.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              className="flex flex-col h-max py-4 w-full"
              onClick={() => handleBuyCredits(item.id)}
              disabled={isPending}
            >
              <strong className="font-title font-bold text-2xl">
                {item.credits} créditos
              </strong>
              <span className="text-muted-foreground">
                por apenas R$ {item.price}
              </span>
            </Button>
          ))}
        </div>
      }
    />
  );
};
