module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Disable unused vars
      '@typescript-eslint/no-require-imports': 'off', // Allow require() imports
      '@typescript-eslint/no-explicit-any': 'off', // Allow explicit any
    },
  },
};
