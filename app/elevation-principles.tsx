// app/elevation-principles.tsx - COMPLETE UPDATED VERSION
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import VideoPlayer from './VideoPlayer';

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

const videoUrl = 'https://drive.google.com/file/d/1izmQjY8-A9FU4bX3YzpfRMdZeAzzWsOO/view?usp=drive_web';

export default function ElevationPrinciplesScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: 'Elevation Principles',
        headerStyle: { backgroundColor: COLORS.accent },
        headerTintColor: COLORS.white
      }} />

      <View style={[styles.header, { backgroundColor: COLORS.accent }]}>
        <Text style={styles.headerTitle}>Elevation Principles</Text>
        <Text style={styles.headerSubtitle}>Master Dental Elevation Techniques</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="git-compare" size={40} color={COLORS.accent} />
            <Text style={styles.cardTitle}>Dental Elevation Principles</Text>
          </View>
          
          <Text style={styles.cardDescription}>
            Comprehensive guide to dental elevation techniques and principles for successful extractions.
            Watch the complete video demonstration below.
          </Text>
          
          <VideoPlayer 
            url={videoUrl}
            title="Complete Elevation Techniques"
            description="Full video demonstration of dental elevation principles"
            height={250}
            showControls={true}
          />
        </View>

        <View style={styles.principlesSection}>
          <Text style={styles.sectionTitle}>Key Principles</Text>
          
          <View style={styles.principleCard}>
            <View style={styles.principleIcon}>
              <Ionicons name="git-branch" size={24} color={COLORS.accent} />
            </View>
            <View style={styles.principleContent}>
              <Text style={styles.principleTitle}>Mechanical Principles</Text>
              <Text style={styles.principleDescription}>
                Understanding leverage, wedges, and wheel & axle mechanics in dental elevation.
              </Text>
            </View>
          </View>
          
          <View style={styles.principleCard}>
            <View style={styles.principleIcon}>
              <Ionicons name="hammer" size={24} color={COLORS.accent} />
            </View>
            <View style={styles.principleContent}>
              <Text style={styles.principleTitle}>Instrument Selection</Text>
              <Text style={styles.principleDescription}>
                Choosing the right elevator for each clinical situation and tooth type.
              </Text>
            </View>
          </View>
          
          <View style={styles.principleCard}>
            <View style={styles.principleIcon}>
              <Ionicons name="move" size={24} color={COLORS.accent} />
            </View>
            <View style={styles.principleContent}>
              <Text style={styles.principleTitle}>Force Application</Text>
              <Text style={styles.principleDescription}>
                Proper direction and magnitude of force application to minimize tissue trauma.
              </Text>
            </View>
          </View>
          
          <View style={styles.principleCard}>
            <View style={styles.principleIcon}>
              <Ionicons name="shield-checkmark" size={24} color={COLORS.accent} />
            </View>
            <View style={styles.principleContent}>
              <Text style={styles.principleTitle}>Bone Preservation</Text>
              <Text style={styles.principleDescription}>
                Techniques to minimize trauma to alveolar bone during elevation procedures.
              </Text>
            </View>
          </View>
        </View>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color={COLORS.white} />
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </Link>
        
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
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  mainCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 12,
    flex: 1,
  },
  cardDescription: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  principlesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  principleCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  principleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  principleContent: {
    flex: 1,
  },
  principleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  principleDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.accent,
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
});