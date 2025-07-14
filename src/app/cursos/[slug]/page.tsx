"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// This is a basic mapping from slug to title.
// In a real application, this would likely come from a database or CMS.
const courseData: { [key: string]: { title: string; description: string } } = {
  'lenguajes-y-paradigmas-de-computacion': {
    title: 'Lenguajes y Paradigmas de Computación',
    description: 'Bienvenido al curso de Lenguajes y Paradigmas de Computación. Aquí encontrarás todos los recursos y materiales de la clase.',
  },
  'algoritmos-y-estructuras-de-datos-i': {
    title: 'Algoritmos y Estructuras de Datos I',
    description: 'Bienvenido al curso de Algoritmos y Estructuras de Datos I. Prepárate para sumergirte en el fascinante mundo de los algoritmos.',
  },
  'algoritmos-y-estructuras-de-datos-ii': {
    title: 'Algoritmos y Estructuras de Datos II',
    description: 'Bienvenido al curso de Algoritmos y Estructuras de Datos II. Continuaremos nuestro viaje por estructuras y algoritmos avanzados.',
  },
  'pedagogia-con-ia': {
    title: 'Pedagogía con IA',
    description: 'Bienvenido al curso de Pedagogía con IA. Descubre cómo la inteligencia artificial puede transformar la educación.',
  },
};

export async function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({
    slug: slug,
  }));
}

function getCourseDetails(slug: string) {
  return courseData[slug] || { title: 'Curso no encontrado', description: 'El curso que buscas no existe.' };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const { title, description } = getCourseDetails(params.slug);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-headline">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>El contenido de la clase seleccionada aparecerá aquí. Utiliza el menú de la izquierda para navegar entre las diferentes clases del curso.</p>
        </CardContent>
      </Card>
    </div>
  );
}