import { To } from 'history';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  Ref,
} from 'react';
import { Link } from 'remix';

export type BaseButtonProps = {
  href?: To;
  disabled?: boolean;
};

export type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type AnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const BaseButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps | AnchorProps
>(({ href = null, ...props }, ref) => {
  if (
    (href && typeof href === 'object') ||
    (href && typeof href === 'string' && href.startsWith('/'))
  ) {
    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} to={href}>
        {props.children}
      </Link>
    );
  }

  if (href) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a {...(props as AnchorProps)} ref={ref as Ref<HTMLAnchorElement>} />
    );
  }

  return (
    <button {...(props as ButtonProps)} ref={ref as Ref<HTMLButtonElement>} />
  );
});

const baseButtonClasses = 'flex items-center justify-center cursor-pointer';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const classes = `border border-slate-500 rounded-lg p-2 leading-none`;

    return (
      <BaseButton
        {...props}
        ref={ref}
        className={`${baseButtonClasses} ${classes} ${props.className ?? ''}`}
      />
    );
  }
);
