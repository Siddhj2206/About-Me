export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-4">
        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the
        following channels:
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p>
            <a href="mailto:siddhj2206@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              siddhj2206@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">LinkedIn</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/siddhj2206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/siddhj2206
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">GitHub</h2>
          <p>
            <a
              href="https://github.com/siddhj2206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/siddhj2206
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Twitter</h2>
          <p>
            <a
              href="https://twitter.com/siddhant_jain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              @siddhant_jain
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Send me a message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

