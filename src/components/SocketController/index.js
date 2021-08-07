import React from 'react';
import { useParams } from 'react-router-dom';
import Switch from "react-switch";
import { db } from '../../services/firebase';
import Chart from "react-apexcharts";
import Button from '../Button';
const SocketController = () => {
    let { id } = useParams();

    const [toggle, setToggle] = React.useState(false);


    const _setToggle = async (value) => {
        var updateOptions = {
            toggle: value
        }
        if(value){
            updateOptions['lastToggleOn'] = new Date()
        }
        let res = await db.ref(`/${id}/1`).update(updateOptions)
        setToggle(value)
    }

    const setInitialState = async () => {
        let res = await db.ref(`/${id}/1`).get()
        setToggle(res.val())
    }

    React.useEffect(() => {
       setInitialState()
    }, [])

    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h6>{id}</h6>
        <div style={{ width: '60vw', minWidth: 300, alignItems: 'center', display: "flex", justifyContent: 'space-evenly', borderRadius: 10, padding: 20, height: 300, border: "1px solid #555" }}>
            <div style={{ position: "relative", border: '1px solid #aaa', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 100, display: "flex", height: 120, width: 120, justifyContent: "center", alignItems: "center" }}>
                <p style={{ position: "absolute", top: -40, fontSize: 16, color: '#aaa' }}>220V</p>
                <Switch
                    checked={toggle}
                    onChange={_setToggle}
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
                <p style={{ fontSize: 16, marginLeft: 20, color: '#aaa' }}>1</p>
                <p style={{ position: "absolute", bottom: -40, fontSize: 16, color: '#aaffaa' }}>8:2</p>
            </div>


        </div>

        <h6>Weekly hours usage</h6>
        <div style={{ marginTop: 20 }}>
            <Chart

                options={{
                    markers: {
                        colors: ['#F44336', '#E91E63', '#9C27B0']
                    },
                    stroke: {
                        curve: "smooth"
                    },

                    chart: {

                        background: "rgba(255,255,255,0.05)",
                        width: 300,
                        id: "basic-bar",

                    },
                    tooltip: {

                    },
                    theme: {
                        mode: 'dark'
                    },

                    grid: {

                        show: true,
                        borderColor: '#fff',
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
                            opacity: 1
                        },
                        column: {
                            colors: undefined,
                            opacity: 1
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
                series={[
                    {
                        name: "Hours usage",
                        data: [2, 5, 0, 12, 15, 13, 8]
                    }
                ]}
                type="area"
                width="400"
            />
        </div>
    </div>
}

export default SocketController;