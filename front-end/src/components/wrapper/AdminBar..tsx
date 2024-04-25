import { Outlet, useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

export function AdminBar() {
  const navigate = useNavigate();

  const path = window.location.pathname;

  return (
    <>
      <div className="adminBar">
        <div
          className={
            `adminBar-button` +
            (path === AppRoutes.keyStatsRoute ? " adminBar-button-active" : "")
          }
          onClick={() => navigate(AppRoutes.keyStatsRoute)}
        >
          Key stats
        </div>
        <div
          className={
            `adminBar-button` +
            (path === AppRoutes.adminAssignmentRoute
              ? " adminBar-button-active"
              : "")
          }
          onClick={() => navigate(AppRoutes.adminAssignmentRoute)}
        >
          Admin assignment
        </div>
        <div
          className={
            `adminBar-button` +
            (path === AppRoutes.itemManagmentRoute
              ? " adminBar-button-active"
              : "")
          }
          onClick={() => navigate(AppRoutes.itemManagmentRoute)}
        >
          Item managment
        </div>
      </div>
      <Outlet />
    </>
  );
}
