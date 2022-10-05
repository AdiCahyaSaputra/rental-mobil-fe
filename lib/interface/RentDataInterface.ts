export default interface RentDataInterface {
  // Car Info
  brand_car?: string,

  // Customer info
  name?: string,
  id?: number, // Customer Id

  // Date info
  rent_date: string,
  return_date: string
}
