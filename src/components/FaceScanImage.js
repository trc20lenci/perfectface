import React from "react";
import { View, Image, Text } from "react-native";

/**
 * FaceScanImage
 * ------------------------------------------------------------------
 * ЭТО ЦЕНТРАЛЬНЫЙ КОМПОНЕНТ ДЛЯ ВСЕХ ФОТО С 3D-СЕТКОЙ СКАНИРОВАНИЯ.
 * Используется на Scan (до/после), Extras и в карточках результатов.
 *
 * // ТУТ ДОЛЖНО БЫТЬ ФОТО ПОЛЬЗОВАТЕЛЯ С 3D-СЕТКОЙ ИЗ АССЕТОВ
 * Подставь реальный ассет через проп `source`, например:
 *   <FaceScanImage source={require('../../assets/images/face-grid-male-1.png')} />
 *
 * Пока источник не передан, рендерится плейсхолдер, чтобы верстка
 * не ломалась и было видно, где именно должно быть фото.
 *
 * @param {object} props
 * @param {import('react-native').ImageSourcePropType} [props.source] - реальный ассет с фото+сеткой
 * @param {'hero'|'circle'|'card'} [props.variant='hero'] - hero = крупный блок (>=40% высоты экрана),
 *        circle = маленькое круглое фото профиля на экране результатов, card = средняя карточка (Extras)
 * @param {string} [props.className] - дополнительные nativewind классы для контейнера
 */
export default function FaceScanImage({ source, variant = "hero", className = "" }) {
  // ТУТ ДОЛЖНО БЫТЬ ФОТО ПОЛЬЗОВАТЕЛЯ С 3D-СЕТКОЙ ИЗ АССЕТОВ
  const PLACEHOLDER_URI = "FACE_GRID_IMAGE_PLACEHOLDER";

  if (variant === "circle") {
    return (
      <View
        className={`w-28 h-28 rounded-full overflow-hidden border-2 border-neonPurple bg-cardAlt items-center justify-center ${className}`}
      >
        <Image
          source={source || { uri: PLACEHOLDER_URI }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {!source && (
          <Text className="absolute text-[9px] text-textSecondary text-center px-1">
            FACE GRID{"\n"}PHOTO
          </Text>
        )}
      </View>
    );
  }

  if (variant === "card") {
    return (
      <View
        className={`w-full rounded-3xl overflow-hidden bg-cardAlt border border-border ${className}`}
        style={{ height: "42%" }}
      >
        <Image
          source={source || { uri: PLACEHOLDER_URI }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {!source && (
          <View className="absolute inset-0 items-center justify-center">
            <Text className="text-textSecondary text-xs text-center px-4">
              // ТУТ ДОЛЖНО БЫТЬ ФОТО ПОЛЬЗОВАТЕЛЯ{"\n"}С 3D-СЕТКОЙ ИЗ АССЕТОВ
            </Text>
          </View>
        )}
      </View>
    );
  }

  // hero (default) - min 40% of screen height, large rounded corners
  return (
    <View
      className={`w-full rounded-3xl overflow-hidden bg-cardAlt border border-border ${className}`}
      style={{ minHeight: "45%" }}
    >
      <Image
        source={source || { uri: PLACEHOLDER_URI }}
        className="w-full h-full"
        resizeMode="cover"
      />
      {!source && (
        <View className="absolute inset-0 items-center justify-center bg-black/30">
          <Text className="text-textSecondary text-sm text-center px-6 font-semibold">
            // ТУТ ДОЛЖНО БЫТЬ ФОТО ПОЛЬЗОВАТЕЛЯ{"\n"}С 3D-СЕТКОЙ ИЗ АССЕТОВ{"\n"}
            (face-grid-scan.png)
          </Text>
        </View>
      )}
    </View>
  );
}
