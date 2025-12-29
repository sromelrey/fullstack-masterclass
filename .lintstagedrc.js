export default {
  '**/*.{ts,tsx,js,jsx}': [
    'eslint --fix',
  ],
  '**/*.{ts,tsx}': [
    () => 'tsc --noEmit',
  ],
};
