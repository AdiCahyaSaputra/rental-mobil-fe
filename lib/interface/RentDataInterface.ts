export default interface RentDataInterface {
  // Car Info
  brand_car?: string,
  status_id?: number

  // Customer info
  name?: string,
  id?: number, // Customer Id

  // Date info
  rent_date: string,
  return_date: string
}
