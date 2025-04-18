import Link from 'next/link';
import Image from 'next/image';
import homePage from './images/homePage.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-blue-700 to-indigo-900 text-white relative overflow-hidden">
        {/* Large background image positioned behind everything */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden opacity-30 lg:opacity-50">
          <div className="absolute right-[-25%] top-[-5%] w-[110%] h-[110%]">
            <Image 
              src={homePage}
              alt="Background"
              width={1200}
              height={800}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Content with gradient overlay for visual separation */}
          <div className="lg:w-2/3 md:w-4/5 w-full z-10 mx-auto lg:mx-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-800/90 to-indigo-900/60 rounded-3xl blur-md"></div>
            <div className="relative bg-gradient-to-r from-blue-600/80 to-indigo-800/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border-l border-t border-white/10 shadow-2xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  The Future of Insurance Communication
                </h1>
                <p className="text-xl opacity-90">
                  Voley is a unified text messaging platform built specifically for insurance brokers to 
                  connect with clients while seamlessly integrating with your existing CRM/AMS systems.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all"
                  >
                    Request Demo
                  </Link>
                  <Link 
                    href="/features" 
                    className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Voley?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for insurance professionals to improve client communication and productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Integrations",
                description: "Seamlessly connects with AgencyZoom, Hawksoft, and other industry-standard CRM/AMS systems.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                )
              },
              {
                title: "SMS Messaging",
                description: "Send and receive text messages through your Twilio number, keeping client conversations organized.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                )
              },
              {
                title: "Contact Management",
                description: "Sync contacts from AgencyZoom and Hawksoft, or create and organize them manually with custom folders.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                )
              },
              {
                title: "Group Messaging",
                description: "Create internal team conversations or client groups for more efficient communication.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                )
              },
              {
                title: "Response Templates",
                description: "Save time with pre-written message templates for common scenarios and questions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )
              },
              {
                title: "Conversation Tracking",
                description: "View full conversation history with threaded messages for better context and follow-up.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Join insurance professionals who trust Voley for client communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Voley has transformed how our agency communicates with clients. The integration with our AMS is seamless, and our response times have improved dramatically.",
                name: "Sarah J.",
                role: "Agency Principal"
              },
              {
                quote: "As someone managing multiple accounts, the ability to organize contacts into custom folders and use message templates has been a game changer for my productivity.",
                name: "Michael T.",
                role: "Insurance Agent"
              },
              {
                quote: "The Twilio integration works flawlessly, and our clients love being able to text us directly. It's so much more efficient than phone tag or emails.",
                name: "Jessica L.",
                role: "Client Services Manager"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-indigo-500">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 flex-grow mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Integration Partners</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with the tools you already use
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 my-8">
            <div className="flex flex-col items-center">
              <div className="w-40 h-32 flex items-center justify-center rounded-lg mb-2">
                <Image 
                  src="/partners/agencyZoomLogo.jpeg"
                  alt="AgencyZoom Logo" 
                  width={120}
                  height={120}
                  className="h-auto"
                />
              </div>
              <span className="text-sm text-gray-600">Agency Zoom</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-40 h-32 flex items-center justify-center rounded-lg mb-2">
                <Image 
                  src="/partners/hawksoftLogo.jpeg"
                  alt="Hawksoft Logo" 
                  width={120}
                  height={120}
                  className="h-auto"
                />
              </div>
              <span className="text-sm text-gray-600">Hawksoft</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your client communications?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join insurance agencies that have streamlined their messaging workflow with Voley.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-all"
            >
              Get Started
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
