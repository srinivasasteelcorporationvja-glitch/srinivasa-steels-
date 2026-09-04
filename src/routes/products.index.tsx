import { createFileRoute } from "@tanstack/react-router";
import { ProductsComponent } from "@/components/ProductsComponent";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://srinivasasteels.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://srinivasasteels.com/products"
    }
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "TMT Rebars"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Steel Coils"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Steel Pipes"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jindal Steels"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Jindal Pipes"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Binding Wire"
    }
  ]
};


export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Steel Products & TMT Bars in Vijayawada | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore our premium range of high-quality TMT rebars (8mm-32mm), structural steel, binding wire, and decoiling solutions for industrial needs across Andhra Pradesh, including Vijayawada and Vizag." },
      { property: "og:title", content: "Steel Products & TMT Bars | Srinivasa Steel Corporation" },
      { property: "og:description", content: "Explore our premium range of high-quality TMT rebars (8mm-32mm), structural steel, binding wire, and decoiling solutions for industrial needs across Andhra Pradesh, including Vijayawada and Vizag." },
      { property: "og:url", content: "https://srinivasasteels.com/products" },
      { property: "og:image", content: "https://srinivasasteels.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://srinivasasteels.com/products" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(itemListSchema) }
    ]
  }),
});

function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsComponent />
    </div>
  );
}

