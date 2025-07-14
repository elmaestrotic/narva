import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

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

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="sr-only">Narvá Classes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#clases" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Clases
          </Link>
          <Link href="#sobre-mi" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre Mí
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    Clases con Narvá - Universidad EAFIT
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl font-body">
                    Bienvenido. Aquí encontrarás recursos, horarios y toda la información relevante para mis clases. Mi objetivo es brindarte una educación de calidad con pasión y dedicación.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#clases" prefetch={false}>Explorar Clases</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contacto" prefetch={false}>Contáctame</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Profesor Narvá"
                data-ai-hint="male professor"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
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
