import React from 'react'

function App() {
  return (
    <div
      className="min-h-screen text-[#f4f1ea] font-mono flex flex-col"
      style={{
        backgroundImage: "url('/rust-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="relative border-b border-[#c28e0e] bg-black/40 h-48">
        {/* Navigation (left) */}
        <nav className="absolute left-6 top-1/2 -translate-y-1/2 space-x-4 text-sm">
          <a href="#home" className="hover:text-[#ffd100]">Home</a>
          <a href="#automation" className="hover:text-[#ffd100]">What Is Automation?</a>
          <a href="#examples" className="hover:text-[#ffd100]">What Can I Automate?</a>
          <a href="#about-me" className="hover:text-[#ffd100]">About Me</a>
          <a href="#contact" className="hover:text-[#ffd100]">Contact Me</a>
        </nav>

        {/* Center Title */}
        <h1
          className="absolute text-3xl font-bold text-[#ffd100] text-center 
                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Vi-Art Solutions Agency
        </h1>

        {/* Big Crow (right) */}
        <img
          src="/raven-icon.png"
          alt="Mechanical Crow"
          className="absolute right-6 top-1/2 -translate-y-1/2 w-48 h-48"
        />
      </header>

      {/* Main content with overlay */}
      <main className="flex-grow bg-black/40">
        {/* Home Section */}
        <section id="home" className="p-8 text-center border-b border-[#c28e0e]">
          <h2 className="text-3xl font-bold text-[#ffd100] mb-4">
            We automate repetitive tasks so you can gain what matters most: your time.
          </h2>
          <p className="text-lg text-[#c7c7c7]">
            I help small businesses become more efficient through automation.
          </p>
        </section>

        {/* What Is Automation Section */}
        <section id="automation" className="p-8 text-center border-b border-[#c28e0e]">
          <h3 className="text-2xl font-semibold mb-4">What Is Automation?</h3>
          <p className="max-w-2xl mx-auto text-lg text-[#c7c7c7]">
            Automation is about using technology to handle repetitive tasks or processes 
            automatically, giving you more freedom to focus on what truly matters. 
            It streamlines your workflow and saves valuable time.
          </p>
        </section>

        {/* What Can I Automate Section */}
        <section id="examples" className="p-8 text-center border-b border-[#c28e0e]">
          <h3 className="text-2xl font-semibold mb-6">What Can I Automate?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Automatic booking confirmations",
              "Appointment reminders",
              "Sales agents for WhatsApp and Telegram",
              "Automated report sending",
              "Data collection from forms",
              "And much more..."
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#c28e0e] bg-[#3a3a3a] p-4 rounded-lg text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="p-8 text-center border-b border-[#c28e0e]">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="max-w-xl mx-auto text-lg text-[#c7c7c7]">
            I'm <strong>Varo</strong>, the creator of Vi-Art Solutions Agency. 
            I started this project to help people and businesses become more efficient 
            in repetitive processes, saving precious time — the only resource we can’t get back. 
            I want technology to serve you, <strong>not complicate you</strong>.
          </p>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="p-8 text-center border-b border-[#c28e0e]">
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-4 text-lg text-[#c7c7c7]">Send me a message to learn more.</p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded border border-[#c28e0e] bg-[#2f2f2f] text-white text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded border border-[#c28e0e] bg-[#2f2f2f] text-white text-lg"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 rounded border border-[#c28e0e] bg-[#2f2f2f] text-white text-lg"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#ffd100] text-black font-bold rounded hover:bg-[#c28e0e] hover:text-white text-lg"
            >
              Send
            </button>
          </form>
          <div className="text-center mt-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="text-[#00ffcc] underline hover:text-[#c28e0e] text-lg"
            >
              Or message me on WhatsApp
            </a>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="p-8 text-center text-lg text-[#c7c7c7]">
          <h4 className="text-xl font-bold text-[#ffd100]">Coming Soon</h4>
          <p className="max-w-lg mx-auto mt-2">
            Real cases of automation in business.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-[#c28e0e] flex items-center justify-center text-sm bg-black/40">
        <span>© 2025 Vi-Art Solutions Agency</span>
      </footer>
    </div>
  )
}

export default App
