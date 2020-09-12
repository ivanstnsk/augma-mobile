export enum TutorialsAction {
  WELCOME_MARK_AD_DONE = 'WELCOME_MARK_AD_DONE',
}

export const actionWelcomeMarkAsDone = () => ({
  type: TutorialsAction.WELCOME_MARK_AD_DONE,
  payload: {},
});
