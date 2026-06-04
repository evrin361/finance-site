import { generateSMCAnalysis } from "@/lib/engines/engine1Factory";
import { Candle } from "@/lib/normalizer/normalizeCandle";

async function runCHOCHTest() {
  try {
    // گرفتن داده واقعی از API
    const res = await fetch("http://localhost:3000/api/crypto/btcusdt");
    console.log("STATUS:", res.status);
    const json = await res.json();
    console.log("API RESPONSE RECEIVED");

    const normalizedCandles: Candle[] = json.data; // 500 کندل Normalized

    // تولید اولین SMCAnalysisObject واقعی
    const analysis = generateSMCAnalysis("BTCUSDT", normalizedCandles);

    // چاپ خروجی CHOCH
    console.log("🔥 FIRST REAL CHOCH DETECTED:");
    console.log(analysis.CHOCH);

    console.log("🔥 FULL SMCAnalysisObject:");
    console.log(JSON.stringify(analysis, null, 2));

    

  } catch (error) {
    console.error("❌ Error fetching or running Engine 1:", error);
  }
}

runCHOCHTest();