import { StyleSheet } from "react-native"
import couleur from "../themes/colors"

const playerChoiceStyles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        flex: 1,
        backgroundColor: couleur.LAGOON,
        justifyContent: 'center',
    },
    titre: {
        fontSize: 20,
        color: "white"
    },
    texte: {
        fontSize: 20,
        color: "black"
    },
    boutonCR: {
        flex: 1,
        // height: 70,
        flexDirection: 'row'
    },
    texteJoueur : {
        fontSize: 20,
    },
    ChoixCouleur: {
        flex: 1,
        margin: 3,
        padding: 4,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
    conteneurBoutonArrondi: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        borderWidth: 2,
        borderColor: '#fff', 
        borderRadius: 60, 
        marginTop: '2%', 
        marginBottom: '2%'
    }
})

export default playerChoiceStyles