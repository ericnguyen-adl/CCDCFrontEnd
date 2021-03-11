


function UpdateCalendar() {
  return (
    <div class="tabContainer">
      <div class="pageTitle"> Update your calendar</div>
      <div class="infoText">Update the Non-Working days for your calendar</div>
      
      <table class="tableStyle" >

        <tr class="rowContainer">
          <td class="removeDateTableRow"><label>Select a calendar to use:</label></td>
          <td class="removeDateTableRow">
            <select name="calendar" id="calendar">
              <option value="">Select Calendar</option>
              <option value="South Australia Calendar">South Australia Calendar</option>
              <option value="Victoria Calendar">Victoria Calendar</option>
              <option value="New South Wales Calendar">New South Wales Calendar</option>
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
            <label class="updateCalendarLabels">Name: </label>
          </td>
          <td class="removeDateTableRow">
            <input id="inputText" name="newDateNameTextBox"type="text"></input>
          </td>
        </tr>

        <tr>
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Date: </label>
          </td>
          <td  class="removeDateTableRow">
            <input id="datePicker" type="date" name="newDateInput"></input>
          </td>
        </tr>
        
        <tr>
          <td class="removeDateTableRow"></td>
          <td class="removeDateTableRow">
            <input id="addNonWorkingdayButton" type="button" value="Add"></input>
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
              <tr>
                <td class="removeDateTableRow">New Year</td>
                <td class="removeDateTableRow">2021-01-01</td>
                <td class="removeDateTableRow"><input id="removeNonWorkingdayButton" type="button" value="Remove"></input></td>

              </tr>
              <tr>
                <td class="removeDateTableRow">New Year</td>
                <td class="removeDateTableRow">2021-01-01</td>
                <td class="removeDateTableRow"><input id="removeNonWorkingdayButton" type="button" value="Remove"></input></td>

              </tr>
              <tr>
                <td class="removeDateTableRow">New Year</td>
                <td class="removeDateTableRow">2021-01-01</td>
                <td class="removeDateTableRow"><input id="removeNonWorkingdayButton" type="button" value="Remove"></input></td>

              </tr>
            </table>
          </td>
          <td>
          </td>
        </tr>

      </table>


      <input id="updateButton" type="button" value="Save"></input>
      <input id="cancelButton" type="button" value="Cancel"></input>
    </div>

  );
}

export default UpdateCalendar;