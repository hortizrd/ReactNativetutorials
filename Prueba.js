
import { Appbar } from 'react-native-paper';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Prueba = () => (
    <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);
export default Prueba;