export enum mongoConnectionType {
  connected = 'connected',
  disconnected = 'disconnected',
}

export interface ActionMongoConnection {
  type: mongoConnectionType;
}

export const mongoConnectionReducer = (
  state = mongoConnectionType.disconnected,
  action: ActionMongoConnection
) => {
  switch (action.type) {
    case mongoConnectionType.connected:
      return mongoConnectionType.connected;
    case mongoConnectionType.disconnected:
      return mongoConnectionType.disconnected;
    default:
      return mongoConnectionType.disconnected;
  }
};
