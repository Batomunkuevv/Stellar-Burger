import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../services/redux/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
