import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class HightChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Points',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositon: 'right'
    }

    render() {
        return (
            <div>
                <h1> van anh xinh gai</h1>
                <Bar
                    data={this.state.charData}
                    height={35} 
                    width={100}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'largest',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPositon
                        },
                        animation:{
                            animateScale: false
                        }
                    }}
                />
            </div>
        );
    }
}

export default HightChart;