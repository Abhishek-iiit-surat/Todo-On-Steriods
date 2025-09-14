export default function AnalyticsCard() {
    return (
        <div className="bg-white rounded-2xl p-6 h-full shadow flex gap-4 items-center justify-center">
            <div className="flex-1">
                <div className="text-sm font-medium mb-2">Radar</div>
                <svg viewBox="0 0 120 80" width="100%" height="140">
                    <polygon
                        points="60,10 95,30 80,70 40,70 25,30"
                        fill="#7C3AED44"
                        stroke="#7C3AED"
                    />
                </svg>
            </div>


            <div className="w-1/3">
                <div className="text-sm font-medium mb-2">Progress</div>
                <svg viewBox="0 0 36 36" className="w-full h-32">
                    <path
                        d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray="70 30"
                        strokeLinecap="round"
                    />
                    <circle cx="18" cy="18" r="8" fill="#fff" />
                </svg>
            </div>
        </div>
    );
}