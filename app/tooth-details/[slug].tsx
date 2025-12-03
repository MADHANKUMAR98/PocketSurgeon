// app/tooth-details/[slug].tsx
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
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

// COMPLETE DATA FOR ALL 8 TEETH
const teethData = {
  // MAXILLARY TEETH
  'maxillary-incisor': {
    name: "Maxillary Incisor",
    type: "MAXILLARY",
    anesthetic: {
      buccal: "Supraorbital or Supra-periosteal nerve block",
      palatal: "Naso-Palatine nerve block"
    },
    forceps: [
      "Upper straight incisor forceps (narrow beaks)"
    ],
    motion: "Rotational motion",
    videos: {
      surgical: "surgical_video_1",
      anesthetic: "anesthetic_video_1"
    }
  },
  'maxillary-canine': {
    name: "Maxillary Canine", 
    type: "MAXILLARY",
    anesthetic: {
      buccal: "Supraorbital / Supra-periosteal nerve block",
      palatal: "Naso-Palatine nerve block"
    },
    forceps: [
      "Upper canine forceps (curved, strong beaks)"
    ],
    motion: "Rotational motion",
    videos: {
      surgical: "surgical_video_2",
      anesthetic: "anesthetic_video_2" 
    }
  },
  'maxillary-premolar': {
    name: "Maxillary Premolar",
    type: "MAXILLARY",
    anesthetic: {
      buccal: "Middle Superior Alveolar (MSA) nerve block",
      palatal: "Greater Palatine nerve block"
    },
    forceps: [
      "Upper premolar forceps (universal upper forceps)"
    ],
    motion: "Rotational motion", 
    videos: {
      surgical: "surgical_video_3",
      anesthetic: "anesthetic_video_3"
    }
  },
  'maxillary-molar': {
    name: "Maxillary Molar",
    type: "MAXILLARY", 
    anesthetic: {
      buccal: "Posterior Superior Alveolar (PSA) nerve block",
      palatal: "Greater Palatine nerve block"
    },
    forceps: [
      "Right maxillary molar forceps",
      "Left maxillary molar forceps (anatomical beak differentiation)"
    ],
    motion: "Bucco-Palatal movement",
    videos: {
      surgical: "surgical_video_4",
      anesthetic: "anesthetic_video_4"
    }
  },

  // MANDIBULAR TEETH
  'mandibular-incisor': {
    name: "Mandibular Incisor",
    type: "MANDIBULAR",
    anesthetic: {
      buccal: "Inferior Alveolar Nerve (IAN) block", 
      palatal: ""
    },
    forceps: [
      "Lower incisor forceps (thin, narrow beak)"
    ],
    motion: "Rotational motion",
    videos: {
      surgical: "surgical_video_5",
      anesthetic: "anesthetic_video_5"
    }
  },
  'mandibular-canine': {
    name: "Mandibular Canine",
    type: "MANDIBULAR", 
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: ""
    },
    forceps: [
      "Lower canine forceps (curved beaks)" 
    ],
    motion: "Rotational motion",
    videos: {
      surgical: "surgical_video_6",
      anesthetic: "anesthetic_video_6"
    }
  },
  'mandibular-premolar': {
    name: "Mandibular Premolar", 
    type: "MANDIBULAR",
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: ""
    },
    forceps: [
      "Lower premolar forceps (slightly curved, narrow beak)"
    ],
    motion: "Rotational motion",
    videos: {
      surgical: "surgical_video_7", 
      anesthetic: "anesthetic_video_7"
    }
  },
  'mandibular-molar': {
    name: "Mandibular Molar",
    type: "MANDIBULAR",
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: "Long Buccal Nerve block"
    },
    forceps: [
      "Lower molar forceps (anatomical beaks for bifurcation)" 
    ],
    motion: "Buccal Traction Movement",
    videos: {
      surgical: "surgical_video_8",
      anesthetic: "anesthetic_video_8"
    }
  }
};

export default function ToothDetailScreen() {
  const { slug } = useLocalSearchParams();
  const tooth = teethData[slug as keyof typeof teethData];

  if (!tooth) {
    return (
      <View style={styles.container}>
        <Text>Tooth not found</Text>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back to Procedures</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: tooth.name,
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white
      }} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.toothName}>{tooth.name}</Text>
          <View style={styles.typeBadge}>
            <Text style={styles.typeText}>{tooth.type}</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 1. Local Anesthetic Technique */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bandage" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>Local Anesthetic Technique</Text>
          </View>
          
          <View style={styles.card}>
            <View style={styles.anestheticRow}>
              <View style={styles.labelContainer}>
                <Ionicons name="location" size={16} color={COLORS.primary} />
                <Text style={styles.label}>Buccal:</Text>
              </View>
              <Text style={styles.value}>{tooth.anesthetic.buccal}</Text>
            </View>
            
            {tooth.anesthetic.palatal && (
              <View style={styles.anestheticRow}>
                <View style={styles.labelContainer}>
                  <Ionicons name="location" size={16} color={COLORS.primary} />
                  <Text style={styles.label}>Palatal:</Text>
                </View>
                <Text style={styles.value}>{tooth.anesthetic.palatal}</Text>
              </View>
            )}
          </View>
        </View>

        {/* 2. Forceps Used */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="hammer" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>Forceps Used</Text>
          </View>
          
          <View style={styles.card}>
            {tooth.forceps.map((forcep, index) => (
              <View key={index} style={styles.forcepsItem}>
                <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />
                <Text style={styles.forcepsText}>{forcep}</Text>
              </View>
            ))}
            
            {/* Image Placeholders */}
            <View style={styles.imagesContainer}>
              <View style={styles.imagePlaceholder}>
                <Ionicons name="image" size={32} color={COLORS.textSecondary} />
                <Text style={styles.imageText}>Forceps Image 1</Text>
              </View>
              <View style={styles.imagePlaceholder}>
                <Ionicons name="image" size={32} color={COLORS.textSecondary} />
                <Text style={styles.imageText}>Forceps Image 2</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 3. Motion for Extraction */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="move" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>Motion for Extraction</Text>
          </View>
          
          <View style={styles.motionCard}>
            <View style={styles.motionIcon}>
              <Ionicons name="sync" size={32} color={COLORS.primary} />
            </View>
            <View style={styles.motionInfo}>
              <Text style={styles.motionLabel}>Primary Motion</Text>
              <Text style={styles.motionValue}>{tooth.motion}</Text>
            </View>
          </View>
        </View>

        {/* 4. Procedure Videos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="videocam" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>Procedure Videos</Text>
          </View>
          
          <View style={styles.card}>
            {/* Surgical Video */}
            <TouchableOpacity style={styles.videoButton}>
              <View style={styles.videoIcon}>
                <Ionicons name="play-circle" size={28} color={COLORS.primary} />
              </View>
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>Surgical Video</Text>
                <Text style={styles.videoDescription}>Step-by-step extraction procedure</Text>
              </View>
              <Ionicons name="play" size={20} color={COLORS.primary} />
            </TouchableOpacity>

            {/* Anesthetic Video */}
            <TouchableOpacity style={styles.videoButton}>
              <View style={styles.videoIcon}>
                <Ionicons name="medkit" size={28} color={COLORS.secondary} />
              </View>
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>Anesthetic Video</Text>
                <Text style={styles.videoDescription}>Nerve block technique demonstration</Text>
              </View>
              <Ionicons name="play" size={20} color={COLORS.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Back Button */}
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color={COLORS.white} />
            <Text style={styles.backButtonText}>BACK TO ALL TEETH</Text>
          </TouchableOpacity>
        </Link>
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
    padding: 20,
    paddingTop: 60,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toothName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  typeBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  anestheticRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 80,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  value: {
    fontSize: 16,
    color: COLORS.textSecondary,
    flex: 1,
    lineHeight: 22,
  },
  forcepsItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  forcepsText: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
    lineHeight: 22,
  },
  imagesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  imagePlaceholder: {
    flex: 1,
    height: 120,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
  },
  imageText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 8,
  },
  motionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  motionIcon: {
    marginRight: 16,
  },
  motionInfo: {
    flex: 1,
  },
  motionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  motionValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
  },
  videoIcon: {
    // Icon styling handled by Ionicons
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  videoDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 40,
    gap: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});