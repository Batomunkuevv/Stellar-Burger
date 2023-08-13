import { FC, useEffect } from "react";
import { useDispatch } from "../../hooks/redux-hooks";
import { UserOrdersWsTypes } from "../../services/user-orders";

import Profile from "../../components/profile/profile";

const ProfilePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: UserOrdersWsTypes.CONNECTION_START });

        return () => {
            dispatch({type: UserOrdersWsTypes.CONNECTION_CLOSED});
        }
    }, [dispatch]);

    return <Profile />;
};

export default ProfilePage;
