import type { Product } from '@/types/product';

/**
 * 铜系列产品数据
 * Copper Series Products
 */

export const copperProducts: Product[] = [
  // 1. 铜扁线 (Copper Flat Wire) - 核心产品
  {
    id: 'copper-flat-wire',
    sku: 'RT-COP-CFW-001',
    slug: 'copper-flat-wire',
    name: 'Copper Flat Wire',
    nameCN: '铜扁线',
    category: 'Copper Series',
    categoryCN: '铜系列',
    categorySlug: 'copper',
    tagline: 'Ultra-High Precision ±0.005mm Tolerance',
    taglineCN: '超高精度 ±0.005mm 公差',
    
    description: `RAYTRON's copper flat wire represents the pinnacle of precision metal manufacturing, featuring an industry-leading tolerance of ±0.005mm and width-to-thickness ratios up to 140:1. Manufactured using advanced 4-stand rolling technology on our 13 high-precision rolling mills, our copper flat wire delivers exceptional conductivity, dimensional accuracy, and surface quality. Made from 99.99% pure copper (C11000/T2), our flat wire is ideal for demanding applications in photovoltaic systems, battery manufacturing, electronics, and automotive industries where precision and reliability are paramount.`,
    
    descriptionCN: '锐创铜扁线代表了精密金属制造的巅峰,具有行业领先的±0.005mm公差和高达140:1的宽厚比。采用先进的4连轧技术在我们的13台高精度轧机上制造,我们的铜扁线提供卓越的导电性、尺寸精度和表面质量。采用99.99%纯铜(C11000/T2)制造,我们的扁线非常适合光伏系统、电池制造、电子和汽车等对精度和可靠性要求极高的应用。',
    
    detailedDescription: `Our copper flat wire manufacturing process begins with premium-grade oxygen-free copper (OFC) that undergoes multiple stages of precision rolling to achieve the exact dimensions and surface finish required for your application. The controlled annealing process ensures optimal ductility and conductivity while maintaining dimensional stability. Each production run is subjected to rigorous quality control including dimensional verification, conductivity testing, and surface inspection to guarantee consistent performance. The result is a copper flat wire that exceeds industry standards and meets the most demanding specifications in modern manufacturing.`,
    
    detailedDescriptionCN: '我们的铜扁线制造工艺始于优质无氧铜(OFC),经过多级精密轧制以达到您应用所需的精确尺寸和表面光洁度。可控退火工艺确保最佳延展性和导电性,同时保持尺寸稳定性。每次生产都经过严格的质量控制,包括尺寸验证、导电性测试和表面检查,以保证一致的性能。其结果是超越行业标准并满足现代制造中最苛刻规格的铜扁线。',
    
    metaDescription: 'High-precision copper flat wire manufacturer. ±0.005mm tolerance, 140:1 W/T ratio. ISO9001 certified. Perfect for photovoltaic, battery, electronics applications. MOQ 200kg, fast delivery.',
    
    keywords: [
      'copper flat wire',
      'flat copper wire',
      'precision copper flat wire',
      'copper flat wire manufacturer',
      'copper rectangular wire',
      'high conductivity flat wire',
      'copper flat wire for transformers',
      'enameled copper flat wire'
    ],
    
    keywordsCN: [
      '铜扁线',
      '扁铜线',
      '精密铜扁线',
      '铜扁线生产厂家',
      '铜矩形线',
      '高导电扁线',
      '变压器用铜扁线',
      '漆包铜扁线'
    ],
    
    specifications: {
      material: 'C11000 (T2) Oxygen-Free Copper, 99.99% purity',
      thicknessRange: '0.05mm - 0.8mm',
      widthRange: '0.5mm - 100mm',
      tolerance: '±0.005mm (thickness), ±0.01mm (width)',
      widthToThicknessRatio: 'Up to 140:1',
      conductivity: '≥100% IACS (58 MS/m)',
      tensileStrength: '200-400 MPa (depending on temper)',
      elongation: '≥20% (annealed)',
      hardness: 'HV 45-120 (depending on temper)',
      surfaceFinish: 'Bright, semi-bright, or matte',
      temper: 'Soft (O), Semi-hard (H), Hard (H04)',
      packaging: 'Spools, coils, or cut lengths',
      moq: '200kg',
      leadTime: '2-7 days for standard specifications'
    },
    
    specificationsCN: {
      material: 'C11000 (T2) 无氧铜, 99.99% 纯度',
      thicknessRange: '0.05mm - 0.8mm',
      widthRange: '0.5mm - 100mm',
      tolerance: '±0.005mm (厚度), ±0.01mm (宽度)',
      widthToThicknessRatio: '最高 140:1',
      conductivity: '≥100% IACS (58 MS/m)',
      tensileStrength: '200-400 MPa (根据回火状态)',
      elongation: '≥20% (退火态)',
      hardness: 'HV 45-120 (根据回火状态)',
      surfaceFinish: '光亮、半光亮或哑光',
      temper: '软态(O)、半硬(H)、硬态(H04)',
      packaging: '盘装、卷装或定长',
      moq: '200kg',
      leadTime: '标准规格2-7天'
    },
    
    features: [
      'Industry-leading tolerance of ±0.005mm for critical applications',
      'Width-to-thickness ratio up to 140:1 for maximum design flexibility',
      'Superior conductivity ≥100% IACS for optimal electrical performance',
      'Excellent surface finish with minimal defects',
      'Available in multiple tempers (soft, semi-hard, hard) to suit various applications',
      'Consistent dimensional accuracy across entire length',
      'Low oxide formation for reliable bonding and soldering',
      'ISO 9001:2015 certified manufacturing process'
    ],
    
    featuresCN: [
      '行业领先的±0.005mm公差,适用于关键应用',
      '宽厚比高达140:1,提供最大设计灵活性',
      '卓越的导电性≥100% IACS,实现最佳电气性能',
      '优异的表面光洁度,缺陷极少',
      '提供多种回火状态(软、半硬、硬)以适应各种应用',
      '整个长度上保持一致的尺寸精度',
      '低氧化物形成,确保可靠的键合和焊接',
      'ISO 9001:2015认证的制造工艺'
    ],
    
    advantages: [
      'Higher conductivity compared to copper-clad alternatives',
      'Superior bonding strength in soldering applications',
      'Excellent formability for complex geometries',
      'Long-term reliability in demanding environments',
      'Consistent quality batch to batch',
      'Competitive pricing with flexible MOQ',
      'Fast delivery and technical support',
      'Customizable dimensions and surface treatments'
    ],
    
    advantagesCN: [
      '与铜包材料相比具有更高的导电性',
      '在焊接应用中具有优异的键合强度',
      '优异的成型性,适用于复杂几何形状',
      '在苛刻环境中具有长期可靠性',
      '批次间质量一致',
      '具有竞争力的价格和灵活的起订量',
      '快速交货和技术支持',
      '可定制尺寸和表面处理'
    ],
    
    applications: [
      {
        name: 'Photovoltaic/Solar',
        nameCN: '光伏/太阳能',
        icon: '☀️',
        description: 'Busbar ribbons and interconnect wires for solar cell tabbing',
        descriptionCN: '用于太阳能电池焊带的汇流条和互连线',
        href: '/applications/solar'
      },
      {
        name: 'Battery Manufacturing',
        nameCN: '电池制造',
        icon: '🔋',
        description: 'Tab connections and current collectors for lithium-ion batteries',
        descriptionCN: '锂离子电池的极耳连接和集流体',
        href: '/applications/battery'
      },
      {
        name: 'Electronics',
        nameCN: '电子产品',
        icon: '💻',
        description: 'Busbars, connectors, and precision components for electronic devices',
        descriptionCN: '电子设备的汇流条、连接器和精密组件',
        href: '/applications/electronics'
      },
      {
        name: 'Automotive/EV',
        nameCN: '汽车/电动车',
        icon: '🚗',
        description: 'Motor windings, battery connections, and electrical systems',
        descriptionCN: '电机绕组、电池连接和电气系统',
        href: '/applications/automotive'
      },
      {
        name: 'Transformers & Motors',
        nameCN: '变压器与电机',
        icon: '⚡',
        description: 'Precision windings for transformers, inductors, and motors',
        descriptionCN: '变压器、电感器和电机的精密绕组',
        href: '/applications/electronics'
      }
    ],
    
    faqs: [
      {
        question: 'What is the minimum order quantity for copper flat wire?',
        questionCN: '铜扁线的最小起订量是多少?',
        answer: 'Our minimum order quantity (MOQ) for copper flat wire is 200kg. This flexible MOQ allows for cost-effective prototyping and small-scale production while maintaining competitive pricing.',
        answerCN: '我们的铜扁线最小起订量(MOQ)为200kg。这种灵活的MOQ允许经济高效的原型制作和小规模生产,同时保持有竞争力的价格。'
      },
      {
        question: 'What tolerance levels can you achieve for copper flat wire?',
        questionCN: '铜扁线可以达到什么公差水平?',
        answer: 'We can achieve industry-leading tolerances of ±0.005mm for thickness and ±0.01mm for width on our copper flat wire. This precision is maintained through advanced rolling technology and rigorous quality control processes.',
        answerCN: '我们的铜扁线厚度公差可达行业领先的±0.005mm,宽度公差可达±0.01mm。这种精度通过先进的轧制技术和严格的质量控制工艺来保持。'
      },
      {
        question: 'Can you provide copper flat wire in different tempers?',
        questionCN: '你们能提供不同回火状态的铜扁线吗?',
        answer: 'Yes, we offer copper flat wire in soft (O temper), semi-hard (H temper), and hard (H04 temper) conditions. The choice of temper depends on your application requirements for formability versus strength.',
        answerCN: '是的,我们提供软态(O回火)、半硬(H回火)和硬态(H04回火)的铜扁线。回火状态的选择取决于您应用对成型性与强度的要求。'
      },
      {
        question: 'What is the typical lead time for standard copper flat wire orders?',
        questionCN: '标准铜扁线订单的典型交货期是多久?',
        answer: 'For standard specifications, our typical lead time is 2-7 days from order confirmation. Custom specifications may require 7-14 days depending on complexity. Rush orders can be accommodated with advance notice.',
        answerCN: '对于标准规格,我们的典型交货期是从订单确认后2-7天。定制规格可能需要7-14天,具体取决于复杂程度。紧急订单可以提前通知安排。'
      },
      {
        question: 'How does copper flat wire compare to round wire for certain applications?',
        questionCN: '在某些应用中,铜扁线与圆线相比如何?',
        answer: 'Copper flat wire offers several advantages over round wire including better space utilization in windings, higher packing density, improved heat dissipation, and more surface area for connections. This makes it ideal for compact designs and high-current applications.',
        answerCN: '铜扁线比圆线具有多项优势,包括绕组中更好的空间利用率、更高的堆积密度、改善的散热性以及更多的连接表面积。这使其成为紧凑设计和大电流应用的理想选择。'
      },
      {
        question: 'What quality certifications do your copper flat wire products have?',
        questionCN: '你们的铜扁线产品有哪些质量认证?',
        answer: 'All our copper flat wire products are manufactured under ISO 9001:2015 certified quality management system. We can provide material certificates, test reports, and RoHS compliance documentation upon request.',
        answerCN: '我们所有的铜扁线产品都在ISO 9001:2015认证的质量管理体系下生产。我们可以根据要求提供材料证书、测试报告和RoHS合规文件。'
      },
      {
        question: 'Can you customize the surface finish of copper flat wire?',
        questionCN: '你们能定制铜扁线的表面处理吗?',
        answer: 'Yes, we offer various surface finishes including bright (polished), semi-bright, matte, tin-plated, nickel-plated, and silver-plated options. The choice depends on your solderability, corrosion resistance, and aesthetic requirements.',
        answerCN: '是的,我们提供各种表面处理,包括光亮(抛光)、半光亮、哑光、镀锡、镀镍和镀银选项。选择取决于您的可焊性、耐腐蚀性和美观要求。'
      },
      {
        question: 'What is the maximum width-to-thickness ratio you can achieve?',
        questionCN: '你们能实现的最大宽厚比是多少?',
        answer: 'We can achieve width-to-thickness ratios up to 140:1 on our advanced rolling mills. This industry-leading capability allows for ultra-thin, wide profiles that are essential for modern electronics and solar applications.',
        answerCN: '我们可以在先进的轧机上实现高达140:1的宽厚比。这一行业领先的能力允许超薄宽幅型材,这对现代电子和太阳能应用至关重要。'
      }
    ],
    
    badges: [
      'ISO 9001 Certified',
      '±0.005mm Tolerance',
      '140:1 W/T Ratio',
      'MOQ 200kg',
      '2-7 Days Delivery',
      '99.99% Pure Copper'
    ],
    
    badgesCN: [
      'ISO 9001认证',
      '±0.005mm公差',
      '140:1宽厚比',
      '起订量200kg',
      '2-7天交货',
      '99.99%纯铜'
    ],
    
    certifications: [
      'ISO 9001:2015',
      'RoHS Compliant',
      'REACH Compliant',
      'Material Test Certificates Available'
    ],
    
    images: [
      '/images/products/copper-flat-wire-hero.jpg',
      '/images/products/copper-flat-wire-close-up.jpg',
      '/images/products/copper-flat-wire-coils.jpg',
      '/images/products/copper-flat-wire-application.jpg'
    ],
    
    downloadableResources: [
      {
        title: 'Product Datasheet',
        titleCN: '产品数据表',
        type: 'PDF',
        size: '2.5 MB',
        url: '/resources/datasheets/copper-flat-wire.pdf'
      },
      {
        title: 'Technical Specifications',
        titleCN: '技术规格',
        type: 'PDF',
        size: '1.8 MB',
        url: '/resources/specifications/copper-flat-wire-specs.pdf'
      },
      {
        title: 'Application Guide',
        titleCN: '应用指南',
        type: 'PDF',
        size: '3.2 MB',
        url: '/resources/guides/copper-flat-wire-application-guide.pdf'
      }
    ],
    
    relatedProducts: [
      'copper-strip',
      'copper-ribbon-wire',
      'tinned-copper-flat-wire',
      'enameled-copper-flat-wire'
    ],
    
    rating: {
      value: 4.9,
      count: 127
    },
    
    inStock: true,
    featured: true,
    newProduct: false,
    
    seoContent: {
      h2Headings: [
        'Why Choose RAYTRON Copper Flat Wire?',
        'Technical Specifications and Capabilities',
        'Applications Across Industries',
        'Quality Assurance and Certifications',
        'Ordering Information and Lead Times'
      ],
      additionalKeywords: [
        'precision copper flat wire manufacturer',
        'high conductivity flat copper wire',
        'custom copper flat wire',
        'copper flat wire supplier China',
        'photovoltaic copper ribbon',
        'battery tab copper wire'
      ]
    }
  },

  // 2. 铜带 (Copper Strip)
  {
    id: 'copper-strip',
    sku: 'RT-COP-CST-002',
    slug: 'copper-strip',
    name: 'Copper Strip',
    nameCN: '铜带',
    category: 'Copper Series',
    categoryCN: '铜系列',
    categorySlug: 'copper',
    tagline: 'Precision Copper Strip for Industrial Applications',
    taglineCN: '工业应用精密铜带',
    
    description: `RAYTRON's copper strip combines superior electrical conductivity with excellent mechanical properties, making it the ideal choice for cable shielding, busbars, connectors, and electronic components. Manufactured from 99.99% pure copper using advanced cold rolling technology, our copper strip offers consistent thickness, excellent surface finish, and reliable performance across a wide range of applications. Available in various widths from 10mm to 500mm and thicknesses from 0.05mm to 0.8mm, our copper strip meets the demanding requirements of modern manufacturing.`,
    
    descriptionCN: '锐创铜带结合了优异的导电性和出色的机械性能,使其成为电缆屏蔽、汇流条、连接器和电子元件的理想选择。采用99.99%纯铜,使用先进的冷轧技术制造,我们的铜带提供一致的厚度、优异的表面光洁度和在广泛应用中的可靠性能。提供10mm至500mm的各种宽度和0.05mm至0.8mm的厚度,我们的铜带满足现代制造的苛刻要求。',
    
    detailedDescription: `Our copper strip manufacturing process utilizes state-of-the-art continuous rolling mills that ensure uniform thickness and superior surface quality. The material undergoes precise temperature-controlled annealing to achieve the desired mechanical properties while maintaining excellent conductivity. Each coil is carefully inspected for surface defects, dimensional accuracy, and electrical properties before packaging. The result is a high-quality copper strip that delivers consistent performance and long service life in demanding applications.`,
    
    detailedDescriptionCN: '我们的铜带制造工艺采用最先进的连续轧机,确保均匀的厚度和优异的表面质量。材料经过精确的温控退火以获得所需的机械性能,同时保持优异的导电性。每卷材料在包装前都经过仔细检查,包括表面缺陷、尺寸精度和电气性能。其结果是高质量的铜带,在苛刻应用中提供一致的性能和长使用寿命。',
    
    metaDescription: 'Premium copper strip manufacturer. 0.05-0.8mm thickness, up to 500mm width. Perfect for cable shielding, busbars, electronics. ISO9001 certified. Fast delivery from China.',
    
    keywords: [
      'copper strip',
      'copper tape',
      'copper strip coil',
      'bare copper strip',
      'tinned copper strip',
      'copper conductor strip',
      'copper strip for cable',
      'precision copper strip'
    ],
    
    keywordsCN: [
      '铜带',
      '铜箔带',
      '铜带卷',
      '裸铜带',
      '镀锡铜带',
      '铜导体带',
      '电缆用铜带',
      '精密铜带'
    ],
    
    specifications: {
      material: 'C11000/C1100/T2 Copper, 99.99% purity',
      thicknessRange: '0.05mm - 0.8mm',
      widthRange: '10mm - 500mm',
      tolerance: '±0.01mm (thickness), ±0.5mm (width)',
      conductivity: '≥100% IACS',
      tensileStrength: '200-350 MPa',
      elongation: '≥25% (annealed)',
      hardness: 'HV 40-110',
      surfaceFinish: 'Bright, bare, tinned, or coated',
      temper: 'O, 1/4H, 1/2H, H',
      packaging: 'Coils or cut strips',
      coilWeight: '50-500kg',
      moq: '200kg',
      leadTime: '3-7 days'
    },
    
    specificationsCN: {
      material: 'C11000/C1100/T2 铜, 99.99% 纯度',
      thicknessRange: '0.05mm - 0.8mm',
      widthRange: '10mm - 500mm',
      tolerance: '±0.01mm (厚度), ±0.5mm (宽度)',
      conductivity: '≥100% IACS',
      tensileStrength: '200-350 MPa',
      elongation: '≥25% (退火态)',
      hardness: 'HV 40-110',
      surfaceFinish: '光亮、裸铜、镀锡或涂层',
      temper: 'O, 1/4H, 1/2H, H',
      packaging: '卷装或条装',
      coilWeight: '50-500kg',
      moq: '200kg',
      leadTime: '3-7天'
    },
    
    features: [
      'High electrical conductivity ≥100% IACS',
      'Excellent formability and ductility',
      'Superior surface finish with minimal oxide',
      'Consistent thickness across entire width',
      'Available in multiple surface treatments',
      'Tight dimensional tolerances',
      'Good solderability and weldability',
      'Various packaging options available'
    ],
    
    featuresCN: [
      '高导电性≥100% IACS',
      '优异的成型性和延展性',
      '优异的表面光洁度,氧化物极少',
      '整个宽度上厚度一致',
      '提供多种表面处理',
      '严格的尺寸公差',
      '良好的可焊性和可焊接性',
      '提供多种包装选项'
    ],
    
    advantages: [
      'Cost-effective for high-volume applications',
      'Excellent EMI shielding properties',
      'Suitable for precision stamping and forming',
      'Long-term corrosion resistance',
      'Consistent electrical properties',
      'Easy to process and fabricate',
      'Wide range of widths and thicknesses',
      'Quick turnaround time'
    ],
    
    advantagesCN: [
      '对于大批量应用具有成本效益',
      '优异的EMI屏蔽性能',
      '适用于精密冲压和成型',
      '长期耐腐蚀性',
      '一致的电气性能',
      '易于加工和制造',
      '广泛的宽度和厚度范围',
      '快速周转时间'
    ],
    
    applications: [
      {
        name: 'Cable Industry',
        nameCN: '线缆行业',
        icon: '🔌',
        description: 'Shielding tape for coaxial cables, data cables, and power cables',
        descriptionCN: '同轴电缆、数据线和电力电缆的屏蔽带',
        href: '/applications/cable'
      },
      {
        name: 'Electronics',
        nameCN: '电子产品',
        icon: '💻',
        description: 'Busbars, connectors, terminals, and grounding strips',
        descriptionCN: '汇流条、连接器、端子和接地带',
        href: '/applications/electronics'
      },
      {
        name: 'Transformers',
        nameCN: '变压器',
        icon: '⚡',
        description: 'Windings and connections for power transformers',
        descriptionCN: '电力变压器的绕组和连接',
        href: '/applications/electronics'
      },
      {
        name: 'Automotive',
        nameCN: '汽车',
        icon: '🚗',
        description: 'Battery tabs, busbars, and electrical connections',
        descriptionCN: '电池极耳、汇流条和电气连接',
        href: '/applications/automotive'
      }
    ],
    
    faqs: [
      {
        question: 'What widths of copper strip do you offer?',
        questionCN: '你们提供哪些宽度的铜带?',
        answer: 'We offer copper strip in widths ranging from 10mm to 500mm. Custom widths can be produced to meet specific application requirements.',
        answerCN: '我们提供宽度从10mm到500mm的铜带。可以生产定制宽度以满足特定应用要求。'
      },
      {
        question: 'Can you provide tinned copper strip?',
        questionCN: '你们能提供镀锡铜带吗?',
        answer: 'Yes, we offer tin-plated copper strip with coating thicknesses from 1-10 microns. Tin plating improves solderability and corrosion resistance.',
        answerCN: '是的,我们提供涂层厚度从1-10微米的镀锡铜带。镀锡可改善可焊性和耐腐蚀性。'
      },
      {
        question: 'What is the typical coil weight for copper strip?',
        questionCN: '铜带的典型卷重是多少?',
        answer: 'Standard coil weights range from 50kg to 500kg depending on strip width and thickness. Custom coil weights can be arranged.',
        answerCN: '标准卷重范围从50kg到500kg,具体取决于带材宽度和厚度。可以安排定制卷重。'
      },
      {
        question: 'How is copper strip packaged for shipment?',
        questionCN: '铜带如何包装运输?',
        answer: 'Copper strip is typically wound on plastic or wooden spools and wrapped with protective film and paper. Moisture-proof packaging is available for export shipments.',
        answerCN: '铜带通常卷绕在塑料或木制线盘上,并用保护膜和纸包裹。出口货物可提供防潮包装。'
      },
      {
        question: 'What quality tests do you perform on copper strip?',
        questionCN: '你们对铜带进行哪些质量测试?',
        answer: 'We perform dimensional inspection, conductivity testing, tensile strength testing, surface quality inspection, and provide material certificates for each batch.',
        answerCN: '我们对每批产品进行尺寸检查、导电性测试、拉伸强度测试、表面质量检查,并提供材料证书。'
      }
    ],
    
    badges: [
      'ISO 9001 Certified',
      'High Conductivity',
      'Wide Width Range',
      'Multiple Surface Options',
      'Fast Delivery'
    ],
    
    badgesCN: [
      'ISO 9001认证',
      '高导电性',
      '广泛宽度范围',
      '多种表面选项',
      '快速交货'
    ],
    
    certifications: [
      'ISO 9001:2015',
      'RoHS Compliant',
      'Material Certificates Available'
    ],
    
    images: [
      '/images/products/copper-strip-hero.jpg',
      '/images/products/copper-strip-coils.jpg',
      '/images/products/copper-strip-close-up.jpg',
      '/images/products/copper-strip-application.jpg'
    ],
    
    relatedProducts: [
      'copper-flat-wire',
      'tinned-copper-strip',
      'copper-foil',
      'nickel-plated-copper-strip'
    ],
    
    rating: {
      value: 4.8,
      count: 95
    },
    
    inStock: true,
    featured: true,
    newProduct: false
  }

  // Additional products will be added in subsequent files
  // 3. Copper Foil
  // 4. Copper Ribbon Wire  
  // 5. Copper Round Wire
];

export default copperProducts;
