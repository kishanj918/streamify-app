"use client";
import React from "react";
import { motion } from "framer-motion";

interface OverlayLoaderProps {
  /**
   * Controls the visibility of the overlay
   * - `false` (default) hides the loader
   * - `true` shows the default "Loading..." message
   * - A `string` value sets a custom message
   * @default false
   */
  loading?: boolean | string;
}
/**
 * OverlayLoader Component
 *
 * This component renders a full-screen overlay with a loading spinner and a message.
 *
 * @component
 * @param {OverlayLoaderProps} props - component props
 * @returns {JSX.Element | null} - Rendered overlay loader or `null` if `isLoading` is false
 *
 * @example
 * ```tsx
 *  <OverlayLoader loading={true} />
 *  <OverlayLoader loading={"Fetching Products"} />
 *
 * ```
 */

export const OverlayLoader: React.FC<OverlayLoaderProps> = ({
  loading = false,
}) => {
  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white px-6 py-4 rounded-lg shadow-xl flex flex-col items-center gap-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Animated Spinner */}
        <motion.div
          className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Loading Message */}
        <p className="text-gray-700 text-lg font-medium">{loading}</p>
      </motion.div>
    </motion.div>
  );
};
export default OverlayLoader;
