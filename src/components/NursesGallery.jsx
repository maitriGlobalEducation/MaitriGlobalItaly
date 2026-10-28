"use client";

import { Plane, Users, Building2, Heart } from "lucide-react";
import VideoTitle from "./VideoTitle";

const galleryItems = [
  {
    type: "image",
    src: "/images/1 3.png",
    alt: "Nurses arriving in Italy",
    location: "Grosseto, Toscana, Italy",
    category: "Arrival at Italy",
  },
  {
    type: "image",
    src: "/images/2 3.png",
    alt: "Welcoming nurses at the airport",
    location: "Grosseto, Toscana, Italy",
    category: "At the Airport",
  },
  {
    type: "image",
    src: "/images/3 4.png",
    alt: "First moments in Italy",
    location: "Bibiena, Toscana, Italy",
    category: "Arrival at Italy",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dgayidmn/video/upload/v1793179918/1_12.mp4",
    alt: "A nurse shares her journey",
    location: "Italy",
    category: "Our Nurses",
  },
  {
    type: "image",
    src: "/images/4 (1).png",
    alt: "Nurses meeting their colleagues",
    location: "Italy",
    category: "Our Nurses",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dgayidmn/video/upload/v1793180273/2_11_1.mp4",
    alt: "Arrival experience in Italy",
    location: "Italy",
    category: "At the Airport",
  },
  {
    type: "image",
    src: "/images/5.png",
    alt: "Everyday life in Italy",
    location: "Italy",
    category: "Life in Italy",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dgayidmn/video/upload/v1793180640/3_9_1_1.mp4",
    alt: "A personal experience from Italy",
    location: "Italy",
    category: "Our Nurses",
  },
  {
    type: "image",
    src: "/images/6.png",
    alt: "Life outside work",
    location: "Italy",
    category: "Life in Italy",
  },
  {
    type: "image",
    src: "/images/7.png",
    alt: "Our team welcoming nurses",
    location: "Grosseto, Toscana, Italy",
    category: "Arrival at Italy",
  },
  {
    type: "image",
    src: "/images/8.png",
    alt: "Our growing nursing community",
    location: "Our Nursing Community in Italy",
    category: "In the Community",
  },
  {
    type: "image",
    src: "/images/9.png",
    alt: "A day in Italy",
    location: "Italy",
    category: "Life in Italy",
  },
  {
    type: "image",
    src: "/images/10.png",
    alt: "Friends and colleagues",
    location: "Italy",
    category: "In the Community",
  },
  {
    type: "image",
    src: "/images/11.png",
    alt: "A new beginning in Italy",
    location: "Italy",
    category: "Life in Italy",
  },
];

const categories = [
  {
    title: "Arrival Stories",
    description: "First steps in a new country",
    icon: Plane,
  },
  {
    title: "Our Nursing Community",
    description: "People, friendships and support",
    icon: Users,
  },
  {
    title: "Life in Italy",
    description: "Work, culture and everyday life",
    icon: Building2,
  },
  {
    title: "In Their Own Words",
    description: "Candid moments and experiences",
    icon: Heart,
  },
];

export default function NursesGallery({
  ctaImage = "/images/italy-2.jpg",
  ctaHref = "/contact",
}) {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-7">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Life in Italy with Maitri
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Real People.{" "}
            <span className="text-emerald-800">Real Journeys to Italy.</span>
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            From airport arrivals to new friends, workplaces and everyday
            experiences — here are real moments from our nursing community as
            they begin their journey in Italy.
          </p>
        </div>

        {/* Category cards */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200"
            >
              <div className="shrink-0 text-emerald-700">
                <Icon size={30} strokeWidth={2.2} />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="mb-3 overflow-hidden rounded-2xl">
          <img
            src="/images/12.png"
            alt="Nursing team in Italy"
            fetchPriority="high"
            className="block h-auto max-h-[650px] w-full object-cover object-center"
          />
        </div>

        {/* Collage grid */}
        <div className="columns-2 gap-2.5 sm:columns-3 lg:columns-4">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className="mb-2.5 break-inside-avoid overflow-hidden rounded-xl"
            >
              {item.type === "video" ? (
                <VideoTitle src={item.src} alt={item.alt} />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="block h-auto w-full"
                />
              )}
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="relative mt-6 min-h-64 overflow-hidden rounded-2xl bg-emerald-50 sm:min-h-56">
          <img
            src={ctaImage}
            alt="Beautiful Italian city"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/75 to-transparent" />

          <div className="relative flex min-h-64 flex-col items-start justify-center gap-5 p-6 sm:min-h-56 sm:p-10 lg:max-w-2xl">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-200">
                Your journey starts here
              </p>

              <h3 className="max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl">
                Be Part of Our Growing Community
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/85 sm:text-base">
                Join hundreds of nurses who are building successful careers and
                fulfilling lives in Italy with the support of Maitri Global
                Consultancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
