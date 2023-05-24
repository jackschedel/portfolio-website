import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import setupTypewriter from "./scripts/typewriter";

typewriter = setupTypewriter(typewriter);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
typewriter.type();
