import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const COLORS = {
    primary: '#2563EB',
    secondary: '#7C3AED',
    background: '#F8FAFC',
    card: '#FFFFFF',
    text: '#1E293B',
    textSecondary: '#64748B',
    white: '#FFFFFF',
};

const APP_VERSION = '1.0.0'; // Should match app.json

export default function AboutScreen() {
    const openLink = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: 'About & Privacy',
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.white,
            }} />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* App Info Header */}
                <View style={styles.headerSection}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>🦷</Text>
                    </View>
                    <Text style={styles.appName}>PocketSurgeon</Text>
                    <Text style={styles.version}>Version {APP_VERSION}</Text>
                </View>

                {/* Privacy Policy */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Privacy Policy</Text>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Effective Date:</Text> December 30, 2025
                        </Text>
                        <Text style={styles.text}>
                            PocketSurgeon ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile application collects, uses, and discloses your information.
                        </Text>

                        <Text style={styles.subTitle}>1. Information Collection</Text>
                        <Text style={styles.text}>
                            We define "Personal Information" as information that identifies you as an individual. PocketSurgeon does NOT collect, store, or transmit any Personal Information.
                        </Text>

                        <Text style={styles.subTitle}>2. Data Usage</Text>
                        <Text style={styles.text}>
                            Since we do not collect personal data, we do not use your data for any purpose other than the local functionality of the app (e.g., storing your preference for the medical disclaimer).
                        </Text>

                        <Text style={styles.subTitle}>3. Third-Party Services</Text>
                        <Text style={styles.text}>
                            This app may display content from third-party services (e.g., video hosting platforms). These services may have their own privacy policies. We encourage you to review them.
                        </Text>

                        <Text style={styles.subTitle}>4. Contact Us</Text>
                        <Text style={styles.text}>
                            If you have any questions about this Privacy Policy or need support, please contact us at: pocketsurgoen@gmail.com
                        </Text>
                    </View>
                </View>

                {/* Terms & Disclaimer */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Medical Disclaimer</Text>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            By using this app, you acknowledge and agree that:
                        </Text>
                        <View style={styles.bulletPoint}>
                            <Ionicons name="alert-circle" size={20} color={COLORS.secondary} style={{ marginTop: 2 }} />
                            <Text style={styles.bulletText}>
                                The content provided is for educational purposes only and does not constitute medical advice or professional instruction.
                            </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Ionicons name="alert-circle" size={20} color={COLORS.secondary} style={{ marginTop: 2 }} />
                            <Text style={styles.bulletText}>
                                No doctor-patient relationship is formed by your use of this app.
                            </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Ionicons name="alert-circle" size={20} color={COLORS.secondary} style={{ marginTop: 2 }} />
                            <Text style={styles.bulletText}>
                                The developers are not liable for any damages or injuries resulting from reliance on the information contained herein.
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

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 32,
        marginTop: 20,
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
    },
    iconText: {
        fontSize: 40,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 4,
    },
    version: {
        fontSize: 16,
        color: COLORS.textSecondary,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 12,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    text: {
        fontSize: 15,
        color: COLORS.textSecondary,
        marginBottom: 16,
        lineHeight: 24,
    },
    bold: {
        fontWeight: 'bold',
        color: COLORS.text,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: 8,
        marginBottom: 8,
    },
    bulletPoint: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    bulletText: {
        flex: 1,
        fontSize: 15,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
    linkCard: {
        backgroundColor: COLORS.card,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    linkContent: {
        flex: 1,
        marginLeft: 16,
    },
    linkTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
    },
    linkUrl: {
        fontSize: 14,
        color: COLORS.primary,
        marginTop: 2,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 12,
        marginTop: 8,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white,
        marginLeft: 8,
    },
});
