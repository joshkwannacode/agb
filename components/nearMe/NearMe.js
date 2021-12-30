import React, {useState,useEffect} from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button} from 'react-native';

export default function NearMe() {
    const [mapDetails, setMapDetails] = useState();
    
    useEffect(() => {
        fetch('/nearMe')
          .then(res => res.json())
          .then(response => {
            setMapDetails(response[0].buttonName)
          });
      }, []);
        
    return (
        <View>
            
        </View>
    )
}
