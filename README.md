# Modern Tech Presentation

A password-protected presentation deck built with Next.js and Tailwind CSS.

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd modern_tech_presentation
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Copy the environment template
cp .env.template .env.local

# Edit .env.local and set your password
NEXT_PUBLIC_PRESENTATION_PASSWORD=your_secure_password
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

- `NEXT_PUBLIC_PRESENTATION_PASSWORD`: The password required to access the presentation

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- shadcn/ui components

## Security Note

Make sure to never commit your `.env.local` file to version control. The password should be kept secure and only shared with intended users.