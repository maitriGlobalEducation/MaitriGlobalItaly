import { useState } from "react";

const testimonials = {
  students: [
    {
      title:
        "Indu Baby George - A former Domus Academy student sharing her experience",
      videoId: "uemEvbZKLUg",
      thumbnail: "https://img.youtube.com/vi/uemEvbZKLUg/hqdefault.jpg",
    },
    {
      title: "Harshit Bandhu - Domus Academy",
      videoId: "Y7i2JFHiLfg",
      thumbnail: "https://img.youtube.com/vi/Y7i2JFHiLfg/hqdefault.jpg",
    },
    {
      title:
        "Marianna Kurian - Polimoda - Master in Fashion Brand Management at Polimoda",
      videoId: "GWl1Wo_tWUM",
      thumbnail: "https://img.youtube.com/vi/GWl1Wo_tWUM/hqdefault.jpg",
    },
    {
      title:
        "Swapna Patkar is a student of Domus Academy - Master in Visual & Brand Design",
      videoId: "2hwIH5Arj0E",
      thumbnail: "https://img.youtube.com/vi/2hwIH5Arj0E/hqdefault.jpg",
    },
    {
      title: "Akansha from NABA",
      videoId: "pVR3EJEMb0o",
      thumbnail: "https://img.youtube.com/vi/pVR3EJEMb0o/hqdefault.jpg",
    },
    {
      title: "Ahana Das Domus Academy Milan",
      videoId: "hK3re0IKjJw",
      thumbnail: "https://img.youtube.com/vi/hK3re0IKjJw/hqdefault.jpg",
    },
    {
      title:
        "Malavika Testimonial | Fashion Styling and Visual Merchandising | Domus Academy Milano",
      videoId: "jTOGH4yqP9k",
      thumbnail: "https://img.youtube.com/vi/jTOGH4yqP9k/hqdefault.jpg",
    },
    {
      title: "Our Student Charvi Reddi sharing her experience",
      videoId: "6U1hqrrK040",
      thumbnail: "https://img.youtube.com/vi/6U1hqrrK040/hqdefault.jpg",
    },
    {
      title: "Our students Ahana and Somya sharing their experience",
      videoId: "r4-DjnATrNc",
      thumbnail: "https://img.youtube.com/vi/r4-DjnATrNc/hqdefault.jpg",
    },
    {
      title: "Our Student at Alma - Nikita",
      videoId: "YGIb4mna3xw",
      thumbnail: "https://img.youtube.com/vi/YGIb4mna3xw/hqdefault.jpg",
    },
    {
      title:
        "The learning experience in Istituto Marangoni Milan & her new venture in Photography course at NABA",
      videoId: "Cjzdkzm_LSs",
      thumbnail: "https://img.youtube.com/vi/Cjzdkzm_LSs/hqdefault.jpg",
    },

    // Add the remaining 5 student testimonials here.
  ],
  parents: [
    {
      title: "Parent Testimonial 1",
      videoId: "gS2mzJIhd0I",
      thumbnail: "https://img.youtube.com/vi/gS2mzJIhd0I/hqdefault.jpg",
    },
    {
      title: "Our student Pragya's mother feedback - testimonial",
      videoId: "fxjBw6wSYq8",
      thumbnail: "https://img.youtube.com/vi/fxjBw6wSYq8/hqdefault.jpg",
    },
  ],
};

export default function VideoTestimonials() {
  const [activeTab, setActiveTab] = useState("students");
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = testimonials[activeTab];

  return (
    <section className="mx-auto w-full max-w-300 px-4 py-8">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold text-slate-900">
        Video Testimonials
      </h2>

      <div className="mx-auto mt-4 h-0.5 w-9 bg-orange-500" />

      <div className="mt-8 flex justify-center gap-2">
        {["students", "parents"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              setPlayingVideo(null);
            }}
            className={`w-39 cursor-pointer rounded px-5 py-3 text-xs font-bold uppercase text-white transition-colors ${
              activeTab === tab
                ? "bg-linear-to-r from-orange-500 to-pink-600"
                : "bg-neutral-500 hover:bg-neutral-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.videoId} className="overflow-hidden rounded-t-md">
            <div className="relative aspect-video bg-black">
              {playingVideo === video.videoId ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayingVideo(video.videoId)}
                  className="group absolute inset-0 flex w-full cursor-pointer items-center justify-center bg-black"
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />

                  <span className="absolute flex size-12 items-center justify-center rounded-full border-2 border-white bg-linear-to-r from-orange-500 to-pink-600 text-white transition-transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M8 5.14v13.72a.75.75 0 0 0 1.13.65l11-6.86a.75.75 0 0 0 0-1.28l-11-6.86A.75.75 0 0 0 8 5.14Z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            <div className="min-h-12 bg-orange-600 px-2 py-2 text-xs lg:text-sm font-medium leading-4 text-white">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
