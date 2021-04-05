import { withAuth } from "components/withAuth";
import { useMemo } from "react";
import { Route, RouteProps } from "react-router-dom";

export const ProtectedRoute = (props: RouteProps) => {
  const extras = useMemo(() => {
    return {
      children: withAuth(props.children),
    };
  }, [props.children]);

  return <Route {...props} {...extras} />;
};
