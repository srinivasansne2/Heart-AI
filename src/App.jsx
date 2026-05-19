import { motion } from "framer-motion";

function App() {
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
            <a href="#" className="hover:text-blue-200 transition">
              Home
            </a>

            <a href="#" className="hover:text-blue-200 transition">
              Prediction
            </a>

            <a href="#" className="hover:text-blue-200 transition">
              Dataset
            </a>

            <a href="#" className="hover:text-blue-200 transition">
              Contact
            </a>
          </div>

        </div>
      </motion.nav>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#0B2E6D] via-[#1C4E9E] to-[#2563eb] text-white py-24 relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* Left Content */}

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

            <p className="mt-8 text-blue-100 text-lg leading-relaxed max-w-xl">
              Advanced cardiovascular disease prediction using Artificial
              Intelligence and Machine Learning models trained on real-world
              medical datasets.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B2E6D] px-8 py-4 rounded-2xl font-semibold shadow-2xl"
              >
                Start Prediction
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl"
              >
                Learn More
              </motion.button>

            </div>

          </motion.div>

          {/* Animated AI Card */}

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="flex justify-center"
          >

            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[35px] shadow-2xl border border-white/20 text-center w-full max-w-md">

              <div className="relative flex justify-center items-center h-48">

                {/* Outer Pulse */}

                <div className="absolute w-44 h-44 rounded-full bg-red-400 opacity-20 animate-ping"></div>

                {/* Middle Circle */}

                <div className="absolute w-36 h-36 rounded-full bg-red-500 opacity-30"></div>

                {/* Heart */}

                <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse">

                  <span className="text-6xl">
                    ❤️
                  </span>

                </div>

              </div>

              <h2 className="text-4xl font-bold mt-8">
                AI Health Scan
              </h2>

              <p className="mt-5 text-blue-100 leading-relaxed">
                Smart cardiovascular disease analysis with instant prediction
                results powered by Machine Learning.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Form Section */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto bg-white p-10 md:p-14 rounded-[35px] shadow-2xl border border-gray-100">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold text-[#0B2E6D]">
              Patient Health Information
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Enter patient medical details for AI-based cardiovascular
              prediction analysis.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-7">

            {/* Age */}

            <input
              type="number"
              placeholder="Age (Days)"
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Height */}

            <input
              type="number"
              placeholder="Height (cm)"
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Weight */}

            <input
              type="number"
              placeholder="Weight (kg)"
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Gender */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

            {/* Systolic */}

            <input
              type="number"
              placeholder="Systolic Blood Pressure"
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Diastolic */}

            <input
              type="number"
              placeholder="Diastolic Blood Pressure"
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Cholesterol */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

            {/* Glucose */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

            {/* Smoking */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

            {/* Alcohol */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

            {/* Activity */}

            <select
              defaultValue=""
              className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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

          {/* Button */}

          <div className="text-center mt-14">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0B2E6D] to-[#2563eb] text-white px-12 py-5 rounded-2xl text-xl font-semibold shadow-2xl"
            >
              Analyze Health
            </motion.button>

          </div>

        </div>

      </motion.section>

      {/* Result Section */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pb-24 px-6"
      >

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#1C4E9E] to-[#0B2E6D] text-white p-12 rounded-[35px] shadow-2xl">

          <div className="text-center">

            <h2 className="text-5xl font-bold">
              AI Prediction Result
            </h2>

            <p className="mt-5 text-blue-100 text-lg">
              Machine Learning prediction generated from patient medical data.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-14">

            {/* Prediction */}

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl border border-white/10"
            >

              <h3 className="text-2xl font-semibold">
                Heart Disease Prediction
              </h3>

              <p className="text-6xl font-bold text-red-300 mt-8 animate-pulse">
                YES
              </p>

              <p className="mt-6 text-blue-100 leading-relaxed">
                The AI model detected a higher probability of cardiovascular
                disease based on the provided health parameters.
              </p>

            </motion.div>

            {/* Risk */}

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl border border-white/10"
            >

              <h3 className="text-2xl font-semibold">
                Heart Attack Risk
              </h3>

              <p className="text-6xl font-bold mt-8">
                82%
              </p>

              <div className="w-full bg-white/20 h-4 rounded-full mt-8 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "82%" }}
                  transition={{ duration: 2 }}
                  className="h-4 bg-red-400 rounded-full"
                ></motion.div>

              </div>

              <p className="mt-6 text-blue-100 leading-relaxed">
                Elevated cardiovascular risk detected. Further clinical
                evaluation is recommended.
              </p>

            </motion.div>

          </div>

        </div>

      </motion.section>

      {/* Dataset Section */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-white rounded-[35px] shadow-2xl p-12 border border-gray-100">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-[#0B2E6D]">
              Dataset & AI Model
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              This project uses a cardiovascular disease dataset for Machine
              Learning-based prediction analysis.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">

              <h3 className="text-2xl font-bold text-[#0B2E6D]">
                Dataset
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Kaggle cardiovascular disease dataset containing patient
                medical records and cardiovascular disease labels.
              </p>

            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">

              <h3 className="text-2xl font-bold text-[#0B2E6D]">
                Machine Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                AI prediction model trained using medical features including
                blood pressure, cholesterol, glucose, and lifestyle data.
              </p>

            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">

              <h3 className="text-2xl font-bold text-[#0B2E6D]">
                Prediction
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The system predicts whether cardiovascular disease is present
                and estimates overall heart attack risk percentage.
              </p>

            </div>

          </div>

        </div>

      </section>

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