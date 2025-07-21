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
import {
  Star,
  BookOpen,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  Play,
  ArrowRight,
  DollarSign,
  Shield,
  Target,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-finance-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-finance-gold-500" />
              <span className="text-2xl font-heading font-bold text-finance-blue-900">
                Silvia Mercado
              </span>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation & Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/about"
                className="text-gray-600 hover:text-finance-blue-600 transition-colors"
              >
                Acerca de
              </Link>
              <Link
                to="/book"
                className="text-gray-600 hover:text-finance-blue-600 transition-colors"
              >
                Libro
              </Link>
              <Button variant="outline" asChild>
                <Link to="/book">Obtener mi Libro</Link>
              </Button>
              <Button
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                Agendar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-finance-blue-600 transition-colors"
                >
                  Acerca de
                </Link>
                <Link
                  to="/book"
                  className="text-gray-600 hover:text-finance-blue-600 transition-colors"
                >
                  Libro
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/book">Obtener mi Libro</Link>
                  </Button>
                  <Button
                    className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-finance-gold-100 text-finance-gold-700 border-finance-gold-200">
                  Autora Bestseller • Coach Financiera • Mentora de Dinero
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-finance-blue-900 leading-tight">
                  Toma Control de tus
                  <span className="text-finance-gold-500"> Finanzas</span> con
                  Silvia Mercado
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transforma tu futuro financiero con estrategias comprobadas de
                  una autora bestseller y coach financiera de confianza que ha
                  ayudado a miles a lograr libertad financiera.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-finance-blue-600 hover:bg-finance-blue-700 text-white"
                  asChild
                >
                  <Link to="/book">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Obtener mi Libro
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-finance-gold-500 text-finance-gold-600 hover:bg-finance-gold-50"
                  onClick={() => setBookingModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar una Consulta
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-finance-blue-900">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600">Libros Vendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-finance-blue-900">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-600">Clientes Ayudados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-finance-blue-900">
                    $2.5M+
                  </div>
                  <div className="text-sm text-gray-600">Deuda Eliminada</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-finance-blue-100 to-finance-gold-100 p-8 relative overflow-hidden">
                <div
                  className={
                    'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
                  }
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-xl">
                      <Play className="h-12 w-12 text-finance-blue-600" />
                    </div>
                    <p className="text-finance-blue-900 font-semibold">
                      Evaluación Financiera Gratuita
                    </p>
                    <p className="text-sm text-gray-600">
                      Realiza nuestro cuestionario de 2 minutos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Destacado En
            </h2>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-gray-400">FORBES</div>
              <div className="text-2xl font-bold text-gray-400">CNBC</div>
              <div className="text-2xl font-bold text-gray-400">
                WALL STREET JOURNAL
              </div>
              <div className="text-2xl font-bold text-gray-400">BLOOMBERG</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-finance-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              Cómo Te Puedo Ayudar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige el camino que se adapte a tus metas financieras y
              presupuesto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-finance-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-finance-blue-600" />
                </div>
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Auditoría Financiera
                </CardTitle>
                <CardDescription className="text-lg">
                  Evaluación de 30 minutos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $297
                  </div>
                  <div className="text-sm text-gray-500">Pago único</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Revisión financiera completa
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Reporte PDF personalizado
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Hoja de ruta de plan de acción
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-blue-600 hover:bg-finance-blue-700"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-finance-gold-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-finance-gold-500 text-white px-4 py-1">
                  Más Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-finance-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-finance-gold-600" />
                </div>
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Plan de Construcción de Riqueza
                </CardTitle>
                <CardDescription className="text-lg">
                  Inmersión profunda de 60 minutos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $597
                  </div>
                  <div className="text-sm text-gray-500">Pago único</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Todo lo incluido en Auditoría Financiera
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Estrategia personalizada de construcción de riqueza
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Recomendaciones de inversión
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Soporte por email de 2 semanas
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-gold-500 hover:bg-finance-gold-600"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-finance-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-finance-blue-600" />
                </div>
                <CardTitle className="text-2xl font-heading text-finance-blue-900">
                  Coaching VIP
                </CardTitle>
                <CardDescription className="text-lg">
                  Soporte mensual
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-finance-blue-900 mb-2">
                    $1,997
                  </div>
                  <div className="text-sm text-gray-500">Por mes</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Todo lo incluido en Plan de Construcción de Riqueza
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Llamadas mensuales 1-a-1
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Soporte ilimitado por email
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Acceso prioritario a nuevo contenido
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-finance-blue-600 hover:bg-finance-blue-700"
                  onClick={() => setBookingModalOpen(true)}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <Badge className="bg-finance-gold-100 text-finance-gold-700 border-finance-gold-200">
                  #1 Bestseller
                </Badge>
                <h2 className="text-4xl font-heading font-bold text-finance-blue-900">
                  "Finanzas Felices con el Método F.E.L.I.Z."
                </h2>
                <p className="text-lg text-gray-600">
                  Descubre cómo crear una relación sana con tu dinero a través
                  de mi método F.E.L.I.Z. (Finanzas Estratégicas con Liderazgo,
                  Inteligencia y Zenitud). Este libro te inspirará a transformar
                  tus hábitos financieros sin arriesgar tu patrimonio, para
                  lograr la libertad que siempre has buscado.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-finance-gold-400 text-finance-gold-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      4.9/5 (2,847 reseñas)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Método F.E.L.I.Z. paso a paso
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Estrategias para ahorrar e invertir desde $50 MXN
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Sin arriesgar tu patrimonio
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-finance-gold-500 hover:bg-finance-gold-600"
                    asChild
                  >
                    <Link to="/book">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Obtener el Libro - $29
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/book">Descargar Capítulo Gratis</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-finance-blue-600 to-finance-blue-900 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
                  <div
                    className={
                      'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
                    }
                  ></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-finance-gold-400 text-lg font-semibold">
                        BESTSELLER
                      </div>
                      <h3 className="text-3xl font-heading font-bold mb-4">
                        Finanzas Felices
                      </h3>
                      <p className="text-finance-blue-100">
                        Método F.E.L.I.Z. para una relación sana con tu dinero
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-finance-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              Lo Que Dicen Mis Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Historias reales de personas que transformaron sus vidas
              financieras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-finance-gold-400 text-finance-gold-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "El libro de Silvia cambió completamente mi relación con el
                  dinero. ¡Pasé de vivir de quincena en quincena a tener $25,000
                  en ahorros en solo 18 meses!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-finance-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-finance-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-finance-blue-900">
                      Jessica Chen
                    </div>
                    <div className="text-sm text-gray-500">
                      Gerente de Marketing
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-finance-gold-400 text-finance-gold-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "El programa de coaching VIP valió cada centavo. Silvia me
                  ayudó a aumentar mis ingresos en un 150% y crear múltiples
                  fuentes de ingresos."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-finance-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-finance-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-finance-blue-900">
                      Michael Rodriguez
                    </div>
                    <div className="text-sm text-gray-500">Emprendedor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-finance-gold-400 text-finance-gold-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Finalmente pagué $45,000 en préstamos estudiantiles usando la
                  estrategia de eliminación de deuda de Silvia. ¡No puedo
                  agradecerle lo suficiente por cambiar mi vida!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-finance-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-finance-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-finance-blue-900">
                      Emily Thompson
                    </div>
                    <div className="text-sm text-gray-500">Maestra</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-finance-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
              ¿Listo para Transformar tu Futuro Financiero?
            </h2>
            <p className="text-xl text-finance-blue-100">
              Únete a miles de personas que ya han tomado control de sus
              finanzas con mi sistema comprobado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-finance-blue-900"
                asChild
              >
                <Link to="/book">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Comenzar con el Libro
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-8 w-8 text-finance-gold-500" />
                <span className="text-2xl font-heading font-bold text-finance-blue-900">
                  Silvia Mercado
                </span>
              </div>
              <p className="text-gray-600">
                Ayudando a las personas a lograr libertad financiera a través de
                educación, coaching y estrategias comprobadas.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">
                Enlaces Rápidos
              </h3>
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Acerca de
                </Link>
                <Link
                  to="/book"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Libro
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">Recursos</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Boletín
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Testimonios
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">Conectar</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-finance-blue-600"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Silvia Mercado. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
