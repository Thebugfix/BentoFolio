const GradientText = ({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <span
      className={`relative inline-flex max-w-fit items-center justify-center overflow-hidden rounded-[1.25rem] backdrop-blur transition-shadow duration-500 ${className}`}
    >
      {showBorder && (
        <span
          className="pointer-events-none absolute inset-0 z-0 animate-gradient bg-cover"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%'
          }}
        >
          <span
            className="absolute inset-0 z-[-1] rounded-[1.25rem] bg-black"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </span>
      )}
      <span
        className="relative z-[2] inline-block animate-gradient bg-cover text-transparent"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%'
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default GradientText;
