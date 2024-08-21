


const chartData = [
    // { day: "2024-08-01", knight: 1.86, btc: 1 },
    // { day: "2024-08-02", knight: 3.05, btc: 1 },
    // { day: "2024-08-03", knight: 2.37, btc: 1 },
    // { day: "2024-08-04", knight: 0.6, btc: 1 },
    // { day: "2024-08-05", knight: 1.29, btc: 1 },
    // { day: "2024-08-06", knight: 2.14, btc: 1 },
    // { day: "2024-08-07", knight: 1.86, btc: 1 },
    // { day: "2024-08-08", knight: 3.05, btc: 1 },
    // { day: "2024-08-09", knight: 2.37, btc: 1 },
    // { day: "2024-08-10", knight: 0.6, btc: 1 },
    // { day: "2024-08-11", knight: 1.29, btc: 1 },
    // { day: "2024-08-12", knight: 2.14, btc: 1 },
    // { day: "2024-08-13", knight: 1.86, btc: 1 },
    // { day: "2024-08-14", knight: 3.05, btc: 1 },
    // { day: "2024-08-15", knight: 2.37, btc: 1 },
    // { day: "2024-08-16", knight: 0.6, btc: 1 },
    // { day: "2024-08-17", knight: 1.29, btc: 1 },
    // { day: "2024-08-18", knight: 2.14, btc: 1 },
    // { day: "2024-08-19", knight: 1.86, btc: 1 },
    // { day: "2024-08-20", knight: 3.05, btc: 1 },
    // { day: "2024-08-21", knight: 2.37, btc: 1 },
    // { day: "2024-08-22", knight: 0.6, btc: 1 },
    // { day: "2024-08-23", knight: 1.29, btc: 1 },
    // { day: "2024-08-24", knight: 2.14, btc: 1 },
    // { day: "2024-08-25", knight: 1.86, btc: 1 },
    // { day: "2024-08-26", knight: 3.05, btc: 1 },
    // { day: "2024-08-27", knight: 2.37, btc: 1 },
    // { day: "2024-08-28", knight: 0.6, btc: 1 },
    // { day: "2024-08-29", knight: 1.29, btc: 1 },
    // { day: "2024-08-30", knight: 2.14, btc: 1 },
]

export const genChartData = () => {
    // do it for day, knight, and btc

    const chartData = [];

    let start=1;

    for (let i = 0; i < 20; i++) {
        chartData.push({
            day: `2024-08-${i+1}`,
            knight: start,
            btc: 1
        });

        start+=Math.random()*2
        start-=Math.random()*2

        if(start<0.1){
            start=0.1
        }
    }
    return chartData;
}
