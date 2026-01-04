// app/components/VideoPlayer.tsx
import { Ionicons } from '@expo/vector-icons';
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

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
  black: '#000000',
};

interface VideoPlayerProps {
  url: string;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  autoPlay?: boolean;
  showControls?: boolean;
  height?: number;
}

export default function VideoPlayer({ 
  url, 
  title, 
  description, 
  thumbnailUrl,
  autoPlay = false,
  showControls = true,
  height = 220 
}: VideoPlayerProps) {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Convert Google Drive URL to direct download URL
  const getDirectUrl = (driveUrl: string): string => {
    if (!driveUrl) return '';
    
    // Handle different Google Drive URL formats
    if (driveUrl.includes('drive.google.com')) {
      // Format 1: https://drive.google.com/file/d/VIDEO_ID/view?usp=sharing
      const match1 = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match1 && match1[1]) {
        return `https://drive.google.com/uc?export=download&id=${match1[1]}`;
      }
      
      // Format 2: https://drive.google.com/uc?id=VIDEO_ID&export=download
      const match2 = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (match2 && match2[1]) {
        return `https://drive.google.com/uc?export=download&id=${match2[1]}`;
      }
    }
    
    return driveUrl;
  };

  const directUrl = getDirectUrl(url);

  if (!directUrl || directUrl === '') {
    return (
      <View style={[styles.container, { height }]}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={40} color="#DC2626" />
          <Text style={styles.errorText}>Video not available</Text>
          <Text style={styles.errorSubtext}>This video is currently unavailable</Text>
        </View>
      </View>
    );
  }

  const handlePlayPause = async () => {
    if (status.isLoaded) {
      if (status.isPlaying) {
        await videoRef.current?.pauseAsync();
        setIsPlaying(false);
      } else {
        await videoRef.current?.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const handleReplay = async () => {
    await videoRef.current?.replayAsync();
    setIsPlaying(true);
  };

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.videoTitle}>{title}</Text>
          {description && (
            <Text style={styles.videoDescription}>{description}</Text>
          )}
        </View>
      )}
      
      <View style={[styles.videoWrapper, { height }]}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{ uri: directUrl }}
          useNativeControls={showControls}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(playbackStatus) => {
            setStatus(playbackStatus);
            setIsPlaying(playbackStatus.isPlaying || false);
          }}
          onLoadStart={() => setLoading(true)}
          onLoad={() => {
            setLoading(false);
            setError(false);
          }}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          shouldPlay={autoPlay}
          isLooping={false}
          isMuted={false}
          volume={1.0}
          posterSource={thumbnailUrl ? { uri: thumbnailUrl } : undefined}
        />
        
        {/* Custom Play/Pause Button (shows when native controls are hidden) */}
        {!showControls && status.isLoaded && !loading && !error && (
          <TouchableOpacity 
            style={styles.customControl}
            onPress={handlePlayPause}
            activeOpacity={0.7}
          >
            <View style={styles.playButton}>
              <Ionicons 
                name={isPlaying ? "pause" : "play"} 
                size={36} 
                color={COLORS.white} 
              />
            </View>
          </TouchableOpacity>
        )}
        
        {/* Loading Overlay */}
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Text style={styles.loadingText}>Loading video...</Text>
          </View>
        )}
        
        {/* Error Overlay */}
        {error && (
          <View style={styles.errorOverlay}>
            <Ionicons name="wifi-off" size={40} color="#DC2626" />
            <Text style={styles.errorText}>Failed to load video</Text>
            <Text style={styles.errorSubtext}>
              Please check your internet connection
            </Text>
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={() => {
                setError(false);
                setLoading(true);
                videoRef.current?.replayAsync();
              }}
            >
              <Ionicons name="refresh" size={20} color={COLORS.white} />
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Replay Button when video ends */}
        {status.isLoaded && status.didJustFinish && (
          <View style={styles.endOverlay}>
            <TouchableOpacity 
              style={styles.replayButton}
              onPress={handleReplay}
            >
              <Ionicons name="reload" size={28} color={COLORS.white} />
              <Text style={styles.replayText}>Replay</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      
      {/* Video Info Footer */}
      <View style={styles.videoInfo}>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={14} color={COLORS.textSecondary} />
            <Text style={styles.statText}>
              {status.isLoaded ? formatTime(status.durationMillis || 0) : '--:--'}
            </Text>
          </View>
          <Text style={styles.videoNote}>
            Tap for controls • Requires internet
          </Text>
        </View>
      </View>
    </View>
  );
}

// Helper function to format time
const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    padding: 16,
    paddingBottom: 12,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  videoDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  videoWrapper: {
    position: 'relative',
    backgroundColor: COLORS.black,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  customControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: COLORS.white,
    marginTop: 12,
    fontSize: 14,
  },
  errorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.card,
  },
  errorText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
  },
  errorSubtext: {
    color: '#CBD5E1',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
    gap: 8,
  },
  retryText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  endOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  replayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 99, 235, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  replayText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  videoInfo: {
    padding: 12,
    backgroundColor: 'rgba(37, 99, 235, 0.03)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  videoNote: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});