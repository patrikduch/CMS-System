import React, { useContext } from "react";
import { FormGroup } from "reactstrap";
import Editor from "../wysiwyg/editor/Wysiwyg-Editor";
import { EditorState } from "react-draft-wysiwyg";

import * as articleAPI from "../../../../../api/end-points/Articles-Api";

/* Common components imports. */
import LabelBasic from "../../../../common/labels/Label-Basic";
import ErrorFieldDisplayer from "../../../../../hoc/styled-components/forms/Error-Field-Displayer";
import ArticleDetailWysiwygContext from "../../../../../contexts/article-wysiwyg/article-detail-wysiwyg.context";
import isContentInValid from "../../../../../helpers/wysiwyg/is-Content-Invalid";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  articleId: number | null;
  articleTitle: string;
  content: string;
  sendArticleContent(editorState: EditorState): Promise<void>;
}

/**
 * @function ArticleContentDetail => Renders content of editable article.
 * @param props  => Passed props data.
 */
const ArticleContentDetail: React.FC<IProps> = (props: IProps) => {
  const articleDetailWysiwygContext = useContext(ArticleDetailWysiwygContext);

  return (
    <FormGroup>
      <LabelBasic elementRef="articleContentLabel">Obsah článku</LabelBasic>

      <ErrorFieldDisplayer
        hasErrorOccured={
          isContentInValid(articleDetailWysiwygContext.content) &&
          articleDetailWysiwygContext.hasContentError
        }
      >
        <Editor
          sendEditorContent={props.sendArticleContent}
          action={() => articleAPI.getArticle(props.articleId)}
        />
      </ErrorFieldDisplayer>
    </FormGroup>
  );
};

export default ArticleContentDetail;
