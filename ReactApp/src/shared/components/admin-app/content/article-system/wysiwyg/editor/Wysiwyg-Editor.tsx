import React, { useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";

import useDidMount from "../../../../../../hooks/dom/component.didmount.hook";
import { EditorProps } from "react-draft-wysiwyg";

import styled from "styled-components";
import IStyledComponentProps from "../../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import fetchExternalStylesheet from "../../../../../../helpers/styles/stylesheet/fetch-external-stylesheet";

/**
 * @type WysiwygTransferType => Type anotation of Wysiwyg article`s editor.
 */
type WysiwygTranferType = {
  data: { article: { content: string } };
};

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  action?: (() => Promise<WysiwygTranferType>) | null;
  sendEditorContent: Function;
}

/**
 * @function WysiwygEditor - common component for rendering wysiwyg editor.
 */
const WysiwygEditor: React.FC<IProps> = (props: IProps) => {
  const [editorState, setEditorState] = useState({
    content: {} as EditorState | undefined,
  });

  const [editorContent, setEditorContent] = useState("");

  const [style, setStyle] = useState("");

  const [editorComponent, setEditorComponent] = useState({
    component: null as null | React.ComponentType<EditorProps>,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const getBundle = () => {
    import("html-to-draftjs").then((_) => {
      const htmlToDraft = _.default;
      const contentBlock = htmlToDraft(editorContent + "&nbsp;");
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      const content = EditorState.moveFocusToEnd(editorState);

      setEditorState({
        content,
      });
    });
  };

  useDidMount(() => {
    if (props.action != null) {
      props.action().then((arg: WysiwygTranferType) => {
        setEditorContent(arg.data.article.content);
        setIsLoaded(true);
      });
    } else {
      /* Filling new data. */
      setEditorContent("");
      setIsLoaded(true);
    }
  });

  /**
   * useUpdate method
   */
  useEffect(() => {
    getBundle();
    fetchExternalStylesheet("https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.14.5/dist/react-draft-wysiwyg.css").then((data) => setStyle(data));

    import("react-draft-wysiwyg").then((_) => {
      const { Editor } = _;
      setEditorComponent({
        component: Editor,
      });
    });
  }, [isLoaded]);

  /**
   * @function onEditorStateChange - when changes occurs change local state of editor.
   * @param editorState  - current data of editor.
   */
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState({
      content: editorState,
    });

    props.sendEditorContent(editorState);
  };

  /**
   * @function WysiwygStyle => Styled div on which all necessary styles are applied (concept loading styles on demand).
   */
  const WysiwygStyle = styled.div`
    ${style}

    .DraftEditor-editorContainer {
      border: 0.5px solid black;
      padding-left: 0.4vw;
    }
  `;

  if (editorComponent.component != undefined) {
    const Component = editorComponent.component;

    return (
      <WysiwygStyle>
        {isLoaded ? (
          <div className={props.className}>
            <Component
              editorState={editorState.content}
              onEditorStateChange={onEditorStateChange}
            />{" "}
            <br></br>
          </div>
        ) : null}
      </WysiwygStyle>
    );
  }

  return null;
};

export default styled(WysiwygEditor)`
  border-color: 2px solid black;
`;
