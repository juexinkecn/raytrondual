// src/data/products/aluminumProducts.ts
// 铝系列产品完整数据

import type { Product } from '@/types/product'

// 产品 #6: 铝带 (Aluminum Strip)
export const aluminumStrip: Product = {
  id: 'RT-ALU-AST-006',
  sku: 'RT-ALU-AST-006',
  slug: 'aluminum-strip',
  name: {
    en: 'Aluminum Strip',
    zh: '铝带'
  },
  category: 'aluminum',
  subcategory: 'strip',
  featured: true,
  priority: 1,

  description: {
    en: `RAYTRON's Aluminum Strip is a high-quality rolled aluminum product manufactured from premium aluminum alloys through precision rolling processes. Our aluminum strips combine lightweight properties with excellent electrical conductivity, corrosion resistance, and formability, making them ideal for cable shielding, heat exchangers, electronic components, and construction applications. Available in various alloy grades including 1000, 3000, and 8000 series, with thicknesses from 0.05mm to 3.0mm and widths up to 1200mm, our aluminum strips meet international standards including ASTM B209, EN 485, and GB/T 3880. Each product undergoes rigorous quality control ensuring consistent mechanical properties, dimensional accuracy, and surface quality. Backed by ISO 9001:2015 certification and comprehensive technical support, RAYTRON aluminum strips deliver reliable performance for demanding industrial applications worldwide.`,
    zh: `锐创铝带是通过精密轧制工艺从优质铝合金制造的高品质轧制铝产品。我们的铝带将轻质特性与优异的导电性、耐腐蚀性和成形性相结合,非常适合电缆屏蔽、热交换器、电子元件和建筑应用。提供多种合金牌号,包括1000、3000和8000系列,厚度从0.05mm到3.0mm,宽度可达1200mm,我们的铝带符合ASTM B209、EN 485和GB/T 3880等国际标准。每个产品都经过严格的质量控制,确保一致的机械性能、尺寸精度和表面质量。获得ISO 9001:2015认证和全面技术支持的支持,锐创铝带为全球要求苛刻的工业应用提供可靠性能。`
  },

  detailedDescription: {
    en: `RAYTRON's Aluminum Strip production leverages advanced rolling technology and metallurgical expertise to deliver products that consistently meet the demanding requirements of modern industry. Our manufacturing process begins with carefully selected aluminum ingots that undergo continuous casting to produce rolling slabs. These slabs are then processed through multiple hot and cold rolling stages, with intermediate annealing to optimize mechanical properties and surface characteristics.

**Manufacturing Excellence:**
Our production facility features state-of-the-art rolling mills capable of producing strips with thickness tolerances as tight as ±3% and width variations under ±0.5mm. The rolling process is carefully controlled to achieve the desired temper – from fully soft (O temper) for maximum formability to various hardened tempers (H12, H14, H18) for applications requiring higher strength. Advanced automated thickness control systems monitor and adjust rolling parameters in real-time, ensuring exceptional dimensional consistency throughout each coil.

**Material Properties & Alloy Selection:**
RAYTRON offers aluminum strips in multiple alloy series, each optimized for specific applications: 1000 series (>99.0% Al) provides excellent electrical conductivity and corrosion resistance, ideal for electrical applications and chemical equipment. 3000 series (Al-Mn alloys) offers enhanced strength and corrosion resistance, perfect for heat exchangers and automotive applications. 8000 series (Al-Fe alloys) delivers superior formability and strength, extensively used in cable shielding and battery materials. Our metallurgy team can recommend the optimal alloy and temper combination for your specific application requirements.

**Quality Assurance & Testing:**
Comprehensive quality control includes mechanical property testing (tensile strength, elongation, hardness), dimensional verification using precision measurement systems, surface quality inspection, and electrical conductivity measurement where applicable. Each coil is accompanied by a Material Test Certificate documenting alloy composition, mechanical properties, and dimensional specifications, providing full traceability for critical applications.`,

    zh: `锐创铝带生产利用先进的轧制技术和冶金专业知识,提供始终满足现代工业苛刻要求的产品。我们的制造工艺从精心挑选的铝锭开始,经过连续铸造生产轧制坯料。然后通过多个热轧和冷轧阶段处理这些坯料,并进行中间退火以优化机械性能和表面特性。

**制造卓越:**
我们的生产设施配备最先进的轧机,能够生产厚度公差可达±3%、宽度变化小于±0.5mm的铝带。轧制过程经过精心控制,以达到所需的回火状态——从完全软化(O回火)以获得最大成形性到各种硬化回火(H12、H14、H18)以满足需要更高强度的应用。先进的自动厚度控制系统实时监控和调整轧制参数,确保整个线圈的卓越尺寸一致性。

**材料性能与合金选择:**
锐创提供多个合金系列的铝带,每个系列都针对特定应用进行了优化:1000系列(>99.0% Al)提供优异的导电性和耐腐蚀性,非常适合电气应用和化学设备。3000系列(Al-Mn合金)提供增强的强度和耐腐蚀性,完美适用于热交换器和汽车应用。8000系列(Al-Fe合金)提供卓越的成形性和强度,广泛用于电缆屏蔽和电池材料。我们的冶金团队可以为您的特定应用要求推荐最佳合金和回火组合。

**质量保证与测试:**
全面的质量控制包括机械性能测试(抗拉强度、延伸率、硬度)、使用精密测量系统的尺寸验证、表面质量检查以及适用时的导电率测量。每个线圈都附有材料测试证书,记录合金成分、机械性能和尺寸规格,为关键应用提供完全可追溯性。`
  },

  specifications: {
    en: [
      { name: 'Alloy Grades', value: '1050, 1060, 1070, 1100, 3003, 3004, 8011, 8079' },
      { name: 'Thickness Range', value: '0.05mm - 3.0mm' },
      { name: 'Width Range', value: '10mm - 1200mm (Customizable)' },
      { name: 'Temper Options', value: 'O, H12, H14, H16, H18, H22, H24' },
      { name: 'Conductivity (1000 series)', value: '61-63% IACS' },
      { name: 'Tensile Strength (O temper)', value: '60-100 MPa' },
      { name: 'Tensile Strength (H18)', value: '140-180 MPa' },
      { name: 'Elongation (O temper)', value: '≥20%' },
      { name: 'Elongation (H18)', value: '≥2%' },
      { name: 'Surface Finish', value: 'Mill finish, Bright finish, Anodized' },
      { name: 'Thickness Tolerance', value: '±5% (Precision: ±3%)' },
      { name: 'Width Tolerance', value: '±0.5mm' },
      { name: 'Coil Weight', value: 'Up to 3000kg' },
      { name: 'Standards Compliance', value: 'ASTM B209, EN 485, GB/T 3880, RoHS' }
    ],
    zh: [
      { name: '合金牌号', value: '1050、1060、1070、1100、3003、3004、8011、8079' },
      { name: '厚度范围', value: '0.05mm - 3.0mm' },
      { name: '宽度范围', value: '10mm - 1200mm (可定制)' },
      { name: '回火选项', value: 'O、H12、H14、H16、H18、H22、H24' },
      { name: '导电率(1000系列)', value: '61-63% IACS' },
      { name: '抗拉强度(O回火)', value: '60-100 MPa' },
      { name: '抗拉强度(H18)', value: '140-180 MPa' },
      { name: '延伸率(O回火)', value: '≥20%' },
      { name: '延伸率(H18)', value: '≥2%' },
      { name: '表面处理', value: '轧制表面、光亮表面、阳极氧化' },
      { name: '厚度公差', value: '±5% (精密: ±3%)' },
      { name: '宽度公差', value: '±0.5mm' },
      { name: '线圈重量', value: '最高3000kg' },
      { name: '标准符合', value: 'ASTM B209、EN 485、GB/T 3880、RoHS' }
    ]
  },

  features: {
    en: [
      {
        title: 'Lightweight & High Strength',
        description: 'Aluminum\'s low density (2.7 g/cm³) provides significant weight savings while maintaining excellent strength-to-weight ratio, ideal for transportation and aerospace applications.'
      },
      {
        title: 'Excellent Conductivity',
        description: '1000 series alloys offer 61-63% IACS electrical conductivity, making them suitable for electrical applications at a fraction of copper\'s weight.'
      },
      {
        title: 'Superior Corrosion Resistance',
        description: 'Natural oxide layer provides excellent corrosion protection in various environments including marine, industrial, and chemical exposure conditions.'
      },
      {
        title: 'Outstanding Formability',
        description: 'Soft tempers enable complex forming operations including deep drawing, bending, and spinning without cracking or surface defects.'
      },
      {
        title: 'Multiple Alloy Options',
        description: 'Wide selection of alloy grades from 1000 to 8000 series allows optimization for specific requirements including purity, strength, and corrosion resistance.'
      },
      {
        title: 'Thermal Conductivity',
        description: 'Excellent heat dissipation properties (190-250 W/m·K) make aluminum strips ideal for heat exchangers and thermal management applications.'
      },
      {
        title: 'Surface Versatility',
        description: 'Available with mill finish, bright finish, or anodized surfaces to meet aesthetic and functional requirements.'
      },
      {
        title: 'Consistent Quality',
        description: 'Advanced manufacturing controls ensure uniform thickness, consistent mechanical properties, and excellent surface quality throughout each coil.'
      }
    ],
    zh: [
      {
        title: '轻质高强',
        description: '铝的低密度(2.7 g/cm³)在保持优异强度重量比的同时提供显著的重量节省,非常适合运输和航空航天应用。'
      },
      {
        title: '优异导电性',
        description: '1000系列合金提供61-63% IACS电导率,使其适合以铜重量的一小部分用于电气应用。'
      },
      {
        title: '卓越耐腐蚀性',
        description: '天然氧化层在包括海洋、工业和化学暴露条件在内的各种环境中提供出色的防腐保护。'
      },
      {
        title: '出色成形性',
        description: '软回火状态能够进行包括深拉、弯曲和旋压在内的复杂成形操作,而不会开裂或出现表面缺陷。'
      },
      {
        title: '多种合金选项',
        description: '从1000到8000系列的广泛合金牌号选择允许针对包括纯度、强度和耐腐蚀性在内的特定要求进行优化。'
      },
      {
        title: '导热性能',
        description: '优异的散热性能(190-250 W/m·K)使铝带成为热交换器和热管理应用的理想选择。'
      },
      {
        title: '表面多样性',
        description: '可提供轧制表面、光亮表面或阳极氧化表面,以满足美学和功能要求。'
      },
      {
        title: '一致质量',
        description: '先进的制造控制确保整个线圈的均匀厚度、一致的机械性能和优异的表面质量。'
      }
    ]
  },

  advantages: {
    en: [
      {
        title: 'Cost-Effective Alternative to Copper',
        description: 'Provides significant material cost savings (40-60% less than copper by volume) while offering comparable performance in many applications.'
      },
      {
        title: 'Comprehensive Alloy Portfolio',
        description: 'Complete range of aluminum alloys from 1000 to 8000 series available from single supplier, simplifying procurement and ensuring consistent quality.'
      },
      {
        title: 'Custom Manufacturing Capability',
        description: 'Flexible production to customize alloy, temper, dimensions, and surface treatment according to specific application requirements.'
      },
      {
        title: 'Technical Expertise',
        description: 'Metallurgical engineering team provides alloy selection guidance, forming recommendations, and application-specific optimization support.'
      },
      {
        title: 'Quality Documentation',
        description: 'Comprehensive material certificates with alloy composition analysis, mechanical properties, and dimensional verification for traceability.'
      },
      {
        title: 'Sustainable Material',
        description: 'Aluminum is 100% recyclable without loss of properties, supporting environmental sustainability and circular economy initiatives.'
      },
      {
        title: 'Global Standards Compliance',
        description: 'Products meet ASTM, EN, GB, RoHS, and REACH standards ensuring worldwide acceptance and regulatory compliance.'
      },
      {
        title: 'Reliable Supply Chain',
        description: 'Established production capacity and inventory management ensure stable supply and competitive lead times for volume requirements.'
      }
    ],
    zh: [
      {
        title: '铜的经济替代品',
        description: '在许多应用中提供可比性能的同时,提供显著的材料成本节省(按体积计算比铜少40-60%)。'
      },
      {
        title: '全面合金组合',
        description: '从单一供应商提供从1000到8000系列的完整铝合金范围,简化采购并确保一致的质量。'
      },
      {
        title: '定制制造能力',
        description: '灵活的生产,可根据特定应用要求定制合金、回火、尺寸和表面处理。'
      },
      {
        title: '技术专业知识',
        description: '冶金工程团队提供合金选择指导、成形建议和特定应用优化支持。'
      },
      {
        title: '质量文档',
        description: '附有合金成分分析、机械性能和尺寸验证的全面材料证书,实现可追溯性。'
      },
      {
        title: '可持续材料',
        description: '铝100%可回收且不损失性能,支持环境可持续性和循环经济倡议。'
      },
      {
        title: '全球标准合规',
        description: '产品符合ASTM、EN、GB、RoHS和REACH标准,确保全球接受度和法规合规性。'
      },
      {
        title: '可靠供应链',
        description: '成熟的生产能力和库存管理确保批量需求的稳定供应和有竞争力的交货期。'
      }
    ]
  },

  applications: {
    en: [
      {
        title: 'Cable Shielding & EMI Protection',
        description: 'Electromagnetic shielding tape for cables, coaxial cables, and wire harnesses. Excellent conductivity provides effective EMI/RFI protection, lightweight design reduces cable weight, and conformable material wraps easily around cable bundles. Particularly effective for communications, automotive, and aerospace wiring systems.'
      },
      {
        title: 'Heat Exchangers & Radiators',
        description: 'Fin material for air conditioning, automotive radiators, and industrial heat exchangers. High thermal conductivity ensures efficient heat transfer, excellent formability enables fin manufacturing, and superior corrosion resistance provides long service life in humid environments.'
      },
      {
        title: 'Lithium Battery Components',
        description: 'Current collector material for battery cathodes and packaging foil for battery cells. Lightweight design reduces battery weight, good electrical conductivity minimizes internal resistance, and excellent formability enables battery pouch manufacturing. Widely used in EV batteries and consumer electronics.'
      },
      {
        title: 'Electronic Components & Capacitors',
        description: 'Electrode material for electrolytic capacitors and electronic component housings. High purity 1000 series alloys ensure optimal electrical performance, excellent formability enables complex shapes, and natural oxide layer provides electrical isolation.'
      },
      {
        title: 'Construction & Roofing',
        description: 'Flashing, gutters, downspouts, and architectural trim. Superior corrosion resistance ensures decades of outdoor performance, excellent formability simplifies installation, and attractive appearance after anodizing enhances aesthetic appeal. 3000 series alloys offer optimal strength and weather resistance.'
      },
      {
        title: 'Automotive Components',
        description: 'Trim, heat shields, battery packaging, and lightweight structural components. Weight reduction improves fuel efficiency, excellent formability enables complex part geometries, and good corrosion resistance ensures long-term durability. 3000 and 8000 series alloys commonly specified.'
      }
    ],
    zh: [
      {
        title: '电缆屏蔽与EMI保护',
        description: '电缆、同轴电缆和线束的电磁屏蔽带。优异的导电性提供有效的EMI/RFI保护,轻质设计减少电缆重量,适形材料轻松包裹电缆束。特别适用于通信、汽车和航空航天布线系统。'
      },
      {
        title: '热交换器与散热器',
        description: '空调、汽车散热器和工业热交换器的翅片材料。高导热性确保高效传热,优异的成形性实现翅片制造,卓越的耐腐蚀性在潮湿环境中提供长使用寿命。'
      },
      {
        title: '锂电池元件',
        description: '电池阴极的集电材料和电池单元的包装箔。轻质设计减少电池重量,良好的导电性最小化内阻,优异的成形性实现电池软包制造。广泛用于电动汽车电池和消费电子产品。'
      },
      {
        title: '电子元件与电容器',
        description: '电解电容器的电极材料和电子元件外壳。高纯度1000系列合金确保最佳电气性能,优异的成形性实现复杂形状,天然氧化层提供电气隔离。'
      },
      {
        title: '建筑与屋顶',
        description: '泛水、排水沟、落水管和建筑装饰。卓越的耐腐蚀性确保数十年的户外性能,优异的成形性简化安装,阳极氧化后的美观外观增强美学吸引力。3000系列合金提供最佳强度和耐候性。'
      },
      {
        title: '汽车元件',
        description: '装饰、隔热板、电池包装和轻量化结构元件。减重提高燃油效率,优异的成形性实现复杂零件几何形状,良好的耐腐蚀性确保长期耐久性。通常指定3000和8000系列合金。'
      }
    ]
  },

  faqs: {
    en: [
      {
        question: 'How does aluminum strip compare to copper strip for electrical applications?',
        answer: 'Aluminum strip offers 61-63% of copper\'s electrical conductivity (IACS) but weighs only 30% as much, providing excellent conductivity-to-weight ratio. For equivalent electrical resistance, an aluminum conductor needs approximately 1.6 times the cross-sectional area of copper, but still weighs 50% less overall. This makes aluminum strips ideal for applications where weight reduction is critical, such as aircraft wiring, automotive harnesses, and portable electronics. Additionally, aluminum costs 40-60% less than copper by volume, offering significant material cost savings. For stationary installations where weight is less critical, copper may be preferred due to its higher conductivity and smaller required cross-section. Our technical team can help calculate optimal conductor sizing for your specific application.'
      },
      {
        question: 'What aluminum alloy should I choose for my application?',
        answer: 'Alloy selection depends on application requirements: 1000 series (1050, 1060, 1070, 1100) offers maximum electrical conductivity (61-63% IACS) and formability, ideal for electrical applications, chemical equipment, and deep drawing. These high-purity alloys are also preferred for applications requiring excellent corrosion resistance. 3000 series (3003, 3004) provides enhanced strength and excellent corrosion resistance through manganese additions, making them perfect for heat exchangers, automotive components, and architectural applications. 8000 series (8011, 8079) delivers superior strength and formability, extensively used in cable shielding, battery foils, and packaging applications. Our metallurgy team can recommend the optimal alloy and temper based on your requirements for strength, conductivity, formability, and environmental conditions.'
      },
      {
        question: 'What tempers are available and how do they affect properties?',
        answer: 'RAYTRON offers multiple temper designations: O temper (fully annealed) provides maximum ductility and formability (>20% elongation), ideal for deep drawing, complex forming, and bending operations. H12/H22 (quarter hard) offers moderate strength increase while maintaining good formability, suitable for general sheet metal work. H14/H24 (half hard) provides balance between strength and formability, commonly used for parts requiring moderate forming and some structural strength. H16/H26 (three-quarter hard) delivers higher strength with limited formability, appropriate for panels and components with minimal forming. H18/H28 (full hard) provides maximum strength and hardness with minimal ductility, used for applications requiring structural rigidity. Tensile strength typically increases 50-100% from O to H18 temper, while elongation decreases from >20% to <3%. Temper selection should balance forming requirements with mechanical property needs.'
      },
      {
        question: 'Can aluminum strip be anodized or coated?',
        answer: 'Yes, aluminum strip is highly suitable for anodizing and various coating processes. Anodizing creates a durable, corrosion-resistant oxide layer that can be dyed to various colors, ideal for architectural applications, electronic enclosures, and decorative trim. Type II anodizing (sulfuric acid process) produces layers 5-25μm thick suitable for most applications, while Type III (hard coat) creates 25-150μm coatings for superior wear and corrosion resistance. Our aluminum strips can also accept powder coating, painted finishes, and conversion coatings. For optimal anodizing results, we recommend 1000 or 6000 series alloys with bright finish or chemically cleaned surfaces. 3000 and 8000 series can be anodized but may produce slightly darker or less uniform colors due to alloying elements. Surface preparation is critical – we can supply strips with pre-treated surfaces optimized for your finishing process.'
      },
      {
        question: 'What thickness and width tolerances can RAYTRON achieve?',
        answer: 'Our precision rolling capabilities deliver tight tolerances: Standard thickness tolerance is ±5% for most applications, while precision grade achieves ±3% for critical applications requiring tight dimensional control. Width tolerance is typically ±0.5mm for strips up to 600mm wide, and ±0.8mm for wider strips. For specialized applications, we can provide even tighter tolerances through additional processing steps. Length accuracy for cut-to-length material is ±2mm. Edge condition can be mill edge, slit edge, or deburred edge depending on application requirements. Flatness is controlled to I-unit specifications per ASTM B209. For applications requiring exceptional dimensional accuracy such as battery foils or precision stamping, please specify precision grade material. Our quality control systems verify 100% of production to ensure conformance, and dimensional inspection data is included with material certificates.'
      }
    ],
    zh: [
      {
        question: '铝带与铜带在电气应用中如何比较?',
        answer: '铝带提供铜导电率(IACS)的61-63%,但重量仅为铜的30%,提供优异的导电性重量比。对于等效电阻,铝导体需要约1.6倍铜的横截面积,但总重量仍减轻50%。这使铝带成为减重至关重要的应用的理想选择,例如飞机布线、汽车线束和便携式电子产品。此外,铝的成本按体积计算比铜低40-60%,提供显著的材料成本节省。对于重量不太关键的固定安装,由于铜具有更高的导电性和更小的所需横截面,可能更倾向于选择铜。我们的技术团队可以帮助计算特定应用的最佳导体尺寸。'
      },
      {
        question: '我应该为我的应用选择哪种铝合金?',
        answer: '合金选择取决于应用要求:1000系列(1050、1060、1070、1100)提供最大的导电率(61-63% IACS)和成形性,非常适合电气应用、化学设备和深拉。这些高纯度合金也是需要优异耐腐蚀性的应用的首选。3000系列(3003、3004)通过添加锰提供增强的强度和优异的耐腐蚀性,使其完美适用于热交换器、汽车元件和建筑应用。8000系列(8011、8079)提供卓越的强度和成形性,广泛用于电缆屏蔽、电池箔和包装应用。我们的冶金团队可以根据您对强度、导电性、成形性和环境条件的要求推荐最佳合金和回火状态。'
      },
      {
        question: '有哪些回火状态可用,它们如何影响性能?',
        answer: '锐创提供多种回火状态:O回火(完全退火)提供最大延展性和成形性(>20%延伸率),非常适合深拉、复杂成形和弯曲操作。H12/H22(四分之一硬)在保持良好成形性的同时提供适度的强度增加,适用于一般钣金工作。H14/H24(半硬)在强度和成形性之间提供平衡,通常用于需要适度成形和一定结构强度的零件。H16/H26(四分之三硬)提供更高的强度和有限的成形性,适用于面板和最小成形的元件。H18/H28(全硬)提供最大强度和硬度,延展性最小,用于需要结构刚性的应用。从O到H18回火,抗拉强度通常增加50-100%,而延伸率从>20%下降到<3%。回火选择应平衡成形要求和机械性能需求。'
      },
      {
        question: '铝带可以阳极氧化或涂层吗?',
        answer: '是的,铝带非常适合阳极氧化和各种涂层工艺。阳极氧化创建耐用、耐腐蚀的氧化层,可以染成各种颜色,非常适合建筑应用、电子外壳和装饰装饰。II型阳极氧化(硫酸工艺)产生5-25μm厚的层,适用于大多数应用,而III型(硬涂层)创建25-150μm涂层,具有卓越的耐磨性和耐腐蚀性。我们的铝带还可以接受粉末涂层、涂漆表面和转化涂层。为了获得最佳阳极氧化效果,我们推荐具有光亮表面或化学清洁表面的1000或6000系列合金。3000和8000系列可以阳极氧化,但由于合金元素可能产生略深或不太均匀的颜色。表面准备至关重要——我们可以提供针对您的精加工工艺优化的预处理表面的铝带。'
      },
      {
        question: '锐创可以实现什么厚度和宽度公差?',
        answer: '我们的精密轧制能力提供严格的公差:对于大多数应用,标准厚度公差为±5%,而精密级对于需要严格尺寸控制的关键应用可达到±3%。宽度公差通常为最宽600mm的铝带±0.5mm,更宽的铝带为±0.8mm。对于专业应用,我们可以通过额外的加工步骤提供更严格的公差。定长材料的长度精度为±2mm。根据应用要求,边缘条件可以是轧边、分切边或去毛刺边。平整度按ASTM B209的I单位规格控制。对于需要卓越尺寸精度的应用,如电池箔或精密冲压,请指定精密级材料。我们的质量控制系统验证100%的生产以确保符合性,尺寸检查数据包含在材料证书中。'
      }
    ]
  },

  images: {
    hero: '/images/products/aluminum/aluminum-strip-hero.jpg',
    gallery: [
      '/images/products/aluminum/aluminum-strip-coil.jpg',
      '/images/products/aluminum/aluminum-strip-cable-shielding.jpg',
      '/images/products/aluminum/aluminum-strip-heat-exchanger.jpg',
      '/images/products/aluminum/aluminum-strip-surface.jpg'
    ]
  },

  tags: {
    en: ['Aluminum Strip', 'Aluminum Coil', 'Cable Shielding', 'Heat Exchanger Material', 'Battery Foil'],
    zh: ['铝带', '铝卷', '电缆屏蔽', '热交换器材料', '电池箔']
  },

  keywords: {
    en: ['aluminum strip', 'aluminum coil', 'aluminum strip manufacturer', 'cable shielding aluminum', 'heat exchanger aluminum', 'battery aluminum foil', 'aluminum strip for cable', 'aluminum strip coil', '1000 series aluminum', '3000 series aluminum'],
    zh: ['铝带', '铝卷', '铝带生产厂家', '电缆屏蔽铝', '热交换器铝', '电池铝箔', '电缆用铝带', '铝带卷材', '1000系列铝', '3000系列铝']
  },

  relatedProducts: ['aluminum-foil', 'aluminum-flat-wire', 'copper-strip', 'copper-clad-aluminum-strip'],

  certifications: ['ISO 9001:2015', 'RoHS', 'REACH', 'ASTM B209', 'EN 485', 'GB/T 3880'],

  meta: {
    en: {
      title: 'Aluminum Strip Manufacturer | Cable Shielding & Heat Exchanger Material | RAYTRON',
      description: 'Premium aluminum strip & coil (0.05-3.0mm) for cable shielding, heat exchangers, batteries. Multiple alloy grades (1000/3000/8000 series). ISO 9001 certified.',
      keywords: 'aluminum strip, aluminum coil, cable shielding aluminum, heat exchanger material, battery aluminum foil, aluminum strip manufacturer'
    },
    zh: {
      title: '铝带生产厂家 | 电缆屏蔽与热交换器材料 | 锐创新能源',
      description: '优质铝带与铝卷(0.05-3.0mm),用于电缆屏蔽、热交换器、电池。多种合金牌号(1000/3000/8000系列)。ISO 9001认证。',
      keywords: '铝带, 铝卷, 电缆屏蔽铝, 热交换器材料, 电池铝箔, 铝带生产厂家'
    }
  },

  seoContent: {
    en: `RAYTRON's aluminum strip products represent the optimal choice for applications requiring lightweight conductors, excellent thermal properties, and superior corrosion resistance. Our comprehensive range of aluminum alloys from 1000, 3000, and 8000 series provides solutions for cable shielding, heat exchangers, battery components, and industrial applications worldwide. Manufactured using advanced rolling technology with precise thickness control and consistent mechanical properties, our aluminum strips deliver reliable performance while offering significant weight and cost advantages over copper alternatives. From ultra-thin foil for battery applications to heavy-gauge strip for structural components, RAYTRON provides customized aluminum strip solutions backed by ISO 9001:2015 certification and comprehensive technical support.`,
    zh: `锐创铝带产品代表了需要轻量化导体、优异热性能和卓越耐腐蚀性的应用的最佳选择。我们来自1000、3000和8000系列的全面铝合金范围为全球电缆屏蔽、热交换器、电池元件和工业应用提供解决方案。采用先进的轧制技术制造,具有精确的厚度控制和一致的机械性能,我们的铝带在提供可靠性能的同时,与铜替代品相比提供显著的重量和成本优势。从电池应用的超薄箔到结构元件的厚规格带,锐创提供定制的铝带解决方案,并获得ISO 9001:2015认证和全面技术支持的支持。`
  }
}

// 由于篇幅限制,我将继续在下一个文件中创建剩余的3个铝系列产品
// 现在先生成基础文件导出

export const aluminumProducts: Product[] = [
  aluminumStrip
  // aluminumFoil,
  // aluminumFlatWire,
  // aluminumRibbonWire
]

export default aluminumProducts
