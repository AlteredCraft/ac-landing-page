type CodeBarDividerProps = {
  className?: string;
};

// Brand code-bar accents (gold / green / blue, echoing the logo icon).
const bars = [
  { color: "#D4B84A", width: "100%" },
  { color: "#52C77E", width: "80%" },
  { color: "#5A94D4", width: "45%" },
  { color: "#52C77E", width: "70%" },
  { color: "#D4B84A", width: "20%" },
];

export function CodeBarDivider({ className = "" }: CodeBarDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col gap-1.5 ${className}`}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full"
          style={{
            backgroundColor: bar.color,
            width: bar.width,
          }}
        />
      ))}
    </div>
  );
}
