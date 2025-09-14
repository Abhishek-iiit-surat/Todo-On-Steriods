import { useTaskStore } from "../../store/taskStore";


export default function TaskList() {
    const tasks = useTaskStore((s) => s.tasks);
    return (
        <ul className="space-y-3">
            {tasks.map((t) => (
                <li
                    key={t.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={t.done}
                            onChange={() => toggleDone(t.id)}
                            className="w-4 h-4"
                        />
                        <div className="text-sm">{t.title}</div>
                    </div>
                    {t.date && <div className="text-xs text-gray-400">{t.date}</div>}
                </li>
            ))}
        </ul>
    );
}