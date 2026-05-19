import { motion } from "framer-motion";
import { useState } from "react";

function App() {

  // First Model Result
  const [prediction, setPrediction] = useState(null);

  // Second Model Result
  const [risk, setRisk] = useState(null);

  // Run First Prediction
  const handlePrediction = () => {

    // Dummy logic for frontend demo
    // Later connect Flask API

    setPrediction("YES");
    setRisk(null);
  };

  // Run Second .h5 Model
  const handleRiskAnalysis = () => {

    // Dummy percentage
    // Later connect second ML model

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

          <h1 className="text-3xl font-bold tracking-wide">
            CardioSense AI
          </h1>

          <div className="space-x-8 hidden md:flex text-lg">
            <a href="#">Home</a>
            <a href="#">Prediction</a>
            <a href="#">Contact</a>
          </div>

        </div>
      </motion.nav>

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#0B2E6D] via-[#1C4E9E] to-[#2563eb] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

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
              Advanced AI-powered cardiovascular disease prediction platform.
            </p>

          </motion.div>

          {/* Right Card */}

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="flex justify-center"
          >

            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[35px] shadow-2xl border border-white/20 text-center w-full max-w-md">

              <div className="relative flex justify-center items-center h-52">

                {/* Rotating Ring */}

                <div className="absolute w-44 h-44 border-4 border-red-300 rounded-full animate-spin opacity-30"></div>

                {/* Pulse */}

                <div className="absolute w-40 h-40 bg-red-400 rounded-full opacity-20 animate-ping"></div>

                {/* Human Heart */}

                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse z-10">

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
                    alt="Human Heart"
                    className="w-24 h-24 object-contain"
                  />

                </div>

              </div>

              <h2 className="text-4xl font-bold mt-8">
                AI Health Scan
              </h2>

              <p className="mt-5 text-blue-100 leading-relaxed">
                Smart cardiovascular disease analysis powered by Machine Learning.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Form */}

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

              <option value="1">
                Male
              </option>

              <option value="0">
                Female
              </option>
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

              <option value="1">
                Normal
              </option>

              <option value="2">
                Above Normal
              </option>

              <option value="3">
                Well Above Normal
              </option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Select Glucose Level
              </option>

              <option value="1">
                Normal
              </option>

              <option value="2">
                Above Normal
              </option>

              <option value="3">
                Well Above Normal
              </option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Smoking Habit
              </option>

              <option value="1">
                Yes
              </option>

              <option value="0">
                No
              </option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Alcohol Intake
              </option>

              <option value="1">
                Yes
              </option>

              <option value="0">
                No
              </option>
            </select>

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl text-gray-700"
            >
              <option value="" disabled hidden>
                Physical Activity
              </option>

              <option value="1">
                Active
              </option>

              <option value="0">
                Inactive
              </option>
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

              {/* Show Button ONLY if YES */}

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

            {/* Second Model Output */}

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

                {/* Progress */}

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