// app/(tabs)/index.tsx
import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

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
    id: 1, name: "Maxillary Incisor", slug: "maxillary-incisor", icon: "🦷",
    description: "Anterior Extraction", color: COLORS.primary
  },
  {
    id: 2, name: "Maxillary Canine", slug: "maxillary-canine", icon: "🐕",
    description: "Canine Extraction", color: COLORS.secondary
  },
  {
    id: 3, name: "Maxillary Premolar", slug: "maxillary-premolar", icon: "⚡",
    description: "Premolar Procedure", color: COLORS.accent
  },
  {
    id: 4, name: "Maxillary Molar", slug: "maxillary-molar", icon: "🦴",
    description: "Molar Extraction", color: COLORS.primary
  },
  {
    id: 5, name: "Mandibular Incisor", slug: "mandibular-incisor", icon: "🦷",
    description: "Anterior Extraction", color: COLORS.secondary
  },
  {
    id: 6, name: "Mandibular Canine", slug: "mandibular-canine", icon: "🐕",
    description: "Canine Extraction", color: COLORS.accent
  },
  {
    id: 7, name: "Mandibular Premolar", slug: "mandibular-premolar", icon: "⚡",
    description: "Premolar Procedure", color: COLORS.primary
  },
  {
    id: 8, name: "Mandibular Molar", slug: "mandibular-molar", icon: "🦴",
    description: "Molar Extraction", color: COLORS.secondary
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.appTitle}>🦷 Pocket Surgeon</Text>
            <Text style={styles.appSubtitle}>Dental Extraction Guide</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Teeth</Text>
          </View>
        </View>
      </View>

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
            Comprehensive dental extraction techniques and procedures.
          </Text>
        </View>

        {/* Teeth Grid - Simple & Responsive */}
        <View style={styles.gridSection}>
          <Text style={styles.sectionTitle}>Extraction Procedures</Text>
          <View style={styles.grid}>
            {teethData.map((tooth) => (
              <Link key={tooth.id} href={`/tooth-details/${tooth.slug}`} asChild>
                <TouchableOpacity style={styles.toothCard}>
                  <Text style={styles.cardIcon}>{tooth.icon}</Text>
                  <Text style={styles.cardTitle}>{tooth.name}</Text>
                  <Text style={styles.cardDescription}>{tooth.description}</Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.viewText}>View Details</Text>
                    <Ionicons name="chevron-forward" size={16} color={COLORS.primary} />
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>
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
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
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
  gridSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  toothCard: {
    width: '48%', // This automatically adapts to screen size
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
});