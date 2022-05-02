import React from "react";
import './AddApptForm.css'

const AddApptForm = ({apptDate, toggleClose}) => {

  const cptArray = ['95129', '95014', '95412', '95712', '97435'];

  const handleCloseClick = () => {
    toggleClose();
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <div className="top-bar">
          <span className="close" onClick={handleCloseClick}>
            &times;
          </span>
        </div>
        <div className="form-elements">
        <form>
          <div className="row">
            <div className="col-10">
              {/* Name */}
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6ZM5 16C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.2386 2.23858 14 5 14H13C15.7614 14 18 16.2386 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 17.3431 14.6569 16 13 16H5Z" fill="#0D0D0D"/>
              </svg>
            </div>
            <div className="col-90">
              <input type="text" id="name" name="Name" placeholder="John Doe"/>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              {/* Date/Time */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 4C10.5523 4 11 4.44772 11 5V9.58579L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.29289 10.7071C9.10536 10.5196 9 10.2652 9 10V5C9 4.44772 9.44771 4 10 4Z" fill="#0D0D0D"/>
              </svg>
            </div>
            <div className="col-30">
              <input type="date" id="startDate" name="Start Date" defaultValue={apptDate}/>
            </div>
            <div className="col-30">
              <input type="time" id="timeSlot" name="Timeslot" value="12:00"/>
            </div>
            <div className="col-30">
            <div className="dropdown-menu">
              <select id="recurring" name="recurring">
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              {/* Misc */}
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.89543 20 2V13C20 14.1046 19.1046 15 18 15H13.4142L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L6.58579 15H2C0.89543 15 0 14.1046 0 13V2ZM18 2H2V13H7C7.26522 13 7.51957 13.1054 7.70711 13.2929L10 15.5858L12.2929 13.2929C12.4804 13.1054 12.7348 13 13 13H18V2ZM4 5.5C4 4.94772 4.44772 4.5 5 4.5H15C15.5523 4.5 16 4.94772 16 5.5C16 6.05228 15.5523 6.5 15 6.5H5C4.44772 6.5 4 6.05228 4 5.5ZM4 9.5C4 8.94772 4.44772 8.5 5 8.5H11C11.5523 8.5 12 8.94772 12 9.5C12 10.0523 11.5523 10.5 11 10.5H5C4.44772 10.5 4 10.0523 4 9.5Z" fill="#0D0D0D"/>
              </svg>
            </div>
            <div className="col-30">
              <button>Add Zoom Link</button>
            </div>
            <div className="col-30">
              <div className="dropdown-menu">
                <select>
                  <option disabled selected hidden> CPT Code </option>
                  {cptArray.map((code, index) => (
                    <option title={code} key={index}> {code} </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              {/* Notes */}
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9.5C5.55228 9.5 6 9.05229 6 8.5C6 7.94772 5.55228 7.5 5 7.5C4.44772 7.5 4 7.94772 4 8.5C4 9.05229 4.44772 9.5 5 9.5Z" fill="#0D0D0D"/>
                <path d="M7 8.5C7 7.94772 7.44772 7.5 8 7.5H11C11.5523 7.5 12 7.94772 12 8.5C12 9.05229 11.5523 9.5 11 9.5H8C7.44772 9.5 7 9.05229 7 8.5Z" fill="#0D0D0D"/>
                <path d="M8 10.5C7.44772 10.5 7 10.9477 7 11.5C7 12.0523 7.44772 12.5 8 12.5H11C11.5523 12.5 12 12.0523 12 11.5C12 10.9477 11.5523 10.5 11 10.5H8Z" fill="#0D0D0D"/>
                <path d="M8 13.5C7.44772 13.5 7 13.9477 7 14.5C7 15.0523 7.44772 15.5 8 15.5H11C11.5523 15.5 12 15.0523 12 14.5C12 13.9477 11.5523 13.5 11 13.5H8Z" fill="#0D0D0D"/>
                <path d="M6 11.5C6 12.0523 5.55228 12.5 5 12.5C4.44772 12.5 4 12.0523 4 11.5C4 10.9477 4.44772 10.5 5 10.5C5.55228 10.5 6 10.9477 6 11.5Z" fill="#0D0D0D"/>
                <path d="M5 15.5C5.55228 15.5 6 15.0523 6 14.5C6 13.9477 5.55228 13.5 5 13.5C4.44772 13.5 4 13.9477 4 14.5C4 15.0523 4.44772 15.5 5 15.5Z" fill="#0D0D0D"/>
                <path d="M5 0C4.44772 0 4 0.447715 4 1H2C0.895431 1 0 1.89543 0 3V18C0 19.1046 0.895431 20 2 20H14C15.1046 20 16 19.1046 16 18V3C16 1.89543 15.1046 1 14 1H12C12 0.447715 11.5523 0 11 0H5ZM12 3H14V18H2V3H4V4C4 4.55228 4.44772 5 5 5H11C11.5523 5 12 4.55228 12 4V3ZM6 3V2H10V3H6Z" fill="#0D0D0D"/>
              </svg>
            </div>
            <div className="col-90">
              <textarea id="notes" name="Notes" placeholder="Notes..."/>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              {/* Notifications */}
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.14614 1.24812C7.4433 0.516158 8.16138 0 9 0C9.83863 0 10.5567 0.516158 10.8539 1.24812C13.8202 2.06072 16 4.77579 16 8V12.6972L17.8321 15.4453C18.0366 15.7522 18.0557 16.1467 17.8817 16.4719C17.7077 16.797 17.3688 17 17 17H12.4646C12.2219 18.6961 10.7632 20 9 20C7.23677 20 5.77806 18.6961 5.53545 17H1C0.631206 17 0.292346 16.797 0.118327 16.4719C-0.0556921 16.1467 -0.0366195 15.7522 0.167951 15.4453L2 12.6972V8C2 4.77579 4.17983 2.06072 7.14614 1.24812ZM7.58535 17C7.79127 17.5826 8.34689 18 9 18C9.65311 18 10.2087 17.5826 10.4146 17H7.58535ZM9 3C6.23858 3 4 5.23858 4 8V13C4 13.1974 3.94156 13.3904 3.83205 13.5547L2.86852 15H15.1315L14.168 13.5547C14.0584 13.3904 14 13.1974 14 13V8C14 5.23858 11.7614 3 9 3Z" fill="#0D0D0D"/>
              </svg>
            </div>
            <div className="col-30">
            <div className="dropdown-menu">
              <select id="notification" name="notification" defaultValue={'5MinBefore'}>
                <option value="5MinBefore">5 minutes before</option>
                <option value="10MinBefore">10 minutes before</option>
                <option value="15MinBefore">15 minutes before</option>
                <option value="20MinBefore">20 minutes before</option>
                <option value="30MinBefore">30 minutes before</option>
              </select>
            </div>
            </div>
          </div>

          <div className="row">
            <div className="col-90"/>
            <div className="col-10">
                <button>Save</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddApptForm;