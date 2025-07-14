"use client"

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header-scroll';

export default function Home() {
  const featuredClasses = [
    {
      title: 'Cálculo Diferencial',
      description: 'Fundamentos del cálculo, límites, derivadas y sus aplicaciones en problemas del mundo real.',
      image: 'https://placehold.co/600x400.png',
      hint: 'mathematics books'
    },
    {
      title: 'Álgebra Lineal',
      description: 'Explora vectores, matrices, espacios vectoriales y transformaciones lineales.',
      image: 'https://placehold.co/600x400.png',
      hint: 'abstract algebra'
    },
    {
      title: 'Física Mecánica',
      description: 'Estudio del movimiento, las fuerzas, la energía y la conservación en sistemas físicos.',
      image: 'https://placehold.co/600x400.png',
      hint: 'physics gravity'
    },
    {
      title: 'Programación de Computadores',
      description: 'Introducción a la lógica de programación y al desarrollo de algoritmos eficientes.',
      image: 'https://placehold.co/600x400.png',
      hint: 'programming code'
    },
  ];

  const heroSlides = [
    {
      title: "Educación de Calidad a tu Alcance",
      description: "Mi objetivo es brindarte una educación de calidad con pasión y dedicación, fomentando el pensamiento crítico y la resolución de problemas.",
      image: "https://placehold.co/1920x1080.png",
      hint: "university classroom students",
      buttonText: "Explorar Clases",
      buttonLink: "#clases"
    },
    {
      title: "Inspirando a la Próxima Generación",
      description: "Con más de 15 años de experiencia, mi misión es inspirar a la próxima generación de ingenieros y científicos a través del aprendizaje práctico.",
      image: "https://placehold.co/1920x1080.png",
      hint: "teacher helping student",
      buttonText: "Sobre Mí",
      buttonLink: "#sobre-mi"
    },
    {
      title: "Recursos y Asesorías Personalizadas",
      description: "Encuentra aquí todos los recursos para mis clases. Si tienes alguna pregunta o necesitas asesoría, no dudes en ponerte en contacto.",
      image: "https://placehold.co/1920x1080.png",
      hint: "library study group",
      buttonText: "Contáctame",
      buttonLink: "#contacto"
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />

      <main className="flex-1">
      <section className="relative w-full h-dvh min-h-[600px] flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="h-full">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      data-ai-hint={slide.hint}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="container px-4 md:px-6 text-center text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
                          {slide.title}
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl font-body">
                          {slide.description}
                        </p>
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <Link href={slide.buttonLink} prefetch={false}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white border-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white border-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </section>

        <section id="clases" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Clases Destacadas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Un vistazo a algunos de los cursos que imparto. Cada uno diseñado para desafiarte y expandir tus conocimientos.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
              <Carousel
                opts={{ align: 'start', loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {featuredClasses.map((clase, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105">
                          <CardHeader className="p-0">
                            <Image
                              src={clase.image}
                              width={600}
                              height={400}
                              alt={clase.title}
                              data-ai-hint={clase.hint}
                              className="rounded-t-lg object-cover w-full aspect-[3/2]"
                            />
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col text-center p-6 space-y-2">
                             <CardTitle className="font-headline text-2xl">{clase.title}</CardTitle>
                            <CardDescription className="font-body flex-grow">{clase.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
               <Image
                src="https://placehold.co/600x800.png"
                width="600"
                height="800"
                alt="Profesor Narvá en su oficina"
                data-ai-hint="male professor office"
                className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">SOBRE MÍ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Un Apasionado por la Enseñanza</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-body">
                  Con más de 15 años de experiencia en el ámbito académico y profesional, mi misión es inspirar a la próxima generación de ingenieros y científicos. Soy un firme creyente en el poder del aprendizaje práctico y el pensamiento crítico.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-body">
                  Mi trayectoria incluye un doctorado en Ciencias de la Computación y múltiples publicaciones en revistas especializadas. Fuera del aula, disfruto de la fotografía de paisajes y de contribuir a proyectos de software de código abierto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ponte en Contacto</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                ¿Tienes alguna pregunta o necesitas asesoría? No dudes en escribirme.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-8 w-8 text-primary" />
                  <p className="font-medium">Email</p>
                  <a href="mailto:profesor.narva@eafit.edu.co" className="text-sm text-muted-foreground hover:text-primary">profesor.narva@eafit.edu.co</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-8 w-8 text-primary" />
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">(+57) 300 123 4567</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="h-8 w-8 text-primary" />
                  <p className="font-medium">Oficina</p>
                  <p className="text-sm text-muted-foreground">Bloque 38, Oficina 501, EAFIT</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Clases con Narvá. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Política de Privacidad
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos de Servicio
          </Link>
        </nav>
      </footer>
    </div>
  );
}
