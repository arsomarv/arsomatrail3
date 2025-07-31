"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  DollarSign,
  Clock,
  Search,
  Play,
  CheckCircle,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function WebsitePreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">Noble Arsoma</h1>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#how-it-works" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  How It Works
                </a>
                <a href="#candidates" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Candidates
                </a>
                <a href="#about" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#contact" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black hover:text-gray-600 p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-600">
                Home
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-600">
                How It Works
              </a>
              <a href="#candidates" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-600">
                Candidates
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-600">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Hire Trusted
            <br />
            <span className="text-gray-600">Ethiopian Housemaids</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting Gulf employers with qualified, experienced Ethiopian housemaids for domestic services.
          </p>
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Browse Housemaids
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple three-step process makes finding the right housemaid effortless
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Browse Profiles",
                description:
                  "Explore detailed housemaid profiles with complete experience and qualifications in domestic services.",
              },
              {
                icon: Play,
                title: "Watch Introductions",
                description: "View personal video introductions to get to know our housemaids and their personalities.",
              },
              {
                icon: CheckCircle,
                title: "Select & Hire",
                description: "Choose the perfect housemaid for your family and complete the hiring process easily.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section id="candidates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Housemaids</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our qualified housemaids ready to serve families in Gulf countries
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Sample Candidate Cards */}
            {[
              {
                name: "Almaz Tadesse",
                age: 28,
                experience: "5 years",
                availability: "Available immediately",
                salary: "$400-500/month",
                education: [
                  "High School Diploma - Addis Ababa Secondary School (2015)",
                  "Certificate in Housekeeping - Ethiopian Technical Institute (2016)",
                ],
                workExperience: [
                  "Housemaid - Private Family, Riyadh (2019-2024)",
                  "Housekeeper - Luxury Villa, Dubai (2017-2019)",
                  "Domestic Helper - Family Home, Addis Ababa (2016-2017)",
                ],
                skills: [
                  "Childcare and elderly care",
                  "Cooking traditional cuisine",
                  "Deep cleaning",
                  "Laundry and ironing",
                  "Time management",
                ],
                languages: ["Amharic", "English (Basic)", "Arabic (Basic)"],
              },
              {
                name: "Hanan Mohammed",
                age: 26,
                experience: "4 years",
                availability: "Available in 2 weeks",
                salary: "$450-550/month",
                education: [
                  "High School Diploma - Jimma Secondary School (2016)",
                  "Certificate in Domestic Services - Ethiopian Training Center (2017)",
                ],
                workExperience: [
                  "Housemaid - Embassy Residence, Addis Ababa (2020-2024)",
                  "Domestic Helper - Hotel Housekeeping (2018-2020)",
                  "Childcare Assistant - Private Family (2017-2018)",
                ],
                skills: [
                  "Expert in childcare",
                  "International cuisine",
                  "Professional cleaning",
                  "Pet care",
                  "Basic first aid",
                ],
                languages: ["Amharic", "English (Fluent)", "Arabic (Intermediate)"],
              },
              {
                name: "Meron Getachew",
                age: 24,
                experience: "3 years",
                availability: "Available immediately",
                salary: "$350-450/month",
                education: [
                  "High School Diploma - Bahir Dar Secondary School (2017)",
                  "Certificate in Home Management - Ethiopian Institute (2018)",
                ],
                workExperience: [
                  "Housemaid - Private Villa, Addis Ababa (2021-2024)",
                  "Domestic Helper - Apartment Complex (2019-2021)",
                  "Cleaning Staff - Office Building (2018-2019)",
                ],
                skills: [
                  "Elderly care specialist",
                  "Traditional Ethiopian cooking",
                  "Organizing and decluttering",
                  "Garden maintenance",
                  "Quick learner",
                ],
                languages: ["Amharic", "English (Intermediate)", "Arabic (Basic)"],
              },
            ].map((candidate, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Header with Photo */}
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=256&width=400"
                    alt={candidate.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{candidate.name}</h3>
                    <p className="text-gray-200">Professional Housemaid</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{candidate.age} years old</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{candidate.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{candidate.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{candidate.salary}</span>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </h4>
                    <ul className="space-y-2">
                      {candidate.education.map((edu, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Work Experience */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Work Experience
                    </h4>
                    <ul className="space-y-2">
                      {candidate.workExperience.map((exp, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                      View Profile
                    </button>
                    <button className="flex-1 border border-black text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-colors duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Noble Arsoma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a trusted recruitment agency specializing in connecting Gulf employers with qualified Ethiopian housemaids.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Why Choose Ethiopian Housemaids?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Cultural Compatibility",
                    description: "Ethiopian housemaids are known for their strong work ethic, respect for family values, and cultural compatibility with Gulf families.",
                  },
                  {
                    title: "Professional Training",
                    description: "All our housemaids undergo comprehensive training in domestic services, childcare, and cultural adaptation.",
                  },
                  {
                    title: "Verified Backgrounds",
                    description: "We conduct thorough background checks, medical examinations, and reference verifications for all candidates.",
                  },
                  {
                    title: "Ongoing Support",
                    description: "We provide continuous support throughout the hiring process and during employment to ensure satisfaction.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Company Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to find the perfect housemaid for your family? Get in touch with us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Email</h4>
                    <p className="text-gray-600">info@noblearsoma.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Service Areas</h4>
                    <p className="text-gray-600">Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+966 50 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Noble Arsoma</h3>
              <p className="text-gray-300 leading-relaxed">
                Connecting Gulf employers with qualified, experienced Ethiopian housemaids for domestic services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Housemaid Recruitment</li>
                <li>Background Verification</li>
                <li>Training & Certification</li>
                <li>Ongoing Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#candidates" className="hover:text-white transition-colors">Candidates</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@noblearsoma.com</li>
                <li>+966 50 123 4567</li>
                <li>Riyadh, Saudi Arabia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Noble Arsoma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 