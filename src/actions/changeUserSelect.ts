import { ActionUserSelectorType } from '../reducers/userSelect';

export const changeUserSelect = (type: ActionUserSelectorType) => {
  return {
    type,
  };
};
