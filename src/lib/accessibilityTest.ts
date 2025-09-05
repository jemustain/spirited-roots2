/**
 * Automated Color Contrast Testing for CI/CD
 * This script can be run during build to ensure all colors meet accessibility standards
 */

import { getContrastRatio, meetsContrastStandard, brandColors } from './colorContrast';

interface TestResult {
  combination: string;
  ratio: number;
  passes: boolean;
  mode: 'light' | 'dark';
}

export function runAccessibilityTests(): TestResult[] {
  const results: TestResult[] = [];
  
  // Test light mode combinations
  const lightBg = brandColors.light.background;
  Object.entries(brandColors.light).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, lightBg);
      const passes = meetsContrastStandard(color, lightBg);
      results.push({
        combination: `${name} on light background`,
        ratio,
        passes,
        mode: 'light'
      });
    }
  });
  
  // Test dark mode combinations
  const darkBg = brandColors.dark.background;
  Object.entries(brandColors.dark).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, darkBg);
      const passes = meetsContrastStandard(color, darkBg);
      results.push({
        combination: `${name} on dark background`,
        ratio,
        passes,
        mode: 'dark'
      });
    }
  });
  
  return results;
}

export function validateAccessibility(): boolean {
  const results = runAccessibilityTests();
  const failures = results.filter(r => !r.passes);
  
  if (failures.length > 0) {
    console.error('❌ Accessibility failures detected:');
    failures.forEach(failure => {
      console.error(`   ${failure.combination}: ${failure.ratio.toFixed(2)}:1 (needs 4.5:1)`);
    });
    return false;
  }
  
  console.log('✅ All color combinations pass accessibility standards!');
  return true;
}

// Browser-compatible function to check current system preference
export function getSystemColorScheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

// Function to automatically adjust colors based on contrast requirements
export function getAccessibleColor(textColor: string, backgroundColor: string, fallbackLight: string, fallbackDark: string): string {
  const meets = meetsContrastStandard(textColor, backgroundColor);
  
  if (meets) {
    return textColor;
  }
  
  // If original doesn't meet standards, try fallbacks
  const lightMeets = meetsContrastStandard(fallbackLight, backgroundColor);
  const darkMeets = meetsContrastStandard(fallbackDark, backgroundColor);
  
  if (lightMeets) return fallbackLight;
  if (darkMeets) return fallbackDark;
  
  // If nothing works, return high contrast option
  const lightContrast = getContrastRatio('#ffffff', backgroundColor);
  const darkContrast = getContrastRatio('#000000', backgroundColor);
  
  return lightContrast > darkContrast ? '#ffffff' : '#000000';
}
