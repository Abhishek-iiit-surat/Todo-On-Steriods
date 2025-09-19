export default function WeeklyActivityCard() {
    const bars = [80, 55, 40, 60, 52, 48, 72];
    return (
        <div className="bg-white rounded-3xl p-6 h-full shadow flex items-center justify-center">
            <svg viewBox="0 0 140 80" width="100%" height="160">
                {bars.map((b, i) => (
                    <rect
                        key={i}
                        x={10 + i * 17}
                        y={80 - b}
                        width="12"
                        height={b}
                        rx="2"
                        fill="#7C3AED99"
                    />
                ))}
            </svg>
        </div>
    );
}