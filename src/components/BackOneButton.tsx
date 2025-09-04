// src/components/BackOneButton.tsx
import React from "react";

type Props = {
  onClick: () => void;
  title?: string;
  className?: string;
};

/**
 * 高コントラスト（黒地×白文字）の ↶ ボタン
 */
export default function BackOneButton({ onClick, title, className }: Props) {
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 28,
    minWidth: 28,
    padding: "4px 8px",
    lineHeight: 1,
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #111",
    background: "#fff", // 黒地
    color: "#111",      // 白い矢印
    cursor: "pointer",
    userSelect: "none",
    outline: "2px solid transparent",
    outlineOffset: 2,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={title ?? "一個戻る"}
      aria-label={title ?? "一個戻る"}
      style={style}
      className={className}
    >
      ↶
    </button>
  );
}
