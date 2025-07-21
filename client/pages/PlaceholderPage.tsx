import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowLeft, Construction } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-finance-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-finance-gold-500" />
              <span className="text-2xl font-heading font-bold text-finance-blue-900">Sarah Mitchell</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-finance-blue-600 transition-colors">About</Link>
              <Link to="/book" className="text-gray-600 hover:text-finance-blue-600 transition-colors">Book</Link>
              <Button variant="outline" asChild>
                <Link to="/book">Get My Book</Link>
              </Button>
              <Button
                className="bg-finance-gold-500 hover:bg-finance-gold-600 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Placeholder Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="w-24 h-24 bg-finance-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Construction className="h-12 w-12 text-finance-blue-600" />
            </div>
            
            <h1 className="text-5xl font-heading font-bold text-finance-blue-900">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
            
            <div className="bg-finance-gold-50 border border-finance-gold-200 rounded-lg p-6">
              <p className="text-finance-gold-700 font-medium">
                This page is currently under development. Continue prompting to have me build out the complete content for this section!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Homepage
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-finance-gold-500 text-finance-gold-600 hover:bg-finance-gold-50"
                onClick={() => setBookingModalOpen(true)}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-8 w-8 text-finance-gold-500" />
                <span className="text-2xl font-heading font-bold text-finance-blue-900">Sarah Mitchell</span>
              </div>
              <p className="text-gray-600">
                Helping people achieve financial freedom through education, coaching, and proven strategies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-600 hover:text-finance-blue-600">About</Link>
                <Link to="/book" className="block text-gray-600 hover:text-finance-blue-600">Book</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">Newsletter</a>
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">Testimonials</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-finance-blue-900">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">Instagram</a>
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">LinkedIn</a>
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">YouTube</a>
                <a href="#" className="block text-gray-600 hover:text-finance-blue-600">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Sarah Mitchell. All rights reserved.</p>
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
