import React from "react";
import Loading from "./Loading/loading";
import NotificationsSystem, {
    wyboTheme,
    dismissNotification,
    FadeTransition,
  } from "reapop";
import { useDispatch, useSelector } from "react-redux";
import { setUpNotifications } from "reapop";
import AppRoutes from "../pages/AppRoutes";

  setUpNotifications({
    defaultProps: {
      title: "Admin Dashboard App By @Hanu7674",
      position: "top-right",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
    },
  });
const RouterComponent = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

    return(
        <React.Suspense fallback={<Loading />}>
            <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dispatch(dismissNotification(id))}
        theme={wyboTheme}
        smallScreenBreakpoint
        components={{ Transition: FadeTransition }}
      />
        <AppRoutes/>
        </React.Suspense>
    )
}

export default RouterComponent;