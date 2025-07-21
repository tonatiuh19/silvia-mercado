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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Download,
  BookOpen,
  Gift,
  ShoppingCart,
  CreditCard,
  CheckCircle,
  X,
  ArrowLeft,
  FileText,
  Target,
  TrendingUp,
  Award,
  Plus,
  Minus,
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: "digital" | "physical" | "bundle";
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  icon: any;
  includes: string[];
}

const products: Product[] = [
  {
    id: "digital",
    name: "Edición Digital",
    description: "Descarga instantánea",
    price: 29,
    icon: Download,
    includes: [
      "Formatos PDF, EPUB y MOBI",
      "Descarga instantánea",
      "Todos los materiales bonus",
      "Acceso de por vida",
    ],
  },
  {
    id: "physical",
    name: "Edición Física",
    description: "Libro de tapa dura + digital",
    price: 47,
    icon: BookOpen,
    includes: [
      "Libro de tapa dura premium",
      "Edición digital incluida",
      "Todos los materiales bonus",
      "Envío gratis mundial",
    ],
  },
  {
    id: "bundle",
    name: "Edición Bundle",
    description: "Libro + Consulta de 1 hora",
    price: 97,
    originalPrice: 296,
    icon: Gift,
    includes: [
      "Libro físico + digital",
      "Consulta telefónica de 1 hora",
      "Todos los materiales bonus",
      "Plan de acción personalizado",
    ],
  },
];

const bonusItems = [
  {
    id: "workbook",
    name: "Libro de Trabajo para Construir Riqueza",
    description: "Ejercicios paso a paso y hojas de trabajo",
    value: 47,
    icon: FileText,
  },
  {
    id: "templates",
    name: "Plantillas para Establecer Metas",
    description: "Plantillas de planificación financiera",
    value: 27,
    icon: Target,
  },
  {
    id: "calculator",
    name: "Calculadora de Inversión",
    description: "Calcula tu crecimiento de riqueza",
    value: 37,
    icon: TrendingUp,
  },
  {
    id: "course",
    name: "Acceso al Curso de Certificación",
    description: "Curso en línea de 4 semanas",
    value: 197,
    icon: Award,
  },
];

export default function CheckoutModal({
  isOpen,
  onClose,
  initialProduct = "digital",
}: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    products.find((p) => p.id === initialProduct) || products[0],
  );
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const resetModal = () => {
    setStep(1);
    setSelectedExtras([]);
    setCustomerInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setPaymentInfo({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: "",
      city: "",
      zipCode: "",
      country: "",
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const getTotalBonusValue = () => {
    return selectedExtras.reduce((total, extraId) => {
      const extra = bonusItems.find((item) => item.id === extraId);
      return total + (extra ? extra.value : 0);
    }, 0);
  };

  const getTotalPrice = () => {
    return selectedProduct.price + getTotalBonusValue();
  };

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId],
    );
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Seleccionar Producto";
      case 2:
        return "Información Personal";
      case 3:
        return "Información de Pago";
      case 4:
        return "Confirmación de Pedido";
      default:
        return "";
    }
  };

  const renderStepper = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                stepNumber <= step
                  ? "bg-finance-gold-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {stepNumber < step ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                stepNumber
              )}
            </div>
            {stepNumber < 4 && (
              <div
                className={`w-12 h-1 mx-2 ${
                  stepNumber < step ? "bg-finance-gold-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProductSelection = () => (
    <div className="space-y-6">
      <div className="grid gap-6">
        {products.map((product) => {
          const IconComponent = product.icon;
          return (
            <Card
              key={product.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedProduct.id === product.id
                  ? "border-finance-gold-500 ring-2 ring-finance-gold-200 shadow-lg"
                  : "border-gray-200 hover:border-finance-gold-300"
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-finance-gold-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-finance-gold-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-finance-blue-900">
                          {product.name}
                        </h3>
                        {product.id === "physical" && (
                          <Badge className="bg-finance-gold-100 text-finance-gold-700">
                            Más Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <ul className="space-y-2">
                        {product.includes.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-right">
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </div>
                    )}
                    <div className="text-2xl font-bold text-finance-blue-900">
                      ${product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-green-600 font-semibold">
                        Ahorra ${product.originalPrice - product.price}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Optional Extras Section */}
      <Card className="border-finance-gold-200">
        <CardHeader>
          <CardTitle className="text-lg text-finance-blue-900">
            Extras Opcionales
          </CardTitle>
          <CardDescription>
            Mejora tu experiencia con estos recursos adicionales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bonusItems.map((bonus) => {
              const IconComponent = bonus.icon;
              const isSelected = selectedExtras.includes(bonus.id);

              return (
                <div
                  key={bonus.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-finance-gold-500 bg-finance-gold-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-finance-gold-500" : "bg-gray-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-6 w-6 ${
                          isSelected ? "text-white" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-finance-blue-900">
                        {bonus.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {bonus.description}
                      </div>
                      <div className="text-sm font-semibold text-finance-gold-600">
                        ${bonus.value}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleExtra(bonus.id)}
                    className={
                      isSelected
                        ? "bg-finance-gold-500 hover:bg-finance-gold-600"
                        : "border-finance-gold-500 text-finance-gold-600 hover:bg-finance-gold-50"
                    }
                  >
                    {isSelected ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              );
            })}
          </div>

          {selectedExtras.length > 0 && (
            <div className="mt-4 p-4 bg-finance-gold-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-finance-blue-900">
                  Subtotal Extras:
                </span>
                <span className="font-bold text-finance-gold-600">
                  ${getTotalBonusValue()}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={() => setStep(2)}
          className="bg-finance-gold-500 hover:bg-finance-gold-600"
        >
          Continuar al Checkout
        </Button>
      </div>
    </div>
  );

  const renderCustomerInfo = () => (
    <div className="space-y-6">
      <div className="relative mb-6">
        <Button
          variant="ghost"
          onClick={() => setStep(1)}
          className="absolute left-0 top-0 flex items-center p-0 h-auto"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Productos
        </Button>
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-finance-blue-900">
            Información Personal
          </h3>
          <p className="text-gray-600">
            {selectedProduct.name} - ${selectedProduct.price}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre *</Label>
          <Input
            id="firstName"
            value={customerInfo.firstName}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, firstName: e.target.value })
            }
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido *</Label>
          <Input
            id="lastName"
            value={customerInfo.lastName}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, lastName: e.target.value })
            }
            placeholder="Tu apellido"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={customerInfo.email}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, email: e.target.value })
          }
          placeholder="tu@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          value={customerInfo.phone}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, phone: e.target.value })
          }
          placeholder="+52 123 456 7890"
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => setStep(3)}
          disabled={
            !customerInfo.firstName ||
            !customerInfo.lastName ||
            !customerInfo.email
          }
          className="bg-finance-gold-500 hover:bg-finance-gold-600"
        >
          Continuar al Pago
        </Button>
      </div>
    </div>
  );

  const renderPaymentInfo = () => (
    <div className="space-y-6">
      <div className="relative mb-6">
        <Button
          variant="ghost"
          onClick={() => setStep(2)}
          className="absolute left-0 top-0 flex items-center p-0 h-auto"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Información
        </Button>
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-finance-blue-900">
            Información de Pago
          </h3>
          <p className="text-gray-600">Pago seguro y encriptado</p>
        </div>
      </div>

      <Card className="p-4 bg-finance-blue-50 border-finance-blue-200">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-finance-blue-900">
              {selectedProduct.name}
            </div>
            <div className="text-sm text-gray-600">
              {selectedExtras.length > 0 && `+ ${selectedExtras.length} extras`}
            </div>
          </div>
          <div className="text-right">
            {selectedProduct.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${selectedProduct.originalPrice}
              </div>
            )}
            <div className="text-xl font-bold text-finance-blue-900">
              ${getTotalPrice()}
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
          <Input
            id="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
            }
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Fecha de Vencimiento *</Label>
            <Input
              id="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })
              }
              placeholder="MM/AA"
              maxLength={5}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV *</Label>
            <Input
              id="cvv"
              value={paymentInfo.cvv}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
              }
              placeholder="123"
              maxLength={4}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="billingAddress">Dirección de Facturación *</Label>
          <Input
            id="billingAddress"
            value={paymentInfo.billingAddress}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, billingAddress: e.target.value })
            }
            placeholder="Calle y número"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">Ciudad *</Label>
            <Input
              id="city"
              value={paymentInfo.city}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, city: e.target.value })
              }
              placeholder="Ciudad"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">Código Postal *</Label>
            <Input
              id="zipCode"
              value={paymentInfo.zipCode}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, zipCode: e.target.value })
              }
              placeholder="12345"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">País *</Label>
            <Input
              id="country"
              value={paymentInfo.country}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, country: e.target.value })
              }
              placeholder="México"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => setStep(4)}
          disabled={
            !paymentInfo.cardNumber ||
            !paymentInfo.expiryDate ||
            !paymentInfo.cvv ||
            !paymentInfo.billingAddress ||
            !paymentInfo.city ||
            !paymentInfo.zipCode ||
            !paymentInfo.country
          }
          className="bg-finance-gold-500 hover:bg-finance-gold-600"
        >
          Revisar Pedido
        </Button>
      </div>
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className="space-y-6">
      <div className="relative mb-6">
        <Button
          variant="ghost"
          onClick={() => setStep(3)}
          className="absolute left-0 top-0 flex items-center p-0 h-auto"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Pago
        </Button>
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-finance-blue-900">
            Confirmar Pedido
          </h3>
          <p className="text-gray-600">
            Revisa tu pedido antes de completar la compra
          </p>
        </div>
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-finance-blue-900">
                {selectedProduct.name}
              </div>
              <div className="text-sm text-gray-600">
                {selectedProduct.description}
              </div>
            </div>
            <div className="text-right">
              {selectedProduct.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  ${selectedProduct.originalPrice}
                </div>
              )}
              <div className="font-bold text-finance-blue-900">
                ${selectedProduct.price}
              </div>
            </div>
          </div>

          {selectedExtras.length > 0 && (
            <div className="border-t pt-4">
              <div className="font-semibold text-finance-blue-900 mb-2">
                Extras Seleccionados:
              </div>
              {selectedExtras.map((extraId) => {
                const extra = bonusItems.find((item) => item.id === extraId);
                if (!extra) return null;
                return (
                  <div
                    key={extraId}
                    className="flex justify-between text-sm text-gray-600 py-1"
                  >
                    <span>{extra.name}</span>
                    <span>${extra.value}</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-finance-blue-900">${getTotalPrice()}</span>
            </div>
            {selectedProduct.originalPrice && (
              <div className="text-right text-green-600 text-sm font-semibold">
                Ahorras ${selectedProduct.originalPrice - selectedProduct.price}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Customer Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Información del Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Nombre:</span>
              <div className="font-semibold">
                {customerInfo.firstName} {customerInfo.lastName}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <div className="font-semibold">{customerInfo.email}</div>
            </div>
            {customerInfo.phone && (
              <div>
                <span className="text-gray-600">Teléfono:</span>
                <div className="font-semibold">{customerInfo.phone}</div>
              </div>
            )}
            <div>
              <span className="text-gray-600">Dirección:</span>
              <div className="font-semibold">
                {paymentInfo.billingAddress}, {paymentInfo.city},{" "}
                {paymentInfo.zipCode}, {paymentInfo.country}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <div className="font-semibold text-green-800">
                Garantía de Devolución de Dinero de 30 Días
              </div>
              <div className="text-sm text-green-600">
                Si no estás satisfecho, obtén un reembolso completo dentro de 30
                días.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-600">
        Al completar tu compra, recibirás un email de confirmación con los
        detalles de tu pedido y las instrucciones de descarga.
      </div>

      <div className="flex justify-end">
        <Button
          className="bg-finance-gold-500 hover:bg-finance-gold-600 text-lg px-8 py-3"
          onClick={() => {
            // Here you would integrate with your payment processor
            alert(
              "¡Pedido completado! Recibirás un email de confirmación pronto.",
            );
            handleClose();
          }}
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Completar Compra - ${getTotalPrice()}
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex items-center justify-center w-8 h-8"
        >
          <X className="h-4 w-4" />
        </Button>

        <DialogHeader className="relative">
          <div className="text-center pr-8">
            <DialogTitle className="text-2xl font-heading text-finance-blue-900">
              Comprar Libro
            </DialogTitle>
            <DialogDescription>{getStepTitle()}</DialogDescription>
          </div>
        </DialogHeader>

        {renderStepper()}

        <div className="mt-6">
          {step === 1 && renderProductSelection()}
          {step === 2 && renderCustomerInfo()}
          {step === 3 && renderPaymentInfo()}
          {step === 4 && renderOrderConfirmation()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
