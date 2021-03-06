import React, {useContext, useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView
} from "react-native";
import tailwind from "tailwind-rn";
import {
    BUTTON_ADMIN,
} from "../UserDetailScreen/constants";
import {SearchIcon} from "react-native-heroicons/solid";
import {styles} from "./styles/index.css";
import {UsersContext} from "../../../../utils/users.context";
import {SOLID_WHITE_COLOR, USER_DETAILS_SCREEN} from "../../../../constants";
import {NavigationProp} from "@react-navigation/native";
import {User} from "../../../../models/users.model";
import {AuthContext} from "../../../../utils/auth.context";

type IProps = {
    navigation: NavigationProp<any>;
};

export const UserListScreen: React.FC<IProps> = (props: IProps) => {

    const {
        navigation,
    } = props;

    const users = useContext<User[]>(UsersContext);
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<User[]>([]);
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        setSearchResult(users);
    }, []);

    const handleSearch = (searchValue: string) => {
        if (searchValue) {
            //search value is not blank
            const newData = users.filter((user) => {
                const itemData = user.fullname
                    ? user.fullname.toUpperCase()
                    : ''.toUpperCase();
                const textData = searchValue.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setSearchResult(newData);
            setSearch(searchValue);
        } else {
            //search value is blank
            setSearchResult(users);
            setSearch(searchValue);
        }
    };

    const handleRenderUserDetail = (username: string) => {
        navigation.navigate(USER_DETAILS_SCREEN, {
            username: username,
        });
    };

    const renderUser = ({item}) => (
        <View style={styles.userList}>
            <View style={styles.item} key={item.username}>
                <TouchableOpacity onPress={() => handleRenderUserDetail(item.username)}>
                    <View style={tailwind('flex-grow')}>
                        <View style={tailwind('border-2 rounded-full w-20 h-20')}>
                            <Image style={tailwind('rounded-full w-16 h-16 mx-2 my-2')}
                                   source={require("../../../../assets/dead_pool.jpg")}/>
                        </View>
                        <View style={tailwind('flex -mt-16 ml-24')}>
                            <Text style={tailwind('text-base text-black font-bold')}>{item.fullname}</Text>
                            <Text>{item.role}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    const ListHeaderComponent: React.FC = () => {
        return <>
            <View style={styles.bigCircle}/>
            <View style={tailwind('flex items-center')}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonAdmin}>
                        <Text style={styles.textButtonAdmin}>{auth.role !== 'Administrator' ? 'User' : BUTTON_ADMIN}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchSection}>
                    <SearchIcon stroke={SOLID_WHITE_COLOR} size={31} style={tailwind('p-4 ml-8')}/>
                    <TextInput
                        autoFocus={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        multiline={false}
                        blurOnSubmit={false}
                        maxLength={250}
                        onChangeText={(searchValue: string) => handleSearch(searchValue)}
                        value={search}
                        placeholder="Search"
                        style={styles.input}
                    />
                </View>
            </View>
        </>;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                keyboardDismissMode="none"
                keyboardShouldPersistTaps="always"
                bounces={false}
                style={tailwind('flex bg-white')}
                data={searchResult}
                keyExtractor={user => user.username}
                ListHeaderComponent={ListHeaderComponent}
                renderItem={renderUser}/>
        </SafeAreaView>
    );
};
