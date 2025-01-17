import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const StudentChart = () => {
  const studentsData = [
    {
      id: 1,
      name: "Alice Johnson",
      math: 85,
      chemistry: 78,
      physics: 91,
    },
    {
      id: 2,
      name: "Benjamin Smith",
      math: 92,
      chemistry: 88,
      physics: 85,
    },
    {
      id: 3,
      name: "Charlotte Brown",
      math: 78,
      chemistry: 81,
      physics: 79,
    },
    {
      id: 4,
      name: "Daniel Wilson",
      math: 88,
      chemistry: 92,
      physics: 84,
    },
  ];

  return (
    <div className="hidden md:flex justify-center my-10 border p-3 bg-gray-50">
      <LineChart width={700} height={400} data={studentsData}>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="purple"></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default StudentChart;
