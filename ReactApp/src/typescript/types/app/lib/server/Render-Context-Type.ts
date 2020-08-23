/**
 * @type RederContextType => Type anotation for render proces of SSR.
 */
type RenderContextType = {
  splitPoints: never[];
  notFound?: boolean;
};

export default RenderContextType;
