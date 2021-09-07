import React, { useState } from "react";
import Chart from "react-apexcharts";

function LiveChart(props) {
    const [options, setOptions] = useState({
        chart: {
            id: "stocks",
            animations: {
                enabled: false,
                dyanmicAnimation: {
                    enabled: true,
                    speed: 100,
                }
            },
            background: "transparent",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: "13px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    colors: "#a0b2ba",
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#a0b2ba",
            strokeDashArray: 1,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        stroke: { 
            curve: "smooth",
            width: 2,
        },
        theme: {
            monochrome: {
                enabled: true,
                color: "#ef9a9a",
                shadeTo: "light",
            },
        },
        hover: {
            enabled: false,
        },
    });

    return (

            <div class = "chart" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'}}>
                <br/>
                <Chart options={options} 
                       series={[{data: props.tickerData}]} 
                       type="line" width="600px" height="250px"/>
            </div>
    )
};

export default LiveChart;