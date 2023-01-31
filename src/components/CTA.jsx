
import { CheckIcon } from '@heroicons/react/outline'

const tiers = [
  {
    name: 'Introduction to DeFI',
    href: '#',
    discount: '100',
    priceMonthly: 70,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
  {
    name: 'Getting DeFI Jobs',
    href: '#',
    discount: '50',
    priceMonthly: 30,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
]



export default function Example() {
  return (
    <div className="bg-black" id='Courses'>
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-[#B98221] uppercase tracking-wider">Our Courses</h2>
            <p className="text-3xl font-extrabold text-[#B98221] sm:text-4xl lg:text-5xl">
              The right price for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-black sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-black" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#B98221] text-black"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-[#B98221] text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <s className="ml-1 text-2xl font-bold text-[#B98221] text-xl">${tier.discount}</s>
                    </div>
                    <p className="mt-5 text-lg text-white">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-900 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-[#B98221]" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-white">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#B98221] hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-black px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#B98221] text-black">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-[#B98221]">
                  Get full access to all of standard license features for solo projects that make less than $20k gross
                  revenue for <span className="font-semibold text-[#B98221]">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#B98221] hover:bg-gray-50"
                >
                  Buy Discounted License
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}