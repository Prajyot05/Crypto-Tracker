import * as React from 'react';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from './Grid';
import List from "./List";
import "./tabscomponent.css"

export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
    backgroundColor: "var(--darkgrey)",
    // borderTop: "1px solid var(--blue)" 
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: "#3a80e9"
        }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"> {/* variant="fullWidth" */}
            <Tab label="Grid" value="grid" style={style}/>
            <Tab label="List" value="list" style={{...style, borderLeft: "2px solid var(--blue)"}}/>
          </TabList>
        </div>
        {coins.length === 0 && <h1 className='no-coins-found'>No Such Coins Found</h1>}
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i}/>
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-flex">
              {coins.map((coin, i) => (
                    <List coin={coin} key={coin.id}/>
              ))}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}