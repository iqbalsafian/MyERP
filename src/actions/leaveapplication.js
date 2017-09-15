import axios from 'axios';
const apiServer = 'http://localhost:3003';

function getLeaveApplicationDetails(leavenum) {
  return axios.get(apiServer + `/api/leave/$leavenum`)
}
