export interface Result<T> {
  code: string | number;
  data: T;
  success: boolean;
  messages: string;
}

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
