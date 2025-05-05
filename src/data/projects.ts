const projects = {
  entries: [
    {
      title: "Movie Search",
      link: "https://trending-movies-db.vercel.app/",
      image: "/projects/movies.png",
      dateRange: "Apr 2025",
      summary: "Simple site to query The Movie Database API, search for the most relevant movies, and also save searches to AppWrite database to serve as 'trending' movies. You have the power to change what's trending! (I invite you to spend some time flooding the search list with your fav.)",
      technologies: ["React.js", "AppWrite", "Vite", "Vercel",],
    },
    {
      title: "Acting Portfolio",
      link: "https://kevinkgomez.com",
      image: "/projects/acting.png",
      dateRange: "Jan 2016 - Present",
      summary: "Acting portfolio site for my voice acting work. Written in Next.js to utilize server-side rendering's SEO benefit. Responsive, with simple three column design to differentiate from other, single column full width sites. (I'd like refactor it now, but what's there I'm pleased with.)",
      technologies: ["React.js", "Next.js", "Tailwind", "Vercel",],
    },
    {
      title: "Developer Portfolio (this site!)",
      link: "https://kevingomez-dev.vercel.app/",
      image: "/projects/here.png",
      dateRange: "Apr 2025 - Present",
      summary: "Developer resume and portfolio site, written to introduce you to me and my experience. I hadn't had much chance to use Anime.js or Framer Motion in a professional capacity, so it was nice actually learn how to utilize them here (and beyond!).",
      technologies: ["React.js", "TypeScript", "Anime.js", "Framer Motion", "Vite", "Vercel"],
    },
    {
      title: "",
      link: "https://www.babi.sh/recipes",
      image: "/projects/cooking.jpg",
      dateRange: "",
      summary: "And there's more cooking!",
      technologies: [],
    },
  ],
};

export default projects;
