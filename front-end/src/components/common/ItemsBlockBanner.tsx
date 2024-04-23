import decorGold from "../../assets/FrontPage/DecorGold.png";
import decorPurple from "../../assets/FrontPage/DecorPurple.png";
import smallerLines from "../../assets/FrontPage/smallerLines.png";

interface ItemsBlockBannerProps {
  jpstring: string;
  enstring: string;
}

export function ItemsBlockBanner(props: ItemsBlockBannerProps) {
  return (
    <div className="divider">
      <div className="divider-banner">
        <div className="divider-banner-text">
          <p className="divider-banner-text-jp">{props.jpstring}</p>
          <p className="divider-banner-text-en">{props.enstring}</p>
        </div>
        <img className="divider-banner-decorGold-top" src={decorGold} />
        <img className="divider-banner-decorGold-bottom" src={decorGold} />
        <img className="divider-banner-decorPurple-top" src={decorPurple} />
        <img className="divider-banner-decorPurple-bottom" src={decorPurple} />
        <img className="divider-lines-left" src={smallerLines} />
        <img className="divider-lines-right" src={smallerLines} />
      </div>
    </div>
  );
}
