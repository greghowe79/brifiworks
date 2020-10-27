import qs from 'qs';
import axios from 'axios';
import Alert from 'react-s-alert';  
 
export function contactRequest(data) {

    const url = 'https://brifiworks.com/articles/wp-json/contact-form-7/v1/contact-forms/85/feedback';
 
    const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url,
    };
    axios(options).then(function (response) {
       
      Alert.success("Thank you for contacting Brifiworks. We have received your request and we will get back to you shortly.", {
        position: 'bottom',
        effect: 'scale',
        onShow: function () {
            
        },
        beep: false,
        timeout: 'none',
        offset: 100
    })
  })
  .catch(function (error) {
    Alert.error("Error", {
        position: 'bottom',
        effect: 'scale',
        onShow: function () {
            
        },
        beep: false,
        timeout: 'none',
        offset: 100
    })  
  });
}