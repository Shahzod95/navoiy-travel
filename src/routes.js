const routes = [
  {
    title: "About",
    icon: true,
    logged: true,
  },
  {
    title: "Destinations",
    // icon: downIcon ? false : true,
    logged: false,
    children: [
      {
        title: "Art and culture",
        img_url: "none",
      },
      {
        title: "Coasts and breaches0",
        img_url: "none",
      },
      {
        title: "City tourism",
        img_url: "none",
      },
      {
        title: "Nature",
        img_url: "none",
      },
      {
        title: "National food",
        img_url: "none",
      },
      {
        title: "Sport and anventure",
        img_url: "none",
      },
      {
        title: "Shopping",
        img_url: "none",
      },
      {
        title: "Routes",
        img_url: "none",
      },
    ],
  },
  {
    title: "Events",
    logged: true,
  },
  {
    title: "Packages",
    logged: true,
  },
  {
    title: "Blog",
    logged: true,
  },
  {
    title: "Feedback",
    logged: true,
  },
];

export default routes;
