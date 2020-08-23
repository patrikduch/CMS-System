import React from "react";

/**
 * @function asyncComponent => Asynchronous component loading
 * @param chunkName => Name of processed bundle
 * @param getComponent => Get component from different type of component`s export.
 */
function asyncComponent(chunkName: string, getComponent: Function) {
  class AsyncComponent extends React.Component<{}, {}> {
    static Component: null | React.ComponentType = null;

    /**
     * @function loadComponent => load component on demand.
     */
    static loadComponent() {
      return getComponent()
        .then(
          (m: { default: { component: React.ComponentType } }) =>
            m.default.component
        )
        .then((Component: React.ComponentType) => {
          AsyncComponent.Component = Component;
          return Component;
        });
    }

    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    /**
      * @function componentWillMount => Loading component has been initialized.
    */
    componentWillMount() {
      if (this.state.Component === null) {
        AsyncComponent.loadComponent().then((Component: React.Component) => {
          if (this.mounted) {
            this.setState({ Component });
          }
        });
      }
    }

    /**
      * @function componentDidMount => Component has been rendered.
    */
    componentDidMount() {
      this.mounted = true;
    }

    /**
      * @function componentWillMount => Component has been unmounted.
    */
    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const Component = this.state.Component;

      if (Component !== null) {
        return <Component {...this.props} />;
      }
      return null; // or <div /> with a loading spinner, etc..
    }
  }

  return {
    component: AsyncComponent,
    loadComponent: AsyncComponent.loadComponent
  };
}

export default asyncComponent;
