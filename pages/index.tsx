import { NextPage } from "next";
// import Chart from 'react-apexcharts'
import dynamic from "next/dynamic";
import "react-circular-progressbar/dist/styles.css";

import DashboardView from "components/views/dashboard.view";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard: NextPage = () => {
  return (
    <>
      <DashboardView />
    </>
  );
};

export default Dashboard;
