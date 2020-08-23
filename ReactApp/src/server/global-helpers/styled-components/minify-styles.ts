import CleanCSS from "clean-css";

/**
 * @function minifyStyles => Minification of styles that has been fetched during runtime.
 * @param styleTags  => List of style tags in original format without any minification.
 */
export const minifyStyles = (styleTags: any) => {
  return styleTags.map((tag: any) => {
    const miniTag = tag;
    const mini = new CleanCSS({}).minify(
      miniTag.props.dangerouslySetInnerHTML.__html
    );
    miniTag.props.dangerouslySetInnerHTML.__html = mini.styles;
    return miniTag;
  });
};
