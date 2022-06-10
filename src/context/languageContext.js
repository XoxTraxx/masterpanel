import React, { useState, useLayoutEffect } from "react";

const LangContext = React.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export function LangProvider(props) {
  const [lang, setLang] = useState(
    window.localStorage.getItem("appUILang") || window.navigator.language
  );

  useLayoutEffect(() => {
    const selectedLang = window.localStorage?.getItem("appUILang");
    console.log("selectedlang", selectedLang);
    if (selectedLang) {
      setLang(selectedLang);
    } else {
      setLang("en-US");
    }
  }, [lang]);

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem("appUILang", ln);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang],
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
}

const langData = {
  "en-US": {
    common: {
      title: "Title",
      genre: "Genre",
      link: "Read more",
      date: "Release date",
      description: "Description",
      specification: "Specification",
      weWillBackShortly: "We will get back to you shortly",
      submit: "Submit",
    },
    apis: {
      getUser: "Get User",
      getDepartment: "getDepartment",
      getStaffLocations: "Get Staff Locations",
      getAllProducts: "getAllProducts",
      getComments: "Get Comments",
      updatePhase: "Update Phase",
      addPhase: "Add Phase",
      getClient: "getClient",
      getAllSubscription: "getAllSubscription",
      getMerchants: "getMerchants",
      getAllMerchant: "getAllMerchant",
      getManufacturedIn: "getManufacturedIn",
      deleteTracePhase: "Delete Trace Phase",
      phaseProgress: "Phase Progress",
      productPhaseProgress: "Product Phase Progress",
      allTracePhases: "All Trace Phases",
      getAllTracePhases: "Get All Trace Phases",
      updateMerchant: "UpdateMerchant",
      updateClient: "updateClient",
      getIndustry: "getIndustry",
      getPackedIn: "getPackedIn",
      getAllClients: "getAllClients",
      getMerchantDetail: "getMerchantDetail",
      getAdminNotifications:'getAdminNotifications',
      getSaleBaseIndustries: "getSaleBaseIndustries",
      topPerformingIndustries: "topPerformingIndustries",
    },
    constants: {
      procress: "Procress",
    },
    app: {
      AntChain: "ANTCHAIN",
      back: "Back",
      login: "Login",
      batch: "Batch",
      phase: "Phase",
      email: "Email",
      trax: "TraX",
      text: "Text",
      submit: "Submit",
      signOut: "Sign out",
      preview: "Preview",
      save: "Save",
      login: "Login",
      back: "Back",
      sales: "Sales",
      back: "Back",
      sales: "Sales",
      preview: "Preview",
      author: "Author",
      image: "Image",
      image: "Image",
      caption: "Caption",
      addContent:'Add Page Content',
      addParagraph: "Add Paragarph",
      cataegoryTag: "Category Tag",
      postDate: "Post Date",
      antchain: "ANTCHAIN",
      Username: "Username",
      password: "Password",
      antchain: "ANTCHAIN",
      continue: "Continue",
      subAdmin: "Sub Admin",
      datedJoin: "Dated Join",
      deparment: "Department",
      remember: "Remember me",
      productId: "Product ID",
      poweredby: "Powered by",
      antchain: "ANTCHAIN",
      login: "Login",
      signOut: "Sign out",
      more: "More",
      success: "success",
      error: "error",
      return: "Return",
      industry: "Industry",
      seeAll: "See All",
      export: "Export",
      qrCode: " Qr Code",
      qty: "Qty",
      seeAll: "See All",
      phases: "Phases",
      industry: "Industry",
      factory: "Factory",
      halal: "Halal",
      yes: "Yes",
      search: "Search",
      client: "Client",
      traxPlan: "Trax Plan",
      unitSold: "Unit Sold",
      sales: "Sales",
      startDate: "Start Date",
      endDate: "End Date",
      industries: "Industries",
      distination: "destination",
      frameWork: "FRAME WORK SAMPLE",
      traxAsia: "TraX Asia Sdn. Bhd.",
      stratgicPartnerOf: "Strategic Partner of",
      buildingBrands: "BUILDING BRAND CONFIDENCE WHEN EXPORTING",
      foodandbeverages: "FOOD AND BEVERAGES SUPPLY CHAIN",
      address:
        " Lot 8.1, 8th Floor, Menara Lien Hoe, No. 8, Golf & Country Resort,Persiaran Tropicana, Tropicana, 47410 Petaling Jaya, Selangor",
      foodBebverages:
        "  Food & beverage companies face increasing legislation requirements from authorities,increasing transparency and sustainability  expectations from consumers. TraX addresses these core challenges with the same single platform, delivering a proven scalable, agile, and cost-effective solution supplyChain:Ensuring every step of your supply chain is transparent, immutable and secure",
      meetglobal: "Meet Global Market Standards",
      tracibilityTO: " Traceability Solutions to",
      salesByProduct: "Sales by Products",
      salesByLocations: "Sales by Locations",
      saleByType: "Sales by Type",
      salesbyRevnue: "Sales by Revnue",
      overSeaMoonCake: "Oversea Mooncake",
      distribution: "distribution",
      distination: "destination",
      phaseDetails: "Phase Details",
      industryDetail: "Industry Details",
      productDetail: "Product Details",
      procressProduction: "Production Procress",
      notifications: "Notifications",
      selectYear: "Select Year",
      production: "Production",
      learnMore: "Learn More",
      agriCulture: "Agriculture",
      mailLabel: "Enter Email",
      distribution: "distribution",
      overAllSale: "Overall Sales ",
      desigination: "Desiganation",
      greetings: "Welcome Back !",
      notifications: "Notifications",
      passLabel: "Enter Password",
      contactUs: "CONTACT US",
      phaseDetails: "Phase Details",
      saleByType: "Sales by Type",
      nameLabel: "Enter Username",
      ecoSys: "OUR ECOSYSTEM",
      others: "Others (Please specify)",
      productDetail: "Product Details",
      industryDetail: "Industry Details",
      resetPassword: "Reset Password",
      optimizeYour: "Optimizing Your",
      supplyChain: "Supply Chain with",
      resetLabel: "Reset Your Password",
      salesbyRevnue: "Sales by Revnue",
      salesByAllRevenue: "Sales by All ",
      productionM: "Production Manager",
      proudPartners: "PROUD PARTNERS",
      strategicPartner: "Strategic Partner Of",
      salesByProduct: "Sales by Products",
      selectedIndustry: " Select Industry ",
      viewFullProfile: " View Full Profile",
      validEmail: "Valid email is required",
      forgotPassword: "Forgot Password ?",
      allRequired: "All Fields are required",
      letsStart: "Let’s start by saying hello!",
      salesByLocations: "Sales by Locations",
      individualProduct: "Individual Product",
      missedSpot: "Oops! You missed a spot ",
      beOurTrusted: "Be Our Trusted Partner",
      overSeaMoonCake: "Oversea Mooncake",
      productionManager: "Production Manager",
      procressProduction: "Production Procress",
      clientFormPerview: "Client Form Preview",
      wantsToTrack: "Wants to Track & Trace Your",
      allHistoryCompare: "All Industries Compared",
      topPerformIndstries: "Top 3 Performing Industries",
      supplyChainSeamlessly: "Supply Chain Seamlessly?",
      increaseYourRevenue: "Increase Your Revenue While",
      questionToAsk: "Question to ask on form",
      whatToTrack: "What do you want to track?",
      passwordRequired: "Please enter password",
      trackBase: "Would want to track base on:",
      siginLabel: "Sign in to continue in TraX",
      overSeaResturant: "Oversea Resturant Group",
      allFieldRequired: "All Fields are required",
      validPhone: "Valid phone number is required",
      reserveRight: "All Right Reserved @Trax Asia",
      uploadDocumentNote: "(ie., SSM Form 24 & 49)",
      nameDuplicationError: "Name duplication error",
      howManyStage: "How many stages in your process?",
      phoneDuplicationError: "Phone duplication error",
      emailDuplicationError: "This Email is alreadty in-use",
      registerationHeading: "Registration Form (Part 1)",
      registerationHeading2: "Registration Form (Part 2)",
      wrongEmail: "Wrong Email Pattern i.e (trax@trax.com)",
      canElaborateMore: "Can you elaborate more on each phase?",
      phaseByPhase: "Describe your process, phase to phase",
      mandatoryFieldsRequired: "Mandatory fields are required",
      successFullyRegister: "SuccessFully Register",
      validPhone: "Please enter valid phone number",
      strategicPartnerTxt: "Strategic Partner of APACs",
      traxTraceability:
        "TraX traceability solutions allows you to save time, money, and the headache of merging different solutions into one.",
      traxTraceabilityDetails:
        "With our unique packaged traceability solutions, you will be able to go digital easily, even with existing systems. With additional features to ensure you get the data analytics you need to connect and upsell to your customers!",
      requiredInPhase:
        "What information is required in each phase? (Can specify?)",
      secureUnique: `SECURE UNIQUE ID’S AS \n THE FOUNDATION`,
      riskManageMent: "RISK MANAGEMENT",
      getStarted: "GET STARTED TODAY",
      wattsApp: "WhatsApp",
      moreinfo: " Contact Us for More Information",
      riskManagementDetail: ` Stop counterfeit products and illicit trade, give each of your products their own digital identity in mass volume at lower  costs. Protect your reputation, revenue and consumers. More than a serial number – a permanent unique TraX ID is create for every product, defying illegal trade.`,
      traxSolution:
        " TraX’s solution generates millions of unique and secure ID’s. The codes are carrier agnostic, which mean they can be implemented in QR codes, NFC, RFID tags, barcodes, human readable and any new technology that may arise in the future​",
      totalSaleIn22: "Total Industries Sales Performance 2022",
      mandatoryFieldsRequired: "Mandatory fields are required",
      topSaledBased: "OVERALL SALES BASED ON INDUSTRIES",
      saleBasedOnIndustry: "Sales Based On Industries",
      traceabilityDetails: "WHY IS TRACEABILITY IMPORTANT?",
      totalIndustrySalesPerformance: "Total Industry Sales Performance",
      overAllIndustry: "overall Industries Productivity",
      overAllProductivityBased: "Over All Productivity Based Industries ",
      successFullyRegister: "SuccessFully Register",
      validPhone: "Please enter valid phone number",
      stratgicPartner: "Strategic Partner",
      pressRelease: "Press Release",
      connectToYourSupplyChain:
        "CONNECT YOUR SUPPLY CHAINS IN A WHOLE NEW WAY ",
      globalChain: "Global Leader in Blockchain  ",
      taas: "TaaS",
      learnMore: "Learn More",
      coreAdvantages: "CORE ADVANTAGES",
      newWayChainig: " CONNECT YOUR SUPPLY CHAINS IN A WHOLE NEW WAY      ",
      companyPhoneRange8to9:
        "Company Phone should be between 8 to 11 digit numbers",
      taasAsServices: "Traceability as Service",
      phoneRange8to9: "Phone should be between 8 to 11 digit numbers",
      chooseToSuperadmin: "Who would you choose to be the Super Admin?",
      emailRequired: "You missed a spot! Dont forget to add your email.",
      newWayChainig: " CONNECT YOUR SUPPLY CHAINS IN A WHOLE NEW WAY      ",
      createAnAccount: "Create an account  ",
      connectYourSupplyChain: "CONNECT YOUR SUPPLY CHAINS IN A WHOLE NEW WAY",
      traxDetailsFirst:
        "  We wish to work with industry leaders and join forces to create innovative and impactful solutions for all. Contact us today and leverage on our global network and expertise to take your business to the next level.",
      traxDetails:
        "  At TraX, we believe that with our traceability solution it will optimize your revenue and create a better streamlined solution to meet your customers needs. We also understands that companies need to be flexible with budget and digitising their business and we wish to work with partners that share the same goal as us.",
      authenticationSolutionDetails:
        "TraX authenticator prevents any grey area in supply chains. Every QR code is unique and helps manage any fraud or quality control issues.",
      digitalizeDetails:
        "TraX allows users to be onboard to the system and track important key touch points. Data is stored digitally, which is more efficient, manageable and prevents any human error.",
      qrcodeScanningDetails:
        "QR Code Scanning. TraX QR code function allows an easy way for users to retrieve data without having to go through manual process. It functions as a way to add on a product story through short video content, product information and more.",
      dataAnalyticsDetails:
        "TraX data analytics not only has details on the product journey and production, but also the end users’ habits. This allows companies to manage Their marketing spends and strategies based on the systematic data received from the end users.",
      validPass:
        "Password should be valid 1 uppercase 1 special character and minimum 8 length",
      antchainFoundDes:
        " AntChain, founded in 2015, is a global leader in blockchain, providing blockchain solutions to thousands of enterprises,  developers and public sectors. Committed to the success of its customers, AntChain provides reliable and robust blockchain solutions. AntChain provide wide range of solutions to support any size business, allow business to utilized blockchain technology tofurther enhance brand perception and value as well as to expand intonew business models.",
      letYou:
        "Let us help you to empower your enterprise to coordinate, manage and share supply chain data. As well as creating brand confidence with your existing customers and the market through tactical campaigns via unique QR codes for your products.",
      emailHasBeenSent:
        "An email has been sent to your email address please check your email to reset your password",
    },
  },

  ml: {
    common: { weWillBackShortly: "We will get back to you shortly" },
    app: {
      productId: "Product ID",
    },
  },
};
