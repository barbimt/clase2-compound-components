// Componente HOC
import { ComponentType } from "react";
import LoadingComponent from "../loading/loading.component";

function LoadingHOC<T extends Record<string, any>>(WrappedComponent: ComponentType<T>) {
  function wrapper(props: T) {
    return (
      <>
        {props.characters.length === 0 ? (
          <LoadingComponent />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  }
  return wrapper;
}

export default LoadingHOC;