import React ,{Component} from 'react'
import partyPopper from '../assets/party-popper.jpg';

import moment from 'moment'


class Display extends Component {

  timeSince(date){
    let today = new Date().getTime();
    let other_date  = new Date(date).getTime();
    let difference = Math.abs(today - other_date)
    var a = moment(today);
    var b = moment(other_date);

    var years = a.diff(b, 'year');
    var months = a.diff(b, 'month');
    var days = a.diff(b, 'day');

    // let days = Math.floor(difference / (1000*3600*24));
    // let years = Math.floor(days/365);
    // days -= years*365;
    // let months = Math.floor(days/31);
    // days -= months*31;
    return `${years} years, ${months} months, and ${days} days`
  }

  render() {
    return (
      <div>
      <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      <h4>Congrats {this.timeSince(this.props.date)} !!!</h4>
      <img src={partyPopper} alt="party-popper" className="party-popper" />
      </div>
    )
  }
}

export default Display;
