export interface ResponseMessage {
  taskId: number;
  result: any;
  error: unknown | null;
  usedMemory: number;
}

export interface NovaPoolPrivateData {
  workerId: number;
}

export type NovaPoolData = [NovaPoolPrivateData, any];

export type ResponseCallback = (response: ResponseMessage) => void;
