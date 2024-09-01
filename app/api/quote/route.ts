export async function GET(req: Request) {
  const quotes = [
    "Crafting seamless user experiences with Vue.js and Next.js.",
    "Delivering robust back-end solutions using Node.js and MongoDB.",
    "Building decentralized applications on Solana with a focus on security and scalability.",
    "Bringing ideas to life through full-stack development with React and Vue.",
    "Leading complex projects from conception to deployment, ensuring high performance and user satisfaction.",
    "Fostering collaborative environments to drive project success and innovation.",
    "Enhancing user interfaces with intuitive design and responsive layouts.",
    "Solving complex problems with clean, maintainable code and best practices.",
    "Continuously exploring the latest web development technologies to stay ahead of the curve.",
    "Integrating blockchain technology into modern web applications for the future of decentralized solutions.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const response = {
    quote: randomQuote,
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
}
