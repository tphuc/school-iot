import React from 'react';
import { useParams } from 'react-router-dom';
import Switch from "react-switch";
import { db } from '../../services/firebase';
import Chart from "react-apexcharts";
const SocketController = () => {
    let { id } = useParams();

    return <div style={{ display: "flex",  flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h6>{id}</h6>
        <div style={{border:'1px solid #aaa', borderRadius:8, display:"flex", height:100, width:100, justifyContent:"center", alignItems:"center"}}>

        <Switch
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
        />


        </div>

        <Chart
        
              options={{
                  stroke: {
                      curve:"smooth"
                  },
                  
                chart: {
                  id: "basic-bar",

                },
                tooltip: {
                    
                },
                
                grid: {
                    show: true,
                    borderColor: '#90A4AE',
                    strokeDashArray: 0,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },   
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },  
                    row: {
                        colors: undefined,
                        opacity: 0.5
                    },  
                    column: {
                        colors: undefined,
                        opacity: 0.5
                    },  
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },  
                },
                xaxis: {
                
                  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sar', 'Sun']
                }
              }}
              series = {[
                {
                  name: "series-1",
                  data: [2, 5, 0, 12, 15, 13, 8]
                }
              ]}
              type="area"
              width="500"
            />
    </div>
}

export default SocketController;