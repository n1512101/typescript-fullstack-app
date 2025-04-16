interface IDataProperties {
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponse<T> {
  status: "success" | "error";
  statusCode: number;
  message: string;
  data?: (IDataProperties & T) | (IDataProperties & T)[];
  meta?: {};
  error?: {};
}
