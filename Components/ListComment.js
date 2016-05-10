import React, {
  Linking,
  Platform,
  ActionSheetIOS,
  Dimensions,
  View,
  Text,
  Navigator,
  Component,
  TouchableHighlight} from 'react-native';
import moment from 'moment';
const styles = require('../Styles/Styles.js');
const constants = styles.constants;

class ListComment extends Component {
  // handle time precision
  handleTime(){
    if (this.props.comment.time === null){
      return console.log('time empty');
    }
    else if (this.props.comment.time != null){
      var displayTime = moment(this.props.comment.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
    } else {
      console.log('neither cases pass');
    }
  }
  render(){
    var displayTime = moment(this.props.comment.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
    return(
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.comment.comment}</Text>
          <Text style={styles.liText}>{this.props.comment.id}</Text>
          <Text style={styles.liText}>{this.handleTime}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


module.exports = ListComment;