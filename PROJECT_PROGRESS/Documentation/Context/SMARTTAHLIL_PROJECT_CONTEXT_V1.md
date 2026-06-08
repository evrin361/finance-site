🔐 SMARTTAHLIL PROJECT CONTEXT V1
هدف کلی پروژه:
•	توسعه یک موتور تحلیل چندبازاره (Crypto، Forex، Gold Iran، بازار بورس ایران) بر پایه Smart Money Concept (SMC). 
•	تحلیل‌ها عملیاتی و قابل اقدام، با درصد احتمال و دلیل تحلیلی برای هر خروجی. 
موتورهای تحلیل:
1.	Engine 1 – SMC MASTER ENGINE 
o	تشخیص Market Structure، Liquidity، BOS، CHOCH، Order Blocks، FVG، Smart Money Behavior، Entry Zones، Targets، Stop Loss، Risk/Reward و برنامه معاملاتی. 
2.	Engine 2 – INDICATOR CONFIRMATION ENGINE 
o	تأیید تحلیل Engine 1 با اندیکاتورها (RSI, MACD, EMA, Volume, ATR, Bollinger Bands, Stochastic). 
ساختار خروجی:
•	Master Analysis Object (SMCAnalysisObject) با سه لایه نمایش: Free, Economic, Premium 
•	خروجی‌ها شامل تحلیل کامل بازار، سناریوها، نواحی تصمیم، برنامه معاملاتی، و رفتار Smart Money 
پایپ‌لاین داده:
•	Crypto Pipeline: دریافت داده‌ها از Binance API، تبدیل به Normalized Market Object، سپس ورود به موتورها. 
•	دیتکتورهای اصلی: 
o	BOS Detector 
o	CHOCH Detector 
o	Liquidity Detector 
o	Order Block Detector 
o	FVG Detector 
o	Smart Money Behavior Detector 
فازهای توسعه:
•	Skeleton Phase → Functional Engine Phase → Real Market Execution 
•	فریز معماری و دیتا فلو 
•	Engine1 اکنون نسخه 0.3 عملیاتی و تست شده با داده BTCUSDT واقعی 
نسخه و وضعیت فعلی:
•	Engine 1: نسخه 0.3، عملیاتی 
•	Output: SMCAnalysisObject 
•	تمام دیتکتورها متصل و در حال اجرا 
مرحله بعدی:
•	Market Structure Detector و Trend Detector → اتصال به Engine1 برای جایگزینی مقادیر Neutral فعلی 
 
SMARTTAHLIL WEBSITE VISION
PROJECT TYPE
Financial Analysis Platform
 
MISSION
Build a professional multi-market analysis platform powered by Smart Money Concept (SMC) and Indicator Confirmation systems.
 
SUPPORTED MARKETS
Crypto
Forex
Gold
Iran Gold Market
Iran Stock Market
Future Expandable Markets
 
USER TIERS
Free
Economic
Premium
 
CORE GOAL
Transform all SMARTTAHLIL engines into real user-facing services.
The website is the final product.
All detectors, engines, contracts, pipelines and analysis objects are being developed to power the SMARTTAHLIL platform.
 
FINAL PRODUCT
A web-based intelligent financial analysis platform capable of:
Generating market analysis
Detecting Smart Money behavior
Providing trade plans
Calculating probabilities
Providing educational and professional market insights
Supporting multiple financial markets from a unified architecture
 
ARCHITECTURAL PRINCIPLE
Every component developed inside SMARTTAHLIL must eventually be connected to the website and become part of the user experience.
Website First.
Engine Powered.
User Focused.

