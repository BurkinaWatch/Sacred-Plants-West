import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { PlantCategorie } from '@/data/plants';
import { PLANT_CATEGORIES } from '@/data/plants';
import { useColors } from '@/hooks/useColors';
import { useTranslation } from '@/i18n';

interface Props {
  selected: PlantCategorie | null;
  onSelect: (cat: PlantCategorie | null) => void;
}

const ICONS: Record<PlantCategorie | 'all', string> = {
  all: '✦',
  Arbres: '🌳',
  Arbustes: '🌿',
  Herbes: '🌱',
  Lianes: '🪴',
  Racines: '🫚',
  Bois: '🪵',
};

export function CategoryFilter({ selected, onSelect }: Props) {
  const colors = useColors();
  const { t } = useTranslation();

  const CAT_LABELS: Record<PlantCategorie, string> = {
    Arbres: t.cat_mammals,
    Arbustes: t.cat_birds,
    Herbes: t.cat_reptiles,
    Lianes: t.cat_amphibians,
    Racines: t.cat_aquatic,
    Bois: t.cat_invertebrates,
  };

  const items: (PlantCategorie | null)[] = [null, ...PLANT_CATEGORIES];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {items.map((cat) => {
        const isActive = selected === cat;
        const icon = cat ? ICONS[cat] : ICONS['all'];
        const label = cat ? CAT_LABELS[cat] : t.cat_all;
        return (
          <Pressable
            key={cat ?? 'all'}
            style={({ pressed }) => [
              styles.chip,
              {
                backgroundColor: isActive ? colors.gold : colors.card,
                borderColor: isActive ? colors.gold : colors.border,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={() => onSelect(cat)}
          >
            <Text style={[styles.chipIcon, { color: isActive ? colors.deepBrown : colors.gold }]}>
              {icon}
            </Text>
            <Text
              style={[
                styles.chipText,
                { color: isActive ? colors.deepBrown : colors.ivory },
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8,
    paddingVertical: 4,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  chipIcon: {
    fontSize: 12,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600' as const,
    letterSpacing: 0.3,
  },
});
