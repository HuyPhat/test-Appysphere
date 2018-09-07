import React from "react";

function WithLoading(Component) {
  return function WrappedComponent({ loading, ...restProps }) {
    if (loading) {
      return <p>Loading...</p>;
    }
    return <Component {...restProps} />;
  };
}

export default WithLoading;
