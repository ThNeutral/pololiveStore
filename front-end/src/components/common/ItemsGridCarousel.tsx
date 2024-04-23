import { useState } from "react";
import { ItemType } from "../homePage/HomePage";
import { ItemsGrid } from "./ItemsGrid";
import yellowArrow from "../../assets/ItemListPage/yellow-arrow.png";

interface ItemsGridCarouselProps {
  items: ItemType[];
  size: number;
}

export default function ItemsGridCarousel(props: ItemsGridCarouselProps) {
  const maxPage =
    (props.items.length +
      (props.size - (props.items.length % props.size) === 0
        ? props.size
        : props.items.length % props.size)) /
    props.size;
  const [currentPage, setCurrentPage] = useState<number>(0);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="itemsGrid-carousel">
      <div className="itemsGrid-carousel-navigation" onClick={currentPage !== 0 ? handlePreviousPage : () => {}}>
        <img
          className={
            `itemsGrid-carousel-navigation-left` +
            (currentPage === 0 ? " itemsGrid-carousel-navigation-disabled" : "")
          }
          src={yellowArrow}
        />
      </div>
      <ItemsGrid
        items={props.items.slice(currentPage, currentPage + props.size)}
      />
      <div className="itemsGrid-carousel-navigation" onClick={currentPage !== maxPage ? handleNextPage : () => {}}>
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
