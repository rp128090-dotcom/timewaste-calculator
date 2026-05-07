import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);

  const calculate = () => {
    const age = Number(document.getElementById("age").value || 0);
    const screen = Number(document.getElementById("screen").value || 0);
    const goal = document.getElementById("goal").value || "success";

    const yearlyHours = screen * 365;
    const yearlyDays = (yearlyHours / 24).toFixed(1);
    const moneyLoss = (yearlyHours * 150).toLocaleString();

    let goalAdvice = "";

    const lowerGoal = goal.toLowerCase();

    if (
      lowerGoal.includes("fitness") ||
      lowerGoal.includes("gym") ||
      lowerGoal.includes("body")
    ) {
      goalAdvice =
        "💪 You could build an insane physique, improve stamina, and completely transform your body.";
    } else if (
      lowerGoal.includes("money") ||
      lowerGoal.includes("rich") ||
      lowerGoal.includes("business")
    ) {
      goalAdvice =
        "💰 You could learn high-income skills, build businesses, and earn serious money.";
    } else if (
      lowerGoal.includes("study") ||
      lowerGoal.includes("exam")
    ) {
      goalAdvice =
        "📚 You could complete courses, master subjects, and move closer to your dream career.";
    } else {
      goalAdvice =
        "🚀 You could spend this time improving yourself and building your dream life.";
    }

    setResult({
      age,
      goal,
      screen,
      yearlyHours,
      yearlyDays,
      moneyLoss,
      goalAdvice,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-4xl rounded-[40px] border border-red-500/20 bg-black/60 backdrop-blur-2xl p-10 relative z-10 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
        <div className="text-center mb-10">
          <div className="inline-block px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm tracking-[4px] uppercase mb-5">
            Reality Analyzer
          </div>

          <h1 className="text-6xl font-black bg-gradient-to-b from-red-400 via-red-500 to-red-900 bg-clip-text text-transparent">
            TIME WASTE
          </h1>

          <p className="text-gray-400 text-xl mt-4">
            Discover how much of your life is disappearing...
          </p>
        </div>

        <div className="space-y-6">
          <input
            id="age"
            type="number"
            placeholder="Your Age"
            className="w-full rounded-3xl bg-zinc-950 border border-red-500/20 p-5 text-lg"
          />

          <input
            id="goal"
            type="text"
            placeholder="Your Goal (Fitness / Money / Study)"
            className="w-full rounded-3xl bg-zinc-950 border border-red-500/20 p-5 text-lg"
          />

          <input
            id="screen"
            type="number"
            placeholder="Daily Screen Time (Hours)"
            className="w-full rounded-3xl bg-zinc-950 border border-red-500/20 p-5 text-lg"
          />

          <button
            onClick={calculate}
            className="w-full bg-gradient-to-r from-red-700 to-red-500 rounded-3xl py-5 text-xl font-black"
          >
            CALCULATE MY LOST LIFE ⏳
          </button>
        </div>

        {result && (
          <div className="mt-10 space-y-5">
            <div className="bg-zinc-950 border border-red-500/20 rounded-3xl p-5">
              <h2 className="text-3xl font-black text-red-500 mb-3">
                ⚠️ REALITY REPORT
              </h2>

              <p className="text-lg">Age: {result.age} Years</p>
              <p className="text-lg">Goal: {result.goal}</p>
              <p className="text-lg">Screen Time: {result.screen} Hours/day</p>
              <p className="text-lg">
                Yearly Time Waste: {result.yearlyHours} Hours
              </p>
              <p className="text-lg">
                Equivalent Days Lost: {result.yearlyDays} Days
              </p>
              <p className="text-lg">
                Potential Money Missed: ₹{result.moneyLoss}+
              </p>
            </div>

            <div className="bg-red-950/30 border border-red-500/20 rounded-3xl p-5">
              <h3 className="text-2xl font-black text-red-400 mb-3">
                💡 What You Could Have Done
              </h3>

              <p className="text-lg text-gray-300">{result.goalAdvice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
