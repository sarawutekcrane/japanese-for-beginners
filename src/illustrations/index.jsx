import { GreetingIllustration } from "./greetings";
import NumberIllustration from "./NumberIllustration";
import ColorIllustration from "./ColorIllustration";
import KanaIllustration from "./KanaIllustration";

/** Renders the correct flat-SVG illustration for a vocabulary or kana card. */
export default function Illustration({ item }) {
  if (!item) return null;
  if (item.script) {
    return <KanaIllustration script={item.script} group={item.group} id={item.id} />;
  }
  if (item.icon === "number") {
    return <NumberIllustration value={item.value} id={item.id} />;
  }
  if (item.icon === "color") {
    return <ColorIllustration hex={item.hex} id={item.id} />;
  }
  return <GreetingIllustration icon={item.icon} id={item.id} />;
}
