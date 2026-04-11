function DealsSection({
  firstItem = false,
  hasHeading = true,
}: {
  firstItem?: boolean
  hasHeading?: boolean
}) {
  return (
    <section className='w-full max-w-[1600px] mx-auto mb-8'>
      <div className='h-full overflow-x-auto'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-[10px] sm:mb-[20px]'>
            <div>
              {hasHeading && (
                <h2 className='text-2xl font-semibold text-left mb-4'>
                  {firstItem ? 'Deals For You' : 'More Deals For You'}
                </h2>
              )}
            </div>
            <a href='/categories'>
              <button className='text-primary-copy hover:opacity-80 underline text-[14px] font-[500] self-end'>
                See All
              </button>
            </a>
          </div>
          <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[7px] sm:gap-[20px] justify-items-left sm:justify-items-center lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              <div className='  xs:max-w-none xs:w-full flex flex-col items-center '>
                <img
                  src='https://storage.googleapis.com/wl-image/381086acd5cada08a7c0ab6db2aff59637137e8f'
                  alt='Merchant Logo'
                  className='object-contain rounded-xl border-2 border-gray-200 cursor-pointer transition-shadow duration-200 ease-in-out group-hover:shadow-md h-[48.73px] xs:h-[127.45px] sm:h-[142.98px] md:h-[123.72px] lg:h-[115px] xl:h-[109.72px] 2xl:h-[92.92px] w-[111.94px] xs:w-[302px] sm:w-[339.44px] md:w-[293px] lg:w-[272px] xl:w-[259.2px] 2xl:w-[218.67px]'
                  style={{
                    backgroundColor: 'rgb(245, 41, 69)',
                  }}
                />
                <div className='flex-1 min-w-0 mt-0 pl-[7px] xs:pl-0 xs:mt-[10px] gap-[10px]'>
                  <div className='text-left mb-1 pt-1.5'>
                    <div className='flex items-start'>
                      <div className='px-3 py-1 rounded-4xl bg-badge-background text-badge-copy max-w-full bg-gray-700 text-white'>
                        <p className='font-[700] text-sm text-badge-wall-sm sm:text-badge-wall-lg leading-[normal] whitespace-nowrap flex items-center gap-1 cursor-pointer truncate'>
                          <span className='flex-shrink-0'>Up to </span>
                          <span className='truncate'>2.2% Cash Back</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pl-3 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='size-[18px] flex-shrink-0'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                      ></path>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 6h.008v.008H6V6Z'
                      ></path>
                    </svg>
                    <p className='text-left text-black text-[14px] sm:text-[16px] line-clamp-1 min-w-0'>
                      $3 Off Coupon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
            <div className='mt-[5px] mb-[5px] sm:mt-[10px] sm:mb-[10px] transition-all duration-200 ease-in-out group hover:scale-[1.03] hover:z-10 flex xs:flex-col'>
              Merchant
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DealsSection
