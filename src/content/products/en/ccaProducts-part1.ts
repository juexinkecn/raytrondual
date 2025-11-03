/**
 * 铜包铝系列产品数据 - 第一部分
 * CCA (Copper Clad Aluminum) Products - Part 1
 * 
 * 包含产品:
 * 1. CCA Round Wire (铜包铝线)
 * 2. CCA Flat Wire (铜包铝扁线)
 * 3. CCA Strip (铜包铝带)
 */

import { Product } from '@/types/product'

export const ccaProductsPart1: Product[] = [
  // ==================== 产品 #10: CCA Round Wire ====================
  {
    id: 'cca-round-wire',
    sku: 'RT-CCA-RW-010',
    name: {
      en: 'CCA Round Wire',
      zh: '铜包铝线'
    },
    slug: {
      en: 'cca-round-wire',
      zh: 'tongbaolv-xian'
    },
    category: 'copper-clad-aluminum',
    shortDescription: {
      en: 'High-performance copper clad aluminum round wire combining copper conductivity with aluminum lightness. Cost-effective solution for cables, CATV, and communication applications with 40% weight reduction.',
      zh: 'RAYTRON高性能铜包铝线,结合铜的导电性和铝的轻质特性。用于电缆、有线电视和通信领域的经济高效解决方案,重量减轻40%。'
    },
    description: {
      en: `RAYTRON CCA Round Wire represents a breakthrough in conductor technology, expertly combining the superior electrical conductivity of copper with the lightweight properties of aluminum. Our advanced cladding process creates a seamless metallurgical bond between the outer copper layer and aluminum core, resulting in a conductor that offers exceptional performance while reducing overall material costs by up to 50% compared to pure copper wire.

The copper clad aluminum construction provides an optimal balance of electrical and mechanical properties. The copper outer layer ensures excellent conductivity and solderability, while the aluminum core significantly reduces weight - making CCA wire approximately 40% lighter than equivalent copper conductors. This weight advantage translates to easier installation, reduced transportation costs, and lower structural support requirements in cable systems.

Our CCA round wire excels in high-frequency applications where skin effect is prominent. In these applications, electrical current tends to flow primarily through the outer conductor surface, making the copper cladding highly effective. This makes our CCA wire particularly suitable for CATV coaxial cables, RF transmission lines, and telecommunications infrastructure where signal integrity and cost efficiency are equally important.

Manufacturing precision is paramount in our production process. We utilize state-of-the-art continuous cladding technology that ensures uniform copper coverage with precise thickness control. This consistency guarantees reliable electrical performance throughout the entire wire length. Our quality control systems monitor copper layer thickness, conductivity, and mechanical properties at every stage, ensuring each product meets or exceeds international standards including ASTM B566 and IEC specifications.

RAYTRON's commitment to innovation extends to developing specialized CCA wire variants for specific applications. We offer various copper-to-aluminum volumetric ratios (typically ranging from 10% to 40%) to optimize performance for different use cases. Higher copper ratios provide enhanced conductivity and corrosion resistance, while lower ratios maximize weight and cost savings. Our engineering team works closely with clients to determine the ideal specification for their unique requirements.`,
      zh: `RAYTRON铜包铝线代表导体技术的突破,巧妙结合铜的卓越导电性和铝的轻质特性。我们先进的包覆工艺在外层铜和铝芯之间创建无缝冶金结合,形成性能卓越的导体,与纯铜线相比,总体材料成本降低达50%。

铜包铝结构提供了电气和机械性能的最佳平衡。铜外层确保优异的导电性和可焊性,而铝芯显著减轻重量 - 使铜包铝线比等效铜导体轻约40%。这种重量优势转化为更容易的安装、降低的运输成本以及电缆系统中更低的结构支撑要求。

我们的铜包铝圆线在高频应用中表现出色,其中趋肤效应显著。在这些应用中,电流主要通过导体外表面流动,使铜包层高度有效。这使我们的铜包铝线特别适用于有线电视同轴电缆、射频传输线和电信基础设施,其中信号完整性和成本效益同样重要。

制造精度在我们的生产过程中至关重要。我们采用最先进的连续包覆技术,确保均匀的铜层覆盖和精确的厚度控制。这种一致性保证整个线材长度上的可靠电气性能。我们的质量控制系统在每个阶段监控铜层厚度、导电性和机械性能,确保每个产品符合或超过包括ASTM B566和IEC规范在内的国际标准。

RAYTRON致力于创新,开发针对特定应用的专用铜包铝线变体。我们提供各种铜铝体积比(通常从10%到40%不等),以优化不同用例的性能。较高的铜比提供增强的导电性和耐腐蚀性,而较低的比率最大化重量和成本节省。我们的工程团队与客户紧密合作,确定其独特要求的理想规格。`
    },
    detailedDescription: {
      en: `The manufacturing of RAYTRON CCA Round Wire involves sophisticated metallurgical processes that ensure superior product quality and performance consistency. Our production begins with high-purity aluminum rod (99.7% minimum purity) and oxygen-free copper of the highest grade. The continuous cladding process employs precise temperature and pressure controls to achieve perfect metallurgical bonding at the copper-aluminum interface.

Our advanced production facilities incorporate real-time monitoring systems that track critical parameters including cladding temperature, drawing speed, and copper thickness. Multi-stage annealing processes are carefully controlled to optimize the wire's mechanical properties while maintaining excellent electrical characteristics. The result is a conductor with uniform properties, exceptional flexibility, and long-term reliability.

Quality assurance at RAYTRON goes beyond standard testing protocols. We perform comprehensive electrical testing including DC resistance measurements, high-frequency performance evaluation, and insulation resistance testing. Mechanical tests verify tensile strength, elongation, and bending performance. Metallurgical analysis using advanced microscopy confirms the integrity of the copper-aluminum bond and uniformity of the copper layer thickness.

The versatility of CCA round wire makes it ideal for numerous applications. In CATV and broadband networks, it provides excellent signal transmission while reducing cable weight and installation costs. Communication cables benefit from the optimal balance of performance and economy. Power transmission applications where weight is critical, such as overhead lines and aerial bundled cables, leverage the significant weight advantages. The automotive industry utilizes CCA wire in wiring harnesses where weight reduction directly impacts fuel efficiency.`,
      zh: `RAYTRON铜包铝圆线的制造涉及复杂的冶金工艺,确保卓越的产品质量和性能一致性。我们的生产从高纯度铝杆(最低99.7%纯度)和最高等级的无氧铜开始。连续包覆工艺采用精确的温度和压力控制,在铜铝界面实现完美的冶金结合。

我们先进的生产设施配备实时监控系统,跟踪包括包覆温度、拉拔速度和铜厚度在内的关键参数。多阶段退火过程经过仔细控制,以优化线材的机械性能,同时保持优异的电气特性。结果是具有均匀性能、卓越柔韧性和长期可靠性的导体。

RAYTRON的质量保证超越标准测试协议。我们进行全面的电气测试,包括直流电阻测量、高频性能评估和绝缘电阻测试。机械测试验证抗拉强度、延伸率和弯曲性能。使用先进显微镜的冶金分析确认铜铝结合的完整性和铜层厚度的均匀性。

铜包铝圆线的多功能性使其成为众多应用的理想选择。在有线电视和宽带网络中,它提供出色的信号传输,同时减少电缆重量和安装成本。通信电缆受益于性能和经济性的最佳平衡。重量关键的电力传输应用,如架空线路和架空捆束电缆,利用显著的重量优势。汽车行业在线束中使用铜包铝线,重量减轻直接影响燃油效率。`
    },
    specifications: {
      en: [
        { label: 'Wire Diameter', value: '0.10mm - 5.00mm' },
        { label: 'Copper Layer Thickness', value: '0.025mm - 0.50mm' },
        { label: 'Copper Volume Ratio', value: '10% - 40%' },
        { label: 'Aluminum Core Purity', value: '≥99.7%' },
        { label: 'Copper Layer Purity', value: '≥99.95% (OFHC)' },
        { label: 'Conductivity', value: '55-65% IACS' },
        { label: 'Tensile Strength', value: '120-200 MPa' },
        { label: 'Elongation', value: '≥15%' },
        { label: 'DC Resistance', value: 'Per ASTM B566' },
        { label: 'Operating Temperature', value: '-55°C to +200°C' },
        { label: 'Weight vs Copper', value: '-40% lighter' },
        { label: 'Spool Size', value: '50kg - 500kg' },
        { label: 'Standard Compliance', value: 'ASTM B566, IEC 60228' },
        { label: 'Surface Quality', value: 'Bright, uniform copper finish' }
      ],
      zh: [
        { label: '线径范围', value: '0.10mm - 5.00mm' },
        { label: '铜层厚度', value: '0.025mm - 0.50mm' },
        { label: '铜体积比', value: '10% - 40%' },
        { label: '铝芯纯度', value: '≥99.7%' },
        { label: '铜层纯度', value: '≥99.95% (无氧铜)' },
        { label: '导电率', value: '55-65% IACS' },
        { label: '抗拉强度', value: '120-200 MPa' },
        { label: '延伸率', value: '≥15%' },
        { label: '直流电阻', value: '符合ASTM B566' },
        { label: '工作温度', value: '-55°C至+200°C' },
        { label: '相对铜线重量', value: '减轻40%' },
        { label: '线盘规格', value: '50kg - 500kg' },
        { label: '标准认证', value: 'ASTM B566, IEC 60228' },
        { label: '表面质量', value: '光亮均匀铜面' }
      ]
    },
    features: {
      en: [
        'Cost savings up to 50% vs pure copper',
        'Weight reduction of approximately 40%',
        'Excellent high-frequency performance',
        'Superior copper-aluminum metallurgical bond',
        'Uniform copper layer thickness',
        'High tensile strength and flexibility',
        'Good solderability and weldability',
        'Corrosion-resistant copper surface'
      ],
      zh: [
        '相比纯铜节省成本达50%',
        '重量减轻约40%',
        '优异的高频性能',
        '卓越的铜铝冶金结合',
        '均匀的铜层厚度',
        '高抗拉强度和柔韧性',
        '良好的可焊性和可焊接性',
        '抗腐蚀铜表面'
      ]
    },
    advantages: {
      en: [
        'Optimal balance of performance and cost',
        'Lighter cables reduce installation effort',
        'Lower transportation and logistics costs',
        'Reduced structural support requirements',
        'Ideal for high-frequency applications',
        'Environmentally friendly resource utilization',
        'Proven reliability in demanding environments',
        'Customizable copper-to-aluminum ratios',
        'Consistent quality with tight tolerances',
        'Excellent signal transmission characteristics'
      ],
      zh: [
        '性能和成本的最佳平衡',
        '更轻的电缆减少安装工作量',
        '降低运输和物流成本',
        '减少结构支撑要求',
        '高频应用的理想选择',
        '环保的资源利用',
        '在苛刻环境中的可靠性验证',
        '可定制的铜铝比例',
        '严格公差的一致质量',
        '优异的信号传输特性'
      ]
    },
    applications: [
      {
        title: { en: 'CATV & Broadband', zh: '有线电视和宽带' },
        description: {
          en: 'Coaxial cables for cable television and high-speed internet, inner and outer conductors',
          zh: '有线电视和高速互联网的同轴电缆,内外导体'
        }
      },
      {
        title: { en: 'Telecommunications', zh: '电信通信' },
        description: {
          en: 'Communication cables, RF transmission lines, antenna feeders',
          zh: '通信电缆、射频传输线、天线馈线'
        }
      },
      {
        title: { en: 'Power Transmission', zh: '电力传输' },
        description: {
          en: 'Overhead power lines, aerial bundled cables, distribution networks',
          zh: '架空电力线、架空捆束电缆、配电网络'
        }
      },
      {
        title: { en: 'Automotive Wiring', zh: '汽车线束' },
        description: {
          en: 'Vehicle wiring harnesses, connection systems, signal cables',
          zh: '车辆线束、连接系统、信号电缆'
        }
      },
      {
        title: { en: 'Audio & Video', zh: '音视频' },
        description: {
          en: 'Speaker cables, audio/video interconnects, studio equipment',
          zh: '扬声器电缆、音视频互连、演播室设备'
        }
      }
    ],
    faqs: [
      {
        question: {
          en: 'How does CCA wire compare to pure copper in electrical performance?',
          zh: '铜包铝线在电气性能上与纯铜相比如何?'
        },
        answer: {
          en: 'CCA wire with 15% copper volume ratio provides conductivity of 60-65% IACS, which is sufficient for many applications, especially high-frequency ones where skin effect means current flows primarily through the copper outer layer. For RF and CATV applications, CCA performs nearly identically to pure copper while offering significant cost and weight savings.',
          zh: '铜体积比为15%的铜包铝线提供60-65% IACS的导电率,这对许多应用来说是足够的,特别是高频应用,其中趋肤效应意味着电流主要通过铜外层流动。对于射频和有线电视应用,铜包铝的性能几乎与纯铜相同,同时提供显著的成本和重量节省。'
        }
      },
      {
        question: {
          en: 'What are the cost savings when using CCA instead of copper?',
          zh: '使用铜包铝代替铜可以节省多少成本?'
        },
        answer: {
          en: 'CCA wire typically costs 30-50% less than equivalent pure copper conductors, depending on copper-to-aluminum ratio and current metal prices. Additionally, the 40% weight reduction translates to lower shipping costs, easier handling, and reduced installation labor, creating additional indirect savings.',
          zh: '铜包铝线的成本通常比等效的纯铜导体低30-50%,具体取决于铜铝比例和当前金属价格。此外,40%的重量减轻转化为更低的运输成本、更容易的处理和减少的安装人工,创造额外的间接节省。'
        }
      },
      {
        question: {
          en: 'Is CCA wire suitable for power transmission applications?',
          zh: '铜包铝线适合电力传输应用吗?'
        },
        answer: {
          en: 'Yes, CCA wire is excellent for many power transmission applications, particularly overhead lines and distribution networks where weight is a critical factor. The aluminum core provides mechanical strength while the copper cladding ensures good conductivity and corrosion resistance. However, for high-current DC applications, pure copper may still be preferred.',
          zh: '是的,铜包铝线非常适合许多电力传输应用,特别是架空线路和配电网络,其中重量是关键因素。铝芯提供机械强度,而铜包层确保良好的导电性和耐腐蚀性。但是,对于大电流直流应用,纯铜可能仍然是首选。'
        }
      },
      {
        question: {
          en: 'How do I select the right copper-to-aluminum ratio?',
          zh: '如何选择正确的铜铝比例?'
        },
        answer: {
          en: 'The copper ratio depends on your application requirements. Higher ratios (30-40% copper) provide better conductivity and corrosion resistance for demanding applications. Lower ratios (10-15%) maximize cost savings for high-frequency applications where skin effect is dominant. Our engineering team can help determine the optimal specification for your specific needs.',
          zh: '铜比例取决于您的应用要求。较高的比例(30-40%铜)为要求苛刻的应用提供更好的导电性和耐腐蚀性。较低的比例(10-15%)为趋肤效应占主导地位的高频应用最大化成本节省。我们的工程团队可以帮助确定您特定需求的最佳规格。'
        }
      },
      {
        question: {
          en: 'Can CCA wire be soldered and welded like pure copper?',
          zh: '铜包铝线可以像纯铜一样焊接和焊接吗?'
        },
        answer: {
          en: 'Yes, the copper outer layer of CCA wire can be soldered using standard techniques and materials used for copper wire. The copper cladding provides excellent solderability. For welding applications, ultrasonic and resistance welding methods work well. Special attention should be paid to avoid overheating which could affect the copper-aluminum bond.',
          zh: '是的,铜包铝线的铜外层可以使用用于铜线的标准技术和材料进行焊接。铜包层提供优异的可焊性。对于焊接应用,超声波和电阻焊接方法效果很好。应特别注意避免过热,这可能影响铜铝结合。'
        }
      },
      {
        question: {
          en: 'What quality certifications does RAYTRON CCA wire have?',
          zh: 'RAYTRON铜包铝线有哪些质量认证?'
        },
        answer: {
          en: 'Our CCA round wire is manufactured in compliance with international standards including ASTM B566 (Standard Specification for Copper-Clad Aluminum Wire) and relevant IEC specifications. We provide complete material certifications, test reports, and can support customer-specific quality requirements. All products undergo rigorous testing including electrical, mechanical, and metallurgical analysis.',
          zh: '我们的铜包铝圆线按照国际标准制造,包括ASTM B566(铜包铝线标准规范)和相关IEC规范。我们提供完整的材料认证、测试报告,并可以支持客户特定的质量要求。所有产品都经过严格的测试,包括电气、机械和冶金分析。'
        }
      }
    ],
    seoKeywords: {
      en: [
        'CCA round wire',
        'copper clad aluminum wire',
        'CCA wire manufacturer',
        'lightweight conductor',
        'cost-effective cable wire',
        'CATV coaxial wire',
        'RF transmission wire',
        'aluminum copper wire',
        'CCA wire supplier',
        'telecommunication wire'
      ],
      zh: [
        '铜包铝线',
        '铜包铝圆线',
        'CCA线材',
        '轻质导体',
        '经济型电缆线',
        '有线电视线',
        '射频传输线',
        '铝铜复合线',
        '铜包铝供应商',
        '通信线材'
      ]
    },
    metaDescription: {
      en: 'RAYTRON CCA Round Wire: High-performance copper clad aluminum conductor offering 50% cost savings and 40% weight reduction. Ideal for CATV, telecommunications, and power transmission. ASTM B566 certified.',
      zh: 'RAYTRON铜包铝圆线:高性能铜包铝导体,节省成本50%,减轻重量40%。适用于有线电视、通信和电力传输。ASTM B566认证。'
    },
    images: [
      '/images/products/cca-round-wire-1.jpg',
      '/images/products/cca-round-wire-2.jpg',
      '/images/products/cca-round-wire-detail.jpg',
      '/images/products/cca-round-wire-application.jpg'
    ],
    relatedProducts: ['cca-flat-wire', 'cca-strip', 'copper-round-wire', 'aluminum-strip'],
    featured: true,
    tags: {
      en: ['CCA', 'Cost-Effective', 'Lightweight', 'CATV', 'Telecommunications', 'ASTM B566'],
      zh: ['铜包铝', '经济型', '轻质', '有线电视', '电信', 'ASTM B566']
    }
  },

  // ==================== 产品 #11: CCA Flat Wire ====================
  {
    id: 'cca-flat-wire',
    sku: 'RT-CCA-FW-011',
    name: {
      en: 'CCA Flat Wire',
      zh: '铜包铝扁线'
    },
    slug: {
      en: 'cca-flat-wire',
      zh: 'tongbaolv-bianxian'
    },
    category: 'copper-clad-aluminum',
    shortDescription: {
      en: 'Precision copper clad aluminum flat wire for transformer windings, motors, and compact coil applications. Combines copper conductivity with aluminum lightness in space-efficient rectangular profile.',
      zh: 'RAYTRON精密铜包铝扁线,用于变压器绕组、电机和紧凑线圈应用。在节省空间的矩形截面中结合铜的导电性和铝的轻质特性。'
    },
    description: {
      en: `RAYTRON CCA Flat Wire represents an innovative solution for applications requiring space-efficient conductors without compromising electrical performance. Our copper clad aluminum flat wire combines the rectangular profile advantages of flat wire with the cost and weight benefits of CCA technology, creating an ideal conductor for transformer windings, motor coils, and various electrical equipment applications.

The rectangular cross-section of flat wire offers significant advantages in space utilization compared to round wire. In transformer and motor windings, flat wire enables higher copper fill factors, resulting in more compact and efficient designs. The flat profile also provides better heat dissipation due to increased surface area, allowing for improved thermal management in high-power applications. When combined with CCA technology, these benefits are enhanced by substantial weight reduction - typically 40% lighter than pure copper flat wire.

Our manufacturing process ensures exceptional dimensional accuracy and consistency. Advanced rolling and cladding technologies create flat wire with precise thickness and width tolerances, uniform copper coverage, and excellent surface finish. The copper layer thickness is carefully controlled to provide optimal conductivity while the aluminum core maintains structural integrity and reduces weight. This precise control is essential for applications where conductor dimensions directly impact performance, such as in high-voltage transformers and precision motors.

The electrical characteristics of RAYTRON CCA flat wire are optimized for AC and high-frequency applications. The flat geometry and copper cladding work synergistically to maximize current carrying capacity while minimizing losses. In transformer applications, the reduced eddy current losses compared to round wire contribute to improved efficiency. The uniform copper layer ensures consistent impedance along the conductor length, critical for maintaining signal quality in communication applications.`,
      zh: `RAYTRON铜包铝扁线代表了需要节省空间的导体而不影响电气性能的应用的创新解决方案。我们的铜包铝扁线将扁线的矩形截面优势与铜包铝技术的成本和重量优势相结合,为变压器绕组、电机线圈和各种电气设备应用创建理想的导体。

与圆线相比,扁线的矩形截面在空间利用方面具有显著优势。在变压器和电机绕组中,扁线实现更高的铜填充因子,产生更紧凑和高效的设计。扁平外形还由于增加的表面积提供更好的散热,允许在大功率应用中改进热管理。当与铜包铝技术结合时,这些优点通过显著的重量减轻得到增强 - 通常比纯铜扁线轻40%。

我们的制造工艺确保卓越的尺寸精度和一致性。先进的轧制和包覆技术创建具有精确厚度和宽度公差、均匀铜覆盖和优异表面光洁度的扁线。铜层厚度经过仔细控制,以提供最佳导电性,而铝芯保持结构完整性并减轻重量。这种精确控制对于导体尺寸直接影响性能的应用至关重要,例如高压变压器和精密电机。

RAYTRON铜包铝扁线的电气特性针对交流和高频应用进行了优化。扁平几何形状和铜包层协同工作,最大化载流能力同时最小化损耗。在变压器应用中,与圆线相比减少的涡流损耗有助于提高效率。均匀的铜层确保沿导体长度的一致阻抗,这对于在通信应用中保持信号质量至关重要。`
    },
    detailedDescription: {
      en: `Quality control in the production of CCA flat wire is exceptionally rigorous at RAYTRON. Our multi-stage testing protocols verify dimensional accuracy, copper layer uniformity, electrical properties, and mechanical characteristics. Advanced measurement systems continuously monitor wire dimensions with micrometer precision. Metallurgical analysis ensures the copper-aluminum bond integrity, while electrical testing confirms conductivity and resistance values meet specifications.

The versatility of CCA flat wire makes it suitable for diverse applications. In power transformers, it enables compact designs with excellent efficiency. Distribution transformers benefit from the weight reduction, making installation easier and reducing structural requirements. Motor manufacturers utilize CCA flat wire in stator and rotor windings to reduce overall motor weight while maintaining performance. The automotive industry increasingly adopts CCA flat wire in electric vehicle motors and charging systems where weight savings directly translate to extended range.

RAYTRON provides comprehensive technical support to help customers optimize their designs for CCA flat wire applications. Our engineering team offers guidance on winding techniques, insulation requirements, and thermal management strategies. We can customize wire dimensions and copper ratios to match specific application requirements, ensuring optimal performance and cost-effectiveness. This collaborative approach has made RAYTRON a trusted partner for OEMs and manufacturers worldwide.`,
      zh: `在RAYTRON,铜包铝扁线生产中的质量控制异常严格。我们的多阶段测试协议验证尺寸精度、铜层均匀性、电气性能和机械特性。先进的测量系统以微米精度连续监控线材尺寸。冶金分析确保铜铝结合完整性,而电气测试确认导电性和电阻值符合规范。

铜包铝扁线的多功能性使其适用于各种应用。在电力变压器中,它实现紧凑的设计和优异的效率。配电变压器受益于重量减轻,使安装更容易并减少结构要求。电机制造商在定子和转子绕组中使用铜包铝扁线,以减少整体电机重量同时保持性能。汽车行业越来越多地在电动汽车电机和充电系统中采用铜包铝扁线,其中重量节省直接转化为延长的续航里程。

RAYTRON提供全面的技术支持,帮助客户优化他们的铜包铝扁线应用设计。我们的工程团队提供绕组技术、绝缘要求和热管理策略的指导。我们可以定制线材尺寸和铜比例以匹配特定应用要求,确保最佳性能和成本效益。这种协作方法使RAYTRON成为全球OEM和制造商的可信赖合作伙伴。`
    },
    specifications: {
      en: [
        { label: 'Thickness', value: '0.20mm - 3.00mm' },
        { label: 'Width', value: '2.00mm - 30.00mm' },
        { label: 'Copper Layer Thickness', value: '0.030mm - 0.60mm (each side)' },
        { label: 'Copper Volume Ratio', value: '15% - 35%' },
        { label: 'Aluminum Core Purity', value: '≥99.7%' },
        { label: 'Copper Layer Purity', value: '≥99.95% OFHC' },
        { label: 'Conductivity', value: '58-65% IACS' },
        { label: 'Tensile Strength', value: '130-210 MPa' },
        { label: 'Elongation', value: '≥12%' },
        { label: 'Thickness Tolerance', value: '±0.015mm' },
        { label: 'Width Tolerance', value: '±0.10mm' },
        { label: 'Operating Temperature', value: '-55°C to +200°C' },
        { label: 'Standard Compliance', value: 'ASTM B566, IEC 60317' },
        { label: 'Surface Finish', value: 'Bright, smooth copper surface' }
      ],
      zh: [
        { label: '厚度范围', value: '0.20mm - 3.00mm' },
        { label: '宽度范围', value: '2.00mm - 30.00mm' },
        { label: '铜层厚度', value: '0.030mm - 0.60mm (每侧)' },
        { label: '铜体积比', value: '15% - 35%' },
        { label: '铝芯纯度', value: '≥99.7%' },
        { label: '铜层纯度', value: '≥99.95% 无氧铜' },
        { label: '导电率', value: '58-65% IACS' },
        { label: '抗拉强度', value: '130-210 MPa' },
        { label: '延伸率', value: '≥12%' },
        { label: '厚度公差', value: '±0.015mm' },
        { label: '宽度公差', value: '±0.10mm' },
        { label: '工作温度', value: '-55°C至+200°C' },
        { label: '标准认证', value: 'ASTM B566, IEC 60317' },
        { label: '表面光洁度', value: '光亮平滑铜表面' }
      ]
    },
    features: {
      en: [
        'Space-efficient rectangular profile',
        'Higher winding fill factor',
        'Better heat dissipation characteristics',
        'Precise dimensional tolerances',
        'Uniform copper layer on all surfaces',
        '40% weight reduction vs copper',
        'Cost savings up to 50%',
        'Excellent mechanical flexibility'
      ],
      zh: [
        '节省空间的矩形截面',
        '更高的绕组填充因子',
        '更好的散热特性',
        '精确的尺寸公差',
        '所有表面均匀铜层',
        '相对铜减轻40%重量',
        '节省成本达50%',
        '优异的机械柔韧性'
      ]
    },
    advantages: {
      en: [
        'Compact transformer and motor designs',
        'Improved thermal management',
        'Reduced material and shipping costs',
        'Lower structural support requirements',
        'Enhanced manufacturing efficiency',
        'Customizable dimensions and copper ratios',
        'Consistent electrical properties',
        'Environmentally responsible material choice',
        'Proven performance in demanding applications',
        'Comprehensive technical support available'
      ],
      zh: [
        '紧凑的变压器和电机设计',
        '改进的热管理',
        '降低的材料和运输成本',
        '更低的结构支撑要求',
        '增强的制造效率',
        '可定制的尺寸和铜比例',
        '一致的电气性能',
        '环保的材料选择',
        '在苛刻应用中的验证性能',
        '提供全面的技术支持'
      ]
    },
    applications: [
      {
        title: { en: 'Power Transformers', zh: '电力变压器' },
        description: {
          en: 'Primary and secondary windings, high-voltage applications, distribution transformers',
          zh: '初级和次级绕组、高压应用、配电变压器'
        }
      },
      {
        title: { en: 'Electric Motors', zh: '电动机' },
        description: {
          en: 'Stator windings, rotor conductors, servo motors, EV traction motors',
          zh: '定子绕组、转子导体、伺服电机、电动汽车牵引电机'
        }
      },
      {
        title: { en: 'Inductors & Coils', zh: '电感器和线圈' },
        description: {
          en: 'Filter inductors, choke coils, power supply components',
          zh: '滤波电感器、扼流圈、电源组件'
        }
      },
      {
        title: { en: 'Automotive Electronics', zh: '汽车电子' },
        description: {
          en: 'EV motor windings, charging systems, power converters',
          zh: '电动汽车电机绕组、充电系统、功率转换器'
        }
      },
      {
        title: { en: 'Renewable Energy', zh: '可再生能源' },
        description: {
          en: 'Wind turbine generators, solar inverters, energy storage systems',
          zh: '风力涡轮发电机、太阳能逆变器、储能系统'
        }
      }
    ],
    faqs: [
      {
        question: {
          en: 'What are the advantages of flat wire over round wire in transformers?',
          zh: '扁线在变压器中相对圆线有什么优势?'
        },
        answer: {
          en: 'Flat wire offers several key advantages: higher winding fill factor (up to 90% vs 78% for round wire), better heat dissipation due to larger surface area, reduced eddy current losses, and more compact designs. When combined with CCA technology, these benefits are enhanced by significant weight and cost reductions.',
          zh: '扁线提供几个关键优势:更高的绕组填充因子(高达90% vs 圆线的78%)、由于更大的表面积提供更好的散热、减少的涡流损耗和更紧凑的设计。当与铜包铝技术结合时,这些优点通过显著的重量和成本降低得到增强。'
        }
      },
      {
        question: {
          en: 'How do I determine the right dimensions for my application?',
          zh: '如何为我的应用确定正确的尺寸?'
        },
        answer: {
          en: 'Wire dimensions depend on several factors including current carrying requirements, winding space constraints, and thermal considerations. Our engineering team can help you calculate the optimal wire dimensions based on your transformer or motor specifications. We typically recommend starting with standard dimensions and adjusting based on performance requirements.',
          zh: '线材尺寸取决于几个因素,包括载流要求、绕组空间约束和热考虑。我们的工程团队可以根据您的变压器或电机规格帮助您计算最佳线材尺寸。我们通常建议从标准尺寸开始,然后根据性能要求进行调整。'
        }
      },
      {
        question: {
          en: 'Can CCA flat wire be used in high-temperature applications?',
          zh: '铜包铝扁线可以用于高温应用吗?'
        },
        answer: {
          en: 'Yes, RAYTRON CCA flat wire is rated for continuous operation up to 200°C, making it suitable for most transformer and motor applications. The copper-aluminum bond remains stable at these temperatures. For applications with higher thermal requirements, we can provide custom solutions with enhanced thermal ratings.',
          zh: '是的,RAYTRON铜包铝扁线额定连续运行温度高达200°C,使其适用于大多数变压器和电机应用。铜铝结合在这些温度下保持稳定。对于具有更高热要求的应用,我们可以提供具有增强热额定值的定制解决方案。'
        }
      },
      {
        question: {
          en: 'What insulation types are compatible with CCA flat wire?',
          zh: '哪些绝缘类型与铜包铝扁线兼容?'
        },
        answer: {
          en: 'CCA flat wire is compatible with all standard wire insulation types including polyester, polyimide, polyamide-imide, and their combinations. The insulation can be applied directly to the wire or the wire can be supplied bare for customer application. We can also provide insulated wire to your specifications.',
          zh: '铜包铝扁线与所有标准线材绝缘类型兼容,包括聚酯、聚酰亚胺、聚酰胺酰亚胺及其组合。绝缘可以直接应用于线材,或者线材可以裸供以便客户应用。我们还可以根据您的规格提供绝缘线材。'
        }
      },
      {
        question: {
          en: 'How does dimensional accuracy affect transformer performance?',
          zh: '尺寸精度如何影响变压器性能?'
        },
        answer: {
          en: 'Dimensional accuracy is critical for consistent transformer performance. Variations in wire thickness or width can lead to uneven turns spacing, affecting inductance and impedance. RAYTRON maintains tight tolerances (±0.015mm thickness) to ensure uniform winding characteristics and predictable electrical performance across production runs.',
          zh: '尺寸精度对于一致的变压器性能至关重要。线材厚度或宽度的变化可能导致不均匀的匝间距,影响电感和阻抗。RAYTRON保持严格的公差(±0.015mm厚度)以确保均匀的绕组特性和生产批次间可预测的电气性能。'
        }
      },
      {
        question: {
          en: 'What testing do you perform on CCA flat wire?',
          zh: '你们对铜包铝扁线进行哪些测试?'
        },
        answer: {
          en: 'We perform comprehensive testing including: dimensional measurements (thickness, width), electrical testing (conductivity, DC resistance), mechanical testing (tensile strength, elongation, bend test), metallurgical analysis (copper layer uniformity, bond integrity), and surface quality inspection. Complete test reports are provided with each order.',
          zh: '我们进行全面的测试,包括:尺寸测量(厚度、宽度)、电气测试(导电性、直流电阻)、机械测试(抗拉强度、延伸率、弯曲测试)、冶金分析(铜层均匀性、结合完整性)和表面质量检查。每个订单都提供完整的测试报告。'
        }
      }
    ],
    seoKeywords: {
      en: [
        'CCA flat wire',
        'copper clad aluminum flat wire',
        'transformer winding wire',
        'motor coil wire',
        'rectangular conductor',
        'CCA flat conductor',
        'lightweight transformer wire',
        'cost-effective winding wire',
        'CCA flat wire supplier',
        'aluminum copper flat wire'
      ],
      zh: [
        '铜包铝扁线',
        '铜包铝矩形线',
        '变压器绕组线',
        '电机线圈线',
        '矩形导体',
        'CCA扁导体',
        '轻质变压器线',
        '经济型绕组线',
        '铜包铝扁线供应商',
        '铝铜扁线'
      ]
    },
    metaDescription: {
      en: 'RAYTRON CCA Flat Wire: Precision copper clad aluminum conductor for transformers and motors. Space-efficient design, 40% lighter, 50% cost savings. Tight tolerances, ASTM B566 certified.',
      zh: 'RAYTRON铜包铝扁线:用于变压器和电机的精密铜包铝导体。节省空间设计,减轻40%重量,节省50%成本。严格公差,ASTM B566认证。'
    },
    images: [
      '/images/products/cca-flat-wire-1.jpg',
      '/images/products/cca-flat-wire-2.jpg',
      '/images/products/cca-flat-wire-transformer.jpg',
      '/images/products/cca-flat-wire-detail.jpg'
    ],
    relatedProducts: ['copper-flat-wire', 'cca-round-wire', 'cca-strip', 'aluminum-flat-wire'],
    featured: true,
    tags: {
      en: ['CCA', 'Flat Wire', 'Transformer', 'Motor', 'Cost-Effective', 'ASTM B566'],
      zh: ['铜包铝', '扁线', '变压器', '电机', '经济型', 'ASTM B566']
    }
  },

  // ==================== 产品 #12: CCA Strip ====================
  {
    id: 'cca-strip',
    sku: 'RT-CCA-ST-012',
    name: {
      en: 'CCA Strip',
      zh: '铜包铝带'
    },
    slug: {
      en: 'cca-strip',
      zh: 'tongbaolv-dai'
    },
    category: 'copper-clad-aluminum',
    shortDescription: {
      en: 'Wide copper clad aluminum strip for bus bars, cable shielding, and flexible circuits. Combines excellent conductivity with lightweight aluminum core for cost-effective power distribution solutions.',
      zh: 'RAYTRON宽幅铜包铝带,用于母线、电缆屏蔽和柔性电路。将优异导电性与轻质铝芯相结合,实现经济高效的配电解决方案。'
    },
    description: {
      en: `RAYTRON CCA Strip represents the evolution of conductor technology for wide-format applications, combining the proven benefits of copper clad aluminum technology with the versatility of strip conductors. Our CCA strip delivers exceptional electrical and mechanical performance in bus bar systems, cable shielding, flexible circuits, and numerous other applications where wide conductors are essential.

The wide strip format offers unique advantages in current distribution and heat dissipation. With widths ranging from 10mm to 100mm and precise thickness control, CCA strip provides high current carrying capacity while maintaining excellent thermal management characteristics. The large surface area facilitates efficient heat dissipation, critical in high-power applications such as power distribution bus bars and industrial electrical systems. The copper cladding ensures uniform current distribution across the width, minimizing hot spots and improving overall system reliability.

Manufacturing CCA strip requires advanced metallurgical expertise and precision equipment. RAYTRON employs sophisticated rolling and cladding processes that create uniform copper coverage across the entire width of the strip. Our production facilities utilize continuous process monitoring and control systems to maintain consistent thickness, width, and copper layer uniformity. This precision is essential for applications where conductor dimensions directly impact performance, such as in high-voltage switchgear and power distribution systems.

The cost-effectiveness of CCA strip makes it an attractive alternative to pure copper for many applications. With material cost savings of 40-50% and weight reduction of approximately 40%, CCA strip significantly reduces both initial investment and installation costs. The lighter weight simplifies handling and installation, particularly important in large bus bar systems where conductor weight can impact structural requirements and labor costs. These economic advantages do not come at the expense of performance - our CCA strip maintains excellent electrical characteristics suitable for demanding applications.`,
      zh: `RAYTRON铜包铝带代表了宽幅应用导体技术的进化,将铜包铝技术的验证优势与带材导体的多功能性相结合。我们的铜包铝带在母线系统、电缆屏蔽、柔性电路和许多其他需要宽导体的应用中提供卓越的电气和机械性能。

宽带格式在电流分布和散热方面提供独特的优势。宽度范围从10mm到100mm,精确的厚度控制,铜包铝带提供高载流能力,同时保持优异的热管理特性。大表面积促进有效的散热,这在配电母线和工业电气系统等大功率应用中至关重要。铜包层确保电流在宽度上均匀分布,最小化热点并提高整体系统可靠性。

制造铜包铝带需要先进的冶金专业知识和精密设备。RAYTRON采用复杂的轧制和包覆工艺,在带材的整个宽度上创建均匀的铜覆盖。我们的生产设施利用连续工艺监控和控制系统来保持一致的厚度、宽度和铜层均匀性。这种精度对于导体尺寸直接影响性能的应用至关重要,例如高压开关设备和配电系统。

铜包铝带的成本效益使其成为许多应用中纯铜的有吸引力的替代品。材料成本节省40-50%,重量减轻约40%,铜包铝带显著降低初始投资和安装成本。更轻的重量简化处理和安装,在大型母线系统中特别重要,其中导体重量可能影响结构要求和人工成本。这些经济优势不以性能为代价 - 我们的铜包铝带保持适用于苛刻应用的优异电气特性。`
    },
    detailedDescription: {
      en: `The electrical performance of RAYTRON CCA strip is optimized for high-current applications. The copper outer layer provides excellent conductivity while the aluminum core serves as an effective current path, particularly for AC and high-frequency currents where skin effect concentrates current flow near the conductor surface. This makes CCA strip especially suitable for power distribution applications, switchgear bus bars, and flexible power distribution systems where both performance and economy are important considerations.

Quality assurance in CCA strip production involves comprehensive testing at multiple stages. Dimensional measurements verify thickness and width conformity to tight tolerances. Electrical testing includes conductivity measurements, DC resistance testing, and current carrying capacity verification. Mechanical testing evaluates tensile strength, bend performance, and fatigue resistance. Metallurgical analysis confirms copper layer uniformity and bond integrity across the strip width. These rigorous quality controls ensure consistent product performance and reliability.

The versatility of CCA strip extends across numerous industries and applications. In power distribution systems, it serves as an economical alternative for bus bars and connection systems. Cable manufacturers use CCA strip for cable shielding and braiding applications. The electronics industry utilizes it in flexible printed circuits and power distribution boards. Electric vehicle manufacturers are increasingly adopting CCA strip in battery connection systems and power distribution networks where weight savings directly impact vehicle efficiency and range.

RAYTRON provides extensive engineering support to help customers optimize their designs for CCA strip applications. We offer guidance on conductor sizing, connection methods, and thermal management strategies. Custom dimensions and copper ratios can be specified to meet specific performance requirements. This collaborative approach, combined with our technical expertise and quality manufacturing, has established RAYTRON as a preferred supplier for demanding CCA strip applications worldwide.`,
      zh: `RAYTRON铜包铝带的电气性能针对大电流应用进行了优化。铜外层提供优异的导电性,而铝芯作为有效的电流路径,特别是对于交流和高频电流,其中趋肤效应集中电流流在导体表面附近。这使铜包铝带特别适用于配电应用、开关柜母线和柔性配电系统,其中性能和经济性都是重要考虑因素。

铜包铝带生产中的质量保证涉及多个阶段的全面测试。尺寸测量验证厚度和宽度符合严格的公差。电气测试包括导电性测量、直流电阻测试和载流能力验证。机械测试评估抗拉强度、弯曲性能和疲劳抗性。冶金分析确认带材宽度上的铜层均匀性和结合完整性。这些严格的质量控制确保一致的产品性能和可靠性。

铜包铝带的多功能性延伸到众多行业和应用。在配电系统中,它作为母线和连接系统的经济替代品。电缆制造商使用铜包铝带进行电缆屏蔽和编织应用。电子行业在柔性印刷电路和配电板中使用它。电动汽车制造商越来越多地在电池连接系统和配电网络中采用铜包铝带,其中重量节省直接影响车辆效率和续航里程。

RAYTRON提供广泛的工程支持,帮助客户优化他们的铜包铝带应用设计。我们提供导体尺寸、连接方法和热管理策略的指导。可以指定定制尺寸和铜比例以满足特定性能要求。这种协作方法,结合我们的技术专长和质量制造,使RAYTRON成为全球苛刻铜包铝带应用的首选供应商。`
    },
    specifications: {
      en: [
        { label: 'Thickness', value: '0.15mm - 5.00mm' },
        { label: 'Width', value: '10.00mm - 100.00mm' },
        { label: 'Copper Layer Thickness', value: '0.030mm - 0.80mm (each side)' },
        { label: 'Copper Volume Ratio', value: '12% - 35%' },
        { label: 'Aluminum Core Purity', value: '≥99.7%' },
        { label: 'Copper Layer Purity', value: '≥99.95% OFHC' },
        { label: 'Conductivity', value: '55-65% IACS' },
        { label: 'Tensile Strength', value: '125-200 MPa' },
        { label: 'Elongation', value: '≥10%' },
        { label: 'Thickness Tolerance', value: '±0.020mm' },
        { label: 'Width Tolerance', value: '±0.15mm' },
        { label: 'Operating Temperature', value: '-55°C to +200°C' },
        { label: 'Standard Compliance', value: 'ASTM B566, IEC 61597' },
        { label: 'Surface Finish', value: 'Bright, uniform copper finish' }
      ],
      zh: [
        { label: '厚度范围', value: '0.15mm - 5.00mm' },
        { label: '宽度范围', value: '10.00mm - 100.00mm' },
        { label: '铜层厚度', value: '0.030mm - 0.80mm (每侧)' },
        { label: '铜体积比', value: '12% - 35%' },
        { label: '铝芯纯度', value: '≥99.7%' },
        { label: '铜层纯度', value: '≥99.95% 无氧铜' },
        { label: '导电率', value: '55-65% IACS' },
        { label: '抗拉强度', value: '125-200 MPa' },
        { label: '延伸率', value: '≥10%' },
        { label: '厚度公差', value: '±0.020mm' },
        { label: '宽度公差', value: '±0.15mm' },
        { label: '工作温度', value: '-55°C至+200°C' },
        { label: '标准认证', value: 'ASTM B566, IEC 61597' },
        { label: '表面光洁度', value: '光亮均匀铜面' }
      ]
    },
    features: {
      en: [
        'Wide format for high current capacity',
        'Excellent heat dissipation properties',
        'Uniform copper coverage across width',
        'Precise dimensional control',
        '40% lighter than pure copper',
        'Cost savings of 40-50%',
        'Good formability and bendability',
        'Suitable for stamping and punching'
      ],
      zh: [
        '大电流容量的宽幅格式',
        '优异的散热性能',
        '宽度上均匀的铜覆盖',
        '精确的尺寸控制',
        '比纯铜轻40%',
        '节省成本40-50%',
        '良好的成型性和可弯曲性',
        '适用于冲压和打孔'
      ]
    },
    advantages: {
      en: [
        'High current carrying capacity',
        'Efficient thermal management',
        'Significant weight reduction in installations',
        'Reduced structural support requirements',
        'Lower material and shipping costs',
        'Easier handling and installation',
        'Customizable dimensions and copper ratios',
        'Excellent electrical and mechanical properties',
        'Environmentally responsible choice',
        'Proven reliability in demanding applications'
      ],
      zh: [
        '高载流能力',
        '高效的热管理',
        '安装中显著的重量减轻',
        '减少的结构支撑要求',
        '降低的材料和运输成本',
        '更容易的处理和安装',
        '可定制的尺寸和铜比例',
        '优异的电气和机械性能',
        '环保的选择',
        '在苛刻应用中的验证可靠性'
      ]
    },
    applications: [
      {
        title: { en: 'Bus Bar Systems', zh: '母线系统' },
        description: {
          en: 'Power distribution bus bars, switchgear connections, industrial power systems',
          zh: '配电母线、开关柜连接、工业电力系统'
        }
      },
      {
        title: { en: 'Cable Shielding', zh: '电缆屏蔽' },
        description: {
          en: 'Cable braiding, electromagnetic shielding, coaxial cable shields',
          zh: '电缆编织、电磁屏蔽、同轴电缆屏蔽'
        }
      },
      {
        title: { en: 'Flexible Circuits', zh: '柔性电路' },
        description: {
          en: 'FPC conductors, flexible bus bars, power distribution boards',
          zh: 'FPC导体、柔性母线、配电板'
        }
      },
      {
        title: { en: 'Electric Vehicles', zh: '电动汽车' },
        description: {
          en: 'Battery connections, power distribution, charging infrastructure',
          zh: '电池连接、配电、充电基础设施'
        }
      },
      {
        title: { en: 'Solar Energy', zh: '太阳能' },
        description: {
          en: 'Photovoltaic connectors, inverter connections, grounding systems',
          zh: '光伏连接器、逆变器连接、接地系统'
        }
      },
      {
        title: { en: 'Industrial Equipment', zh: '工业设备' },
        description: {
          en: 'Control panels, machine connections, power contactors',
          zh: '控制面板、机器连接、电源接触器'
        }
      }
    ],
    faqs: [
      {
        question: {
          en: 'What current carrying capacity does CCA strip offer?',
          zh: '铜包铝带提供什么载流能力?'
        },
        answer: {
          en: 'Current carrying capacity depends on strip dimensions and copper ratio. For example, a 3mm × 30mm CCA strip with 20% copper ratio can carry approximately 150-200A continuously under proper thermal management. Our engineering team can calculate exact current ratings for your specific application and environmental conditions.',
          zh: '载流能力取决于带材尺寸和铜比例。例如,铜比例为20%的3mm × 30mm铜包铝带在适当的热管理下可以连续承载约150-200A。我们的工程团队可以为您的特定应用和环境条件计算精确的电流额定值。'
        }
      },
      {
        question: {
          en: 'How does CCA strip perform in outdoor applications?',
          zh: '铜包铝带在户外应用中表现如何?'
        },
        answer: {
          en: 'The copper outer layer of CCA strip provides excellent corrosion resistance for outdoor use. For long-term outdoor exposure, we recommend strips with higher copper ratios (25-35%) which offer enhanced protection. Proper protective coatings or enclosures further extend service life in harsh environmental conditions.',
          zh: '铜包铝带的铜外层为户外使用提供优异的耐腐蚀性。对于长期户外暴露,我们建议使用较高铜比例(25-35%)的带材,提供增强的保护。适当的保护涂层或外壳进一步延长在恶劣环境条件下的使用寿命。'
        }
      },
      {
        question: {
          en: 'Can CCA strip be welded or soldered?',
          zh: '铜包铝带可以焊接或焊接吗?'
        },
        answer: {
          en: 'Yes, CCA strip can be soldered using standard copper soldering techniques. For mechanical connections, ultrasonic welding and resistance welding are effective. For critical applications, mechanical compression connections with proper contact area and pressure provide reliable long-term performance. We can provide detailed connection guidelines for your specific application.',
          zh: '是的,铜包铝带可以使用标准铜焊接技术进行焊接。对于机械连接,超声波焊接和电阻焊接是有效的。对于关键应用,具有适当接触面积和压力的机械压接连接提供可靠的长期性能。我们可以为您的特定应用提供详细的连接指南。'
        }
      },
      {
        question: {
          en: 'What is the optimal copper ratio for bus bar applications?',
          zh: '母线应用的最佳铜比例是多少?'
        },
        answer: {
          en: 'For bus bar applications, we typically recommend copper ratios of 20-30%. This provides an excellent balance of conductivity, mechanical strength, and cost-effectiveness. Higher ratios (30-35%) are preferred for high-current or critical applications, while lower ratios (15-20%) offer maximum cost savings for less demanding installations.',
          zh: '对于母线应用,我们通常建议铜比例为20-30%。这提供了导电性、机械强度和成本效益的绝佳平衡。较高的比例(30-35%)适用于大电流或关键应用,而较低的比例(15-20%)为要求较低的安装提供最大的成本节省。'
        }
      },
      {
        question: {
          en: 'How do I determine the right dimensions for my application?',
          zh: '如何为我的应用确定正确的尺寸?'
        },
        answer: {
          en: 'Strip dimensions are selected based on required current capacity, available space, and thermal considerations. Our engineering team can help you calculate optimal dimensions using your system specifications. We consider factors including continuous current, short-circuit ratings, ambient temperature, and cooling methods to recommend the most suitable strip size.',
          zh: '带材尺寸根据所需的电流容量、可用空间和热考虑来选择。我们的工程团队可以使用您的系统规格帮助您计算最佳尺寸。我们考虑包括连续电流、短路额定值、环境温度和冷却方法在内的因素,推荐最合适的带材尺寸。'
        }
      },
      {
        question: {
          en: 'What quality testing is performed on CCA strip?',
          zh: '对铜包铝带进行哪些质量测试?'
        },
        answer: {
          en: 'Our comprehensive testing includes: dimensional verification (thickness, width uniformity), electrical testing (conductivity, DC resistance, current capacity), mechanical testing (tensile strength, elongation, bend performance), metallurgical analysis (copper layer thickness and uniformity, bond integrity), and surface quality inspection. All products come with complete test certificates.',
          zh: '我们的全面测试包括:尺寸验证(厚度、宽度均匀性)、电气测试(导电性、直流电阻、电流容量)、机械测试(抗拉强度、延伸率、弯曲性能)、冶金分析(铜层厚度和均匀性、结合完整性)和表面质量检查。所有产品都附带完整的测试证书。'
        }
      }
    ],
    seoKeywords: {
      en: [
        'CCA strip',
        'copper clad aluminum strip',
        'bus bar material',
        'CCA flat bar',
        'cable shielding strip',
        'power distribution strip',
        'cost-effective bus bar',
        'lightweight conductor strip',
        'CCA strip supplier',
        'aluminum copper strip'
      ],
      zh: [
        '铜包铝带',
        '铜包铝扁排',
        '母线材料',
        'CCA母线',
        '电缆屏蔽带',
        '配电带材',
        '经济型母线',
        '轻质导体带',
        '铜包铝带供应商',
        '铝铜复合带'
      ]
    },
    metaDescription: {
      en: 'RAYTRON CCA Strip: Premium copper clad aluminum conductor for bus bars and cable shielding. 40% lighter, 50% cost savings vs copper. Wide format, precise tolerances. ASTM B566 certified.',
      zh: 'RAYTRON铜包铝带:用于母线和电缆屏蔽的优质铜包铝导体。比铜轻40%,节省成本50%。宽幅格式,精确公差。ASTM B566认证。'
    },
    images: [
      '/images/products/cca-strip-1.jpg',
      '/images/products/cca-strip-busbar.jpg',
      '/images/products/cca-strip-detail.jpg',
      '/images/products/cca-strip-application.jpg'
    ],
    relatedProducts: ['copper-strip', 'cca-flat-wire', 'cca-busbar', 'aluminum-strip'],
    featured: false,
    tags: {
      en: ['CCA', 'Bus Bar', 'Power Distribution', 'Cable Shielding', 'Cost-Effective', 'ASTM B566'],
      zh: ['铜包铝', '母线', '配电', '电缆屏蔽', '经济型', 'ASTM B566']
    }
  }
]

export default ccaProductsPart1
