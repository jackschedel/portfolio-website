export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 500,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 150,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 250,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".role-wrapper__text",
    animation: {
      delay: 250,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".role-wrapper__image",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
];
