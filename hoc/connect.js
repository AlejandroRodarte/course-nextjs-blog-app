import { useMemo } from "react";
import { useAppContext } from "../contexts/app-context";

const connect = (Component, mapStateToProps, mapDispatchToProps) => (props) => {
  const {
    store: { state, dispatch },
  } = useAppContext();

  const stateProps = useMemo(() => {
    if (mapStateToProps) return mapStateToProps(state);
    else return {};
  }, [state]);

  const dispatchProps = useMemo(() => {
    if (mapDispatchToProps) return mapDispatchToProps(dispatch);
    else return {};
  }, [dispatch]);

  return <Component {...props} {...stateProps} {...dispatchProps} />;
};

export default connect;
