


function UpdateCalendar() {
    return (
        <div class="tabContainer">
            <div class="pageTitle"> User Admin</div>
            <div class="infoText">Add and Remove Users</div>

            {/* Create user: 
                Name label
                Name of user textbox
                
                Email of user label
                email of user textbox
                
                checkbox make privileged
                
                button add user
                
                new row
                Delete user 
                
                List box for user name
                button Delete*/}


                <table class="tableStyle" >

                    <tr class="rowContainer" >
                        <td class="removeDateTableRow" colspan="2"><label>Create a new user:</label></td>
                    </tr>



                    <tr>
                        <td class="removeDateTableRow">
                            <label class="updateCalendarLabels">Name: </label>
                        </td>
                        <td class="removeDateTableRow">
                            <input id="inputText" name="usernameTextBox" type="text"></input>
                        </td>
                    </tr>

                    <tr>
                        <td class="removeDateTableRow">
                            <label class="updateCalendarLabels">Email: </label>
                        </td>
                        <td class="removeDateTableRow">
                            <input id="inputText" name="emailTextBox" type="text"></input>
                        </td>
                    </tr>

                    <tr>
                        <td class="removeDateTableRow">
                            <label class="updateCalendarLabels">Privileged: </label>
                        </td>
                        <td class="removeDateTableRow">
                            <input name="privilegedCheckBox" type="checkbox" value="0"></input>
                        </td>
                    </tr>

                    <tr>
                        <td class="removeDateTableRow"></td>
                        <td class="removeDateTableRow">
                            <input name="addUserButton" id="addNonWorkingdayButton" type="button" value="Add"></input>
                        </td>
                    </tr>



                </table>


                <table class="tableStyle" >

                    <tr class="rowContainer">
                        <td colSpan="2" class="removeDateTableRow" id="removeNWdaysTitle">
                            <label>Modify User:</label>
                        </td>
                    </tr>

                    <tr class="rowContainer">
                        <td class="removeDateTableRow"><label class="updateCalendarLabels">Select User:</label></td>
                        <td class="removeDateTableRow">
                            <select name="user" id="calendar">
                                <option value="">Select User</option>
                                <option value="Eric">Eric</option>
                                <option value="Jack">Jack</option>
                                <option value="Kym">Kym</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="removeDateTableRow">
                            <label class="updateCalendarLabels">Privileged: </label>
                        </td>
                        <td class="removeDateTableRow">
                            <input name="privilegedCheckBox" type="checkbox" value="0"></input>
                        </td>
                    </tr>

                    <tr>
                        <td class="removeDateTableRow"></td>
                        <td class="removeDateTableRow">
                            <input name="modifyUserButton" id="addNonWorkingdayButton" type="button" value="Update"></input>
                        </td>
                    </tr>

                </table>

                <table class="tableStyle" >

                    <tr class="rowContainer">
                        <td colSpan="2" class="removeDateTableRow" id="removeNWdaysTitle">
                            <label>Delete User:</label>
                        </td>
                    </tr>

                    <tr class="rowContainer">
                        <td class="removeDateTableRow"><label class="updateCalendarLabels">Select User:</label></td>
                        <td class="removeDateTableRow">
                            <select name="user" id="calendar">
                                <option value="">Select User</option>
                                <option value="Eric">Eric</option>
                                <option value="Jack">Jack</option>
                                <option value="Kym">Kym</option>
                            </select>
                        </td>
                    </tr>


                    <tr>
                        <td class="removeDateTableRow"></td>
                        <td class="removeDateTableRow">
                            <input name="deleteUserButton" id="addNonWorkingdayButton" type="button" value="Delete"></input>
                        </td>
                    </tr>

                </table>
            {/* <input id="updateButton" type="button" value="Update"></input>
        <input id="cancelButton" type="button" value="Cancel"></input> */}
        </div>

    );
}

export default UpdateCalendar;