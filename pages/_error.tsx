const Error = ({ statusCode }: any) => {
  return (
    <section className='h-screen bg-slate-100 flex items-center justify-center'>

      <div>
        <h1 className='text-xl font-extrabold'>
          Ada <span className='text-red-600'>Error</span> nih
        </h1>

        {statusCode ? (
          <>
            <p className='text-sm mt-2 font-medium text-gray-500'>
              Status Code Nya <span className='text-blue-600 font-bold'>{statusCode}</span>
            </p>
          </>
        ) : (
          <p className='mt-10 py-2 px-4 bg-black text-white font-bold'>
            Penyebabnya dari Client
          </p>
        )}

      </div>

    </section>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
