export const icons = {
  account: require('../assets/images/tab-account.png'),
  quests: require('../assets/images/tab-quests.png'),
  accountActive: require('../assets/images/tab-account-active.png'),
  questsActive: require('../assets/images/tab-quests-active.png'),
  noScreen: require('../assets/images/no-screen.png'),
};

export const getIconByName = (name: string) => {
  switch (name) {
    case 'account': return icons.account;
    case 'quests': return icons.quests;
    case 'accountActive': return icons.accountActive;
    case 'questsActive': return icons.questsActive;
    default: return icons.account;
  }
};
