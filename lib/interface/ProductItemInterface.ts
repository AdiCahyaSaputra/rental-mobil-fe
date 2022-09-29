import { MouseEventHandler } from "react";

export default interface ProductItemInterface {
  brandCar: string,
  modelYear: number,
  color: string,
  owner: string,
  click?: MouseEventHandler
}
