import { useState } from "react";
import yellowArrow from "../../assets/ItemListPage/yellow-arrow.png";
import uproarThumbnail from "../../assets/DummyItems/uproarThumbnail.png";

interface KeyStatsItem {
  image: string;
  name: string;
  desc: string;
}

const dummyItems: KeyStatsItem[] = [
  {
    image: uproarThumbnail,
    name: '1セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
  },
  {
    image: uproarThumbnail,
    name: '2セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
  },
  {
    image: uproarThumbnail,
    name: '3セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
  },
];

export function KeyStatsPage() {
  return (
    <div className="keyStats">
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">The most searched items</p>
        <KeyStatsItemCarousel items={dummyItems} />
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">The most sold item</p>
        <KeyStatsItemCarousel items={dummyItems} />
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">Net eranings this month</p>
        <p className="keyStats-stat-text" style={{marginRight: "150px"}}>~n</p>
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">Average order value</p>
        <p className="keyStats-stat-text" style={{marginRight: "150px"}}>~n</p>
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">Items sold this month</p>
        <p className="keyStats-stat-text" style={{marginRight: "150px"}}>~n</p>
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">
          Total number of customers this month
        </p>
        <p className="keyStats-stat-text" style={{marginRight: "150px"}}>~n</p>
      </div>
      <div className="keyStats-stat">
        <p className="keyStats-stat-text">Total number of discounts</p>
        <p className="keyStats-stat-text" style={{marginRight: "150px"}}>~n</p>
        <p className="keyStats-stat-link">Manage discounts</p>
      </div>
    </div>
  );
}

interface KeyStatsProps {
  items: KeyStatsItem[];
}

function KeyStatsItemCarousel(props: KeyStatsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = props.items.length - 1;

  return (
    <div className="itemsGrid-carousel">
      <div
        className="itemsGrid-carousel-navigation"
        onClick={
          currentPage !== 0 ? () => setCurrentPage(currentPage - 1) : () => {}
        }
      >
        <img
          className={
            `itemsGrid-carousel-navigation-left` +
            (currentPage === 0 ? " itemsGrid-carousel-navigation-disabled" : "")
          }
          src={yellowArrow}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <img style={{ width: "158px" }} src={props.items[currentPage].image} />
        <div style={{ width: "240px" }}>
          <p
            style={{
              fontFamily: "Itim",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.items[currentPage].name}
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "16px",
              textAlign: "left",
            }}
          >
            {props.items[currentPage].desc}
          </p>
        </div>
      </div>
      <div
        className="itemsGrid-carousel-navigation"
        onClick={
          currentPage !== maxPage
            ? () => setCurrentPage(currentPage + 1)
            : () => {}
        }
      >
        <img
          className={
            `itemsGrid-carousel-navigation-right` +
            (currentPage === maxPage
              ? " itemsGrid-carousel-navigation-disabled"
              : "")
          }
          src={yellowArrow}
        />
      </div>
    </div>
  );
}
