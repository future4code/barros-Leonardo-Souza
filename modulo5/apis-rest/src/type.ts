export type userType = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

export type bodyType = {
    name: string,
    email: string,
    type: string,
    age: number
}

export enum UserType {
    ADMIN="ADMIN",
    NORMAL="NORMAL"
}