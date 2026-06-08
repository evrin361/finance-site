SMARTTAHLIL CORE FREEZE
VERSION 1.0
تاریخ ثبت:
Day of First Heartbeat
 
1.	CORE BUSINESS MODEL
SmartTahlil یک موتور تحلیل چندبازاره است.
بازارهای هدف:
•	Crypto
•	Forex
•	Gold Iran
•	Iran Stock Market
تحلیل فقط در صورت درخواست مشتری تولید می‌شود.
استثناء:
چند نماد شاخص و تبلیغاتی (بعداً مشخص می‌شوند)
به صورت دوره‌ای بروزرسانی می‌شوند.
 
2.	SERVICE PLANS
سه پلن اصلی:
1- Free
2- Economic
3- Premium
تمام تحلیل‌ها از یک موتور تولید می‌شوند.
تفاوت پلن‌ها فقط در سطح نمایش خروجی است.
 
3.	ANALYSIS ENGINES
ENGINE 1
نام:
SMC MASTER ENGINE
وظیفه:
•	Market Structure
•	Liquidity
•	BOS
•	CHOCH
•	Order Blocks
•	FVG
•	Smart Money Analysis
•	Entry Zones
•	Targets
•	Stop Loss
•	Risk Management
•	Risk Reward
•	Bullish Scenario
•	Bearish Scenario
•	Trading Plan
•	Market Status
•	Confidence Level
•	Why Analysis
 
ENGINE 2
نام:
INDICATOR CONFIRMATION ENGINE
وظیفه:
تأیید یا رد تحلیل موتور اول
اندیکاتورها:
•	RSI
•	MACD
•	EMA
•	Volume
•	Bollinger Bands
•	Stochastic
•	ATR
خروجی:
Indicator Confirmation Object
 
4.	MASTER ANALYSIS OBJECT
قلب امپراتوری SmartTahlil
تمام تحلیل‌ها ابتدا به این ساختار تبدیل می‌شوند.
تمام خروجی‌ها از روی آن ساخته می‌شوند.
Free View
Economic View
Premium View
PDF
Website Report
 
5.	ORDER FLOW V1
ثبت سفارش
↓
status = جدید
↓
در صف تحلیل
↓
در حال تحلیل
↓
تحلیل آماده شد
↓
PDF آماده شد
↓
تحویل شد
 
6.	DATABASE
جدول اصلی:
orders
فیلدهای فعلی:
id
created_at
full_name
phone
market
message
status
فیلدهای برنامه‌ریزی‌شده:
email
symbol
 
7.	CRYPTO PIPELINE
فاز اول پروژه:
Crypto Market
نمادها به صورت داینامیک
مسیر:
app/api/crypto/[symbol]/route.ts
 
8.	MARKET DATA SERVICE V1
Provider اولیه:
Binance
Endpoint اصلی:
/api/v3/klines
وظیفه:
دریافت:
OHLC
Volume
Timestamp
 
9.	NORMALIZER V1
تمام Provider ها باید به زبان SmartTahlil ترجمه شوند.
خروجی:
Normalized Market Object
ساختار:
market
symbol
timeframe
provider
last_update
candles
 
10.	ENGINE INPUT CONTRACT V1
ورودی موتورها:
symbol
timeframe
candles
تعداد استاندارد:
500 candles
Engine 1 و Engine 2 فقط این ساختار را می‌شناسند.
هیچ وابستگی مستقیمی به Binance یا Provider ندارند.
 
11.	GOLDEN RULE
اول طراحی
بعد اجرا
اول Freeze
بعد Code
 
12.	CURRENT PROJECT STATUS
Architecture:
Frozen
Business Model:
Frozen
Order Flow:
Frozen
Crypto Pipeline:
Frozen
Market Data Service:
Frozen
Normalizer:
Frozen
Engine Input Contract:
Frozen
Master Analysis Object:
Frozen
Project Phase:
FROM:
"What should we build?"
TO:
"How should we build it?"

