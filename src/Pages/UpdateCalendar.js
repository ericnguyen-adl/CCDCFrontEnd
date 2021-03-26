import React, { useEffect, useState } from "react";
import appConfig from './../config';

function UpdateCalendar(props) {
  const username = props.username; 

  const [calendarList, setCalendarList] = useState([]);
  const baseURL = appConfig.BaseURL;

  const [currentCalendarCode, setCurrentCalendarCode] = useState(""); 
  const [nonWorkingDayCode, setNonWorkingDayCode] = useState(""); 
  const [nonWorkingDayName, setNonWorkingDayName] = useState(""); 
  const [nonWorkingDayList, setNonWorkingDayList] = useState([]); 

  const [dateToAdd, setDateToAdd] = useState(""); 


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchNonWorkingDayList();
  }, [currentCalendarCode, nonWorkingDayList]);

  const fetchNonWorkingDayList = () => {
    var request = new XMLHttpRequest();
    request.open('GET', baseURL + 'getNonWorkingDaysForCalendar' + '/' + currentCalendarCode, true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        setNonWorkingDayList(data);
      }
    }
    request.send()
  }

  const fetchData = () => {
    var request = new XMLHttpRequest();
    request.open('GET', baseURL + 'getCalendarsForUser/' + username, true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        setCalendarList(data);
      }
    }
    request.send()
  }

  const addNonWorkingDate = () => {
    if(currentCalendarCode == "Select Calendar" || currentCalendarCode == "") {
      alert("Please select a calendar to calculate"); 
    } else {
      var request = new XMLHttpRequest();
          request.open('POST', baseURL + 'addNonWorkingDayToCalendar' + '?calendarCode=' + currentCalendarCode
            + '&nonWorkingDayCode=' + nonWorkingDayCode + '&nonWorkingDayName=' + nonWorkingDayName + '&date=' + dateToAdd, true)
          request.onload = function () {
            var data = JSON.parse(this.response);
            if (data != null) {
              setNonWorkingDayList(data); 
              console.log(data); 
            }
          }
          request.send();
    }
  }

  const deleteNonWorkingDay = (nonWorkingDayCodeToDelete) => {
    var request = new XMLHttpRequest();
    request.open('POST', baseURL + 'deleteNonWorkingDayFromCalendar' + '?calendarCode=' + currentCalendarCode + '&nonWorkingDayCode=' + nonWorkingDayCodeToDelete, true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        setNonWorkingDayList(data);
      }
    }
    request.send()
  }

  return (
    <div class="tabContainer">
      <div class="pageTitle"> Update your calendar</div>
      <div class="infoText">Update the Non-Working days for your calendar</div>
      
      <table class="tableStyle" >

        <tr class="rowContainer">
          <td class="removeDateTableRow"><label>Select a calendar to use:</label></td>
          <td class="removeDateTableRow">
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
          <td colspan="2" class="removeDateTableRow">
            <label>Add a new Non-Working day:</label>
          </td>
        </tr>

        <tr>
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Code: </label>
          </td>
          <td class="removeDateTableRow">
            <input id="inputCodeText" name="newDateCodeTextBox" type="text" onChange={e => setNonWorkingDayCode(e.target.value)}></input>
          </td>
        </tr>

        <tr>
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Name: </label>
          </td>
          <td class="removeDateTableRow">
            <input id="inputNameText" name="newDateNameTextBox" type="text" onChange={e => setNonWorkingDayName(e.target.value)}></input>
          </td>
        </tr>

        <tr>
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Date: </label>
          </td>
          <td  class="removeDateTableRow">
            <input id="datePicker" type="date" name="newDateInput" onChange={e => setDateToAdd(e.target.value)}></input>
          </td>
        </tr>
        
        <tr>
          <td class="removeDateTableRow"></td>
          <td class="removeDateTableRow">
            <input id="addNonWorkingdayButton" type="button" value="Add" onClick = {()=>addNonWorkingDate()}></input>
          </td>
        </tr>

        <tr class="rowContainer">
          <td colSpan="2" class="removeDateTableRow" id="removeNWdaysTitle">
            <label>Current Nonworking days:</label>
          </td>
        </tr>

        <tr class="rowContainer">

          <td colspan="2"  class="removeDateTableRow">
            <table class="removeDateTable">
              <tr>
                <td class="removeDateTableHeader">Name</td>
                <td class="removeDateTableHeader">Date</td>
                <td class="removeDateTableHeader">Action</td>
              </tr>
              {
                nonWorkingDayList.map((nonWorkingDay, index) => (
                  <tr>
                    <td class="removeDateTableRow">{nonWorkingDay.nwdayName}</td>
                    <td class="removeDateTableRow">{nonWorkingDay.date}</td>
                    <td class="removeDateTableRow">
                      <input id="removeNonWorkingdayButton" type="button" value="Remove" onClick = {()=>deleteNonWorkingDay(nonWorkingDay.nwdayCode)}></input>
                    </td>
                  </tr>
                ))
              }
            </table>
          </td>
          <td>
          </td>
        </tr>
      </table>
      {/* <input id="updateButton" type="button" value="Save"></input>
      <input id="cancelButton" type="button" value="Cancel"></input> */}
    </div>
  );
}

export default UpdateCalendar;