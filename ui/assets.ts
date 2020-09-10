import { Models } from "types/models/models";

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
  close: require('../assets/images/icon-close.png'),
  clock: require('../assets/images/icon-clock.png'),

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

  marker: require('../assets/images/map-marker.png'),
  markerActive: require('../assets/images/map-marker-active.png'),

  welcomeTab1: require('../assets/images/welcome-tab1.png'),
  welcomeTab2: require('../assets/images/welcome-tab2.png'),
  welcomeTab3: require('../assets/images/welcome-tab3.png'),
  welcomeTab4: require('../assets/images/welcome-tab4.png'),

  infoQuestion: require('../assets/images/info-question.png'),
  infoCondition: require('../assets/images/info-condition.png'),
  infoLimit: require('../assets/images/info-limit.png'),

  tempCover: require('assets/images/quest-1-cover.png'),
};

export const inventoryItemIcons = {
  itemFile: require('assets/images/item-file.png'),
  itemFileLocked: require('assets/images/item-file-locked.png'),
}

export type AssetIcon = keyof typeof icons;

export const getIconByName = (name: AssetIcon) => icons[name];

export const getInventoryIconByName = (name: Models.InventoryItemType) => {
  switch (name) {
    case 'file': return inventoryItemIcons.itemFile;
    case 'file-locked': return inventoryItemIcons.itemFileLocked;
    default: return inventoryItemIcons.itemFileLocked;
  }
}
