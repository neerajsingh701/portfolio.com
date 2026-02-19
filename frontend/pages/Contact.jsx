
import api from '../src/api/axios.js'
import { useState } from 'react'
import { toast } from 'react-toastify'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // loading setup
  const [loading, setLoading] = useState(false);

  // when the user is type it and change the data with this function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)

      const { data } = await api.post("/contact",
        formData
      );

      toast.success(data.message || "Message Sent Successfully 🔥")

      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong ❌")


    }
    finally {
      setLoading(false);
    }



  }


  return (
    <div className="min-h-screen bg-[#130b3a] px-6 py-16">


      {/* first the heading side */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Contact Me
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Feel free to reach out for collaborations, projects, or just a friendly hello 👋
        </p>
      </div>


      {/* contact section */}
      <div className="max-w-6xl mx-auto md:grid-cols-2 gap-10">

        {/* left */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in touch
          </h2>

          <p className="text-gray-600">
            📧 Email: royneeraj521@gmail.com
          </p>
          <p className="text-gray-600 mb-4">
            📱 Phone: +91 7013613212
          </p>
          <p className="text-gray-600">
            📍 Location: India
          </p>
        </div>


        {/* right part */}
        <div className="bg-white shadow-md rounded-xl p-8 mt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your name"
              />
            </div>


            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Email
              </label>
              <input type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg transition duration-300"
            >
              {loading ? "Sending" : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact
