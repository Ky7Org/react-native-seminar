import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView
} from "react-native";
import {
    BACKGROUND_COLOR,
    TEXT_COLOR_WHITE,
} from "../../../../constants";
import tailwind from "tailwind-rn";
import {
    BUTTON_ADMIN,
    BUTTON_EDIT_PROFILE,
} from "../UserDetailScreen/constants";
import {SearchIcon} from "react-native-heroicons/solid";
import {User} from "../../../../models/users.model";

type IProps = {
  users: User[];
};

export const UserListScreen: React.FC<IProps> = (props: IProps) => {

    const {
        users,
    } = props;

    const [search, setSearch] = useState("");
    const [dataSource, setDataSource] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setDataSource(users);
        setSearchResult(users);
    }, [])


    const handleSearch = (searchValue) => {
        if (searchValue) {
            //search value is not blank
            const newData = dataSource.filter((user) => {
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
            setSearchResult(dataSource);
            setSearch(searchValue);
        }
    }

    const getData = () => {
        setDataSource(users);
    };

    const renderUser = ({item}) => (
        <View style={styles.userList}>
            <View style={styles.item} key={item.username}>
                <View>
                    <View style={tailwind('flex-grow')}>
                        <View style={tailwind('border-2 rounded-full w-20 h-20')}>
                            <Image style={tailwind('rounded-full w-16 h-16 mx-2 my-2')}
                                   source={require("../../../../assets/dead_pool.jpg")} />
                        </View>
                        <View style={tailwind('flex -mt-16 ml-24')}>
                            <Text style={tailwind('text-base text-black font-bold')}>
                                {item.fullname}
                            </Text>
                            <Text>
                                {item.role}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView bounces={false} style={tailwind('flex bg-white')}>
                <View style={styles.bigCircle} />
                <View style={tailwind('flex items-center')}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.buttonAdmin}
                                          onPress={() => {}}>
                            <Text style={styles.buttonText}>{BUTTON_ADMIN}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchSection}>
                        <SearchIcon stroke="#000" size={31} style={tailwind('p-4 ml-8')}/>
                        <TextInput
                            onChangeText={(searchValue: string) => handleSearch(searchValue)}
                            value={search}
                            placeholder="Search"
                            style={styles.input}
                        />
                    </View>
                </View>
                <FlatList
                    data={searchResult}
                    keyExtractor={user => user.username}
                    renderItem={renderUser}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute w-full h-full'),
        backgroundColor: "#002333",
        width: 1015,
        height: 1090,
        top: -900,
        left: -300
    },
    headerContainer: {
        ...tailwind('flex flex-row justify-between w-full mt-6'),
    },
    buttonEdit: {
        ...tailwind('rounded-full flex items-center justify-center'),
        backgroundColor: '#07FF8A',
        width: 112,
        height: 30,
        marginRight: 22
    },
    buttonAdmin: {
        ...tailwind('rounded-full flex items-center justify-center'),
        borderWidth: 2,
        borderColor: '#07FF8A',
        width: 60,
        height: 30,
        marginLeft: 22,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold'
    },
    searchField: {
        ...tailwind('rounded-full w-96 h-16 mt-6 mr-6 ml-6 border-2'),
        backgroundColor: BACKGROUND_COLOR,
        paddingLeft: 80,
        color: BACKGROUND_COLOR,
    },
    searchView: {
        ...tailwind('flex-shrink')
    },
    userList: {
        ...tailwind('p-4 mx-2 my-2')
    },
    item: {
        ...tailwind('flex rounded-2xl bg-white p-8 flex-col border-2 border-gray-100'),
    },
    containerStyle: {
        ...tailwind('p-2 rounded-full mb-2 -mt-2 -mr-4 -ml-20'),
        backgroundColor: "white"
    },
    searchSection: {
        ...tailwind('rounded-full h-16 ml-8 mr-8 mt-6'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        ...tailwind('rounded-full ml-4'),
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'white',
        color: '#424242',
    },
})
