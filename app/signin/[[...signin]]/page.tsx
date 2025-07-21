import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: '#FF4040',
            colorBackground: '#0B0B0F',
            colorText: '#EDEDED',
            colorInputBackground: '#1C1C1E',
            colorInputText: '#EDEDED',
          },
          elements: { 
            card: 'shadow-lg rounded-2xl border border-white/10 bg-black/40',
            formButtonPrimary: 'rounded-lg',
            socialButtonsBlockButton: 'rounded-lg border-white/10 hover:bg-white/10',
            socialButtonsProviderIcon: 'invert(1)',
            dividerLine: 'bg-white/10',
            formFieldInput: 'border-white/20'
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
