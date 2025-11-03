/**
 * Silver Clad Copper FAQ Database - Part 1
 * RAYTRON Website - Product Knowledge Category
 * 
 * This file contains FAQ-SCC-001, FAQ-SCC-002, and FAQ-SCC-003
 * Focus: SCC basics, advantages, and comparisons
 * 
 * Created: 2025-10-31
 * Version: 1.0.0
 */

import { FAQItem, FAQCategory } from '../types';

export const silverCladBasicsPart1: FAQItem[] = [
  
  // =========================================================================
  // FAQ-SCC-001: What is silver clad copper?
  // =========================================================================
  {
    id: 'faq-scc-001',
    category: FAQCategory.ProductKnowledge,
    subcategory: 'Silver Clad Basics',
    
    question: {
      en: 'What is silver clad copper?',
      zh: '什么是银包铜？'
    },
    
    shortAnswer: {
      en: 'Silver clad copper (SCC) is a bimetallic conductor featuring a high-purity copper core with a metallurgically bonded silver outer layer created through clad and weld processes. It combines copper\'s cost-effectiveness and thermal properties with silver\'s superior electrical conductivity (105% IACS), excellent oxidation resistance, and outstanding high-frequency performance, making it ideal for premium RF applications, precision connectors, and high-reliability electronics.',
      zh: '银包铜（SCC）是一种双金属导体，具有高纯度铜芯和通过包覆焊接工艺形成的冶金结合的银外层。它结合了铜的成本效益和热性能与银的卓越导电性（105% IACS）、优异的抗氧化性和出色的高频性能，使其成为高端射频应用、精密连接器和高可靠性电子产品的理想选择。'
    },
    
    answer: {
      en: \`Silver clad copper (SCC) represents the premium tier of clad conductor technology, combining the economic advantages of copper with the superior electrical and surface properties of silver. This advanced bimetallic wire is manufactured through precision clad and weld processes that create a permanent metallurgical bond between the two metals.

**Structural Composition:**

SCC consists of a high-conductivity copper core (typically 92-97% by volume) surrounded by a continuous layer of high-purity silver (3-8% by volume). The manufacturing process involves placing a silver tube or strip around a copper rod or wire, then drawing the composite through dies while applying controlled heat. This creates a molecular-level bond between the metals - fundamentally different from silver plating, which is merely a surface coating applied through electrochemical deposition.

The copper core provides the bulk of the conductor\'s cross-sectional area, contributing excellent thermal conductivity and structural support at a fraction of the cost of solid silver. The silver cladding, though thin, provides the crucial surface properties that determine the conductor\'s electrical performance, especially at high frequencies.

**Superior Electrical Performance:**

Silver is the most electrically conductive metal known, with 105-108% IACS conductivity (compared to copper\'s 100% baseline). While the composite SCC conductor achieves 98-102% IACS due to its copper core, the silver surface layer is critical for high-frequency applications. At radio frequencies above 1 MHz, current flow concentrates at the conductor surface due to skin effect. The silver cladding provides optimal surface conductivity exactly where it matters most.

**Oxidation Resistance:**

Unlike copper, which rapidly forms copper oxide (increasing resistance and degrading performance), silver develops only a thin, highly conductive silver sulfide layer when exposed to air. This tarnish actually maintains excellent electrical conductivity, unlike copper oxide. For RF connectors and contacts that must maintain consistent impedance over years of service, this oxidation resistance is invaluable.

**Manufacturing Excellence:**

The clad and weld process creates a bond that withstands thermal cycling, mechanical flexing, and electrical stress without delamination. Quality SCC maintains uniform silver layer thickness within ±3% across the entire wire length. The bond is so strong that the composite wire can be further processed - drawn to smaller diameters, flattened into flat wire, or formed into complex shapes - without separation.

**Applications Overview:**

SCC finds use in applications where electrical performance justifies the premium cost: high-end RF cables and connectors, precision test equipment, medical implant wiring, aerospace electronics, audiophile speaker cables, and high-reliability military electronics. In these demanding applications, the 40-60% cost savings compared to solid silver wire makes SCC economically attractive while maintaining the required silver surface properties.\`,
      
      zh: \`银包铜（SCC）代表了包覆导体技术的高端层级，结合了铜的经济优势和银的卓越电气和表面特性。这种先进的双金属线材通过精密的包覆焊接工艺制造，在两种金属之间创建永久的冶金结合。

**结构组成：**

SCC由高导电性铜芯（通常占体积的92-97%）和包围其的高纯度银连续层（占体积的3-8%）组成。制造过程涉及将银管或银条放置在铜棒或铜线周围，然后在施加受控热量的同时通过模具拉制复合材料。这在金属之间创建了分子级别的结合——这与镀银根本不同，镀银仅是通过电化学沉积施加的表面涂层。

铜芯提供导体横截面积的大部分，以仅为实心银的一小部分成本贡献出色的热导率和结构支撑。银包覆层虽然薄，但提供了决定导体电气性能的关键表面特性，特别是在高频时。

**卓越的电气性能：**

银是已知导电性最好的金属，具有105-108% IACS导电性（相比铜的100%基准）。虽然由于铜芯，复合SCC导体达到98-102% IACS，但银表面层对高频应用至关重要。在1 MHz以上的射频频率下，由于集肤效应，电流集中在导体表面。银包覆层在最重要的地方提供最佳表面导电性。

**抗氧化性：**

与快速形成氧化铜（增加电阻并降低性能）的铜不同，银暴露在空气中时仅形成一层薄的、高导电性的硫化银层。这种锈蚀实际上保持出色的导电性，不像氧化铜。对于必须在多年使用中保持一致阻抗的射频连接器和接触点，这种抗氧化性是无价的。

**制造卓越性：**

包覆焊接工艺创建的结合能够承受热循环、机械弯曲和电应力而不会分层。优质SCC在整个线材长度上保持±3%以内的均匀银层厚度。结合如此牢固，以至于复合线材可以进一步加工——拉制成更小的直径、压扁成扁线或成形为复杂形状——而不会分离。

**应用概述：**

SCC用于电气性能证明高价成本合理的应用：高端射频电缆和连接器、精密测试设备、医疗植入物布线、航空航天电子、发烧友扬声器电缆和高可靠性军事电子。在这些要求苛刻的应用中，相比实心银线节省40-60%的成本使SCC在经济上具有吸引力，同时保持所需的银表面特性。\`
    },
    
    features: {
      advantages: {
        en: [
          'Highest conductivity available: 98-102% IACS',
          'Superior high-frequency performance due to silver surface',
          'Excellent oxidation resistance (silver sulfide remains conductive)',
          'Maintains consistent impedance over time',
          '40-60% cost savings versus solid silver wire',
          'Strong metallurgical bond prevents delamination',
          'Suitable for thermal cycling and mechanical stress',
          'Can be further processed without layer separation'
        ],
        zh: [
          '最高可用导电性：98-102% IACS',
          '由于银表面而具有卓越的高频性能',
          '优异的抗氧化性（硫化银保持导电性）',
          '随时间保持一致的阻抗',
          '相比实心银线节省40-60%成本',
          '牢固的冶金结合防止分层',
          '适合热循环和机械应力',
          '可以进一步加工而不会层分离'
        ]
      },
      disadvantages: {
        en: [
          'More expensive than pure copper or CCA',
          'Higher cost than copper clad alternatives',
          'Limited to applications where performance justifies premium cost',
          'Silver layer can tarnish (though remains conductive)'
        ],
        zh: [
          '比纯铜或CCA更昂贵',
          '成本高于铜包覆替代品',
          '仅限于性能证明高价成本合理的应用',
          '银层可能变色（虽然保持导电性）'
        ]
      }
    },
    
    seoMetadata: {
      metaTitle: {
        en: 'What is Silver Clad Copper (SCC)? | High-Performance Conductor | Raytron',
        zh: '什么是银包铜（SCC）？| 高性能导体 | 瑞创新能源'
      },
      metaDescription: {
        en: 'Discover silver clad copper: premium bimetallic conductor with 98-102% IACS conductivity, excellent oxidation resistance, and superior high-frequency performance. Learn about SCC manufacturing, properties, and applications.',
        zh: '了解银包铜：具有98-102% IACS导电性、优异抗氧化性和卓越高频性能的高端双金属导体。了解SCC制造、特性和应用。'
      },
      keywords: {
        en: ['silver clad copper', 'SCC wire', 'high-frequency conductor', 'RF cable wire', 'silver copper composite'],
        zh: ['银包铜', 'SCC线材', '高频导体', '射频电缆线', '银铜复合材料']
      }
    },
    
    conversionMetadata: {
      estimatedSearchVolume: 3200,
      targetConversionRate: 0.046
    }
  },
  
  // =========================================================================
  // FAQ-SCC-002: Why use silver cladding on copper?
  // =========================================================================
  {
    id: 'faq-scc-002',
    category: FAQCategory.ProductKnowledge,
    subcategory: 'Silver Clad Basics',
    
    question: {
      en: 'Why use silver cladding on copper?',
      zh: '为什么在铜上包覆银？'
    },
    
    shortAnswer: {
      en: 'Silver cladding on copper provides the highest electrical conductivity (105% IACS surface), superior high-frequency performance through optimal skin effect conductivity, excellent oxidation resistance, stable contact resistance, and long-term reliability. SCC offers 40-60% cost savings versus solid silver while maintaining critical silver surface properties for premium RF, aerospace, medical, and high-reliability applications where performance justifies the investment.',
      zh: '在铜上包覆银提供最高的导电性（105% IACS表面）、通过最佳集肤效应导电性实现的卓越高频性能、优异的抗氧化性、稳定的接触电阻和长期可靠性。相比实心银，SCC节省40-60%成本，同时为高端射频、航空航天、医疗和高可靠性应用保持关键的银表面特性，在这些应用中性能证明投资合理。'
    },
    
    answer: {
      en: \`Silver cladding on copper creates a conductor optimized for the most demanding electrical applications, where maximum performance and long-term reliability are essential requirements that justify premium materials.

**Unmatched Electrical Conductivity:**

Silver holds the distinction of being the most electrically conductive element in the periodic table at 105-108% IACS, surpassing even copper\'s excellent 100% IACS conductivity. While this 5-8% difference seems modest, it becomes critical in high-current applications, precision instruments, and systems where every millivolt matters. The silver surface layer ensures that the conductor\'s exterior - the critical region for current flow, especially at high frequencies - exhibits maximum conductivity.

**High-Frequency Performance Excellence:**

At radio frequencies above 1 MHz, electromagnetic skin effect causes current to concentrate increasingly near the conductor surface. At 100 MHz, current flows primarily in the outer 6.6 micrometers of the conductor. Silver cladding places the most conductive metal exactly where high-frequency current flows, maximizing signal transmission efficiency and minimizing losses. This makes SCC the preferred choice for RF cables, antenna systems, microwave transmission lines, and high-speed digital interconnects operating at gigahertz frequencies.

**Superior Oxidation Behavior:**

Copper\'s primary weakness is rapid oxidation when exposed to air, forming copper oxide - an insulating layer that degrades electrical contact and increases resistance. Silver, remarkably, forms only silver sulfide when tarnished, which maintains 85-90% of bright silver\'s conductivity. This means SCC connectors and contacts maintain stable, low-resistance connections even after years of atmospheric exposure, eliminating the intermittent connections and degraded performance common with copper.

**Solderability and Joining:**

Silver provides excellent solderability without requiring flux-intensive processes. Silver-clad contacts produce reliable solder joints that maintain integrity through thermal cycling. This is crucial for electronics manufacturing where consistent, high-reliability joints are non-negotiable.

**Economic Intelligence:**

While silver costs 50-70 times more than copper per kilogram, SCC uses silver only where needed - on the surface. A typical SCC conductor with 5% silver by volume costs 40-60% less than solid silver wire while delivering nearly identical surface properties. For manufacturers of precision electronics, this represents optimal value: maximum performance where it matters, with intelligent material economy.\`,
      
      zh: \`在铜上包覆银创造了一种针对最苛刻电气应用优化的导体，在这些应用中最大性能和长期可靠性是证明高端材料合理的基本要求。

**无与伦比的导电性：**

银在元素周期表中拥有最高导电性的区别，达到105-108% IACS，甚至超过铜的优异100% IACS导电性。虽然这5-8%的差异看似不大，但在大电流应用、精密仪器和每毫伏都重要的系统中变得至关重要。银表面层确保导体的外部——电流流动的关键区域，特别是在高频时——表现出最大导电性。

**高频性能卓越：**

在1 MHz以上的射频频率下，电磁集肤效应导致电流越来越集中在导体表面附近。在100 MHz时，电流主要在导体外部6.6微米处流动。银包覆层将最具导电性的金属准确放置在高频电流流动的地方，最大化信号传输效率并最小化损耗。这使SCC成为射频电缆、天线系统、微波传输线和在千兆赫频率下运行的高速数字互连的首选。

**卓越的氧化行为：**

铜的主要弱点是暴露在空气中时快速氧化，形成氧化铜——一种降低电接触并增加电阻的绝缘层。值得注意的是，银在变色时仅形成硫化银，保持亮银85-90%的导电性。这意味着SCC连接器和接触点即使在多年大气暴露后也能保持稳定的低电阻连接，消除了铜常见的间歇性连接和性能降级。

**可焊性和连接：**

银提供优异的可焊性，无需助焊剂密集工艺。银包覆接触产生可靠的焊接接头，通过热循环保持完整性。这对于一致、高可靠性接头不可妥协的电子制造至关重要。

**经济智能：**

虽然银每公斤的成本是铜的50-70倍，但SCC仅在需要的地方使用银——在表面。典型的SCC导体按体积计含5%银，成本比实心银线低40-60%，同时提供几乎相同的表面特性。对于精密电子制造商来说，这代表最佳价值：在重要的地方实现最大性能，同时具有智能的材料经济性。\`
    },
    
    features: {
      advantages: {
        en: [
          'Highest conductivity: 105% IACS at surface',
          'Optimal for high-frequency applications (>1 MHz)',
          'Silver sulfide tarnish remains highly conductive',
          'Stable contact resistance over decades',
          'Excellent solderability without heavy flux',
          '40-60% cost savings vs solid silver',
          'Maintains performance in harsh environments'
        ],
        zh: [
          '最高导电性：表面105% IACS',
          '高频应用的最佳选择（>1 MHz）',
          '硫化银锈蚀保持高导电性',
          '数十年内稳定的接触电阻',
          '无需重助焊剂的优异可焊性',
          '相比实心银节省40-60%成本',
          '在恶劣环境中保持性能'
        ]
      },
      disadvantages: {
        en: [
          'Premium cost compared to copper or other clad options',
          'Silver layer can visibly tarnish (though remains functional)',
          'Overkill for applications where copper suffices'
        ],
        zh: [
          '相比铜或其他包覆选项的高价成本',
          '银层可能明显变色（虽然保持功能）',
          '对于铜足够的应用来说过度'
        ]
      }
    },
    
    seoMetadata: {
      metaTitle: {
        en: 'Why Use Silver Cladding on Copper? | SCC Benefits & Applications | Raytron',
        zh: '为什么在铜上包覆银？| SCC优势与应用 | 瑞创新能源'
      },
      metaDescription: {
        en: 'Learn why silver clad copper delivers superior high-frequency performance, oxidation resistance, and reliability. Discover how SCC provides 40-60% cost savings vs solid silver for premium electronics.',
        zh: '了解为什么银包铜提供卓越的高频性能、抗氧化性和可靠性。了解SCC如何为高端电子产品提供相比实心银40-60%的成本节约。'
      },
      keywords: {
        en: ['silver cladding benefits', 'high-frequency conductor', 'RF cable advantages', 'silver vs copper'],
        zh: ['银包覆优势', '高频导体', '射频电缆优势', '银vs铜']
      }
    },
    
    conversionMetadata: {
      estimatedSearchVolume: 1900,
      targetConversionRate: 0.042
    }
  },
  
  // =========================================================================
  // FAQ-SCC-003: Silver clad copper vs pure silver wire
  // =========================================================================
  {
    id: 'faq-scc-003',
    category: FAQCategory.ProductKnowledge,
    subcategory: 'Silver Clad Basics',
    
    question: {
      en: 'Silver clad copper vs pure silver wire: What\'s the difference?',
      zh: '银包铜与纯银线：有什么区别？'
    },
    
    shortAnswer: {
      en: 'Silver clad copper features a copper core with silver outer layer (98-102% IACS conductivity), offering 40-60% cost savings versus pure silver wire (105% IACS). For high-frequency applications, SCC performs nearly identically to solid silver due to skin effect, as current flows primarily in the silver surface layer. Choose SCC for cost-effective premium performance; choose pure silver only when uniform silver properties throughout are required or for maximum current-carrying capacity.',
      zh: '银包铜具有铜芯和银外层（98-102% IACS导电性），相比纯银线（105% IACS）节省40-60%成本。对于高频应用，由于集肤效应，SCC的性能几乎与实心银相同，因为电流主要在银表面层流动。在需要经济高效的高端性能时选择SCC；仅在整体需要均匀银特性或最大载流能力时选择纯银。'
    },
    
    answer: {
      en: \`The choice between silver clad copper and pure silver wire involves careful consideration of electrical requirements, application frequency, environmental conditions, and budget - with the surprising reality that SCC often performs identically to pure silver at a fraction of the cost.

**Structural and Compositional Differences:**

Pure silver wire is homogeneous 99.9% silver throughout its entire cross-section, providing consistent silver properties from surface to core. Every part of the wire exhibits silver\'s characteristic 105-108% IACS conductivity, excellent corrosion resistance, and superior workability.

Silver clad copper consists of a copper core (92-97% by volume) with a metallurgically bonded silver outer layer (3-8% by volume). This bimetallic construction is created through clad and weld processes forming a permanent molecular bond, fundamentally different from silver plating which is merely an electrochemically deposited surface coating.

**DC vs AC Performance:**

For direct current applications, pure silver provides marginally better conductivity (105% vs 98-102% IACS for SCC). This 3-7% difference matters in precision measurement instruments, high-current busbar applications, or systems where every fraction of a volt drop is critical.

However, for alternating current - particularly radio frequencies - SCC and pure silver perform virtually identically. The electromagnetic skin effect causes high-frequency current to concentrate increasingly at the conductor surface. At 10 MHz, current penetrates only about 21 micrometers into the conductor. At 100 MHz, penetration depth is merely 6.6 micrometers. Since even thin silver cladding (typically 50-200 micrometers) far exceeds these penetration depths, the copper core contributes minimally to AC resistance. The silver surface handles the current, delivering pure silver performance.

**Cost Considerations:**

Pure silver wire costs 2-3 times more than SCC of equivalent diameter. With silver trading at 50-70 times the price of copper, using silver only where needed - on the surface - provides dramatic savings. For a typical 2mm diameter wire with 5% silver by volume, material costs are 40-60% lower than solid silver while maintaining equivalent high-frequency performance.

**Mechanical Properties:**

Pure silver is relatively soft (Vickers hardness ~25), making it prone to scratching and wear in mechanical applications. SCC benefits from the harder copper core, providing better abrasion resistance and mechanical stability. This makes SCC more suitable for connectors subject to repeated mating cycles or cables experiencing mechanical stress.

**Application Selection Guidelines:**

Choose pure silver wire when you need:
- Maximum DC conductivity for precision instruments
- Uniform silver properties for specialized metallurgical processes
- Highest possible current density in minimal cross-section
- Applications where material purity matters (certain medical/aerospace)

Choose silver clad copper when you need:
- High-frequency performance (>1 MHz) at lower cost
- RF cables and connectors
- Reduced material cost (40-60% savings)
- Better mechanical properties than pure silver
- Equivalent surface properties to pure silver\`,
      
      zh: \`银包铜和纯银线之间的选择涉及对电气要求、应用频率、环境条件和预算的仔细考虑——令人惊讶的现实是，SCC通常以一小部分成本实现与纯银相同的性能。

**结构和组成差异：**

纯银线是整个横截面的均质99.9%银，从表面到芯部提供一致的银特性。线材的每个部分都表现出银的特征105-108% IACS导电性、优异的耐腐蚀性和卓越的可加工性。

银包铜由铜芯（占体积的92-97%）和冶金结合的银外层（占体积的3-8%）组成。这种双金属结构通过包覆焊接工艺创建，形成永久的分子结合，与仅是电化学沉积表面涂层的镀银根本不同。

**直流vs交流性能：**

对于直流应用，纯银提供略好的导电性（105% vs SCC的98-102% IACS）。这3-7%的差异在精密测量仪器、大电流母线应用或每一分压降都至关重要的系统中很重要。

然而，对于交流电——特别是射频——SCC和纯银的性能几乎相同。电磁集肤效应导致高频电流越来越集中在导体表面。在10 MHz时，电流仅穿透导体约21微米。在100 MHz时，穿透深度仅为6.6微米。由于即使是薄银包覆层（通常50-200微米）也远远超过这些穿透深度，铜芯对交流电阻的贡献最小。银表面处理电流，提供纯银性能。

**成本考虑：**

纯银线的成本是相同直径SCC的2-3倍。由于银的交易价格是铜的50-70倍，仅在需要的地方使用银——在表面——提供了显著的节省。对于按体积计含5%银的典型2mm直径线材，材料成本比实心银低40-60%，同时保持相当的高频性能。

**机械性能：**

纯银相对柔软（维氏硬度约25），使其在机械应用中容易刮伤和磨损。SCC受益于较硬的铜芯，提供更好的耐磨性和机械稳定性。这使SCC更适合经受重复配合循环的连接器或经历机械应力的电缆。

**应用选择指南：**

在以下情况选择纯银线：
- 精密仪器需要最大直流导电性
- 特殊冶金工艺需要均匀的银特性
- 最小横截面中的最高可能电流密度
- 材料纯度重要的应用（某些医疗/航空航天）

在以下情况选择银包铜：
- 以较低成本实现高频性能（>1 MHz）
- 射频电缆和连接器
- 降低材料成本（节省40-60%）
- 比纯银更好的机械性能
- 与纯银相当的表面特性\`
    },
    
    features: {
      advantages: {
        en: [
          'SCC: 40-60% cost savings vs pure silver',
          'SCC: Equivalent high-frequency performance to pure silver',
          'SCC: Better mechanical properties (harder, more abrasion resistant)',
          'Pure Silver: Maximum DC conductivity (105% IACS)',
          'Pure Silver: Uniform properties throughout',
          'Both: Excellent oxidation resistance and solderability'
        ],
        zh: [
          'SCC：相比纯银节省40-60%成本',
          'SCC：与纯银相当的高频性能',
          'SCC：更好的机械性能（更硬、更耐磨）',
          '纯银：最大直流导电性（105% IACS）',
          '纯银：整体均匀的特性',
          '两者：优异的抗氧化性和可焊性'
        ]
      },
      disadvantages: {
        en: [
          'SCC: Slightly lower DC conductivity than pure silver',
          'Pure Silver: 2-3x more expensive than SCC',
          'Pure Silver: Softer and more prone to wear'
        ],
        zh: [
          'SCC：直流导电性略低于纯银',
          '纯银：比SCC贵2-3倍',
          '纯银：更软且更容易磨损'
        ]
      }
    },
    
    seoMetadata: {
      metaTitle: {
        en: 'Silver Clad Copper vs Pure Silver Wire: Complete Comparison | Raytron',
        zh: '银包铜vs纯银线：完整对比 | 瑞创新能源'
      },
      metaDescription: {
        en: 'Compare silver clad copper and pure silver wire: performance, cost (40-60% savings), and applications. Learn why SCC delivers equivalent high-frequency performance at fraction of the cost.',
        zh: '比较银包铜和纯银线：性能、成本（节省40-60%）和应用。了解为什么SCC以一小部分成本提供相当的高频性能。'
      },
      keywords: {
        en: ['silver clad copper vs pure silver', 'SCC vs silver wire', 'high-frequency conductor comparison'],
        zh: ['银包铜vs纯银', 'SCC vs银线', '高频导体对比']
      }
    },
    
    conversionMetadata: {
      estimatedSearchVolume: 1600,
      targetConversionRate: 0.044
    }
  }
];

export default silverCladBasicsPart1;
