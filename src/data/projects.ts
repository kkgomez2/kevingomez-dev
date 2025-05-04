const projects = {
  entries: [
    {
      title: "Movie Search",
      link: "https://trending-movies-db.vercel.app/",
      image: "/projects/movies.png",
      dateRange: "Apr 2025",
      summary: "Simple site to query The Movie Database API, search for the most relevant movies, and also save searches to AppWrite database to serve as 'trending' movies. You have the power to change what's trending (literally! Just search your favorite movie a few times).",
      tech: ["React.js", "AppWrite", "Vite", "Vercel",],
    },
    {
      title: "Acting Portfolio Site",
      link: "https://kevinkgomez.com",
      image: "/projects/acting.png",
      dateRange: "Jan 2016 - Present",
      summary: "Acting portfolio site for my voice acting work. Written in Next.js for server-side rendering and SEO. Responsive, with simple three column design to differentiate from other, single column full width sites. But if I could refactor it, I would DEFINITELY re-style it with grid instead of flex.",
      tech: ["React.js", "Next.js", "Tailwind", "Vercel",],
    },
    {
      title: "Developer Portfolio Site (this site!)",
      link: "https://kevingomez-dev.vercel.app/",
      image: "/projects/here.png",
      dateRange: "Apr 2025 - Present",
      summary: "Developer resume and portfolio site, written to introduce you to me and my experience. I hadn't had much chance to use Anime.js or Framer Motion (just Motion now I believe) in a professional capacity, so it was nice actually learn how to utilize them here (and beyond!).",
      tech: ["React.js", "TypeScript", "Anime.js", "Framer Motion", "Vite", "Vercel"],
    },
    {
      title: "N/A",
      link: "",
      image: "",
      dateRange: "",
      summary: "",
      tech: [""],
    },
  ],
};

export default projects;
