const works: {
  id: number;
  title: string;
  description: string;
  clientUrl: string;
  serverUrl: string;
  liveUrl: string;
  openSource: boolean;
  stacks: string[];
}[] = [
  {
    id: 1,
    title: "spid realty",
    description:
      "Spid Realty is redefining real estate marketing, advertising and sales to help real estate companies and agents achieve their marketing and sales goals while ensuring that clients are happy and fulfilled through making secured purchases on our platform.",
    clientUrl: "",
    serverUrl: "",
    liveUrl: "https://www.spidrealty.com",
    openSource: false,
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
      "Grooming Endowment Trust was set up as a nonprofit organisation that promotes sustainable social initiatives in education, health, enterprise and community development. Endowed with initial seed funding from Grooming Centre, the Trust provides grants and investments to social enterprises creating impact in their communities.",
    clientUrl: "https://github.com/ikecodes/grooming_endowment_trust",
    serverUrl: "",
    liveUrl: "https://www.groomingendowment.org",
    openSource: true,
    stacks: ["React", "Bootstrap", "Styled-Components", "Firebase"],
  },
  {
    id: 3,
    title: "buzzline",
    description:
      "If you are a small business owner or independent worker looking to convert more of your leads, you need Buzzline. Buzzline is the mobile CRM app you need to be in control. Get a second phone number with sms, multimedia message and bulk sms features to keep in touch with your customers. You can set auto-response messages for missed calls, so you never miss an important lead.",
    clientUrl: "",
    serverUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.buzzline&hl=en&gl=US",
    openSource: false,
    stacks: ["React Native", "Node.js/Express", "MongoDb"],
  },
  {
    id: 4,
    title: "xaron technologies",
    description:
      "Xaron technologies solves delievery services problem in Nigeria. A system created for delivery service owners to easily manage there riders. Verified independent riders can also signup and have access to these features. Xaron helps users find delivery riders nearest to there location.",
    clientUrl: "",
    serverUrl: "https://github.com/ikecodes/xaron_backend",
    liveUrl: "https://apps.apple.com/ng/app/xaron/id1624015119",
    openSource: false,
    stacks: ["React", "Bootstrap", "Socket.io", "Node.js/Express", "MongoDb"],
  },
  {
    id: 5,
    title: "broadcast nigeria",
    description:
      "E-commerce web application for the sale of various sound equipments.",
    clientUrl: "https://github.com/ikecodes/broadcast-nigeria_frontend",
    serverUrl: "https://github.com/ikecodes/broadcast-nigeria_backend",
    liveUrl: "https://broadcastnigeria.vercel.app/",
    openSource: true,
    stacks: ["React", "Redux", "CSS modules", "Node.js/Express", "MongoDb"],
  },
  {
    id: 6,
    title: "FriendStart",
    description:
      "FriendStart is a mobile application thats helps you meet new friends with similar interests. Aim was to build an app that helps break the ice by connecting both parties with events.",
    clientUrl: "",
    serverUrl: "",
    liveUrl: "https://apps.apple.com/us/app/friendstart/id1643136304",
    openSource: false,
    stacks: ["Node.js/Express", "MongoDb"],
  },
  {
    id: 7,
    title: "Ecomms",
    description:
      "Store locator web application that lets you easily find stores and products based on you location or one you set. Its an ecommerce web app with a store locator.",
    clientUrl: "https://github.com/ikecodes/ecommerce",
    serverUrl: "",
    liveUrl: "https://ecomms.vercel.app/",
    openSource: true,
    stacks: ["React", "Redux", "CSS modules", "Node.js/Express", "MongoDb"],
  },
];

export default works;
