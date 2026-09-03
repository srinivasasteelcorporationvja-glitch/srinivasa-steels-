import { createFileRoute } from "@tanstack/react-router";
import { SteelTimeline } from "@/components/SteelTimeline";
import { AboutHero } from "@/components/AboutHero";
import { AboutBusinessCards } from "@/components/AboutBusinessCards";
import { LeadershipSection } from "@/components/LeadershipSection";
import { IndustrialNetwork } from "@/components/IndustrialNetwork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BrandStrip } from "@/components/BrandStrip";

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
      "name": "About",
      "item": "https://srinivasasteels.com/about"
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Srinivasa Steel Corporation",
  "url": "https://srinivasasteels.com/",
  "logo": "https://srinivasasteels.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9440170453",
    "contactType": "customer service",
    "areaServed": "IN"
  }
};

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Srinivasa Steel Corporation | 40+ Years of Industrial Steel" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation's 40+ year legacy, our advanced stockyard facilities in Vijayawada & Gannavaram, and our commitment to on-time steel delivery." },
      { property: "og:title", content: "About Srinivasa Steel Corporation | 40+ Years of Industrial Steel" },
      { property: "og:description", content: "Learn about Srinivasa Steel Corporation's 40+ year legacy, our advanced stockyard facilities in Vijayawada & Gannavaram, and our commitment to on-time steel delivery." },
      { property: "og:url", content: "https://srinivasasteels.com/about" },
      { property: "og:image", content: "https://srinivasasteels.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://srinivasasteels.com/about" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) }
    ]
  }),
});

function AboutPage() {
  return (
    <div className="bg-ssc-navy flex flex-col pt-[62px] sm:pt-[68px] md:pt-[72px]">
      {/* 01 — PREMIUM ABOUT OPENING & 02 — COMPANY STORY */}
      <AboutHero />

      {/* 03 — STRATEGIC PARTNERSHIPS */}
      <BrandStrip />

      {/* 04 — BUSINESS AREAS / SPECIFICATION PANELS */}
      <AboutBusinessCards />


      {/* 04 — INDUSTRIAL TIMELINE */}
      <SteelTimeline />

      {/* 04 — LEADERSHIP / PROMOTERS */}
      <LeadershipSection />
      
      {/* 06 — WHY CHOOSE SRINIVASA STEEL? & 07 — STRONG CTA */}
      <WhyChooseUs />
    </div>
  );
}
