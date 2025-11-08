<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 72f1b14 (atualizado)
import { ResumePage } from "@/components/pages/dashboard/resume";
import { getResumeById } from "@/db/queries";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

type DashboardResumesPageProps = {
<<<<<<< HEAD
  params: { id: string };
}

export default async function DashboardResumePage({ params }: DashboardResumesPageProps) {
  const resumeId = params.id;
=======
  params: Promise<{ id: string }>;
}

type ResumeData = any;

export default async function DashboardResumePage({ params }: DashboardResumesPageProps) {
  const resumeId = (await params).id;
>>>>>>> 72f1b14 (atualizado)

  const resume = await getResumeById(resumeId);

  if (!resume) return notFound();

  const initialData = resume.data as ResumeData;

  const session = await auth();

  return (
    <ResumePage title={resume.title} initialData={initialData} user={session?.user} />
  );
}