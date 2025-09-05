#!/usr/bin/env node

/**
 * Accessibility Check Script
 * Run this during build process to ensure color accessibility
 * Usage: node scripts/check-accessibility.js
 */

// Simple Node.js version without imports for broader compatibility
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (lightest + 0.05) / (darkest + 0.05);
}

function meetsContrastStandard(color1, color2) {
  const ratio = getContrastRatio(color1, color2);
  return ratio >= 4.5; // WCAG AA standard
}

// Brand colors with improved contrast
const brandColors = {
  light: {
    background: '#fdfcf9',
    text: '#1a201a',
    textSecondary: '#2f3a2d',
    textMuted: '#5a6e57',
    sage: '#3d4a3a',  // Darker sage for better contrast
    gold: '#9c5d14',  // Even darker gold for better contrast  
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

function runAccessibilityCheck() {
  console.log('🎨 Running Color Accessibility Check...');
  console.log('=====================================');
  
  let allPassed = true;
  
  // Test light mode
  console.log('\n🌞 Light Mode:');
  const lightBg = brandColors.light.background;
  Object.entries(brandColors.light).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, lightBg);
      const passes = meetsContrastStandard(color, lightBg);
      const status = passes ? '✅ PASS' : '❌ FAIL';
      console.log(`   ${status} ${name}: ${ratio.toFixed(2)}:1`);
      if (!passes) allPassed = false;
    }
  });
  
  // Test dark mode
  console.log('\n🌙 Dark Mode:');
  const darkBg = brandColors.dark.background;
  Object.entries(brandColors.dark).forEach(([name, color]) => {
    if (name !== 'background') {
      const ratio = getContrastRatio(color, darkBg);
      const passes = meetsContrastStandard(color, darkBg);
      const status = passes ? '✅ PASS' : '❌ FAIL';
      console.log(`   ${status} ${name}: ${ratio.toFixed(2)}:1`);
      if (!passes) allPassed = false;
    }
  });
  
  console.log('\n=====================================');
  
  if (allPassed) {
    console.log('✅ All colors pass WCAG AA accessibility standards!');
    process.exit(0);
  } else {
    console.log('❌ Some colors fail accessibility standards. Please review and adjust.');
    console.log('💡 Minimum ratio needed: 4.5:1 for WCAG AA compliance');
    process.exit(1);
  }
}

// Run the check
runAccessibilityCheck();
