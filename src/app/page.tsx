"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, Globe, Leaf, Sprout, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/1424457/pexels-photo-1424457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Pelemix - Coconut Coir Agriculture Solutions"
          brandName="Pelemix"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Coconut Coir Substrate for Agriculture & Horticulture"
          description="High-quality coir-based grow bags and substrates for vegetables and plants, designed for optimal growth and sustainability. Perfect for growers worldwide."
          tag="Sustainable Growing"
          tagIcon={Leaf}
          buttons={[
            {
              text: "Explore Products",
              href: "products"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coconut coir grow bags for agriculture"
            },
            {
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "High-quality coconut fiber substrate"
            },
            {
              imageSrc: "https://images.pexels.com/photos/5561356/pexels-photo-5561356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable agricultural growing solutions"
            },
            {
              imageSrc: "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Agricultural quality control and testing"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We're here to assist you on your journey to sustainable and successful cultivation. Our dedicated team is ready to provide you with the support you need for optimal agricultural growth."
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "View Products",
              href: "products"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Premium Coconut Coir Solutions"
          description="Discover the superior quality and sustainability of our coconut coir products designed for modern agriculture"
          tag="Our Products"
          tagIcon={Sprout}
          features={[
            {
              title: "High-Quality Grow Bags",
              description: "Premium coconut coir grow bags designed for optimal plant growth and root development in greenhouse and outdoor cultivation.",
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coconut coir grow bags",
              button: {
                text: "Learn More",
                href: "products"
              }
            },
            {
              title: "Sustainable Substrates",
              description: "Eco-friendly coconut fiber substrates that provide excellent drainage, aeration, and water retention for healthy plant growth.",
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable coconut coir substrates",
              button: {
                text: "Learn More",
                href: "products"
              }
            },
            {
              title: "Quality Assurance",
              description: "Rigorous quality control processes ensure consistent, high-standard products that meet international agricultural requirements.",
              imageSrc: "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Agricultural quality control testing",
              button: {
                text: "Learn More",
                href: "quality"
              }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Agriculture Excellence Metrics"
          description="Key indicators of our impact on global sustainable agriculture and horticulture"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Countries",
              description: "Serving growers worldwide with premium coconut coir solutions",
              icon: Globe
            },
            {
              id: "2",
              value: "25",
              title: "Years",
              description: "Of expertise in sustainable agriculture and coconut coir production",
              icon: Calendar
            },
            {
              id: "3",
              value: "100%",
              title: "Sustainable",
              description: "Eco-friendly coconut coir products from renewable sources",
              icon: Leaf
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Agricultural Professionals"
          description="Real feedback from growers who have experienced the quality and reliability of our coconut coir products"
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Greenhouse Manager",
              company: "Premium Vegetables Ltd",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7782379/pexels-photo-7782379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson - Greenhouse Manager",
              testimonial: "The quality of Pelemix coconut coir substrates has transformed our greenhouse operations. Our yields have increased significantly."
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Agricultural Consultant",
              company: "Green Growth Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez - Agricultural Consultant",
              testimonial: "Pelemix provides consistent, high-quality products that we recommend to all our clients for sustainable growing."
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Agricultural Companies"
          description="Join thousands of growers worldwide who trust our coconut coir solutions for their agricultural success"
          tag="Industry Partners"
          tagIcon={Users}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33714864/pexels-photo-33714864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/27906668/pexels-photo-27906668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/56950/pexels-photo-56950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8851084/pexels-photo-8851084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18785809/pexels-photo-18785809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Agricultural Success Journey?"
          description="If you have any questions or inquiries, or require further information, please don't hesitate to reach out to us. Our dedicated team is ready to provide you with the support you need."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your agricultural needs and how we can help you...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Agricultural consultation and support"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Pelemix"
          columns={[
            {
              items: [
                {
                  label: "Tomato Solutions",
                  href: "crops"
                },
                {
                  label: "Cucumber Products",
                  href: "crops"
                },
                {
                  label: "Pepper Growing",
                  href: "crops"
                },
                {
                  label: "Strawberry Substrates",
                  href: "crops"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Quality Assurance",
                  href: "quality"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact Support",
                  href: "contact"
                },
                {
                  label: "Technical Resources",
                  href: "resources"
                },
                {
                  label: "Growing Guides",
                  href: "guides"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}