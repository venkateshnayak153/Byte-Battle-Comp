import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Calendar, BarChart3, Users, Star, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LeadFlow AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            AI-Powered Lead Management
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Service Business with
            <span className="text-blue-600"> Smart Lead Management</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate lead scoring, streamline customer interactions, and boost conversions with our AI-powered platform
            designed for service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register?type=provider">
              <Button size="lg" className="w-full sm:w-auto">
                Start as Service Provider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/register?type=customer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Join as Customer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Both Sides</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for service providers and seamless experience for customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Provider Features */}
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  Service Provider Dashboard
                </CardTitle>
                <CardDescription>Complete lead management and business analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Bot className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">AI-powered lead scoring</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Appointment scheduling</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Analytics & reporting</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Customer communication</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Features */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Customer Portal
                </CardTitle>
                <CardDescription>Easy service requests and booking management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Service request submission</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Online appointment booking</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Service history tracking</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Review and rating system</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of service businesses already using LeadFlow AI</p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">LeadFlow AI</span>
          </div>
          <p className="text-gray-400">© 2024 LeadFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
