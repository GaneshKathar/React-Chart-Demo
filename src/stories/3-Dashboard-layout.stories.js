import React from 'react';
import AddRemoveLayout from "../Component/dashboardWidget/AddRemoveLayout/AddRemoveLayout";
import HighChartLayout from "../Component/dashboardWidget/highchartLayout/HighChartLayout";
import ChartJsLayout from "../Component/dashboardWidget/chartjsLayout/ChartJsLayout";

export default {
  title: 'Dashboard layout example',
};

export const Add_and_Remove_widget = () => <AddRemoveLayout />
export const High_Chart_Layout = () => <HighChartLayout />
export const ChartJs_Layout = () => <ChartJsLayout />

