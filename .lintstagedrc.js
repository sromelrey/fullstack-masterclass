const config = {
  '**/*.{ts,tsx,js,jsx}': [
    'eslint --fix',
  ],
  '**/*.{ts,tsx}': [
    () => 'tsc --noEmit',
  ],
};

export default config;
