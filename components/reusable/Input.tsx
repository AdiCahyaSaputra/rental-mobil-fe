type Props = {
  type: string,
  placeholder: string
}

const Input: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className='border-b-2 border-white/20 w-full outline-none bg-black text-white focus:border-b-2 focus:border-white p-1.5'
      />
    </div>
  )
}

export default Input
