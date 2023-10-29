import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import React from "react";

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> lol </Text>
            <Text style={styles.paraStyle}> lol </Text>

            {/*<View>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: "",
                    }}
                />
            </View>*/}

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}> About Us </Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>
                    its converging time
                </Text>
            </View>

            <Text style={styles.mainHeader}> Follow us </Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        Linking.openURL("")
                    }>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        Linking.openURL(
                            ""
                        )
                    }>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("")}>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default About;