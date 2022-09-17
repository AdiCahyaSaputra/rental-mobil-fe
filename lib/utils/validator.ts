import validator from 'validator'

type ErrorsMesaage = {
  [field: string]: string
}

export const validateForm = (values: any) => {
  const errors: ErrorsMesaage = {}

  if (!values.name) errors.name = "Nama harus diisi"
  if (!validator.isAlpha(values.name)) errors.name = "Nama tidak boleh mengandung spasi, symbol, atau angka"

  if (!values.email) errors.email = "Email harus diisi"
  if (!validator.isEmail(values.email)) errors.email = "Email harus mengandung @ dan domain yang sesuai"

  return errors
}
