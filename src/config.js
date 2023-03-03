module.exports = {
    email: 'ermibling13@gmail.com',

    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/ermi2021',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/ErmiyasZeleke2',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/ermidev',
        },
    ],

    navLinks: [
        {
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Skills',
            url: '/#skills'
        },
        {
            name: 'Experience',
            url: '/#jobs',
        },
        {
            name: 'Work',
            url: '/#projects',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],

    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),

    colors: {
        green: '#162B22',
        navy: '#729F83',
        darkNavy: '#80A0B5',
    },
}