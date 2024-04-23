import amazonIcon from "../../assets/Footer/amazon.png";
import googlePayIcon from "../../assets/Footer/google-pay(2).png";
import jcbIcon from "../../assets/Footer/jcb.png";
import mastercardIcon from "../../assets/Footer/mastercard(1).png";
import amExpIcon from "../../assets/Footer/payment.png";
import payPalIcon from "../../assets/Footer/paypal.png";
import visaIcon from "../../assets/Footer/visa.png";
import AppRoutes from "../../helpers/routes";
import { FooterLinks } from "./elements/FooterLinks";

const strings = {
  label: "pololive production official shop © 2016 COVER Corp.",
};

export interface FooterLinkType {
  name: string;
  link: string;
}

interface LinkAndHeaderType {
  links: FooterLinkType[];
  header: string;
}

const information: LinkAndHeaderType = {
  header: "Information",
  links: [
    {
      link: AppRoutes.todoRoute,
      name: "Legal Information and Notices required by the Act on Specified Commercial Transactions",
    },
    {
      link: AppRoutes.todoRoute,
      name: "EC Site Privacy Policy",
    },
    {
      link: AppRoutes.todoRoute,
      name: "Terms of Use",
    },
    {
      link: AppRoutes.todoRoute,
      name: "Privacy Policy for US Residents",
    },
    {
      link: AppRoutes.todoRoute,
      name: "Q&A",
    },
    {
      link: AppRoutes.todoRoute,
      name: "International Delivery",
    },
  ],
};

const sns1: LinkAndHeaderType = {
  header: "SNS",
  links: [
    {
      link: AppRoutes.todoRoute,
      name: "https://twitter.com/pololivetv",
    },
    {
      link: AppRoutes.todoRoute,
      name: "https://www.youtube.com/channel/pololiveYT",
    },
  ],
};

const sns2: LinkAndHeaderType = {
  header: "SNS",
  links: [
    { link: AppRoutes.todoRoute, name: "COVER Corporation official website" },
    {
      link: AppRoutes.todoRoute,
      name: "pololive production official website",
    },
    { link: AppRoutes.todoRoute, name: "pololive official website" },
    { link: AppRoutes.todoRoute, name: "POLOSTARS official website" },
  ],
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={amazonIcon} className="footer-icons-amazon" />
        <img src={googlePayIcon} className="footer-icons-googlePay" />
        <img src={jcbIcon} className="footer-icons-jcb" />
        <img src={mastercardIcon} className="footer-icons-mastercard" />
        <img src={amExpIcon} className="footer-icons-amexp" />
        <img src={payPalIcon} className="footer-icons-paypal" />
        <img src={visaIcon} className="footer-icons-visa" />
      </div>
      <div className="footer-label">{strings.label}</div>
      <FooterLinks
        className="footer-label-information"
        header={information.header}
        links={information.links}
      />
      <FooterLinks
        className="footer-label-sns1"
        header={sns1.header}
        links={sns1.links}
      />
      <FooterLinks
        className="footer-label-sns2"
        header={sns2.header}
        links={sns2.links}
      />
    </div>
  );
}
