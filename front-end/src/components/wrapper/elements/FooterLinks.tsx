import { FooterLinkType } from "../Footer";
import { useNavigate } from "react-router-dom";

interface FooterLinkProps {
  links: FooterLinkType[];
  header: string;
  className?: string;
}

export function FooterLinks(props: FooterLinkProps) {
  const navigate = useNavigate();

  function linkClickHandler(href: string) {
    navigate(href);
  }

  return (
    <div className={props.className}>
      <h3 className="footer-label-header">{props.header}</h3>
      {props.links.map((link) => {
        return (
          <div
            className="footer-label-link"
            onClick={() => linkClickHandler(link.link)}
          >
            {link.name}
          </div>
        );
      })}
    </div>
  );
}
