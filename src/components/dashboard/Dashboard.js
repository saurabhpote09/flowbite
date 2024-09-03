import React from "react";
import AnalyticsTable from "../../elements/Table";
import Footer from "../Footer";
import InfoCard from "../../elements/InfoCard";
import CustomerList from "../../elements/CustomerList";
import Card from "../../elements/Card";
import data from "../../data/data.json";
import data1 from "../../data/data1.json";
import data2 from "../../data/data2.json";
import data3 from "../../data/data3.json";
import data4 from "../../data/data4.json";
import data5 from "../../data/data5.json";
import transactions from "../../data/transactions.json";
import TransactionTable from "../../elements/TransactionTable";
import LineChartCard from "../../elements/LineChartCard";
import BarChartStacked from "../../elements/BarChartStacked";
import BarChartCard from "../../elements/BarChartCard";
import LineChartCardGradient from "../../elements/LineChartCardGradient";
import PiechartStack from "../../elements/PiechartStack";
import country from "../../data/Country.json";
import MapWorld from "./MapWorld";
import Progesslist from "../../elements/Progesslist";

const COLORS = ["#00C49F", "#FFBB28", "#0088FE", "#FF8042", "#8884D8"];

const Dashboard = ({ darkMode }) => {
  return (
    <>
      <Card
        darkMode={darkMode}
        number={"$45,385"}
        subtitle={"Sales this week"}
        trend={"uptrend"}
        trendNum={"14.6%"}
      >
        <LineChartCard data={data3} />
      </Card>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4">
        <Card
          darkMode={darkMode}
          number={"2,430"}
          subtitle={"New products this week"}
          trendNum={"14.6%"}
          trend={"uptrend"}
        >
          <BarChartCard data={data} />
        </Card>
        <Card
          darkMode={darkMode}
          number={"5,355"}
          subtitle={"Visitor this week"}
          trendNum={"32.9%"}
          trend={"uptrend"}
        >
          <LineChartCardGradient data={data1} />
        </Card>
        <Card
          darkMode={darkMode}
          number={"385"}
          subtitle={"Visitor this week"}
          trendNum={"-2.7%"}
          trend={"downtrend"}
        >
          <BarChartStacked data={data2} />
        </Card>
      </div>

      <div className=" grid grid-cols-1 xl:gap-4 2xl:grid-cols-3 my-4">
        <div className={` h-full 2xl:col-span-2`}>
          <InfoCard
            darkMode={darkMode}
            title={"Sessions by country"}
            subtitle={"View website visitors by hovering over the map"}
          >
            <MapWorld />
            <Progesslist country={country} darkMode={darkMode}/>
          </InfoCard>
        </div>
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
            <PiechartStack data={data4} COLORS={COLORS} />
            <AnalyticsTable darkMode={darkMode} data={data5} />
          </InfoCard>
        </div>
      </div>
      <div className="mb-4">
        <InfoCard
          title="Transactions"
          darkMode={darkMode}
          subtitle="This is a list of latest transactions"
        >
          <TransactionTable transactions={transactions} darkMode={darkMode} />
        </InfoCard>
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Dashboard;
