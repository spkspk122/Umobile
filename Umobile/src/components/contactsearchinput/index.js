import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import Phno from '../../assets/svg/common/phno.svg';
import {PermissionsAndroid} from 'react-native';
import Contact from 'react-native-contacts';

class contactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   Contact.checkPermission((err, permission) => {
  //     if (err) {
  //       console.log(err, 'dataError');
  //       throw err;
  //     } else {
  //       if (permission === 'authorized') {
  //         console.log(permission, 'accessGranted');
  //         Contact.getAll((err, contact) => {
  //           if (err) {
  //             console.log(err, 'contactERR');
  //             throw err;
  //           } else {
  //             console.log('granted');
  //             this.setState({contact: contact.slice(0, 10)});
  //           }
  //         });
  //       }
  //     }
  //   });
  // }

  contactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the contact');
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {data} = this.state;
    const {
      defaultValue,
      onChangeText,
      keyboardType,
      editable,
      customStyle,
      placeholder,
      placeholderTextColor,
    } = this.props;
    return (
      <>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{width: '90%'}}>
              <Text style={styles.label}>
                enter a airtel xstream id or mobile number
              </Text>
              <TextInput
                style={[styles.input, customStyle]}
                autoCapitalize="none"
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
              />
            </View>

            <TouchableOpacity
              style={{width: '5%',marginTop:"3%"}}
              onPress={this.contactPermission}>
              <View>
                {/* {data.map(contact => (
                  <Text key={contact.recordID}>
                    {contact.givenName} {contact.familyName}
                  </Text>
                ))} */}
              </View>
              <Phno />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default contactInput;
