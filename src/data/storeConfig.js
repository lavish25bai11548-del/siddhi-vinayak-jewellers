/**
 * SIDDHI VINAYAK JEWELLERS - MASTER CONFIGURATION
 * 
 * All showroom details, contact numbers, address, collections,
 * rates, and featured products are managed here for quick and easy editing.
 */

export const storeConfig = {
  brand: {
    name: "Siddhi Vinayak Jewellers",
    nameHindi: "सिद्धि विनायक ज्वैलर्स",
    tagline: "Timeless Elegance. A Legacy of Trust.",
    subtitle: "Discover exquisite jewellery crafted to celebrate your most precious moments.",
    established: "A Royal Goldsmith Heritage",
    blessing: "॥ श्री गणेशाय नमः ॥",
    emblemSubtitle: "FINE GOLD & DIAMOND JEWELLERY",
    logoPath: "/assets/sv-brand-logo.png",
    visitingCardPath: "/assets/visiting-card.png"
  },

  proprietors: [
    {
      name: "Onkar Lal Soni",
      nameHindi: "ओंकार लाल सोनी",
      role: "Founder & Goldsmith Artisan"
    },
    {
      name: "Mukesh Kumar Soni",
      nameHindi: "मुकेश कुमार सोनी",
      role: "Co-Founder & Showroom Director"
    },
    {
      lineage: "S/O Late Shri Kanhaiya Lal Ji Soni",
      lineageHindi: "सुपुत्र: स्व. कन्हैया लाल जी सोनी"
    }
  ],

  contact: {
    primaryPhone: "+91 98280 77806",
    primaryPhoneRaw: "9828077806",
    secondaryPhone: "+91 94605 75590",
    secondaryPhoneRaw: "9460575590",
    whatsappNumber: "919828077806", // Default WhatsApp click-to-chat
    alternateWhatsappNumber: "919460575590",
    email: "info@siddhivinayakjewellers.com", // Configurable placeholder
    address: {
      landmark: "In front of Karni Vatika, near Bus Stand",
      landmarkHindi: "करनी वाटिका के सामने, बस स्टैंड के पास",
      town: "Koshithal",
      townHindi: "कोशीथल",
      district: "Bhilwara",
      districtHindi: "भीलवाड़ा",
      state: "Rajasthan, India - 311805",
      fullAddress: "In front of Karni Vatika, near Bus Stand, Koshithal, Bhilwara, Rajasthan, India",
      googleMapsUrl: "https://maps.google.com/?q=Koshithal+Bhilwara+Rajasthan"
    },
    openingHours: {
      weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
      sunday: "Sunday: 10:00 AM – 7:00 PM",
      note: "Special appointments available for bridal consultations"
    }
  },

  socialLinks: {
    instagram: "https://instagram.com/siddhivinayak_jewellers",
    facebook: "https://facebook.com/siddhivinayakjewellers",
    youtube: "https://youtube.com/@siddhivinayakjewellers"
  },

  // Indicative Market Rates widget (Editable or can be toggled)
  todayRates: {
    gold24k: "₹ 74,500 / 10g",
    gold22k: "₹ 68,300 / 10g",
    gold18k: "₹ 55,900 / 10g",
    silverFine: "₹ 88,500 / 1kg",
    lastUpdated: "Updated Daily at Showroom Opening"
  },

  whyChooseUs: [
    {
      id: "craftsmanship",
      title: "Quality & Master Craftsmanship",
      titleHindi: "उत्कृष्ट गुणवत्ता और शुद्धता",
      description: "Every ornament is sculpted with unwavering precision, adhering to strict hallmark purity standards and generational goldsmith skill.",
      icon: "ShieldCheck"
    },
    {
      id: "traditional-designs",
      title: "Authentic Heritage Designs",
      titleHindi: "पारंपरिक एवं राजपूती आभूषण",
      description: "From timeless Rajasthani Aad, Timaniya and Bajuband to intricate Kundan-Meena and antique temple artistry.",
      icon: "Gem"
    },
    {
      id: "personal-service",
      title: "Personalised Consultation",
      titleHindi: "व्यक्तिगत सेवा और विश्वास",
      description: "Direct guidance from Master Jewellers Onkar Lal Soni and Mukesh Kumar Soni for custom creations and bridal trousseaus.",
      icon: "HeartHandshake"
    },
    {
      id: "special-occasions",
      title: "Jewellery for Every Milestone",
      titleHindi: "हर खास अवसर के लिए आभूषण",
      description: "Bridal weddings, auspicious ceremonies, festivals, Dhanteras, and daily essentials crafted to make memories everlasting.",
      icon: "Sparkles"
    }
  ],

  collections: [
    {
      id: "gold",
      name: "Gold Jewellery",
      nameHindi: "स्वर्ण आभूषण",
      subtitle: "22K & 18K Hallmarked Purity",
      description: "Pure yellow, rose, and antique gold ornaments crafted with generational perfection.",
      image: "https://images.unsplash.com/photo-1611591475879-da00d367f3c0?q=80&w=1200&auto=format&fit=crop",
      tag: "22K Pure Gold",
      itemCount: "120+ Showroom Designs"
    },
    {
      id: "bridal",
      name: "Bridal & Wedding Sets",
      nameHindi: "विवाह एवं दुल्हन संग्रह",
      subtitle: "Grand Royal Trousseau",
      description: "Magnificent bridal necklaces, chokers, matha patti, nath, and royal matching sets.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      tag: "Royal Bridal",
      itemCount: "Complete Wedding Sets"
    },
    {
      id: "traditional",
      name: "Traditional Rajasthani",
      nameHindi: "पारंपरिक राजस्थानी आभूषण",
      subtitle: "Heritage Aad & Kundan",
      description: "Traditional Rajputi Aad, Timaniya, Bajuband, Rakhdi, and antique Meenakari.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      tag: "Royal Heritage",
      itemCount: "Custom Artisan Crafted"
    },
    {
      id: "diamond",
      name: "Diamond Jewellery",
      nameHindi: "हीरे के आभूषण",
      subtitle: "Solitaires & Precious Stones",
      description: "Brilliant cut diamonds set in ethereal 18K gold and platinum for eternal sparkle.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      tag: "Certified Diamonds",
      itemCount: "Solitaires & Cocktails"
    },
    {
      id: "silver",
      name: "925 Silver Ornaments",
      nameHindi: "शुद्ध चांदी के आभूषण",
      subtitle: "Silver Ornaments & Articles",
      description: "Handcrafted Payal (anklets), Bichhiya, silver coins, pooja utensils, and idols.",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
      tag: "Fine 925 Silver",
      itemCount: "Pooja & Daily Wear"
    },
    {
      id: "rings-bangles",
      name: "Bangles, Rings & Chains",
      nameHindi: "कंगन, अंगूठियां व चैन",
      subtitle: "Everyday & Festive Elegance",
      description: "Royal Kadas, lightweight daily wear chains, cocktail rings, and temple earrings.",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop",
      tag: "Trending & Classic",
      itemCount: "All Weights Available"
    }
  ],

  featuredProducts: [
    {
      id: "sv-prod-01",
      name: "Royal Heritage Polki Bridal Choker Set",
      category: "Bridal Jewellery",
      categoryKey: "bridal",
      purity: "22K Hallmarked Gold & Uncut Polki",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      description: "Majestic bridal necklace set with matching chandelier earrings, hand-strung pearls and natural gemstones.",
      highlights: ["Pure 22 Karat Gold base", "Authentic Kundan Meenakari back", "Custom bridal fit"]
    },
    {
      id: "sv-prod-02",
      name: "Antique Handcrafted Peacock Kada (Pair)",
      category: "Gold Jewellery",
      categoryKey: "gold",
      purity: "22K Yellow Antique Finish",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1611591475879-da00d367f3c0?q=80&w=1000&auto=format&fit=crop",
      description: "Traditional Rajputi screw-open kada featuring intricate peacock nakshi carvings and ruby accents.",
      highlights: ["Dual Kada Set", "Antique Matte & Gloss Finish", "Sturdy screw lock"]
    },
    {
      id: "sv-prod-03",
      name: "Traditional Rajputi Royal Aad with Emeralds",
      category: "Traditional Indian Jewellery",
      categoryKey: "traditional",
      purity: "22K Gold & Precious Emeralds",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      description: "The crown jewel of Rajasthan. Rigid curved choker adorned with delicate pearl hangings and vibrant gemstones.",
      highlights: ["Classic Mewari/Marwari Silhouette", "Hand-enameled Meena work", "Adjustable dori cord"]
    },
    {
      id: "sv-prod-04",
      name: "Brilliant Solitaire Halo Diamond Ring",
      category: "Diamond Jewellery",
      categoryKey: "diamond",
      purity: "18K Gold / VVS-VS Clarity",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      description: "An eye-catching solitaire diamond surrounded by a micro-pavé halo on an elegant 18K gold band.",
      highlights: ["Certified Natural Diamond", "Ideal Brilliant Cut", "Lifetime polish support"]
    },
    {
      id: "sv-prod-05",
      name: "Classic Heritage Temple Jhumki Earrings",
      category: "Gold Jewellery",
      categoryKey: "gold",
      purity: "22K 916 Hallmark Gold",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
      description: "Two-tiered artisanal gold jhumkis with delicate cluster pearls and traditional ghunghroo hangings.",
      highlights: ["Lightweight & comfortable hook", "22K 916 BIS Hallmark", "Timeless festive wear"]
    },
    {
      id: "sv-prod-06",
      name: "Royal Rajputi Bajuband & Hathphool Set",
      category: "Traditional Indian Jewellery",
      categoryKey: "traditional",
      purity: "22K Gold with Kundan setting",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop",
      description: "Authentic Rajasthani armlet (Bajuband) accompanied by ornate ring-bracelet Hathphool.",
      highlights: ["Silk thread tassel tying", "Traditional Kundan setting", "Heritage Rajasthani design"]
    },
    {
      id: "sv-prod-07",
      name: "Artisanal 925 Sterling Silver Royal Payal",
      category: "Silver Jewellery",
      categoryKey: "silver",
      purity: "925 High-Grade Pure Silver",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
      description: "Traditional Rajasthani Ghunghroo Payal crafted in sterling silver with antique oxidised finish.",
      highlights: ["Authentic sweet chime bells", "Heavyweight heirloom silver", "Anti-tarnish protective polish"]
    },
    {
      id: "sv-prod-08",
      name: "22K Floral Filigree Pendant & Chain Set",
      category: "Rings, Earrings & Chains",
      categoryKey: "rings-bangles",
      purity: "22K 916 Hallmark Gold",
      priceDisplay: "Price on Showroom Request",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      description: "Delicate openwork filigree medallion paired with a sturdy classic Italian-link gold chain.",
      highlights: ["Versatile day-to-evening wear", "Smooth high-shine polish", "Secure lobster lock"]
    }
  ]
};
