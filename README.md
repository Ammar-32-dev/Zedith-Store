# Zedith Store

A modern fashion e-commerce storefront built with Next.js 13+, Tailwind CSS, and Stripe integration. Features include product listings, shopping cart functionality, and secure checkout.

## Features

- 🛍️ Product listing with grid view
- 🔍 Product detail pages with image gallery
- 🛒 Shopping cart with persistent storage
- 💳 Stripe checkout integration
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast page loads with Next.js App Router
- 📊 Data import from CSV or Airtable
- 🔍 SEO optimized with metadata
- 🌐 Mobile-friendly interface

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   - For CSV data source:
     - Set `PRODUCT_DATA_URL` to your CSV file URL
   - For Airtable:
     - Set `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_NAME`
   - Set your Stripe keys:
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Set `NEXT_PUBLIC_BASE_URL` to your deployment URL

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Data Source Configuration

### CSV Format
Your CSV file should have the following columns:
- id
- name
- description
- price
- images (comma-separated URLs)
- category
- stock
- slug (optional, will be generated from name if not provided)

### Airtable Format
Create a table with the same columns as the CSV format above.

## Deployment

The project is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Stripe](https://stripe.com/) - Payment processing
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications
- [Hero Icons](https://heroicons.com/) - Icons

## License

MIT