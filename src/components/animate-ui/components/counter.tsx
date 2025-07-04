'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps, type Transition } from 'motion/react';

import {
  SlidingNumber,
  type SlidingNumberProps,
} from '@/components/animate-ui/text/sliding-number';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CounterProps = HTMLMotionProps<'div'> & {
  number: number;
  setNumber: (number: number) => void;
  slidingNumberProps?: Omit<SlidingNumberProps, 'number'>;
  buttonProps?: Omit<React.ComponentProps<typeof Button>, 'onClick'>;
  transition?: Transition;
};

function Counter({
  number,
  setNumber,
  className,
  slidingNumberProps,
  buttonProps,
  transition = { type: 'spring', bounce: 0, stiffness: 300, damping: 30 },
  ...props
}: CounterProps) {
  return (
    <motion.div
      data-slot="counter"
      layout
      transition={transition}
      className={cn(
        'flex items-center bg-[#222] rounded-lg px-2 py-1',
        className,
      )}
      {...props}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          {...buttonProps}
          onClick={() => setNumber(number - 1)}
          className={cn(
            'bg-[#111] rounded-lg text-white text-lg font-light w-8 h-8 flex items-center justify-center',
            buttonProps?.className,
          )}
        >
          -
        </Button>
      </motion.div>

      <SlidingNumber
        number={number}
        {...slidingNumberProps}
        className={cn('text-base text-white mx-3', slidingNumberProps?.className)}
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          {...buttonProps}
          onClick={() => setNumber(number + 1)}
          className={cn(
            'bg-[#111] rounded-lg text-white text-lg font-light w-8 h-8 flex items-center justify-center',
            buttonProps?.className,
          )}
        >
          +
        </Button>
      </motion.div>
    </motion.div>
  );
}

export { Counter, type CounterProps };
