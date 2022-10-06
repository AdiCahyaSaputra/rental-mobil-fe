// Components
import Notify from 'components/reusable/global/Notify'

type Props = {
  response: {
    message: any,
    status: number
  }
}

const ErrNotify: React.FC<Props> = ({ response }) => {

  return (
    <>
      {
        typeof response.message === 'string'
          ? (
            <div className={`z-50 fixed ${response.message ? 'top-0' : '-top-full'} inset-x-0`}>
              <Notify message={response.message} status={response.status} />
            </div>
          )
          : (
            <div className={`z-50 fixed ${response.message ? 'top-0' : '-top-full'} flex flex-col space-y-2 inset-x-0`}>
              {Object.keys(response.message).map((data, index: number) => (
                <Notify key={index} message={response.message[data]!} status={response.status} />
              ))}
            </div>
          )
      }
    </>
  )
}

export default ErrNotify
