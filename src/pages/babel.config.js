module.exports = {
  presets: [
    [
      'next/babel',
      {
        jsc: {
          transform: {
            react: {
              throwIfNamespace: false,
            },
          },
        },
      },
    ],
  ],
};
