import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  CreditCard,
  CheckCircle,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "audit",
    name: "Auditoría Financiera",
    duration: "30 minutos",
    price: "$297",
    description:
      "Revisión financiera completa con recomendaciones personalizadas",
    features: [
      "Revisión financiera completa",
      "Reporte PDF personalizado",
      "Hoja de ruta de plan de acción",
    ],
  },
  {
    id: "wealth",
    name: "Plan de Construcción de Riqueza",
    duration: "60 minutos",
    price: "$597",
    description:
      "Sesión de inmersión profunda con estrategia personalizada de construcción de riqueza",
    features: [
      "Todo lo incluido en Auditoría Financiera",
      "Estrategia personalizada de construcción de riqueza",
      "Recomendaciones de inversión",
      "Soporte por email de 2 semanas",
    ],
    popular: true,
  },
  {
    id: "vip",
    name: "Coaching VIP",
    duration: "Mensual",
    price: "$1,997",
    description: "Soporte mensual continuo con acceso ilimitado",
    features: [
      "Todo lo incluido en Plan de Construcción de Riqueza",
      "Llamadas mensuales 1-a-1",
      "Soporte ilimitado por email",
      "Acceso prioritario a nuevo contenido",
    ],
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const resetModal = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime("");
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6; // No weekends
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-heading font-bold text-finance-blue-900 mb-2">
          Elige Tu Servicio
        </h3>
        <p className="text-gray-600">
          Selecciona el paquete de consultoría que se adapte a tus necesidades
        </p>
      </div>

      <div className="grid gap-4 max-h-96 overflow-y-auto">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedService?.id === service.id
                ? "border-finance-gold-500 bg-finance-gold-50"
                : service.popular
                  ? "border-finance-gold-500"
                  : "border-gray-200"
            }`}
            onClick={() => setSelectedService(service)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-heading text-finance-blue-900 flex items-center">
                    {service.name}
                    {service.popular && (
                      <Badge className="ml-2 bg-finance-gold-500 text-white">
                        Más Popular
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {service.duration} • {service.description}
                  </CardDescription>
                </div>
                <div className="text-2xl font-bold text-finance-blue-900">
                  {service.price}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-sm text-gray-500">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => setStep(2)}
          disabled={!selectedService}
          className="bg-finance-gold-500 hover:bg-finance-gold-600"
        >
          Continuar a Fecha y Hora
        </Button>
      </div>
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className="space-y-6">
      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setStep(1)}
          className="absolute left-0 top-0 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Servicios
        </Button>
        <div className="text-center py-2">
          <h3 className="text-2xl font-heading font-bold text-finance-blue-900">
            Seleccionar Fecha y Hora
          </h3>
          <p className="text-gray-600">
            {selectedService?.name} - {selectedService?.duration}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={prevMonth}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h4 className="font-semibold text-finance-blue-900">
              {currentMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h4>
            <Button variant="ghost" size="sm" onClick={nextMonth}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 font-medium text-gray-500">
                {day}
              </div>
            ))}
            {getDaysInMonth(currentMonth).map((date, index) => (
              <div key={index} className="p-1">
                {date && (
                  <button
                    onClick={() =>
                      isDateAvailable(date) && setSelectedDate(date)
                    }
                    disabled={!isDateAvailable(date)}
                    className={`w-8 h-8 rounded text-sm transition-colors ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? "bg-finance-gold-500 text-white"
                        : isDateAvailable(date)
                          ? "hover:bg-finance-blue-100 text-finance-blue-900"
                          : "text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <h4 className="font-semibold text-finance-blue-900">
            Horarios Disponibles
          </h4>
          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={`text-sm ${
                    selectedTime === time
                      ? "bg-finance-gold-500 hover:bg-finance-gold-600"
                      : ""
                  }`}
                >
                  {time}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              Por favor selecciona una fecha para ver los horarios disponibles
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => setStep(3)}
          disabled={!selectedDate || !selectedTime}
          className="bg-finance-gold-500 hover:bg-finance-gold-600"
        >
          Continuar al Pago
        </Button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-6">
      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setStep(2)}
          className="absolute left-0 top-0 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Fecha y Hora
        </Button>
        <div className="text-center py-2">
          <h3 className="text-2xl font-heading font-bold text-finance-blue-900">
            Confirmar y Pagar
          </h3>
        </div>
      </div>

      <Card className="border-finance-gold-200">
        <CardHeader>
          <CardTitle className="text-finance-blue-900">
            Resumen de Reserva
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Servicio:</span>
            <span>{selectedService?.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Duración:</span>
            <span>{selectedService?.duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Fecha:</span>
            <span>{selectedDate && formatDate(selectedDate)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Hora:</span>
            <span>{selectedTime}</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-finance-gold-600">
                {selectedService?.price}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-finance-blue-50 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <CreditCard className="h-5 w-5 text-finance-blue-600 mt-0.5" />
          <div className="text-sm text-finance-blue-800">
            <p className="font-medium mb-1">Pago Seguro</p>
            <p>
              El pago será procesado de forma segura a través de Stripe.
              Recibirás un email de confirmación con los detalles de tu
              consulta.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
          Atrás
        </Button>
        <Button
          className="flex-1 bg-finance-gold-500 hover:bg-finance-gold-600"
          onClick={() => {
            // Here you would integrate with payment processing
            alert("Payment integration would be implemented here!");
            handleClose();
          }}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Pagar Ahora
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader className="relative">
          <div className="text-center pr-8">
            <DialogTitle className="text-2xl font-heading text-finance-blue-900">
              Reserva tu Consulta
            </DialogTitle>
            <DialogDescription>
              Agenda tu sesión con Silvia Mercado
            </DialogDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        {/* Progress indicator */}
        <div className="flex justify-center w-full mb-6">
          <div className="flex items-center justify-between w-full max-w-sm">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1
                  ? "bg-finance-gold-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <div
              className={`flex-1 h-1 mx-4 ${
                step > 1 ? "bg-finance-gold-500" : "bg-gray-200"
              }`}
            />
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2
                  ? "bg-finance-gold-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <div
              className={`flex-1 h-1 mx-4 ${
                step > 2 ? "bg-finance-gold-500" : "bg-gray-200"
              }`}
            />
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3
                  ? "bg-finance-gold-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              3
            </div>
          </div>
        </div>

        {/* Step content */}
        {step === 1 && renderServiceSelection()}
        {step === 2 && renderDateTimeSelection()}
        {step === 3 && renderConfirmation()}
      </DialogContent>
    </Dialog>
  );
}
