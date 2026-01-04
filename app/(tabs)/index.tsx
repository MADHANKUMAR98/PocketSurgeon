// app/(tabs)/index.tsx - UPDATED WITH LOGO
import MedicalDisclaimerModal from '@/components/MedicalDisclaimerModal';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const COLORS = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#059669',
  background: '#F8FAFC',
  card: '#FFFFFF',
  text: '#1E293B',
  textSecondary: '#64748B',
  white: '#FFFFFF',
};

const teethData = [
  {
    id: 1, name: "Maxillary Incisor", slug: "maxillary-incisor",
    image: require('../../assets/images/teeth_assets/maxillary-incisor.png'),
    description: "Anterior Extraction", color: COLORS.primary
  },
  {
    id: 2, name: "Maxillary Canine", slug: "maxillary-canine",
    image: require('../../assets/images/teeth_assets/maxillary-canine.png'),
    description: "Canine Extraction", color: COLORS.secondary
  },
  {
    id: 3, name: "Maxillary Premolar", slug: "maxillary-premolar",
    image: require('../../assets/images/teeth_assets/maxillary-premolar.png'),
    description: "Premolar Procedure", color: COLORS.accent
  },
  {
    id: 4, name: "Maxillary Molar", slug: "maxillary-molar",
    image: require('../../assets/images/teeth_assets/maxillary-molar.png'),
    description: "Molar Extraction", color: COLORS.primary
  },
  {
    id: 5, name: "Mandibular Incisor", slug: "mandibular-incisor",
    image: require('../../assets/images/teeth_assets/mandibular-incisor.png'),
    description: "Anterior Extraction", color: COLORS.secondary
  },
  {
    id: 6, name: "Mandibular Canine", slug: "mandibular-canine",
    image: require('../../assets/images/teeth_assets/mandibular-canine.jpg'),
    description: "Canine Extraction", color: COLORS.accent
  },
  {
    id: 7, name: "Mandibular Premolar", slug: "mandibular-premolar",
    image: require('../../assets/images/teeth_assets/mandibular-premolar.png'),
    description: "Premolar Procedure", color: COLORS.primary
  },
  {
    id: 8, name: "Mandibular Molar", slug: "mandibular-molar",
    image: require('../../assets/images/teeth_assets/mandibular-molar.png'),
    description: "Molar Extraction", color: COLORS.secondary
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.appTitle}>🦷 Pocket Surgeon</Text>
            <Text style={styles.appSubtitle}>Dental Extraction Guide</Text>
          </View>
          {/* Info Button and Logo */}
          <View style={styles.headerRight}>
            <Link href="/about" asChild>
              <TouchableOpacity testID="info-button" style={styles.infoButton}>
                <Ionicons name="information-circle-outline" size={28} color={COLORS.white} />
              </TouchableOpacity>
            </Link>
            <Image
              source={require('../../assets/images/department-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <MedicalDisclaimerModal />

      {/* Main Content */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Ionicons name="medical-outline" size={32} color={COLORS.primary} />
          <Text style={styles.welcomeTitle}>Welcome, Doctor!</Text>
          <Text style={styles.welcomeText}>
            Comprehensive dental extraction guide with surgical videos, anesthetic techniques, and elevation principles.
          </Text>
        </View>

        {/* 1. SURGICAL VIDEOS Section */}
        <View style={styles.mainSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIcon, { backgroundColor: 'rgba(37, 99, 235, 0.1)' }]}>
              <Ionicons name="videocam" size={28} color={COLORS.primary} />
            </View>
            <View style={styles.sectionTextContainer}>
              <Text style={styles.sectionTitle}>Surgical Videos</Text>
              <Text style={styles.sectionSubtitle}>Step-by-step extraction procedures for 8 teeth</Text>
            </View>
          </View>

          <View style={styles.grid}>
            {teethData.map((tooth) => (
              <Link key={tooth.id} href={`/tooth-details/${tooth.slug}`} asChild>
                <TouchableOpacity style={styles.toothCard}>
                  <View style={styles.cardImageContainer}>
                    <Image
                      source={tooth.image}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={styles.cardTitle}>{tooth.name}</Text>
                  <Text style={styles.cardDescription}>{tooth.description}</Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.viewText}>View Video</Text>
                    <Ionicons name="play-circle" size={16} color={COLORS.primary} />
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        {/* 2. ANESTHETIC VIDEOS Section */}
        <View style={styles.mainSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIcon, { backgroundColor: 'rgba(124, 58, 237, 0.1)' }]}>
              <Ionicons name="bandage" size={28} color={COLORS.secondary} />
            </View>
            <View style={styles.sectionTextContainer}>
              <Text style={styles.sectionTitle}>Anesthetic Videos</Text>
              <Text style={styles.sectionSubtitle}>3 comprehensive nerve block techniques</Text>
            </View>
          </View>

          <Link href="/anesthetic-videos" asChild>
            <TouchableOpacity style={styles.largeCard}>
              <View style={styles.largeCardContent}>
                <View style={styles.largeCardIconContainer}>
                  <Ionicons name="medical" size={32} color={COLORS.secondary} />
                </View>
                <View style={styles.largeCardText}>
                  <Text style={styles.largeCardTitle}>Nerve Block Techniques</Text>
                  <Text style={styles.largeCardDescription}>
                    Watch 3 detailed anesthetic procedure videos covering different nerve block methods
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={COLORS.secondary} />
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* 3. ELEVATION PRINCIPLES Section */}
        <View style={styles.mainSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIcon, { backgroundColor: 'rgba(5, 150, 105, 0.1)' }]}>
              <Ionicons name="git-compare" size={28} color={COLORS.accent} />
            </View>
            <View style={styles.sectionTextContainer}>
              <Text style={styles.sectionTitle}>Elevation Principles</Text>
              <Text style={styles.sectionSubtitle}>Fundamental dental elevation techniques</Text>
            </View>
          </View>

          <Link href="/elevation-principles" asChild>
            <TouchableOpacity style={styles.largeCard}>
              <View style={styles.largeCardContent}>
                <View style={styles.largeCardIconContainer}>
                  <Ionicons name="arrow-up-circle" size={32} color={COLORS.accent} />
                </View>
                <View style={styles.largeCardText}>
                  <Text style={styles.largeCardTitle}>Elevation Fundamentals</Text>
                  <Text style={styles.largeCardDescription}>
                    Master the principles of dental elevation with detailed video demonstration
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={COLORS.accent} />
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    paddingRight: 10,
  },
  appTitle: {
    fontSize: 24, // Slightly smaller for better fit
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  // Replaced stats with logo styles
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 70,
    height: 45,
    borderRadius: 6,
  },
  infoButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  content: {
    flex: 1,
  },
  welcomeCard: {
    backgroundColor: COLORS.card,
    margin: 20,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 12,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  mainSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionIcon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  sectionTextContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  toothCard: {
    width: '48%',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 16,
    padding: 0, // Removed padding to let image fill top
    overflow: 'hidden', // Needed for border radius with image
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImageContainer: {
    width: '100%',
    height: 100,
    backgroundColor: COLORS.background,
    marginBottom: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold', // Made slightly bolder
    color: COLORS.text,
    marginBottom: 4,
    paddingHorizontal: 12, // Added padding since we removed it from container
  },
  cardDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 12,
    paddingHorizontal: 12, // Added padding
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, // Added padding
    paddingBottom: 16, // Added bottom padding
  },
  viewText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  largeCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  largeCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  largeCardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  largeCardText: {
    flex: 1,
  },
  largeCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  largeCardDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
});