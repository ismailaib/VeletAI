const animations = [
    {
      left: {
        clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
        width: '50%',
        rotate: 0,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
      right: {
        clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
        width: '50%',
        rotate: 0,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },
    {
      left: {
        clipPath: 'polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)',
        width: '50%',
        rotate: 90,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
      right: {
        clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
        width: '50%',
        rotate: -90,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },
    {
      left: {
        clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
        width: '50%',
        rotate: 180,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
      right: {
        clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
        width: '50%',
        rotate: 180,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },
    {
      left: {
        clipPath: 'polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)',
        width: '50%',
        rotate: 270,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
      right: {
        clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
        width: '50%',
        rotate: 90,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },
    {
      left: {
        clipPath: 'polygon(0% 0, 0% 0, 100% 100%, 0% 100%)',
        width: '50%',
        rotate: 0,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
      right: {
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        width: '50%',
        rotate: 0,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },

    
  ];

  export default animations;