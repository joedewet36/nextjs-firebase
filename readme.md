**Restaurant Web App** 🍽️
==========================

A **Next.js** web application for restaurant management, built with **Firebase Authentication, Firestore, and Storage** for seamless user authentication, data management, and media storage.

**Features**
------------

✅ User authentication (Login/Signup with Firebase Auth)✅ Real-time menu management with Firestore✅ Secure order handling and storage✅ Image uploads for menu items using Firebase Storage✅ Server-side rendering (SSR) with Next.js for performance

**Tech Stack**
--------------

*   **Frontend**: Next.js (React, TypeScript)
    
*   **Backend**: Next.js API Routes
    
*   **Database**: Firestore (NoSQL, real-time updates)
    
*   **Auth**: Firebase Authentication (Email/Password, OAuth)
    
*   **Storage**: Firebase Storage (Image uploads)
    

**Setup Instructions**
----------------------

### **1\. Clone the Repository**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEditgit clone https://github.com/joedewet36/nextjs-firebase.git cd restaurant-web-app   `

### **2\. Install Dependencies**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEditnpm install  # or yarn install   `

### **3\. Set Up Firebase**

1.  Create a Firebase project at Firebase Console.
    
2.  Enable **Authentication**, **Firestore Database**, and **Storage**.
    
3.  Get your Firebase config (API key, Auth domain, etc.).
    
4.  Create a .env.local file and add:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   envCopyEditNEXT_PUBLIC_FIREBASE_API_KEY=your_api_key  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id  NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id   `

### **4\. Run the App Locally**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEditnpm run dev  # or yarn dev   `

The app will be live at **http://localhost:3000** 🚀

**Testing**
-----------

*   **Unit Testing**: Using Jest and React Testing Library
    
*   **Integration Testing**: Firebase Emulator Suite for local testing
    

**Design Decisions & Trade-offs**
---------------------------------

*   **Next.js for SSR & performance**
    
*   **Firestore for real-time updates** (vs. SQL for structured data)
    
*   **Firebase Auth for ease of implementation**
    
*   **Trade-off**: Firebase's pay-as-you-go model requires cost monitoring
    

**Contributing**
----------------

Pull requests are welcome! Fork the repo and submit a PR.

**License**
-----------

MIT License