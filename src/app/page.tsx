import { GradientBackground } from '@/components/presentation/GradientBackground';
import PasswordProtectedLanding from '@/components/auth/PasswordProtectedLanding';

export default function Home() {
  return (
    <main>
      <div className="relative isolate min-h-screen dark:bg-gray-900/95">
        <GradientBackground />
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full" style={{ 
            maxWidth: 'min(90vw, 1200px)',
            minHeight: 'min(80vh, 800px)'
          }}>
            <PasswordProtectedLanding />
          </div>
        </div>
      </div>
    </main>
  );
}