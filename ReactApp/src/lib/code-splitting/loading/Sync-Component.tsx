import React from "react";
import { RouteConfigComponentProps } from "react-router-config";

/**
 * @function syncComponent => Load component synchronously.
 * @param chunkName => Name of loaded chunk (bunlde).
 * @param mod => React page component.
 */
function syncComponent(
  chunkName: string,
  mod: {
    default: {
      component: React.ComponentType<RouteConfigComponentProps>;
      loadData: Function;
    };
  }
) {
  const Component = mod.default.component;

  function SyncComponent(props: RouteConfigComponentProps) {
    const fetchedProps = props as RouteConfigComponentProps & {
      staticContext: { splitPoints: string[] };
    };

    if (fetchedProps.staticContext.splitPoints) {
      fetchedProps.staticContext.splitPoints.push(chunkName);
    }
    return <Component {...props} />;
  }

  return {
    component: SyncComponent,
    loadData: mod.default.loadData ? mod.default.loadData : null
  };
}

export default syncComponent;
