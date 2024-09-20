export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque ipsum vitae ante posuere, a egestas nisi volutpat. Duis mollis odio sed maximus rutrum. Etiam tristique tincidunt nibh, et porttitor est pulvinar vel. Integer aliquet iaculis lacinia. Phasellus at elementum ipsum. Fusce finibus a ex ut gravida. Morbi ac felis commodo lectus vulputate eleifend non et nunc.

Donec molestie blandit erat eu tincidunt. Nunc tempor ante vel tortor condimentum, ac sodales ante condimentum. Cras vulputate nisi in odio pellentesque interdum ut quis ligula. Suspendisse potenti. Nunc rutrum eu lacus consequat posuere. Ut ut dolor eu est suscipit pretium non eu orci. Sed a orci ultrices mauris laoreet mattis quis fringilla purus. Cras imperdiet a orci eu gravida. Morbi efficitur velit nec nibh hendrerit, vitae iaculis magna ultrices.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assignment Group</label>
            </td>
            <td>
              <select  id="wd-group" value={100}>
                <option selected value="assignments">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select  id="wd-group" value={100}>
                <option selected value="percentage">Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Submission Type</label>
            </td>
            <td>
              <select  id="wd-submission-type" value={100}>
                <option selected value="online">Online</option>
                </select>
                <br />
                Online Entry Options 
                <br />
                <input type="checkbox" name="submission-type" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="submission-type" id="wd-website-url" /> 
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" name="submission-type" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="submission-type" id="wd-student-annotation" /> 
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="submission-type" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
            Assign To:
            <br />
            <input type="text" defaultValue="Everyone"/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor=""></label>
            </td>
            <td>
            <br />

            Due:
            <br />
            <input type="date" id="wd-due-date" value="2024-03-13" />
            <br />
            <br />

            Available From:         Until:
            <br />
            <input type="date" id="wd-available-from" value="2024-05-16" />          
            <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
          
          <tr>
            <td>
            </td>
            <hr />
            <td> 
            <hr />
            </td>
            <td>
            <button id="wd-cancel-assignment" type="button">Cancel</button>
            <button id="wd-submit-assignment" type="button">Submit</button>
            </td>
            </tr>

     
          {/* Complete on your own */}
        </table>
      </div>
  );}
  