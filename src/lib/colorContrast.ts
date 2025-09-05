/**
 * Color contrast utilities for accessibility and dark mode compatibility
 * Based on WCAG 2.1 guidelines for AA compliance (4.5:1 ratio for normal text)
 */

// Convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio between two colors
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (lightest + 0.05) / (darkest + 0.05);
}

// Check if contrast meets WCAG AA standards
export function meetsContrastStandard(color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean {
  const ratio = getContrastRatio(color1, color2);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
}

// Our brand colors for testing - updated with accessible values
export const brandColors = {
  light: {
    background: '#fdfcf9',
    text: '#1a201a',
    textSecondary: '#2f3a2d',
    textMuted: '#5a6e57',
    sage: '#3d4a3a',  // Darker sage for better contrast
    gold: '#9c5d14',  // Darker gold for better contrast  
    terracotta: '#a23b24',  // Darker terracotta for better contrast
  },
  dark: {
    background: '#1a201a',
    text: '#f8f9f8',
    textSecondary: '#e6ede6',
    textMuted: '#b4c4b4',
    sage: '#8fa68f',
    gold: '#f4b429',
    terracotta: '#df8666',  // Lighter terracotta for dark mode
  }
};

// Test all color combinations for accessibility
export function testColorAccessibility() {
  console.log('🎨 Color Accessibility Test Results:');
  console.log('=====================================');
  
  // Test light mode
  console.log('\n🌞 Light Mode:');
  const lightBg = brandColors.light.background;
  Object.entries(brandColors.light).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, lightBg);
      const meets = meetsContrastStandard(color, lightBg);
      console.log(`${meets ? '✅' : '❌'} ${name}: ${ratio.toFixed(2)}:1 ${meets ? '(PASS)' : '(FAIL)'}`);
    }
  });
  
  // Test dark mode
  console.log('\n🌙 Dark Mode:');
  const darkBg = brandColors.dark.background;
  Object.entries(brandColors.dark).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, darkBg);
      const meets = meetsContrastStandard(color, darkBg);
      console.log(`${meets ? '✅' : '❌'} ${name}: ${ratio.toFixed(2)}:1 ${meets ? '(PASS)' : '(FAIL)'}`);
    }
  });
}

// Get the appropriate text color for maximum contrast on a background
export function getTextColorForBackground(backgroundColor: string): string {
  const whiteContrast = getContrastRatio('#ffffff', backgroundColor);
  const blackContrast = getContrastRatio('#000000', backgroundColor);
  
  return whiteContrast > blackContrast ? '#ffffff' : '#000000';
}
