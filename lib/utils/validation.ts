// Lib
import validator from 'validator'

// Interface 
import RegisterDataInterface from 'lib/interface/RegisterDataInterface'
import LoginDataInterface from 'lib/interface/LoginDataInterface'
import CarItemInterface from 'lib/interface/CarItemInterface'

type ErrorsMesaage = { [field: string]: string }

// utils
const max = (str: string, max: number) => str.length <= max
const min = (str: string, min: number) => str.length >= min

// Main Validator
export const validateRegisterForm = (values: RegisterDataInterface) => {

  const errors: ErrorsMesaage = {}
  const { name, email, mobile_phone, password, address, password_confirmation } = values

  if (!min(name, 4)) errors.name = "Nama harus diisi minimal 4 huruf"
  if (!max(name, 20)) errors.name = "Nama harus diisi maksimal 20 huruf"

  if (!validator.isEmail(email)) errors.email = "Email harus mengandung @ dan domain yang sesuai"

  if (!validator.isMobilePhone(mobile_phone.toString(), 'id-ID')) errors.mobile_phone = "No HP tidak sesuai negara +62 hehe"
  if (!min(mobile_phone.toString(), 11)) errors.mobile_phone = "No HP harus diisi minimal 11 digit"
  if (!max(mobile_phone.toString(), 15)) errors.mobile_phone = "No HP harus diisi maksimal 15 digit"

  if (!address) errors.address = "Alamat harus diisi"

  if (!min(password, 8)) errors.password = "Password harus diisi minimal 8 karakter"
  if (password_confirmation !== password) errors.password_confirmation = "Password berbeda"

  return errors

}

export const validateLoginForm = (values: LoginDataInterface) => {
  const errors: ErrorsMesaage = {}
  const { email, password } = values

  if (!validator.isEmail(email)) errors.email = "Email harus mengandung @ dan domain yang sesuai"
  if (!password) errors.password = "Password tidak boleh kosong"

  return errors
}

export const validateCreateCarForm = (values: CarItemInterface) => {
  const errors: ErrorsMesaage = {}

  if (!values.brand_car) errors.brand_car = "brand_car Tidak Boleh Kosong!"

  if (!values.car_model_year) errors.car_model_year = "Model Year Tidak Boleh Kosong!"
  if (typeof values.car_model_year !== 'number') errors.car_model_year = "Model Year harus angka!"

  if (!validator.isAlpha(values.color!)) errors.car_model_year = "Warna hanya boleh mengandung a-z atau A-Z"

  if (values.capacity! < 2) errors.capacity = "Kapasitas minimal 2"
  if (values.capacity! > 10) errors.capacity = "Kapasitas maksimal 10"

  if (!min(values.no_plate!, 5)) errors.no_plate = "Plat Nomor Minimal 5"
  if (!max(values.no_plate!, 12)) errors.no_plate = "Plat Nomor Maksimal 12"

  return errors
}
