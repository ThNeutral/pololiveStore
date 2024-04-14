import logoSoftPurple from "../../assets/Header/MerchHolo logo (soft purple).png";
import magniGlassIcon from "../../assets/Header/MagniGlassIcon.png";
import userIcon from "../../assets/Header/UsrIcon.png";
import cartIcon from "../../assets/Header/Cart_icon.png";
import langIcon from "../../assets/Header/LangSwitchIcon.png";

const strings = {
  en: {
    label: "OFFICIAL SHOP",
    smallLabel: "pololive productions",
    lang: "EN",
  },
};

export default function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={logoSoftPurple} />
      <div className="header-text">
        <p className="header-text-small">{strings.en.smallLabel}</p>
        <p className="header-text-big">{strings.en.label}</p>
      </div>
      <div>
        <div className="header-search">
          <input className="header-search-input" type="text" />
          <img className="header-search-icon" src={magniGlassIcon} />
        </div>
      </div>
      <div className="header-icons">
        <img className="header-icons-lang" src={langIcon} />
        <p className="header-icons-lang-text">{strings.en.lang}</p>
        <img className="header-icons-user" src={userIcon} />
        <img className="header-icons-cart" src={cartIcon} />
      </div>
    </div>
  );
}
