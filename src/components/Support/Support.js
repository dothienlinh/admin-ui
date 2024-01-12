import { Link } from 'react-router-dom'

function Support() {
  return (
    <section className="mt-[-205px]">
      <div className="container mx-auto px-3">
        <div className="bg-support bg-cover bg-no-repeat bg-top pt-[90px] px-[50px] pb-[38px] text-white rounded-[10px] lg:grid lg:grid-cols-2 xl:px-[115px]">
          <div className="px-3 mb-[30px]">
            <h2 className="text-[40px] leading-[1.4] mb-3 font-extrabold">
              Issues and support for clients
            </h2>
            <p className="font-poppins leading-[1.9]">
              For AdminLTE support, please visit our Github repository and post
              your issue, suggestion, or contribution.
            </p>
          </div>
          <div className="px-3">
            <p className="leading-[2.15] text-sm font-poppins mb-[30px]">
              We try our best to provide support to the users of AdminLTE.
              Thanks to many of our users, AdminLTE has a great community
              support. We will try to respond to your issue as soon as possible.
              For a faster response, please include as much information about
              your issue as possible.
            </p>
            <Link
              to={''}
              className="inline-block pt-[18px] pb-4 px-[66px] font-poppins border rounded-full"
            >
              Contact Us via Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
