import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import List from './List';

class PieChart extends Component {
 
    constructor(props){
        super(props);
        this.state ={
            pieData:{
                labels: [
                    'Female',
                    'Male',
                  ],
                  datasets: [{
                    data: [3,1],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    ]
                  }]
                }
        }
    }
    
    render() {
        console.log("dataa",this.props);
        return (
            <div>
                <h1> van anh xinh gaiii</h1>
                <Pie 
                     data={this.state.pieData}
                     height={300} 
                     width={400}
                     options={{
                        maintainAspectRatio: false,
                        responsive: false,
                        legend: {
                          position: 'left',
                          labels: {
                            boxWidth: 10
                          }
                        }
                     }}
                />
            </div>
        );
    }
}

export default PieChart;