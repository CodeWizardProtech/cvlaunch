<<<<<<< HEAD
"use client"

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog"
=======
"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
>>>>>>> 72f1b14 (atualizado)
import { InputField } from "@/components/ui/input/field";
import { createResume } from "@/db/actions";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import { FormProvider, useForm } from "react-hook-form"
=======
import { FormProvider, useForm } from "react-hook-form";
>>>>>>> 72f1b14 (atualizado)
import { toast } from "sonner";

type FormData = {
  title: string;
<<<<<<< HEAD
}
=======
};
>>>>>>> 72f1b14 (atualizado)

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>();

  const router = useRouter();

  const { mutate: handleCreateResume, isPending } = useMutation({
<<<<<<< HEAD
    mutationFn: createResume,
    onSuccess: (resume) => {
      toast.success("Currículo criado com sucesso!");
      router.push(`/dashboard/resumes/${resume.id}`);
    }
  })

  const onSubmit = async (data: FormData) => {
    handleCreateResume(data.title);
  }
=======
    mutationFn: async (data: { title: string }) => {
      return createResume(data.title);
    },
    onSuccess: (resume) => {
      toast.success("Currículo criado com sucesso!");
      router.push(`/dashboard/resumes/${resume.id}`);
    },
    onError: (err: unknown) => {
      const message =
        err instanceof Error ? err.message : "Erro ao criar currículo.";
      toast.error(message);
    },
  });

  const onSubmit = async (data: FormData) => {
    const plainData = { title: data.title };
    handleCreateResume(plainData);
  };
>>>>>>> 72f1b14 (atualizado)

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={
        <FormProvider {...methods}>
<<<<<<< HEAD
          <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
=======
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
>>>>>>> 72f1b14 (atualizado)
            <InputField label="Título" name="title" required />

            <Button
              type="submit"
              className="w-max mt-6 ml-auto"
              disabled={isPending}
            >
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 72f1b14 (atualizado)
