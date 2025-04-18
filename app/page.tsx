import { useEffect } from "react"; import { motion } from "framer-motion"; import { SparklesCore } from "@/components/ui/sparkles"; import { Card, CardContent } from "@/components/ui/card"; import { Music } from "lucide-react";

export default function BhagyashreeSupport() { useEffect(() => { document.title = "Hey Bhagyashree! You're Strong!"; }, []);

return ( <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-4 flex flex-col justify-center items-center space-y-8 overflow-hidden relative"> <SparklesCore 
background="transparent"
minSize={0.4}
maxSize={1.2}
particleDensity={150}
className="absolute w-full h-full top-0 left-0 z-0"
/>

{/* Sun rising animation */}
  <motion.div
    className="absolute bottom-0 w-64 h-64 bg-gradient-to-tr from-yellow-300 to-pink-500 rounded-full blur-3xl opacity-50 z-0"
    initial={{ y: 200 }}
    animate={{ y: 0 }}
    transition={{ duration: 3, ease: "easeOut" }}
  />

  <motion.h1
    className="text-5xl font-bold text-center z-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    Hey Bhagyashree,
  </motion.h1>

  <motion.p
    className="text-xl text-center max-w-2xl z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    Life can be tough, but so are you. Whatever you're going through right now, you have the strength to overcome it. Everything will be okay. You're not alone.
  </motion.p>

  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 100 }}
    className="z-10"
  >
    <Card className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-3xl font-semibold mb-2">You're Magic</h2>
        <p className="text-lg">
          You bring light into this world, even when it feels dark. Just take it one step at a time. You’ve got this.
        </p>
      </CardContent>
    </Card>
  </motion.div>

  {/* Optional music icon */}
  <motion.div
    className="z-10 mt-8 text-white opacity-70 hover:opacity-100 cursor-pointer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.5 }}
    onClick={() => alert("Imagine some gentle piano music playing here...")}
  >
    <Music className="w-8 h-8" />
  </motion.div>

  <motion.p
    className="text-sm text-center z-10 mt-10 opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 1 }}
  >
    Made with love by someone who believes in you.
  </motion.p>
</div>

); }
