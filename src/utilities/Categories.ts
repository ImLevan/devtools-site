export interface Category {
    href: string;
    label: string;
}

export const allCategories: Category[] = [
    {
        href: '/', label: 'alls'
    },
    {
        href: '/categories/images', label: 'images'
    },
    {
        href: '/categories/media-files', label: 'media files'
    },
    {
        href: '/categories/components-ui', label: 'components ui'
    },
    {
        href: '/categories/code', label: 'code'
    },
    {
        href: '/categories/colors', label: 'colors'
    },
    {
        href: '/categories/icons', label: 'icons'
    },
    {
        href: '/categories/deploys', label: 'deploys'
    },
    {
        href: '/categories/web-monitor', label: 'website monitor'
    },
    {
        href: '/categories/fonts', label: 'fonts'
    }

    // add categories here
];