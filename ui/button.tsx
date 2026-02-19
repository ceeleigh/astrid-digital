import React from "react";

export function Button({ className = "", children, ...props }: any) {
  return (
    <button
      className={`rounded-xl font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
