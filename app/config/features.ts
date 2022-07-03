export const features = [
  {
    imageSrc: './images/icon-access-anywhere.svg',
    name: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    imageSrc: './images/icon-security.svg',
    name: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    imageSrc: './images/icon-collaboration.svg',
    name: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    imageSrc: './images/icon-any-file.svg',
    name: 'Store any type of file',
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
].map((feature, index) => ({ id: index + 1, ...feature }))
