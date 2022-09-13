type Props = {
  type: string,
  placeholder: string,
  changeHandler: any,
  name: string,
  value: string | number
}

const Input: React.FC<Props> = ({ type, placeholder, changeHandler, name, value }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className='border-b-2 border-white/20 w-full outline-none bg-black text-white focus:border-b-2 focus:border-white p-1.5'
        onChange={changeHandler}
        name={name}
        value={value}
      />
    </div>
  )
}

export default Input
