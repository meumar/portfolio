export async function GET(req: Request) {
  const response = {
    name: "Umar Sheik",
    role: "Software Engineer",
    email: "meumarsheik@gmail.com",
    skills: [
      "Solana",
      "Anchor",
      "Rust",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Node.js",
      "React Native",
    ],
    summary:
      "I'm a dedicated and passionate Full-Stack Web Developer with a strong foundation in both front-end and back-end technologies. My journey in web development began with a fascination for creating intuitive and user-friendly interfaces, and over time, I've honed my skills to build robust, scalable, and efficient web applications. I specialize in crafting responsive and dynamic user interfaces using modern frameworks like Vue.js, React.js, and Next.js, and designing secure, scalable back-end systems with Node.js and MongoDB. Additionally, I explore decentralized applications on the Solana blockchain, with experience in building NFT marketplaces and other blockchain-based projects. I approach every project with a problem-solving mindset, aiming to deliver high-quality, maintainable code that meets user needs while staying updated with the latest technologies and trends in web development.",
    languages: [
      {
        name: "Solana",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/solana.png",
      },
      {
        name: "Rust",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/rust.png",
      },
      {
        name: "Anchor",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/anchor.png",
      },
      {
        name: "Vue",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/vue.png",
      },
      {
        name: "Nuxt",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/nuxt.png",
      },
      {
        name: "React",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/react.png",
      },
      {
        name: "Next",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/next.png",
      },
      {
        name: "Node",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/node.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/images/mongodb.png",
      },
    ],
    links: {
      resume:
        "https://drive.google.com/file/d/1M9yH8Ov2GXhZ49nCUSQdQM57Usp0kJso/view?usp=sharing",
      github: "https://github.com/meumar",
      linkedin: "https://www.linkedin.com/in/umar-sheik-2725b91b8",
      discord: "https://discord.com/users/846244276639105044",
    },
    experience: [
      {
        company_name: "Hallmark Global Technologies",
        start_data: "Jun 2021",
        end_date: "Present",
        role: "SOFTWARE ENGINEER",
        summary: [
          "Spearheaded the creation of an e-signature application, boosting user adoption by 20% and reducing customer support inquiries by 15%.",
          "Engineered in-app PDF editing tools, cutting processing time by 30% and enhancing user efficiency.",
          "Architected a dynamic data management system, accommodating a 50% increase in data volume without performance degradation.",
          "Strengthened API security, leading to a 40% reduction in vulnerabilities and improving data protection.",
          "Designed and implemented custom UI components, raising user satisfaction scores by 15%.",
        ],
      },
      {
        company_name: "Orotron",
        start_data: "Nov 2020",
        end_date: "Jan 2021",
        role: "FRONTEND INTERN",
        summary: [
          "Contributed to live web development projects, achieving a 10% improvement in project turnaround time.",
          "Acquired expertise in RESTful API integration, browser debugging, and GitLab version control, leading to more efficient coding practices.",
          "Assumed regular employee responsibilities, consistently delivering high-quality work and meeting tight deadlines.",
        ],
      },
    ],
    projects: [
      {
        name: "Kodefast",
        link: "https://kodefast.com",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/kodefast.jpeg",
        description:
          "Kodefast is a dynamic no-code platform that enables both non-technical users and professionals to quickly create custom applications using generative AI. It simplifies app development, offering a user-friendly interface with drag-and-drop functionality and AI enhancements.",
        technologies: ["Vue", "Node", "MongoDb"],
      },
      {
        name: "eSigns",
        link: "https://esigns.io",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/eSigns.jpeg",
        description:
          "eSigns is a electronic signature platform. Its comprehensive document and data management solutions are powerful engines to accelerate growth by reaching customers with lightning speed.",
        technologies: ["Vue", "Node", "MongoDb"],
      },
      {
        name: "Sol-Bank",
        link: "https://sol-bank.vercel.app",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/sol-bank.png",
        git: "https://github.com/meumar/sol-bank",
        description:
          "Developed a decentralized web application on the Solana blockchain where users can supply and borrow SPL tokens. Integrated dynamic interest calculations based on liquidity pool usage. Built with Next.js for the front end and Anchor for smart contracts, ensuring fully decentralized data storage on the blockchain.",
        technologies: ["React", "Next.js", "Rust", "Anchor", "Tailwind"],
      },
      {
        name: "Mutli-Signature Wallet",
        link: "https://multi-sign.vercel.app",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/multi-sign.png",
        git: "https://github.com/meumar/multi-sign",
        description:
          "This is a multi-signature wallet application built on the Solana blockchain using the Anchor framework. The application allows users to create wallets with multiple members, set a transaction approval threshold, send SOL to the wallet, and transfer SOL from the wallet to other addresses with the required approval from members. Users can also view the transaction history of the wallet.",
        technologies: ["React", "Next.js", "Rust", "Anchor", "Tailwind"],
      },
      {
        name: "GOT NFT Marketplace",
        link: "https://got-nft.vercel.app",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/nft-marketplace.png",
        git: "https://github.com/meumar/got-nft",
        description:
          "This application enables users to create and trade NFTs of anything related to the Game of Thrones universe. Users can mint their own NFTs by uploading images, set their desired prices, and engage in buying and selling within the marketplace.",
        technologies: ["React", "Next.js", "Rust", "Anchor", "Tailwind"],
      },
      {
        name: "Profit swap",
        link: "https://sol-profit.vercel.app",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/profit-sol.png",
        git: "https://github.com/meumar/sol-profit",
        description:
          "This is a application to display real-time token prices across DEXs on Solana for profit calculation for better swap price using React.js. Integrated Jupitor, Orca, and Raydium for the proof of concept.",
        technologies: ["React", "Tailwind "],
      },
      {
        name: "Tik-Tac-Sol",
        link: "https://tik-tac-sol.vercel.app",
        image:
          "https://raw.githubusercontent.com/meumar/my-files/main/projects/tic-tak-sol.png",
        git: "https://github.com/meumar/tik-tac-sol",
        description:
          "This project implements a simple game on the Solana blockchain using the Anchor framework for the smart contract and Next.js for the user interface (UI). The game allows users to connect their wallets, create or join a game, and bet SPL tokens. The game is designed for two players, and the winner takes the total bet amount. If the game ends in a draw, the bet amount is returned to each player.",
        technologies: ["React", "Next.js", "Rust", "Anchor", "Tailwind"],
      },
    ],
  };
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
}
