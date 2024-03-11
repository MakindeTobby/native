import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, FlatList, SectionList } from 'react-native';
import PokemonList from './data.json';
import groupedPokemonList from './grouped-data.json'
export default function List() {



    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={styles.scrollView}>

        {
          PokemonList.map(pokemon => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
            <View style={styles.scrollView}>

                {/* <FlatList
          data={PokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={[styles.headerText, styles.footerText]}>End of List</Text>}
        horizontal
        /> */}

                <SectionList
                    sections={groupedPokemonList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.cardText}>{item}</Text>
                            </View>
                        )
                    }}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeaderText}>{section.type}</Text>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight

    },
    scrollView: {
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        // marginBottom: 16
    },
    cardText: {
        fontSize: 22
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 12
    },
    footerText: {
        marginTop: 12
    },
    sectionHeaderText: {
        backgroundColor: "white",
        fontSize: 24,
        fontWeight: "bold"
    }

});
