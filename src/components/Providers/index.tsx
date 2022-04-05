import { useColorScheme } from 'react-native';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../graphql/apollo-client';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Providers = ({children}) => {
    const deviceTheme = useColorScheme();
    const appTheme = theme[deviceTheme] || theme.light;

    return (
        <ThemeProvider theme={appTheme}>
            <ApolloProvider client={apolloClient}>
                <NavigationContainer>{children}</NavigationContainer>
            </ApolloProvider>
        </ThemeProvider>
    )
}