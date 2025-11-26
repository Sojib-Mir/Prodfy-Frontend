import React from "react";
import PropTypes from "prop-types";

/**
 * ডেটা লোড না হলে বা কোনো রেজাল্ট না পাওয়া গেলে একটি ডাইনামিক বার্তা দেখানোর কম্পোনেন্ট।
 * এটি বিভিন্ন পরিস্থিতিতে ব্যবহারযোগ্য।
 *
 * @component
 * @param {object} props
 * @param {string} [props.message="No data found"] - প্রদর্শনের জন্য কাস্টম বার্তা।
 * @returns {JSX.Element}
 */
const NoDataPage = ({ message }) => {
  return (
    // Outer container: Full width, centered text, with margin/padding
    <div className="my-35 w-full px-4 text-center py-16">
      {/* Centering container */}
      <div className="w-full max-w-7xl mx-auto">
        {/* SVG Icon: Visually indicates an issue or lack of content */}
        <svg
          className="w-22 h-22 mx-auto mb-4 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172A4 4 0 0112 12V6M3 15h3M21 15h-3M9 10h.01M15 10h.01M12 21a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>

        {/* Main Message (Uses the 'message' prop) */}
        <p className="text-3xl font-medium text-gray-600 dark:text-gray-300 mt-4">
          {message}
        </p>

        {/* Secondary Instruction */}
        <p className="text-2xl font-bold text-red-500 mt-2">
          No Data Found!.
        </p>
      </div>
    </div>
  );
};

// --- Prop Types for Validation ---
NoDataPage.propTypes = {
  /** The message to display when data is not found. */
  message: PropTypes.string,
};

// --- Default Prop Values ---
NoDataPage.defaultProps = {
  message: "No data found",
};

export default NoDataPage;
