// ...existing code...
import React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    return React.createElement('h1', { className: styles.heading }, children);
}
// ...existing code...