import { Box, Button, InputBase, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory } from "react-router-dom";
import IconDetails from '../utils/IconDetails';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Dashboard from './Dashboard';
import EthereumLogo from '../assets/ethereum.png'

const navigation = {
	"0": {
		"sortOrder": "0",
		"icon": 'Dashboard',
		"displayName": "Dashboard",
		"path": "/home/dashboard"
	},
	"1": {
		"sortOrder": "1",
		"icon": "Home",
		"displayName": "Home",
		"path": "/home/dashboard"
	},
	"2": {
		"sortOrder": "2",
		"icon": "Mail",
		"displayName": "Mail",
		"path": "/home/dashboard"
	},
	"3": {
		"sortOrder": "3",
		"icon": "Inbox",
		"displayName": "Inbox",
		"path": "/home/dashboard"
	},
	"4": {
		"sortOrder": "4",
		"icon": "Note",
		"displayName": "Note",
		"path": "/home/dashboard"
	},
	"5": {
		"sortOrder": "5",
		"icon": "Comment",
		"displayName": "Comment",
		"path": "/home/dashboard"
	},
	"6": {
		"sortOrder": "6",
		"icon": "Sms",
		"displayName": "Sms",
		"path": "/home/dashboard"
	},
	"7": {
		"sortOrder": "8",
		"icon": "Settings",
		"displayName": "Settings",
		"path": "/setting"
	}
}

let drawerWidth = 140;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			// '& .MuiListItemIcon-root': {
			// 	marginLeft: '35%'
			// }
		},
		appBar: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			backgroundColor: '#262b40',
			color: 'white'
		},
		search: {
			position: 'relative',
			color: 'white',
			display: 'flex',
			flexDirection: 'row-reverse',
			borderRadius: 20,
			backgroundColor: fade("#A6A6A6", 0.15),
			'&:hover': {
				backgroundColor: fade('#DEDEDE', 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			borderColor: '#000000',
			width: '30%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(3),
				width: 'auto',
			}
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
			marginRight: '18%'
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		drawer: {
			width: drawerWidth,
			// flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		// necessary for content to be below app bar
		toolbar: theme.mixins.toolbar,
		content: {
			flexGrow: 1,
			backgroundColor: theme.palette.background.default,
			padding: theme.spacing(1),
		},
		update: {
			fontSize: "0.7rem",
			height: 17,
			lineheight: 15,
			minWidth: 15,
			textAlign: "center",
			marginLeft: 2,
			marginTop: '6%',
			borderRadius: 10,
			color: "white",
			backgroundColor: "lightgray",
			padding: "0 3px",
		}
	}),
);

export default function PermanentDrawerLeft(props: any) {

	const classes = useStyles();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [cartQty, setCartQty] = useState(4);
	const [navContent, setNavContent] = useState({
		"menu": {},
		"menuIndex": "0",
		"subMenuIndex": "0"
	})
	const { t, i18n } = useTranslation("main");

	const onMainMenuClick = (menuIndex: string) => {
		const menuData = { ...navContent }
		menuData["menuIndex"] = menuIndex
		console.log("menu index", menuData.menu[menuIndex].path)
		history.push(menuData.menu[menuIndex].path)
		setNavContent(menuData)
	}

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (instruction) => {
		setAnchorEl(null);
		if (instruction == "logout") {
		}

	};
	useEffect(() => {
		setNavContent({
			"menu": navigation,
			"menuIndex": "0",
			"subMenuIndex": "0"
		})
		history.push("/home/dashboard")
	}, [])

	const renderMainMenu = () => {
		return (
			<List style={{ marginTop: '30px' }}>
				{Object.keys(navContent.menu).sort().map((navItem: any, index: any) => (
					<ListItem
						onClick={() => onMainMenuClick(navItem)}
						style={(navContent["menu"][navItem]["sortOrder"] === navContent.menuIndex) ? {
							height: '50px'
							// backgroundColor: '#0078D7',
							// borderTopLeftRadius: '10px',
							// borderBottomLeftRadius: '10px'
						} : { height: '50px' }} button key={navContent["menu"][navItem]["AppId"]}>
						<Tooltip title={navContent["menu"][navItem]["displayName"]}>
							<ListItemIcon style={{ marginLeft: '34%' }} >
								<IconDetails icon={navContent["menu"][navItem].icon}></IconDetails>
							</ListItemIcon>
						</Tooltip>
					</ListItem>
				))}
			</List>
		)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} >
				<Toolbar style={{ justifyContent: 'space-between' }} >
					<div style={{ display: 'flex' }}>
						<Typography variant="h6" noWrap color="primary">
							CRYPTO Wallet
					</Typography>
						<div className={classes.search} style={{ flex: 0.5 }}>
							<InputBase
								placeholder="Type Something"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						<Box display="flex" marginLeft="2%" marginTop='4%'>
							<ForumIcon
								style={{ color: "#757575", cursor: "pointer" }}
								onClick={(event) => {
									// history.push('/message');
								}} />
							{cartQty !== 0 ? (
								<div className={classes.update}>{cartQty}</div>
							) : null}
						</Box>
						<div style={{ display: 'flex', marginLeft: "2%" }}>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle style={{ color: '#0078D7' }} />
							</IconButton>
							<Typography style={{ color: '#3572A7', fontSize: '12px', fontWeight: 'bold', marginTop: '11%', width: 100 }}>Lukas Josseph</Typography>
						</div>
						<Button variant='outlined' style={{ borderRadius: 20, borderColor: '#3572A7', marginLeft: "2%", height: 30, marginTop: '3%' }}>
							<HeadsetMicIcon />
							<Typography style={{ color: 'white' }}>Support</Typography>
						</Button>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				{/* <Divider /> */}
				<div style={{
					display: "flex",
					flexDirection: 'row',
					height: '100%'
				}}>
					<div
						style={{
							display: "flex",
							flexDirection: 'column',
							width: '100%',
							backgroundColor: '#004f96',
							height: '100%'
						}}
					>
						<div style={{
							height: '17%', display: 'flex', justifyContent: 'center', alignContent: 'center',
							backgroundColor: '#262b40',
							// color: 'white'
						}}>
							<img src={EthereumLogo} style={{ width: '50%', height: 54, marginTop: '10px' }} />
						</div>
						<div style={{
							height: '83%',
							backgroundColor: '#262b40',
							color: 'white'
						}}>
							{renderMainMenu()}
						</div>
					</div>

				</div>

			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route path="/home/dashboard" component={Dashboard} />
				</Switch>
			</main>
		</div>
	);
}
