import {Tabs} from 'expo-router';
import CustomTabBar from '../../components/CustomTabBar';
import AntDesing from '@expo/vector-icons/AntDesign';


export default function Layout() {

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#5E0035' }}>
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <AntDesing name="home" size={24} color="#5E0035" /> }} />
            <Tabs.Screen name="buscar" options={{ title: 'Search', tabBarIcon: () => <AntDesing name="search1" size={24} color="#5E0035" /> }} /> 
            <Tabs.Screen name="config" options={{ title: 'Settings', tabBarIcon: () => <AntDesing name="setting" size={24} color="#5E0035" /> }} /> 
            <Tabs.Screen name="perfil" options={{ title: 'Profile', tabBarIcon: () => <AntDesing name="user" size={24} color="#5E0035" /> }} />
        </Tabs>
    )   

}