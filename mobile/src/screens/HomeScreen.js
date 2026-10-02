import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FBFA" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>F</Text>
            </View>

            <Text style={styles.brandName}>FindIt</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileText}>NP</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>GOOD MORNING</Text>

        <Text style={styles.title}>What are you looking for?</Text>

        <Text style={styles.subtitle}>
          Report an item or search the community.
        </Text>

        {/* Lost / Found */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.primaryAction}>
            <Text style={styles.primaryActionIcon}>?</Text>
            <Text style={styles.primaryActionText}>Lost Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryAction}>
            <Text style={styles.secondaryActionIcon}>✓</Text>
            <Text style={styles.secondaryActionText}>Found Item</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <Text style={styles.sectionLabel}>Search items</Text>

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search wallet, phone, keys..."
            placeholderTextColor="#94A09E"
          />
        </View>

        {/* Quick categories */}
        <Text style={styles.sectionTitle}>Browse categories</Text>

        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>▣</Text>
            <Text style={styles.categoryText}>Electronics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>◫</Text>
            <Text style={styles.categoryText}>Wallets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>⌘</Text>
            <Text style={styles.categoryText}>Keys</Text>
          </TouchableOpacity>
        </View>

        {/* Recent activity */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent items</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Sample item */}
        <TouchableOpacity style={styles.itemCard}>
          <View style={styles.itemImage}>
            <Text style={styles.itemImageText}>IMG</Text>
          </View>

          <View style={styles.itemInfo}>
            <View style={styles.itemTopRow}>
              <Text style={styles.itemTitle}>Black Wallet</Text>

              <View style={styles.lostBadge}>
                <Text style={styles.lostBadgeText}>LOST</Text>
              </View>
            </View>

            <Text style={styles.itemLocation}>University Library</Text>

            <Text style={styles.itemDate}>Reported today</Text>
          </View>
        </TouchableOpacity>

        {/* Community message */}
        <View style={styles.communityCard}>
          <Text style={styles.communityTitle}>
            A better way to reunite items.
          </Text>

          <Text style={styles.communityText}>
            Report lost and found belongings and help your community return
            them to their owners.
          </Text>

          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore community</Text>
            <Text style={styles.exploreArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFA",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34,
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#008C83",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  brandName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#172B2A",
  },

  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E0F3F0",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#008C83",
    fontSize: 12,
    fontWeight: "700",
  },

  greeting: {
    color: "#008C83",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 7,
  },

  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#172B2A",
  },

  subtitle: {
    fontSize: 14,
    color: "#73817F",
    marginTop: 7,
    marginBottom: 25,
  },

  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },

  primaryAction: {
    flex: 1,
    height: 52,
    backgroundColor: "#008C83",
    borderRadius: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryActionIcon: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 8,
  },

  primaryActionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  secondaryAction: {
    flex: 1,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE7E5",
    borderRadius: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryActionIcon: {
    color: "#008C83",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 8,
  },

  secondaryActionText: {
    color: "#172B2A",
    fontSize: 14,
    fontWeight: "600",
  },

  sectionLabel: {
    color: "#52615F",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE7E5",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 28,
  },

  searchIcon: {
    color: "#008C83",
    fontSize: 22,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#172B2A",
  },

  sectionTitle: {
    color: "#172B2A",
    fontSize: 16,
    fontWeight: "700",
  },

  categoryRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 13,
    marginBottom: 30,
  },

  categoryCard: {
    flex: 1,
    height: 78,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2EAE8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryIcon: {
    color: "#008C83",
    fontSize: 20,
    marginBottom: 7,
  },

  categoryText: {
    color: "#52615F",
    fontSize: 11,
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  seeAll: {
    color: "#008C83",
    fontSize: 12,
    fontWeight: "600",
  },

  itemCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2EAE8",
    borderRadius: 13,
    padding: 12,
    flexDirection: "row",
    marginBottom: 25,
  },

  itemImage: {
    width: 72,
    height: 72,
    backgroundColor: "#E0F3F0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  itemImageText: {
    color: "#008C83",
    fontSize: 10,
    fontWeight: "700",
  },

  itemInfo: {
    flex: 1,
    marginLeft: 13,
    justifyContent: "center",
  },

  itemTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemTitle: {
    color: "#172B2A",
    fontSize: 15,
    fontWeight: "700",
  },

  lostBadge: {
    backgroundColor: "#FFF0EB",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  lostBadgeText: {
    color: "#D96B43",
    fontSize: 9,
    fontWeight: "700",
  },

  itemLocation: {
    color: "#52615F",
    fontSize: 12,
    marginTop: 7,
  },

  itemDate: {
    color: "#98A3A1",
    fontSize: 11,
    marginTop: 5,
  },

  communityCard: {
    backgroundColor: "#E0F3F0",
    borderRadius: 14,
    padding: 20,
  },

  communityTitle: {
    color: "#172B2A",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 7,
  },

  communityText: {
    color: "#647472",
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 18,
  },

  exploreButton: {
    height: 45,
    backgroundColor: "#008C83",
    borderRadius: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  exploreText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  exploreArrow: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});