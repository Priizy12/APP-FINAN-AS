import React, { createContext, useState, useEffect } from 'react';

import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [loadingApp, setLoadingApp] = useState(true)

    const navigation = useNavigation();

    useEffect( () => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@AppKr')

            if(storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                }).catch( () => {
                    setUser(null)
                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoadingApp(false)
            }
            setLoadingApp(false)
        }
        loadStorage()   

    }, [])


    async function signUp(email, password, nome) {
        setLoading(true)
        try {
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email,
            })

            setLoading(false)
            navigation.goBack();


        } catch (err) {
            console.log("ERRO AO CADASTRAR", err)
            setLoading(false);
        }
    }

    async function sigIn(email, password) {
        setLoading(true)
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data

            const data = {
                id,
                name,
                token,
                email
            };

            await AsyncStorage.setItem('@AppKr', token)
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email
            });
            setLoading(false)

        } catch (err) {
            console.log("erro ao logar", err)
            setLoading(false)
        }
    }


    async function logOut () {
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, sigIn, logOut, loading, loadingApp,  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

