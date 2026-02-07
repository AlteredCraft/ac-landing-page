type CodeBarDividerProps = {
  className?: string;
};

const bars = [
  { color: "#D4B84A", width: "100%" },
  { color: "#52C77E", width: "80%" },
  { color: "#5A94D4", width: "45%" },
  { color: "#52C77E", width: "70%" },
  { color: "#D4B84A", width: "20%" },
];

export function CodeBarDivider({ className = "" }: CodeBarDividerProps) {
  return (
    <div className={`flex flex-col gap-1.5 py-8 max-w-[400px] ${className}`}>
      {bars.map((bar, i) => (
        <div
          key={i}
          className="h-2 rounded-full"
          style={{
            backgroundColor: bar.color,
            width: bar.width,
          }}
        />
      ))}
    </div>
  );
}
