
import React, { useEffect, useState } from "react";
import appConfig from './../config';

function Home() {

  const [calendarList, setCalendarList] = useState([]);
  const [leadTimeInDays, setLeadTimeIndays] = useState(0);
  const [currentCalendarCode, setCurrentCalendarCode] = useState(""); 
  const [excludeWeekendOption, setExcludeWeekendOption] = useState(false);
  const [excludeHolidayOption, setExcludeHolidayOption] = useState(false);
  
  const [newDate, setNewDate] = useState("");

  const baseURL = appConfig.BaseURL;
  const currentDate = new Date().toISOString().slice(0,10); 

  const calculateDate = () => {
    if(currentCalendarCode == "Select Calendar" || currentCalendarCode == "") {
      document.getElementById("outputLabel").style.display = "none"; 
      alert("Please select a calendar to calculate"); 
    } else {
      if (excludeWeekendOption) {
        if (!excludeHolidayOption) {
          fetchNewDate("calculateNewDateExcludeWk");
        } else {
          var request = new XMLHttpRequest();
          request.open('POST', baseURL + 'calculateNewDateExcludeAll' + '?calendarCode=' + 'VIC'
            + '&processingDays=' + leadTimeInDays + '&startDate=' + currentDate, true)
          request.onload = function () {
            var data = JSON.parse(this.response);
            if (data != null) {
              console.log("New date = " + data);
              setNewDate(data); 
            }
          }
          request.send();
          document.getElementById("outputLabel").style.display = "block"; 
        }
      } else {
        // Not exclude anthing
        fetchNewDate("calculateNewDate");
      }

    }
    
  }

  const fetchNewDate = (calculatedMethod) => {
    var request = new XMLHttpRequest();
    request.open('POST', baseURL + calculatedMethod + '?startDate='
      + currentDate + '&processingDays=' + leadTimeInDays, true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        console.log("New date = " + data);
        setNewDate(data); 
      }
    }
    request.send();
    document.getElementById("outputLabel").style.display = "block"; 
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    var request = new XMLHttpRequest();
    request.open('GET', baseURL + 'calendars', true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        setCalendarList(data);
      }
    }
    request.send()
  }

  const changeExcludeWeekendOption = () => {
    setExcludeWeekendOption(!excludeWeekendOption);
  }

  const changeExcludeHolidayOption = () => {
    setExcludeHolidayOption(!excludeHolidayOption);
  }

  return (
    <div class="tabContainer">
      <div class="pageTitle"> Calculate the commit date</div>
      <div class="infoText">Calculate the expected commit date based on the lead time in days</div>
      <table class="tableStyle">
        <tr class="rowContainer">
          <td><label>Select a calendar to use:</label></td>
          <td>
            <select name="calendar" id="calendar" onChange = {e => setCurrentCalendarCode(e.target.value)}>
              <option>Select Calendar</option>
              {
                calendarList.map((option, index) => (
                  <option value={option.calendarCode} key={index}>{option.calendarName}</option>
                ))
              }
            </select>
          </td>
        </tr>
        <tr class="rowContainer">
          <td>
            <label>Enter the lead time in days: </label>
          </td>
          <td>
            <input id="inputText" type="text" onChange={e => setLeadTimeIndays(e.target.value)}></input>
          </td>
        </tr>
        <tr class="rowContainer">
          <td>
            <label>Exclude Weekend in Calculation </label>
          </td>
          <td>
            <input type="checkbox" onClick={() => changeExcludeWeekendOption()} ></input>
          </td>
        </tr>
        <tr class="rowContainer">
          <td>
            <label>Exclude Holiday in Calculation </label>
          </td>
          <td>
            <input type="checkbox" disabled = {!excludeWeekendOption} onClick={() => changeExcludeHolidayOption()}></input>
          </td>
        </tr>
      </table>
      <input id="calculateButton" type="button" value="Calculate commit date" onClick={() => calculateDate()}></input>
      <div id = "outputLabel">
        <label> The New Commit Date based on above setting and calendar is {newDate} </label>
      </div>
    </div>

  );
}

export default Home;