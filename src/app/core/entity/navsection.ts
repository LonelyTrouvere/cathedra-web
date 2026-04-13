import { NavItem } from './navitem';

export type NavSection = {
    title: string;
    items?: NavItem[];
    url?: string;
};
