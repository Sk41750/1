
import { CreditCard, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-up">
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full inline-block mb-4">
            Premium Digital Products
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Digital Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            High-quality digital products that help you achieve more. Designed for professionals who demand excellence.
          </p>
          <Button size="lg" className="animate-fade-in">
            View Products
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-muted-foreground">
                Download your products immediately after purchase
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:200ms]">
              <ShieldCheck className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">
                Your transactions are protected with industry-standard security
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:400ms]">
              <CreditCard className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                30-day satisfaction guarantee on all products
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted animate-pulse" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Product {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality digital product with instant access
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$99</span>
                    <Button>Purchase Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I access my products after purchase?",
                a: "You'll receive instant access to your products via email after your purchase is confirmed.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and PayPal for secure transactions.",
              },
              {
                q: "Can I get a refund if I'm not satisfied?",
                a: "Yes, we offer a 30-day money-back guarantee on all our products.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Disclaimer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <p className="text-primary-foreground/80">
                We provide high-quality digital products to help you succeed in your endeavors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-primary-foreground/80">
                Email: support@example.com<br />
                Hours: Mon-Fri 9am-5pm EST
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
            <p>
              Disclaimer: All products are digital goods. No physical items will be shipped.
              Refunds are subject to our refund policy. Results may vary.
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
