import React from 'react';
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from './Pages/Home';
import CreateCalendar from './Pages/CreateCalendar';
import DeleteCalendar from './Pages/DeleteCalendar';
import UpdateCalendar from './Pages/UpdateCalendar';
import UserAdmin from './Pages/UserAdmin';

function App() {
  return (
    <div className="with-react-tabs">
      <div className="headerStyle">
        <div>
          Customized Commit Date Calculator
        </div>
        <div>
        
            <button id = "myLoginButton">Log in</button>
        </div>
      </div>

      <div className="tabStyle">
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Update Calendar</Tab>
            <Tab>Delete Calendar</Tab>
            <Tab>Create Calendar</Tab>
            <Tab>User Admin</Tab>
          </TabList>

          <TabPanel>
            <div>
              <Home></Home>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <UpdateCalendar></UpdateCalendar>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <DeleteCalendar></DeleteCalendar>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <CreateCalendar></CreateCalendar>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <UserAdmin></UserAdmin>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}



export default App;


