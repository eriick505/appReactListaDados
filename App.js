import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util';


export default createStackNavigator({
    'Main': { // nome da pagina dada ao stacknavigator, soo é a principal porque foi colocada primeiro
        screen: PeoplePage // screen é a configuraçao requerida (obrigatoria)
    },
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({ navigation }) => { // configuraçao da tela de detailPage com um parametro para tornar a navegaçao dinamica
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first); 
            return ({ 
                title: peopleName,
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 30,
                    textAlign: 'center', // manda o elemente ir para o meio da barra 
                }
            });
        } // fim do options do peopledetail
    }
}, { // paramentro para a configuraçao do stack
    navigationOptions: { // configuraçao global de todas as telas
        title:  'Pessoas',
        headerTintColor: '#fff', // muda a cor da seta de voltar do navigator
        headerStyle: { // de toda a barrinha do navigator
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5'
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
            textAlign: 'center', // manda o elemente ir para o meio da barra 
            flexGrow: 1 // alinha ao centro junto com o textAlign
        }
    }
});

