# Phone Life - E-commerce & Repair Booking

A modern React web application for phone repair services and accessories e-commerce, inspired by the Phone Life store design.

## Features

### 🔧 Repair Booking System
- Multi-step booking form
- Device selection (Smartphone, Tablet, Laptop)
- Brand and model selection
- Repair type selection with pricing
- Date and time appointment scheduling
- Service type selection (Classic/VIP)
- Customer information collection

### 🛒 E-commerce Features
- Product catalog with categories
- Shopping cart functionality
- Checkout process
- Delivery options
- Product filtering and sorting

### 🌐 Internationalization
- French and English support
- Language switcher
- Localized content

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS styling
- Orange and black theme matching Phone Life branding

### ⚡ Performance
- Code splitting with lazy loading
- Redux state management with persistence
- Optimized bundle size

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Forms**: React Hook Form
- **Date Picker**: react-datepicker
- **Icons**: Lucide React
- **Internationalization**: react-i18next

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── booking/         # Booking form components
│   ├── products/        # Product-related components
│   ├── cart/           # Shopping cart components
│   └── admin/          # Admin dashboard components
├── pages/              # Page components
├── redux/              # Redux store and slices
├── services/           # API services
├── utils/              # Utility functions and constants
├── i18n/              # Internationalization files
└── styles/            # CSS files
```

## Available Routes

- `/` - Home page with booking form
- `/accessories` - Product catalog
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/admin` - Admin dashboard

## Admin Dashboard

Access the admin dashboard at `/admin` to manage:
- Appointments and bookings
- Product catalog
- Orders and customers
- Analytics (coming soon)

## Future Enhancements

- Stripe payment integration
- PDF generation for receipts
- Email notifications
- Customer accounts
- Reviews and ratings
- Live chat support