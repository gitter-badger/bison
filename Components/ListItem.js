import {
  View,
  Text,
  TouchableHighlight} from 'react-native';
import React, { Component } from 'react';

import moment from 'moment';
import { Icon } from 'native-base';
const styles = require('../Styles/Styles.js');

class ListItem extends Component {
  render(){
    var displayTime = moment(this.props.item.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
    return(
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
            <Text style={styles.liText}>{this.props.item.title}</Text>
            <Text style={styles.liText}>{displayTime}</Text>
            <Text style={styles.liText}>{this.props.item.score}pts</Text>
            <Icon name='ios-more' style={{paddingLeft: 300, color:'black'}} />

        </View>
      </TouchableHighlight>
    );
  }
}


module.exports = ListItem;
