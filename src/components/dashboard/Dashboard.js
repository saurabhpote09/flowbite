import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ReactComponent as ArrowIcon } from "../../assets/Trend.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/DownArrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/RightArrow.svg";

import User from "../../assets/User.png";
import AnalyticsTable from "../../elements/Table";
import Footer from "../Footer";

const Dashboard = ({ darkMode }) => {
  const data = [
    { name: "A", uv: 4000, pv: 2400 },
    { name: "B", uv: 3000, pv: 1398 },
    { name: "C", uv: 2000, pv: 9800 },
    { name: "D", uv: 2780, pv: 3908 },
    { name: "E", uv: 1890, pv: 4800 },
    { name: "F", uv: 2390, pv: 3800 },
    { name: "G", uv: 3490, pv: 4300 },
  ];
  const data1 = [
    { name: "A", value: 40 },
    { name: "B", value: 80 },
    { name: "C", value: 20 },
    { name: "D", value: 60 },
    { name: "E", value: 10 },
    { name: "F", value: 50 },
    { name: "G", value: 30 },
  ];
  const data2 = [
    { name: "A", value: 60 },
    { name: "B", value: 80 },
    { name: "C", value: 50 },
    { name: "D", value: 90 },
    { name: "E", value: 70 },
    { name: "F", value: 85 },
    { name: "G", value: 65 },
  ];

  const data3 = [
    { date: "01 Feb", current: 6200, previous: 6400 },
    { date: "02 Feb", current: 6300, previous: 4000 },
    { date: "03 Feb", current: 6100, previous: 6600 },
    { date: "04 Feb", current: 6400, previous: 2000 },
    { date: "05 Feb", current: 2000, previous: 6400 },
    { date: "06 Feb", current: 6100, previous: 3000 },
    { date: "07 Feb", current: 1000, previous: 6600 },
  ];
  const data4 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 100 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#0088FE", "#FF8042", "#8884D8"];
  const dataWithRemaining = data2.map((item) => ({
    ...item,
    remaining: 100 - item.value,
  }));

  const Card = ({ nummber, subtitle, trendNum, trend, children }) => {
    return (
      <div
        className={`rounded-lg p-4 shadow ${
          darkMode ? "bg-gray-800" : "bg-white"
        } sm:p-6 xl:p-8 `}
      >
        <div className="flex items-center">
          <div className="shrink-0">
            <span
              className={`text-2xl font-bold leading-none ${
                darkMode ? "text-white" : "text-black"
              } sm:text-3xl`}
            >
              {nummber}
            </span>
            <h3
              className={`text-base font-normal ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {subtitle}
            </h3>
          </div>
          <div
            className={`ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold ${
              trend === "uptrend" ? "text-green-400" : "text-red-400"
            }`}
          >
            {trendNum}
            <div className={`${trend === "uptrend" ? "" : "rotate-180"}`}>
              <ArrowIcon />
            </div>
          </div>
        </div>
        {children}
        <div
          className={`flex items-center justify-between border-t pt-3 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } sm:pt-6`}
        >
          <div className="flex justify-center items-center gap-1">
            <span
              className={`${darkMode ? "text-white" : "text-black"} text-sm`}
            >
              Last 7 Days
            </span>
            <div className={`${darkMode ? "text-white" : "text-black"}`}>
              <DownArrowIcon />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="text-blue-500 uppercase text-sm font-medium">
              Product Report
            </span>
            <div className={"text-blue-500"}>
              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomerList = ({ name, email, amount, darkMode }) => (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 ">
        <div>
          <img src={User} alt={name} className="size-8 rounded-full" />
        </div>
        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </p>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {email}
          </p>
        </div>
        <div
          className={`inline-flex items-center text-base font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {amount}
        </div>
      </div>
    </li>
  );

  const InfoCard = ({ title = "Latest Customers", darkMode, children }) => {
    return (
      <div
        className={`mb-4 h-full rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-4 shadow sm:p-6`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <a
            href="/"
            className={`flex items-center rounded-lg p-2 text-sm font-medium ${
              darkMode
                ? "text-blue-500 hover:bg-gray-700"
                : "text-blue-700 hover:bg-gray-100"
            }`}
          >
            View all
          </a>
        </div>

        {children}
        <div
          className={`flex items-center justify-between border-t pt-3 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } sm:pt-6`}
        >
          <div className="flex justify-center items-center gap-1">
            <span
              className={`${darkMode ? "text-white" : "text-black"} text-sm`}
            >
              Last 7 Days
            </span>
            <div className={`${darkMode ? "text-white" : "text-black"}`}>
              <DownArrowIcon />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="text-blue-500 uppercase text-sm font-medium">
              Product Report
            </span>
            <div className="text-blue-500">
              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Card
        nummber={"$45,385"}
        subtitle={"Sales this week"}
        trend={"uptrend"}
        trendNum={"14.6%"}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data3}>
            <CartesianGrid stroke="#2a3b4c" />
            <XAxis dataKey="date" tick={{ fill: "#9aa5b1" }} />
            <YAxis tick={{ fill: "#9aa5b1" }} />
            <Tooltip />
            <Legend
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
                color: "#9aa5b1",
              }}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#0044ff"
              strokeWidth={3}
              dot={{ r: 5, stroke: "#0044ff", strokeWidth: 2, fill: "#1a2b3c" }}
              activeDot={{ r: 6 }}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#ffad80"
              strokeWidth={3}
              dot={{ r: 5, stroke: "#ffad80", strokeWidth: 2, fill: "#1a2b3c" }}
              activeDot={{ r: 6 }}
              name="Revenue (previous period)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card
          nummber={"2,430"}
          subtitle={"New products this week"}
          trendNum={"14.6%"}
          trend={"uptrend"}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.2)" }} />
              <Bar dataKey="uv" fill="#ff9f68" barSize={5} />
              <Bar dataKey="pv" fill="#0097e6" barSize={5} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card
          nummber={"5,355"}
          subtitle={" Visitor this week"}
          trendNum={" 32.9%"}
          trend={"uptrend"}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data1}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0044ff" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0044ff" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0044ff"
                className="bg-slate-700"
                strokeWidth={4}
                fill="url(#gradient)"
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card
          nummber={"385"}
          subtitle={"Visitor this week"}
          trendNum={"-2.7%"}
          trend={"downtrend"}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataWithRemaining}>
              <Tooltip />
              <Bar dataKey="value" stackId="a" fill="#0044ff" barSize={10} />
              <Bar
                dataKey="remaining"
                stackId="a"
                fill="#2a3b4c"
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-3">
        <div
          className={`mb-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }  p-4 shadow  sm:p-6 xl:mb-0 xl:p-8 2xl:col-span-2`}
        ></div>
        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-1">
          <InfoCard title={"Latest Customers"} darkMode={darkMode}>
            <ul
              className={`divide-y ${
                darkMode ? "divide-gray-700" : "divide-gray-200"
              }`}
            >
              <CustomerList
                name="Neil Sims"
                email="email@flowbite.com"
                amount="$320"
                darkMode={darkMode}
              />
              <CustomerList
                name="Neil Sims"
                email="email@flowbite.com"
                amount="$320"
                darkMode={darkMode}
              />
              <CustomerList
                name="Neil Sims"
                email="email@flowbite.com"
                amount="$320"
                darkMode={darkMode}
              />
              <CustomerList
                name="Neil Sims"
                email="email@flowbite.com"
                amount="$320"
                darkMode={darkMode}
              />
              <CustomerList
                name="Neil Sims"
                email="email@flowbite.com"
                amount="$320"
                darkMode={darkMode}
              />
            </ul>
          </InfoCard>
          <InfoCard title="Acquisition Overview" darkMode={darkMode}>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data4}
                  cx="50%"
                  cy="50%"
                  innerRadius={5}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <AnalyticsTable darkMode={darkMode}/>
          </InfoCard>
        </div>
      </div>
      <Footer darkMode={darkMode}/>
    </>
  );
};

export default Dashboard;
