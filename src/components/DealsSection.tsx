function DealsSection() {
  return (
    <section className='w-full max-w-[1600px] mx-auto mb-8'>
      <div className='h-full overflow-x-auto'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-[10px] sm:mb-[20px]'>
            <h2 className='text-2xl font-semibold text-left mb-4'>
              Deals For You, dynamic header first-item boolean
            </h2>
            <a href='/categories'>
              <button className='text-primary-copy hover:opacity-80 underline text-[14px] font-[500] self-end'>
                See All
              </button>
            </a>
          </div>
          <div className='w-full h-[200px] bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-500'>
              Deals slider goes here, dynamic, apparently random
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DealsSection
