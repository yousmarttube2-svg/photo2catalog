import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  ar: {
    dir: "rtl",
    appName: "Photo2Catalog",
    tagline: "حوّل صورك إلى كتالوجات احترافية في دقائق",
    subtitle: "ارفع صورك، أضف بيانات المنتجات، واحصل على كتالوج PDF احترافي أو ألبوم رقمي قابل للمشاركة",
    getStarted: "ابدأ مجاناً",
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    signOut: "تسجيل الخروج",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    name: "الاسم الكامل",
    confirmPassword: "تأكيد كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    noAccount: "ليس لديك حساب؟",
    hasAccount: "لديك حساب بالفعل؟",
    dashboard: "لوحة التحكم",
    myCatalogs: "كتالوجاتي",
    newCatalog: "كتالوج جديد",
    totalCatalogs: "إجمالي الكتالوجات",
    totalImages: "إجمالي الصور",
    totalViews: "إجمالي المشاهدات",
    recentCatalogs: "الكتالوجات الأخيرة",
    createCatalog: "إنشاء كتالوج",
    editCatalog: "تعديل الكتالوج",
    deleteCatalog: "حذف الكتالوج",
    copyCatalog: "نسخ الكتالوج",
    catalogName: "اسم الكتالوج",
    catalogDesc: "وصف الكتالوج",
    companyLogo: "شعار الشركة",
    contactInfo: "معلومات التواصل",
    phone: "رقم الهاتف",
    website: "الموقع الإلكتروني",
    address: "العنوان",
    uploadImages: "رفع الصور",
    dragDrop: "اسحب وأفلت الصور هنا أو انقر للاختيار",
    productName: "اسم المنتج",
    productDesc: "وصف المنتج",
    price: "السعر",
    quantity: "الكمية",
    category: "التصنيف",
    sku: "رمز المنتج (SKU)",
    templates: "القوالب",
    preview: "معاينة",
    generatePDF: "إنشاء PDF",
    shareLink: "رابط المشاركة",
    copyLink: "نسخ الرابط",
    shareWhatsApp: "واتساب",
    shareFacebook: "فيسبوك",
    shareEmail: "بريد إلكتروني",
    downloadPDF: "تحميل PDF",
    search: "البحث",
    filter: "تصفية",
    allCategories: "جميع التصنيفات",
    products: "المنتجات",
    addProduct: "إضافة منتج",
    saveChanges: "حفظ التغييرات",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    view: "عرض",
    share: "مشاركة",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    language: "اللغة",
    template1: "متجر إلكتروني",
    template2: "ملابس",
    template3: "مواد غذائية",
    template4: "أثاث",
    template5: "إلكترونيات",
    template6: "شركات",
    createdAt: "تاريخ الإنشاء",
    views: "مشاهدات",
    noProducts: "لا توجد منتجات بعد. أضف منتجاتك الأولى!",
    noCatalogs: "لا توجد كتالوجات بعد. أنشئ كتالوجك الأول!",
    watermark: "علامة مائية",
    pageSize: "حجم الصفحة",
    features: "المميزات",
    feat1Title: "رفع صور سريع",
    feat1Desc: "ارفع مئات الصور دفعة واحدة مع ضغط تلقائي",
    feat2Title: "قوالب احترافية",
    feat2Desc: "6 قوالب مصممة لمختلف الصناعات",
    feat3Title: "PDF عالي الجودة",
    feat3Desc: "كتالوج PDF جاهز للطباعة بجودة عالية",
    feat4Title: "مشاركة فورية",
    feat4Desc: "رابط مشاركة وQR Code لكل كتالوج",
    howItWorks: "كيف يعمل",
    step1: "ارفع الصور",
    step1Desc: "أضف صور منتجاتك مع بياناتها",
    step2: "اختر القالب",
    step2Desc: "اختر من بين 6 قوالب احترافية",
    step3: "أنشئ الكتالوج",
    step3Desc: "احصل على PDF وألبوم رقمي",
    profile: "الملف الشخصي",
    updateProfile: "تحديث الملف الشخصي",
    back: "رجوع",
    next: "التالي",
    finish: "إنهاء",
    step: "الخطوة",
    of: "من",
    generalInfo: "المعلومات العامة",
    uploadPhotos: "رفع الصور",
    productData: "بيانات المنتجات",
    chooseTemplate: "اختيار القالب",
    finalPreview: "المعاينة النهائية",
    imagesUploaded: "صور مرفوعة",
    deleteConfirm: "هل أنت متأكد من حذف هذا الكتالوج؟",
    yes: "نعم",
    no: "لا",
    saving: "جاري الحفظ...",
    generating: "جاري الإنشاء...",
    success: "تم بنجاح!",
    error: "حدث خطأ",
    required: "هذا الحقل مطلوب",
    position: "الترتيب",
    cover: "الغلاف",
    index: "الفهرس",
    publicView: "العرض العام",
    slideshow: "عرض شرائح",
    qrCode: "رمز QR",
    zoom: "تكبير",
  },
  en: {
    dir: "ltr",
    appName: "Photo2Catalog",
    tagline: "Turn your photos into professional catalogs in minutes",
    subtitle: "Upload photos, add product data, and get a professional PDF catalog or shareable digital album",
    getStarted: "Get Started Free",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
    email: "Email",
    password: "Password",
    name: "Full Name",
    confirmPassword: "Confirm Password",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    dashboard: "Dashboard",
    myCatalogs: "My Catalogs",
    newCatalog: "New Catalog",
    totalCatalogs: "Total Catalogs",
    totalImages: "Total Images",
    totalViews: "Total Views",
    recentCatalogs: "Recent Catalogs",
    createCatalog: "Create Catalog",
    editCatalog: "Edit Catalog",
    deleteCatalog: "Delete Catalog",
    copyCatalog: "Copy Catalog",
    catalogName: "Catalog Name",
    catalogDesc: "Catalog Description",
    companyLogo: "Company Logo",
    contactInfo: "Contact Information",
    phone: "Phone",
    website: "Website",
    address: "Address",
    uploadImages: "Upload Images",
    dragDrop: "Drag & drop images here or click to select",
    productName: "Product Name",
    productDesc: "Product Description",
    price: "Price",
    quantity: "Quantity",
    category: "Category",
    sku: "SKU",
    templates: "Templates",
    preview: "Preview",
    generatePDF: "Generate PDF",
    shareLink: "Share Link",
    copyLink: "Copy Link",
    shareWhatsApp: "WhatsApp",
    shareFacebook: "Facebook",
    shareEmail: "Email",
    downloadPDF: "Download PDF",
    search: "Search",
    filter: "Filter",
    allCategories: "All Categories",
    products: "Products",
    addProduct: "Add Product",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    share: "Share",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",
    template1: "E-Commerce",
    template2: "Fashion",
    template3: "Food & Grocery",
    template4: "Furniture",
    template5: "Electronics",
    template6: "Corporate",
    createdAt: "Created At",
    views: "Views",
    noProducts: "No products yet. Add your first product!",
    noCatalogs: "No catalogs yet. Create your first catalog!",
    watermark: "Watermark",
    pageSize: "Page Size",
    features: "Features",
    feat1Title: "Fast Image Upload",
    feat1Desc: "Upload hundreds of images at once with auto compression",
    feat2Title: "Professional Templates",
    feat2Desc: "6 templates designed for different industries",
    feat3Title: "High-Quality PDF",
    feat3Desc: "Print-ready PDF catalog in high quality",
    feat4Title: "Instant Sharing",
    feat4Desc: "Share link and QR Code for each catalog",
    howItWorks: "How It Works",
    step1: "Upload Photos",
    step1Desc: "Add your product images with details",
    step2: "Choose Template",
    step2Desc: "Pick from 6 professional templates",
    step3: "Create Catalog",
    step3Desc: "Get PDF and digital album",
    profile: "Profile",
    updateProfile: "Update Profile",
    back: "Back",
    next: "Next",
    finish: "Finish",
    step: "Step",
    of: "of",
    generalInfo: "General Info",
    uploadPhotos: "Upload Photos",
    productData: "Product Data",
    chooseTemplate: "Choose Template",
    finalPreview: "Final Preview",
    imagesUploaded: "images uploaded",
    deleteConfirm: "Are you sure you want to delete this catalog?",
    yes: "Yes",
    no: "No",
    saving: "Saving...",
    generating: "Generating...",
    success: "Success!",
    error: "Error occurred",
    required: "This field is required",
    position: "Position",
    cover: "Cover",
    index: "Index",
    publicView: "Public View",
    slideshow: "Slideshow",
    qrCode: "QR Code",
    zoom: "Zoom",
  },
};

// ============================================================
// MOCK DATA
// ============================================================
const DEMO_CATALOGS = [
  {
    id: "1",
    title: "كتالوج الملابس الصيفية",
    titleEn: "Summer Fashion Catalog",
    description: "أحدث تشكيلة ملابس صيفية 2024",
    template: "fashion",
    coverColor: "#8B5CF6",
    createdAt: "2024-06-01",
    views: 1240,
    products: [
      { id: "p1", name: "فستان صيفي", nameEn: "Summer Dress", price: "250", sku: "DR001", category: "فساتين", quantity: "50", description: "فستان صيفي خفيف وأنيق", color: "#EC4899" },
      { id: "p2", name: "بنطلون جينز", nameEn: "Jeans", price: "180", sku: "JN002", category: "بناطيل", quantity: "100", description: "بنطلون جينز عصري", color: "#3B82F6" },
      { id: "p3", name: "قميص كتان", nameEn: "Linen Shirt", price: "120", sku: "SH003", category: "قمصان", quantity: "75", description: "قميص كتان مريح", color: "#10B981" },
    ]
  },
  {
    id: "2",
    title: "كتالوج الأثاث المنزلي",
    titleEn: "Home Furniture Catalog",
    description: "أثاث عصري لمنزلك",
    template: "furniture",
    coverColor: "#F59E0B",
    createdAt: "2024-05-15",
    views: 890,
    products: [
      { id: "p4", name: "أريكة جلدية", nameEn: "Leather Sofa", price: "3500", sku: "SF001", category: "أرائك", quantity: "10", description: "أريكة جلدية فاخرة", color: "#B45309" },
      { id: "p5", name: "طاولة طعام", nameEn: "Dining Table", price: "1800", sku: "TB002", category: "طاولات", quantity: "15", description: "طاولة طعام خشبية", color: "#92400E" },
    ]
  },
  {
    id: "3",
    title: "كتالوج الإلكترونيات",
    titleEn: "Electronics Catalog",
    description: "أحدث الأجهزة الإلكترونية",
    template: "electronics",
    coverColor: "#06B6D4",
    createdAt: "2024-04-20",
    views: 2100,
    products: [
      { id: "p6", name: "هاتف ذكي", nameEn: "Smartphone", price: "2999", sku: "PH001", category: "هواتف", quantity: "30", description: "هاتف ذكي بمواصفات عالية", color: "#0E7490" },
      { id: "p7", name: "لابتوب", nameEn: "Laptop", price: "5500", sku: "LT002", category: "حاسبات", quantity: "20", description: "لابتوب للمحترفين", color: "#155E75" },
    ]
  }
];

const TEMPLATES = [
  { id: "ecommerce", key: "template1", gradient: "from-blue-500 to-purple-600", icon: "🛒", accentColor: "#6366F1" },
  { id: "fashion", key: "template2", gradient: "from-pink-500 to-rose-600", icon: "👗", accentColor: "#EC4899" },
  { id: "food", key: "template3", gradient: "from-green-500 to-emerald-600", icon: "🥗", accentColor: "#10B981" },
  { id: "furniture", key: "template4", gradient: "from-amber-500 to-orange-600", icon: "🪑", accentColor: "#F59E0B" },
  { id: "electronics", key: "template5", gradient: "from-cyan-500 to-blue-600", icon: "💻", accentColor: "#06B6D4" },
  { id: "corporate", key: "template6", gradient: "from-gray-600 to-slate-800", icon: "🏢", accentColor: "#475569" },
];

// ============================================================
// MOCK AUTH
// ============================================================
const MOCK_USER = { id: "u1", name: "أحمد محمد", email: "ahmed@example.com", avatar: null };

// ============================================================
// ICONS (SVG inline)
// ============================================================
const Icons = {
  Upload: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Trash: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
  Edit: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Eye: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Share: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  Copy: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Download: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Search: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Moon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  ChevronRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>,
  ChevronLeft: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="15 18 9 12 15 6"/></svg>,
  Grid: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  FileText: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  User: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg>,
  QR: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>,
  Image: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  Globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  BarChart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  Layers: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
};

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [lang, setLang] = useState("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("landing"); // landing | signin | signup | dashboard | create | view | profile
  const [catalogs, setCatalogs] = useState(DEMO_CATALOGS);
  const [selectedCatalog, setSelectedCatalog] = useState(null);
  const [notification, setNotification] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const t = translations[lang];
  const isRTL = lang === "ar";

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSignIn = (email, password) => {
    setUser(MOCK_USER);
    setPage("dashboard");
    showNotification(lang === "ar" ? "مرحباً بك!" : "Welcome back!");
  };

  const handleSignUp = (name, email, password) => {
    setUser({ ...MOCK_USER, name, email });
    setPage("dashboard");
    showNotification(lang === "ar" ? "تم إنشاء حسابك بنجاح!" : "Account created successfully!");
  };

  const handleSignOut = () => {
    setUser(null);
    setPage("landing");
  };

  const handleDeleteCatalog = (id) => {
    setCatalogs(prev => prev.filter(c => c.id !== id));
    setDeleteConfirm(null);
    showNotification(lang === "ar" ? "تم حذف الكتالوج" : "Catalog deleted");
  };

  const handleCopyCatalog = (catalog) => {
    const newCat = { ...catalog, id: Date.now().toString(), title: catalog.title + " (نسخة)", views: 0, createdAt: new Date().toISOString().split("T")[0] };
    setCatalogs(prev => [newCat, ...prev]);
    showNotification(lang === "ar" ? "تم نسخ الكتالوج" : "Catalog copied");
  };

  const handleCreateCatalog = (catalogData) => {
    const newCat = { ...catalogData, id: Date.now().toString(), views: 0, createdAt: new Date().toISOString().split("T")[0] };
    setCatalogs(prev => [newCat, ...prev]);
    setPage("dashboard");
    showNotification(lang === "ar" ? "تم إنشاء الكتالوج بنجاح!" : "Catalog created successfully!");
  };

  const dm = darkMode;

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${dm ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`} dir={isRTL ? "rtl" : "ltr"}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: ${isRTL ? "'Cairo'" : "'Inter'"}, sans-serif; }
        .glass { backdrop-filter: blur(16px); background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); }
        .glass-dark { backdrop-filter: blur(16px); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); }
        .gradient-text { background: linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(99,102,241,0.15); }
        .btn-primary { background: linear-gradient(135deg, #6366F1, #8B5CF6); color: white; transition: all 0.2s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }
        .drag-over { border-color: #6366F1 !important; background: rgba(99,102,241,0.05) !important; }
        input, textarea, select { outline: none; }
        input:focus, textarea:focus, select:focus { ring: 2px solid #6366F1; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #6366F1; border-radius: 3px; }
        .slide-in { animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .pulse-ring { animation: pulseRing 2s infinite; }
        @keyframes pulseRing { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 ${isRTL ? "left-4" : "right-4"} z-50 slide-in`}>
          <div className={`px-6 py-3 rounded-2xl shadow-2xl font-medium flex items-center gap-3 ${notification.type === "success" ? "bg-emerald-500" : "bg-red-500"} text-white`}>
            {notification.type === "success" ? <Icons.Check /> : <Icons.X />}
            {notification.msg}
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className={`${dm ? "bg-gray-900" : "bg-white"} rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl slide-in`}>
            <h3 className="text-xl font-bold mb-3">{t.deleteCatalog}</h3>
            <p className={`mb-6 ${dm ? "text-gray-400" : "text-gray-500"}`}>{t.deleteConfirm}</p>
            <div className="flex gap-3">
              <button onClick={() => handleDeleteCatalog(deleteConfirm)} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition-colors">{t.yes}</button>
              <button onClick={() => setDeleteConfirm(null)} className={`flex-1 ${dm ? "bg-gray-800" : "bg-gray-100"} py-3 rounded-2xl font-semibold transition-colors`}>{t.no}</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <Header t={t} user={user} darkMode={dm} lang={lang} isRTL={isRTL}
        onToggleDark={() => setDarkMode(!dm)}
        onToggleLang={() => setLang(lang === "ar" ? "en" : "ar")}
        onSignOut={handleSignOut}
        onNavigate={setPage}
      />

      {/* Pages */}
      {page === "landing" && <LandingPage t={t} dm={dm} onStart={() => setPage("signup")} onSignIn={() => setPage("signin")} isRTL={isRTL} />}
      {page === "signin" && <AuthPage t={t} dm={dm} mode="signin" onSignIn={handleSignIn} onSwitch={() => setPage("signup")} />}
      {page === "signup" && <AuthPage t={t} dm={dm} mode="signup" onSignUp={handleSignUp} onSwitch={() => setPage("signin")} />}
      {page === "dashboard" && user && (
        <DashboardPage t={t} dm={dm} catalogs={catalogs} isRTL={isRTL}
          onNew={() => setPage("create")}
          onView={(c) => { setSelectedCatalog(c); setPage("view"); }}
          onEdit={(c) => { setSelectedCatalog(c); setPage("create"); }}
          onDelete={(id) => setDeleteConfirm(id)}
          onCopy={handleCopyCatalog}
          onProfile={() => setPage("profile")}
        />
      )}
      {page === "create" && user && (
        <CreateCatalogPage t={t} dm={dm} isRTL={isRTL} lang={lang}
          catalog={selectedCatalog}
          onSave={handleCreateCatalog}
          onCancel={() => { setSelectedCatalog(null); setPage("dashboard"); }}
          showNotification={showNotification}
        />
      )}
      {page === "view" && selectedCatalog && (
        <ViewCatalogPage t={t} dm={dm} catalog={selectedCatalog} isRTL={isRTL} lang={lang}
          onBack={() => { setSelectedCatalog(null); setPage("dashboard"); }}
          showNotification={showNotification}
        />
      )}
      {page === "profile" && user && (
        <ProfilePage t={t} dm={dm} user={user} onBack={() => setPage("dashboard")} showNotification={showNotification} />
      )}
    </div>
  );
}

// ============================================================
// HEADER
// ============================================================
function Header({ t, user, darkMode: dm, lang, isRTL, onToggleDark, onToggleLang, onSignOut, onNavigate }) {
  return (
    <header className={`sticky top-0 z-40 ${dm ? "bg-gray-950/90 border-gray-800" : "bg-white/90 border-gray-100"} border-b backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate(user ? "dashboard" : "landing")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-white font-bold text-sm">P2C</div>
          <span className="font-bold text-lg gradient-text">{t.appName}</span>
        </button>
        <div className="flex items-center gap-2">
          <button onClick={onToggleLang} className={`px-3 py-1.5 rounded-xl text-sm font-medium ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors flex items-center gap-1`}>
            <Icons.Globe /><span>{lang === "ar" ? "EN" : "ع"}</span>
          </button>
          <button onClick={onToggleDark} className={`p-2 rounded-xl ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}>
            {dm ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          {user ? (
            <div className="flex items-center gap-2">
              <button onClick={() => onNavigate("profile")} className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                {user.name[0]}
              </button>
              <button onClick={onSignOut} className={`text-sm px-3 py-1.5 rounded-xl ${dm ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-600"} transition-colors`}>{t.signOut}</button>
            </div>
          ) : (
            <button onClick={() => onNavigate("signin")} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold">{t.signIn}</button>
          )}
        </div>
      </div>
    </header>
  );
}

// ============================================================
// LANDING PAGE
// ============================================================
function LandingPage({ t, dm, onStart, onSignIn, isRTL }) {
  const features = [
    { icon: "⚡", title: t.feat1Title, desc: t.feat1Desc },
    { icon: "🎨", title: t.feat2Title, desc: t.feat2Desc },
    { icon: "📄", title: t.feat3Title, desc: t.feat3Desc },
    { icon: "🔗", title: t.feat4Title, desc: t.feat4Desc },
  ];
  const steps = [
    { num: "01", title: t.step1, desc: t.step1Desc, color: "#6366F1" },
    { num: "02", title: t.step2, desc: t.step2Desc, color: "#8B5CF6" },
    { num: "03", title: t.step3, desc: t.step3Desc, color: "#EC4899" },
  ];

  return (
    <main className="fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-24 text-center relative">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${dm ? "bg-indigo-900/40 text-indigo-300 border border-indigo-700/40" : "bg-indigo-50 text-indigo-600 border border-indigo-100"}`}>
            <span className="pulse-ring w-2 h-2 bg-indigo-500 rounded-full inline-block"></span>
            {isRTL ? "الإصدار 1.0 متاح الآن" : "Version 1.0 is now available"}
          </div>
          <h1 className={`text-5xl md:text-7xl font-black mb-6 leading-tight ${dm ? "text-white" : "text-gray-900"}`}>
            <span className="gradient-text">{t.appName}</span>
          </h1>
          <p className={`text-2xl md:text-3xl font-bold mb-4 ${dm ? "text-gray-200" : "text-gray-800"}`}>{t.tagline}</p>
          <p className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${dm ? "text-gray-400" : "text-gray-500"}`}>{t.subtitle}</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button onClick={onStart} className="btn-primary px-8 py-4 rounded-2xl text-lg font-bold shadow-xl">{t.getStarted}</button>
            <button onClick={onSignIn} className={`px-8 py-4 rounded-2xl text-lg font-bold border-2 transition-colors ${dm ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}>{t.signIn}</button>
          </div>

          {/* Mock Preview */}
          <div className={`mt-16 rounded-3xl overflow-hidden shadow-2xl border max-w-3xl mx-auto ${dm ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}>
            <div className={`h-8 flex items-center gap-2 px-4 ${dm ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {DEMO_CATALOGS.map(cat => (
                <div key={cat.id} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: `linear-gradient(135deg, ${cat.coverColor}22, ${cat.coverColor}44)` }}>
                  <div className="h-20 flex items-center justify-center text-3xl" style={{ background: `linear-gradient(135deg, ${cat.coverColor}66, ${cat.coverColor}99)` }}>
                    {cat.template === "fashion" ? "👗" : cat.template === "furniture" ? "🪑" : "💻"}
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-bold truncate">{cat.title}</p>
                    <p className="text-xs opacity-60">{cat.products.length} {isRTL ? "منتج" : "products"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${dm ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-black text-center mb-12 ${dm ? "text-white" : "text-gray-900"}`}>{t.features}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className={`p-6 rounded-3xl card-hover ${dm ? "bg-gray-800/60 border border-gray-700" : "bg-gray-50 border border-gray-100"}`}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${dm ? "text-gray-400" : "text-gray-500"}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-black text-center mb-12 ${dm ? "text-white" : "text-gray-900"}`}>{t.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}99)` }}>{s.num}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="btn-primary p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-4">{isRTL ? "ابدأ مجاناً اليوم" : "Start Free Today"}</h2>
            <p className="text-white/80 mb-8">{isRTL ? "لا تحتاج بطاقة ائتمانية" : "No credit card required"}</p>
            <button onClick={onStart} className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition-colors shadow-lg">{t.getStarted}</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// AUTH PAGE
// ============================================================
function AuthPage({ t, dm, mode, onSignIn, onSignUp, onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (mode === "signin") onSignIn(email, password);
      else onSignUp(name, email, password);
    }, 800);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 fade-in">
      <div className={`w-full max-w-md ${dm ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"} rounded-3xl shadow-2xl p-8`}>
        <div className="text-center mb-8">
          <div className="w-14 h-14 btn-primary rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4">P2C</div>
          <h2 className="text-2xl font-black">{mode === "signin" ? t.signIn : t.signUp}</h2>
        </div>
        <div className="space-y-4">
          {mode === "signup" && (
            <input value={name} onChange={e => setName(e.target.value)} placeholder={t.name} className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"} focus:border-indigo-500 transition-colors`} />
          )}
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder={t.email} type="email" className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"} focus:border-indigo-500 transition-colors`} />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder={t.password} type="password" className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"} focus:border-indigo-500 transition-colors`} />
          {mode === "signin" && <div className="text-right"><button className="text-indigo-500 text-sm hover:underline">{t.forgotPassword}</button></div>}
          <button onClick={handle} disabled={loading} className="w-full btn-primary py-3.5 rounded-2xl font-bold text-white disabled:opacity-60">
            {loading ? (mode === "signin" ? t.saving : t.saving) : (mode === "signin" ? t.signIn : t.signUp)}
          </button>
        </div>
        <p className={`mt-6 text-center text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>
          {mode === "signin" ? t.noAccount : t.hasAccount}{" "}
          <button onClick={onSwitch} className="text-indigo-500 font-semibold hover:underline">
            {mode === "signin" ? t.signUp : t.signIn}
          </button>
        </p>
      </div>
    </div>
  );
}

// ============================================================
// DASHBOARD
// ============================================================
function DashboardPage({ t, dm, catalogs, isRTL, onNew, onView, onEdit, onDelete, onCopy, onProfile }) {
  const [search, setSearch] = useState("");
  const filtered = catalogs.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));
  const totalImages = catalogs.reduce((acc, c) => acc + c.products.length, 0);
  const totalViews = catalogs.reduce((acc, c) => acc + c.views, 0);

  const stats = [
    { label: t.totalCatalogs, value: catalogs.length, icon: "📁", color: "#6366F1" },
    { label: t.totalImages, value: totalImages, icon: "🖼️", color: "#8B5CF6" },
    { label: t.totalViews, value: totalViews.toLocaleString(), icon: "👁️", color: "#EC4899" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 fade-in">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 rounded-3xl ${dm ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"} shadow-sm`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}22` }}>
                <Icons.BarChart />
              </div>
            </div>
            <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
            <div className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-black">{t.myCatalogs}</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border flex-1 sm:w-64 ${dm ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
            <Icons.Search />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} className={`flex-1 bg-transparent text-sm ${dm ? "text-white placeholder-gray-500" : "text-gray-900 placeholder-gray-400"}`} />
          </div>
          <button onClick={onNew} className="btn-primary px-5 py-2.5 rounded-2xl font-semibold flex items-center gap-2 whitespace-nowrap">
            <Icons.Plus />{t.newCatalog}
          </button>
        </div>
      </div>

      {/* Catalogs Grid */}
      {filtered.length === 0 ? (
        <div className={`text-center py-20 ${dm ? "text-gray-500" : "text-gray-400"}`}>
          <div className="text-6xl mb-4">📂</div>
          <p className="font-medium">{t.noCatalogs}</p>
          <button onClick={onNew} className="mt-4 btn-primary px-6 py-2.5 rounded-2xl font-semibold">{t.newCatalog}</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cat => (
            <CatalogCard key={cat.id} catalog={cat} t={t} dm={dm} isRTL={isRTL}
              onView={() => onView(cat)} onEdit={() => onEdit(cat)} onDelete={() => onDelete(cat.id)} onCopy={() => onCopy(cat)} />
          ))}
        </div>
      )}
    </main>
  );
}

function CatalogCard({ catalog, t, dm, isRTL, onView, onEdit, onDelete, onCopy }) {
  const template = TEMPLATES.find(tm => tm.id === catalog.template) || TEMPLATES[0];
  return (
    <div className={`rounded-3xl overflow-hidden ${dm ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"} shadow-sm card-hover`}>
      {/* Cover */}
      <div className={`h-36 bg-gradient-to-br ${template.gradient} flex items-center justify-center relative`}>
        <span className="text-5xl">{template.icon}</span>
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${dm ? "bg-black/30 text-white" : "bg-white/30 text-white"} backdrop-blur-sm`}>
            {catalog.products.length} {isRTL ? "منتج" : "items"}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1 truncate">{catalog.title}</h3>
        <p className={`text-sm mb-3 truncate ${dm ? "text-gray-400" : "text-gray-500"}`}>{catalog.description}</p>
        <div className={`flex items-center justify-between text-xs mb-4 ${dm ? "text-gray-500" : "text-gray-400"}`}>
          <span>📅 {catalog.createdAt}</span>
          <span>👁 {catalog.views.toLocaleString()}</span>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={onView} className="flex-1 btn-primary py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-1"><Icons.Eye />{t.view}</button>
          <button onClick={onEdit} className={`p-2 rounded-xl ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}><Icons.Edit /></button>
          <button onClick={onCopy} className={`p-2 rounded-xl ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}><Icons.Copy /></button>
          <button onClick={onDelete} className={`p-2 rounded-xl ${dm ? "bg-red-900/30 hover:bg-red-900/50 text-red-400" : "bg-red-50 hover:bg-red-100 text-red-500"} transition-colors`}><Icons.Trash /></button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CREATE CATALOG
// ============================================================
function CreateCatalogPage({ t, dm, isRTL, lang, catalog, onSave, onCancel, showNotification }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    title: catalog?.title || "",
    description: catalog?.description || "",
    phone: "",
    email: "",
    website: "",
    address: "",
    template: catalog?.template || "ecommerce",
    products: catalog?.products || [],
    coverColor: catalog?.coverColor || "#6366F1",
  });
  const [uploadedImages, setUploadedImages] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const fileRef = useRef();

  const steps = [t.generalInfo, t.uploadPhotos, t.productData, t.chooseTemplate, t.finalPreview];

  const updateForm = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleFiles = (files) => {
    const newImgs = Array.from(files).map(f => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(f),
      name: f.name,
    }));
    setUploadedImages(prev => [...prev, ...newImgs]);
    // Auto-add product entries
    newImgs.forEach(img => {
      const prod = { id: img.id.toString(), name: img.name.replace(/\.[^.]+$/, ""), nameEn: "", description: "", price: "", sku: "", quantity: "", category: "", image_url: img.url, color: "#6366F1" };
      setForm(prev => ({ ...prev, products: [...prev.products, prod] }));
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeProduct = (id) => setForm(prev => ({ ...prev, products: prev.products.filter(p => p.id !== id) }));

  const updateProduct = (id, key, val) => setForm(prev => ({
    ...prev,
    products: prev.products.map(p => p.id === id ? { ...p, [key]: val } : p)
  }));

  const canNext = () => {
    if (step === 0) return form.title.trim().length > 0;
    if (step === 1) return true;
    return true;
  };

  const selectedTemplate = TEMPLATES.find(tm => tm.id === form.template) || TEMPLATES[0];

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 fade-in">
      {/* Steps */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => i < step && setStep(i)} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${i === step ? "btn-primary text-white shadow-lg" : i < step ? "bg-emerald-500/20 text-emerald-400 cursor-pointer" : dm ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-400"}`}>
              {i < step ? <Icons.Check /> : <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs">{i + 1}</span>}
              <span className="hidden sm:inline">{s}</span>
            </button>
            {i < steps.length - 1 && <div className={`w-6 h-0.5 ${i < step ? "bg-emerald-400" : dm ? "bg-gray-700" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      <div className={`${dm ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"} rounded-3xl p-6 md:p-8 shadow-sm`}>
        {/* Step 0: General Info */}
        {step === 0 && (
          <div className="space-y-5 slide-in">
            <h2 className="text-xl font-black mb-6">{t.generalInfo}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>{t.catalogName} *</label>
                <input value={form.title} onChange={e => updateForm("title", e.target.value)} className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200"} focus:border-indigo-500 transition-colors`} placeholder={t.catalogName} />
              </div>
              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>{t.catalogDesc}</label>
                <textarea value={form.description} onChange={e => updateForm("description", e.target.value)} rows={3} className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200"} focus:border-indigo-500 transition-colors resize-none`} placeholder={t.catalogDesc} />
              </div>
              {[["phone", t.phone, "📞"], ["email", t.email, "📧"], ["website", t.website, "🌐"], ["address", t.address, "📍"]].map(([key, label, icon]) => (
                <div key={key}>
                  <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>{icon} {label}</label>
                  <input value={form[key]} onChange={e => updateForm(key, e.target.value)} className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200"} focus:border-indigo-500 transition-colors`} placeholder={label} />
                </div>
              ))}
              <div>
                <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>🎨 {isRTL ? "لون الغلاف" : "Cover Color"}</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={form.coverColor} onChange={e => updateForm("coverColor", e.target.value)} className="w-12 h-12 rounded-xl border-0 cursor-pointer" />
                  <span className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{form.coverColor}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Upload */}
        {step === 1 && (
          <div className="slide-in">
            <h2 className="text-xl font-black mb-6">{t.uploadPhotos}</h2>
            <div
              className={`border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all ${dragOver ? "drag-over" : dm ? "border-gray-700" : "border-gray-200"} ${dm ? "hover:border-indigo-600" : "hover:border-indigo-400"}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
            >
              <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={e => handleFiles(e.target.files)} />
              <div className="text-5xl mb-4">📸</div>
              <p className="font-semibold text-lg mb-1">{t.dragDrop}</p>
              <p className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{isRTL ? "PNG, JPG, WebP حتى 10MB" : "PNG, JPG, WebP up to 10MB"}</p>
            </div>
            {uploadedImages.length > 0 && (
              <div className="mt-6">
                <p className={`text-sm font-medium mb-3 ${dm ? "text-gray-400" : "text-gray-500"}`}>{uploadedImages.length} {t.imagesUploaded}</p>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {uploadedImages.map(img => (
                    <div key={img.id} className="relative aspect-square rounded-2xl overflow-hidden group">
                      <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                      <button onClick={() => { setUploadedImages(prev => prev.filter(i => i.id !== img.id)); removeProduct(img.id.toString()); }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                        <Icons.Trash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {form.products.length > 0 && uploadedImages.length === 0 && (
              <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 gap-3">
                {form.products.map(p => (
                  <div key={p.id} className="aspect-square rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${p.color}22` }}>🖼️</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 2: Product Data */}
        {step === 2 && (
          <div className="slide-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black">{t.productData}</h2>
              <button onClick={() => {
                const newProd = { id: Date.now().toString(), name: "", description: "", price: "", sku: "", quantity: "", category: "", color: "#6366F1" };
                setForm(prev => ({ ...prev, products: [...prev.products, newProd] }));
              }} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Icons.Plus />{t.addProduct}
              </button>
            </div>
            {form.products.length === 0 ? (
              <div className={`text-center py-16 ${dm ? "text-gray-500" : "text-gray-400"}`}>
                <div className="text-5xl mb-3">📦</div>
                <p>{t.noProducts}</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                {form.products.map((prod, idx) => (
                  <div key={prod.id} className={`p-4 rounded-2xl border ${dm ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-sm font-medium ${dm ? "text-gray-400" : "text-gray-500"}`}>{isRTL ? `منتج ${idx + 1}` : `Product ${idx + 1}`}</span>
                      <button onClick={() => removeProduct(prod.id)} className="text-red-400 hover:text-red-500 transition-colors"><Icons.Trash /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[["name", t.productName], ["price", t.price], ["sku", t.sku], ["quantity", t.quantity], ["category", t.category]].map(([key, label]) => (
                        <input key={key} value={prod[key] || ""} onChange={e => updateProduct(prod.id, key, e.target.value)} placeholder={label}
                          className={`px-3 py-2 rounded-xl border text-sm ${dm ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-white border-gray-200"} focus:border-indigo-400 transition-colors`} />
                      ))}
                      <input value={prod.description || ""} onChange={e => updateProduct(prod.id, "description", e.target.value)} placeholder={t.productDesc}
                        className={`col-span-2 px-3 py-2 rounded-xl border text-sm ${dm ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-white border-gray-200"} focus:border-indigo-400 transition-colors`} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 3: Template */}
        {step === 3 && (
          <div className="slide-in">
            <h2 className="text-xl font-black mb-6">{t.chooseTemplate}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TEMPLATES.map(tmpl => (
                <button key={tmpl.id} onClick={() => updateForm("template", tmpl.id)}
                  className={`rounded-3xl overflow-hidden border-2 transition-all ${form.template === tmpl.id ? "border-indigo-500 shadow-lg shadow-indigo-500/20 scale-105" : dm ? "border-gray-700 hover:border-gray-600" : "border-gray-200 hover:border-gray-300"}`}>
                  <div className={`h-24 bg-gradient-to-br ${tmpl.gradient} flex items-center justify-center text-4xl`}>{tmpl.icon}</div>
                  <div className={`p-3 ${dm ? "bg-gray-800" : "bg-white"}`}>
                    <p className="font-semibold text-sm">{t[tmpl.key]}</p>
                    {form.template === tmpl.id && <p className="text-xs text-indigo-400 mt-1">✓ {isRTL ? "محدد" : "Selected"}</p>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Preview */}
        {step === 4 && (
          <div className="slide-in">
            <h2 className="text-xl font-black mb-6">{t.finalPreview}</h2>
            <CatalogPreview form={form} t={t} dm={dm} isRTL={isRTL} selectedTemplate={selectedTemplate} lang={lang} />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-dashed border-gray-200 dark:border-gray-700">
          <button onClick={step === 0 ? onCancel : () => setStep(s => s - 1)} className={`px-5 py-2.5 rounded-2xl font-semibold ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors flex items-center gap-2`}>
            {isRTL ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}{step === 0 ? t.cancel : t.back}
          </button>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep(s => s + 1)} disabled={!canNext()} className="btn-primary px-6 py-2.5 rounded-2xl font-semibold disabled:opacity-50 flex items-center gap-2">
              {t.next}{isRTL ? <Icons.ChevronLeft /> : <Icons.ChevronRight />}
            </button>
          ) : (
            <button onClick={() => onSave(form)} className="btn-primary px-8 py-2.5 rounded-2xl font-bold flex items-center gap-2">
              <Icons.Check />{t.finish}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

// ============================================================
// CATALOG PREVIEW
// ============================================================
function CatalogPreview({ form, t, dm, isRTL, selectedTemplate, lang }) {
  return (
    <div className={`rounded-3xl overflow-hidden border ${dm ? "border-gray-700" : "border-gray-200"} shadow-xl max-h-96 overflow-y-auto`}>
      {/* Cover */}
      <div className={`bg-gradient-to-br ${selectedTemplate.gradient} p-8 text-white text-center relative`}>
        <div className="text-5xl mb-3">{selectedTemplate.icon}</div>
        <h2 className="text-2xl font-black mb-1">{form.title || (isRTL ? "اسم الكتالوج" : "Catalog Name")}</h2>
        <p className="text-white/70 text-sm">{form.description || (isRTL ? "وصف الكتالوج" : "Catalog Description")}</p>
        {form.phone && <p className="mt-2 text-white/80 text-xs">📞 {form.phone}</p>}
        {form.website && <p className="text-white/80 text-xs">🌐 {form.website}</p>}
      </div>
      {/* Products */}
      <div className={`p-5 ${dm ? "bg-gray-900" : "bg-white"}`}>
        {form.products.length === 0 ? (
          <div className={`text-center py-8 ${dm ? "text-gray-500" : "text-gray-400"}`}>
            <p>{t.noProducts}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {form.products.slice(0, 6).map(prod => (
              <div key={prod.id} className={`rounded-2xl overflow-hidden border ${dm ? "border-gray-800 bg-gray-800" : "border-gray-100 bg-gray-50"}`}>
                <div className="h-24 flex items-center justify-center text-3xl" style={{ background: `linear-gradient(135deg, ${selectedTemplate.accentColor}22, ${selectedTemplate.accentColor}44)` }}>
                  {prod.image_url ? <img src={prod.image_url} alt={prod.name} className="h-full w-full object-cover" /> : "🖼️"}
                </div>
                <div className="p-3">
                  <p className="font-bold text-sm truncate">{prod.name || (isRTL ? "اسم المنتج" : "Product Name")}</p>
                  {prod.price && <p className="text-indigo-500 text-sm font-semibold mt-0.5">{prod.price} {isRTL ? "ر.س" : "SAR"}</p>}
                  {prod.sku && <p className={`text-xs mt-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>SKU: {prod.sku}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// VIEW CATALOG (Public View)
// ============================================================
function ViewCatalogPage({ t, dm, catalog, isRTL, lang, onBack, showNotification }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("browse"); // browse | slideshow | share
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(null);
  const [copied, setCopied] = useState(false);

  const template = TEMPLATES.find(tm => tm.id === catalog.template) || TEMPLATES[0];
  const categories = ["all", ...new Set(catalog.products.map(p => p.category).filter(Boolean))];
  const filtered = catalog.products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || (p.description || "").toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || p.category === category;
    return matchSearch && matchCat;
  });

  const publicUrl = `https://photo2catalog.app/c/${catalog.id}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(publicUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showNotification(isRTL ? "تم نسخ الرابط!" : "Link copied!");
  };

  const tabs = [
    { id: "browse", label: isRTL ? "تصفح" : "Browse", icon: "🗂️" },
    { id: "slideshow", label: t.slideshow, icon: "▶️" },
    { id: "share", label: t.share, icon: "🔗" },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 fade-in">
      {/* Back + Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className={`p-2 rounded-xl ${dm ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}>
          {isRTL ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-black">{catalog.title}</h1>
          <p className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{catalog.products.length} {isRTL ? "منتج" : "products"} • {catalog.views.toLocaleString()} {t.views}</p>
        </div>
        <button onClick={() => showNotification(isRTL ? "جاري إنشاء PDF..." : "Generating PDF...")} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
          <Icons.Download />{t.downloadPDF}
        </button>
      </div>

      {/* Cover Banner */}
      <div className={`rounded-3xl overflow-hidden mb-6 bg-gradient-to-br ${template.gradient}`}>
        <div className="p-8 text-white text-center">
          <div className="text-5xl mb-3">{template.icon}</div>
          <h2 className="text-3xl font-black mb-2">{catalog.title}</h2>
          <p className="text-white/80">{catalog.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex gap-1 p-1 rounded-2xl mb-6 ${dm ? "bg-gray-900" : "bg-gray-100"}`}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === tab.id ? "btn-primary shadow-md" : dm ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Browse Tab */}
      {activeTab === "browse" && (
        <div className="slide-in">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border flex-1 ${dm ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
              <Icons.Search />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} className={`flex-1 bg-transparent text-sm ${dm ? "text-white placeholder-gray-500" : "placeholder-gray-400"}`} />
            </div>
            {categories.length > 1 && (
              <select value={category} onChange={e => setCategory(e.target.value)} className={`px-4 py-2.5 rounded-2xl border text-sm font-medium ${dm ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-200"}`}>
                {categories.map(c => <option key={c} value={c}>{c === "all" ? t.allCategories : c}</option>)}
              </select>
            )}
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div className={`text-center py-16 ${dm ? "text-gray-500" : "text-gray-400"}`}>
              <p className="text-5xl mb-3">🔍</p>
              <p>{isRTL ? "لا توجد نتائج" : "No results found"}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map(prod => (
                <div key={prod.id} onClick={() => setZoom(prod)} className={`rounded-2xl overflow-hidden border cursor-pointer card-hover ${dm ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"} shadow-sm`}>
                  <div className="h-36 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${template.accentColor}22, ${template.accentColor}44)` }}>
                    {prod.image_url ? <img src={prod.image_url} alt={prod.name} className="w-full h-full object-cover" /> : <span className="text-5xl">🖼️</span>}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 truncate">{prod.name}</h3>
                    {prod.description && <p className={`text-xs mb-2 line-clamp-2 ${dm ? "text-gray-400" : "text-gray-500"}`}>{prod.description}</p>}
                    <div className="flex items-center justify-between">
                      {prod.price ? <span className="text-indigo-500 font-bold text-sm">{prod.price} {isRTL ? "ر.س" : "SAR"}</span> : <span />}
                      {prod.category && <span className={`text-xs px-2 py-0.5 rounded-full ${dm ? "bg-gray-800" : "bg-gray-100"}`}>{prod.category}</span>}
                    </div>
                    {prod.sku && <p className={`text-xs mt-1 ${dm ? "text-gray-600" : "text-gray-400"}`}>SKU: {prod.sku}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Slideshow Tab */}
      {activeTab === "slideshow" && (
        <div className="slide-in">
          {catalog.products.length === 0 ? (
            <div className={`text-center py-16 ${dm ? "text-gray-500" : "text-gray-400"}`}><p>{t.noProducts}</p></div>
          ) : (
            <div>
              <div className={`rounded-3xl overflow-hidden mb-4 ${dm ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className="aspect-video flex items-center justify-center relative" style={{ background: `linear-gradient(135deg, ${template.accentColor}22, ${template.accentColor}44)` }}>
                  {catalog.products[currentSlide]?.image_url
                    ? <img src={catalog.products[currentSlide].image_url} alt="" className="w-full h-full object-contain" />
                    : <span className="text-8xl">🖼️</span>
                  }
                  <button onClick={() => setCurrentSlide(s => Math.max(0, s - 1))} className="absolute left-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
                    {isRTL ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
                  </button>
                  <button onClick={() => setCurrentSlide(s => Math.min(catalog.products.length - 1, s + 1))} className="absolute right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
                    {isRTL ? <Icons.ChevronLeft /> : <Icons.ChevronRight />}
                  </button>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-black text-xl">{catalog.products[currentSlide]?.name}</h3>
                  {catalog.products[currentSlide]?.price && <p className="text-indigo-500 font-bold mt-1">{catalog.products[currentSlide].price} {isRTL ? "ر.س" : "SAR"}</p>}
                  {catalog.products[currentSlide]?.description && <p className={`text-sm mt-2 ${dm ? "text-gray-400" : "text-gray-500"}`}>{catalog.products[currentSlide].description}</p>}
                </div>
              </div>
              <div className="flex justify-center gap-2">
                {catalog.products.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "w-6 bg-indigo-500" : dm ? "bg-gray-700" : "bg-gray-300"}`} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Share Tab */}
      {activeTab === "share" && (
        <div className="slide-in space-y-6">
          <div className={`p-6 rounded-3xl border ${dm ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}>
            <p className="font-bold mb-3">{t.shareLink}</p>
            <div className={`flex gap-2 items-center p-3 rounded-2xl ${dm ? "bg-gray-800" : "bg-white"} border ${dm ? "border-gray-700" : "border-gray-200"}`}>
              <Icons.Globe />
              <span className={`flex-1 text-sm truncate ${dm ? "text-gray-400" : "text-gray-500"}`}>{publicUrl}</span>
              <button onClick={handleCopy} className={`px-4 py-1.5 rounded-xl text-sm font-semibold ${copied ? "bg-emerald-500 text-white" : "btn-primary"}`}>
                {copied ? <Icons.Check /> : t.copyLink}
              </button>
            </div>
          </div>

          {/* QR Code Mock */}
          <div className={`p-6 rounded-3xl border text-center ${dm ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}>
            <p className="font-bold mb-4">{t.qrCode}</p>
            <div className="inline-block p-4 bg-white rounded-2xl shadow-md">
              <div className="w-32 h-32 grid grid-cols-8 gap-0.5">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="rounded-sm" style={{ background: Math.random() > 0.4 ? "#000" : "transparent" }} />
                ))}
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className={`p-6 rounded-3xl border ${dm ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}>
            <p className="font-bold mb-4">{isRTL ? "مشاركة عبر" : "Share via"}</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t.shareWhatsApp, emoji: "💬", color: "bg-green-500 hover:bg-green-600" },
                { label: t.shareFacebook, emoji: "📘", color: "bg-blue-600 hover:bg-blue-700" },
                { label: t.shareEmail, emoji: "📧", color: "bg-gray-600 hover:bg-gray-700" },
              ].map(btn => (
                <button key={btn.label} onClick={() => showNotification(isRTL ? "جاري الفتح..." : "Opening...")} className={`${btn.color} text-white py-3 rounded-2xl font-semibold text-sm flex flex-col items-center gap-1 transition-colors`}>
                  <span className="text-2xl">{btn.emoji}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Zoom Modal */}
      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setZoom(null)}>
          <div className={`${dm ? "bg-gray-900" : "bg-white"} rounded-3xl overflow-hidden max-w-md w-full shadow-2xl`} onClick={e => e.stopPropagation()}>
            <div className="h-56 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${template.accentColor}22, ${template.accentColor}44)` }}>
              {zoom.image_url ? <img src={zoom.image_url} alt={zoom.name} className="w-full h-full object-contain" /> : <span className="text-7xl">🖼️</span>}
            </div>
            <div className="p-6">
              <h3 className="font-black text-xl mb-2">{zoom.name}</h3>
              {zoom.description && <p className={`text-sm mb-3 ${dm ? "text-gray-400" : "text-gray-500"}`}>{zoom.description}</p>}
              <div className="flex items-center justify-between">
                {zoom.price && <span className="text-indigo-500 font-black text-lg">{zoom.price} {isRTL ? "ر.س" : "SAR"}</span>}
                {zoom.sku && <span className={`text-sm ${dm ? "text-gray-500" : "text-gray-400"}`}>SKU: {zoom.sku}</span>}
              </div>
              {zoom.quantity && <p className={`text-xs mt-2 ${dm ? "text-gray-500" : "text-gray-400"}`}>{isRTL ? "الكمية:" : "Qty:"} {zoom.quantity}</p>}
              <button onClick={() => setZoom(null)} className="mt-4 w-full py-2.5 rounded-2xl font-semibold btn-primary">{isRTL ? "إغلاق" : "Close"}</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// ============================================================
// PROFILE PAGE
// ============================================================
function ProfilePage({ t, dm, user, onBack, showNotification }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 fade-in">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className={`p-2 rounded-xl ${dm ? "bg-gray-800" : "bg-gray-100"}`}>
          <Icons.ChevronLeft />
        </button>
        <h1 className="text-2xl font-black">{t.profile}</h1>
      </div>
      <div className={`${dm ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"} rounded-3xl p-8 shadow-sm`}>
        <div className="text-center mb-8">
          <div className="w-20 h-20 btn-primary rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-4">{user.name[0]}</div>
          <h2 className="font-black text-xl">{user.name}</h2>
          <p className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"}`}>{user.email}</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>{t.name}</label>
            <input value={name} onChange={e => setName(e.target.value)} className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white" : "bg-gray-50 border-gray-200"} focus:border-indigo-500 transition-colors`} />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${dm ? "text-gray-300" : "text-gray-700"}`}>{t.email}</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className={`w-full px-4 py-3 rounded-2xl border text-sm ${dm ? "bg-gray-800 border-gray-700 text-white" : "bg-gray-50 border-gray-200"} focus:border-indigo-500 transition-colors`} />
          </div>
          <button onClick={() => showNotification(t.success)} className="w-full btn-primary py-3.5 rounded-2xl font-bold">{t.updateProfile}</button>
        </div>
      </div>
    </main>
  );
}
