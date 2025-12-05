import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
const resources = {
  en: {
    translation: {
      header: {
        contactUs: "Contact Us"
      },
      hero: {
        title: "United Pro Med",
        subtitle1: "Delivering Trusted Surgical",
        subtitle2: "Excellence for Over {{highlight1}} {{highlight2}}",
        highlight1: "20",
        highlight2: "Years",
        description: "Providing hospitals and surgical centers with world-class orthopedic, neurosurgical, and maxillofacial materials now proudly serving the UAE.",
        contactButton: "Contact Our Team",
        feature1: "Reliable materials. Certified quality.",
        feature2: "Expert support for every procedure."
      },
      whoWeAre: {
        title: "Who",
        titleHighlight: "We Are",
        description: [
          "With more than two decades of experience supplying high-precision surgical materials in Syria, we are proud to expand our expertise into the UAE healthcare sector.",
          "We work closely with both private and public hospitals, delivering safe, reliable, and globally certified surgical solutions.",
          "Our team of specialized professionals ensures timely support for emergency procedures and critical operations, guaranteeing the highest level of efficiency."
        ]
      },
      ourVision: {
        title: "Our",
        titleHighlight: "Vision",
        description: "To be the ideal partner for the healthcare sector in the United Arab Emirates through Innovation, Trust, and Exceptional Service. We strive to empower healthcare institutions with reliable tools and consistent performance. We believe that product quality is the foundation of a doctor's confidence and a patient's comfort, therefore, we are committed to providing the finest medical supplies with the highest safety standards.",
        points: [
          "20+ years of proven industry experience",
          "Certified, quality-tested surgical materials",
          "Partnerships with global manufacturers",
          "Fast response for emergency and critical cases",
          "Strong reputation for reliability and service excellence"
        ]
      },
      productExpertise: {
        title: "Our Product",
        titleHighlight: "Expertise",
        description: "A complete range of premium and diverse medical and surgical products and instruments, offering integrated solutions and global-quality standards trusted by doctors.",
        spine: {
          title: "Spine",
          points: [
            "Full range of spinal implants & fixation systems.",
            "Designed for degenerative, traumatic & corrective spine procedures.",
            "High stability & secure fixation.",
            "Supports faster surgery time & recovery.",
            "International-quality materials for long-term performance."
          ]
        },
        knee: {
          title: "Knee",
          points: [
            "Components for knee replacement & reconstruction procedures.",
            "Engineered for strength, natural movement & durability.",
            "High-precision materials for better surgical outcomes.",
            "Supports smooth operation workflow.",
            "Ensures long-lasting postoperative results."
          ]
        },
        screw: {
          title: "Screw",
          points: [
            "Wide selection of cortical, cancellous, locking & cannulated screws.",
            "Made with medical-grade, biocompatible materials.",
            "Provides strong fixation for multiple surgical applications.",
            "High precision manufacturing for accuracy.",
            "Reliable performance in complex procedures."
          ]
        },
        trauma: {
          title: "Trauma",
          points: [
            "Trauma plates, rods, nails & fixation devices.",
            "Ideal for emergency fracture stabilization & complex injuries.",
            "Built for rapid response in critical situations.",
            "Ensures secure fixation & faster healing.",
            "Trusted by surgeons for stability & precision."
          ]
        }
      },
      whyChooseUs: {
        title: "Why",
        titleHighlight: "Choose Us",
        description: [
          "Choosing the right surgical materials partner is critical for ensuring patient safety, operational efficiency, and consistent clinical outcomes. With over two decades of proven experience, we provide a level of trust, reliability, and expertise that hospitals and surgical centers can confidently depend on.",
          "We work closely with surgeons, procurement teams, and hospital administrators to deliver not only high-quality materials, but also a seamless service experience. Every product we supply is selected for its precision, durability, and compliance with international medical standards, ensuring that healthcare professionals can focus on what matters most saving lives."
        ],
        features: {
          quality: {
            title: "Quality You Can Rely On",
            description: "All products meet international surgical safety standards, ensuring precision, durability, and reliable performance."
          },
          support: {
            title: "Expert Surgical Support",
            description: "Our trained team provides technical guidance and support during procedures."
          },
          emergency: {
            title: "Emergency Response Ready",
            description: "We ensure rapid availability of critical materials to support urgent operations."
          },
          partnerships: {
            title: "Strong Hospital Partnerships",
            description: "Decades of collaboration with major healthcare institutions across Syria, now expanding to the UAE."
          }
        }
      },
      industriesWeServe: {
        title: "Industries",
        titleHighlight: "We Serve",
        description: "We proudly support a wide range of healthcare institutions with reliable, Certified Global Quality.",
        deliveryTitle: "Fast Delivery and Consistent Quality",
        industries: [
          "Government Hospitals",
          "Private Hospitals & Clinics",
          "Trauma Centers",
          "Surgical & Specialty Centers",
          "Orthopedic & Neurosurgery Departments"
        ]
      },
      peopleBehindExcellence: {
        title: "The People Behind Our",
        titleHighlight: "Excellence",
        description: "A dedicated team of skilled professionals committed to delivering precision, reliability, and exceptional support in every medical procedure.",
        team: [
          {
            name: "Ali Sultan",
            position: "General Manager",
            email: "Ali.sultan@untpromed.ae",
            phone: "+971 56 430 0761"
          },
          {
            name: "Shabban Eisa",
            position: "Finance Manager", 
            email: "Shabbaneisa@gmail.com",
            phone: "+971 52 852 5064"
          }
        ]
      },
      contact: {
        title: "Contact",
        titleHighlight: "Us",
        description: "We're here to support your hospital or medical facility with reliable, high-quality surgical materials.",
        form: {
          fullName: "Full Name",
          fullNamePlaceholder: "John Smith",
          email: "Email",
          emailPlaceholder: "johnsmith77@gmail.com",
          phoneNo: "Phone No.",
          phonePlaceholder: "Phone No.",
          industry: "Industry",
          industryOptions: {
            select: "Select",
            governmentHospital: "Government Hospital",
            privateHospital: "Private Hospital",
            clinic: "Clinic",
            traumaCenter: "Trauma Center",
            surgicalCenter: "Surgical Center",
            others: "Others"
          },
          message: "Message",
          messagePlaceholder: "Type here...",
          sendButton: "Send Message",
          sending: "Sending..."
        }
      },
      footer: {
        tagline: "Your Trusted Partner for Medical Supplies",
        phoneLabel: "Phone No.",
        emailLabel: "Email",
        copyright: "© 2025 United Pro Med. All Rights Reserved."
      }
    }
  },
  ar: {
    translation: {
      header: {
        contactUs: "اتصل بنا"
      },
      hero: {
        title: "يونايتد برو ميد",
        subtitle1: "تقديم التميز الجراحي الموثوق",
        subtitle2: "لأكثر من {{highlight1}} {{highlight2}}",
        highlight1: "20",
        highlight2: "عاماً",
        description: "نوفر للمستشفيات والمراكز الجراحية مواد طبية عالمية المستوى في جراحة العظام والأعصاب والوجه والفكين، ونخدم الآن دولة الإمارات العربية المتحدة بفخر.",
        contactButton: "اتصل بفريقنا",
        feature1: "مواد موثوقة. جودة معتمدة.",
        feature2: "دعم خبير لكل إجراء طبي."
      },
      whoWeAre: {
        title: "من",
        titleHighlight: "نحن",
        description: [
          "مع أكثر من عقدين من الخبرة في توريد المواد الجراحية عالية الدقة في سوريا، نحن فخورون بتوسيع خبرتنا إلى قطاع الرعاية الصحية في دولة الإمارات العربية المتحدة.",
          "نعمل بشكل وثيق مع المستشفيات الخاصة والعامة، ونقدم حلولاً جراحية آمنة وموثوقة ومعتمدة عالمياً.",
          "يضمن فريقنا من المتخصصين المحترفين الدعم في الوقت المناسب للإجراءات الطارئة والعمليات الحرجة، مما يضمن أعلى مستوى من الكفاءة."
        ]
      },
      ourVision: {
        title: "رؤيتنا",
        titleHighlight: "",
        description: "أن نكون الشريك المثالي لقطاع الرعاية الصحية في دولة الإمارات العربية المتحدة من خلال الابتكار والثقة والخدمة الاستثنائية. نسعى لتمكين مؤسسات الرعاية الصحية بأدوات موثوقة وأداء متسق. نؤمن أن جودة المنتج هي أساس ثقة الطبيب وراحة المريض، لذلك نحن ملتزمون بتوفير أجود المستلزمات الطبية بأعلى معايير السلامة.",
        points: [
          "أكثر من 20 عاماً من الخبرة المثبتة في الصناعة",
          "مواد جراحية معتمدة ومختبرة الجودة",
          "شراكات مع الشركات المصنعة العالمية",
          "استجابة سريعة للحالات الطارئة والحرجة",
          "سمعة قوية في الموثوقية وتميز الخدمة"
        ]
      },
      productExpertise: {
        title: "خبرتنا في",
        titleHighlight: "المنتجات",
        description: "مجموعة شاملة من المنتجات والأدوات الطبية والجراحية المتميزة والمتنوعة، نقدم حلولاً متكاملة ومعايير جودة عالمية يثق بها الأطباء.",
        spine: {
          title: "العمود الفقري",
          points: [
            "مجموعة كاملة من زراعات العمود الفقري وأنظمة التثبيت.",
            "مصممة لإجراءات العمود الفقري التنكسية والصدمية والتصحيحية.",
            "استقرار عالي وتثبيت آمن.",
            "يدعم وقت الجراحة الأسرع والتعافي.",
            "مواد عالمية الجودة للأداء طويل المدى."
          ]
        },
        knee: {
          title: "الركبة",
          points: [
            "مكونات لإجراءات استبدال وإعادة بناء الركبة.",
            "مهندسة للقوة والحركة الطبيعية والمتانة.",
            "مواد عالية الدقة لنتائج جراحية أفضل.",
            "يدعم سير العمل السلس للعملية.",
            "يضمن نتائج ما بعد الجراحة طويلة الأمد."
          ]
        },
        screw: {
          title: "المسامير",
          points: [
            "مجموعة واسعة من المسامير القشرية والإسفنجية والقفل والمجوفة.",
            "مصنوعة من مواد طبية متوافقة حيوياً.",
            "توفر تثبيتاً قوياً للتطبيقات الجراحية المتعددة.",
            "تصنيع عالي الدقة للدقة.",
            "أداء موثوق في الإجراءات المعقدة."
          ]
        },
        trauma: {
          title: "الصدمات",
          points: [
            "ألواح الصدمات والقضبان والمسامير وأجهزة التثبيت.",
            "مثالية لتثبيت الكسور الطارئة والإصابات المعقدة.",
            "مبنية للاستجابة السريعة في الحالات الحرجة.",
            "يضمن التثبيت الآمن والشفاء الأسرع.",
            "موثوق به من قبل الجراحين للاستقرار والدقة."
          ]
        }
      },
      contact: {
        title: "اتصل",
        titleHighlight: "بنا",
        description: "نحن هنا لدعم مستشفاكم أو منشأتكم الطبية بمواد جراحية موثوقة وعالية الجودة.",
        form: {
          fullName: "الاسم الكامل",
          fullNamePlaceholder: "أحمد محمد",
          email: "البريد الإلكتروني",
          emailPlaceholder: "ahmed.mohammed@gmail.com",
          phoneNo: "رقم الهاتف",
          phonePlaceholder: "رقم الهاتف",
          industry: "القطاع",
          industryOptions: {
            select: "اختر",
            governmentHospital: "مستشفى حكومي",
            privateHospital: "مستشفى خاص",
            clinic: "عيادة",
            traumaCenter: "مركز الصدمات",
            surgicalCenter: "مركز جراحي",
            others: "أخرى"
          },
          message: "الرسالة",
          messagePlaceholder: "اكتب هنا...",
          sendButton: "إرسال الرسالة",
          sending: "جاري الإرسال..."
        }
      },
      whyChooseUs: {
        title: "لماذا",
        titleHighlight: "تختارنا",
        description: [
          "اختيار الشريك المناسب للمواد الجراحية أمر بالغ الأهمية لضمان سلامة المرضى والكفاءة التشغيلية والنتائج السريرية المتسقة. مع أكثر من عقدين من الخبرة المثبتة، نوفر مستوى من الثقة والموثوقية والخبرة التي يمكن للمستشفيات والمراكز الجراحية الاعتماد عليها بثقة.",
          "نعمل بشكل وثيق مع الجراحين وفرق المشتريات ومديري المستشفيات لتقديم ليس فقط مواد عالية الجودة، ولكن أيضاً تجربة خدمة سلسة. كل منتج نوفره يتم اختياره لدقته ومتانته وامتثاله للمعايير الطبية الدولية، مما يضمن أن المتخصصين في الرعاية الصحية يمكنهم التركيز على ما يهم أكثر إنقاذ الأرواح."
        ],
        features: {
          quality: {
            title: "جودة يمكنك الاعتماد عليها",
            description: "جميع المنتجات تلبي معايير السلامة الجراحية الدولية، مما يضمن الدقة والمتانة والأداء الموثوق."
          },
          support: {
            title: "دعم جراحي خبير",
            description: "فريقنا المدرب يوفر التوجيه التقني والدعم أثناء الإجراءات."
          },
          emergency: {
            title: "جاهزية الاستجابة الطارئة",
            description: "نضمن التوفر السريع للمواد الحرجة لدعم العمليات العاجلة."
          },
          partnerships: {
            title: "شراكات مستشفيات قوية",
            description: "عقود من التعاون مع مؤسسات الرعاية الصحية الكبرى في سوريا، والآن نتوسع إلى دولة الإمارات العربية المتحدة."
          }
        }
      },
      industriesWeServe: {
        title: "الصناعات",
        titleHighlight: "التي نخدمها",
        description: "نحن نفخر بدعم مجموعة واسعة من مؤسسات الرعاية الصحية بجودة عالمية موثوقة ومعتمدة.",
        deliveryTitle: "تسليم سريع وجودة متسقة",
        industries: [
          "المستشفيات الحكومية",
          "المستشفيات الخاصة والعيادات",
          "مراكز الصدمات",
          "المراكز الجراحية والتخصصية",
          "أقسام جراحة العظام والأعصاب"
        ]
      },
      peopleBehindExcellence: {
        title: "الأشخاص وراء",
        titleHighlight: "تميزنا",
        description: "فريق متخصص من المهنيين المهرة ملتزم بتقديم الدقة والموثوقية والدعم الاستثنائي في كل إجراء طبي.",
        team: [
          {
            name: "علي سلطان",
            position: "المدير العام",
            email: "Ali.sultan@untpromed.ae",
            phone: "+971 56 430 0761"
          },
          {
            name: "شعبان عيسى",
            position: "مدير المالية", 
            email: "Shabbaneisa@gmail.com",
            phone: "+971 52 852 5064"
          }
        ]
      },
      footer: {
        tagline: "شريكك الموثوق للمستلزمات الطبية",
        phoneLabel: "رقم الهاتف",
        emailLabel: "البريد الإلكتروني",
        copyright: "© 2025 يونايتد برو ميد. جميع الحقوق محفوظة."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    
    interpolation: {
      escapeValue: false // React already does escaping
    },
    
    // Keep the layout LTR for both languages
    react: {
      useSuspense: false
    }
  });

export default i18n;
