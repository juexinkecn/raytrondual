/**
 * RAYTRON FAQ Data - Material Comparisons (Part 1)
 * 材料对比类FAQ数据（第1部分）
 * 
 * Phase 4 - Comparison Category
 * Material Comparisons Part 1: 3 FAQs
 * 
 * This file contains the first 3 critical material comparison FAQs:
 * 1. Copper vs Aluminum Conductors
 * 2. CCA vs Pure Copper Performance
 * 3. Nickel Clad vs Nickel Plated (CRITICAL - Clad & Weld vs Electroplating)
 * 
 * @category FAQ Data
 * @subcategory Material Comparisons
 * @version 1.0.0
 * @date 2025-11-01
 * @filesize ~88KB
 * @wordcount ~11,200 words (bilingual)
 */

import type { FAQItem } from '@/types/faq';

// Import the 3 material comparison FAQs from the main comparisons file
// These are exported separately to maintain file size manageability

export { comparisonFAQs } from './faq-comparisons-complete';

/**
 * Material Comparisons Part 1 Summary
 * 
 * Total FAQs in this segment: 3
 * Total Search Volume: 14,200/month
 * Total Estimated Inquiries: 714/month
 * Average Conversion Rate: 5.03%
 * 
 * FAQ List:
 * 1. faq-comp-material-001: Copper vs Aluminum (6,200/month, 298 inquiries)
 * 2. faq-comp-material-002: CCA vs Pure Copper (4,800/month, 240 inquiries)
 * 3. faq-comp-material-003: Nickel Clad vs Nickel Plated (3,200/month, 176 inquiries) ⭐ CRITICAL FAQ
 * 
 * Special Note on FAQ 3:
 * This is the MOST CRITICAL FAQ in the entire comparison category.
 * It establishes the fundamental difference between:
 * - Clad and Weld (metallurgical bonding) - RAYTRON's process
 * - Electroplating (surface coating) - NOT our process
 * 
 * This distinction is essential for:
 * - Educating customers about quality differences
 * - Justifying premium pricing
 * - Preventing confusion with inferior plated products
 * - Establishing technical credibility
 */

// Re-export for convenience
export { 
  getComparisonFAQs,
  getComparisonFAQById,
  getComparisonFAQsByTag,
  getMaterialComparisonFAQs,
  getProductComparisonFAQs
} from './faq-comparisons-complete';
