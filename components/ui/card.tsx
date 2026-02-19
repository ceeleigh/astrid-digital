import React from "react";

export function Card({ className = "", children }: any) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }: any) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
