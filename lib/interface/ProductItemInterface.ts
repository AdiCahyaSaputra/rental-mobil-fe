import { MouseEventHandler } from "react";

export default interface ProductItemInterface {
  name: string,
  modelYear: string,
  color: string,
  owner: string,
  click?: MouseEventHandler
}
