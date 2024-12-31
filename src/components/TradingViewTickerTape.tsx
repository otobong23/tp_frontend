"use client";
import React, { memo, useEffect } from "react";

const TradingViewTickerTape: React.FC = () => {
  useEffect(() => {
    // Dynamically inject the TradingView script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "Shiba", proName: "COINBASE:SHIBUSD" },
        { description: "PEPE", proName: "CRYPTOCAP:PEPE" },
        { description: "Gold", proName: "TVC:GOLD" },
        { description: "S&P500", proName: "SP:SPX" },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });
    document.querySelector(".tradingview-widget-container")?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget text-white"></div>
    </div>
  );
};

export default memo(TradingViewTickerTape);
