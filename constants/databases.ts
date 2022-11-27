import { ApexOptions } from "apexcharts";

export const sparklineAreaExampleSuccess1 = {
    series: [
        {
            data: [555, 1222, 777, 888, 555, 888, 999, 1222],
        },
    ],
    chart: {
        type: "area",
        width: "100%",
        height: 70,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    colors: ["#1DCC70"],
    tooltip: {
        enabled: false,
    },
};
export const sparklineAreaExampleSuccess2 = {
    series: [
        {
            data: [55, 66, 55, 77, 66, 180, 290, 333],
        },
    ],
    chart: {
        type: "area",
        width: "100%",
        height: 70,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    colors: ["#1DCC70"],
    tooltip: {
        enabled: false,
    },
};
export const sparklineAreaExampleDanger1 = {
    series: [
        {
            data: [2222, 1666, 1444, 1777, 1333, 1111, 777, 666],
        },
    ],
    chart: {
        type: "area",
        width: "100%",
        height: 70,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    colors: ["#FF396F"],
    tooltip: {
        enabled: false,
    },
};
export const sparklineAreaExampleDanger2 = {
    series: [
        {
            data: [1200, 1444, 2900, 505, 531, 1900, 555, 75],
        },
    ],
    chart: {
        type: "area",
        width: "100%",
        height: 70,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    colors: ["#FF396F"],
    tooltip: {
        enabled: false,
    },
};

type Graph = {
    series: ApexAxisChartSeries;
    options: ApexOptions;
};

export const chartExample1: Graph = {
    series: [
        {
            data: [
                512, 405, 666, 1090, 1309, 1400, 1500, 700, 1600, 1400, 1600,
                2000, 1100, 501, 3000, 1000, 2000,
            ],
        },
    ],
    options: {
        chart: {
            type: "area",
            width: "100%",
            height: 140,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#1DCC70"],
        tooltip: {
            enabled: true,
        },
    },
};

export const chartExample2: Graph = {
    series: [
        {
            data: [
                512, 405, 666, 1090, 1309, 1400, 1500, 700, 1700, 1600, 1400,
                1600,
            ],
        },
    ],
    options: {
        chart: {
            type: "area",
            width: "100%",
            height: 140,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#1DCC70"],
        tooltip: {
            enabled: true,
        },
    },
};

export const chartExample3: Graph = {
    series: [
        {
            data: [
                512, 405, 666, 1090, 1309, 1400, 1500, 700, 405, 666, 1090,
                1309, 1400, 1500,
            ],
        },
    ],
    options: {
        chart: {
            type: "area",
            width: "100%",
            height: 140,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#1DCC70"],
        tooltip: {
            enabled: true,
        },
    },
};

export const chartExample4: Graph = {
    series: [
        {
            data: [
                512, 405, 666, 1090, 1309, 1400, 1500, 700, 1000, 2000, 512,
                405, 666, 1090, 1309, 1400, 1500,
            ],
        },
    ],
    options: {
        chart: {
            type: "area",
            width: "100%",
            height: 140,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#1DCC70"],
        tooltip: {
            enabled: true,
        },
    },
};

export const chartExample5: Graph = {
    series: [
        {
            data: [512, 405, 666, 1090, 1309, 1400, 1309, 1400, 1500],
        },
    ],
    options: {
        chart: {
            type: "area",
            width: "100%",
            height: 140,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#1DCC70"],
        tooltip: {
            enabled: true,
        },
    },
};
