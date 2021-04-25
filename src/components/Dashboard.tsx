import { Box, Button, Card, Divider, FormControl, Select, TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import BitcoinLogo from '../assets/bitcoin.png';
import DashLogo from '../assets/dash.png';
import EthereumLogo from '../assets/ethereum.png';
import ZcashLogo from '../assets/zcash.png';
import { useStyles } from "./DashboardStyle";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const data = [
    {
        name: '23 Aug',
        eth: 7,
        amt: 7,
    },
    {
        name: '6 Sep',
        eth: 6,
        amt: 6,
    },
    {
        name: '20 Sep',
        eth: 3,
        amt: 3,
    },
    {
        name: '24 Sep',
        eth: 11,
        amt: 11,
    },
    {
        name: '8 Oct',
        eth: 16,
        amt: 16,
    },
    {
        name: '12 Oct',
        eth: 19,
        amt: 19,
    },
    {
        name: '20 Nov',
        eth: 14,
        amt: 14,
    },
];

let dropDownOpt = [
    { 'name': 'ETH', 'amount': 0.534574 },
    { 'name': 'DASH', 'amount': 0.694574 },
    { 'name': 'ZC', 'amount': 1.534574 },
    { 'name': 'BTC', 'amount': 2.894574 }
]

const Dashboard = () => {
    const classes = useStyles();
    const [selectedAmount, setSelectedAmount] = useState(dropDownOpt[0].amount);
    const [selectedName, setSelectedName] = useState(dropDownOpt[0].name);
    const percentage = 79;
    const percentage1 = 10;
    const percentage2 = 5;

    const handleChange = (event) => {
        console.log("event.target.name", event.target.name)
        setSelectedAmount(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Grid container spacing={1} >
                        <Grid item xs={4}>
                            <Typography>Overview</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>My Wallets</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{ color: 'skyblue', textDecoration: 'underline', cursor: 'pointer' }}>Add Wallets</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} >
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box display='flex' justifyContent='space-between'>
                                    <Typography>4</Typography>
                                    <Typography>3545</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' style={{ marginTop: '2%' }}>
                                    <Typography>Wallets</Typography>
                                    <Typography>Transactions</Typography>
                                </Box>
                                <Typography style={{ marginTop: '16%' }}>Current Balance</Typography>
                                <Typography style={{ marginTop: '2%' }}>5.4290 USD</Typography>
                                <div style={{ marginTop: '15%', display: 'flex', justifyContent: 'space-between' }}>
                                    <Box display='flex'>
                                        <Typography>2.3422 USD</Typography>
                                        <Typography style={{ marginLeft: 1 }}>+ 11%</Typography>
                                    </Box>
                                    <Button variant='outlined' style={{ borderRadius: 20, borderColor: '#3572A7', height: 20, color: 'white' }}>Buy</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Card style={{ paddingLeft: 5, backgroundColor: '#4c5478', color: 'white' }} >
                                            <Box display='flex' marginTop='5px'>
                                                <img src={EthereumLogo} style={{ width: '25%', height: 45 }} />
                                                <Box>
                                                    <Typography>ETH</Typography>
                                                    <Typography>Etherium</Typography>
                                                </Box>
                                            </Box>
                                            <Typography style={{ marginTop: '2%' }}>0.221746</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card style={{ paddingLeft: 5, backgroundColor: '#4c5478', color: 'white' }}>
                                            <Box display='flex' marginTop='5px'>
                                                <img src={BitcoinLogo} style={{ width: '33%', height: 24 }} />
                                                <Typography>BTC</Typography>
                                            </Box>
                                            <Typography style={{ marginTop: '40%' }}>Bitcoin</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card style={{ paddingLeft: 5, backgroundColor: '#4c5478', color: 'white' }}>
                                            <Box display='flex' marginTop='5px'>
                                                <img src={DashLogo} style={{ width: '33%', height: 24 }} />
                                                <Typography>DASH</Typography>
                                            </Box>
                                            <Typography style={{ marginTop: '40%' }}>Dash</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card style={{ paddingLeft: 5, backgroundColor: '#4c5478', color: 'white' }}>
                                            <Box display='flex' marginTop='5px'>
                                                <img src={ZcashLogo} style={{ width: '33%', height: 24 }} />
                                                <Typography>ZC</Typography>
                                            </Box>
                                            <Typography style={{ marginTop: '40%' }}>Zcash</Typography>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={5}>
                                        <Paper className={classes.paper}>
                                            <Box display='flex' justifyContent='space-around'>
                                                <CircularProgressbar value={percentage} />
                                                <Typography style={{ fontWeight: 'bold' }}>{`${percentage}%`}</Typography>
                                                <Typography >Bitcoin</Typography>
                                                <Typography >...</Typography>
                                            </Box>
                                            <Box display='flex' marginTop='5%' justifyContent='space-around'>
                                                <CircularProgressbar value={percentage1} />
                                                <Typography style={{ fontWeight: 'bold' }}>{`${percentage1}%`}</Typography>
                                                <Typography >Etherium</Typography>
                                                <Typography >...</Typography>
                                            </Box>
                                            <Box display='flex' marginTop='5%' justifyContent='space-around'>
                                                <CircularProgressbar value={percentage2} />
                                                <Typography style={{ fontWeight: 'bold' }}>{`${percentage2}%`}</Typography>
                                                <Typography >Dash</Typography>
                                                <Typography >...</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Paper style={{ padding: 2, backgroundColor: '#4c5478', color: 'white' }}>
                                            <Box display='flex' justifyContent='space-between'>
                                                <Box display='flex' justifyContent='space-between' width='100%'>
                                                    <Typography style={{ fontSize: 12, marginTop: '4%' }}>WALLET</Typography>
                                                    <Select
                                                        native
                                                        // value={selectedAmount.name}
                                                        onChange={handleChange}
                                                        style={{ fontSize: 12, marginRight: '4%', color: 'white' }}
                                                    >
                                                        {
                                                            dropDownOpt.map((item: any, i: any) => {
                                                                return (
                                                                    <option key={i} value={item.amount}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </Box>
                                                <Box display='flex' justifyContent='space-between' width='100%'>
                                                    <Typography style={{ fontSize: 12, marginLeft: '4%', marginTop: '4%' }}>AMOUNT:</Typography>
                                                    <Typography style={{ fontSize: 12, marginTop: '4%' }}>{selectedAmount}</Typography>
                                                </Box>
                                            </Box>
                                            <Box display='flex' justifyContent='space-between' marginTop='8%'>
                                                <Typography style={{ fontSize: 12, marginTop: '3%', width: '22%' }}>SEND TO</Typography>
                                                <FormControl>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        id="text-email-address"
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email address"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </FormControl>
                                            </Box>
                                            <Box display='flex' justifyContent='space-between' marginTop='7%'>
                                                <Typography style={{ fontSize: 12, marginTop: '7%' }}>Receive {selectedName}</Typography>
                                                <Button variant='outlined' style={{ borderRadius: 20, borderColor: '#3572A7', marginLeft: "2%", height: 30, marginTop: '3%', color: 'white' }}>
                                                    Send
                                                </Button>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} >
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                                    <Typography>Etherium Chart</Typography>
                                    <Box display='flex' justifyContent='space-around' width='40%'>
                                        <Typography>1m</Typography>
                                        <Typography>3m</Typography>
                                        <Typography>6m</Typography>
                                        <Typography>1y</Typography>
                                        <Typography>All</Typography>
                                    </Box>
                                </Box>
                                <LineChart
                                    width={450}
                                    height={235}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        // right: 30,
                                        left: -30,
                                        bottom: 5,
                                    }}
                                    // style={{color: 'white',backgroundColor: 'white'}}
                                >
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="name" style={{backgroundColor: 'white'}} stroke="white" />
                                    <YAxis style={{backgroundColor: 'white'}} stroke="white" />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Line type="monotone" dataKey="eth" stroke="#82ca9d" activeDot={{ r: 8 }} dot={false} />
                                </LineChart>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={{ padding: 1, backgroundColor: '#4c5478', color: 'white' }} >
                                <Box display='flex' justifyContent='space-between' marginBottom='10%' marginTop='2%'>
                                    <Typography>Markets</Typography>
                                    <Box display='flex' justifyContent='space-around' width='60%'>
                                        <Typography>USD</Typography>
                                        <Typography>ETH</Typography>
                                        <Typography>BTC</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex'>
                                    <Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>Etherium</Typography>
                                            <Typography style={{ marginLeft: '4%' }}>1.57%</Typography>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>10324</Typography>
                                            <Typography>USD</Typography>
                                        </Box>
                                    </Box>
                                    <LineChart
                                        width={120}
                                        height={50}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            // right: 30,
                                            left: -10,
                                            bottom: 5,
                                        }}
                                    >
                                        <Tooltip />
                                        <Line type="monotone" dataKey="eth" stroke="#82ca9d" activeDot={{ r: 8 }} dot={false} />
                                    </LineChart>
                                </Box>
                                <Divider style={{ marginTop: '3%', marginBottom: '3%', backgroundColor: '#616a91' }} />
                                <Box display='flex'>
                                    <Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>Etherium</Typography>
                                            <Typography style={{ marginLeft: '4%' }}>-0.57%</Typography>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>10324</Typography>
                                            <Typography>USD</Typography>
                                        </Box>
                                    </Box>
                                    <LineChart
                                        width={120}
                                        height={50}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            // right: 30,
                                            left: -10,
                                            bottom: 5,
                                        }}
                                    >
                                        <Tooltip />
                                        <Line type="monotone" dataKey="eth" stroke="red" activeDot={{ r: 8 }} dot={false} />
                                    </LineChart>
                                </Box>
                                <Divider style={{ marginTop: '3%', marginBottom: '3%', backgroundColor: '#616a91' }} />
                                <Box display='flex'>
                                    <Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>Etherium</Typography>
                                            <Typography style={{ marginLeft: '4%' }}>-1.74%</Typography>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>10324</Typography>
                                            <Typography>USD</Typography>
                                        </Box>
                                    </Box>
                                    <LineChart
                                        width={120}
                                        height={50}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            // right: 30,
                                            left: -10,
                                            bottom: 5,
                                        }}
                                    >
                                        <Tooltip />
                                        <Line type="monotone" dataKey="eth" stroke="#82ca9d" activeDot={{ r: 8 }} dot={false} />
                                    </LineChart>
                                </Box>
                                <Divider style={{ marginTop: '3%', marginBottom: '3%', backgroundColor: '#616a91' }} />
                                <Box display='flex'>
                                    <Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>Etherium</Typography>
                                            <Typography style={{ marginLeft: '4%' }}>2.57%</Typography>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Typography>10324</Typography>
                                            <Typography>USD</Typography>
                                        </Box>
                                    </Box>
                                    <LineChart
                                        width={120}
                                        height={50}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            // right: 30,
                                            left: -10,
                                            bottom: 5,
                                        }}
                                    >
                                        <Tooltip />
                                        <Line type="monotone" dataKey="eth" stroke="red" activeDot={{ r: 8 }} dot={false} />
                                    </LineChart>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={{ marginTop: 28 }}>
                    <Paper className={classes.paper} >
                        <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                            <Typography>Transactions</Typography>
                            <Box display='flex' justifyContent='space-around' width='55%'>
                                <Typography>ALL</Typography>
                                <Typography>SEND</Typography>
                                <Typography>RECENT</Typography>
                            </Box>
                        </Box>
                        <Paper elevation={1} style={{ padding: '2%', marginTop: '4%', backgroundColor: '#616a91', color: 'white' }}>
                            <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                                <Typography>13.54, 12 Oct 2018</Typography>
                                <Box display='flex' justifyContent='space-around' width='55%'>
                                    <ArrowUpwardIcon />
                                    <Typography style={{ marginLeft: '2%' }}>0.0000</Typography>
                                    <Typography style={{ marginLeft: '2%' }}>ETH</Typography>
                                </Box>
                            </Box>
                            <Typography>Some Message</Typography>
                        </Paper>
                        <Paper elevation={1} style={{ padding: '2%', marginTop: '4%', backgroundColor: '#616a91', color: 'white' }}>
                            <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                                <Typography>13.54, 12 Oct 2018</Typography>
                                <Box display='flex' justifyContent='space-around' width='55%'>
                                    <ArrowUpwardIcon />
                                    <Typography style={{ marginLeft: '2%' }}>0.0000</Typography>
                                    <Typography style={{ marginLeft: '2%' }}>ETH</Typography>
                                </Box>
                            </Box>
                            <Typography>Some Message</Typography>
                        </Paper>
                        <Paper elevation={1} style={{ padding: '2%', marginTop: '4%', backgroundColor: '#616a91', color: 'white' }}>
                            <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                                <Typography>13.54, 12 Oct 2018</Typography>
                                <Box display='flex' justifyContent='space-around' width='55%'>
                                    <ArrowUpwardIcon />
                                    <Typography style={{ marginLeft: '2%' }}>0.0000</Typography>
                                    <Typography style={{ marginLeft: '2%' }}>ETH</Typography>
                                </Box>
                            </Box>
                            <Typography>Some Message</Typography>
                        </Paper>
                        <Paper elevation={1} style={{ padding: '2%', marginTop: '4%', backgroundColor: '#616a91', color: 'white' }}>
                            <Box display='flex' justifyContent='space-between' marginBottom='2%'>
                                <Typography>13.54, 12 Oct 2018</Typography>
                                <Box display='flex' justifyContent='space-around' width='55%'>
                                    <ArrowUpwardIcon />
                                    <Typography style={{ marginLeft: '2%' }}>0.0000</Typography>
                                    <Typography style={{ marginLeft: '2%' }}>ETH</Typography>
                                </Box>
                            </Box>
                            <Typography>Some Message</Typography>
                        </Paper>
                    </Paper>
                    <Paper className={classes.paper} style={{ marginTop: '2%', backgroundColor: '#4c5478', color: 'white' }}>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography>News</Typography>
                            <Typography>...</Typography>
                        </Box>
                        <Box display='flex' justifyContent='space-between' marginTop='5%'>
                            <img src='https://cdnassets.hw.net/dims4/GG/8032a24/2147483647/resize/480x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F7e%2F18%2F8d07e9c34a2882475c819bd9b7b0%2F821424831-mppat-balmori-aerial-hero-tcm20-2158065.jpg' style={{ width: '50%', height: 54, marginTop: '10px' }} />
                            <Box marginLeft='4%'>
                            <Typography>Korea Moves to Limit Crypto Mining Chips Imports</Typography>
                            <Typography>19.54 20 Oct 2018</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;