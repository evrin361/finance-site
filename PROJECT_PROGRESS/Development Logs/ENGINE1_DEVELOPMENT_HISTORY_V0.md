📝 داکیومنت Engine1 v0.4 + Scenario Generator
1️⃣ Engine1 v0.4 - Overview
•	نسخه: 0.4 
•	وضعیت: عملیاتی (Operational) 
•	تاریخ تکمیل: 2026-06-04 
•	هدف: تبدیل Skeleton Engine به یک Multi-Detector SMC Engine واقعی 
•	ورودی‌ها: 
o	symbol (مثلاً BTCUSDT) 
o	array کندل‌ها (Candle[]) 
•	خروجی: SMCAnalysisObject با تمامی دیتکتورها و سناریوها 
2️⃣ دیتکتورها (Detectors)
Detector	وضعیت	خروجی اصلی
BOS	Online	Bullish/Bearish BOS
CHOCH	Online	CHOCH Zones
Liquidity	Online	buySideLiquidity / sellSideLiquidity
Order Blocks	Online	bullishOrderBlocks / bearishOrderBlocks
FVG	Online	FVGZones
Smart Money Behavior	Online	marketPhase, smartMoneyBehavior, whaleActivity
Market Structure	Online	Bullish / Bearish / Range + Higher/Lower High/Low
Trend	Online	Bullish / Bearish / Neutral + confidence
3️⃣ Scenario Generator
•	فایل: lib/engines/scenarioGenerator.ts 
•	هدف: تولید سناریوهای Primary, Secondary, Alternative 
•	ورودی: خروجی Engine1 (SMCOutput) 
•	خروجی: آرایه‌ای از Scenario[] شامل: 
o	title 
o	probability 
o	description 
•	اتصال به Engine1: 
o	سه سناریوی اول به SMCAnalysisObject منتقل شده‌اند: 
	bullishScenario 
	bearishScenario 
	tradePlan 
4️⃣ SMCAnalysisObject Fields (فعلی)
•	marketStructure: Bearish 
•	trend: Bearish 
•	BOS, CHOCH, Liquidity, Order Blocks, FVG, Smart Money 
•	bullishScenario, bearishScenario, tradePlan (Scenario Generator) 
•	mid_term / long_term probabilities: placeholder 
•	tradeRisk, executive_summary, capitalManagement: placeholder 
5️⃣ Development Log Highlights
•	Engine1 v0.3 → v0.4: Market Structure و Trend آنلاین شدند 
•	Scenario Generator اضافه شد و خروجی‌ها در SMCAnalysisObject ذخیره می‌شوند 
•	TypeScript type issues حل شد (moduleResolution + literal types) 
•	خروجی واقعی روی BTCUSDT و داده زنده Binance تست شده ✅ 
6️⃣ Next Step
•	Risk/Reward Engine: تکمیل مقادیر عملیاتی و Entry/Stop/Target 
•	Economic / Premium Layer: اتصال Scenario + Risk/Reward به لایه کاربر 
•	تست زنده روی سایت آنلاین 

