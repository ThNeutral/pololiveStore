import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";
import { useEffect } from "react";

export function RootPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(AppRoutes.homeRoute);
  }, []);
  return <></>;
}
