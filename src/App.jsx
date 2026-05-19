import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {

  const [prediction, setPrediction] = useState(null);
  const [risk, setRisk] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // First AI Model

  const handlePrediction = () => {

    // Replace with Flask API later

    setPrediction("YES");
    setRisk(null);
  };

  // Second .h5 Model

  const handleRiskAnalysis = () => {

    // Replace with second ML model later

    setRisk("82%");
  };

  return (
    <div className="min-h-screen bg-[#f4f8ff] overflow-hidden">

      {/* Navbar */}

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0B2E6D] text-white p-5 shadow-lg sticky top-0 z-50"
      >

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}

          <h1 className="text-3xl font-bold tracking-wide">
            CardioSense AI
          </h1>

          {/* Desktop Menu */}

          <div className="space-x-8 hidden md:flex text-lg">

            <a href="#" className="hover:text-blue-200 transition">
              Home
            </a>

            <a href="#" className="hover:text-blue-200 transition">
              Prediction
            </a>

            <a href="#" className="hover:text-blue-200 transition">
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <X size={32} /> : <Menu size={32} />}

          </button>

        </div>

        {/* Mobile Dropdown */}

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-5 bg-white text-[#0B2E6D] rounded-2xl p-5 shadow-xl"
          >

            <div className="flex flex-col space-y-5 text-lg font-semibold">

              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#" onClick={() => setMenuOpen(false)}>
                Prediction
              </a>

              <a href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

            </div>

          </motion.div>

        )}

      </motion.nav>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#0B2E6D] via-[#1C4E9E] to-[#2563eb] text-white py-24 relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute inset-0 opacity-10">

          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>

        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* Left Side */}

          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              AI Healthcare Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Heart Disease
              <span className="block text-cyan-300">
                Prediction System
              </span>
            </h1>

            <p className="mt-8 text-blue-100 text-lg leading-relaxed">
              Advanced AI-powered cardiovascular disease prediction platform
              using Machine Learning and healthcare analytics.
            </p>

          </motion.div>

          {/* REAL HUMAN HEART SECTION */}

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="flex justify-center"
          >

            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-[35px] shadow-2xl border border-white/20 text-center w-full max-w-md overflow-hidden">

              {/* Background Glow */}

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-cyan-400/10"></div>

              {/* Floating Red Glow */}

              <div className="absolute w-72 h-72 bg-red-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

              <div className="absolute w-60 h-60 bg-cyan-300/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>

              {/* Heart Animation Area */}

              <div className="relative flex justify-center items-center h-72">

                {/* Rotating Outer Ring */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-64 h-64 border border-red-300/30 rounded-full"
                />

                {/* Rotating Second Ring */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-52 h-52 border border-cyan-300/20 rounded-full"
                />

                {/* Pulse Circle */}

                <div className="absolute w-44 h-44 bg-red-500/20 rounded-full animate-ping"></div>

                {/* Real Human Heart */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >

                  <img
                    src="/heart.png"
                    alt="Real Human Heart"
                    className="w-52 h-52 object-contain drop-shadow-[0_0_35px_rgba(255,0,0,0.6)]"
                  />

                </motion.div>

                {/* ECG Line */}

                <motion.div
                  initial={{ x: -150 }}
                  animate={{ x: 150 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                  }}
                  className="absolute bottom-5"
                >

                  <svg
                    width="250"
                    height="60"
                    viewBox="0 0 250 60"
                    fill="none"
                  >

                    <path
                      d="M0 30 H45 L60 15 L80 45 L100 10 L120 30 H250"
                      stroke="#7dd3fc"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />

                  </svg>

                </motion.div>

              </div>

              {/* Text */}

              <h2 className="text-4xl font-bold mt-4 relative z-10">
                AI Health Scan
              </h2>

              <p className="mt-5 text-blue-100 leading-relaxed relative z-10">
                Smart cardiovascular disease analysis powered by advanced
                Machine Learning and AI prediction systems.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Form Section */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto bg-white p-10 md:p-14 rounded-[35px] shadow-2xl border border-gray-100">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold text-[#0B2E6D]">
              Patient Health Information
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Enter patient medical details for AI-based prediction analysis.
            </p>

          </div>

          {/* Form Grid */}

          <div className="grid md:grid-cols-2 gap-7">

            <input
              type="number"
              placeholder="Age (Days)"
              className="p-5 border border-gray-300 rounded-2xl"
            />

            <input
              type="number"
              placeholder="Height (cm)"
              className="p-5 border border-gray-300 rounded-2xl"
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              className="p-5 border border-gray-300 rounded-2xl"
            />

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Select Gender
              </option>

              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>

            <input
              type="number"
              placeholder="Systolic Blood Pressure"
              className="p-5 border border-gray-300 rounded-2xl"
            />

            <input
              type="number"
              placeholder="Diastolic Blood Pressure"
              className="p-5 border border-gray-300 rounded-2xl"
            />

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Select Cholesterol Level
              </option>

              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Select Glucose Level
              </option>

              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Smoking Habit
              </option>

              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Alcohol Intake
              </option>

              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Physical Activity
              </option>

              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>

          </div>

          {/* Predict Button */}

          <div className="text-center mt-14">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrediction}
              className="bg-gradient-to-r from-[#0B2E6D] to-[#2563eb] text-white px-12 py-5 rounded-2xl text-xl font-semibold shadow-2xl"
            >
              Predict Heart Disease
            </motion.button>

          </div>

        </div>

      </section>

      {/* Result Section */}

      {prediction && (

        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-24 px-6"
        >

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1C4E9E] to-[#0B2E6D] text-white p-12 rounded-[35px] shadow-2xl">

            <div className="text-center">

              <h2 className="text-5xl font-bold">
                Prediction Result
              </h2>

            </div>

            <div className="mt-12 bg-white/10 p-10 rounded-3xl text-center">

              <h3 className="text-3xl font-semibold">
                Heart Disease Prediction
              </h3>

              <p className={`text-7xl font-bold mt-8 ${
                prediction === "YES"
                  ? "text-red-300"
                  : "text-green-300"
              }`}>
                {prediction}
              </p>

              <p className="mt-6 text-blue-100 text-lg">
                AI model successfully analyzed patient medical data.
              </p>

              {/* Second Model Button */}

              {prediction === "YES" && (

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRiskAnalysis}
                  className="mt-10 bg-red-500 hover:bg-red-600 transition text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-2xl"
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
                className="mt-12 bg-white/10 p-10 rounded-3xl text-center"
              >

                <h3 className="text-3xl font-semibold">
                  Heart Attack Risk
                </h3>

                <p className="text-7xl font-bold mt-8 text-red-300">
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

                <p className="mt-8 text-blue-100 text-lg leading-relaxed">
                  Elevated cardiovascular risk detected. Further clinical
                  evaluation is recommended.
                </p>

              </motion.div>

            )}

          </div>

        </motion.section>

      )}

      {/* Footer */}

      <footer className="bg-[#0B2E6D] text-white py-12 text-center">

        <h2 className="text-3xl font-bold">
          CardioSense AI
        </h2>

        <p className="mt-4 text-blue-200 text-lg">
          AI-Based Heart Disease Prediction Platform
        </p>

      </footer>

    </div>
  );
}

export default App;