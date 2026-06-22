import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { useColors } from '@/hooks/useColors';
import type { Plante } from '@/data/plants';

interface Props {
  plante: Plante;
  compact?: boolean;
  numColumns?: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  Arbres: 'ARBRE',
  Arbustes: 'ARBUSTE',
  Herbes: 'HERBE',
  Lianes: 'LIANE',
  Racines: 'RACINE',
  Bois: 'BOIS',
};

const CATEGORY_ICONS: Record<string, string> = {
  Arbres: '🌳',
  Arbustes: '🌿',
  Herbes: '🌱',
  Lianes: '🪴',
  Racines: '🫚',
  Bois: '🪵',
};

export function PlantCard({ plante, compact = false, numColumns = 2 }: Props) {
  const colors = useColors();
  const router = useRouter();

  const cardHeight = compact ? 90 : numColumns >= 4 ? 105 : numColumns === 3 ? 120 : 115;
  const nomSize = compact ? 14 : numColumns >= 4 ? 14 : numColumns === 3 ? 16 : 17;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, compact && styles.containerCompact, { opacity: pressed ? 0.85 : 1 }]}
      onPress={() => router.push(`/plant/${plante.id}` as any)}
    >
      <LinearGradient
        colors={[plante.couleur, plante.couleurSecondaire]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, compact && styles.gradientCompact, { height: cardHeight }]}
      >
        <View style={styles.patternOverlay}>
          <View style={[styles.circle1, { borderColor: 'rgba(255,255,255,0.15)' }]} />
          <View style={[styles.circle2, { borderColor: 'rgba(255,255,255,0.10)' }]} />
          <View style={[styles.diamond, { borderColor: 'rgba(255,255,255,0.12)' }]} />
        </View>

        <Text style={styles.plantIcon}>
          {CATEGORY_ICONS[plante.categorie] ?? '🌿'}
        </Text>

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={[styles.badgeText, { color: colors.ivory }]}>
              {CATEGORY_LABELS[plante.categorie] ?? plante.categorie.toUpperCase()}
            </Text>
          </View>

          <View style={styles.levelRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.levelDot,
                  {
                    backgroundColor:
                      i < plante.niveauSpirituel
                        ? 'rgba(255,255,255,0.9)'
                        : 'rgba(255,255,255,0.25)',
                  },
                ]}
              />
            ))}
          </View>

          <Text style={[styles.nom, { fontSize: nomSize }, compact && styles.nomCompact]}>{plante.nom}</Text>

          {!compact && (
            <Text style={styles.pouvoir} numberOfLines={1}>
              {plante.pouvoirs[0]}
            </Text>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 6,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      web: { boxShadow: '0px 2px 6px rgba(0,0,0,0.30)' },
      default: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
    }),
  },
  containerCompact: {
    margin: 4,
  },
  gradient: {
    height: 115,
    padding: 11,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  gradientCompact: {
    height: 90,
    padding: 10,
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  plantIcon: {
    position: 'absolute',
    right: 6,
    bottom: 4,
    fontSize: 42,
    opacity: 0.25,
  },
  circle1: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
  },
  circle2: {
    position: 'absolute',
    right: 10,
    bottom: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
  },
  diamond: {
    position: 'absolute',
    left: -15,
    bottom: -15,
    width: 60,
    height: 60,
    borderWidth: 1,
    transform: [{ rotate: '45deg' }],
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700' as const,
    letterSpacing: 1.2,
  },
  levelRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 6,
  },
  levelDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  nom: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFFFFF',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  nomCompact: {
    fontSize: 14,
  },
  pouvoir: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500' as const,
    letterSpacing: 0.3,
  },
});
