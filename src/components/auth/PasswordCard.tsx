import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import PasswordForm from './PasswordForm';

interface PasswordCardProps {
  onSubmit: (e: React.FormEvent) => void;
  password: string;
  setPassword: (value: string) => void;
  error: boolean;
}

const PasswordCard: React.FC<PasswordCardProps> = (props) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-black/40 backdrop-blur-md border-white/10 shadow-xl">
      <CardContent className="space-y-6 p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-white/10 p-3">
            <Lock className="h-6 w-6 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">Enter Password</h1>
        </div>
        <PasswordForm {...props} />
      </CardContent>
    </Card>
  );
};

export default PasswordCard;