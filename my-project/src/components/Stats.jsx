/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-black pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#B98221] sm:text-4xl">
              Our Global community
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-black sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-black" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-black shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-[#B98221]">Enrolled Students</dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#B98221]">5000+</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-[#B98221]">Support</dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#B98221]">24/7</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-[#B98221]">Revenue in 6 months</dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#B98221]">$100k</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }