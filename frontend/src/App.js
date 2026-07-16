import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "sonner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App noise-overlay bg-ink-0 min-h-screen text-white font-sans">
      <Preloader onComplete={() => setLoading(false)} />
      {!loading && <CustomCursor />}
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home ready={!loading} />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#0A0A0A", border: "1px solid rgba(29,53,255,0.3)", color: "#fff" } }} />
    </div>
  );
}

export default App;
