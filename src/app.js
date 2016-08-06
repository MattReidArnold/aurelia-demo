import {Meeting} from './meeting'

export class App {
  constructor() {
    this.heading = 'Meetings';
    this.meetings = [];
    this.meetingName = '';
  }

  addMeeting(){
    if(this.meetingName) {
      this.meetings.push(new Meeting(this.meetingName));
      this.meetingName = '';
    }
  }

  removeMeeting(meeting){
    let index = this.meetings.indexOf(meeting)
    if(index !== -1){
      this.meetings.splice(index, 1);
    }
  } 
}
