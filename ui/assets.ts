export const icons = {
  account: require('../assets/images/tab-account.png'),
  quests: require('../assets/images/tab-quests.png'),
  accountActive: require('../assets/images/tab-account-active.png'),
  questsActive: require('../assets/images/tab-quests-active.png'),
  noScreen: require('../assets/images/no-screen.png'),
  noQuestIcon: require('../assets/images/no-quest-icon.png'),
  back: require('../assets/images/back.png'),
  skull: require('../assets/images/skull.png'),
  skullActive: require('../assets/images/skull-active.png'),
  backArrow: require('../assets/images/back-arrow.png'),

  questProgress: require('../assets/images/tab-quest-progress.png'),
  questProgressActive: require('../assets/images/tab-quest-progress-active.png'),
  questMessages: require('../assets/images/tab-quest-messages.png'),
  questMessagesActive: require('../assets/images/tab-quest-messages-active.png'),
  questInventory: require('../assets/images/tab-quest-inventory.png'),
  questInventoryActive: require('../assets/images/tab-quest-inventory-active.png'),
  questMap: require('../assets/images/tab-quest-map.png'),
  questMapActive: require('../assets/images/tab-quest-map-active.png'),

  appLogo: require('../assets/images/app-logo.png'),
  logoEye: require('../assets/images/logo-eye.png'),
  logoWrapper: require('../assets/images/logo-wrapper.png'),
};

export const getIconByName = (name: string) => {
  switch (name) {
    case 'account': return icons.account;
    case 'quests': return icons.quests;
    case 'accountActive': return icons.accountActive;
    case 'questsActive': return icons.questsActive;

    case 'questProgress': return icons.questProgress;
    case 'questProgressActive': return icons.questProgressActive;
    case 'questMessages': return icons.questMessages;
    case 'questMessagesActive': return icons.questMessagesActive;
    case 'questInventory': return icons.questInventory;
    case 'questInventoryActive': return icons.questInventoryActive;
    case 'questMap': return icons.questMap;
    case 'questMapActive': return icons.questMapActive;
    default: return icons.account;
  }
};
