export const particleOptions = {
    particles: {
        number: {
            value: 70,
        },
        color: {
            value: "#000",
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#000",
            opacity: 0.3,
            width: 1,
        },
        move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
};