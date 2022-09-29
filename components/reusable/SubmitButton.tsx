type Props = {
  isSubmitting: boolean,
  errors: object,
  name: string
}

const SubmitButton: React.FC<Props> = ({ isSubmitting, errors, name }) => {
  return (
    <div className='mt-12 text-white'>

      {isSubmitting ? (
        <button disabled className='font-bold py-2 px-4 bg-green-800 hover:shadow-md hover:shadow-green-800/80 w-full'>
          Bentar...
        </button>
      ) : (
        <button disabled={Object.keys(errors).length !== 0} type='submit' className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full disabled:bg-green-800 disabled:text-white/60 disabled:shadow-green-800'>
          {name}
        </button>
      )}

    </div>
  )
}

export default SubmitButton
