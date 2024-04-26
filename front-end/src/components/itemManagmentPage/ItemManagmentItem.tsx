import { useNavigate } from "react-router-dom";
import { ItemManagmentItemType } from "./ItemManagmentPage";
import AppRoutes from "../../helpers/routes";

interface ItemManagmentItemProps {
  item: ItemManagmentItemType;
}

export function ItemManagmentItem(props: ItemManagmentItemProps) {
  const navigate = useNavigate();

  return (
    <div className="itemManagmentItem">
      <img className="itemManagmentItem-thumbnail" src={props.item.image} />
      <p className="itemManagmentItem-text">{props.item.name}</p>
      <div className="itemManagmentItem-costAndLink">
        <p className="itemManagmentItem-costAndLink-cost">{props.item.cost}</p>
        <p
          className="itemManagmentItem-costAndLink-link"
          onClick={() => navigate(AppRoutes.changeProductRoute)}
        >
          Edit
        </p>
      </div>
    </div>
  );
}
