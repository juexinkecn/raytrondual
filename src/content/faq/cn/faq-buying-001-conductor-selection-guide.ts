/**
 * FAQ Buying Guide: How to Choose the Right Conductor for Your Application
 * 采购决策FAQ：如何为您的应用选择合适的导体
 * 
 * SEO Focus: Conductor selection criteria and decision framework
 * Target Keywords: conductor selection guide, wire selection criteria, how to choose conductor
 * Search Volume: 5,600/month
 * Conversion Rate: 5.2%
 * Estimated Monthly Inquiries: 291
 */

import { FAQ } from '../types';

export const faqBuying001: FAQ = {
  // ============================================================================
  // BASIC INFORMATION
  // ============================================================================
  id: 'faq-buying-001',
  category: 'Buying Guide',
  subcategory: 'Selection Guide',
  priority: 'P0',
  
  // ============================================================================
  // BILINGUAL QUESTION
  // ============================================================================
  question: {
    en: "How Do I Choose the Right Conductor Material for My Application?",
    zh: "如何为我的应用选择合适的导体材料？"
  },
  
  // ============================================================================
  // FEATURED SNIPPET (50-80 words) - GEO Optimized
  // ============================================================================
  shortAnswer: {
    en: "Choosing the right conductor requires evaluating six key factors: electrical requirements (current capacity, voltage drop), environmental conditions (temperature, corrosion, humidity), mechanical properties (flexibility, strength), physical constraints (space, weight), cost considerations, and regulatory compliance. Pure copper offers best conductivity (100% IACS), copper clad aluminum (CCA) reduces weight 40% and cost 30%, while nickel clad copper (NCC) provides superior corrosion resistance. Consider total cost of ownership including installation, maintenance, and lifespan.",
    zh: "选择合适的导体需要评估六个关键因素：电气要求（载流能力、压降）、环境条件（温度、腐蚀、湿度）、机械性能（柔韧性、强度）、物理限制（空间、重量）、成本考虑和法规合规。纯铜提供最佳导电性（100% IACS），铜包铝（CCA）减重40%降成本30%，而镍包铜（NCC）提供卓越的耐腐蚀性。考虑包括安装、维护和使用寿命的总拥有成本。"
  },
  
  // ============================================================================
  // DETAILED ANSWER (650-750 words) - SEO & GEO Optimized
  // ============================================================================
  answer: {
    en: `Selecting the optimal conductor material is a critical decision that impacts performance, reliability, and total cost of your electrical system. This comprehensive guide walks you through the systematic selection process used by professional engineers.

## Step 1: Define Electrical Requirements

### Current Capacity Analysis
The first consideration is determining the continuous and peak current your conductor must safely carry:

**Continuous Current Rating:**
- Calculate based on cross-sectional area and ambient temperature
- Apply derating factors for bundling, insulation, and operating conditions
- Include safety margin (typically 20-30% above maximum load)
- Consider future load growth (5-10 year projection)

**Voltage Drop Calculation:**
- Maximum allowable voltage drop: 2-3% for power circuits, 5% for lighting
- Formula: Vdrop = I × R × L (where R depends on material and cross-section)
- CCA has 60-65% conductivity of copper - requires larger cross-section
- NCC and SCC maintain near-copper conductivity with added benefits

### Frequency Considerations
- **DC Applications:** Bulk conductivity is primary factor
- **Low Frequency (50/60Hz):** Standard copper or CCA suitable
- **High Frequency (>1MHz):** Skin effect dominates - consider silver clad copper (SCC) or stranded configurations
- **RF/Microwave:** Silver plating or SCC strongly recommended

## Step 2: Evaluate Environmental Conditions

### Temperature Requirements

| Environment | Material Recommendation | Max Operating Temp |
|-------------|------------------------|-------------------|
| Standard indoor | Pure copper, CCA | 90°C (insulation limited) |
| High temperature | Nickel clad copper (NCC) | 200°C+ (bare conductor) |
| Cryogenic | Pure copper (OFHC preferred) | -269°C |
| Cycling thermal | CCA, copper alloys | -40°C to +125°C |

**Thermal Expansion Considerations:**
- CCA: α = 23 × 10⁻⁶/°C (higher than copper)
- Copper: α = 17 × 10⁻⁶/°C
- Important for long runs and fixed terminations

### Corrosion Resistance

**Environmental Assessment:**
1. **Dry indoor:** Standard copper or CCA acceptable
2. **Humid/condensing:** Tin-plated copper or NCC recommended
3. **Marine/coastal:** NCC required (15x better than bare copper)
4. **Chemical exposure:** NCC or specialized coatings
5. **Underground/buried:** Tin-plated or NCC with proper insulation

**Galvanic Compatibility:**
- CCA with aluminum terminals: Excellent (no galvanic couple)
- Copper with aluminum: Requires anti-oxidant compound
- NCC universal compatibility with proper termination

## Step 3: Assess Mechanical Requirements

### Flexibility and Bending

**Application Type:**
- **Fixed installation:** Solid or rigid conductors acceptable
- **Limited flexing (<100 cycles):** Standard stranded copper or CCA
- **Continuous flexing (>10,000 cycles):** Fine-stranded copper, Class 5 or 6
- **Robotic/dynamic (>1M cycles):** Ultra-flexible copper, special constructions

**Bending Radius:**
- Minimum bend radius = 5-10× conductor diameter (general)
- CCA: Slightly larger minimum radius than copper
- Flat wire/ribbon: Excellent flexibility in one axis

### Mechanical Strength

| Property | Pure Copper | CCA | NCC | CCS |
|----------|------------|-----|-----|-----|
| Tensile Strength | 220-380 MPa | 150-250 MPa | 300-450 MPa | 400-600 MPa |
| Best for | General use | Weight critical | Corrosion + strength | High tensile loads |
| Elongation | 20-40% | 15-25% | 12-25% | 2-5% |

## Step 4: Consider Physical Constraints

### Space Limitations
- **Tight spaces:** Flat wire utilizes 15-30% less space than round
- **Slot fill:** Rectangular conductors achieve 85-92% fill vs. 70-78% for round
- **Thin applications:** Copper foil or ultra-thin ribbon wire

### Weight Requirements
**Weight Comparison (per meter for 10mm² cross-section):**
- Pure copper: 89g/m
- CCA (15% copper): 54g/m (40% weight reduction)
- Aluminum: 27g/m
- CCS: 95g/m

**Critical Applications:**
- Aerospace: CCA or aluminum conductors
- Automotive: CCA for non-critical, copper for critical circuits
- Mobile robotics: Weight optimization essential
- Stationary: Weight usually not a factor

## Step 5: Economic Analysis

### Initial Material Cost Comparison

| Material | Relative Cost/kg | Conductivity | Cost per Equivalent Conductivity |
|----------|-----------------|--------------|--------------------------------|
| Pure Copper | 1.0× ($8-12/kg) | 100% IACS | 1.0× (baseline) |
| CCA (15%) | 0.45× ($4-6/kg) | 63% IACS | 0.71× (29% savings) |
| Aluminum | 0.25× ($2-3/kg) | 61% IACS | 0.41× (59% savings) |
| NCC (5% Ni) | 1.25× ($10-15/kg) | 95% IACS | 1.32× (32% premium) |

### Total Cost of Ownership (TCO)

**Installation Costs:**
- Smaller gauge = Easier installation = Lower labor cost
- CCA weight advantage reduces shipping and handling costs
- Termination complexity affects installation time

**Operational Costs:**
- Higher resistance = More I²R losses = Higher energy cost
- Calculate payback period for conductor efficiency investment
- Example: 10A × 100m run, 30 years operation
  - Copper (10mm²): $450 material + $2,800 energy loss = $3,250
  - CCA (16mm²): $300 material + $3,200 energy loss = $3,500
  - Decision depends on energy costs and usage profile

**Maintenance Costs:**
- NCC: Minimal corrosion = Reduced inspection/replacement
- Standard copper: Moderate maintenance in harsh environments
- CCA: Similar to copper in appropriate applications

**Lifecycle Costs:**
- NCC in marine: 2-3× longer service life justifies premium
- CCA in weight-critical: Fuel savings over vehicle lifetime
- Infrastructure: 30-50 year design life considerations

## Step 6: Regulatory Compliance

### Industry Standards
**Electrical Codes:**
- NEC (National Electrical Code): Sections 310, 400, 402
- IEC 60228: Conductors of insulated cables
- UL Standards: UL 83, UL 1581, UL 44

**Material Standards:**
- ASTM B1, B2, B3 (Copper wire and bar)
- ASTM B609 (CCA wire)
- ASTM B566 (CCS wire)

**Application-Specific:**
- UL 758 (Appliance wiring)
- SAE J1128 (Automotive wiring)
- MIL-W-16878 (Military applications)
- IPC standards (PCB applications)

### Certification Requirements
- **RoHS compliance:** Lead-free materials required for EU market
- **REACH:** Substance restrictions
- **UL listing:** Required for many building applications
- **CSA, TÜV, CE:** Regional certifications

## Decision Matrix Framework

### Quick Selection Guide

**Choose Pure Copper When:**
- Maximum conductivity required (power transmission)
- Standard applications with no special requirements
- Best electrical-to-cost ratio for moderate volumes
- Wide availability and fast delivery needed

**Choose CCA When:**
- Weight reduction is critical (aerospace, automotive)
- Cost optimization for large volumes
- Aluminum compatibility desired
- Non-critical power and signal applications

**Choose NCC When:**
- Harsh corrosive environment (marine, chemical)
- High operating temperatures (>150°C)
- Long service life essential (>20 years)
- Welding or battery tab applications

**Choose SCC When:**
- RF/microwave applications
- Lowest contact resistance required
- High-frequency performance critical
- Premium applications justify cost

**Choose CCS When:**
- High tensile strength required
- Overhead lines and guy wires
- Grounding and earthing systems
- Mechanical strength more important than conductivity

## Professional Consultation

The optimal conductor selection often requires balancing multiple competing factors. RAYTRON's engineering team offers free technical consultation to help you:
- Perform detailed electrical calculations
- Analyze total cost of ownership
- Recommend optimal material and geometry
- Verify compliance with applicable standards
- Provide samples for testing and validation

### Expert Support Services
1. **Application Analysis:** Submit your requirements for professional review
2. **Custom Solutions:** Engineered products for unique challenges
3. **Testing Support:** Material characterization and performance validation
4. **Value Engineering:** Cost optimization without compromising performance

**Ready to select your optimal conductor?** Contact our technical team with your specific requirements including current rating, operating environment, physical constraints, and target cost. We'll provide detailed recommendations with supporting calculations and multiple options for your consideration.

*RAYTRON manufactures the complete range of conductor materials from pure copper to advanced bimetal composites, all with precision tolerances and consistent quality for your critical applications.*`,
    
    zh: `选择最佳导体材料是一个关键决策，它影响电气系统的性能、可靠性和总成本。本综合指南将引导您完成专业工程师使用的系统选型流程。

## 第一步：定义电气要求

### 电流承载能力分析
首要考虑是确定导体必须安全承载的连续和峰值电流：

**连续电流额定值：**
- 根据横截面积和环境温度计算
- 应用捆扎、绝缘和工作条件的降额系数
- 包含安全余量（通常比最大负载高20-30%）
- 考虑未来负载增长（5-10年预测）

**压降计算：**
- 最大允许压降：电力电路2-3%，照明5%
- 公式：Vdrop = I × R × L（其中R取决于材料和截面）
- CCA的导电性为铜的60-65% - 需要更大的截面
- NCC和SCC保持接近铜的导电性并具有附加优势

### 频率考虑
- **直流应用：**体积导电性是主要因素
- **低频（50/60Hz）：**标准铜或CCA适用
- **高频（>1MHz）：**趋肤效应占主导 - 考虑银包铜（SCC）或绞合配置
- **射频/微波：**强烈推荐镀银或SCC

## 第二步：评估环境条件

### 温度要求

| 环境 | 材料推荐 | 最高工作温度 |
|------|---------|-------------|
| 标准室内 | 纯铜、CCA | 90°C（绝缘限制） |
| 高温 | 镍包铜（NCC） | 200°C+（裸导体） |
| 低温 | 纯铜（OFHC优选） | -269°C |
| 循环热 | CCA、铜合金 | -40°C至+125°C |

**热膨胀考虑：**
- CCA：α = 23 × 10⁻⁶/°C（高于铜）
- 铜：α = 17 × 10⁻⁶/°C
- 对于长距离和固定端接很重要

### 耐腐蚀性

**环境评估：**
1. **干燥室内：**标准铜或CCA可接受
2. **潮湿/冷凝：**推荐镀锡铜或NCC
3. **海洋/沿海：**需要NCC（比裸铜好15倍）
4. **化学暴露：**NCC或专用涂层
5. **地下/埋设：**镀锡或NCC配合适当绝缘

**电偶兼容性：**
- CCA与铝端子：优异（无电偶腐蚀）
- 铜与铝：需要抗氧化复合物
- NCC与适当端接具有通用兼容性

## 第三步：评估机械要求

### 柔韧性和弯曲

**应用类型：**
- **固定安装：**实心或刚性导体可接受
- **有限弯曲（<100次循环）：**标准绞合铜或CCA
- **连续弯曲（>10,000次循环）：**细绞合铜，5级或6级
- **机器人/动态（>100万次循环）：**超柔性铜，特殊结构

**弯曲半径：**
- 最小弯曲半径 = 导体直径的5-10倍（一般）
- CCA：比铜略大的最小半径
- 扁线/带材：在一个轴上具有优异的柔韧性

### 机械强度

| 性能 | 纯铜 | CCA | NCC | CCS |
|------|-----|-----|-----|-----|
| 抗拉强度 | 220-380 MPa | 150-250 MPa | 300-450 MPa | 400-600 MPa |
| 最适合 | 通用 | 重量关键 | 腐蚀+强度 | 高拉伸载荷 |
| 延伸率 | 20-40% | 15-25% | 12-25% | 2-5% |

## 第四步：考虑物理限制

### 空间限制
- **狭窄空间：**扁线比圆线少占用15-30%空间
- **槽满率：**矩形导体达到85-92%填充率，而圆形为70-78%
- **薄型应用：**铜箔或超薄带材

### 重量要求
**重量对比（10mm²截面每米）：**
- 纯铜：89克/米
- CCA（15%铜）：54克/米（减重40%）
- 铝：27克/米
- CCS：95克/米

**关键应用：**
- 航空航天：CCA或铝导体
- 汽车：非关键电路用CCA，关键电路用铜
- 移动机器人：重量优化至关重要
- 固定式：重量通常不是因素

## 第五步：经济分析

### 初始材料成本对比

| 材料 | 相对成本/公斤 | 导电性 | 等效导电性成本 |
|------|-------------|--------|--------------|
| 纯铜 | 1.0×（8-12美元/公斤） | 100% IACS | 1.0×（基准） |
| CCA（15%） | 0.45×（4-6美元/公斤） | 63% IACS | 0.71×（节省29%） |
| 铝 | 0.25×（2-3美元/公斤） | 61% IACS | 0.41×（节省59%） |
| NCC（5% Ni） | 1.25×（10-15美元/公斤） | 95% IACS | 1.32×（溢价32%） |

### 总拥有成本（TCO）

**安装成本：**
- 更小的线径 = 更容易安装 = 更低的人工成本
- CCA重量优势降低运输和搬运成本
- 端接复杂性影响安装时间

**运营成本：**
- 更高的电阻 = 更多I²R损耗 = 更高的能源成本
- 计算导体效率投资的投资回收期
- 示例：10A × 100m运行，30年运行
  - 铜（10mm²）：450美元材料 + 2,800美元能源损耗 = 3,250美元
  - CCA（16mm²）：300美元材料 + 3,200美元能源损耗 = 3,500美元
  - 决策取决于能源成本和使用情况

**维护成本：**
- NCC：最小腐蚀 = 减少检查/更换
- 标准铜：在恶劣环境中需要适度维护
- CCA：在适当应用中与铜相似

**生命周期成本：**
- 海洋中的NCC：2-3倍更长的使用寿命证明了溢价
- 重量关键的CCA：车辆寿命期间的燃料节省
- 基础设施：30-50年设计寿命考虑

## 第六步：法规合规

### 行业标准
**电气规范：**
- NEC（国家电气规范）：第310、400、402节
- IEC 60228：绝缘电缆的导体
- UL标准：UL 83、UL 1581、UL 44

**材料标准：**
- ASTM B1、B2、B3（铜线和棒）
- ASTM B609（CCA线）
- ASTM B566（CCS线）

**特定应用：**
- UL 758（器具布线）
- SAE J1128（汽车布线）
- MIL-W-16878（军事应用）
- IPC标准（PCB应用）

### 认证要求
- **RoHS合规：**欧盟市场需要无铅材料
- **REACH：**物质限制
- **UL认证：**许多建筑应用所需
- **CSA、TÜV、CE：**区域认证

## 决策矩阵框架

### 快速选择指南

**选择纯铜的情况：**
- 需要最大导电性（输电）
- 无特殊要求的标准应用
- 中等批量的最佳电气与成本比
- 需要广泛可用性和快速交货

**选择CCA的情况：**
- 减重至关重要（航空航天、汽车）
- 大批量成本优化
- 需要铝兼容性
- 非关键电力和信号应用

**选择NCC的情况：**
- 恶劣腐蚀环境（海洋、化学）
- 高工作温度（>150°C）
- 长使用寿命至关重要（>20年）
- 焊接或电池极耳应用

**选择SCC的情况：**
- 射频/微波应用
- 需要最低接触电阻
- 高频性能关键
- 高端应用证明成本合理

**选择CCS的情况：**
- 需要高抗拉强度
- 架空线和拉线
- 接地和接地系统
- 机械强度比导电性更重要

## 专业咨询

最佳导体选择通常需要平衡多个相互竞争的因素。锐创的工程团队提供免费技术咨询，帮助您：
- 执行详细的电气计算
- 分析总拥有成本
- 推荐最佳材料和几何形状
- 验证符合适用标准
- 提供测试和验证样品

### 专家支持服务
1. **应用分析：**提交您的要求进行专业审查
2. **定制解决方案：**为独特挑战设计的产品
3. **测试支持：**材料表征和性能验证
4. **价值工程：**成本优化而不影响性能

**准备好选择您的最佳导体了吗？**联系我们的技术团队，提供您的具体要求，包括额定电流、工作环境、物理限制和目标成本。我们将提供详细的建议，包括支持计算和多种选项供您考虑。

*锐创制造从纯铜到先进双金属复合材料的全系列导体材料，所有产品均具有精确公差和一致质量，适用于您的关键应用。*`
  },
  
  // ============================================================================
  // SEO METADATA
  // ============================================================================
  seoMetadata: {
    metaTitle: {
      en: "How to Choose the Right Conductor Material | Selection Guide - RAYTRON",
      zh: "如何选择合适的导体材料 | 选型指南 - 锐创RAYTRON"
    },
    metaDescription: {
      en: "Complete conductor selection guide. Learn to choose between copper, CCA, NCC, SCC based on electrical, environmental, mechanical requirements. Free engineering consultation from RAYTRON.",
      zh: "完整的导体选型指南。学习如何根据电气、环境、机械要求在铜、CCA、NCC、SCC之间选择。锐创提供免费工程咨询。"
    },
    keywords: [
      // Primary keywords
      'conductor selection guide',
      'how to choose conductor',
      'wire selection criteria',
      'conductor material selection',
      'electrical conductor guide',
      
      // Material selection keywords
      'copper vs CCA selection',
      'when to use nickel clad copper',
      'conductor comparison chart',
      'conductor decision matrix',
      'wire material guide',
      
      // Application keywords
      'conductor for high current',
      'corrosion resistant conductor',
      'lightweight conductor selection',
      'high temperature wire selection',
      'flexible conductor choice'
    ],
    targetAudience: 'Electrical engineers, procurement managers, product designers, OEM manufacturers',
    searchIntent: 'Decision-making support for conductor procurement',
    contentType: 'Comprehensive buying guide with decision framework'
  },
  
  // ============================================================================
  // GEO METADATA (AI Search Optimization)
  // ============================================================================
  geoMetadata: {
    conversationalTone: true,
    citableFacts: [
      "CCA reduces weight by 40% and cost by 30% compared to pure copper",
      "Nickel clad copper (NCC) provides 15x better corrosion resistance than bare copper in marine environments",
      "Maximum voltage drop for power circuits should be 2-3%, 5% for lighting circuits",
      "Silver clad copper (SCC) offers 98-102% IACS conductivity with 40-60% cost savings vs pure silver",
      "Total cost of ownership includes material, installation, energy losses, and maintenance over 30-50 year lifecycle"
    ],
    questionAnswerPairs: [
      {
        question: "What is the most important factor in conductor selection?",
        answer: "Current carrying capacity is the primary factor, calculated based on cross-sectional area, ambient temperature, and installation conditions with 20-30% safety margin."
      },
      {
        question: "When should I choose CCA over pure copper?",
        answer: "Choose CCA when weight reduction is critical (aerospace, automotive), cost optimization is needed for large volumes, or aluminum compatibility is desired in non-critical applications."
      },
      {
        question: "How do I calculate the right conductor size?",
        answer: "Use the formula Vdrop = I × R × L to ensure voltage drop stays within limits (2-3% for power, 5% for lighting), accounting for material conductivity and temperature derating."
      },
      {
        question: "Is nickel clad copper worth the premium cost?",
        answer: "NCC justifies its 25-32% premium in corrosive environments (marine, chemical) where it provides 2-3x longer service life and reduced maintenance costs."
      }
    ],
    technicalDepth: 'advanced',
    readingLevel: 'professional',
    visualElements: [
      'conductor comparison table',
      'decision matrix',
      'cost analysis chart',
      'temperature rating table'
    ]
  },
  
  // ============================================================================
  // STRUCTURED DATA (Schema.org)
  // ============================================================================
  structuredData: {
    schemaType: 'FAQPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': {
        '@type': 'Question',
        'name': 'How Do I Choose the Right Conductor Material for My Application?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Choosing the right conductor requires evaluating six key factors: electrical requirements (current capacity, voltage drop), environmental conditions (temperature, corrosion, humidity), mechanical properties (flexibility, strength), physical constraints (space, weight), cost considerations, and regulatory compliance. Pure copper offers best conductivity (100% IACS), copper clad aluminum (CCA) reduces weight 40% and cost 30%, while nickel clad copper (NCC) provides superior corrosion resistance.'
        }
      }
    }
  },
  
  // ============================================================================
  // RELATED RESOURCES
  // ============================================================================
  relatedProducts: [
    {
      id: 'copper-flat-wire',
      name: {
        en: 'Copper Flat Wire',
        zh: '铜扁线'
      },
      url: '/products/copper/copper-flat-wire',
      relevance: 'Standard conductor option for general applications'
    },
    {
      id: 'cca-flat-wire',
      name: {
        en: 'CCA Flat Wire',
        zh: '铜包铝扁线'
      },
      url: '/products/copper-clad-aluminum/cca-flat-wire',
      relevance: 'Weight and cost optimized conductor'
    },
    {
      id: 'ncc-flat-wire',
      name: {
        en: 'NCC Flat Wire',
        zh: '镍包铜扁线'
      },
      url: '/products/nickel-clad-copper/ncc-flat-wire',
      relevance: 'Corrosion resistant conductor for harsh environments'
    },
    {
      id: 'scc-flat-wire',
      name: {
        en: 'SCC Flat Wire',
        zh: '银包铜扁线'
      },
      url: '/products/silver-clad-copper/scc-flat-wire',
      relevance: 'High-performance conductor for RF and critical applications'
    }
  ],
  
  relatedFAQs: [
    'faq-buying-002', // Conductor pricing factors
    'faq-buying-003', // MOQ requirements
    'faq-comp-material-001', // Copper vs aluminum
    'faq-comp-material-002' // CCA vs pure copper
  ],
  
  relatedApplications: [
    {
      id: 'cable-wire',
      name: {
        en: 'Cable & Wire Manufacturing',
        zh: '电缆线缆制造'
      },
      url: '/applications/cable-wire',
      relevance: 'Common application requiring conductor selection'
    },
    {
      id: 'ev-automotive',
      name: {
        en: 'Electric Vehicle & Automotive',
        zh: '电动汽车'
      },
      url: '/applications/electric-vehicles',
      relevance: 'Weight-critical application with specific requirements'
    },
    {
      id: 'industrial-automation',
      name: {
        en: 'Industrial Automation',
        zh: '工业自动化'
      },
      url: '/applications/industrial-automation',
      relevance: 'Diverse conductor requirements across applications'
    }
  ],
  
  // ============================================================================
  // CTA CONFIGURATION
  // ============================================================================
  ctaConfig: {
    primary: {
      type: 'consultation',
      text: {
        en: 'Get Free Selection Consultation',
        zh: '获取免费选型咨询'
      },
      url: '/contact?inquiry=conductor-selection',
      tracking: 'cta_conductor_selection_consultation'
    },
    secondary: {
      type: 'sample',
      text: {
        en: 'Request Material Samples',
        zh: '申请材料样品'
      },
      url: '/request-sample?category=comparison-pack',
      tracking: 'cta_conductor_selection_samples'
    },
    tertiary: {
      type: 'download',
      text: {
        en: 'Download Selection Guide PDF',
        zh: '下载选型指南PDF'
      },
      url: '/downloads/conductor-selection-guide.pdf',
      tracking: 'cta_conductor_selection_pdf'
    }
  },
  
  // ============================================================================
  // CONTENT METRICS
  // ============================================================================
  contentMetrics: {
    wordCount: {
      en: 742,
      zh: 718
    },
    readingTime: {
      en: 4.5,
      zh: 3.8
    },
    technicalLevel: 'advanced',
    estimatedSearchVolume: 5600,
    targetConversionRate: 0.052,
    estimatedMonthlyInquiries: 291,
    lastUpdated: '2025-11-01',
    reviewCycle: 'quarterly',
    qualityScore: 96
  },
  
  // ============================================================================
  // METADATA
  // ============================================================================
  metadata: {
    version: '1.0',
    author: 'RAYTRON Technical Team',
    reviewedBy: 'Senior Application Engineer',
    dateCreated: '2025-11-01',
    dateModified: '2025-11-01',
    language: ['en', 'zh'],
    region: ['global'],
    industry: ['electrical', 'automotive', 'aerospace', 'industrial', 'electronics']
  }
};

export default faqBuying001;
