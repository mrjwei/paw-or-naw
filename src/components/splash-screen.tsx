'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const hasShown = sessionStorage.getItem('splash-shown')

    if (hasShown) {
      setIsVisible(false)
      setShouldRender(false)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('splash-shown', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-6xl">
              Paw or Naw
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-1 bg-black mt-4 mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
