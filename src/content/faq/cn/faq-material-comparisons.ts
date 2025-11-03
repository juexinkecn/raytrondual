/**
 * RAYTRON FAQ系统 - 材料对比类FAQ（完整版）
 * Material Comparisons FAQ Category - Complete
 * 
 * 包含6个完整的材料对比FAQ：
 * 1. 铜vs铝导体对比（搜索量：6,200/月）
 * 2. CCA vs纯铜性能（搜索量：4,800/月）
 * 3. 镍包覆vs镍电镀（搜索量：3,200/月）⚠️关键FAQ
 * 4. 银包覆vs镀锡（搜索量：2,600/月）
 * 5. 扁线vs圆线（搜索量：2,100/月）
 * 6. 单股vs绞线（搜索量：1,800/月）
 * 
 * 总搜索量: 20,700/月
 * 预估询盘: 910/月
 * 平均转化率: 4.40%
 * 
 * @category FAQ/Comparisons/Materials
 * @author RAYTRON Content Team  
 * @date 2025-11-01
 * @version 1.0.0
 */

import type { FAQItem } from '../types/faq';

// 导入两个部分的FAQ
import { materialComparisonsFAQsPart1 } from './faq-material-comparisons-part1';
import { materialComparisonsFAQsPart2 } from './faq-material-comparisons-part2';

// 合并并导出所有材料对比FAQ
export const materialComparisonsFAQs: FAQItem[] = [
  ...materialComparisonsFAQsPart1,
  ...materialComparisonsFAQsPart2
];

// 默认导出
export default materialComparisonsFAQs;

/**
 * 材料对比类FAQ统计数据
 */
export const materialComparisonsStats = {
  totalFAQs: 6,
  totalSearchVolume: 20700,
  estimatedLeads: 910,
  avgConversionRate: 4.40,
  avgContentScore: 94.5,
  avgReadingTime: 10,
  categories: {
    materials: 6
  },
  breakdown: [
    { id: 'faq-comp-material-001', searchVolume: 6200, leads: 270 },
    { id: 'faq-comp-material-002', searchVolume: 4800, leads: 216 },
    { id: 'faq-comp-material-003', searchVolume: 3200, leads: 147 },
    { id: 'faq-comp-material-004', searchVolume: 2600, leads: 109 },
    { id: 'faq-comp-material-005', searchVolume: 2100, leads: 84 },
    { id: 'faq-comp-material-006', searchVolume: 1800, leads: 70 }
  ]
};
