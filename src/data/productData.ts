// ✏️ EASY EDIT: Change any product image URL, name, description, badge, or visibility here

export interface Product {
  id: number;
  name: string;
  category: "decor" | "gifts" | "3d" | "leather" | "indian";
  categoryLabel: string;
  description: string;
  image: string;
  badge?: string;
  isVisible: boolean;
}

export const products: Product[] = [
  { id: 1, name: "Royal Artisan Figurines", category: "decor", categoryLabel: "Artisan Décor", description: "Hand-sculpted decorative figurines with intricate gold-leaf detailing by Rajasthan's master sculptors.", image: "/Royal-Artisan.png", badge: "Bestseller", isVisible: true },
  { id: 2, name: "Heritage Brass Table Accents", category: "decor", categoryLabel: "Artisan Décor", description: "Hand-finished brass and copper table accessories with traditional Indian motifs and contemporary edge.", image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600&h=400&fit=crop", isVisible: true },
  { id: 3, name: "Luxury Wall Art Panels", category: "decor", categoryLabel: "Artisan Décor", description: "Contemporary art panels blending traditional Indian artistry with modern minimalist design.", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&h=400&fit=crop", badge: "New", isVisible: true },
  { id: 4, name: "Traditional-Modern Fusion Décor", category: "decor", categoryLabel: "Artisan Décor", description: "Artistic home accents bridging traditional Indian craft with contemporary global design.", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop", isVisible: true },
  { id: 5, name: "Ornamental Brass Sculptures", category: "decor", categoryLabel: "Artisan Décor", description: "Museum-quality brass art through ancient lost-wax casting by master metalworkers.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=400&fit=crop", isVisible: true },
  { id: 6, name: "Sandalwood Carved Treasures", category: "decor", categoryLabel: "Artisan Décor", description: "Intricately hand-carved sandalwood pieces with natural fragrance — unique masterworks.", image: "https://images.unsplash.com/photo-1567225477277-c8162eb4991d?w=600&h=400&fit=crop", isVisible: true },
  { id: 7, name: "Marble Inlay Art", category: "decor", categoryLabel: "Artisan Décor", description: "Agra-inspired marble inlay with semi-precious stone work in Mughal tradition.", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=400&fit=crop", badge: "Exclusive", isVisible: true },
  { id: 8, name: "Decorative Copper Urns", category: "decor", categoryLabel: "Artisan Décor", description: "Hand-hammered copper vessels with natural patina finish — functional art pieces.", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=400&fit=crop", isVisible: true },
  { id: 9, name: "Executive Desk Collection", category: "gifts", categoryLabel: "Premium Gifts", description: "Branded luxury desk organizers in premium materials for the modern executive.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", isVisible: true },
  { id: 10, name: "Corporate Gift Suites", category: "gifts", categoryLabel: "Premium Gifts", description: "Premium curated gift boxes for corporate clients with luxury presentation.", image: "https://images.unsplash.com/photo-1549465220-1a8b9238f7e7?w=600&h=400&fit=crop", badge: "Bestseller", isVisible: true },
  { id: 11, name: "Celebration Gift Ensembles", category: "gifts", categoryLabel: "Premium Gifts", description: "Luxury gift sets for weddings, festivities, and milestone celebrations.", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop", isVisible: true },
  { id: 12, name: "Artisan Storage Collection", category: "gifts", categoryLabel: "Premium Gifts", description: "Hand-crafted decorative storage — boxes, cases, organizers that are beautiful and functional.", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=600&h=400&fit=crop", isVisible: true },
  { id: 13, name: "Personalized Luxury Journals", category: "gifts", categoryLabel: "Premium Gifts", description: "Custom-embossed leather journals with gold-edge pages and silk ribbon markers.", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=400&fit=crop", isVisible: true },
  { id: 14, name: "Heritage Tea & Spice Collection", category: "gifts", categoryLabel: "Premium Gifts", description: "Premium Indian teas and rare spice blends in luxury gift packaging.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop", badge: "Popular", isVisible: true },
  { id: 15, name: "Aromatherapy Luxury Sets", category: "gifts", categoryLabel: "Premium Gifts", description: "Curated incense, essential oil, and artisan candle collections from India.", image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=400&fit=crop", isVisible: true },
  { id: 16, name: "Custom 3D Decorative Objects", category: "3d", categoryLabel: "3D Printed", description: "Precision-engineered decorative art using advanced 3D printing technology.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop", badge: "Innovation", isVisible: true },
  { id: 17, name: "Personalized Nameplates", category: "3d", categoryLabel: "3D Printed", description: "Designer nameplates with 3D architectural detailing and custom typography.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop", isVisible: true },
  { id: 18, name: "Modern Sculptural Art", category: "3d", categoryLabel: "3D Printed", description: "Abstract 3D-printed sculptures where mathematics meets artistic expression.", image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=600&h=400&fit=crop", isVisible: true },
  { id: 19, name: "Limited-Edition Designer Pieces", category: "3d", categoryLabel: "3D Printed", description: "Numbered collectible 3D-printed art in exclusive limited quantities.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", badge: "Limited", isVisible: true },
  { id: 20, name: "Architectural Model Displays", category: "3d", categoryLabel: "3D Printed", description: "Miniature architectural marvels — precision replicas celebrating structural beauty.", image: "https://images.unsplash.com/photo-1609766418204-a45ddba24d5b?w=600&h=400&fit=crop", isVisible: true },
  { id: 21, name: "Custom Trophy & Award Designs", category: "3d", categoryLabel: "3D Printed", description: "Bespoke recognition pieces for events and celebrations worldwide.", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop", isVisible: true },
  { id: 22, name: "Artisan Leather Slides", category: "leather", categoryLabel: "Leather & Footwear", description: "Minimalist hand-stitched leather footwear with Italian-Indian craftsmanship fusion.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop", isVisible: true },
  { id: 23, name: "3D-Printed Concept Footwear", category: "leather", categoryLabel: "Leather & Footwear", description: "Futuristic 3D footwear where technology meets avant-garde design.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop", badge: "Concept", isVisible: true },
  { id: 24, name: "Premium Leather Accessories", category: "leather", categoryLabel: "Leather & Footwear", description: "Hand-crafted wallets, cardholders, and accessories in finest Indian leather.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop", isVisible: true },
  { id: 25, name: "Pashmina & Handwoven Textiles", category: "indian", categoryLabel: "Indian Specialties", description: "Authentic Kashmir Pashmina shawls — centuries of weaving tradition.", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop", badge: "Heritage", isVisible: true },
  { id: 26, name: "Ayurvedic Wellness Collections", category: "indian", categoryLabel: "Indian Specialties", description: "Premium Ayurvedic products — ancient wellness for the modern world.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop", isVisible: true },
  { id: 27, name: "Brass & Copperware Heritage", category: "indian", categoryLabel: "Indian Specialties", description: "Traditional Indian metalware with Ayurvedic health benefits.", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop", badge: "Trending", isVisible: true },
  { id: 28, name: "Blue Pottery & Ceramic Art", category: "indian", categoryLabel: "Indian Specialties", description: "Jaipur's iconic blue pottery in vivid cobalt and turquoise glazes.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop", badge: "Heritage", isVisible: true },
];

export const categoryFilters = [
  { key: "all", label: "All Products" },
  { key: "decor", label: "Artisan Décor" },
  { key: "gifts", label: "Premium Gifts" },
  { key: "3d", label: "3D Printed" },
  { key: "leather", label: "Leather & Footwear" },
  { key: "indian", label: "Indian Specialties" },
] as const;

export const featuredProductIds = [1, 5, 10, 16, 7, 25];
