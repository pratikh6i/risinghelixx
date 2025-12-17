# Rising Helix - EdTech Platform

A modern, interactive React.js Single Page Application for Rising Helix EdTech.

## 🚀 Tech Stack

- **React.js** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Stripe** - Payment processing
- **Firebase** - Authentication
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/pratikh6i/risinghelixx.git
cd risinghelixx
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Configuration

### Firebase Setup
1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password and Google providers
3. Copy your config to `src/config/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other config
}
```

### Stripe Setup
1. Get your test keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Update `src/config/stripe.js`:
```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_KEY'
```

## 🏗️ Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx    # Sticky navigation
│   ├── Footer.jsx    # Site footer
│   ├── Layout.jsx    # Page wrapper
│   ├── AuthModal.jsx # Login/Register modal
│   ├── PaymentCalculator.jsx  # Dynamic pricing
│   ├── CourseCard.jsx         # Interactive course cards
│   ├── AdvisorCard.jsx        # Flip cards
│   └── AnimatedSection.jsx    # Scroll animations
├── pages/            # Route pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── AdvisoryBoard.jsx
│   └── Contact.jsx
├── config/           # Configuration files
│   ├── firebase.js
│   └── stripe.js
├── hooks/            # Custom React hooks
│   └── useAuth.js
├── App.jsx           # Main app with routing
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## 🎨 Features

- ✨ **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Works on all device sizes
- 🔐 **Authentication** - Firebase login/register
- 💳 **Payment System** - Stripe integration with currency toggle
- 🎴 **Interactive Cards** - Flip cards for advisors, expandable course cards
- 🧭 **Client-side Routing** - No page reloads
- 🌙 **Modern Design** - Clean, whitespace-heavy with vibrant accents

## 🚢 Deployment

The app automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ by Rising Helix Team
