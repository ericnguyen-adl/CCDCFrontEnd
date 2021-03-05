


function UpdateCalendar() {
  return (
    <div class="tabContainer">
      <div class="pageTitle"> Update your calendar</div>
      <div class="infoText">Update the Non-Working days for your calendar</div>
      <table class="tableStyle">
        <tr class="rowContainer">
          <td><label>Select a calendar to use:</label></td>
          <td>
            <select name="calendar" id="calendar">
              <option value="">Select Calendar</option>
              <option value="South Australia Calendar">South Australia Calendar</option>
              <option value="Victoria Calendar">Victoria Calendar</option>
              <option value="New South Wales Calendar">New South Wales Calendar</option>
            </select>
          </td>
          <td></td>
        </tr>
        <tr class="rowContainer">
          <td>
            <label>New Non-Working day:</label>
          </td>
          <td>
            <input id="inputText" type="text"></input>
          </td>
          <td>
            <input id="addNonWorkingdayButton" type="button" value="Add"></input>
          </td>
        </tr>

        <tr class="rowContainer">
          <td id="removeNWdaysTitle">
            <label>Current Nonworking days:</label>
          </td>
          <td colspan="2">
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


      <input id="updateButton" type="button" value="Update"></input>
      <input id="cancelButton" type="button" value="Cancel"></input>
    </div>

  );
}

export default UpdateCalendar;