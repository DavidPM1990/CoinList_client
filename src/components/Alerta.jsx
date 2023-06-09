const Alerta = ({ alerta }) => {
  return (

    <div className={`${alerta.error ? 'bg-rose-100 border-rose-200 text-rose-600' : 'bg-emerald-100 border-emerald-200 text-emerald-600'} " w-full flex items-center justify-center text-center bg-rose-100 border border-rose-200 p-3"`}>
      <svg className={`${alerta.error ? 'text-rose-600 w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-5' : "text-esmerald-600 w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] ml-2"}`} viewBox="0 0 16 16">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />
      </svg>
      <span className={`${alerta.error ? 'bg-rose-100 border-rose-200 text-rose-600' : 'bg-emerald-100 border-emerald-200 text-emerald-600'}`}>
        {alerta.msg}
      </span>
    </div>
  )
}

export default Alerta


// < div className = {`${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10 `}>
//   { alerta.msg }
//   </div >

{/* <button className="opacity-70 hover:opacity-80 ml-3 mt-[3px]" onClick={() => setOpen(false)}>
        <div className="sr-only">Close</div>
        <svg className="w-4 h-4 fill-current">
          <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
        </svg>
      </button> */}