import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Voley</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The messaging platform that's transforming how insurance brokers communicate with clients
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Voley emerged from the recognition that insurance professionals were struggling with fragmented communication tools that weren't designed for their specific needs.
                </p>
                <p>
                  Our founder, an insurance broker with over 15 years of experience, was frustrated with the lack of integrated messaging solutions that could seamlessly connect with industry-standard CRM and AMS systems.
                </p>
                <p>
                  Voley was built to address these challenges by creating a purpose-built messaging platform that prioritizes workflow integration, compliance, and client relationship management for insurance professionals.
                </p>
                <p>
                  Today, Voley is trusted by independent agencies and brokerage firms across the country to streamline their client communications and improve team collaboration.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/about/meeting.jpeg" 
                  alt="Voley Team Meeting" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              To empower insurance professionals with communication tools that enhance client relationships, 
              streamline workflows, and drive business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplify Communication",
                description: "We're dedicated to making client communication more efficient by centralizing conversations and integrating with the tools you already use.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                )
              },
              {
                title: "Enhance Productivity",
                description: "Our platform is designed to save time through automation, templates, and intelligent contact management for insurance professionals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: "Strengthen Relationships",
                description: "We help insurance brokers build stronger client relationships through responsive, personalized communication.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                )
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented people behind Voley who are passionate about transforming insurance communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Brent Thurman",
                role: "Founder",
                bio: "Insurance broker with 15+ years of experience in the industry",
                image: "/about/brent.png",
                position: "center top"
              },
              {
                name: "Jared Mackay",
                role: "Co-Owner and Technical Lead",
                bio: "Years developing software solutions, specializing in AI and automations",
                image: "/about/jared.JPG",
                position: "center center"
              },
              {
                name: "Jerris Koplin ",
                role: "Head of Sales and Marketing",
                bio: "Insurance professional with a passion for helping agencies grow",
                image: "/about/jerris.JPG",
                position: "center top"
              },
              {
                name: "John McConkie",
                role: "Co-Owner and User Experience Lead",
                bio: "Dedicated to helping insurance agencies maximize their communication potential",
                image: "/about/john.JPG",
                position: "center top"
              }
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300}
                  className="w-full h-64 object-cover"
                  style={{ objectPosition: member.position }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry Expertise</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Voley team brings decades of combined experience in both the insurance industry and software development.
                </p>
                <p>
                  We understand the unique challenges insurance brokers face when it comes to client communication, compliance requirements, and workflow efficiency.
                </p>
                <p>
                  Our platform is built based on real-world feedback from insurance professionals, ensuring that every feature addresses a genuine need in your daily operations.
                </p>
                <p>
                  We continuously collaborate with industry experts to keep Voley aligned with the evolving needs of modern insurance agencies.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3 text-indigo-600 font-bold">15+</div>
                <p className="text-gray-900 font-medium">Years of Insurance Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3 text-indigo-600 font-bold">500+</div>
                <p className="text-gray-900 font-medium">Agency Clients</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3 text-indigo-600 font-bold">3M+</div>
                <p className="text-gray-900 font-medium">Messages Delivered</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3 text-indigo-600 font-bold">99.9%</div>
                <p className="text-gray-900 font-medium">Uptime Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join the growing community of insurance professionals who have transformed their client communications with Voley.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-all"
            >
              Request a Demo
            </Link>
            <Link 
              href="/features" 
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 