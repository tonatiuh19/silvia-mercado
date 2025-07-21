import { useState, useEffect, useRef } from "react";
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
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  Star,
  BookOpen,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  Play,
  ArrowRight,
  Quote,
  Menu,
  X,
  Award,
  Target,
  Heart,
  Lightbulb,
  Coffee,
  Briefcase,
  GraduationCap,
  Home,
  MapPin,
  Clock,
  Zap,
  Camera,
  MessageCircle,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function About() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const journeySteps = [
    {
      year: "2010",
      title: "Inicios en Servicios Financieros",
      description:
        "Comencé mi carrera en el sector financiero, descubriendo mi pasión por ayudar a las personas con sus finanzas personales.",
      icon: Target,
      emotion: "discovery",
    },
    {
      year: "2015",
      title: "Certificación CNSG",
      description:
        "Obtuve mi certificación con Cédula B ante la Comisión Nacional de Seguros y Fianzas, formalizando mi expertise profesional.",
      icon: Award,
      emotion: "achievement",
    },
    {
      year: "2018",
      title: "Diplomado Tec de Monterrey",
      description:
        "Completé el Diplomado en Mercados Financieros e inversión en bolsa, ampliando mis conocimientos de inversión.",
      icon: GraduationCap,
      emotion: "learning",
    },
    {
      year: "2020",
      title: "Escuela Dale Carnegie",
      description:
        "Me gradué de la prestigiosa Escuela de Dale Carnegie y me convertí en miembro activo de 'Million Dollar Round Table'.",
      icon: Users,
      emotion: "growth",
    },
    {
      year: "2022",
      title: "Liderazgo Empresarial",
      description:
        "Asumí la presidencia del capítulo C+ de Business Network International y me uní a Coparmex.",
      icon: Briefcase,
      emotion: "leadership",
    },
    {
      year: "2024",
      title: "Autora de 'Finanzas Felices'",
      description:
        "Publiqué mi libro 'Finanzas Felices' con el método F.E.L.I.Z., alcanzando a más de 1,000 personas asesoradas.",
      icon: BookOpen,
      emotion: "fulfillment",
    },
  ];

  const skills = [
    { name: "Asesoría Financiera Certificada", level: 98 },
    { name: "Planificación de Inversiones", level: 96 },
    { name: "Método F.E.L.I.Z.", level: 100 },
    { name: "Estructuración Financiera", level: 95 },
    { name: "Educación en Finanzas", level: 97 },
    { name: "Capacitación Corporativa", level: 92 },
  ];

  const personalFacts = [
    { icon: Award, label: "Personas Asesoradas", value: "1,000+" },
    { icon: BookOpen, label: "Libro Publicado", value: "2024" },
    { icon: GraduationCap, label: "Certificación", value: "CNSG" },
    { icon: Users, label: "Empresas Capacitadas", value: "6+" },
    { icon: Target, label: "Inversión Mínima", value: "$50 MXN" },
    { icon: Clock, label: "Años de Experiencia", value: "14+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compromiso Auténtico",
      description:
        "Cada asesoría está respaldada por mi certificación CNSG y más de 14 años de experiencia en el sector financiero.",
    },
    {
      icon: Target,
      title: "Método F.E.L.I.Z.",
      description:
        "Mi metodología probada ayuda a crear una relación sana con el dinero sin arriesgar tu patrimonio.",
    },
    {
      icon: Users,
      title: "Experiencia Corporativa",
      description:
        "He capacitado a empresas como DoTerra, Walmart, Johnson&Johnson, y Ernst and Young en finanzas personales.",
    },
    {
      icon: Lightbulb,
      title: "Inversión Accesible",
      description:
        "Creo que todos pueden invertir. Desde $50 MXN puedes comenzar a ser socio de las mejores empresas del mundo.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-finance-blue-50 to-white relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-finance-gold-500 to-finance-gold-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
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
              <Link to="/about" className="text-finance-gold-600 font-semibold">
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
                  className="text-finance-gold-600 font-semibold"
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
      <section
        className="py-20 lg:py-32 relative overflow-hidden"
        data-section
        id="hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-finance-blue-900/5 to-finance-gold-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 ${visibleSections.has("hero") ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="space-y-6">
                <Badge className="bg-finance-gold-100 text-finance-gold-700 border-finance-gold-200 text-lg px-4 py-2">
                  Experta en Transformación Financiera
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-finance-blue-900 leading-tight">
                  Coach Financiera
                  <span className="text-finance-gold-500 block">
                    Certificada
                  </span>
                  y Autora
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Hola, soy Silvia Mercado. Soy asesora certificada con Cédula B
                  ante la CNSG y autora del libro "Finanzas Felices". Te ayudo a
                  manejar tu dinero para ahorrar e invertir SIN ARRIESGAR TU
                  PATRIMONIO.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                  onClick={() => setBookingModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Trabajar Conmigo
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/book">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Leer Mi Historia
                  </Link>
                </Button>
              </div>
            </div>

            {/* Animated Profile */}
            <div
              className={`relative ${visibleSections.has("hero") ? "animate-slide-in-right" : "opacity-0"}`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-finance-gold-500 to-finance-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-finance-blue-100 to-finance-gold-100 rounded-full p-8 relative overflow-hidden mx-auto">
                    <div
                      className={
                        'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
                      }
                    />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-xl mb-4">
                          <Users className="h-16 w-16 text-finance-blue-600" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-finance-blue-900 mb-2">
                          Silvia Mercado
                        </h3>
                        <p className="text-finance-blue-700 font-medium">
                          Coach Financiera y Autora
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Stats */}
      <section className="py-16 bg-white" data-section id="stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {personalFacts.map((fact, index) => (
              <div
                key={index}
                className={`text-center group ${visibleSections.has("stats") ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-finance-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-finance-gold-100 transition-colors duration-300">
                  <fact.icon className="h-8 w-8 text-finance-blue-600 group-hover:text-finance-gold-600 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-finance-blue-900 mb-1">
                  {fact.value}
                </div>
                <div className="text-sm text-gray-600">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-finance-blue-50" data-section id="journey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              Mi Viaje de Transformación Financiera
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Del desastre financiero a ayudar a miles - así es como sucedió
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-finance-gold-500 to-finance-blue-600" />

              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative mb-16 ${index % 2 === 0 ? "text-right pr-1/2" : "text-left pl-1/2"} ${visibleSections.has("journey") ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-finance-gold-500 to-finance-gold-600 rounded-full flex items-center justify-center">
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-finance-gold-600 font-bold text-lg mb-1">
                              {step.year}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-finance-blue-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-finance-gold-500 rounded-full border-4 border-white shadow-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white" data-section id="skills">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 ${visibleSections.has("skills") ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div>
                <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
                  Mis Áreas de Especialización
                </h2>
                <p className="text-xl text-gray-600">
                  Más de 14 años ayudando a personas y empresas a estructurar
                  sus finanzas
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-finance-blue-900">
                        {skill.name}
                      </span>
                      <span className="text-finance-gold-600 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={visibleSections.has("skills") ? skill.level : 0}
                      className="h-3"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${visibleSections.has("skills") ? "animate-slide-in-right" : "opacity-0"}`}
            >
              <Card className="bg-gradient-to-br from-finance-blue-900 to-finance-blue-700 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-finance-gold-400 mb-6" />
                  <blockquote className="text-xl leading-relaxed mb-6 italic">
                    "Mi misión es ayudarte a crear una relación sana con tu
                    dinero a través del método F.E.L.I.Z. Cada estrategia que
                    enseño está respaldada por mi certificación CNSG y años de
                    experiencia real."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-finance-gold-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Silvia Mercado</div>
                      <div className="text-finance-blue-200">
                        Asesora Financiera Certificada CNSG
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-finance-gold-50" data-section id="values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-finance-blue-900 mb-4">
              Lo Que Me Impulsa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los valores fundamentales que guían todo lo que hago para ayudar a
              las personas a lograr libertad financiera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group ${visibleSections.has("values") ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-finance-blue-100 group-hover:bg-finance-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-finance-blue-600 group-hover:text-finance-gold-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-finance-blue-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Side */}
      <section className="py-20 bg-white" data-section id="personal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`${visibleSections.has("personal") ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="aspect-square bg-gradient-to-br from-finance-blue-100 to-finance-gold-100 rounded-3xl p-8 relative overflow-hidden">
                <div
                  className={
                    'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
                  }
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-24 w-24 text-finance-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-finance-blue-900 mb-2">
                      Certificaciones y Logros
                    </h3>
                    <p className="text-finance-blue-700">
                      CNSG, Dale Carnegie, MDRT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 ${visibleSections.has("personal") ? "animate-slide-in-right" : "opacity-0"}`}
            >
              <h2 className="text-4xl font-heading font-bold text-finance-blue-900">
                Más Allá de las Finanzas...
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Soy Presidente del capítulo C+ de Business Network
                  International y miembro activo de Coparmex. Mi compromiso va
                  más allá de la asesoría individual: trabajo activamente en
                  fortalecer la cultura financiera empresarial.
                </p>
                <p>
                  He tenido el privilegio de capacitar equipos en empresas como
                  DoTerra, Walmart, SkyAlert, Johnson&Johnson, Ernst and Young y
                  Shell, ayudando a crear programas de bienestar financiero para
                  sus empleados.
                </p>
                <p>
                  Mi graduación de la Escuela de Dale Carnegie y mi membresía en
                  "Million Dollar Round Table" reflejan mi compromiso constante
                  con la excelencia profesional y el crecimiento personal.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <MessageCircle className="h-6 w-6 text-finance-gold-500" />
                <span className="text-finance-blue-900 font-semibold">
                  ¿Quieres saber más? ¡Platicamos sobre tus metas financieras!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-finance-blue-900 text-white"
        data-section
        id="cta"
      >
        <div className="container mx-auto px-4 text-center">
          <div
            className={`max-w-3xl mx-auto space-y-8 ${visibleSections.has("cta") ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              ¿Lista para Iniciar tu Transformación Financiera?
            </h2>
            <p className="text-xl text-finance-blue-100">
              Trabajemos juntas para crear la libertad financiera que mereces.
              Agenda una consulta o adquiere mi libro para comenzar.
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
                  Obtener Mi Libro
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-finance-blue-900 text-white py-16 border-t border-finance-blue-700">
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
                educación, asesoría certificada y estrategias probadas.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Enlaces Rápidos</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-finance-blue-100 hover:text-white"
                >
                  Inicio
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
    </div>
  );
}
