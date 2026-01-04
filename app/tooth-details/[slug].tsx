// app/tooth-details/[slug].tsx
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import VideoPlayer from '../VideoPlayer';

const { width } = Dimensions.get('window');

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
    heroImage: require('../../assets/images/teeth_assets/maxillary-incisor.png'),
    anesthetic: {
      buccal: "Supraorbital or Supra-periosteal nerve block",
      palatal: "Naso-Palatine nerve block"
    },
    forceps: [
      "Upper straight incisor forceps (narrow beaks)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1OMLSWV6rsMyNYmtzSVHSEzeP2etRO_mN/view?usp=sharing"
  },
  'maxillary-canine': {
    name: "Maxillary Canine",
    type: "MAXILLARY",
    heroImage: require('../../assets/images/teeth_assets/maxillary-canine.png'),
    anesthetic: {
      buccal: "Supraorbital / Supra-periosteal nerve block",
      palatal: "Naso-Palatine nerve block"
    },
    forceps: [
      "Upper canine forceps (curved, strong beaks)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1xPvHXA1RMboidtAZji2BDdIqKu4Zi3nA/view?usp=sharing"
  },
  'maxillary-premolar': {
    name: "Maxillary Premolar",
    type: "MAXILLARY",
    heroImage: require('../../assets/images/teeth_assets/maxillary-premolar.png'),
    anesthetic: {
      buccal: "Middle Superior Alveolar (MSA) nerve block",
      palatal: "Greater Palatine nerve block"
    },
    forceps: [
      "Upper premolar forceps (universal upper forceps)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1wUVoo4DYvsuo4U3qmyDzROOdtlAaTAoe/view?usp=sharing"
  },
  'maxillary-molar': {
    name: "Maxillary Molar",
    type: "MAXILLARY",
    heroImage: require('../../assets/images/teeth_assets/maxillary-molar.png'),
    anesthetic: {
      buccal: "Posterior Superior Alveolar (PSA) nerve block",
      palatal: "Greater Palatine nerve block"
    },
    forceps: [
      "Right maxillary molar forceps",
      "Left maxillary molar forceps (anatomical beak differentiation)"
    ],
    motion: "Bucco-Palatal movement",
    videoUrl: "https://drive.google.com/file/d/1MqAwsSiHIj6b_omBzRBc4Q-43osPclJs/view?usp=sharing"
  },

  // MANDIBULAR TEETH
  'mandibular-incisor': {
    name: "Mandibular Incisor",
    type: "MANDIBULAR",
    heroImage: require('../../assets/images/teeth_assets/mandibular-incisor.png'),
    anesthetic: {
      buccal: "Inferior Alveolar Nerve (IAN) block",
      palatal: ""
    },
    forceps: [
      "Lower incisor forceps (thin, narrow beak)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1Do1qMWuQUXPJXJian-dxti4iLVCikJc2/view?usp=sharing"
  },
  'mandibular-canine': {
    name: "Mandibular Canine",
    type: "MANDIBULAR",
    heroImage: require('../../assets/images/teeth_assets/mandibular-canine.jpg'),
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: ""
    },
    forceps: [
      "Lower canine forceps (curved beaks)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1Vd-eW5yR2GlEnf7ZjpwA1JR_EzVugCmt/view?usp=sharing"
  },
  'mandibular-premolar': {
    name: "Mandibular Premolar",
    type: "MANDIBULAR",
    heroImage: require('../../assets/images/teeth_assets/mandibular-premolar.png'),
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: ""
    },
    forceps: [
      "Lower premolar forceps (slightly curved, narrow beak)"
    ],
    motion: "Rotational motion",
    videoUrl: "https://drive.google.com/file/d/1F7rTXFFZlU7I14M4HPYJ7HQvY5sGLHSq/view?usp=sharing"
  },
  'mandibular-molar': {
    name: "Mandibular Molar",
    type: "MANDIBULAR",
    heroImage: require('../../assets/images/teeth_assets/mandibular-molar.png'),
    anesthetic: {
      buccal: "Inferior Alveolar Nerve block",
      palatal: "Long Buccal Nerve block"
    },
    forceps: [
      "Lower molar forceps (anatomical beaks for bifurcation)"
    ],
    motion: "Buccal Traction Movement",
    videoUrl: "https://drive.google.com/file/d/1Cxg2qBW1RGBjQmTXMRTY24_UlaL5D6sn/view?usp=sharing"
  }
};

// Forceps Images Mapping
interface ForcepsImage {
  src: ImageSourcePropType;
  label: string;
}

const forcepsImages: Record<string, ForcepsImage[]> = {
  // Maxillary (upper) teeth
  'maxillary-incisor': [
    {
      src: require('../../assets/images/forceps-images/maxillaryanteriorforceps.jpg'),
      label: 'Maxillary Anterior Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/maxillaryanterior.jpg'),
      label: 'Maxillary Anterior Tooth',
    },
  ],
  'maxillary-canine': [
    {
      src: require('../../assets/images/forceps-images/maxillaryanteriorforceps.jpg'),
      label: 'Maxillary Canine Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/Maxillaryanterior1.jpg'),
      label: 'Maxillary Canine Region',
    },
  ],
  'maxillary-premolar': [
    {
      src: require('../../assets/images/forceps-images/maxillaryanteriorforceps.jpg'),
      label: 'Maxillary Premolar Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/maxillaryanterior.jpg'),
      label: 'Maxillary Premolar Region',
    },
  ],
  'maxillary-molar': [
    {
      src: require('../../assets/images/forceps-images/maxillaryleftandrightmolarforceps.jpg'),
      label: 'Maxillary Molar Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/maxillaryleftandrightmolarforceps1.jpg'),
      label: 'Maxillary Molar Region',
    },
  ],
  // Mandibular (lower) teeth
  'mandibular-incisor': [
    {
      src: require('../../assets/images/forceps-images/mandibularanteriorforceps.jpg'),
      label: 'Mandibular Anterior Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/mandibularanterior.jpg'),
      label: 'Mandibular Anterior Tooth',
    },
  ],
  'mandibular-canine': [
    {
      src: require('../../assets/images/forceps-images/mandibularanteriorforceps.jpg'),
      label: 'Mandibular Canine Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/mandibularanterior.jpg'),
      label: 'Mandibular Canine Region',
    },
  ],
  'mandibular-premolar': [
    {
      src: require('../../assets/images/forceps-images/mandibularpremolarforceps.jpg'),
      label: 'Mandibular Premolar Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/mandibularpremolar.jpg'),
      label: 'Mandibular Premolar Tooth',
    },
  ],
  'mandibular-molar': [
    {
      src: require('../../assets/images/forceps-images/Mandibularmolarforceps.jpg'),
      label: 'Mandibular Molar Forceps',
    },
    {
      src: require('../../assets/images/forceps-images/mandibularmolar.jpg'),
      label: 'Mandibular Molar Tooth',
    },
  ],
};

export default function ToothDetailScreen() {
  const { slug } = useLocalSearchParams();
  const tooth = teethData[slug as keyof typeof teethData];
  const [previewImage, setPreviewImage] = useState<ForcepsImage | null>(null);


  if (!tooth) {
    return (
      <View style={styles.section}>
        <Text>Tooth not found</Text>
        <Link href="/" asChild>
          <Ionicons name="videocam" size={24} color={COLORS.primary} />
          <Text style={styles.sectionTitle}>Surgical Video</Text>
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

      {/* Image Preview Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={!!previewImage}
        onRequestClose={() => setPreviewImage(null)}
        accessibilityViewIsModal
        accessibilityLabel="Image preview"
      >
        <Pressable
          style={styles.previewOverlay}
          onPress={() => setPreviewImage(null)}
          accessibilityLabel="Close image preview"
        >
          <View style={styles.previewContent}>
            <TouchableOpacity
              style={styles.previewClose}
              onPress={() => setPreviewImage(null)}
              accessibilityLabel="Close"
              accessibilityRole="button"
            >
              <Ionicons name="close-circle" size={32} color={COLORS.white} />
            </TouchableOpacity>
            {previewImage && (
              <>
                <Image
                  source={previewImage.src}
                  style={styles.previewImage}
                  resizeMode="contain"
                  accessibilityLabel={previewImage.label}
                />
                <Text style={styles.previewLabel}>{previewImage.label}</Text>
              </>
            )}
          </View>
        </Pressable>
      </Modal>

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

        {/* Hero Image */}
        {tooth.heroImage && (
          <View style={styles.heroContainer}>
            <Image
              source={tooth.heroImage}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
        )}

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

            {/* Forceps Images */}
            {(forcepsImages[slug as string] ?? []).length > 0 && (
              <View style={styles.imagesContainer}>
                {forcepsImages[slug as string].map((img, index) => (
                  <TouchableOpacity
                    key={`forceps-img-${index}`}
                    style={styles.imageCard}
                    activeOpacity={0.8}
                    onPress={() => setPreviewImage(img)}
                    accessibilityLabel={`View ${img.label}`}
                    accessibilityRole="button"
                  >
                    <Image
                      source={img.src}
                      style={styles.forcepsImage}
                      resizeMode="cover"
                      accessibilityLabel={img.label}
                    />
                    <View style={styles.imageOverlay}>
                      <Ionicons name="expand" size={20} color={COLORS.white} />
                      <Text style={styles.imageLabel}>{img.label}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
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

        {/* 4. Surgical Video Only */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="videocam" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>Surgical Video</Text>
          </View>
          {tooth.videoUrl ? (
            <VideoPlayer
              url={tooth.videoUrl}
              title={`${tooth.name} Extraction`}
              description="Step-by-step surgical procedure"
              height={240}
              showControls={true}
            />
          ) : (
            <View style={styles.noVideoCard}>
              <Ionicons name="videocam-off" size={48} color={COLORS.textSecondary} />
              <Text style={styles.noVideoTitle}>Video Not Available</Text>
              <Text style={styles.noVideoText}>
                Surgical video for this tooth is coming soon
              </Text>
            </View>
          )}
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
  noVideoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noVideoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  noVideoText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
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
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  imageCard: {
    flex: 1,
    minWidth: '48%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  forcepsImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  imageLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.white,
  },
  previewOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  previewContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  previewClose: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 4,
  },
  previewImage: {
    width: '100%',
    height: '80%',
    maxWidth: '100%',
    maxHeight: '80%',
  },
  previewLabel: {
    marginTop: 20,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 20,
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
    // fontSize: 24,openVideo 
    // fontWeight: 'bold',
    // color: COLORS.primary,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
    borderRadius: 12,
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
  heroContainer: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
    backgroundColor: COLORS.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
});