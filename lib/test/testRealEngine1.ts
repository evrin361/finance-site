import { generateSMCAnalysis } from "@/lib/engines/engine1Factory";
import { Candle } from "@/lib/normalizer/normalizeCandle";

async function runRealTest() {
  try {
    // گرفتن داده واقعی از API
const res = await fetch(
  "http://localhost:3000/api/crypto/btcusdt"
);

console.log("STATUS:", res.status);

const json = await res.json();

console.log("API RESPONSE:");
console.log(json);

    const normalizedCandles: Candle[] = json.data; // فرض کنیم 500 کندل Normalized

    // تولید اولین SMCAnalysisObject واقعی
    const analysis = generateSMCAnalysis("BTCUSDT", normalizedCandles);

    // چاپ خروجی BOS و کامل تحلیل
    console.log("🔥 FIRST REAL BOS DETECTED:");
    console.log(analysis.BOS);

    console.log("🔥 FULL SMCAnalysisObject:");
    console.log(JSON.stringify(analysis, null, 2));
  } catch (error) {
    console.error("❌ Error fetching or running Engine 1:", error);
  }
}

runRealTest();