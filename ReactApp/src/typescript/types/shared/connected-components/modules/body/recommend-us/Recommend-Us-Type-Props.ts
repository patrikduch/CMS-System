import RecommendUsFieldType from "../../../../../../enums/shared/redux/Recommend-Us-Field-Type";

/**
 * @type RecommendUsTypeProps => Type anotation for project name container and connected component.
 */
type RecommendUsTypeProps = {
  projectDetail: {
    domainUrl: string;
    projectName: string;
  };

  emailDetail: {
    senderEmail: string;
    recipientEmail: string;
    isModalOn: string;
  };

  recommendUsInfo: {
    senderEmail: "";
    recipientEmail: "";
    isModalOn: false;
  };

  ownerInfo: {
    companyName: string;
  };

  recommendsUsActions: {
    changeRecommendUsField(
      changeType: RecommendUsFieldType,
      changeValue: string
    ): void;
    toggleRecommendUsModalState(): void;

    resetRecommendUsModalState(): void;
  };

  notificationActions: {
    setActualNotification(data: { isVisible: boolean; message: string }): void;
    toggleVisibility(): void;
  };
};

export default RecommendUsTypeProps;
