import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import { getAllCards, AllCardsResponse } from 'services/card/getAllCards';
import { homeStyle } from './homeStyle';
import { Navigation } from 'react-native-navigation';
import { MechanicScreenKey, SearchScreenKey } from 'screens/navigationkeys';
import { AppColors } from 'screens/appconstants';
import { generateTopbarProperty } from 'services/common/generateTopbarProperty';
import { GeneralError } from 'transferobjects/GeneralError';
import { ErrorView } from 'screens/common/errorarea';


function HomeScreen(props: any) {
    const [mechanicNames, setMechanicNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<GeneralError>()

    useEffect(() => {
        getAllCards()
            .then((result: any) => {
                setMechanicNames(result.uniqueMechanics);
                setIsLoading(false)
            })
            .catch((result: AllCardsResponse) => {
                setError(result.error)
            });
    }, []);

    return (
        <SafeAreaView style={homeStyle.containerSafearea}>
            {error ? (<ErrorView errorInfo={error} />) : (isLoading ? (
                <SafeAreaView style={homeStyle.loadingSafearea}>
                    <ActivityIndicator color={AppColors.listBorder}></ActivityIndicator>
                </SafeAreaView>
            ) : (<View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        Navigation.push(props.componentId, {
                            component: {
                                name: SearchScreenKey,
                            },
                        });
                    }}
                    style={homeStyle.buttonSearch}
                >
                    <Text style={homeStyle.appButtonText}>Search</Text>
                </TouchableOpacity>

                <FlatList
                    data={mechanicNames}
                    keyExtractor={(item, index) => `homemechanics${index}`}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={homeStyle.listitemTouchable}
                            onPress={() => {
                                Navigation.push(props.componentId, {
                                    component: {
                                        name: MechanicScreenKey,
                                        passProps: {
                                            mechanicName: item,
                                        },
                                        options: {
                                            topBar: generateTopbarProperty(item)
                                        }
                                    },
                                });
                            }}>
                            <Text style={homeStyle.listitemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            ))}
        </SafeAreaView>
    );

}
export default HomeScreen;