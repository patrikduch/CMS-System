/**
 * @interface IEventHandler => Contract for event that is used for html element manipulation.
 */
interface IEventHandlerHTMLElement
  extends React.ChangeEvent<HTMLInputElement> {}

export default IEventHandlerHTMLElement;
