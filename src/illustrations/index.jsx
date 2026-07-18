import { greetingIcons } from "./greetings";
import { foodDrinksIcons } from "./foodDrinks";
import { animalIcons } from "./animals";
import { familyIcons } from "./family";
import { bodyPartsIcons } from "./bodyParts";
import { placesIcons } from "./places";
import { timeDaysIcons } from "./timeDays";
import { householdIcons } from "./household";
import { workIcons } from "./work";
import { transportationIcons } from "./transportation";
import { clothingIcons } from "./clothing";
import { hobbiesIcons } from "./hobbies";
import { shoppingIcons } from "./shopping";
import { adjectivesIIcons } from "./adjectivesI";
import { adjectivesNaIcons } from "./adjectivesNa";
import { verbsIcons } from "./verbs";
import NumberIllustration from "./NumberIllustration";
import ColorIllustration from "./ColorIllustration";
import KanaIllustration from "./KanaIllustration";

const VOCAB_ICONS = {
  ...greetingIcons,
  ...foodDrinksIcons,
  ...animalIcons,
  ...familyIcons,
  ...bodyPartsIcons,
  ...placesIcons,
  ...timeDaysIcons,
  ...householdIcons,
  ...workIcons,
  ...transportationIcons,
  ...clothingIcons,
  ...hobbiesIcons,
  ...shoppingIcons,
  ...adjectivesIIcons,
  ...adjectivesNaIcons,
  ...verbsIcons,
};

/** Renders the correct flat-SVG illustration for a vocabulary or kana card. */
export default function Illustration({ item }) {
  if (!item) return null;
  if (item.script) {
    return <KanaIllustration script={item.script} group={item.group} char={item.char} id={item.id} />;
  }
  if (item.icon === "number") {
    return <NumberIllustration value={item.value} id={item.id} />;
  }
  if (item.icon === "color") {
    return <ColorIllustration hex={item.hex} id={item.id} />;
  }
  const render = VOCAB_ICONS[item.icon] || VOCAB_ICONS["hello-wave"];
  return render(item.id || item.icon);
}
