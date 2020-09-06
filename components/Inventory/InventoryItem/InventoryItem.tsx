import * as React from 'react';
import { Image } from 'react-native';

import * as Assets from 'ui/assets';
import { Models } from 'types/models/models';

type Props = {
  id: string;
  size: number;
  type: Models.InventoryItemType;
  disabled: boolean;
};

export const InventoryItem: React.FC<Props> = ({
  id,
  size,
  type,
  disabled,
}) => {
  const iconStyles = {
    width: size,
    height: size,
    opacity: disabled ? 0.3 : 1,
  };

  return (
    <Image
      key={`inventoryItem-${id}`}
      source={Assets.getInventoryIconByName(type)}
      resizeMode="contain"
      style={iconStyles}
    />
  );
}
