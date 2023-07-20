import { ReactElement } from "react";

export type TProtectedRoute = {
    onlyUnAuth?: boolean;
    children: ReactElement;
}