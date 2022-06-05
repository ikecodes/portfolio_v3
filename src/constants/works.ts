const works: {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  stacks: string[];
}[] = [
  {
    id: 1,
    title: "spid realty",
    description:
      "Spid Realty is a real estate, housing and investment company. Features include authentication, property upload, agent and property verification, property promotion with scheduler etc. I also design and implemented a custom admin dashboard for this web app.",
    githubUrl: "https://github.com/ikecodes/spidRealty_frontend",
    liveUrl: "https://www.spidrealty.com",
    stacks: [
      "React",
      "Bootstrap",
      "Styled-Components",
      "Typescript",
      "Node.js/Express",
      "MongoDb",
    ],
  },
  {
    id: 2,
    title: "grooming endownment trust",
    description:
      "This is a Trust fund web app. Features include grant application and updates, blog. Also comes with a custom dashboard designed by me for CRUD operations on the admin side.",
    githubUrl: "https://github.com/ikecodes/grooming_endowment_trust",
    liveUrl: "https://www.groomingendowment.org/home",
    stacks: ["React", "Bootstrap", "Styled-Components", "Firebase"],
  },
  {
    id: 3,
    title: "buzzline",
    description:
      "Buzzline is a Customer Relationship Management (CRM) application for small business owners. Built using React Native. Worked on and implemented features which includes messaging, language translations, coupons, google analytics, in-app purchases & subscriptions using revenuecat etc.",
    githubUrl: "",
    liveUrl: "https://www.buzzline.app/",
    stacks: ["React Native", "Node.js/Express", "MongoDb"],
  },
  {
    id: 4,
    title: "xaron technologies",
    description:
      "Xaron technologies solves delievery services problem in Nigeria. Worked with a team on the front-end using react. Did major work on the server-side. Implemented real-time location tracking of riders, authentication, order request and delivery etc.",
    githubUrl: "https://github.com/ikecodes/xaron_backend",
    liveUrl: "https://xaron-tech.com/",
    stacks: ["React", "Bootstrap", "Socket.io", "Node.js/Express", "MongoDb"],
  },
  {
    id: 5,
    title: "broadcast nigeria",
    description:
      "E-commerce web application for the sale of various sound equipments. Features include authentication, adding to cart, payment gateways etc.",
    githubUrl: "https://github.com/ikecodes/broadcast-nigeria_frontend",
    liveUrl: "https://broadcastnigeria.vercel.app/",
    stacks: ["React", "Redux", "CSS modules", "Node.js/Express", "MongoDb"],
  },
];

export default works;
