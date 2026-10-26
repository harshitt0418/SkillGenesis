export default function Button({
  children,
  variant = 'primary',
  arrow = true,
  arrowDirection = 'right',
  className = '',
  onClick,
  type = 'button',
  ...rest
}) {
  const variantClass = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    dark: 'btn-dark',
  }[variant] || 'btn-primary';

  const arrowSymbol = arrowDirection === 'down' ? '↓' : '→';

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
      {arrow && <span className="btn-icon-arrow">{arrowSymbol}</span>}
    </button>
  );
}
