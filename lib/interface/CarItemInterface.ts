export default interface CarItemInterface {
  id?: number,

  // Tampilan Utama
  brand_car: string,
  status: string,
  name?: string,
  // Jir bisa beda cok
  car_owner?: string,
  capacity: number | string, // untuk form create

  // Car Detail
  color?: string,
  car_model_year?: number | string, // untuk form create
  no_plate: string,

  // Owner Info in car Detail
  mobile_phone?: string,
  email?: string,
  address?: string

}
