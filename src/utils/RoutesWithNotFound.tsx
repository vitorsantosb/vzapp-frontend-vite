import React from "react";
import { Route, Routes} from "react-router-dom";
import { userRoutes } from "../models/routes";
import {NothingFoundBackground} from "../components/NoPage/NothingFoundBackground.tsx";

interface Props {
  children: React.ReactNode;
}

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path={userRoutes.NOT_FOUND} element={<NothingFoundBackground />} />
    </Routes>
  );
}

export default RoutesWithNotFound;
