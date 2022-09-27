import { StyleSheet } from 'react-native';
import { AppColors } from 'screens/appconstants';

export const homeStyle = StyleSheet.create({

    containerSafearea: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    loadingSafearea: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    listitemTouchable: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.listBorder,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    listitemText: {
        color: AppColors.listBorder,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 22,
    }, 
     buttonSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});
