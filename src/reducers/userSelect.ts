export enum ActionUserSelectorType {
  store = 'store',
  incoming = 'incoming',
  outcoming = 'outcoming',
}

export interface ActionUserSelector {
  type: ActionUserSelectorType;
}

export const userSelectoreducer = (
  state = ActionUserSelectorType.store,
  action: ActionUserSelector
) => {
  switch (action.type) {
    case ActionUserSelectorType.store:
      return ActionUserSelectorType.store;
    case ActionUserSelectorType.incoming:
      return ActionUserSelectorType.incoming;
    case ActionUserSelectorType.outcoming:
      return ActionUserSelectorType.outcoming;
    default:
      return ActionUserSelectorType.store;
  }
};
