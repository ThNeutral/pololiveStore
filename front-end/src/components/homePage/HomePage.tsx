import { ItemsGrid } from "../common/ItemsGrid";
import thumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { ItemsBlock } from "../common/ItemsBlock";

const strings = {
  newArrival: {
    en: "NEW ARRIVAL",
    jp: "新 参 者",
  },
  endingSoon: {
    en: "ENDING SOON",
    jp: "ま も な く 終 了 ",
  },
  regular: {
    en: "REGULAR",
    jp: "正 規 品",
  },
};

export interface ItemType {
  image: string;
  name: string;
  cost: number;
}

const dummyItem: ItemType = {
  image: thumbnail,
  name: 'hololive Indonesia 3rd Generation "holoh3ro" 2nd Anniversary Celebration',
  cost: 100.01,
};

const dummyItemSet: ItemType[] = Array<ItemType>(8).fill(dummyItem);

export function HomePage() {
  return (
    <div>
      <ItemsBlock
        enstring={strings.newArrival.en}
        jpstring={strings.newArrival.jp}
        items={dummyItemSet}
      />
      <ItemsBlock
        enstring={strings.endingSoon.en}
        jpstring={strings.endingSoon.jp}
        items={dummyItemSet}
      />
      <ItemsBlock
        enstring={strings.regular.en}
        jpstring={strings.regular.jp}
        items={dummyItemSet}
      />
    </div>
  );
}
