function About() {
  return (
    <div className="min-h-screen bg-[#05080d] text-white px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE0] to-[#00B2FF] drop-shadow-[0_0_25px_#00F7FF]">
          About FreshKeep
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          The smart, neon-powered pantry assistant that helps you track items,
          avoid food waste, and stay effortlessly organized.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section 1 */}
        <div className="bg-[#0c1116] p-12 rounded-3xl border border-[#00FFE0]/20 shadow-[0_0_40px_#00F7FF15] backdrop-blur-xl text-center">
          <p className="text-gray-300 text-lg md:text-xl leading-loose max-w-4xl mx-auto">
            <span className="text-[#00FFE0] font-semibold">FreshKeep</span>{" "}
            helps you track groceries, monitor expiration dates, and get
            notified before items go bad — all through a beautiful futuristic
            interface.
          </p>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-loose">
            From everyday essentials to bulk storage, FreshKeep keeps your
            kitchen organized, reduces waste, and saves your time and money.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#0a0f14] p-10 rounded-3xl border border-[#00FFE0]/10 hover:border-[#00FFE0]/40 hover:shadow-[0_0_30px_#00FFE040] transition-all backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-[#00FFE0] mb-4">
              🔍 Track Everything
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Add and manage pantry items with ease. Keep complete control over
              what you store and what’s expiring soon.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0f14] p-10 rounded-3xl border border-[#00FFE0]/10 hover:border-[#00FFE0]/40 hover:shadow-[0_0_30px_#00FFE040] transition-all backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-[#00FFE0] mb-4">
              ⏳ Expiry Alerts
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              FreshKeep highlights items nearing expiration with neon signals —
              helping you consume items on time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a0f14] p-10 rounded-3xl border border-[#00FFE0]/10 hover:border-[#00FFE0]/40 hover:shadow-[0_0_30px_#00FFE040] transition-all backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-[#00FFE0] mb-4">
              🌿 Reduce Waste
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Stay eco-friendly and save money by reducing unnecessary spoilage
              through smart reminders.
            </p>
          </div>
        </div>

        {/* Final Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            FreshKeep transforms pantry management into a simple, enjoyable, and
            futuristic experience — built for modern homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
