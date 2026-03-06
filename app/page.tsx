import Hero from "@/components/landing-page/hero/Hero"
import Testimonials from "@/components/landing-page/testimonials/Testimonials"
import Partners from "@/components/landing-page/partners/Partners"
import Products from "@/components/landing-page/products/Products"
import Services from "@/components/landing-page/services/Services"
export default function Home() {
  return (
      <div>
          <Hero />
          <Services />
          <Products />
          <Partners />
          <Testimonials />
      </div>
  );
}
