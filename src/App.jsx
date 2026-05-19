import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {

  const [prediction, setPrediction] = useState(null);
  const [risk, setRisk] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // ================= FORM DATA =================

  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol: "",
    gluc: "",
    smoke: "",
    alco: "",
    active: "",
  });

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= FIRST MODEL =================

  const handlePrediction = () => {

    console.log(formData);

    // Replace with Flask API

    setPrediction("YES");
    setRisk(null);
  };

  // ================= SECOND MODEL =================

  const handleRiskAnalysis = () => {

    setRisk("82%");
  };

  return (

    <div className="min-h-screen bg-[#f4f8ff] overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0B2E6D] text-white sticky top-0 z-50 shadow-xl"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">

          {/* Logo */}

          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            CardioSense AI
          </h1>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10 text-lg">

            <a href="#home" className="hover:text-cyan-300 transition">
              Home
            </a>

            <a href="#prediction" className="hover:text-cyan-300 transition">
              Prediction
            </a>

            <a href="#contact" className="hover:text-cyan-300 transition">
              Contact
            </a>

          </div>

          {/* Mobile Menu */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

        {/* Mobile Dropdown */}

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white text-[#0B2E6D] px-6 py-5 shadow-xl"
          >

            <div className="flex flex-col gap-5 text-lg font-semibold">

              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#prediction" onClick={() => setMenuOpen(false)}>
                Prediction
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

            </div>

          </motion.div>

        )}

      </motion.nav>

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative bg-gradient-to-r from-[#0B2E6D] via-[#18428c] to-[#2563eb] overflow-hidden"
      >

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute top-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-300/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-red-500/10 rounded-full blur-3xl"></div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-center lg:text-left"
          >

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8 backdrop-blur-md">

              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

              <span className="text-sm tracking-wide">
                AI Healthcare Platform
              </span>

            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight break-words">

              Heart Disease

              <span className="block text-cyan-300 mt-2">
                Prediction System
              </span>

            </h1>

            <p className="mt-8 text-blue-100 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">

              Advanced cardiovascular disease prediction platform powered by
              Artificial Intelligence and Machine Learning healthcare analytics.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

              <a href="#prediction">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#0B2E6D] px-8 py-4 rounded-2xl font-semibold shadow-2xl"
                >
                  Start Prediction
                </motion.button>

              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-white/30 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md"
              >
                Learn More
              </motion.button>

            </div>

          </motion.div>

          {/* RIGHT HEART SECTION */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] shadow-2xl p-5 md:p-8 w-full max-w-[500px] h-auto md:h-[500px] overflow-hidden flex flex-col justify-center items-center">

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-cyan-400/10"></div>

              {/* Heart Area */}

              <div className="relative flex justify-center items-center h-[320px] md:h-[420px]">

                {/* Outer Ring */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border border-cyan-300/20 rounded-full"
                />

                {/* Inner Ring */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] border border-red-300/20 rounded-full"
                />

                {/* Pulse Circle */}

                <div className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px] bg-red-500/20 rounded-full animate-ping"></div>

                {/* Heart */}

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >

                  <img
                    src="/heart.png"
                    alt="Human Heart"
                    className="w-[150px] sm:w-[180px] md:w-[240px] object-contain drop-shadow-[0_0_35px_rgba(255,0,0,0.7)]"
                  />

                </motion.div>

              </div>

              {/* Text */}

              <div className="relative z-10 text-center mt-2 px-2">

                <h2 className="text-2xl md:text-4xl font-bold text-white break-words">
                  AI Health Scan
                </h2>

                <p className="mt-5 text-blue-100 leading-relaxed text-sm md:text-base">
                  Smart cardiovascular disease analysis powered by advanced
                  Machine Learning and AI prediction systems.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= FORM SECTION ================= */}

      <section
        id="prediction"
        className="py-20 px-4 sm:px-6"
      >

        <div className="max-w-7xl mx-auto bg-white rounded-[35px] shadow-2xl border border-gray-100 p-6 md:p-14">

          {/* Heading */}

          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-5xl font-bold text-[#0B2E6D]">
              Patient Health Information
            </h2>

            <p className="mt-5 text-gray-500 text-base md:text-lg">
              Enter patient medical details for AI-based prediction analysis.
            </p>

          </div>

          {/* FORM GRID */}

          <div className="grid md:grid-cols-2 gap-7">

            <input
              type="number"
              name="age"
              placeholder="Age (Days)"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Gender */}

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.gender === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Gender
              </option>

              <option value="1">Male</option>
              <option value="0">Female</option>

            </select>

            <input
              type="number"
              name="ap_hi"
              placeholder="Systolic Blood Pressure"
              value={formData.ap_hi}
              onChange={handleChange}
              className="w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="ap_lo"
              placeholder="Diastolic Blood Pressure"
              value={formData.ap_lo}
              onChange={handleChange}
              className="w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cholesterol */}

            <select
              name="cholesterol"
              value={formData.cholesterol}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.cholesterol === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Cholesterol Level
              </option>

              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>

            </select>

            {/* Glucose */}

            <select
              name="gluc"
              value={formData.gluc}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.gluc === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Glucose Level
              </option>

              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>

            </select>

            {/* Smoking */}

            <select
              name="smoke"
              value={formData.smoke}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.smoke === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Smoking Habit
              </option>

              <option value="1">Yes</option>
              <option value="0">No</option>

            </select>

            {/* Alcohol */}

            <select
              name="alco"
              value={formData.alco}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.alco === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Alcohol Intake
              </option>

              <option value="1">Yes</option>
              <option value="0">No</option>

            </select>

            {/* Physical Activity */}

            <select
              name="active"
              value={formData.active}
              onChange={handleChange}
              className={`w-full p-5 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
                formData.active === "" ? "text-gray-400" : "text-black"
              }`}
            >

              <option value="" disabled>
                Select Physical Activity
              </option>

              <option value="1">Active</option>
              <option value="0">Inactive</option>

            </select>

          </div>

          {/* BUTTON */}

          <div className="text-center mt-14">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrediction}
              className="bg-gradient-to-r from-[#0B2E6D] to-[#2563eb] text-white px-8 md:px-12 py-5 rounded-2xl text-lg md:text-xl font-semibold shadow-2xl"
            >
              Predict Heart Disease
            </motion.button>

          </div>

        </div>

      </section>

      {/* ================= RESULT SECTION ================= */}

      {prediction && (

        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-24 px-4 sm:px-6"
        >

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1C4E9E] to-[#0B2E6D] text-white rounded-[35px] shadow-2xl p-6 md:p-12">

            <div className="text-center">

              <h2 className="text-3xl md:text-5xl font-bold">
                Prediction Result
              </h2>

            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl text-center">

              <h3 className="text-2xl md:text-3xl font-semibold">
                Heart Disease Prediction
              </h3>

              <p className={`text-5xl md:text-7xl font-bold mt-8 ${
                prediction === "YES"
                  ? "text-red-300"
                  : "text-green-300"
              }`}>
                {prediction}
              </p>

              <p className="mt-6 text-blue-100 text-base md:text-lg">
                AI model successfully analyzed patient medical data.
              </p>

              {prediction === "YES" && (

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRiskAnalysis}
                  className="mt-10 bg-red-500 hover:bg-red-600 transition px-6 md:px-10 py-4 rounded-2xl text-lg md:text-xl font-semibold shadow-2xl"
                >
                  Run Risk Analysis Model
                </motion.button>

              )}

            </div>

            {/* Risk Result */}

            {risk && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl text-center"
              >

                <h3 className="text-2xl md:text-3xl font-semibold">
                  Heart Attack Risk
                </h3>

                <p className="text-5xl md:text-7xl font-bold mt-8 text-red-300">
                  {risk}
                </p>

                <div className="w-full bg-white/20 h-5 rounded-full mt-10 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: risk }}
                    transition={{ duration: 2 }}
                    className="h-5 bg-red-400 rounded-full"
                  ></motion.div>

                </div>

                <p className="mt-8 text-blue-100 text-base md:text-lg leading-relaxed">
                  Elevated cardiovascular risk detected. Further clinical
                  evaluation is recommended.
                </p>

              </motion.div>

            )}

          </div>

        </motion.section>

      )}

      {/* ================= FOOTER ================= */}

      <footer
        id="contact"
        className="bg-[#0B2E6D] text-white py-12 text-center px-4"
      >

        <h2 className="text-2xl md:text-3xl font-bold">
          CardioSense AI
        </h2>

        <p className="mt-4 text-blue-200 text-base md:text-lg">
          AI-Based Heart Disease Prediction Platform
        </p>

      </footer>

    </div>

  );
}

export default App;