import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_PROJECTS, getProjectBySlug } from "@/content/projects";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";

type PageParams = {
  slug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export const dynamicParams = false;

export function generateStaticParams(): Array<PageParams> {
  return ALL_PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Ce projet n’existe pas ou n’est plus disponible.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${project.name} | Pablo`;
  const description =
    project.description?.trim() ||
    "Détails du projet (stack, points techniques, liens).";
  const url = `/projects/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: project.image
        ? [
            {
              url: project.image,
              alt: project.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: project.image ? "summary_large_image" : "summary",
      title,
      description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
