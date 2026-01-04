import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const DISCLAIMER_STORAGE_KEY = 'has_accepted_medical_disclaimer_v1';

const COLORS = {
  primary: '#2563EB',
  background: 'rgba(0,0,0,0.6)',
  card: '#FFFFFF',
  text: '#1E293B',
  textSecondary: '#64748B',
  white: '#FFFFFF',
  warning: '#F59E0B',
};

export default function MedicalDisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    checkDisclaimerStatus();
  }, []);

  const checkDisclaimerStatus = async () => {
    try {
      const hasAccepted = await AsyncStorage.getItem(DISCLAIMER_STORAGE_KEY);
      if (!hasAccepted) {
        setVisible(true);
      }
    } catch (error) {
      console.error('Error checking disclaimer status:', error);
    }
  };

  const handleAccept = async () => {
    try {
      await AsyncStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
      setVisible(false);
    } catch (error) {
      console.error('Error saving disclaimer status:', error);
    }
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}} // Prevent back button closing
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Ionicons name="warning" size={32} color={COLORS.warning} />
            <Text style={styles.title}>Medical Disclaimer</Text>
          </View>
          
          <ScrollView style={styles.content} showsVerticalScrollIndicator={true}>
            <Text style={styles.text}>
              <Text style={styles.bold}>Please read carefully before using this app:</Text>
            </Text>
            
            <Text style={styles.text}>
              1. <Text style={styles.bold}>Educational Use Only:</Text> PocketSurgeon is intended solely for educational and informational purposes for dental students and professionals. It does NOT constitute medical advice.
            </Text>
            
            <Text style={styles.text}>
              2. <Text style={styles.bold}>Not a Substitute for Training:</Text> This app is not a replacement for formal dental education, professional training, or clinical judgment.
            </Text>
            
            <Text style={styles.text}>
              3. <Text style={styles.bold}>No Liability:</Text> The developers and creators of this app assume no liability for any actions taken based on the information provided herein. Usage of any techniques described is at your own risk.
            </Text>
            
            <Text style={styles.text}>
              4. <Text style={styles.bold}>Professional Standards:</Text> Users are responsible for adhering to their local medical/dental regulations and standards of care.
            </Text>
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleAccept}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>I Understand & Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    width: '100%',
    maxWidth: 400,
    borderRadius: 20,
    padding: 24,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 12,
  },
  content: {
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
