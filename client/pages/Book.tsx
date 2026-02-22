import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Star,
  BookOpen,
  Download,
  Gift,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Quote,
  Menu,
  X,
  ShoppingCart,
  CreditCard,
  FileText,
  Clock,
  Award,
  Zap,
  Target,
  Shield,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";
import CheckoutModal from "@/components/CheckoutModal";

export default function Book() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    "digital" | "physical" | "bundle"
  >("digital");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Este libro transformó completamente mi mentalidad financiera. ¡Pasé de $30k en deuda a un patrimonio neto de 6 cifras en solo 2 años!",
      author: "Jessica Chen",
      role: "Directora de Marketing",
      rating: 5,
    },
    {
      text: "El marco de 7 pasos de Silvia es oro puro. He recomendado este libro a todos los que conozco. ¡Es transformador!",
      author: "Michael Rodriguez",
      role: "Emprendedor",
      rating: 5,
    },
    {
      text: "¡Por fin, un libro de finanzas que realmente es agradable de leer! Las estrategias son prácticas y fáciles de implementar.",
      author: "Emily Thompson",
      role: "Maestra",
      rating: 5,
    },
    {
      text: "He leído docenas de libros de finanzas, pero este es diferente. No se trata solo de dinero, se trata de mentalidad.",
      author: "David Kim",
      role: "Ingeniero de Software",
      rating: 5,
    },
  ];

  const chapters = [
    {
      number: "F",
      title: "Finanzas: Establece tus bases financieras sólidas",
      duration: "20 min de lectura",
    },
    {
      number: "E",
      title: "Estratégicas: Planifica tu futuro financiero",
      duration: "25 min de lectura",
    },
    {
      number: "L",
      title: "Liderazgo: Toma control de tu dinero",
      duration: "18 min de lectura",
    },
    {
      number: "I",
      title: "Inteligencia: Invierte de manera inteligente",
      duration: "22 min de lectura",
    },
    {
      number: "Z",
      title: "Zenitud: Encuentra paz en tus finanzas",
      duration: "17 min de lectura",
    },
  ];

  const bonuses = [
    {
      icon: FileText,
      title: "Libro de Trabajo para Construir Riqueza",
      value: "$47",
      description: "Ejercicios paso a paso y hojas de trabajo",
    },
    {
      icon: Target,
      title: "Plantillas para Establecer Metas",
      value: "$27",
      description: "Plantillas de planificación financiera",
    },
    {
      icon: TrendingUp,
      title: "Calculadora de Inversión",
      value: "$37",
      description: "Calcula tu crecimiento de riqueza",
    },
    {
      icon: Award,
      title: "Acceso al Curso de Certificación",
      value: "$197",
      description: "Curso en línea de 4 semanas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-finance-blue-50 to-white relative overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-finance-gold-500 to-finance-gold-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-finance-gold-500" />
              <span className="text-2xl font-heading font-bold text-finance-blue-900">
                Silvia Mercado
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-finance-blue-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-finance-blue-600 transition-colors"
              >
                Acerca de
              </Link>
              <Link to="/book" className="text-finance-gold-600 font-semibold">
                Libro
              </Link>
              <Button
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                Agendar Consulta
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-finance-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-finance-blue-600 transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-finance-blue-600 transition-colors"
                >
                  Acerca de
                </Link>
                <Link
                  to="/book"
                  className="text-finance-gold-600 font-semibold"
                >
                  Libro
                </Link>
                <Button
                  className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white mt-4"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section with 3D Book */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-finance-blue-900/5 to-finance-gold-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-finance-gold-100 text-finance-gold-700 border-finance-gold-200 text-lg px-4 py-2">
                    #1 Bestseller
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-finance-gold-500 text-finance-gold-500"
                      />
                    ))}
                    <span className="text-sm font-semibold text-gray-700 ml-2">
                      4.9/5 (2,847 reseñas)
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-finance-blue-900 leading-tight">
                  Finanzas
                  <span className="text-finance-gold-500 block">Felices</span>
                </h1>

                <p className="text-2xl text-finance-blue-700 font-medium">
                  Finanzas Felices con el Método F.E.L.I.Z.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Te ayudo a manejar tu dinero para ahorrar e invertir SIN
                  ARRIESGAR TU PATRIMONIO. Estructuremos tus finanzas para que
                  puedas ahorrar e invertir a corto, mediano y largo plazo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-finance-blue-900">
                      1,000+
                    </div>
                    <div className="text-sm text-gray-600">
                      Personas Asesoradas
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-finance-blue-900">
                      $50
                    </div>
                    <div className="text-sm text-gray-600">Desde $50 MXN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-finance-blue-900">
                      CNSG
                    </div>
                    <div className="text-sm text-gray-600">Certificación</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      setSelectedProduct("digital");
                      setCheckoutModalOpen(true);
                    }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Comprar el Libro - $29
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-finance-blue-600 text-finance-blue-600 hover:bg-finance-blue-50"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Capítulo Gratis
                  </Button>
                </div>
              </div>
            </div>

            {/* 3D Book Display */}
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-finance-gold-500 to-finance-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative">
                  <div className="book-container perspective-1000">
                    <div className="book transform-gpu hover:rotateY-12 transition-transform duration-700 ease-out">
                      <div className="book-front bg-gradient-to-br from-finance-blue-600 to-finance-blue-900 rounded-lg shadow-2xl p-8 text-white relative overflow-hidden w-80 h-96">
                        <div
                          className={
                            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
                          }
                        />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <Badge className="bg-finance-gold-500 text-white mb-4">
                              BESTSELLER
                            </Badge>
                            <h3 className="text-4xl font-heading font-bold mb-2">
                              Finanzas
                            </h3>
                            <h3 className="text-4xl font-heading font-bold mb-4 text-finance-gold-400">
                              Felices
                            </h3>
                            <p className="text-finance-blue-100 text-lg">
                              Método F.E.L.I.Z. para una relación sana con tu
                              dinero
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-heading font-bold">
                              SILVIA MERCADO
                            </p>
                            <p className="text-finance-blue-200 text-sm">
                              Coach Financiera y Autora
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="book-spine bg-gradient-to-b from-finance-blue-700 to-finance-blue-900 w-8 h-96" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dani vs Carolina Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
                ¿Cuál de las dos eres o quieres llegar a ser?
              </h2>
              <p className="text-xl text-gray-600">
                Dos caminos diferentes, dos realidades financieras
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Dani - Success Story */}
              <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-green-800 mb-4">
                    Dani
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Hace presupuestos y tiene metas de ahorro claras
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Es socia de las mejores empresas del mundo
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Puede gastar con confianza
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Tiene pensión garantizada para su retiro
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Carolina - Struggle Story */}
              <Card className="border-2 border-red-200 bg-red-50 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <X className="h-12 w-12 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-red-800 mb-4">
                    Carolina
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">No llega a fin de mes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Tiene deudas con sus tarjetas de crédito
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        No tiene cómo pagar atención médica especializada
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Lleva 15 años trabajando sin poder ahorrar
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        No sabe cómo se va a jubilar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-8">
                La diferencia no está en cuánto ganan, sino en cómo administran
                su dinero
              </p>
              <Button
                size="lg"
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                <Target className="mr-2 h-5 w-5" />
                Conviértete en Dani
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Savings Misconception */}
      <section className="py-20 bg-finance-gold-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-8">
              Muchas personas piensan que para ahorrar necesitan dinero de
              sobra...
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ésta es quizá una de las creencias más peligrosas y falsas
                cuando pensamos en ahorrar e invertir. El ahorro{" "}
                <strong>NO TIENE NADA QUE VER</strong> con que te sobre dinero o
                con que ganes mucho, sino con{" "}
                <strong>cómo administras lo que tienes</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                También tiene que ver con darnos cuenta de nuestros{" "}
                <strong>HÁBITOS FINANCIEROS</strong>. ¿A quién no le gusta darse
                un lujito de vez en cuando? A todos nos encanta, pero ¿realmente
                son de vez en cuando, o ya se volvieron parte de tu día a día?
              </p>
              <p className="text-lg text-finance-blue-800 font-semibold">
                Cuando empezamos a identificar estos patrones, distinguimos
                gastos y construimos metas alcanzables,
                <span className="text-finance-gold-600">
                  {" "}
                  TODOS PODEMOS AHORRAR E INVERTIR
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Animated Testimonials */}
      <section className="py-16 bg-finance-gold-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-finance-blue-900 mb-4">
                Lo Que Dicen los Lectores
              </h2>
              <p className="text-gray-600">
                Transformaciones reales de personas reales
              </p>
            </div>

            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === activeTestimonial
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                >
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-12 w-12 text-finance-gold-400 mx-auto mb-6" />
                      <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-finance-gold-400 text-finance-gold-400"
                          />
                        ))}
                      </div>
                      <div>
                        <div className="font-semibold text-finance-blue-900 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-500">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-finance-gold-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Chapter Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              El Método F.E.L.I.Z.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 pilares fundamentales para crear una relación sana con tu dinero
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {chapters.map((chapter, index) => (
                <Card
                  key={chapter.number}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gradient-to-r from-white to-finance-blue-50/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-finance-gold-500 to-finance-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {chapter.number}
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-finance-blue-900 group-hover:text-finance-gold-600 transition-colors">
                            {chapter.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{chapter.duration}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-finance-gold-500 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Common Errors Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
                Después de haber asesorado a más de 1,000 personas
              </h2>
              <p className="text-xl text-red-600 font-semibold">
                He notado 4 errores que se repiten constantemente
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-finance-blue-900 mb-2">
                        Creer que ahorrando una o dos veces será suficiente
                      </h3>
                      <p className="text-gray-600">
                        El ahorro debe ser un hábito constante, no un evento
                        esporádico.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-finance-blue-900 mb-2">
                        No llevar control de sus gastos mensuales
                      </h3>
                      <p className="text-gray-600">
                        Sin control, es imposible saber dónde va tu dinero
                        realmente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-finance-blue-900 mb-2">
                        Abandonar sus proyectos de ahorro por deseos
                        instantáneos
                      </h3>
                      <p className="text-gray-600">
                        La gratificación inmediata destruye los objetivos a
                        largo plazo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-finance-blue-900 mb-2">
                        Creer en propuestas de inversión "mágicas"
                      </h3>
                      <p className="text-gray-600">
                        No existen fórmulas mágicas, solo estrategias sólidas y
                        disciplina.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Investment Objections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
                Resolvamos tus dudas sobre invertir
              </h2>
              <p className="text-xl text-gray-600">
                Las dos objeciones más comunes que escucho
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Objection 1 */}
              <Card className="border-2 border-finance-blue-200 bg-finance-blue-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-finance-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-finance-blue-600" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-finance-blue-900 mb-4">
                      "Tengo miedo de invertir y perderlo todo"
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Te entiendo más de lo que te imaginas, porque también lo
                      sentí. Hay algo que me ayudó a entender esto:
                      <strong>
                        "A mayor riesgo, mayor rendimiento y a menor riesgo,
                        menor rendimiento"
                      </strong>
                      .
                    </p>
                    <p>
                      Las inversiones pueden ser tan arriesgadas o tan seguras
                      como quieras, depende de lo que tú decidas, de lo que te
                      haga sentir cómodo. A eso le llamo{" "}
                      <strong>"Tu perfil de inversionista"</strong>.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-finance-blue-800 font-semibold">
                        ¿En qué clase de inversionista te gustaría convertirte?
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Objection 2 */}
              <Card className="border-2 border-finance-gold-200 bg-finance-gold-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-finance-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-finance-gold-600" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-finance-blue-900 mb-4">
                      "Para invertir tengo que ser millonario, y no lo soy"
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Otro de los cientos de mitos que giran alrededor de las
                      inversiones. Si esto fuera cierto, sólo el 1% de la
                      población podría hacerlo, y no es así.
                    </p>
                    <p>
                      En México hay decenas de instrumentos financieros desde{" "}
                      <strong>$50 MXN</strong>, y puedes invertirlos en empresas
                      como Amazon, Meta, Google, Netflix, etc.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-finance-gold-700 font-semibold">
                        No tienes que ser millonario para invertir, no tienes
                        que ahorrar 10 años para invertir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Purchase Options */}
      <section className="py-20 bg-finance-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              Elige Tu Formato
            </h2>
            <p className="text-xl text-gray-600">
              Disponible en formatos digitales y físicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Digital Edition */}
            <Card className="border-2 border-gray-200 hover:border-finance-gold-500 transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <Download className="h-12 w-12 text-finance-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Edición Digital
                </CardTitle>
                <CardDescription>Descarga instantánea</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $29
                  </div>
                  <div className="text-sm text-gray-500">Pago único</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Formatos PDF, EPUB y MOBI
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Descarga instantánea</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Acceso de por vida</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Compatible con todos los dispositivos
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-blue-600 hover:bg-finance-blue-700"
                  onClick={() => {
                    setSelectedProduct("digital");
                    setCheckoutModalOpen(true);
                  }}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Comprar Digital
                </Button>
              </CardContent>
            </Card>

            {/* Physical Edition */}
            <Card className="border-2 border-finance-gold-500 shadow-lg bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-finance-gold-500 text-white px-4 py-1">
                  Más Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <BookOpen className="h-12 w-12 text-finance-gold-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Edición Física
                </CardTitle>
                <CardDescription>Libro de tapa dura + digital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $47
                  </div>
                  <div className="text-sm text-gray-500">+ envío gratis</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Libro de tapa dura premium
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Edición digital incluida
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Envío gratis mundial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Calidad premium</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-gold-500 hover:bg-finance-gold-600"
                  onClick={() => {
                    setSelectedProduct("physical");
                    setCheckoutModalOpen(true);
                  }}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar Físico + Digital
                </Button>
              </CardContent>
            </Card>

            {/* Bundle Edition */}
            <Card className="border-2 border-gray-200 hover:border-finance-blue-500 transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <Gift className="h-12 w-12 text-finance-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Edición Bundle
                </CardTitle>
                <CardDescription>Libro + Consulta de 1 hora</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $97
                  </div>
                  <div className="text-sm text-gray-500">Ahorra $199</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Libro físico + digital
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Consulta telefónica de 1 hora
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Plan de acción personalizado
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Acceso prioritario</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-blue-600 hover:bg-finance-blue-700"
                  onClick={() => {
                    setSelectedProduct("bundle");
                    setCheckoutModalOpen(true);
                  }}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Obtener Oferta Bundle
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* About Silvia Section */}
      <section className="py-16 bg-gradient-to-r from-finance-blue-50 to-finance-gold-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-finance-blue-900 mb-4">
                Mi nombre es Silvia Mercado
              </h2>
              <p className="text-xl text-gray-600">
                Tu asesora certificada para lograr libertad financiera
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-finance-gold-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Asesora certificada con Cédula B</strong> ante
                        la Comisión Nacional de Seguros y Fianzas
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-finance-gold-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Diplomado en Mercados Financieros</strong> e
                        inversión en bolsa por el Tec de Monterrey
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-finance-gold-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Graduada de la Escuela de Dale Carnegie</strong>
                        , miembro activo de "Million Dollar Round Table"
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-finance-gold-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Presidente del capítulo C+</strong> de Business
                        Network International y miembro de Coparmex
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-finance-gold-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-finance-blue-900 mb-4">
                      Experiencia Corporativa
                    </h3>
                    <p className="text-gray-700 mb-4">
                      He impartido cursos y talleres de finanzas personales en
                      empresas nacionales e internacionales:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>• DoTerra</span>
                      <span>• Walmart</span>
                      <span>• SkyAlert</span>
                      <span>• Johnson&Johnson</span>
                      <span>• Ernst and Young</span>
                      <span>• Shell</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-finance-blue-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold mb-4">
                En el 2024 me convertí en autora de "Finanzas Felices"
              </h3>
              <p className="text-xl text-finance-blue-100 mb-6">
                Con el cual busco inspirar a jóvenes y adultos a crear una
                relación sana con su dinero a través de mi método{" "}
                <span className="text-finance-gold-400 font-bold">
                  F.E.L.I.Z.
                </span>
              </p>
              <p className="text-lg text-finance-blue-200">
                (Finanzas Estratégicas con Liderazgo, Inteligencia y Zenitud)
              </p>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setBookingModalOpen(true)}
              >
                <Target className="mr-2 h-5 w-5" />
                Agenda tu Asesoría Personalizada
              </Button>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Footer */}
      <footer className="bg-finance-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-8 w-8 text-finance-gold-500" />
                <span className="text-2xl font-heading font-bold">
                  Silvia Mercado
                </span>
              </div>
              <p className="text-finance-blue-100">
                Ayudando a las personas a lograr libertad financiera a través de
                educación, coaching y estrategias probadas.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Enlaces Rápidos</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Acerca de
                </Link>
                <Link
                  to="/book"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Libro
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Recursos</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Boletín
                </a>
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Testimonios
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Conectar</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-finance-blue-700 mt-12 pt-8 text-center text-finance-blue-100">
            <p>&copy; 2024 Silvia Mercado. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
