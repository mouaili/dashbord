'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Button from './button';

export default function LoginForm(): JSX.Element {
  return (
    <div>
      <form className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>Connexion</h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse e-mail"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Entrez votre mot de passe"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          {/* LoginButton */}
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

const LoginButton = () => {
  const handleClick = () => {
    console.log('hello depuis le bouton');
  };
  return (
    <Button
      onClick={handleClick}
      className="flex justify-center items-center w-full mt-4 p-2 rounded text-white bg-blue-500"
      rest={{}}
    >
      Se connecter
      <ArrowRightIcon className="ml-auto h-5 font-medium pl-1 w-5 text-gray-50" />
    </Button>
  );
};
