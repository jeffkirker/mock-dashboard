import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./DoughnutChart.module.css";

export default class DonutGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        var myDoughnutChart = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [10, 20, 30]
                }],
            
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            },
            options: {
                
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="donutChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
