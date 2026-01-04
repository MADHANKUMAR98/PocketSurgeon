// app/anesthetic-videos.tsx - COMPLETE UPDATED VERSION
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
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

const anestheticVideos = [
  {
    id: 1,
    title: 'Supraperiosteal & Nasopalatine Nerve Block',
    description: 'Anesthetic technique for maxillary anterior teeth',
    videoUrl: 'https://drive.google.com/file/d/1GNWh0pzTlJROlOvlDAgE2UiXoMpEz6t1/view?usp=drive_web',
    duration: '4:30',
    techniques: [
      'Supraorbital nerve block',
      'Naso-Palatine nerve block',
      'Infiltration techniques'
    ]
  },
  {
    id: 2,
    title: 'Superior Alveolar Nerve Blocks',
    description: 'MSA & PSA nerve block techniques',
    videoUrl: 'https://drive.google.com/file/d/1u_pA-Wps-CDUNde0KwejsElKR48wjJNQ/view?usp=drive_web',
    duration: '5:15',
    techniques: [
      'Middle Superior Alveolar (MSA)',
      'Posterior Superior Alveolar (PSA)',
      'Greater Palatine nerve block'
    ]
  },
  {
    id: 3,
    title: 'Inferior Alveolar & Long Buccal Nerve Block',
    description: 'Mandibular anesthesia techniques',
    videoUrl: 'https://drive.google.com/file/d/1SDE-JVQXlkFfzGn9jJQTaE-sEQp96PXw/view?usp=drive_web',
    duration: '6:20',
    techniques: [
      'Inferior Alveolar Nerve (IAN) block',
      'Long Buccal Nerve block',
      'Gow-Gates technique'
    ]
  }
];

export default function AnestheticVideosScreen() {
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  const toggleVideo = (id: number) => {
    setExpandedVideo(expandedVideo === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: 'Anesthetic Videos',
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: COLORS.white
      }} />

      <View style={[styles.header, { backgroundColor: COLORS.secondary }]}>
        <Text style={styles.headerTitle}>Anesthetic Videos</Text>
        <Text style={styles.headerSubtitle}>Watch videos directly in the app</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.introCard}>
          <Ionicons name="bandage" size={32} color={COLORS.secondary} />
          <Text style={styles.introTitle}>Anesthetic Techniques Series</Text>
          <Text style={styles.introText}>
            These 3 videos cover all essential dental anesthesia techniques.
            Watch directly in the app with full playback controls.
          </Text>
        </View>

        <View style={styles.videosSection}>
          {anestheticVideos.map((video) => (
            <View key={video.id} style={styles.videoCard}>
              <TouchableOpacity
                style={styles.videoHeader}
                onPress={() => toggleVideo(video.id)}
                activeOpacity={0.8}
              >
                <View style={styles.videoNumber}>
                  <Text style={styles.videoNumberText}>0{video.id}</Text>
                </View>
                <View style={styles.videoInfo}>
                  <Text style={styles.videoTitle}>{video.title}</Text>
                  <Text style={styles.videoDescription}>{video.description}</Text>
                  <View style={styles.durationBadge}>
                    <Ionicons name="time-outline" size={14} color={COLORS.white} />
                    <Text style={styles.durationText}>{video.duration}</Text>
                  </View>
                </View>
                <Ionicons 
                  name={expandedVideo === video.id ? "chevron-up" : "chevron-down"} 
                  size={24} 
                  color={COLORS.secondary} 
                />
              </TouchableOpacity>
              
              {expandedVideo === video.id && (
                <View style={styles.expandedContent}>
                  <VideoPlayer 
                    url={video.videoUrl}
                    height={200}
                    showControls={true}
                  />
                  
                  <View style={styles.techniquesContainer}>
                    <Text style={styles.techniquesTitle}>Techniques Covered:</Text>
                    {video.techniques.map((technique, index) => (
                      <View key={index} style={styles.techniqueItem}>
                        <Ionicons name="checkmark-circle" size={16} color={COLORS.secondary} />
                        <Text style={styles.techniqueText}>{technique}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))}
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
  introCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    textAlign: 'center',
  },
  videosSection: {
    marginBottom: 20,
  },
  videoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  videoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  videoNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  videoNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  videoDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#64748B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  durationText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: '600',
    marginLeft: 4,
  },
  expandedContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  techniquesContainer: {
    backgroundColor: 'rgba(124, 58, 237, 0.05)',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  techniquesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: 8,
  },
  techniqueItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  techniqueText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    marginLeft: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
});