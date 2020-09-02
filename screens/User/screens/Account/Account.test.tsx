import React from 'react';
import renderer from 'react-test-renderer';

import { Account } from './Account';

jest.mock('hooks', () => ({
  useLogin: jest.fn().mockReturnValue({
    logout: jest.fn(),
  })
}));

jest.mock('store/user', () => ({
  useUserInfo: jest.fn().mockReturnValue({
    name: 'Test',
  })
}));

jest.mock('components/Text', () => ({
  Text: () => "Text"
}));

jest.mock('components/Avatar', () => ({
  Avatar: () => "Avatar"
}));

jest.mock('components/Button', () => ({
  Button: () => "Button"
}));

describe('Account', () => {
  it('should render Account', () => {
    const tree = renderer.create(<Account />).toJSON();
   
    expect(tree).toMatchSnapshot();
  });
});