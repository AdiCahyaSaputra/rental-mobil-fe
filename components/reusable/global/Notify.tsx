type Props = {
  message: string,
  status: number
}

const Notify: React.FC<Props> = ({ message, status }) => {

  const notifyClass = status < 400
    ? 'bg-green-600/40 shadow-green-600/40'
    : 'bg-red-600/40 shadow-red-600/40'

  return (
    <div className={`${notifyClass} shadow-md inset-x-0 text-xs py-2 px-4 font-bold tracking-wide text-center backdrop-blur-md text-white`}>
      {message}
    </div>
  )
}

export default Notify
