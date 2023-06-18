import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import setupTypewriter from "./scripts/typewriter";

const typewriterElement = document.querySelector("#typewriter");
const typewriter = setupTypewriter(typewriterElement);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
typewriter.type();
