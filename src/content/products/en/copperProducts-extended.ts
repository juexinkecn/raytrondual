// src/data/products/copperProducts.ts - 扩展部分
// 添加到现有copperProducts数组中

import type { Product } from '@/types/product'

// 产品 #3: 铜箔 (Copper Foil)
export const copperFoil: Product = {
  id: 'RT-COP-CFO-003',
  sku: 'RT-COP-CFO-003',
  slug: 'copper-foil',
  name: {
    en: 'Copper Foil',
    zh: '铜箔'
  },
  category: 'copper',
  subcategory: 'foil',
  featured: true,
  priority: 1,
  
  description: {
    en: `RAYTRON's Copper Foil represents the pinnacle of ultra-thin copper material technology, manufactured through precision rolling or electrodeposition processes. Our copper foil products are engineered for applications demanding exceptional electrical conductivity, thermal management, and mechanical flexibility. Available in thicknesses ranging from 9μm to 150μm, our copper foils serve critical roles in PCB manufacturing, lithium-ion batteries, electromagnetic shielding, and flexible electronics. With ISO 9001:2015 certification and advanced quality control systems, RAYTRON ensures consistent surface quality, excellent adhesion properties, and reliable performance across diverse operating conditions. Our copper foil products meet international standards including IPC-TM-650 and IEC 61189, making them the preferred choice for electronics manufacturers worldwide.`,
    zh: `锐创铜箔代表了超薄铜材料技术的巅峰,通过精密压延或电解沉积工艺制造。我们的铜箔产品专为需要卓越导电性能、热管理和机械柔性的应用而设计。厚度范围从9μm到150μm,广泛应用于PCB制造、锂离子电池、电磁屏蔽和柔性电子等关键领域。通过ISO 9001:2015认证和先进的质量控制系统,锐创确保一致的表面质量、优异的附着性能和可靠的性能表现。我们的铜箔产品符合IPC-TM-650和IEC 61189等国际标准,是全球电子制造商的首选。`
  },

  detailedDescription: {
    en: `RAYTRON's Copper Foil technology combines advanced manufacturing techniques with rigorous quality control to deliver ultra-thin copper materials that exceed industry expectations. Our manufacturing processes include precision rolling for rolled copper foil (RA foil) and electrodeposition for electrolytic copper foil (ED foil), each optimized for specific application requirements.

**Advanced Manufacturing Process:**
Our rolled copper foil production utilizes high-precision rolling mills with advanced thickness control systems, ensuring uniform thickness across the entire foil width. For electrolytic copper foil, we employ state-of-the-art electrodeposition technology with precise current density control, resulting in excellent surface smoothness and minimal defects. Post-processing treatments including annealing, passivation, and surface roughening are applied to optimize the foil's properties for specific applications.

**Superior Material Properties:**
RAYTRON copper foils exhibit exceptional electrical conductivity (>100% IACS), excellent thermal conductivity (>385 W/m·K), and superior mechanical flexibility. Our advanced surface treatment technology ensures optimal adhesion to various substrates, including FR-4, polyimide, and polymer films. The low profile design minimizes signal loss in high-frequency applications, making our copper foils ideal for 5G communications and advanced electronics.

**Quality Assurance:**
Every batch of copper foil undergoes comprehensive testing including thickness uniformity measurement, tensile strength testing, surface roughness analysis, and electrical resistance verification. Our automated inspection systems detect and eliminate defects with precision, ensuring 99.9% product consistency and reliability.`,

    zh: `锐创铜箔技术结合先进的制造工艺和严格的质量控制,提供超越行业预期的超薄铜材料。我们的制造工艺包括用于压延铜箔(RA箔)的精密压延和用于电解铜箔(ED箔)的电解沉积,每种工艺都针对特定应用需求进行了优化。

**先进制造工艺:**
我们的压延铜箔生产采用高精度轧机和先进的厚度控制系统,确保整个箔宽的厚度均匀性。对于电解铜箔,我们采用最先进的电解沉积技术和精确的电流密度控制,实现优异的表面光滑度和最小的缺陷率。退火、钝化和表面粗化等后处理工艺用于优化箔的特定应用性能。

**卓越材料性能:**
锐创铜箔具有卓越的导电性(>100% IACS)、优异的导热性(>385 W/m·K)和超强的机械柔性。我们的先进表面处理技术确保与各种基材(包括FR-4、聚酰亚胺和聚合物薄膜)的最佳附着力。低轮廓设计最大限度地降低了高频应用中的信号损失,使我们的铜箔成为5G通信和先进电子产品的理想选择。

**质量保证:**
每批铜箔都经过全面测试,包括厚度均匀性测量、拉伸强度测试、表面粗糙度分析和电阻验证。我们的自动化检测系统精确检测和消除缺陷,确保99.9%的产品一致性和可靠性。`
  },

  specifications: {
    en: [
      { name: 'Material Grade', value: 'C11000, C1100, Electrolytic Copper' },
      { name: 'Thickness Range', value: '9μm - 150μm (0.35mil - 6mil)' },
      { name: 'Width Range', value: '100mm - 650mm (Customizable)' },
      { name: 'Conductivity (IACS)', value: '≥100%' },
      { name: 'Thermal Conductivity', value: '>385 W/m·K' },
      { name: 'Surface Type', value: 'Shiny, Matte, Treated' },
      { name: 'Tensile Strength', value: '≥200 MPa' },
      { name: 'Elongation', value: '≥3%' },
      { name: 'Peel Strength', value: '0.8-1.4 N/mm (with resin)' },
      { name: 'Surface Roughness', value: 'Ra 0.3-3.0μm (Customizable)' },
      { name: 'Thickness Tolerance', value: '±5% (High precision: ±3%)' },
      { name: 'Surface Treatment', value: 'Passivated, Anti-oxidation' },
      { name: 'Temperature Resistance', value: '-55°C to +150°C' },
      { name: 'Standards Compliance', value: 'IPC-TM-650, IEC 61189, RoHS' }
    ],
    zh: [
      { name: '材质牌号', value: 'C11000、C1100、电解铜' },
      { name: '厚度范围', value: '9μm - 150μm (0.35mil - 6mil)' },
      { name: '宽度范围', value: '100mm - 650mm (可定制)' },
      { name: '导电率(IACS)', value: '≥100%' },
      { name: '导热系数', value: '>385 W/m·K' },
      { name: '表面类型', value: '光面、亚面、处理面' },
      { name: '抗拉强度', value: '≥200 MPa' },
      { name: '延伸率', value: '≥3%' },
      { name: '剥离强度', value: '0.8-1.4 N/mm (与树脂)' },
      { name: '表面粗糙度', value: 'Ra 0.3-3.0μm (可定制)' },
      { name: '厚度公差', value: '±5% (高精度: ±3%)' },
      { name: '表面处理', value: '钝化、抗氧化' },
      { name: '耐温范围', value: '-55°C 至 +150°C' },
      { name: '标准符合', value: 'IPC-TM-650、IEC 61189、RoHS' }
    ]
  },

  features: {
    en: [
      {
        title: 'Ultra-High Conductivity',
        description: 'Electrical conductivity exceeding 100% IACS ensures minimal power loss and maximum efficiency in electronic applications.'
      },
      {
        title: 'Exceptional Surface Quality',
        description: 'Advanced manufacturing processes deliver mirror-smooth surfaces with minimal defects, perfect for high-density PCB applications.'
      },
      {
        title: 'Superior Adhesion Properties',
        description: 'Optimized surface treatment ensures excellent bonding with various substrates including FR-4, polyimide, and flexible materials.'
      },
      {
        title: 'Precise Thickness Control',
        description: 'Advanced rolling and deposition technology maintains thickness tolerance within ±3%, ensuring consistent performance.'
      },
      {
        title: 'Enhanced Flexibility',
        description: 'Special annealing processes provide excellent mechanical flexibility, ideal for flex-PCB and roll-to-roll processing.'
      },
      {
        title: 'Thermal Management Excellence',
        description: 'High thermal conductivity (>385 W/m·K) efficiently dissipates heat, protecting sensitive electronic components.'
      },
      {
        title: 'Anti-Oxidation Protection',
        description: 'Advanced passivation treatment prevents oxidation, ensuring long-term reliability and shelf life.'
      },
      {
        title: 'Wide Application Compatibility',
        description: 'Available in multiple thicknesses and surface treatments to meet diverse industry requirements from PCBs to battery foils.'
      }
    ],
    zh: [
      {
        title: '超高导电性能',
        description: '导电率超过100% IACS,确保电子应用中最小功率损耗和最高效率。'
      },
      {
        title: '卓越表面质量',
        description: '先进制造工艺提供镜面光滑表面,缺陷极少,完美适用于高密度PCB应用。'
      },
      {
        title: '优异附着性能',
        description: '优化的表面处理确保与FR-4、聚酰亚胺和柔性材料等各种基材的出色结合。'
      },
      {
        title: '精确厚度控制',
        description: '先进的压延和沉积技术将厚度公差保持在±3%以内,确保一致的性能表现。'
      },
      {
        title: '增强柔韧性',
        description: '特殊退火工艺提供出色的机械柔性,非常适合柔性PCB和卷对卷加工。'
      },
      {
        title: '卓越热管理',
        description: '高导热系数(>385 W/m·K)有效散热,保护敏感电子元件。'
      },
      {
        title: '抗氧化保护',
        description: '先进的钝化处理防止氧化,确保长期可靠性和保质期。'
      },
      {
        title: '广泛应用兼容性',
        description: '提供多种厚度和表面处理,满足从PCB到电池箔的多样化行业需求。'
      }
    ]
  },

  advantages: {
    en: [
      {
        title: 'Industry-Leading Quality',
        description: '99.9% copper purity with ISO 9001:2015 certification, ensuring consistent performance and reliability.'
      },
      {
        title: 'Advanced Manufacturing Technology',
        description: 'State-of-the-art rolling and electrodeposition equipment produces foils with superior uniformity and minimal defects.'
      },
      {
        title: 'Customization Expertise',
        description: 'Flexible production capabilities to customize thickness, width, surface treatment, and packaging according to specific requirements.'
      },
      {
        title: 'Rapid Delivery',
        description: 'Efficient supply chain management ensures quick turnaround times without compromising quality standards.'
      },
      {
        title: 'Technical Support',
        description: 'Dedicated engineering team provides application guidance, material selection assistance, and process optimization support.'
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Optimized production processes and economies of scale deliver competitive pricing without sacrificing quality.'
      },
      {
        title: 'Global Standards Compliance',
        description: 'Products meet IPC, IEC, RoHS, and REACH standards, ensuring worldwide acceptance and regulatory compliance.'
      },
      {
        title: 'Sustainable Manufacturing',
        description: 'Environmentally responsible production processes with copper recycling programs and minimal waste generation.'
      }
    ],
    zh: [
      {
        title: '行业领先质量',
        description: '99.9%铜纯度,ISO 9001:2015认证,确保一致的性能和可靠性。'
      },
      {
        title: '先进制造技术',
        description: '最先进的压延和电解沉积设备生产具有卓越均匀性和最小缺陷的铜箔。'
      },
      {
        title: '定制化专业能力',
        description: '灵活的生产能力,可根据具体要求定制厚度、宽度、表面处理和包装。'
      },
      {
        title: '快速交付',
        description: '高效的供应链管理确保快速周转时间,同时不影响质量标准。'
      },
      {
        title: '技术支持',
        description: '专业工程团队提供应用指导、材料选择协助和工艺优化支持。'
      },
      {
        title: '成本效益解决方案',
        description: '优化的生产流程和规模经济在不牺牲质量的情况下提供有竞争力的价格。'
      },
      {
        title: '全球标准合规',
        description: '产品符合IPC、IEC、RoHS和REACH标准,确保全球接受度和法规合规性。'
      },
      {
        title: '可持续制造',
        description: '环保生产流程,铜回收计划和最小化废物产生。'
      }
    ]
  },

  applications: {
    en: [
      {
        title: 'Printed Circuit Boards (PCB)',
        description: 'Primary material for flexible PCBs (FPC), rigid-flex circuits, and multilayer boards. Excellent adhesion to FR-4 and polyimide substrates, superior etching characteristics for fine-line circuits, and reliable performance in high-frequency RF applications.'
      },
      {
        title: 'Lithium-Ion Batteries',
        description: 'Current collector foil for battery electrodes in EVs, smartphones, and energy storage systems. High electrical conductivity minimizes internal resistance, excellent mechanical strength withstands electrode coating processes, and superior surface uniformity ensures consistent battery performance.'
      },
      {
        title: 'Electromagnetic Shielding',
        description: 'EMI/RFI shielding for electronic devices, cables, and enclosures. High conductivity provides effective shielding (>60dB), conformable to complex shapes, and available with conductive adhesive backing for easy installation.'
      },
      {
        title: 'Flexible Electronics & Displays',
        description: 'Conductive layer in flexible displays, touch sensors, and wearable devices. Ultra-thin design enables device miniaturization, excellent flexibility withstands repeated bending (>100,000 cycles), and low surface roughness enables high-resolution patterning.'
      },
      {
        title: 'Transformers & Inductors',
        description: 'Winding material for high-frequency transformers and inductors. Low electrical resistance minimizes power loss, excellent thermal conductivity aids heat dissipation, and precise thickness control ensures consistent electrical characteristics.'
      },
      {
        title: 'Thermal Management',
        description: 'Heat spreading and thermal interface materials in high-power electronics. Superior thermal conductivity (>385 W/m·K) efficiently transfers heat, conformable design maximizes contact area, and excellent corrosion resistance ensures long-term reliability.'
      }
    ],
    zh: [
      {
        title: '印刷电路板(PCB)',
        description: '柔性PCB(FPC)、刚柔结合电路和多层板的主要材料。与FR-4和聚酰亚胺基材的出色附着力,精细线路的卓越蚀刻特性,以及在高频RF应用中的可靠性能。'
      },
      {
        title: '锂离子电池',
        description: '电动汽车、智能手机和储能系统电池电极的集电箔。高导电性最小化内阻,优异的机械强度承受电极涂层工艺,卓越的表面均匀性确保一致的电池性能。'
      },
      {
        title: '电磁屏蔽',
        description: '电子设备、电缆和外壳的EMI/RFI屏蔽。高导电性提供有效屏蔽(>60dB),适应复杂形状,并可提供导电胶背衬以便于安装。'
      },
      {
        title: '柔性电子与显示',
        description: '柔性显示屏、触摸传感器和可穿戴设备中的导电层。超薄设计实现设备小型化,优异的柔性承受反复弯曲(>100,000次),低表面粗糙度实现高分辨率图案化。'
      },
      {
        title: '变压器与电感器',
        description: '高频变压器和电感器的绕组材料。低电阻最小化功率损耗,优异的导热性有助于散热,精确的厚度控制确保一致的电气特性。'
      },
      {
        title: '热管理',
        description: '大功率电子产品中的散热和热界面材料。卓越的导热系数(>385 W/m·K)有效传热,适形设计最大化接触面积,优异的耐腐蚀性确保长期可靠性。'
      }
    ]
  },

  faqs: {
    en: [
      {
        question: 'What is the difference between rolled copper foil and electrolytic copper foil?',
        answer: 'Rolled copper foil (RA foil) is produced by mechanically rolling copper to achieve the desired thickness, resulting in excellent flexibility and consistent grain structure. It typically has higher tensile strength and better dimensional stability. Electrolytic copper foil (ED foil) is manufactured by electrodeposition onto a rotating drum, offering smoother surfaces and better adhesion properties, making it ideal for PCB applications. RA foil is preferred for flexible circuits and applications requiring superior mechanical properties, while ED foil excels in applications requiring optimal surface characteristics for etching.'
      },
      {
        question: 'How does copper foil thickness affect PCB performance?',
        answer: 'Thinner copper foils (9-18μm) are used in high-frequency RF circuits to minimize signal loss and enable finer circuit patterns, ideal for smartphones and advanced electronics. Medium thickness foils (35-70μm) balance current-carrying capacity with etching precision, suitable for most standard PCB applications. Thicker foils (105-150μm) provide higher current capacity and better heat dissipation, essential for power electronics and high-current applications. The thickness selection depends on current requirements, circuit density, and thermal management needs.'
      },
      {
        question: 'What surface treatments are available for copper foil and their purposes?',
        answer: 'RAYTRON offers several surface treatments: (1) Passivation coating prevents oxidation during storage and handling, extending shelf life. (2) Roughening treatment increases surface area and enhances adhesion to PCB substrates. (3) Anti-tarnish coating provides additional oxidation protection for long-term reliability. (4) Black oxide treatment improves adhesion and reduces reflection in optical applications. (5) Chromate treatment offers excellent adhesion and corrosion resistance. The choice depends on specific application requirements for PCB manufacturing, battery production, or electromagnetic shielding.'
      },
      {
        question: 'Can RAYTRON copper foil be used for battery applications?',
        answer: 'Yes, our copper foil is extensively used in lithium-ion battery manufacturing as the current collector for anode materials. Our battery-grade copper foil features: (1) High purity (99.9%+) ensuring minimal contamination, (2) Excellent surface uniformity enabling consistent electrode coating, (3) Optimal surface roughness (Ra 0.4-1.0μm) for superior adhesion to active materials, (4) High tensile strength withstanding electrode manufacturing processes, (5) Low electrical resistance minimizing internal battery resistance. Available in thicknesses from 6μm to 12μm, our foils meet the demanding requirements of EV batteries and energy storage systems.'
      },
      {
        question: 'What are the storage and handling requirements for copper foil?',
        answer: 'Proper storage and handling are essential to maintain copper foil quality: (1) Store in a cool, dry environment (15-25°C, <60% humidity) to prevent oxidation, (2) Keep foil in original protective packaging until use, (3) Handle with clean gloves to avoid fingerprint contamination, (4) Store rolls vertically to prevent deformation, (5) Use within 6-12 months of manufacture for optimal surface condition (passivated foils have extended shelf life). For foils without anti-oxidation treatment, immediate use or inert atmosphere storage is recommended. Following these guidelines ensures optimal performance in PCB manufacturing and other applications.'
      },
      {
        question: 'Does RAYTRON provide custom copper foil specifications?',
        answer: 'Yes, RAYTRON specializes in custom copper foil manufacturing tailored to specific requirements. We can customize: (1) Thickness from 9μm to 150μm with high precision (±3%), (2) Width up to 650mm for various processing equipment, (3) Surface treatments including passivation, roughening, and specialized coatings, (4) Surface roughness profiles optimized for your application, (5) Packaging configurations including roll size and protective interleaving. Our engineering team works closely with customers to develop optimal solutions for PCB, battery, shielding, and specialized applications. Contact us with your specific requirements for a customized solution and competitive quotation.'
      }
    ],
    zh: [
      {
        question: '压延铜箔和电解铜箔有什么区别?',
        answer: '压延铜箔(RA箔)是通过机械压延铜达到所需厚度,具有优异的柔性和一致的晶粒结构。它通常具有更高的抗拉强度和更好的尺寸稳定性。电解铜箔(ED箔)通过在旋转滚筒上电解沉积制造,提供更光滑的表面和更好的附着性能,非常适合PCB应用。RA箔适用于柔性电路和需要卓越机械性能的应用,而ED箔在需要蚀刻最佳表面特性的应用中表现出色。'
      },
      {
        question: '铜箔厚度如何影响PCB性能?',
        answer: '较薄的铜箔(9-18μm)用于高频RF电路,以最小化信号损耗并实现更精细的电路图案,非常适合智能手机和先进电子产品。中等厚度箔(35-70μm)平衡载流能力和蚀刻精度,适用于大多数标准PCB应用。较厚的箔(105-150μm)提供更高的电流容量和更好的散热,对于电力电子和大电流应用至关重要。厚度选择取决于电流要求、电路密度和热管理需求。'
      },
      {
        question: '铜箔有哪些表面处理及其用途?',
        answer: '锐创提供多种表面处理:(1)钝化涂层防止存储和处理过程中的氧化,延长保质期。(2)粗化处理增加表面积,增强与PCB基材的附着力。(3)抗变色涂层提供额外的氧化保护,确保长期可靠性。(4)黑色氧化物处理改善附着力并减少光学应用中的反射。(5)铬酸盐处理提供出色的附着力和耐腐蚀性。选择取决于PCB制造、电池生产或电磁屏蔽的具体应用要求。'
      },
      {
        question: '锐创铜箔可用于电池应用吗?',
        answer: '是的,我们的铜箔广泛用于锂离子电池制造,作为阳极材料的集电体。我们的电池级铜箔特点包括:(1)高纯度(99.9%+)确保最小污染,(2)优异的表面均匀性实现一致的电极涂层,(3)最佳表面粗糙度(Ra 0.4-1.0μm)实现对活性材料的卓越附着力,(4)高抗拉强度承受电极制造工艺,(5)低电阻最小化电池内阻。厚度从6μm到12μm不等,我们的铜箔满足电动汽车电池和储能系统的严格要求。'
      },
      {
        question: '铜箔的存储和处理要求是什么?',
        answer: '正确的存储和处理对于保持铜箔质量至关重要:(1)存储在凉爽干燥的环境中(15-25°C,<60%湿度)以防止氧化,(2)在使用前将箔保持在原始保护包装中,(3)用干净的手套处理以避免指纹污染,(4)垂直存放卷材以防止变形,(5)在制造后6-12个月内使用以获得最佳表面状态(钝化箔具有延长的保质期)。对于没有抗氧化处理的铜箔,建议立即使用或惰性气氛存储。遵循这些指南可确保在PCB制造和其他应用中的最佳性能。'
      },
      {
        question: '锐创提供定制铜箔规格吗?',
        answer: '是的,锐创专注于根据特定要求定制铜箔制造。我们可以定制:(1)厚度从9μm到150μm,高精度(±3%),(2)宽度高达650mm,适用于各种加工设备,(3)表面处理,包括钝化、粗化和专业涂层,(4)为您的应用优化的表面粗糙度轮廓,(5)包装配置,包括卷材尺寸和保护夹层。我们的工程团队与客户密切合作,为PCB、电池、屏蔽和专业应用开发最佳解决方案。请联系我们提供您的具体要求,获取定制解决方案和有竞争力的报价。'
      }
    ]
  },

  images: {
    hero: '/images/products/copper/copper-foil-hero.jpg',
    gallery: [
      '/images/products/copper/copper-foil-roll.jpg',
      '/images/products/copper/copper-foil-surface.jpg',
      '/images/products/copper/copper-foil-pcb-application.jpg',
      '/images/products/copper/copper-foil-battery.jpg'
    ]
  },

  tags: {
    en: ['Copper Foil', 'Electrodeposited Copper', 'Rolled Copper Foil', 'PCB Material', 'Battery Foil', 'EMI Shielding'],
    zh: ['铜箔', '电解铜箔', '压延铜箔', 'PCB材料', '电池箔', 'EMI屏蔽']
  },

  keywords: {
    en: ['copper foil', 'copper foil roll', 'electrolytic copper foil', 'rolled copper foil', 'PCB copper foil', 'battery copper foil', 'flexible copper foil', 'copper foil manufacturer', 'thin copper foil', 'copper foil strip'],
    zh: ['铜箔', '铜箔卷材', '电解铜箔', '压延铜箔', 'PCB铜箔', '电池铜箔', '柔性铜箔', '铜箔生产厂家', '超薄铜箔', '铜箔带']
  },

  relatedProducts: ['copper-strip', 'copper-flat-wire', 'aluminum-foil', 'nickel-copper-foil'],

  certifications: ['ISO 9001:2015', 'RoHS', 'REACH', 'IPC-TM-650', 'IEC 61189'],

  meta: {
    en: {
      title: 'Copper Foil Manufacturer | High-Quality Rolled & Electrolytic Copper Foil | RAYTRON',
      description: 'Premium copper foil (9-150μm) for PCB, battery, and EMI shielding applications. High conductivity (>100% IACS), superior surface quality. ISO 9001 certified. Custom specifications available.',
      keywords: 'copper foil, copper foil manufacturer, PCB copper foil, battery copper foil, electrolytic copper foil, rolled copper foil, EMI shielding copper foil'
    },
    zh: {
      title: '铜箔生产厂家 | 高品质压延与电解铜箔 | 锐创新能源',
      description: '优质铜箔(9-150μm),用于PCB、电池和EMI屏蔽应用。高导电性(>100% IACS),卓越表面质量。ISO 9001认证。可定制规格。',
      keywords: '铜箔, 铜箔生产厂家, PCB铜箔, 电池铜箔, 电解铜箔, 压延铜箔, EMI屏蔽铜箔'
    }
  },

  seoContent: {
    en: `RAYTRON's copper foil products represent cutting-edge technology in ultra-thin copper materials for modern electronics manufacturing. Our comprehensive range includes both rolled copper foil (RA foil) and electrolytic copper foil (ED foil), each engineered for specific high-performance applications. From PCB fabrication requiring precise etching characteristics to lithium-ion battery production demanding exceptional surface uniformity, our copper foils deliver consistent quality and reliability. With thickness options from 9μm to 150μm and customizable surface treatments, RAYTRON provides tailored solutions for flexible electronics, electromagnetic shielding, and thermal management applications across industries worldwide.`,
    zh: `锐创铜箔产品代表了现代电子制造中超薄铜材料的前沿技术。我们的综合产品系列包括压延铜箔(RA箔)和电解铜箔(ED箔),每种都针对特定的高性能应用而设计。从需要精确蚀刻特性的PCB制造到要求卓越表面均匀性的锂离子电池生产,我们的铜箔提供一致的质量和可靠性。厚度选项从9μm到150μm,并可定制表面处理,锐创为全球各行业的柔性电子、电磁屏蔽和热管理应用提供定制解决方案。`
  }
}

// 产品 #4: 铜微扁线 (Copper Ribbon Wire)
export const copperRibbonWire: Product = {
  id: 'RT-COP-CRW-004',
  sku: 'RT-COP-CRW-004',
  slug: 'copper-ribbon-wire',
  name: {
    en: 'Copper Ribbon Wire',
    zh: '铜微扁线'
  },
  category: 'copper',
  subcategory: 'ribbon',
  featured: false,
  priority: 3,

  description: {
    en: `RAYTRON's Copper Ribbon Wire combines the high conductivity of copper with the flexibility and space efficiency of ribbon geometry, creating an ideal solution for modern electronics requiring compact, high-performance conductors. Our copper ribbon wire is manufactured using precision rolling technology that maintains exceptional dimensional accuracy while ensuring uniform electrical properties across the entire cross-section. With widths ranging from 0.5mm to 10mm and thicknesses from 0.05mm to 0.5mm, our copper ribbon wire serves critical applications in battery interconnects, flexible circuits, photovoltaic systems, and precision electronics. Each product undergoes rigorous quality control including conductivity testing, dimensional verification, and surface inspection to ensure consistent performance. RAYTRON's copper ribbon wire meets international standards and is backed by ISO 9001:2015 certification.`,
    zh: `锐创铜微扁线将铜的高导电性与扁平几何形状的柔性和空间效率相结合,为需要紧凑高性能导体的现代电子产品创造了理想解决方案。我们的铜微扁线采用精密压延技术制造,在确保整个横截面均匀电气性能的同时保持卓越的尺寸精度。宽度范围从0.5mm到10mm,厚度从0.05mm到0.5mm,我们的铜微扁线服务于电池互连、柔性电路、光伏系统和精密电子等关键应用。每个产品都经过严格的质量控制,包括导电性测试、尺寸验证和表面检查,以确保一致的性能。锐创铜微扁线符合国际标准,并获得ISO 9001:2015认证。`
  },

  detailedDescription: {
    en: `RAYTRON's Copper Ribbon Wire technology represents a specialized evolution of traditional round wire, engineered specifically for applications where space optimization, thermal management, and electrical performance must be simultaneously maximized. Our manufacturing process begins with high-purity copper (99.9%+) that undergoes precision cold rolling to achieve the desired rectangular cross-section, followed by controlled annealing processes that optimize mechanical properties while maintaining excellent electrical conductivity.

**Manufacturing Excellence:**
Our production facility utilizes state-of-the-art multi-stage rolling mills with advanced thickness control systems, capable of producing ribbon wire with thickness tolerances as tight as ±0.01mm. The rolling process is carefully controlled to prevent work hardening while achieving the optimal grain structure for flexibility and fatigue resistance. Post-rolling annealing is performed in a controlled atmosphere to prevent oxidation while achieving the desired temper – from fully soft for maximum flexibility to half-hard or hard temper for applications requiring higher tensile strength.

**Superior Performance Characteristics:**
The rectangular cross-section of ribbon wire offers several advantages over round wire: (1) Higher current density due to increased surface area for equivalent volume, (2) Better heat dissipation through larger surface-to-volume ratio, (3) Space savings in compact assemblies, (4) Enhanced flexibility in the bending direction parallel to the width, (5) Lower profile connections ideal for battery terminals and thin-film applications. Our copper ribbon wire maintains electrical conductivity >100% IACS while providing tensile strengths from 200 MPa (soft) to 380 MPa (hard temper).

**Application-Specific Solutions:**
RAYTRON offers customized ribbon wire solutions optimized for specific applications. For battery interconnects, we provide tinned or nickel-plated surfaces for superior solderability and corrosion resistance. For flexible circuit applications, we supply ultra-thin ribbon wire with enhanced flexibility and minimal spring-back. For photovoltaic applications, we offer specially treated ribbon wire optimized for solar cell tabbing and stringing with excellent adhesion to solder and minimal contact resistance.`,

    zh: `锐创铜微扁线技术代表了传统圆线的专业演进,专门为空间优化、热管理和电气性能必须同时最大化的应用而设计。我们的制造工艺从高纯度铜(99.9%+)开始,经过精密冷轧以达到所需的矩形截面,然后通过受控退火工艺优化机械性能,同时保持优异的导电性。

**制造卓越:**
我们的生产设施采用最先进的多级轧机和先进的厚度控制系统,能够生产厚度公差可达±0.01mm的微扁线。轧制过程经过精心控制,以防止加工硬化,同时实现柔性和抗疲劳性的最佳晶粒结构。轧制后退火在受控气氛中进行,以防止氧化,同时达到所需的回火状态——从完全软化以获得最大柔性到半硬或硬回火以满足需要更高抗拉强度的应用。

**卓越性能特性:**
微扁线的矩形截面相对于圆线具有几个优势:(1)由于等效体积的表面积增加而具有更高的电流密度,(2)通过更大的表面积与体积比实现更好的散热,(3)在紧凑组件中节省空间,(4)在平行于宽度的弯曲方向上增强柔性,(5)更低轮廓的连接,非常适合电池端子和薄膜应用。我们的铜微扁线保持>100% IACS的导电性,同时提供从200 MPa(软)到380 MPa(硬回火)的抗拉强度。

**特定应用解决方案:**
锐创提供针对特定应用优化的定制微扁线解决方案。对于电池互连,我们提供镀锡或镀镍表面,具有卓越的可焊性和耐腐蚀性。对于柔性电路应用,我们提供具有增强柔性和最小回弹的超薄微扁线。对于光伏应用,我们提供专门处理的微扁线,优化用于太阳能电池焊片和串联,具有优异的焊料附着力和最小接触电阻。`
  },

  specifications: {
    en: [
      { name: 'Material Grade', value: 'C11000, C1100, Oxygen-Free Copper' },
      { name: 'Width Range', value: '0.5mm - 10mm (Customizable)' },
      { name: 'Thickness Range', value: '0.05mm - 0.5mm' },
      { name: 'Conductivity (IACS)', value: '≥100%' },
      { name: 'Tensile Strength', value: '200-380 MPa (depending on temper)' },
      { name: 'Elongation', value: '3-30% (depending on temper)' },
      { name: 'Temper Options', value: 'Soft (O), Half Hard (H02), Hard (H04)' },
      { name: 'Surface Finish', value: 'Bare, Tinned, Nickel Plated, Silver Plated' },
      { name: 'Dimensional Tolerance', value: 'Width: ±0.05mm, Thickness: ±0.01mm' },
      { name: 'Surface Quality', value: 'Smooth, Free from defects' },
      { name: 'Packaging', value: 'Spools, Coils, Cut Lengths' },
      { name: 'Temperature Range', value: '-55°C to +150°C' },
      { name: 'Standards Compliance', value: 'ASTM B152, IEC 60228, RoHS' }
    ],
    zh: [
      { name: '材质牌号', value: 'C11000、C1100、无氧铜' },
      { name: '宽度范围', value: '0.5mm - 10mm (可定制)' },
      { name: '厚度范围', value: '0.05mm - 0.5mm' },
      { name: '导电率(IACS)', value: '≥100%' },
      { name: '抗拉强度', value: '200-380 MPa (取决于回火状态)' },
      { name: '延伸率', value: '3-30% (取决于回火状态)' },
      { name: '回火选项', value: '软(O)、半硬(H02)、硬(H04)' },
      { name: '表面处理', value: '裸铜、镀锡、镀镍、镀银' },
      { name: '尺寸公差', value: '宽度: ±0.05mm, 厚度: ±0.01mm' },
      { name: '表面质量', value: '光滑,无缺陷' },
      { name: '包装', value: '线轴、线圈、定长切割' },
      { name: '温度范围', value: '-55°C 至 +150°C' },
      { name: '标准符合', value: 'ASTM B152、IEC 60228、RoHS' }
    ]
  },

  features: {
    en: [
      {
        title: 'High Current Density',
        description: 'Rectangular cross-section provides increased surface area for better current distribution and higher ampacity compared to equivalent round wire.'
      },
      {
        title: 'Superior Thermal Management',
        description: 'Large surface-to-volume ratio enables efficient heat dissipation, preventing thermal buildup in high-power applications.'
      },
      {
        title: 'Space-Efficient Design',
        description: 'Flat profile minimizes assembly volume, critical for compact battery packs, flexible circuits, and miniaturized electronics.'
      },
      {
        title: 'Enhanced Flexibility',
        description: 'Optimized grain structure and annealing process deliver excellent flexibility in the bending direction while maintaining structural integrity.'
      },
      {
        title: 'Precise Dimensions',
        description: 'Advanced manufacturing ensures tight tolerances (±0.01mm thickness) for consistent electrical properties and reliable assembly processes.'
      },
      {
        title: 'Multiple Surface Options',
        description: 'Available with tinning, nickel plating, or silver plating to enhance solderability, corrosion resistance, and contact performance.'
      },
      {
        title: 'Low Resistance Connections',
        description: 'Flat contact surface area reduces connection resistance, improving energy efficiency in battery systems and power electronics.'
      },
      {
        title: 'Excellent Fatigue Resistance',
        description: 'Controlled manufacturing process produces ribbon wire capable of withstanding repeated flexing cycles without performance degradation.'
      }
    ],
    zh: [
      {
        title: '高电流密度',
        description: '矩形截面提供增加的表面积,与等效圆线相比具有更好的电流分布和更高的载流量。'
      },
      {
        title: '卓越热管理',
        description: '大表面积与体积比实现高效散热,防止大功率应用中的热量积聚。'
      },
      {
        title: '节省空间设计',
        description: '扁平轮廓最小化组装体积,对于紧凑型电池组、柔性电路和小型化电子产品至关重要。'
      },
      {
        title: '增强柔韧性',
        description: '优化的晶粒结构和退火工艺在保持结构完整性的同时提供弯曲方向上的出色柔性。'
      },
      {
        title: '精确尺寸',
        description: '先进制造确保严格公差(±0.01mm厚度),实现一致的电气性能和可靠的组装工艺。'
      },
      {
        title: '多种表面选项',
        description: '可提供镀锡、镀镍或镀银,以增强可焊性、耐腐蚀性和接触性能。'
      },
      {
        title: '低电阻连接',
        description: '平面接触表面积减少连接电阻,提高电池系统和电力电子的能源效率。'
      },
      {
        title: '优异抗疲劳性',
        description: '受控制造工艺生产的微扁线能够承受反复弯曲循环而不会降低性能。'
      }
    ]
  },

  advantages: {
    en: [
      {
        title: 'Optimized for Battery Systems',
        description: 'Specifically engineered for battery tab welding and cell interconnections with excellent conductivity and thermal performance.'
      },
      {
        title: 'Cost-Effective Solution',
        description: 'Higher current capacity per unit weight compared to round wire reduces material costs while improving performance.'
      },
      {
        title: 'Custom Manufacturing',
        description: 'Flexible production capabilities for custom widths, thicknesses, tempers, and surface treatments to match exact application requirements.'
      },
      {
        title: 'Quality Assurance',
        description: '100% dimensional inspection and electrical testing ensures every spool meets specified tolerances and performance standards.'
      },
      {
        title: 'Application Engineering Support',
        description: 'Technical team provides design assistance, material selection guidance, and process optimization recommendations.'
      },
      {
        title: 'Rapid Prototyping',
        description: 'Quick sample production for design validation and testing before committing to volume production.'
      }
    ],
    zh: [
      {
        title: '电池系统优化',
        description: '专为电池极耳焊接和电芯互连而设计,具有卓越的导电性和热性能。'
      },
      {
        title: '成本效益解决方案',
        description: '与圆线相比,每单位重量的载流量更高,可降低材料成本同时提高性能。'
      },
      {
        title: '定制制造',
        description: '灵活的生产能力,可定制宽度、厚度、回火状态和表面处理,以匹配确切的应用要求。'
      },
      {
        title: '质量保证',
        description: '100%尺寸检查和电气测试确保每个线轴都符合指定的公差和性能标准。'
      },
      {
        title: '应用工程支持',
        description: '技术团队提供设计协助、材料选择指导和工艺优化建议。'
      },
      {
        title: '快速原型制作',
        description: '快速样品生产用于设计验证和测试,然后再进行批量生产。'
      }
    ]
  },

  applications: {
    en: [
      {
        title: 'Lithium Battery Interconnects',
        description: 'Primary application for connecting battery cells in series and parallel configurations. Low resistance connections minimize voltage drop, flat profile saves space in battery packs, and excellent flexibility accommodates cell expansion during charging cycles.'
      },
      {
        title: 'Photovoltaic Solar Cells',
        description: 'Tab and interconnect ribbon for solar cell manufacturing. Optimal width ensures even current collection, tinned surface provides superior solderability, and low contact resistance maximizes solar panel efficiency.'
      },
      {
        title: 'Flexible Printed Circuits',
        description: 'Power and signal conductors in flex-PCB applications. Ultra-thin options enable tight bend radii, excellent conductivity ensures signal integrity, and consistent dimensions facilitate automated assembly processes.'
      },
      {
        title: 'Bus bars & Power Distribution',
        description: 'Compact power distribution in electronic assemblies. High ampacity in minimal space, excellent thermal dissipation prevents hot spots, and flat contact surfaces ensure reliable connections.'
      },
      {
        title: 'LED Lighting Systems',
        description: 'Power delivery conductors in LED arrays and strips. Superior thermal management prevents LED degradation, flexible design accommodates curved installations, and low resistance maximizes efficiency.'
      }
    ],
    zh: [
      {
        title: '锂电池互连',
        description: '用于串联和并联配置连接电池单元的主要应用。低电阻连接最小化压降,扁平轮廓节省电池组空间,优异的柔性适应充电循环期间的电芯膨胀。'
      },
      {
        title: '光伏太阳能电池',
        description: '太阳能电池制造的焊片和互连带。最佳宽度确保均匀的电流收集,镀锡表面提供卓越的可焊性,低接触电阻最大化太阳能电池板效率。'
      },
      {
        title: '柔性印刷电路',
        description: '柔性PCB应用中的电源和信号导体。超薄选项实现紧密的弯曲半径,优异的导电性确保信号完整性,一致的尺寸促进自动化组装工艺。'
      },
      {
        title: '母线与电力分配',
        description: '电子组件中的紧凑电力分配。最小空间内的高载流量,优异的散热防止热点,平面接触表面确保可靠连接。'
      },
      {
        title: 'LED照明系统',
        description: 'LED阵列和灯带中的电力传输导体。卓越的热管理防止LED降解,灵活的设计适应弧形安装,低电阻最大化效率。'
      }
    ]
  },

  faqs: {
    en: [
      {
        question: 'What advantages does copper ribbon wire offer over round copper wire?',
        answer: 'Copper ribbon wire provides several key advantages: (1) Higher current density due to increased surface area per volume, (2) Superior heat dissipation with larger surface-to-volume ratio reducing operating temperature, (3) Space savings with flat profile fitting into compact assemblies, (4) Enhanced flexibility in one direction ideal for battery applications, (5) Lower profile connections perfect for thin battery cells and flexible circuits. These benefits make ribbon wire the preferred choice for modern battery systems, photovoltaic modules, and miniaturized electronics where space and thermal management are critical.'
      },
      {
        question: 'How do I select the appropriate ribbon wire dimensions for my application?',
        answer: 'Selection depends on several factors: (1) Current requirement determines minimum cross-sectional area (typically 1-2 A/mm² for continuous operation), (2) Space constraints define maximum width and thickness, (3) Flexibility needs influence thickness choice (thinner = more flexible), (4) Thermal considerations may require larger dimensions for better heat dissipation, (5) Manufacturing process compatibility (welding, soldering, crimping) affects surface finish selection. Our engineering team can help calculate optimal dimensions based on your specific requirements including current capacity, voltage drop limits, and mechanical constraints.'
      },
      {
        question: 'What surface finishes are available and their applications?',
        answer: 'RAYTRON offers multiple surface finishes: (1) Bare copper for maximum conductivity and lowest cost, suitable for immediate use or applications with protective coatings, (2) Tin plating provides excellent solderability and corrosion protection, ideal for PCB assembly and solar cell tabbing, (3) Nickel plating offers superior corrosion resistance and hardness, preferred for battery terminals and high-temperature applications, (4) Silver plating delivers the highest conductivity and low contact resistance, used in premium applications requiring optimal electrical performance. Selection depends on joining method, environmental conditions, and performance requirements.'
      },
      {
        question: 'Can ribbon wire be used for ultrasonic welding applications?',
        answer: 'Yes, copper ribbon wire is excellent for ultrasonic welding, particularly in battery manufacturing. The flat geometry provides optimal contact area for weld formation, and our controlled manufacturing process ensures consistent material properties for reliable welding. For ultrasonic welding applications, we recommend: (1) Soft or half-hard temper for better weld formation, (2) Smooth, oxide-free surface for consistent weld quality, (3) Appropriate thickness (typically 0.1-0.3mm) based on weld energy requirements, (4) Proper width to match battery tab dimensions. We can provide welding parameter recommendations based on your specific ultrasonic welding equipment and battery cell specifications.'
      },
      {
        question: 'What quality controls ensure consistent ribbon wire performance?',
        answer: 'RAYTRON implements comprehensive quality control: (1) Incoming material verification ensures copper purity >99.9%, (2) In-process monitoring tracks dimensional accuracy with automated thickness and width measurement every meter, (3) Conductivity testing verifies electrical performance meets >100% IACS specification, (4) Tensile testing confirms mechanical properties match specified temper, (5) Surface inspection detects defects using advanced optical systems, (6) Coil integrity checking ensures proper winding tension and layering. Each spool includes a Certificate of Conformance with test results. This rigorous quality system ensures every shipment meets specifications for reliable production performance.'
      }
    ],
    zh: [
      {
        question: '铜微扁线相对于圆铜线有什么优势?',
        answer: '铜微扁线提供几个关键优势:(1)由于每体积表面积增加而具有更高的电流密度,(2)更大的表面积与体积比降低工作温度,实现卓越的散热,(3)扁平轮廓适合紧凑组件,节省空间,(4)在一个方向上增强的柔性,非常适合电池应用,(5)更低轮廓的连接,完美适用于薄电池单元和柔性电路。这些优势使微扁线成为现代电池系统、光伏组件和小型化电子产品的首选,其中空间和热管理至关重要。'
      },
      {
        question: '如何为我的应用选择合适的微扁线尺寸?',
        answer: '选择取决于几个因素:(1)电流要求决定最小横截面积(通常连续运行为1-2 A/mm²),(2)空间限制定义最大宽度和厚度,(3)柔性需求影响厚度选择(越薄=越柔韧),(4)热考虑可能需要更大的尺寸以实现更好的散热,(5)制造工艺兼容性(焊接、钎焊、压接)影响表面处理选择。我们的工程团队可以根据您的具体要求(包括载流量、压降限制和机械约束)帮助计算最佳尺寸。'
      },
      {
        question: '有哪些表面处理可用及其应用?',
        answer: '锐创提供多种表面处理:(1)裸铜具有最大导电性和最低成本,适用于立即使用或具有保护涂层的应用,(2)镀锡提供出色的可焊性和防腐保护,非常适合PCB组装和太阳能电池焊片,(3)镀镍提供卓越的耐腐蚀性和硬度,适用于电池端子和高温应用,(4)镀银提供最高导电性和低接触电阻,用于需要最佳电气性能的高端应用。选择取决于连接方法、环境条件和性能要求。'
      },
      {
        question: '微扁线可以用于超声波焊接应用吗?',
        answer: '是的,铜微扁线非常适合超声波焊接,特别是在电池制造中。扁平几何形状为焊缝形成提供最佳接触面积,我们的受控制造工艺确保一致的材料性能,实现可靠的焊接。对于超声波焊接应用,我们建议:(1)软或半硬回火以获得更好的焊缝形成,(2)光滑、无氧化物的表面以实现一致的焊接质量,(3)基于焊接能量要求的适当厚度(通常为0.1-0.3mm),(4)与电池极耳尺寸匹配的适当宽度。我们可以根据您的特定超声波焊接设备和电池单元规格提供焊接参数建议。'
      },
      {
        question: '哪些质量控制确保微扁线性能一致?',
        answer: '锐创实施全面的质量控制:(1)来料验证确保铜纯度>99.9%,(2)过程监控通过每米自动厚度和宽度测量跟踪尺寸精度,(3)导电性测试验证电气性能符合>100% IACS规范,(4)拉伸测试确认机械性能符合指定回火状态,(5)表面检查使用先进的光学系统检测缺陷,(6)线圈完整性检查确保适当的绕线张力和分层。每个线轴都包含带有测试结果的合格证书。这种严格的质量系统确保每次发货都符合可靠生产性能的规格。'
      }
    ]
  },

  images: {
    hero: '/images/products/copper/copper-ribbon-wire-hero.jpg',
    gallery: [
      '/images/products/copper/copper-ribbon-wire-spool.jpg',
      '/images/products/copper/copper-ribbon-wire-battery-application.jpg',
      '/images/products/copper/copper-ribbon-wire-solar.jpg',
      '/images/products/copper/copper-ribbon-wire-close-up.jpg'
    ]
  },

  tags: {
    en: ['Copper Ribbon Wire', 'Battery Interconnect', 'Photovoltaic Ribbon', 'Flexible Conductor', 'Flat Wire'],
    zh: ['铜微扁线', '电池互连', '光伏焊带', '柔性导体', '扁线']
  },

  keywords: {
    en: ['copper ribbon wire', 'copper ribbon', 'battery interconnect wire', 'photovoltaic ribbon', 'solar cell ribbon', 'flat copper wire', 'copper ribbon manufacturer', 'battery tab wire', 'flexible copper ribbon'],
    zh: ['铜微扁线', '铜带线', '电池互连线', '光伏焊带', '太阳能电池焊带', '扁铜线', '铜微扁线生产厂家', '电池极耳线', '柔性铜带']
  },

  relatedProducts: ['copper-flat-wire', 'copper-strip', 'tinned-copper-strip', 'photovoltaic-ribbon'],

  certifications: ['ISO 9001:2015', 'RoHS', 'REACH', 'ASTM B152'],

  meta: {
    en: {
      title: 'Copper Ribbon Wire Manufacturer | Battery & Solar Cell Interconnect | RAYTRON',
      description: 'High-quality copper ribbon wire (0.5-10mm width) for battery interconnects, solar cells, and flex-PCB. Excellent conductivity, customizable dimensions. ISO 9001 certified.',
      keywords: 'copper ribbon wire, battery interconnect wire, photovoltaic ribbon, solar cell ribbon, copper ribbon manufacturer, flat copper wire'
    },
    zh: {
      title: '铜微扁线生产厂家 | 电池与太阳能电池互连 | 锐创新能源',
      description: '高品质铜微扁线(宽度0.5-10mm),用于电池互连、太阳能电池和柔性PCB。优异导电性,可定制尺寸。ISO 9001认证。',
      keywords: '铜微扁线, 电池互连线, 光伏焊带, 太阳能电池焊带, 铜微扁线生产厂家, 扁铜线'
    }
  },

  seoContent: {
    en: `RAYTRON's copper ribbon wire represents the optimal solution for modern high-density interconnection challenges in battery systems, photovoltaic modules, and flexible electronics. Our precision-manufactured ribbon wire combines the excellent electrical conductivity of pure copper with space-efficient flat geometry, delivering superior performance in compact applications. From battery pack assembly requiring reliable low-resistance connections to solar cell tabbing demanding consistent solderability, our copper ribbon wire provides the quality and consistency that leading manufacturers depend on. Available in multiple widths, thicknesses, tempers, and surface finishes, RAYTRON delivers customized ribbon wire solutions backed by comprehensive technical support and ISO 9001:2015 quality assurance.`,
    zh: `锐创铜微扁线代表了现代高密度互连挑战的最佳解决方案,适用于电池系统、光伏组件和柔性电子产品。我们精密制造的微扁线将纯铜的优异导电性与节省空间的扁平几何形状相结合,在紧凑应用中提供卓越性能。从需要可靠低电阻连接的电池组装到要求一致可焊性的太阳能电池焊片,我们的铜微扁线提供领先制造商所依赖的质量和一致性。提供多种宽度、厚度、回火状态和表面处理,锐创提供定制微扁线解决方案,并获得全面的技术支持和ISO 9001:2015质量保证。`
  }
}

// 产品 #5: 铜圆线 (Copper Round Wire)
export const copperRoundWire: Product = {
  id: 'RT-COP-CRO-005',
  sku: 'RT-COP-CRO-005',
  slug: 'copper-round-wire',
  name: {
    en: 'Copper Round Wire',
    zh: '铜圆线'
  },
  category: 'copper',
  subcategory: 'round-wire',
  featured: false,
  priority: 4,

  description: {
    en: `RAYTRON's Copper Round Wire is manufactured using high-purity electrolytic copper (99.9%+) through precision drawing processes, delivering exceptional electrical conductivity, mechanical strength, and surface quality. Our comprehensive product range spans diameters from 0.5mm to 10mm, available in soft, semi-hard, and hard tempers to match specific application requirements. Each wire undergoes strict quality control including conductivity testing, dimensional verification, and surface inspection to ensure consistent performance. Widely used in electrical cables, transformers, motors, electromagnets, and precision electronics, RAYTRON copper round wire meets international standards including ASTM B3, IEC 60228, and GB/T 3953. Backed by ISO 9001:2015 certification and comprehensive technical support, our copper round wire delivers reliable performance for demanding applications worldwide.`,
    zh: `锐创铜圆线采用高纯度电解铜(99.9%+)通过精密拉丝工艺制造,提供卓越的导电性、机械强度和表面质量。我们的综合产品范围涵盖直径从0.5mm到10mm,可提供软、半硬和硬回火状态以匹配特定应用要求。每根线材都经过严格的质量控制,包括导电性测试、尺寸验证和表面检查,以确保一致的性能。广泛应用于电线电缆、变压器、电机、电磁铁和精密电子产品,锐创铜圆线符合ASTM B3、IEC 60228和GB/T 3953等国际标准。获得ISO 9001:2015认证和全面技术支持的支持,我们的铜圆线为全球要求苛刻的应用提供可靠性能。`
  },

  detailedDescription: {
    en: `RAYTRON's Copper Round Wire production represents decades of expertise in wire drawing technology, combining precision manufacturing with rigorous quality control to deliver products that consistently exceed industry standards. Our manufacturing process begins with carefully selected high-purity copper cathodes that undergo continuous casting to produce wire rod, followed by multiple drawing passes through precision dies to achieve the desired diameter with excellent dimensional accuracy and surface finish.

**Advanced Manufacturing Process:**
The wire drawing process is carefully controlled to optimize both mechanical and electrical properties. Multiple intermediate annealing steps prevent work hardening and maintain optimal grain structure, while our state-of-the-art drawing equipment ensures consistent diameter throughout each coil. Final annealing in controlled atmosphere furnaces produces the desired temper – from fully soft (annealed) for maximum flexibility in winding applications to hard-drawn for applications requiring high tensile strength.

**Superior Material Properties:**
Our copper round wire maintains electrical conductivity of 100% IACS minimum (International Annealed Copper Standard), ensuring minimal power loss in electrical applications. Mechanical properties are precisely controlled based on temper: soft wire provides excellent formability for coil winding, while hard-drawn wire delivers tensile strengths exceeding 350 MPa for applications requiring structural support. Surface quality is maintained through careful processing, with smooth, oxide-free surfaces that facilitate excellent solderability and electrical contact performance.

**Comprehensive Testing & Quality Assurance:**
Every production lot undergoes comprehensive testing including electrical conductivity measurement, tensile strength and elongation testing, dimensional verification, and surface inspection. Our advanced quality control systems track production parameters in real-time, ensuring consistent product quality and enabling full traceability. Certificates of conformance with detailed test results accompany each shipment, providing documentation for critical applications in aerospace, automotive, and industrial electronics.`,

    zh: `锐创铜圆线生产代表了数十年的拉丝技术专业知识,将精密制造与严格的质量控制相结合,提供始终超越行业标准的产品。我们的制造工艺从精心挑选的高纯度铜阴极开始,经过连续铸造生产线材,然后通过精密模具进行多次拉拔,以实现所需直径,同时具有优异的尺寸精度和表面光洁度。

**先进制造工艺:**
拉丝工艺经过精心控制,以优化机械和电气性能。多个中间退火步骤防止加工硬化并保持最佳晶粒结构,而我们最先进的拉丝设备确保整个线圈的直径一致性。在受控气氛炉中进行的最终退火产生所需的回火状态——从完全软化(退火)以在绕线应用中实现最大柔性到硬拉以满足需要高抗拉强度的应用。

**卓越材料性能:**
我们的铜圆线保持最小100% IACS(国际退火铜标准)的导电性,确保电气应用中的最小功率损耗。机械性能根据回火状态精确控制:软线提供出色的成形性用于线圈绕制,而硬拉线提供超过350 MPa的抗拉强度用于需要结构支撑的应用。通过仔细加工保持表面质量,具有光滑、无氧化物的表面,有助于出色的可焊性和电接触性能。

**全面测试与质量保证:**
每个生产批次都经过全面测试,包括导电率测量、抗拉强度和延伸率测试、尺寸验证和表面检查。我们先进的质量控制系统实时跟踪生产参数,确保一致的产品质量并实现完全可追溯性。附有详细测试结果的合格证书随每次发货一起提供,为航空航天、汽车和工业电子等关键应用提供文档。`
  },

  specifications: {
    en: [
      { name: 'Material Grade', value: 'C11000, C1100, Electrolytic Tough Pitch Copper' },
      { name: 'Diameter Range', value: '0.5mm - 10mm (Customizable)' },
      { name: 'Conductivity (IACS)', value: '≥100%' },
      { name: 'Copper Purity', value: '≥99.9%' },
      { name: 'Tensile Strength (Soft)', value: '220-260 MPa' },
      { name: 'Tensile Strength (Hard)', value: '350-400 MPa' },
      { name: 'Elongation (Soft)', value: '≥30%' },
      { name: 'Elongation (Hard)', value: '2-5%' },
      { name: 'Temper Options', value: 'Soft (O), Semi-Hard (H01), Hard (H02)' },
      { name: 'Surface Finish', value: 'Bare Bright, Tinned, Silver Plated' },
      { name: 'Diameter Tolerance', value: '±0.02mm (±0.01mm for precision grade)' },
      { name: 'Packaging', value: 'Spools, Coils, or Straight Lengths' },
      { name: 'Temperature Range', value: '-55°C to +200°C' },
      { name: 'Standards Compliance', value: 'ASTM B3, IEC 60228, GB/T 3953, RoHS' }
    ],
    zh: [
      { name: '材质牌号', value: 'C11000、C1100、电解韧铜' },
      { name: '直径范围', value: '0.5mm - 10mm (可定制)' },
      { name: '导电率(IACS)', value: '≥100%' },
      { name: '铜纯度', value: '≥99.9%' },
      { name: '抗拉强度(软)', value: '220-260 MPa' },
      { name: '抗拉强度(硬)', value: '350-400 MPa' },
      { name: '延伸率(软)', value: '≥30%' },
      { name: '延伸率(硬)', value: '2-5%' },
      { name: '回火选项', value: '软(O)、半硬(H01)、硬(H02)' },
      { name: '表面处理', value: '光亮裸铜、镀锡、镀银' },
      { name: '直径公差', value: '±0.02mm (精密级±0.01mm)' },
      { name: '包装', value: '线轴、线圈或直条' },
      { name: '温度范围', value: '-55°C 至 +200°C' },
      { name: '标准符合', value: 'ASTM B3、IEC 60228、GB/T 3953、RoHS' }
    ]
  },

  features: {
    en: [
      {
        title: 'Excellent Electrical Conductivity',
        description: 'Minimum 100% IACS conductivity ensures efficient power transmission with minimal energy loss in electrical applications.'
      },
      {
        title: 'High Purity Copper',
        description: '99.9%+ purity copper provides superior conductivity, excellent solderability, and reliable long-term performance.'
      },
      {
        title: 'Precise Dimensional Control',
        description: 'Advanced drawing technology maintains tight diameter tolerances (±0.02mm) for consistent performance and reliable manufacturing processes.'
      },
      {
        title: 'Multiple Temper Options',
        description: 'Available in soft, semi-hard, and hard tempers to match application-specific requirements for flexibility versus strength.'
      },
      {
        title: 'Superior Surface Quality',
        description: 'Smooth, bright surface finish free from defects ensures excellent electrical contact and facilitates downstream processing.'
      },
      {
        title: 'Excellent Solderability',
        description: 'Clean copper surface or optional tinning provides superior solder wetting for reliable electrical connections.'
      },
      {
        title: 'Wide Application Range',
        description: 'Comprehensive diameter range and temper options suitable for cables, transformers, motors, electromagnets, and precision electronics.'
      },
      {
        title: 'Consistent Quality',
        description: 'Rigorous quality control and testing ensure every coil meets specifications for electrical, mechanical, and dimensional properties.'
      }
    ],
    zh: [
      {
        title: '优异导电性能',
        description: '最低100% IACS导电率确保电气应用中高效功率传输和最小能量损耗。'
      },
      {
        title: '高纯度铜',
        description: '99.9%+纯度铜提供卓越的导电性、优异的可焊性和可靠的长期性能。'
      },
      {
        title: '精确尺寸控制',
        description: '先进的拉丝技术保持严格的直径公差(±0.02mm),实现一致的性能和可靠的制造工艺。'
      },
      {
        title: '多种回火选项',
        description: '可提供软、半硬和硬回火状态,以匹配特定应用对柔性与强度的要求。'
      },
      {
        title: '卓越表面质量',
        description: '光滑、光亮的表面光洁度无缺陷,确保优异的电接触并便于下游加工。'
      },
      {
        title: '优异可焊性',
        description: '清洁的铜表面或可选镀锡提供卓越的焊料润湿性,实现可靠的电气连接。'
      },
      {
        title: '广泛应用范围',
        description: '全面的直径范围和回火选项适用于电缆、变压器、电机、电磁铁和精密电子产品。'
      },
      {
        title: '一致质量',
        description: '严格的质量控制和测试确保每个线圈都符合电气、机械和尺寸性能的规格。'
      }
    ]
  },

  advantages: {
    en: [
      {
        title: 'Proven Reliability',
        description: 'Decades of manufacturing experience and ISO 9001:2015 certification ensure consistent quality and dependable performance.'
      },
      {
        title: 'Comprehensive Product Range',
        description: 'Wide selection of diameters, tempers, and surface finishes to meet diverse application requirements from a single supplier.'
      },
      {
        title: 'Custom Manufacturing',
        description: 'Flexible production capabilities for custom diameters, special tempers, and tailored packaging to match exact specifications.'
      },
      {
        title: 'Technical Excellence',
        description: 'Expert engineering support for material selection, application guidance, and process optimization to maximize performance.'
      },
      {
        title: 'Quality Documentation',
        description: 'Comprehensive certificates of conformance with detailed test results provide full traceability for critical applications.'
      },
      {
        title: 'Competitive Pricing',
        description: 'Efficient manufacturing processes and supply chain management deliver cost-effective solutions without compromising quality.'
      },
      {
        title: 'Global Standards',
        description: 'Products meet ASTM, IEC, GB, RoHS, and REACH standards ensuring worldwide acceptance and regulatory compliance.'
      },
      {
        title: 'Responsive Service',
        description: 'Dedicated customer support team provides rapid quotations, technical assistance, and logistics coordination.'
      }
    ],
    zh: [
      {
        title: '经过验证的可靠性',
        description: '数十年的制造经验和ISO 9001:2015认证确保一致的质量和可靠的性能。'
      },
      {
        title: '全面产品系列',
        description: '广泛的直径、回火状态和表面处理选择,从单一供应商满足多样化的应用要求。'
      },
      {
        title: '定制制造',
        description: '灵活的生产能力,可定制直径、特殊回火状态和定制包装,以匹配确切规格。'
      },
      {
        title: '技术卓越',
        description: '专家工程支持用于材料选择、应用指导和工艺优化,以最大化性能。'
      },
      {
        title: '质量文档',
        description: '附有详细测试结果的全面合格证书为关键应用提供完全可追溯性。'
      },
      {
        title: '有竞争力的价格',
        description: '高效的制造工艺和供应链管理在不影响质量的情况下提供成本效益的解决方案。'
      },
      {
        title: '全球标准',
        description: '产品符合ASTM、IEC、GB、RoHS和REACH标准,确保全球接受度和法规合规性。'
      },
      {
        title: '响应式服务',
        description: '专业的客户支持团队提供快速报价、技术协助和物流协调。'
      }
    ]
  },

  applications: {
    en: [
      {
        title: 'Electrical Cables & Wires',
        description: 'Primary conductor in power cables, communication cables, and flexible cords. Excellent conductivity minimizes voltage drop, multiple temper options match application flexibility requirements, and consistent quality ensures reliable long-term performance in building wiring and industrial installations.'
      },
      {
        title: 'Transformers & Inductors',
        description: 'Winding wire for power transformers, distribution transformers, and inductive components. High conductivity reduces copper losses, precise dimensions enable tight winding tolerance, and excellent insulation compatibility (with enamel coating) ensures reliable electrical isolation in high-voltage applications.'
      },
      {
        title: 'Electric Motors & Generators',
        description: 'Stator and rotor windings in AC/DC motors and generators. Superior electrical and thermal properties ensure efficient energy conversion, excellent mechanical properties withstand operating stresses, and consistent quality delivers reliable motor performance across industrial, automotive, and appliance applications.'
      },
      {
        title: 'Electromagnets & Solenoids',
        description: 'Coil winding for electromagnets, solenoids, relays, and actuators. High conductivity maximizes magnetic field strength for given power input, soft temper enables tight coil winding, and excellent dimensional consistency ensures predictable electromagnetic performance in control and automation systems.'
      },
      {
        title: 'Grounding & Lightning Protection',
        description: 'Grounding electrodes and lightning conductor systems. Large diameter hard-drawn wire provides mechanical strength for outdoor installations, excellent conductivity ensures effective fault current dissipation, and superior corrosion resistance (especially with tinning) guarantees long-term reliability in harsh environments.'
      },
      {
        title: 'Precision Electronics & Instrumentation',
        description: 'Interconnect wire in electronic assemblies, test equipment, and precision instruments. Small diameter options enable miniaturization, excellent solderability facilitates reliable connections, and consistent electrical properties ensure measurement accuracy and signal integrity in sensitive electronic applications.'
      }
    ],
    zh: [
      {
        title: '电线电缆',
        description: '电力电缆、通信电缆和软线中的主要导体。优异的导电性最小化压降,多种回火选项匹配应用柔性要求,一致的质量确保建筑布线和工业安装中的可靠长期性能。'
      },
      {
        title: '变压器与电感器',
        description: '电力变压器、配电变压器和电感元件的绕组线。高导电性降低铜损,精确尺寸实现严格的绕组公差,优异的绝缘兼容性(配合漆包)确保高压应用中的可靠电气隔离。'
      },
      {
        title: '电机与发电机',
        description: '交流/直流电机和发电机中的定子和转子绕组。卓越的电气和热性能确保高效的能量转换,优异的机械性能承受运行应力,一致的质量在工业、汽车和家电应用中提供可靠的电机性能。'
      },
      {
        title: '电磁铁与电磁阀',
        description: '电磁铁、电磁阀、继电器和执行器的线圈绕组。高导电性在给定功率输入下最大化磁场强度,软回火实现紧密的线圈绕组,优异的尺寸一致性确保控制和自动化系统中可预测的电磁性能。'
      },
      {
        title: '接地与防雷',
        description: '接地电极和避雷导体系统。大直径硬拉线为户外安装提供机械强度,优异的导电性确保有效的故障电流消散,卓越的耐腐蚀性(特别是镀锡)保证恶劣环境中的长期可靠性。'
      },
      {
        title: '精密电子与仪器',
        description: '电子组件、测试设备和精密仪器中的互连线。小直径选项实现小型化,优异的可焊性促进可靠连接,一致的电气性能确保敏感电子应用中的测量精度和信号完整性。'
      }
    ]
  },

  faqs: {
    en: [
      {
        question: 'What is the difference between soft, semi-hard, and hard copper wire?',
        answer: 'The temper refers to the mechanical properties achieved through heat treatment: Soft (annealed) wire has high flexibility (>30% elongation) ideal for coil winding and applications requiring repeated bending, with tensile strength around 220-260 MPa. Semi-hard wire offers a balance between strength (280-320 MPa) and formability, suitable for spring applications and moderate bending requirements. Hard (hard-drawn) wire provides maximum tensile strength (>350 MPa) and stiffness for structural applications, grounding systems, and installations where mechanical rigidity is required. All tempers maintain similar electrical conductivity (100% IACS), so selection depends on mechanical requirements rather than electrical performance.'
      },
      {
        question: 'How does wire diameter affect current carrying capacity?',
        answer: 'Current carrying capacity (ampacity) increases with wire diameter following the relationship that ampacity is approximately proportional to the cross-sectional area. For example, 1.0mm diameter wire (0.785mm²) can carry about 6-8A continuously, while 2.0mm diameter wire (3.14mm²) can handle 20-25A, and 5.0mm diameter (19.6mm²) can carry 75-90A. However, actual ampacity depends on several factors: insulation type, installation method (free air vs conduit), ambient temperature, and allowable temperature rise. Continuous operation requires conservative ratings, while short-duty cycles allow higher currents. Our engineering team can provide specific ampacity recommendations based on your installation conditions and application requirements.'
      },
      {
        question: 'When should I choose tinned copper wire versus bare copper?',
        answer: 'Tinned copper wire has a thin tin coating that provides several advantages: (1) Superior corrosion resistance in humid or marine environments, extending service life 3-5 times compared to bare copper, (2) Easier soldering with better solder wetting and flow, especially important for production efficiency, (3) Prevention of galvanic corrosion when copper connects to other metals, (4) Improved conductivity at wire-to-terminal connections by preventing oxide formation. Choose tinned wire for: outdoor installations, marine applications, situations with high humidity, extended storage before use, or applications requiring frequent soldering. Bare copper is preferred when: cost is critical, immediate use in controlled environments, or when tin coating might interfere with specific joining methods like ultrasonic welding.'
      },
      {
        question: 'Can RAYTRON copper wire be used with enamel insulation coating?',
        answer: 'Yes, our copper round wire serves as the ideal substrate for enamel wire (magnet wire) manufacturing. We can supply bare copper wire specifically prepared for enamel coating with: (1) Ultra-smooth surface finish ensuring uniform enamel application, (2) Consistent dimensional tolerance (±0.01mm) critical for precise insulation thickness control, (3) Clean, oxide-free surface promoting excellent enamel adhesion, (4) Optimal temper (typically soft or semi-hard) suitable for coil winding after enameling. We work closely with enamel wire manufacturers and end-users to optimize wire specifications including diameter precision, surface preparation, and packaging configuration. For magnet wire applications in motors, transformers, and inductors, our wire provides the foundation for reliable insulation performance and long service life.'
      },
      {
        question: 'What quality certifications and test reports does RAYTRON provide?',
        answer: 'Every shipment includes a comprehensive Certificate of Conformance documenting: (1) Material composition analysis confirming copper purity ≥99.9%, (2) Electrical conductivity test results (IACS measurement), (3) Mechanical properties including tensile strength and elongation, (4) Dimensional verification with actual measurements, (5) Surface quality inspection results, (6) Compliance with specified standards (ASTM B3, IEC 60228, etc.). For critical applications, we can provide: third-party test reports from accredited laboratories, material traceability to copper cathode source, RoHS/REACH compliance certificates, and custom test protocols specific to your requirements. Our ISO 9001:2015 certification ensures consistent quality management, and our quality records provide full traceability for aerospace, automotive, and medical device applications.'
      }
    ],
    zh: [
      {
        question: '软、半硬和硬铜线之间有什么区别?',
        answer: '回火状态指通过热处理获得的机械性能:软(退火)线具有高柔性(>30%延伸率),非常适合线圈绕组和需要反复弯曲的应用,抗拉强度约为220-260 MPa。半硬线在强度(280-320 MPa)和成形性之间提供平衡,适用于弹簧应用和中等弯曲要求。硬(硬拉)线为结构应用、接地系统和需要机械刚性的安装提供最大抗拉强度(>350 MPa)和刚度。所有回火状态都保持类似的导电性(100% IACS),因此选择取决于机械要求而非电气性能。'
      },
      {
        question: '线径如何影响载流量?',
        answer: '载流量(ampacity)随线径增加遵循与横截面积大致成正比的关系。例如,1.0mm直径线(0.785mm²)可连续承载约6-8A,而2.0mm直径线(3.14mm²)可处理20-25A,5.0mm直径(19.6mm²)可承载75-90A。然而,实际载流量取决于几个因素:绝缘类型、安装方法(自由空气vs管道)、环境温度和允许的温升。连续运行需要保守的额定值,而短周期允许更高的电流。我们的工程团队可以根据您的安装条件和应用要求提供具体的载流量建议。'
      },
      {
        question: '何时应该选择镀锡铜线而不是裸铜线?',
        answer: '镀锡铜线具有薄锡涂层,提供几个优势:(1)在潮湿或海洋环境中的卓越耐腐蚀性,与裸铜相比延长使用寿命3-5倍,(2)更容易焊接,具有更好的焊料润湿和流动性,对生产效率特别重要,(3)当铜连接到其他金属时防止电化学腐蚀,(4)通过防止氧化物形成改善线对端子连接处的导电性。选择镀锡线用于:户外安装、海洋应用、高湿度情况、使用前的延长存储或需要频繁焊接的应用。裸铜线优先用于:成本至关重要、在受控环境中立即使用或锡涂层可能干扰特定连接方法(如超声波焊接)的情况。'
      },
      {
        question: '锐创铜线可以用于漆包绝缘涂层吗?',
        answer: '是的,我们的铜圆线是漆包线(磁线)制造的理想基材。我们可以提供专门为漆包涂层准备的裸铜线,具有:(1)超光滑表面光洁度确保均匀的漆包应用,(2)一致的尺寸公差(±0.01mm)对于精确的绝缘厚度控制至关重要,(3)清洁、无氧化物的表面促进优异的漆包附着力,(4)适合漆包后线圈绕组的最佳回火状态(通常为软或半硬)。我们与漆包线制造商和最终用户密切合作,优化线规格,包括直径精度、表面准备和包装配置。对于电机、变压器和电感器中的磁线应用,我们的线为可靠的绝缘性能和长使用寿命提供基础。'
      },
      {
        question: '锐创提供哪些质量认证和测试报告?',
        answer: '每次发货都包含全面的合格证书,记录:(1)材料成分分析确认铜纯度≥99.9%,(2)导电率测试结果(IACS测量),(3)机械性能包括抗拉强度和延伸率,(4)实际测量的尺寸验证,(5)表面质量检查结果,(6)与指定标准(ASTM B3、IEC 60228等)的符合性。对于关键应用,我们可以提供:来自认可实验室的第三方测试报告、到铜阴极来源的材料可追溯性、RoHS/REACH符合性证书以及特定于您要求的定制测试协议。我们的ISO 9001:2015认证确保一致的质量管理,我们的质量记录为航空航天、汽车和医疗器械应用提供完全可追溯性。'
      }
    ]
  },

  images: {
    hero: '/images/products/copper/copper-round-wire-hero.jpg',
    gallery: [
      '/images/products/copper/copper-round-wire-spool.jpg',
      '/images/products/copper/copper-round-wire-coils.jpg',
      '/images/products/copper/copper-round-wire-application.jpg',
      '/images/products/copper/copper-round-wire-quality-test.jpg'
    ]
  },

  tags: {
    en: ['Copper Wire', 'Bare Copper Wire', 'Tinned Copper Wire', 'Electrical Wire', 'Magnet Wire Substrate'],
    zh: ['铜线', '裸铜线', '镀锡铜线', '电气线', '磁线基材']
  },

  keywords: {
    en: ['copper round wire', 'bare copper wire', 'tinned copper wire', 'copper wire manufacturer', 'electrical copper wire', 'copper conductor wire', 'copper magnet wire', 'soft copper wire', 'hard drawn copper wire'],
    zh: ['铜圆线', '裸铜线', '镀锡铜线', '铜线生产厂家', '电气铜线', '铜导体线', '铜磁线', '软铜线', '硬拉铜线']
  },

  relatedProducts: ['copper-flat-wire', 'copper-ribbon-wire', 'enameled-copper-flat-wire', 'tinned-copper-strip'],

  certifications: ['ISO 9001:2015', 'RoHS', 'REACH', 'ASTM B3', 'IEC 60228', 'GB/T 3953'],

  meta: {
    en: {
      title: 'Copper Round Wire Manufacturer | High Conductivity Electrical Wire | RAYTRON',
      description: 'Premium copper round wire (0.5-10mm) for cables, transformers, motors. 100% IACS conductivity, multiple tempers available. ISO 9001 certified. Custom specifications.',
      keywords: 'copper round wire, copper wire manufacturer, bare copper wire, tinned copper wire, electrical copper wire, magnet wire substrate'
    },
    zh: {
      title: '铜圆线生产厂家 | 高导电性电气线 | 锐创新能源',
      description: '优质铜圆线(0.5-10mm),用于电缆、变压器、电机。100% IACS导电率,多种回火状态可选。ISO 9001认证。可定制规格。',
      keywords: '铜圆线, 铜线生产厂家, 裸铜线, 镀锡铜线, 电气铜线, 磁线基材'
    }
  },

  seoContent: {
    en: `RAYTRON's copper round wire represents the industry standard for electrical conductivity and mechanical reliability in a comprehensive range of applications. Manufactured from high-purity electrolytic copper through precision drawing processes, our wire delivers consistent 100% IACS conductivity combined with excellent dimensional accuracy and surface quality. From building wiring requiring flexible soft-annealed wire to transformer windings demanding precise dimensions for magnet wire coating, RAYTRON copper round wire provides proven performance across electrical, electronics, and industrial applications. Available in diameters from 0.5mm to 10mm with multiple temper options and surface finishes including bare bright, tinned, and silver plated, we deliver customized wire solutions backed by ISO 9001:2015 quality assurance and comprehensive technical support for applications worldwide.`,
    zh: `锐创铜圆线代表了广泛应用中电导率和机械可靠性的行业标准。通过精密拉丝工艺从高纯度电解铜制造,我们的线材提供一致的100% IACS导电率,结合优异的尺寸精度和表面质量。从需要柔性软退火线的建筑布线到要求磁线涂层精确尺寸的变压器绕组,锐创铜圆线在电气、电子和工业应用中提供经过验证的性能。直径从0.5mm到10mm,具有多种回火选项和表面处理(包括光亮裸铜、镀锡和镀银),我们提供定制的线材解决方案,并获得ISO 9001:2015质量保证和全球应用的全面技术支持。`
  }
}

// 将这3个产品添加到现有的copperProducts数组中
// export const copperProducts: Product[] = [
//   copperFlatWire,  // 已有
//   copperStrip,     // 已有
//   copperFoil,      // 新增
//   copperRibbonWire, // 新增
//   copperRoundWire  // 新增
// ]
