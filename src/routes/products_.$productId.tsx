import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Building2, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { catalogue } from "@/lib/products-data";

export const Route = createFileRoute('/products_/$productId')({
  component: ProductDetailsPage,
  loader: ({ params }) => {
    const product = catalogue.find(p => p.id === params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return { meta: [] };
    const { product } = loaderData;
    
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": `https://srinivasasteels.com${product.image}`,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "Srinivasa Steel Corporation"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://srinivasasteels.com/products/${product.id}`,
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Srinivasa Steel Corporation"
        }
      }
    };

    return {
      meta: [
        { title: `${product.name} Supplier in Vijayawada | Srinivasa Steel Corporation` },
        { name: "description", content: product.description }
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(productSchema) }
      ]
    };
  }
});

function ProductDetailsPage() {
  const { product } = Route.useLoaderData();

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen flex flex-col pb-20 pt-32">
      <div className="container-wide px-4 sm:px-6 max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-[13px] font-bold text-ssc-navy/60 hover:text-ssc-gold-dark uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-black/5 flex flex-col lg:flex-row">
          
          {/* Left: Image & Branding */}
          <div className="w-full lg:w-5/12 xl:w-1/2 relative bg-ssc-navy min-h-[400px] lg:min-h-[600px] shrink-0">
            <img 
              src={product.image} 
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A13]/90 via-[#050A13]/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-4 rounded-full shadow-lg">
                <MapPin size={12} className="text-ssc-gold" /> {product.location} • {product.locationType}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-[900] uppercase leading-[1.05] tracking-tighter drop-shadow-xl mb-4">
                {product.name}
              </h1>
            </div>
          </div>

          {/* Right: Content & Details */}
          <div className="w-full lg:w-7/12 xl:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col">
            
            <div className="mb-12">
              <h4 className="text-[12px] sm:text-[13px] text-ssc-gray-body font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-ssc-gold-dark" /> Product Overview
              </h4>
              <p className="text-[16px] sm:text-[18px] text-ssc-navy leading-[1.7] font-medium">
                {product.description}
              </p>
            </div>
            
            {/* Professional Use Cases Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#EDF2F7] p-6 rounded-xl border border-black/5">
                <h4 className="text-[13px] text-ssc-navy font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Building2 size={16} className="text-ssc-gold-dark" /> Primary Use Cases
                </h4>
                <p className="text-sm text-ssc-gray-body leading-relaxed font-medium">
                  {product.useCases}
                </p>
              </div>

              <div className="bg-[#EDF2F7] p-6 rounded-xl border border-black/5">
                <h4 className="text-[13px] text-ssc-navy font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Wrench size={16} className="text-ssc-gold-dark" /> Application
                </h4>
                <p className="text-sm text-ssc-gray-body leading-relaxed font-medium">
                  {product.howItIsUsed}
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-12">
              <h4 className="text-[12px] sm:text-[13px] text-ssc-navy font-bold uppercase tracking-[0.15em] mb-4 border-b border-black/5 pb-4">
                Available Specifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {product.specs.map((spec) => (
                  <div key={spec} className="px-5 py-2.5 bg-white border border-black/10 text-ssc-navy text-[12px] font-bold uppercase tracking-wider flex items-center gap-2.5 rounded-lg shadow-sm hover:border-ssc-gold/50 transition-colors">
                    <CheckCircle2 size={16} className="text-ssc-gold-dark shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8 border-t border-black/10">
              <Link to="/contact" search={{ product: product.name }}>
                <Button className="w-full sm:w-auto h-16 px-10 bg-ssc-navy hover:bg-ssc-gold text-white hover:text-ssc-navy font-[800] uppercase text-[14px] tracking-[0.15em] rounded-lg shadow-[0_8px_20px_rgba(11,19,32,0.2)] transition-all duration-300 flex items-center justify-center gap-3 group border-none">
                  REQUEST A QUOTE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
