import { notFound } from "next/navigation";
import { ALL_PROJECTS, getProjectBySlug } from "@/content/projects";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";

type PageParams = {
  slug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

/**
 * On force Next.js à générer uniquement les pages statiques dont le slug est connu.
 */
export const dynamicParams = false;

/**
 * Génère la liste des slugs à pré-render.
 */
export function generateStaticParams(): Array<PageParams> {
  return ALL_PROJECTS.map((project) => ({ slug: project.id }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
