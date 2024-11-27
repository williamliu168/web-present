import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PasswordFormProps {
  onSubmit: (e: React.FormEvent) => void;
  password: string;
  setPassword: (value: string) => void;
  error: boolean;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ 
  onSubmit, 
  password, 
  setPassword, 
  error 
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Enter presentation password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 
            ${error ? 'border-red-500' : 'focus:border-blue-400'}`}
        />
        {error && (
          <p className="text-sm text-red-400">Incorrect password. Please try again.</p>
        )}
      </div>
      <Button 
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
      >
        Access Presentation
      </Button>
    </form>
  );
};

export default PasswordForm;
