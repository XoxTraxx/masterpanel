import React from "react";
import vector from "../components/image/vector3.svg";
import vector1 from "../components/image/vector4.svg";
import vector2 from "../components/image/vector5.svg";
import vector3 from "../components/image/vector6.svg";
import { BellIcon } from "@chakra-ui/icons";

const LineChartData = [
  ["x", "dogs"],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 700],
  [7, 700],
  [18, 20000],
];

const HomeMenu = [
  // { displayName: "Home" ,path:'/'},
  // { displayName: "Taas" ,path:'/PageEdit'},
  // { displayName: "Antchain" ,path:'/PageEdit'},
  // { displayName: "Food Safety ",path:'/PageEdit' },
  // { displayName: "Contact" ,path:'/PageEdit'},
  // { displayName: "Register",path:'/PageEdit' },
   { displayName: "Add New Page " ,path:'/FormEditor'},
   { displayName: "Page List" ,path:'/PageList'},
];
const pageList=[
   { displayName: "Home" ,path:'/'},
  { displayName: "Taas" ,path:'/PageEdit'},
  { displayName: "Antchain" ,path:'/PageEdit'},
  { displayName: "Food Safety ",path:'/PageEdit' },
  { displayName: "Contact" ,path:'/PageEdit'},
  { displayName: "Register",path:'/PageEdit' },
]
const FormMenu=[
  {displayName:'Form List',path:'/formList'},
  {displayName:'Add New Form',path:'/FormGenerator'},
]
 const ClientMenu = [
  {displayName:'Over All',path:'/Clients'},
  {displayName:'Add New Client',path:'/'},
  {displayName:'Client List',path:'/clientList'},

]
const ClientsMenu = [
  { menu: "Oversea" },
  { menu: "EuyanSang" },
  { menu: "Komark" },
  { menu: "lol Plantatinum" },
];
const formList=[
  {displayName:'Registration Form',createdAt:'01/01/2021 8:34',product:'Product'},
  {displayName:'Client Form',createdAt:'01/01/2021 8:34',product:'Product'},
  {displayName:'Enquiry Form',createdAt:'01/01/2021 8:34',product:'Product'},
  {displayName:'Contact us Form',createdAt:'01/01/2021 8:34',product:'Product'},
]

const pieChartData = [
  ["Language", "Speakers (in millions)"],
  ["Rubber Industries (5.58%)", 5.85],
  ["Agriculture (1.66%)", 1.66],
  ["Food & Belevrage(0.36%)", 0.316],
  ["Fruits and Plantation(0.0791%) ", 0.0791],
  ["Automobile( 1.36%)", 1.36],
];
const PieChartOption = {
  legend: "right",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const PieChartOption2 = {
  legend: "bottom",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const PieChartOption3 = {
 
  legend: {position: 'right', textStyle: {fontSize: 7,fontWieght:'bold',}},
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const options = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Points",
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};

var saledbasedoption = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Points",
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};
const navbarMenu = [
  { to: "/Home", tabeName: "HOME" },
  { to: "/Taas", tabeName: "TRACEABILITY AS A SERVICE (TAAS)" },
  { to: "/Antchain", tabeName: "ANTCHAIN" },
  { to: "/FoodSafety", tabeName: "FOOD SAFETY" },
  { to: "/Subscription", tabeName: "REGISTER" },
  { to: "/Contact", tabeName: "CONTACT" },
  { to: "/Login", tabeName: "LOGIN" },
];
const TredingCompanies = [
  { dep: "Agriculture", unit: "Million", value: 30, color: "#ca77f0" },
  { dep: "Automotive", unit: "Billion", value: 60, color: "#e39b99" },
  { dep: "Clothing & Apparels", unit: "Billion", value: 70, color: "skyblue" },
  // { dep: "Lay Hong berhad", unit: "Billion", value: 45, color: "#93aef7" },
  // { dep: "Food &", unit: "Billion", value: 80, color: "#a0dddb" },
  // { dep: "Ql Resources berhad", unit: "Billion", value: 30, color: "#f1ca5f" },
];

const productData = [
  { productName: "Golden Jade Mooncake", Qty: 400 },
  { productName: "Red Cherry Mooncake", Qty: 300 },
  { productName: "Green Tea Mooncake", Qty: 900 },
  { productName: "Snowskin Mooncake", Qty: 800 },
];

const CompanyComparison = [
  { dep: "Agriculture", unit: "Million", value: 300000, color: "#ca77f0" },
  { dep: "Automotive", unit: "Billion", value: 60, color: "#e39b99" },
  { dep: "Clothing & Apparels", unit: "Billion", value: 70, color: "skyblue" },
  { dep: "Lay Hong berhad", unit: "Billion", value: 45, color: "#93aef7" },
  { dep: "Food &", unit: "Billion", value: 80, color: "#a0dddb" },
  { dep: "Ql Resources berhad", unit: "Billion", value: 40, color: "#f1ca5f" },
];
const NotificationData = [
  {
    icon: (<BellIcon />),
    Company: "Oversea Mooncake",
    notification: "My cms cannot open once i login and ...",
    date: "2020-06-13 8:30:00",
  },
  {
    icon: (<BellIcon />),
    Company: "Oversea Mooncake",
    notification: "My cms cannot open once i login and ...",
    date: "2020-06-13 8:30:00",
  },
  {
    icon: (<BellIcon />),
    Company: "Oversea Mooncake",
    notification: "My cms cannot open once i login and ...",
    date: "2020-06-13 8:30:00",
  },
  {
    icon: (<BellIcon />),
    Company: "Oversea Mooncake",
    notification: "My cms cannot open once i login and ...",
    date: "2020-06-13 8:30:00",
  },
  {
    icon: (<BellIcon />),
    Company: "Oversea Mooncake",
    notification: "My cms cannot open once i login and ...",
    date: "2020-06-13 8:30:00",
  },
];
const Tabs = ["Performance", "Procress", "Profile"];
const PhaseData = [
  {
    phase: "Paste Making",
    color: "rgb(176,228,249)",
    ind: "Bakery & Confectionary",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
  {
    phase: "Skin Preprations",
    color: "rgb(146,232,211)",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
  {
    phase: "Moulding",
    color: "rgb(160,161,232)",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
  {
    phase: "QC/QAs",
    color: "rgb(78,128,173)",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
  {
    phase: "Paking",
    color: "rgb(146,232,211)",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
  {
    phase: "Distribution",
    color: "rgb(176,228,249)",
    address: "Roseggerstraße 15, 4600 Wels, Austria",
  },
];
const phaseDataColors = [
  "rgb(176,228,249)",
  "rgb(146,232,211)",
  "rgb(160,161,232)",
  "rgb(78,128,173)",
  "rgb(146,232,211)",
  "rgb(176,228,249)",
  "rgb(176,228,249)",
  "rgb(160,161,232)",
  "rgb(78,128,173)",
];
const salesType = ["Products", "Location", "Revenue", "Type"];
let chartData = {
  series: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Page Statistics",
      align: "left",
    },

    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Nevember",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  },
};
const saleData = [
  { sales: 900000000, unitSold: 900 },
  { sales: 100000000, unitSold: 900 },
  { sales: 100000000, unitSold: 900 },
];

const barchartData = {
  series: [
    {
      name: "industry 1",
      type: "column",
      data: [20, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "industry 2",
      type: "column",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "industry ",
      type: "line",
      data: [100, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "01/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};
const blockChainData = [
  "A blockchain is a database stored in multiple locations that can maintain increasing records (or blocks) which are timestamped and linked to previous blocks in a way that cannot be undone.",
  "It’s a method of recording data – anything that needs recording and verified as happened. Data recorded is tampered proof.",
  "The blockchain traceability creates a smarter and more secure supply chain, tracking supply chain critical events through a clear and solid audit trail with near real-time visibility.",
];
const coreAdvantages = [
  {
    image: vector,
    title: "Blockchain for the future",
    des: "We have been the first global patent application for blockchain for three consecutive years and committed in building a large-scale commercial blockchain foundation.",
  },
  {    image: vector2,

    title:  `Driven by 
    inclusive concept`,
    des: "Uphold to the inclusive concept of Ant Group, leveraging blockchain technology to solve practical social problems and serve more people.",
  },
  {
    image: vector1,
    title: "Open eco-system",
    des: "Create the eco-system of Alibaba economy and provide open and innovative blockchain applications and business cooperation models.",
  },
  {
    image: vector3,
    title: "Industry lead  ",
    des: "Adhering to the service of the real economy with sustainable business model, more than 50 application scenarios have been implemented.",
  },
];
const menu = [
  { title: "Home", ref: React.createRef() },
  { title: " Traceability As A Services (TaaS) ", ref: React.createRef() },

  { title: "Antchain", ref: React.createRef() },
  { title: "Food Safety", ref: React.createRef() },
  { title: "Contact", ref: React.createRef() },
];
const menu2 = [
  "Terms of Service",
  "AUP/DMCA",
  "Privacy Policy",
  "Cookie Policy",
];

const formoptions = ["Content", "Meta", "Seo"];

export {
  Tabs,
  menu,
  menu2,
  options,
  saleData,
  HomeMenu,
  FormMenu,
  ClientMenu,
  chartData,
   pageList,
  formList,
  salesType,
  PhaseData,
  productData,
  barchartData,
  navbarMenu,
  formoptions,
  ClientsMenu,
  pieChartData,
  LineChartData,
  PieChartOption,
  PieChartOption2,
  PieChartOption3,
  phaseDataColors,
  blockChainData,
  coreAdvantages,
  saledbasedoption,
  TredingCompanies,
  NotificationData,
  CompanyComparison,
};
