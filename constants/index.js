export const sideBarLinks = [
  { name: "Home", icon: "icons/home.svg" },
  { name: "Messages", icon: "icons/message.svg" },
  { name: "Tasks", icon: "icons/task-square.svg" },
  { name: "Members", icon: "icons/profile-2users.svg" },
  { name: "Settings", icon: "icons/settings.svg" },
];

export const projects = [
  "Mobile App",
  "Website Redesign",
  "Design System",
  "Wireframes",
];

export const todos = [
  {
    urgency: "Low",
    isComplete: false,
    title: "Brainstorming",
    desc: "Brainstorming brings team members' diverse experience into play.",
    collaborators: [
      "/images/team-member-1.png",
      "/images/team-member-4.png",
      "/images/team-member-3.png",
    ],
    comments: 12,
    files: 0,
  },
  {
    urgency: "High",
    isComplete: false,
    title: "Research",
    desc: "User research helps you to create an optimal product for users.",
    collaborators: ["/images/team-member-1.png", "/images/team-member-4.png"],
    comments: 10,
    files: 3,
  },
  {
    urgency: "High",
    isComplete: false,
    title: "Wireframes",
    desc: "Low fidelity wireframes include the most basic content and visuals.",
    collaborators: [
      "/images/team-member-1.png",
      "/images/team-member-4.png",
      "/images/team-member-3.png",
    ],
    comments: 15,
    files: 5,
  },
  {
    urgency: "High",
    isComplete: false,
    title: "Wireframes",
    desc: "Low fidelity wireframes include the most basic content and visuals.",
    collaborators: ["/images/team-member-1.png", "/images/team-member-3.png"],
    comments: 7,
    files: 2,
  },
];

export const onProgress = [
  {
    urgency: "Low",
    isComplete: false,
    title: "Onboarding Illustrations",
    imgs: ["onboarding"],
    collaborators: ["/images/team-member-1.png", "/images/team-member-3.png"],
    comments: 14,
    files: 15,
  },
  {
    urgency: "Low",
    isComplete: false,
    title: "Moodboard",
    imgs: ["mood-board-1", "mood-board-2"],
    collaborators: ["/images/team-member-1.png", "/images/team-member-3.png"],
    comments: 9,
    files: 10,
  },
];

export const done = [
  {
    urgency: "Low",
    isComplete: true,
    title: "Mobile App Design",
    imgs: ["mobile-app-design"],
    collaborators: ["/images/team-member-1.png", "/images/team-member-3.png"],
    comments: 12,
    files: 15,
  },
  {
    urgency: "High",
    isComplete: true,
    title: "Design System",
    desc: "It just needs to adapt the UI from what you did before.",
    collaborators: ["/images/team-member-1.png", "/images/team-member-3.png"],
    comments: 12,
    files: 15,
  },
];
